package services

import (
	"fmt"
	"log"

	pb "github.com/cyzhzhd/planning-poker/proto"
	gonanoid "github.com/matoous/go-nanoid/v2"
)

type PokerServer struct {
	pb.UnimplementedPokerServiceServer
}

func (s *PokerServer) CardStream(req *pb.CardRequest, stream pb.PokerService_CardStreamServer) error {
	uid, err := gonanoid.New()
	if err != nil {
		log.Println("nanoid error", err)
	}
	errch := make(chan error)

	fmt.Println("new connection with uid", uid)
	return <-errch
}
