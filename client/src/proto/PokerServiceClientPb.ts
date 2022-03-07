/**
 * @fileoverview gRPC-Web generated client stub for poker
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as proto_poker_pb from '../proto/poker_pb';


export class PokerServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorJoinGame = new grpcWeb.MethodDescriptor(
    '/poker.PokerService/JoinGame',
    grpcWeb.MethodType.UNARY,
    proto_poker_pb.InitiateRequest,
    proto_poker_pb.InitiateResponse,
    (request: proto_poker_pb.InitiateRequest) => {
      return request.serializeBinary();
    },
    proto_poker_pb.InitiateResponse.deserializeBinary
  );

  joinGame(
    request: proto_poker_pb.InitiateRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_poker_pb.InitiateResponse>;

  joinGame(
    request: proto_poker_pb.InitiateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_poker_pb.InitiateResponse) => void): grpcWeb.ClientReadableStream<proto_poker_pb.InitiateResponse>;

  joinGame(
    request: proto_poker_pb.InitiateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_poker_pb.InitiateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/poker.PokerService/JoinGame',
        request,
        metadata || {},
        this.methodDescriptorJoinGame,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/poker.PokerService/JoinGame',
    request,
    metadata || {},
    this.methodDescriptorJoinGame);
  }

  methodDescriptorSendCard = new grpcWeb.MethodDescriptor(
    '/poker.PokerService/SendCard',
    grpcWeb.MethodType.UNARY,
    proto_poker_pb.Card,
    google_protobuf_empty_pb.Empty,
    (request: proto_poker_pb.Card) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sendCard(
    request: proto_poker_pb.Card,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sendCard(
    request: proto_poker_pb.Card,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sendCard(
    request: proto_poker_pb.Card,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/poker.PokerService/SendCard',
        request,
        metadata || {},
        this.methodDescriptorSendCard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/poker.PokerService/SendCard',
    request,
    metadata || {},
    this.methodDescriptorSendCard);
  }

  methodDescriptorOperateGame = new grpcWeb.MethodDescriptor(
    '/poker.PokerService/OperateGame',
    grpcWeb.MethodType.UNARY,
    proto_poker_pb.GameStatus,
    google_protobuf_empty_pb.Empty,
    (request: proto_poker_pb.GameStatus) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  operateGame(
    request: proto_poker_pb.GameStatus,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  operateGame(
    request: proto_poker_pb.GameStatus,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  operateGame(
    request: proto_poker_pb.GameStatus,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/poker.PokerService/OperateGame',
        request,
        metadata || {},
        this.methodDescriptorOperateGame,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/poker.PokerService/OperateGame',
    request,
    metadata || {},
    this.methodDescriptorOperateGame);
  }

  methodDescriptorUserStream = new grpcWeb.MethodDescriptor(
    '/poker.PokerService/UserStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    proto_poker_pb.StreamRequest,
    proto_poker_pb.UserResponse,
    (request: proto_poker_pb.StreamRequest) => {
      return request.serializeBinary();
    },
    proto_poker_pb.UserResponse.deserializeBinary
  );

  userStream(
    request: proto_poker_pb.StreamRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<proto_poker_pb.UserResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/poker.PokerService/UserStream',
      request,
      metadata || {},
      this.methodDescriptorUserStream);
  }

  methodDescriptorGameStream = new grpcWeb.MethodDescriptor(
    '/poker.PokerService/GameStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    proto_poker_pb.StreamRequest,
    proto_poker_pb.GameStatus,
    (request: proto_poker_pb.StreamRequest) => {
      return request.serializeBinary();
    },
    proto_poker_pb.GameStatus.deserializeBinary
  );

  gameStream(
    request: proto_poker_pb.StreamRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<proto_poker_pb.GameStatus> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/poker.PokerService/GameStream',
      request,
      metadata || {},
      this.methodDescriptorGameStream);
  }

}

