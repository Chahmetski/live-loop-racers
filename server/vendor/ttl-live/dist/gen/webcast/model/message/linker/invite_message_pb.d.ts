import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Tag } from "../../../chatroom/interact_model_pb.js";
import type { CohostABTestSetting, CohostTopic, OptPairInfo } from "../../../chatroom/model/interact_messages_pb.js";
import type { MultiLiveAnchorPanelSettings } from "../../../chatroom/model/multilive_pb.js";
import type { ImageModel } from "../../base/messages_pb.js";
import type { User } from "../../base/user_2_pb.js";
import type { LinkmicMultiLiveEnum } from "../../data/messages_pb.js";
import type { InviteTopHostInfo, LinkmicUserInfo, PerceptionDialogInfo, PunishEventInfo } from "../invite_top_host_info_pb.js";
import type { Hashtag } from "../../messages_pb.js";
import type { AuthenticationInfo } from "../../../shared/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/linker/invite_message.proto.
 */
export declare const file_webcast_model_message_linker_invite_message: GenFile;
/**
 * @generated from message webcast.model.message.linker.invite_message.InviterRivalExtra
 */
export type InviterRivalExtra = Message<"webcast.model.message.linker.invite_message.InviterRivalExtra"> & {
    /**
     * @generated from field: int32 texttype = 1;
     */
    texttype: number;
    /**
     * @generated from field: string text = 2;
     */
    text: string;
    /**
     * @generated from field: string label = 3;
     */
    label: string;
    /**
     * @generated from field: int32 user_count = 4;
     */
    userCount: number;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_thumb = 5;
     */
    avatarThumb?: ImageModel | undefined;
    /**
     * @generated from field: string display_id = 6;
     */
    displayId: string;
    /**
     * @generated from field: webcast.shared.AuthenticationInfo authentication_info = 7;
     */
    authenticationInfo?: AuthenticationInfo | undefined;
    /**
     * @generated from field: string nickname = 8;
     */
    nickname: string;
    /**
     * @generated from field: int64 follow_status = 9;
     */
    followStatus: bigint;
    /**
     * @generated from field: webcast.model.Hashtag hashtag = 10;
     */
    hashtag?: Hashtag | undefined;
    /**
     * @generated from field: int64 user_id = 12;
     */
    userId: bigint;
    /**
     * @generated from field: bool is_best_teammate = 13;
     */
    isBestTeammate: boolean;
    /**
     * @generated from field: webcast.chatroom.model.interact.OptPairInfo opt_pair_info = 14;
     */
    optPairInfo?: OptPairInfo | undefined;
    /**
     * @generated from field: int64 follower_count = 15;
     */
    followerCount: bigint;
};
/**
 * Describes the message webcast.model.message.linker.invite_message.InviterRivalExtra.
 * Use `create(InviterRivalExtraSchema)` to create a new message.
 */
export declare const InviterRivalExtraSchema: GenMessage<InviterRivalExtra>;
/**
 * @generated from message webcast.model.message.linker.invite_message.LinkerInviteContent
 */
