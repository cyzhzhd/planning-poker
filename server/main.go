package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"time"

	pb "github.com/cyzhzhd/planning-poker/proto"
	"github.com/cyzhzhd/planning-poker/services"
	"google.golang.org/grpc"
	"google.golang.org/grpc/keepalive"
)

var kaep = keepalive.EnforcementPolicy{
	MinTime:             5 * time.Second,
	PermitWithoutStream: true,
}

var kasp = keepalive.ServerParameters{
	MaxConnectionIdle:     60 * time.Minute,
	MaxConnectionAge:      180 * time.Minute,
	MaxConnectionAgeGrace: 5 * time.Second,
	Time:                  30 * time.Minute,
	Timeout:               3 * time.Second,
}

func main() {
	portNumberPtr := flag.Int("port", 8082, "a port number for the gRPC server")
	flag.Parse()

	fmt.Println("server started.")
	listen, err := net.Listen("tcp", fmt.Sprintf(":%d", *portNumberPtr))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer(
		grpc.KeepaliveEnforcementPolicy(kaep),
		grpc.KeepaliveParams(kasp),
	)
	pokerServer := services.PokerServer{UserStreams: make(map[string]pb.PokerService_UserStreamServer), GameStreams: make(map[string]pb.PokerService_GameStreamServer)}
	pb.RegisterPokerServiceServer(grpcServer, &pokerServer)

	err = grpcServer.Serve(listen)
	if err != nil {
		log.Fatalf("Failed to start gRPC Server :: %v", err)
	}
}
