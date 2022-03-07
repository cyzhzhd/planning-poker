package services

import (
	"context"
	"errors"
	"fmt"
	"log"
	"sync"

	pb "github.com/cyzhzhd/planning-poker/proto"
	gonanoid "github.com/matoous/go-nanoid/v2"
	"google.golang.org/protobuf/types/known/emptypb"
)

type PokerServer struct {
	pb.UnimplementedPokerServiceServer
	UserStreams  map[string]pb.PokerService_UserStreamServer
	users        []*pb.User
	usersMu      sync.Mutex
	userStreamMu sync.Mutex
	cardStreamMu sync.Mutex
}

func (s *PokerServer) JoinGame(ctx context.Context, req *pb.InitiateRequest) (*pb.InitiateResponse, error) {
	fmt.Println("JoinGame called", s.users)
	uid, err := gonanoid.New()
	if err != nil {
		log.Println("nanoid error", err)
	}

	newUser := &pb.User{Id: uid, Name: req.Name, Point: -1}
	s.usersMu.Lock()
	s.users = append(s.users, newUser)
	s.usersMu.Unlock()
	fmt.Println("user joined", s.users)

	return &pb.InitiateResponse{Uid: uid}, nil
}

func (s *PokerServer) SendCard(ctx context.Context, req *pb.Card) (*emptypb.Empty, error) {
	fmt.Println("new card", req)
	s.usersMu.Lock()
	idx := findUserindex(req.Uid, s.users)
	if idx == -1 {
		fmt.Println("user was not registered")
		return &emptypb.Empty{}, errors.New("user was not registered")
	}
	s.users[idx].Point = req.Point

	// fmt.Println("send card cardStreams", s.User)
	for idx, stream := range s.UserStreams {
		fmt.Println("card Stream idx:", idx)
		if err := stream.Send(&pb.UserResponse{Users: s.users}); err != nil {
			fmt.Println("SendCard error")
			return &emptypb.Empty{}, err
		}
	}
	s.usersMu.Unlock()

	return &emptypb.Empty{}, nil
}

func RemoveIndex(s []*pb.User, index int) []*pb.User {
	return append(s[:index], s[index+1:]...)
}
func findUserindex(id string, users []*pb.User) int {
	for idx, v := range users {
		if id == v.Id {
			return idx
		}
	}
	return -1
}

func (s *PokerServer) UserStream(req *pb.StreamRequest, stream pb.PokerService_UserStreamServer) error {
	fmt.Println("a new user stream connection with user", req.Uid)
	s.userStreamMu.Lock()
	s.UserStreams[req.Uid] = stream

	fmt.Println("users", s.users)
	fmt.Println("user streams", s.UserStreams)
	for _, stream := range s.UserStreams {
		if err := stream.Send(&pb.UserResponse{Users: s.users}); err != nil {
			fmt.Println("UserStream error")
			return err
		}
	}
	s.userStreamMu.Unlock()

	// wait until the connection disconnected
	<-stream.Context().Done()
	s.userStreamMu.Lock()
	delete(s.UserStreams, req.Uid)
	s.userStreamMu.Unlock()

	s.usersMu.Lock()
	idx := findUserindex(req.Uid, s.users)
	if idx == -1 {
		fmt.Println("user was not connected")
		return errors.New("user was not connected")
	}
	s.users = RemoveIndex(s.users, idx)

	for _, stream := range s.UserStreams {
		if err := stream.Send(&pb.UserResponse{Users: s.users}); err != nil {
			fmt.Println("UserStream error")
			return err
		}
	}
	s.usersMu.Unlock()
	fmt.Println("User stream finished with", req.Uid)
	return nil
}
