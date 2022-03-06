package services

import (
	"context"
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
	CardStreams  map[string]pb.PokerService_CardStreamServer
	users        []*pb.User
	usersMu      sync.Mutex
	userStreamMu sync.Mutex
	cardStreamMu sync.Mutex
}

func (s *PokerServer) JoinGame(ctx context.Context, req *pb.InitiateRequest) (*pb.InitiateResponse, error) {
	uid, err := gonanoid.New()
	if err != nil {
		log.Println("nanoid error", err)
	}

	s.usersMu.Lock()
	newUser := pb.User{Id: uid, Name: req.Name}
	s.users = append(s.users, &newUser)
	s.usersMu.Unlock()
	fmt.Println("new user joined", &newUser)

	return &pb.InitiateResponse{Uid: uid}, nil
}
func (s *PokerServer) SendCard(ctx context.Context, req *pb.Card) (*emptypb.Empty, error) {
	for _, stream := range s.CardStreams {
		if err := stream.Send(&pb.Card{Uid: req.Uid, UserName: req.UserName, Score: req.Score}); err != nil {
			return &emptypb.Empty{}, err
		}
	}

	return &emptypb.Empty{}, nil
}

func RemoveIndex(s []*pb.User, index int) []*pb.User {
	return append(s[:index], s[index+1:]...)
}
func findUserindex(id string, users []*pb.User) int {
	for k, v := range users {
		if id == v.Id {
			return k
		}
	}
	return -1
}

func (s *PokerServer) UserStream(req *pb.StreamRequest, stream pb.PokerService_UserStreamServer) error {
	fmt.Println("UserStream")
	s.userStreamMu.Lock()
	s.UserStreams[req.Uid] = stream
	fmt.Println("a new user stream connection with user", req.Uid)
	s.userStreamMu.Unlock()

	fmt.Println("users", s.users)
	fmt.Println("user streams", s.UserStreams)
	for _, stream := range s.UserStreams {
		if err := stream.Send(&pb.UserResponse{Users: s.users}); err != nil {
			return err
		}
	}

	// wait until the connection disconnected
	<-stream.Context().Done()
	fmt.Println("connect done")
	delete(s.UserStreams, req.Uid)
	s.users = RemoveIndex(s.users, findUserindex(req.Uid, s.users))
	for _, stream := range s.UserStreams {
		if err := stream.Send(&pb.UserResponse{Users: s.users}); err != nil {
			return err
		}
	}
	return nil
}
func (s *PokerServer) CardStream(req *pb.StreamRequest, stream pb.PokerService_CardStreamServer) error {
	fmt.Println("CardStream")
	s.cardStreamMu.Lock()
	s.CardStreams[req.Uid] = stream
	fmt.Println("a new card stream connection with user", req.Uid)
	s.cardStreamMu.Unlock()

	<-stream.Context().Done()
	return nil
}
