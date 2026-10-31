import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { MultiLiveAnchorPanelSettings } from "../../../chatroom/model/multilive_pb.js";
import type { User } from "../../base/user_2_pb.js";
import type { LinkmicMultiLiveEnum } from "../../data/messages_pb.js";
import type { LinkmicUserInfo } from "../invite_top_host_info_pb.js";
import type { LinkerMicIdxUpdateInfo } from "./mic_update_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/linker/reply_message.proto.
 */
export declare const file_webcast_model_message_linker_reply_message: GenFile;
/**
 * @generated from message webcast.model.message.linker.reply_message.LinkerReplyContent
 */
export type LinkerReplyContent = Message<"webcast.model.message.linker.reply_message.LinkerReplyContent"> & {
    /**
     * @generated from field: int64 from_user_id = 1;
     */
    fromUserId: bigint;
    /**
     * @generated from field: int64 from_room_id = 2;
     */
    fromRoomId: bigint;
    /**
     * @generated from field: webcast.model.message.linker.reply_message.LinkmicInfo from_user_linkmic_info = 3;
     */
    fromUserLinkmicInfo?: LinkmicInfo | undefined;
    /**
     * @generated from field: int64 to_user_id = 4;
     */
    toUserId: bigint;
    /**
     * @generated from field: webcast.model.message.linker.reply_message.LinkmicInfo to_user_linkmic_info = 5;
     */
    toUserLinkmicInfo?: LinkmicInfo | undefined;
    /**
     * @generated from field: int64 link_type = 6;
     */
    linkType: bigint;
    /**
     * @generated from field: int32 reply_status = 7;
     */
    replyStatus: number;
    /**
     * @generated from field: webcast.model.message.linker.reply_message.LinkerSetting linker_setting = 8;
     */
    linkerSetting?: LinkerSetting | undefined;
    /**
     * @generated from field: webcast.model.base.user.User from_user = 9;
     */
    fromUser?: User | undefined;
    /**
     * @generated from field: webcast.model.base.user.User to_user = 10;
     */
    toUser?: User | undefined;
    /**
     * @generated from field: map<int64, string> rtc_ext_info_map = 11;
     */
    rtcExtInfoMap: {
        [key: string]: string;
    };
    /**
     * @generated from field: webcast.model.message.linker.mic_update.LinkerMicIdxUpdateInfo invitee_mic_idx_update_info = 12;
     */
    inviteeMicIdxUpdateInfo?: LinkerMicIdxUpdateInfo | undefined;
    /**
     * @generated from field: map<int64, int64> applier_mic_idx_info_map = 13;
     */
    applierMicIdxInfoMap: {
        [key: string]: bigint;
    };
    /**
     * @generated from field: webcast.model.data.LinkmicMultiLiveEnum anchor_multi_live_enum = 14;
     */
    anchorMultiLiveEnum: LinkmicMultiLiveEnum;
    /**
     * @generated from field: webcast.chatroom.model.multilive.MultiLiveAnchorPanelSettings anchor_setting_info = 15;
     */
    anchorSettingInfo?: MultiLiveAnchorPanelSettings | undefined;
    /**
     * @generated from field: int64 action_id = 16;
     */
    actionId: bigint;
    /**
     * @generated from field: repeated webcast.model.message.LinkmicUserInfo linked_users = 17;
     */
    linkedUsers: LinkmicUserInfo[];
    /**
     * @generated from field: int64 source_type = 18;
     */
    sourceType: bigint;
};
/**
 * Describes the message webcast.model.message.linker.reply_message.LinkerReplyContent.
 * Use `create(LinkerReplyContentSchema)` to create a new message.
 */
export declare const LinkerReplyContentSchema: GenMessage<LinkerReplyContent>;
/**
 * @generated from message webcast.model.message.linker.reply_message.LinkerSetting
 */
export type LinkerSetting = Message<"webcast.model.message.linker.reply_message.LinkerSetting"> & {
    /**
     * @generated from field: int64 max_member_limit = 1;
     */
    maxMemberLimit: bigint;
    /**
     * @generated from field: int64 link_type = 2;
     */
    linkType: bigint;
    /**
     * @generated from field: int32 scene = 3;
     */
    scene: number;
    /**
     * @generated from field: int64 owner_user_id = 4;
     */
    ownerUserId: bigint;
    /**
     * @generated from field: int64 owner_room_id = 5;
     */
    ownerRoomId: bigint;
    /**
     * @generated from field: int32 vendor = 6;
     */
    vendor: number;
};
/**
 * Describes the message webcast.model.message.linker.reply_message.LinkerSetting.
 * Use `create(LinkerSettingSchema)` to create a new message.
 */
export declare const LinkerSettingSchema: GenMessage<LinkerSetting>;
/**
 * @generated from message webcast.model.message.linker.reply_message.LinkmicInfo
 */
export type LinkmicInfo = Message<"webcast.model.message.linker.reply_message.LinkmicInfo"> & {
    /**
     * @generated from field: string access_key = 1;
     */
    accessKey: string;
    /**
     * @generated from field: int64 link_mic_id = 2;
     */
    linkMicId: bigint;
    /**
     * @generated from field: bool joinable = 3;
     */
    joinable: boolean;
    /**
     * @generated from field: int32 confluence_type = 4;
     */
    confluenceType: number;
    /**
     * @generated from field: string rtc_ext_info = 5;
     */
    rtcExtInfo: string;
    /**
     * @generated from field: string rtc_app_id = 6;
     */
    rtcAppId: string;
    /**
     * @generated from field: string rtc_app_sign = 7;
     */
    rtcAppSign: string;
    /**
     * @generated from field: string linkmic_id_str = 8;
     */
    linkmicIdStr: string;
    /**
     * @generated from field: int32 vendor = 9;
     */
    vendor: number;
};
/**
 * Describes the message webcast.model.message.linker.reply_message.LinkmicInfo.
 * Use `create(LinkmicInfoSchema)` to create a new message.
 */
export declare const LinkmicInfoSchema: GenMessage<LinkmicInfo>;
//# sourceMappingURL=reply_message_pb.d.ts.map