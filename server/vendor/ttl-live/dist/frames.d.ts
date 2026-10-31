import type { WebcastPushFrame } from './gen/webcast/synthetic_proto_pb.js';
import type { ProtoMessageFetchResult } from './gen/webcast/shared/message_pb.js';
export declare const MESSAGE_PAYLOAD_TYPE = "msg";
export declare function decodePushFrame(input: ArrayBuffer | ArrayBufferView): WebcastPushFrame;
export declare function frameHeaders(frame: WebcastPushFrame): Map<string, string>;
export declare function frameCompressType(frame: WebcastPushFrame): string;
export declare function carriesEvents(frame: WebcastPushFrame): boolean;
export declare function decompress(frame: WebcastPushFrame): Uint8Array;
export declare function decodeBatch(payload: ArrayBuffer | ArrayBufferView): ProtoMessageFetchResult;
export declare function ackFrame(frame: WebcastPushFrame, internalExt: string): Buffer;
export declare function isTransportFrame(frame: WebcastPushFrame): boolean;
//# sourceMappingURL=frames.d.ts.map