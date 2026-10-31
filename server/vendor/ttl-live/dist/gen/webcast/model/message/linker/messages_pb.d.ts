import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { MultiLiveAnchorPanelSettings } from "../../../chatroom/model/multilive_pb.js";
import type { KickoutReason } from "../../../linkmic/common_pb.js";
import type { User } from "../../base/user_2_pb.js";
import type { LinkmicMultiLiveEnum, LinkmicPlayType } from "../../data/messages_pb.js";
import type { ListUser } from "./linked_list_change_message_pb.js";
import type { MuteStatus } from "../../../synthetic_enums_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/linker/messages.proto.
 */
export declare const file_webcast_model_message_linker_messages: GenFile;
/**
 * @generated from message webcast.model.message.linker.LinkerAcceptNoticeContent
 */
export type LinkerAcceptNoticeContent = Message<"webcast.model.message.linker.LinkerAcceptNoticeContent"> & {
    /**
     * @generated from field: int64 from_user_id = 1;
     */
    fromUserId: bigint;
    /**
     * @generated from field: int64 from_room_id = 2;
     */
    fromRoomId: bigint;
    /**
     * @generated from field: int64 to_user_id = 3;
     */
    toUserId: bigint;
};
/**
 * Describes the message webcast.model.message.linker.LinkerAcceptNoticeContent.
 * Use `create(LinkerAcceptNoticeContentSchema)` to create a new message.
 */
export declare const LinkerAcceptNoticeContentSchema: GenMessage<LinkerAcceptNoticeContent>;
/**
 * @generated from message webcast.model.message.linker.LinkerCancelContent
 */
export type LinkerCancelContent = Message<"webcast.model.message.linker.LinkerCancelContent"> & {
    /**
     * @generated from field: int64 from_user_id = 1;
     */
    fromUserId: bigint;
    /**
     * @generated from field: int64 to_user_id = 2;
     */
    toUserId: bigint;
    /**
     * @generated from field: int32 cancel_type = 3;
     */
    cancelType: number;
    /**
     * @generated from field: int64 action_id = 4;
     */
    actionId: bigint;
};
/**
 * Describes the message webcast.model.message.linker.LinkerCancelContent.
 * Use `create(LinkerCancelContentSchema)` to create a new message.
 */
export declare const LinkerCancelContentSchema: GenMessage<LinkerCancelContent>;
/**
 * @generated from message webcast.model.message.linker.LinkerEnterContent
 */
export type LinkerEnterContent = Message<"webcast.model.message.linker.LinkerEnterContent"> & {
    /**
     * @generated from field: repeated webcast.model.message.linker.linked_list_change_message.ListUser linked_users = 1;
     */
    linkedUsers: ListUser[];
    /**
     * @generated from field: webcast.model.data.LinkmicMultiLiveEnum anchor_multi_live_enum = 2;
     */
    anchorMultiLiveEnum: LinkmicMultiLiveEnum;
    /**
     * @generated from field: webcast.chatroom.model.multilive.MultiLiveAnchorPanelSettings anchor_setting_info = 3;
     */
    anchorSettingInfo?: MultiLiveAnchorPanelSettings | undefined;
};
/**
 * Describes the message webcast.model.message.linker.LinkerEnterContent.
 * Use `create(LinkerEnterContentSchema)` to create a new message.
 */
export declare const LinkerEnterContentSchema: GenMessage<LinkerEnterContent>;
/**
 * @generated from message webcast.model.message.linker.LinkerKickOutContent
 */
export type LinkerKickOutContent = Message<"webcast.model.message.linker.LinkerKickOutContent"> & {
    /**
     * @generated from field: int64 from_user_id = 1;
     */
    fromUserId: bigint;
    /**
     * @generated from field: webcast.linkmic.common.KickoutReason kickout_reason = 2;
     */
    kickoutReason: KickoutReason;
};
/**
 * Describes the message webcast.model.message.linker.LinkerKickOutContent.
 * Use `create(LinkerKickOutContentSchema)` to create a new message.
 */
export declare const LinkerKickOutContentSchema: GenMessage<LinkerKickOutContent>;
/**
 * @generated from message webcast.model.message.linker.LinkerLeaveContent
 */
export type LinkerLeaveContent = Message<"webcast.model.message.linker.LinkerLeaveContent"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: string linkmic_id_str = 2;
     */
    linkmicIdStr: string;
    /**
     * @generated from field: int64 send_leave_uid = 3;
     */
    sendLeaveUid: bigint;
    /**
     * @generated from field: int64 leave_reason = 4;
     */
    leaveReason: bigint;
};
/**
 * Describes the message webcast.model.message.linker.LinkerLeaveContent.
 * Use `create(LinkerLeaveContentSchema)` to create a new message.
 */
export declare const LinkerLeaveContentSchema: GenMessage<LinkerLeaveContent>;
/**
 * @generated from message webcast.model.message.linker.LinkerMuteContent
 */
export type LinkerMuteContent = Message<"webcast.model.message.linker.LinkerMuteContent"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: webcast.im.MuteStatus mute_status = 2;
     */
    muteStatus: MuteStatus;
};
/**
 * Describes the message webcast.model.message.linker.LinkerMuteContent.
 * Use `create(LinkerMuteContentSchema)` to create a new message.
 */
export declare const LinkerMuteContentSchema: GenMessage<LinkerMuteContent>;
/**
 * @generated from message webcast.model.message.linker.LinkerRandomMatchContent
 */
export type LinkerRandomMatchContent = Message<"webcast.model.message.linker.LinkerRandomMatchContent"> & {
    /**
     * @generated from field: webcast.model.base.user.User user = 1;
     */
    user?: User | undefined;
    /**
     * @generated from field: int64 room_id = 2;
     */
    roomId: bigint;
    /**
     * @generated from field: int64 invite_type = 3;
     */
    inviteType: bigint;
    /**
     * @generated from field: string match_id = 4;
     */
    matchId: string;
    /**
     * @generated from field: int64 inner_channel_id = 5;
     */
    innerChannelId: bigint;
    /**
     * @generated from field: int64 source_type = 6;
     */
    sourceType: bigint;
    /**
     * @generated from field: int64 group_channel_id = 7;
     */
    groupChannelId: bigint;
    /**
     * @generated from field: webcast.model.data.LinkmicPlayType play_type = 8;
     */
    playType: LinkmicPlayType;
    /**
     * @generated from field: int64 paired_time = 9;
     */
    pairedTime: bigint;
};
/**
 * Describes the message webcast.model.message.linker.LinkerRandomMatchContent.
 * Use `create(LinkerRandomMatchContentSchema)` to create a new message.
 */
export declare const LinkerRandomMatchContentSchema: GenMessage<LinkerRandomMatchContent>;
//# sourceMappingURL=messages_pb.d.ts.map