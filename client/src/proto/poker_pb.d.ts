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

