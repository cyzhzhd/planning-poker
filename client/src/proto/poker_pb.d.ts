import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class InitiateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): InitiateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateRequest): InitiateRequest.AsObject;
  static serializeBinaryToWriter(message: InitiateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateRequest;
  static deserializeBinaryFromReader(message: InitiateRequest, reader: jspb.BinaryReader): InitiateRequest;
}

export namespace InitiateRequest {
  export type AsObject = {
    name: string,
  }
}

export class InitiateResponse extends jspb.Message {
  getUid(): string;
  setUid(value: string): InitiateResponse;

  getStatus(): string;
  setStatus(value: string): InitiateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateResponse): InitiateResponse.AsObject;
  static serializeBinaryToWriter(message: InitiateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateResponse;
  static deserializeBinaryFromReader(message: InitiateResponse, reader: jspb.BinaryReader): InitiateResponse;
}

export namespace InitiateResponse {
  export type AsObject = {
    uid: string,
    status: string,
  }
}

export class StreamRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): StreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamRequest): StreamRequest.AsObject;
  static serializeBinaryToWriter(message: StreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamRequest;
  static deserializeBinaryFromReader(message: StreamRequest, reader: jspb.BinaryReader): StreamRequest;
}

export namespace StreamRequest {
  export type AsObject = {
    uid: string,
  }
}

export class Card extends jspb.Message {
  getUid(): string;
  setUid(value: string): Card;

  getUsername(): string;
  setUsername(value: string): Card;

  getPoint(): number;
  setPoint(value: number): Card;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Card.AsObject;
  static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
  static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Card;
  static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
}

export namespace Card {
  export type AsObject = {
    uid: string,
    username: string,
    point: number,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getName(): string;
  setName(value: string): User;

  getPoint(): number;
  setPoint(value: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    name: string,
    point: number,
  }
}

export class UserResponse extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): UserResponse;
  clearUsersList(): UserResponse;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
  static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserResponse;
  static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class GameStatus extends jspb.Message {
  getOperatorid(): string;
  setOperatorid(value: string): GameStatus;

  getStatus(): string;
  setStatus(value: string): GameStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameStatus.AsObject;
  static toObject(includeInstance: boolean, msg: GameStatus): GameStatus.AsObject;
  static serializeBinaryToWriter(message: GameStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameStatus;
  static deserializeBinaryFromReader(message: GameStatus, reader: jspb.BinaryReader): GameStatus;
}

export namespace GameStatus {
  export type AsObject = {
    operatorid: string,
    status: string,
  }
}

