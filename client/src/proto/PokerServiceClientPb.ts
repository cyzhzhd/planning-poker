/**
 * @fileoverview gRPC-Web generated client stub for poker
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

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

  methodDescriptorCardStream = new grpcWeb.MethodDescriptor(
    '/poker.PokerService/CardStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    proto_poker_pb.CardRequest,
    proto_poker_pb.CardResponse,
    (request: proto_poker_pb.CardRequest) => {
      return request.serializeBinary();
    },
    proto_poker_pb.CardResponse.deserializeBinary
  );

  cardStream(
    request: proto_poker_pb.CardRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<proto_poker_pb.CardResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/poker.PokerService/CardStream',
      request,
      metadata || {},
      this.methodDescriptorCardStream);
  }

}

