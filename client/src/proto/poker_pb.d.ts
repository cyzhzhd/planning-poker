import * as jspb from 'google-protobuf'



export class CardRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): CardRequest;

  getUsername(): string;
  setUsername(value: string): CardRequest;

  getScore(): number;
  setScore(value: number): CardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CardRequest): CardRequest.AsObject;
  static serializeBinaryToWriter(message: CardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardRequest;
  static deserializeBinaryFromReader(message: CardRequest, reader: jspb.BinaryReader): CardRequest;
}

export namespace CardRequest {
  export type AsObject = {
    uid: string,
    username: string,
    score: number,
  }
}

export class CardResponse extends jspb.Message {
  getUid(): string;
  setUid(value: string): CardResponse;

  getUsername(): string;
  setUsername(value: string): CardResponse;

  getScore(): number;
  setScore(value: number): CardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CardResponse): CardResponse.AsObject;
  static serializeBinaryToWriter(message: CardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardResponse;
  static deserializeBinaryFromReader(message: CardResponse, reader: jspb.BinaryReader): CardResponse;
}

export namespace CardResponse {
  export type AsObject = {
    uid: string,
    username: string,
    score: number,
  }
}

export class StreamRequest extends jspb.Message {
  getId(): number;
  setId(value: number): StreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamRequest): StreamRequest.AsObject;
  static serializeBinaryToWriter(message: StreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamRequest;
  static deserializeBinaryFromReader(message: StreamRequest, reader: jspb.BinaryReader): StreamRequest;
}

export namespace StreamRequest {
  export type AsObject = {
    id: number,
  }
}

export class StreamMessage extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): StreamMessage;

  getUserAvartar(): string;
  setUserAvartar(value: string): StreamMessage;

  getMessage(): string;
  setMessage(value: string): StreamMessage;

  getUserName(): string;
  setUserName(value: string): StreamMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMessage.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMessage): StreamMessage.AsObject;
  static serializeBinaryToWriter(message: StreamMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMessage;
  static deserializeBinaryFromReader(message: StreamMessage, reader: jspb.BinaryReader): StreamMessage;
}

export namespace StreamMessage {
  export type AsObject = {
    userId: number,
    userAvartar: string,
    message: string,
    userName: string,
  }
}

