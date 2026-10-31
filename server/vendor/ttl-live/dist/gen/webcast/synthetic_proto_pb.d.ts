import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { CommonMessageData } from "./shared/message_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/synthetic_proto.proto.
 */
export declare const file_webcast_synthetic_proto: GenFile;
/**
 * @generated from message webcast.im.HeartBeatMessage
 */
export type HeartBeatMessage = Message<"webcast.im.HeartBeatMessage"> & {
    /**
     * @generated from field: int64 room_id = 1;
     */
    roomId: bigint;
    /**
     * @generated from field: int64 send_packet_seq_id = 2;
     */
    sendPacketSeqId: bigint;
};
/**
 * Describes the message webcast.im.HeartBeatMessage.
 * Use `create(HeartBeatMessageSchema)` to create a new message.
 */
export declare const HeartBeatMessageSchema: GenMessage<HeartBeatMessage>;
/**
 * @generated from message webcast.im.WebcastPushFrame
 */
export type WebcastPushFrame = Message<"webcast.im.WebcastPushFrame"> & {
    /**
     * @generated from field: int64 seq_id = 1;
     */
    seqId: bigint;
    /**
     * @generated from field: int64 log_id = 2;
     */
    logId: bigint;
    /**
     * @generated from field: int64 service = 3;
     */
    service: bigint;
    /**
     * @generated from field: int64 method = 4;
     */
    method: bigint;
    /**
     * @generated from field: repeated webcast.im.PushHeader headers = 5;
     */
    headers: PushHeader[];
    /**
     * @generated from field: string payload_encoding = 6;
     */
    payloadEncoding: string;
    /**
     * @generated from field: string payload_type = 7;
     */
    payloadType: string;
    /**
     * @generated from field: bytes payload = 8;
     */
    payload: Uint8Array;
};
/**
 * Describes the message webcast.im.WebcastPushFrame.
 * Use `create(WebcastPushFrameSchema)` to create a new message.
 */
export declare const WebcastPushFrameSchema: GenMessage<WebcastPushFrame>;
/**
 * @generated from message webcast.im.PushHeader
 */
export type PushHeader = Message<"webcast.im.PushHeader"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
};
/**
 * Describes the message webcast.im.PushHeader.
 * Use `create(PushHeaderSchema)` to create a new message.
 */
export declare const PushHeaderSchema: GenMessage<PushHeader>;
/**
 * @generated from message webcast.im.SystemMessage
 */
export type SystemMessage = Message<"webcast.im.SystemMessage"> & {
    /**
     * @generated from field: string description = 2;
     */
    description: string;
};
/**
 * Describes the message webcast.im.SystemMessage.
 * Use `create(SystemMessageSchema)` to create a new message.
 */
export declare const SystemMessageSchema: GenMessage<SystemMessage>;
/**
 * @generated from message webcast.im.WebcastSystemMessage
 */
export type WebcastSystemMessage = Message<"webcast.im.WebcastSystemMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: string message = 2;
     */
    message: string;
};
/**
 * Describes the message webcast.im.WebcastSystemMessage.
 * Use `create(WebcastSystemMessageSchema)` to create a new message.
 */
export declare const WebcastSystemMessageSchema: GenMessage<WebcastSystemMessage>;
/**
 * @generated from message webcast.im.WebcastImEnterRoomMessage
 */
export type WebcastImEnterRoomMessage = Message<"webcast.im.WebcastImEnterRoomMessage"> & {
    /**
     * @generated from field: int64 room_id = 1;
     */
    roomId: bigint;
    /**
     * @generated from field: string room_tag = 2;
     */
    roomTag: string;
    /**
     * @generated from field: string live_region = 3;
     */
    liveRegion: string;
    /**
     * @generated from field: int64 live_id = 4;
     */
    liveId: bigint;
    /**
     * @generated from field: string identity = 5;
     */
    identity: string;
    /**
     * @generated from field: string cursor = 6;
     */
    cursor: string;
    /**
     * @generated from field: int64 account_type = 7;
     */
    accountType: bigint;
    /**
     * @generated from field: int64 enter_unique_id = 8;
     */
    enterUniqueId: bigint;
    /**
     * @generated from field: string filter_welcome_msg = 9;
     */
    filterWelcomeMsg: string;
    /**
     * @generated from field: bool is_anchor_continue_keep_msg = 10;
     */
    isAnchorContinueKeepMsg: boolean;
};
/**
 * Describes the message webcast.im.WebcastImEnterRoomMessage.
 * Use `create(WebcastImEnterRoomMessageSchema)` to create a new message.
 */
export declare const WebcastImEnterRoomMessageSchema: GenMessage<WebcastImEnterRoomMessage>;
//# sourceMappingURL=synthetic_proto_pb.d.ts.map