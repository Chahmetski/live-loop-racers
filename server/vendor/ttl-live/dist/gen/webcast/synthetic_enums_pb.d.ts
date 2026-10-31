import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file webcast/synthetic_enums.proto.
 */
export declare const file_webcast_synthetic_enums: GenFile;
/**
 * @generated from enum webcast.im.MemberMessageAction
 */
export declare enum MemberMessageAction {
    /**
     * @generated from enum value: MEMBER_MESSAGE_ACTION_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: MEMBER_MESSAGE_ACTION_JOINED = 1;
     */
    JOINED = 1,
    /**
     * @generated from enum value: MEMBER_MESSAGE_ACTION_SUBSCRIBED = 3;
     */
    SUBSCRIBED = 3
}
/**
 * Describes the enum webcast.im.MemberMessageAction.
 */
export declare const MemberMessageActionSchema: GenEnum<MemberMessageAction>;
/**
 * @generated from enum webcast.im.CommentTag
 */
export declare enum CommentTag {
    /**
     * @generated from enum value: COMMENT_TAG_NORMAL = 0;
     */
    NORMAL = 0,
    /**
     * @generated from enum value: COMMENT_TAG_CANDIDATE = 1;
     */
    CANDIDATE = 1,
    /**
     * @generated from enum value: COMMENT_TAG_OVERAGE = 2;
     */
    OVERAGE = 2
}
/**
 * Describes the enum webcast.im.CommentTag.
 */
export declare const CommentTagSchema: GenEnum<CommentTag>;
/**
 * @generated from enum webcast.im.MuteStatus
 */
export declare enum MuteStatus {
    /**
     * @generated from enum value: MUTE_STATUS_MUTE = 0;
     */
    MUTE = 0,
    /**
     * @generated from enum value: MUTE_STATUS_UN_MUTE = 1;
     */
    UN_MUTE = 1
}
/**
 * Describes the enum webcast.im.MuteStatus.
 */
export declare const MuteStatusSchema: GenEnum<MuteStatus>;
/**
 * @generated from enum webcast.im.ControlAction
 */
export declare enum ControlAction {
    /**
     * @generated from enum value: CONTROL_ACTION_FALLBACK_UNKNOWN = 0;
     */
    FALLBACK_UNKNOWN = 0,
    /**
     * @generated from enum value: CONTROL_ACTION_STREAM_PAUSED = 1;
     */
    STREAM_PAUSED = 1,
    /**
     * @generated from enum value: CONTROL_ACTION_STREAM_UNPAUSED = 2;
     */
    STREAM_UNPAUSED = 2,
    /**
     * @generated from enum value: CONTROL_ACTION_STREAM_ENDED = 3;
     */
    STREAM_ENDED = 3,
    /**
     * @generated from enum value: CONTROL_ACTION_STREAM_SUSPENDED = 4;
     */
    STREAM_SUSPENDED = 4
}
/**
 * Describes the enum webcast.im.ControlAction.
 */
export declare const ControlActionSchema: GenEnum<ControlAction>;
//# sourceMappingURL=synthetic_enums_pb.d.ts.map