export type LinkerInviteContent = Message<"webcast.model.message.linker.invite_message.LinkerInviteContent"> & {
    /**
     * @generated from field: int64 from_user_id = 1;
     */
    fromUserId: bigint;
    /**
     * @generated from field: int64 from_room_id = 2;
     */
    fromRoomId: bigint;
    /**
     * @generated from field: string to_rtc_ext_info = 3;
     */
    toRtcExtInfo: string;
    /**
     * @generated from field: bool rtc_join_channel = 4;
     */
    rtcJoinChannel: boolean;
    /**
     * @generated from field: int32 vendor = 5;
     */
    vendor: number;
    /**
     * @generated from field: string sec_from_user_id = 6;
     */
    secFromUserId: string;
    /**
     * @generated from field: string to_linkmic_id_str = 7;
     */
    toLinkmicIdStr: string;
    /**
     * @generated from field: webcast.model.base.user.User from_user = 8;
     */
    fromUser?: User | undefined;
    /**
     * @generated from field: int64 required_mic_idx = 9;
     */
    requiredMicIdx: bigint;
    /**
     * @generated from field: map<int64, string> rtc_ext_info_map = 10;
     */
    rtcExtInfoMap: {
        [key: string]: string;
    };
    /**
     * @generated from field: webcast.model.data.LinkmicMultiLiveEnum anchor_multi_live_enum = 11;
     */
    anchorMultiLiveEnum: LinkmicMultiLiveEnum;
    /**
     * @generated from field: webcast.chatroom.model.multilive.MultiLiveAnchorPanelSettings anchor_setting_info = 12;
     */
    anchorSettingInfo?: MultiLiveAnchorPanelSettings | undefined;
    /**
     * @generated from field: string inviter_linkmic_id_str = 13;
     */
    inviterLinkmicIdStr: string;
    /**
     * @generated from field: webcast.model.message.InviteTopHostInfo from_top_host_info = 16;
     */
    fromTopHostInfo?: InviteTopHostInfo | undefined;
    /**
     * @generated from field: int64 action_id = 17;
     */
    actionId: bigint;
    /**
     * @generated from field: repeated webcast.model.message.LinkmicUserInfo linked_users = 18;
     */
    linkedUsers: LinkmicUserInfo[];
    /**
     * @generated from field: webcast.model.message.PerceptionDialogInfo dialog = 19;
     */
    dialog?: PerceptionDialogInfo | undefined;
    /**
     * @generated from field: webcast.model.message.PunishEventInfo punish_info = 20;
     */
    punishInfo?: PunishEventInfo | undefined;
    /**
     * @generated from field: int32 from_room_age_restricted = 21;
     */
    fromRoomAgeRestricted: number;
    /**
     * @generated from field: webcast.chatroom.interact.model.Tag from_tag = 22;
     */
    fromTag?: Tag | undefined;
    /**
     * @generated from field: repeated webcast.chatroom.model.interact.CohostABTestSetting ab_test_setting = 23;
     */
    abTestSetting: CohostABTestSetting[];
    /**
     * @generated from field: webcast.model.message.linker.invite_message.LinkerInviteMessageExtra linker_invite_msg_extra = 101;
     */
    linkerInviteMsgExtra?: LinkerInviteMessageExtra | undefined;
};
/**
 * Describes the message webcast.model.message.linker.invite_message.LinkerInviteContent.
 * Use `create(LinkerInviteContentSchema)` to create a new message.
 */
export declare const LinkerInviteContentSchema: GenMessage<LinkerInviteContent>;
/**
 * @generated from message webcast.model.message.linker.invite_message.LinkerInviteMessageExtra
 */
export type LinkerInviteMessageExtra = Message<"webcast.model.message.linker.invite_message.LinkerInviteMessageExtra"> & {
    /**
     * @generated from field: int32 match_type = 1;
     */
    matchType: number;
    /**
     * @generated from field: int32 invite_type = 2;
     */
    inviteType: number;
    /**
     * @generated from field: int32 sub_type = 3;
     */
    subType: number;
    /**
     * @generated from field: string theme = 4;
     */
    theme: string;
    /**
     * @generated from field: int32 duration = 5;
     */
    duration: number;
    /**
     * @generated from field: int32 layout = 6;
     */
    layout: number;
    /**
     * @generated from field: string tips = 7;
     */
    tips: string;
    /**
     * @generated from field: webcast.model.message.linker.invite_message.InviterRivalExtra extra = 8;
     */
    extra?: InviterRivalExtra | undefined;
    /**
     * @generated from field: repeated webcast.model.message.linker.invite_message.InviterRivalExtra other_users = 9;
     */
    otherUsers: InviterRivalExtra[];
    /**
     * @generated from field: webcast.chatroom.model.interact.CohostTopic topic_info = 10;
     */
    topicInfo?: CohostTopic | undefined;
    /**
     * @generated from field: string algo_request_id = 11;
     */
    algoRequestId: string;
};
/**
 * Describes the message webcast.model.message.linker.invite_message.LinkerInviteMessageExtra.
 * Use `create(LinkerInviteMessageExtraSchema)` to create a new message.
 */
export declare const LinkerInviteMessageExtraSchema: GenMessage<LinkerInviteMessageExtra>;
//# sourceMappingURL=invite_message_pb.d.ts.map