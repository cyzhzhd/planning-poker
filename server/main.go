package main

import (
	"fmt"
	"log"
	"net"

	pb "github.com/cyzhzhd/planning-poker/proto"
	"github.com/cyzhzhd/planning-poker/services"
	"google.golang.org/grpc"
)

func main() {
	fmt.Println("server started")
	listen, err := net.Listen("tcp", fmt.Sprintf(":%d", 50051))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()
	pokerServer := services.PokerServer{}
	pb.RegisterPokerServiceServer(grpcServer, &pokerServer)

	err = grpcServer.Serve(listen)
	if err != nil {
		log.Fatalf("Failed to start gRPC Server :: %v", err)
	}
}