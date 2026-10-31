import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Text } from "../model/message/common_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/shared/message.proto.
 */
export declare const file_webcast_shared_message: GenFile;
/**
 * @generated from message webcast.shared.message.BaseProtoMessage
 */
export type BaseProtoMessage = Message<"webcast.shared.message.BaseProtoMessage"> & {
    /**
     * @generated from field: string method = 1;
     */
    method: string;
    /**
     * @generated from field: bytes payload = 2;
     */
    payload: Uint8Array;
    /**
     * @generated from field: int64 msg_id = 3;
     */
    msgId: bigint;
    /**
     * @generated from field: int32 msg_type = 4;
     */
    msgType: number;
    /**
     * @generated from field: int64 offset = 5;
     */
    offset: bigint;
    /**
     * @generated from field: bool is_history = 6;
     */
    isHistory: boolean;
    /**
     * @generated from field: int32 sample_flag = 7;
     */
    sampleFlag: number;
};
/**
 * Describes the message webcast.shared.message.BaseProtoMessage.
 * Use `create(BaseProtoMessageSchema)` to create a new message.
 */
export declare const BaseProtoMessageSchema: GenMessage<BaseProtoMessage>;
/**
 * @generated from message webcast.shared.message.CommonMessageData
 */
export type CommonMessageData = Message<"webcast.shared.message.CommonMessageData"> & {
    /**
     * @generated from field: string method = 1;
     */
    method: string;
    /**
     * @generated from field: int64 msg_id = 2;
     */
    msgId: bigint;
    /**
     * @generated from field: int64 room_id = 3;
     */
    roomId: bigint;
    /**
     * @generated from field: int64 create_time = 4;
     */
    createTime: bigint;
    /**
     * @generated from field: int32 monitor = 5;
     */
    monitor: number;
    /**
     * @generated from field: bool is_show_msg = 6;
     */
    isShowMsg: boolean;
    /**
     * @generated from field: string describe = 7;
     */
    describe: string;
    /**
     * @generated from field: webcast.model.message.common.Text display_text = 8;
     */
    displayText?: Text | undefined;
    /**
     * @generated from field: int64 fold_type = 9;
     */
    foldType: bigint;
    /**
     * @generated from field: int64 anchor_fold_type = 10;
     */
    anchorFoldType: bigint;
    /**
     * @generated from field: int64 priority_score = 11;
     */
    priorityScore: bigint;
    /**
     * @generated from field: string log_id = 12;
     */
    logId: string;
    /**
     * @generated from field: string msg_process_filter_k = 13;
     */
    msgProcessFilterK: string;
    /**
     * @generated from field: string msg_process_filter_v = 14;
     */
    msgProcessFilterV: string;
    /**
     * @generated from field: string from_idc = 15;
     */
    fromIdc: string;
    /**
     * @generated from field: string to_idc = 16;
     */
    toIdc: string;
    /**
     * @generated from field: repeated string filter_msg_tags = 17;
     */
    filterMsgTags: string[];
    /**
     * @generated from field: webcast.shared.message.LiveMessageSEI sei = 18;
     */
    sei?: LiveMessageSEI | undefined;
    /**
     * @generated from field: webcast.shared.message.LiveMessageID depend_root_id = 19;
     */
    dependRootId?: LiveMessageID | undefined;
    /**
     * @generated from field: webcast.shared.message.LiveMessageID depend_id = 20;
     */
    dependId?: LiveMessageID | undefined;
    /**
     * @generated from field: int64 anchor_priority_score = 21;
     */
    anchorPriorityScore: bigint;
    /**
     * @generated from field: int64 room_message_heat_level = 22;
     */
    roomMessageHeatLevel: bigint;
    /**
     * @generated from field: int64 fold_type_for_web = 23;
     */
    foldTypeForWeb: bigint;
    /**
     * @generated from field: int64 anchor_fold_type_for_web = 24;
     */
    anchorFoldTypeForWeb: bigint;
    /**
     * @generated from field: int64 client_send_time = 25;
     */
    clientSendTime: bigint;
    /**
     * @generated from field: int32 dispatch_strategy = 26;
     */
    dispatchStrategy: number;
};
/**
 * Describes the message webcast.shared.message.CommonMessageData.
 * Use `create(CommonMessageDataSchema)` to create a new message.
 */
export declare const CommonMessageDataSchema: GenMessage<CommonMessageData>;
/**
 * @generated from message webcast.shared.message.LiveMessageID
 */
export type LiveMessageID = Message<"webcast.shared.message.LiveMessageID"> & {
    /**
     * @generated from field: string primary_id = 1;
     */
    primaryId: string;
    /**
     * @generated from field: string message_scene = 2;
     */
    messageScene: string;
};
/**
 * Describes the message webcast.shared.message.LiveMessageID.
 * Use `create(LiveMessageIDSchema)` to create a new message.
 */
export declare const LiveMessageIDSchema: GenMessage<LiveMessageID>;
/**
 * @generated from message webcast.shared.message.LiveMessageSEI
 */
export type LiveMessageSEI = Message<"webcast.shared.message.LiveMessageSEI"> & {
    /**
     * @generated from field: webcast.shared.message.LiveMessageID unique_id = 1;
     */
    uniqueId?: LiveMessageID | undefined;
    /**
     * @generated from field: int64 timestamp = 2;
     */
    timestamp: bigint;
};
/**
 * Describes the message webcast.shared.message.LiveMessageSEI.
 * Use `create(LiveMessageSEISchema)` to create a new message.
 */
export declare const LiveMessageSEISchema: GenMessage<LiveMessageSEI>;
/**
 * @generated from message webcast.shared.message.ProtoMessageFetchResult
 */
export type ProtoMessageFetchResult = Message<"webcast.shared.message.ProtoMessageFetchResult"> & {
    /**
     * @generated from field: repeated webcast.shared.message.BaseProtoMessage messages = 1;
     */
    messages: BaseProtoMessage[];
    /**
     * @generated from field: string cursor = 2;
     */
    cursor: string;
    /**
     * @generated from field: int64 fetch_interval = 3;
     */
    fetchInterval: bigint;
    /**
     * @generated from field: int64 now = 4;
     */
    now: bigint;
    /**
     * @generated from field: string internal_ext = 5;
     */
    internalExt: string;
    /**
     * @generated from field: int32 fetch_type = 6;
     */
    fetchType: number;
    /**
     * @generated from field: map<string, string> route_params = 7;
     */
    routeParams: {
        [key: string]: string;
    };
    /**
     * @generated from field: int64 heartbeat_duration = 8;
     */
    heartbeatDuration: bigint;
    /**
     * @generated from field: bool need_ack = 9;
     */
    needAck: boolean;
    /**
     * @generated from field: string push_server = 10;
     */
    pushServer: string;
    /**
     * @generated from field: bool is_first = 11;
     */
    isFirst: boolean;
    /**
     * @generated from field: string history_comment_cursor = 12;
     */
    historyCommentCursor: string;
    /**
     * @generated from field: bool history_no_more = 13;
     */
    historyNoMore: boolean;
};
/**
 * Describes the message webcast.shared.message.ProtoMessageFetchResult.
 * Use `create(ProtoMessageFetchResultSchema)` to create a new message.
 */
export declare const ProtoMessageFetchResultSchema: GenMessage<ProtoMessageFetchResult>;
//# sourceMappingURL=message_pb.d.ts.map