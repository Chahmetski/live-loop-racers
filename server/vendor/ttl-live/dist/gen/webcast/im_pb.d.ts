import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Tag } from "./chatroom/interact_model_pb.js";
import type { ActivityBadgeInfo, CohostABInfo, CohostTopic, GamePlayContent, GiftGalleryBadgeInfo, OptPairInfo, RandomMatchContent, RivalsGameTag, TagV2, TopHostInfo, VirtualWaitingUser } from "./chatroom/model/interact_messages_pb.js";
import type { AgreeStatus, BackGroundImageState, CohostUserInfo, ContentPosition, GroupPlayer, GuestUserInfo, JoinType, LayoutData, LayoutState, LinkEnvelopeMessagePayload, LinkMicUserAdminType, LinkUserIdentity, LinkUserState, MigrationDetails, PosIdentity, ReplyStatus, Scene, SourceType, SpotInfo, StateType } from "./linkmic/common_pb.js";
import type { GroupChannelAllUser } from "./linkmic/common_group_channel_all_user_pb.js";
import type { ImageModel } from "./model/base/messages_pb.js";
import type { User } from "./model/base/user_2_pb.js";
import type { CohostLayoutMode, CohostNudgeInfo } from "./model/data/messages_pb.js";
import type { PerceptionDialogInfo, PunishEventInfo } from "./model/message/invite_top_host_info_pb.js";
import type { RTCExtraInfo } from "./model/message/linkcore_pb.js";
import type { Player } from "./model/message/linkcore_player_pb.js";
import type { Hashtag } from "./model/messages_pb.js";
import type { CommonMessageData } from "./shared/message_pb.js";
import type { AuthenticationInfo } from "./shared/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/im.proto.
 */
export declare const file_webcast_im: GenFile;
/**
 * @generated from message webcast.im.BizLayoutState
 */
export type BizLayoutState = Message<"webcast.im.BizLayoutState"> & {
    /**
     * @generated from field: webcast.im.MultiGuestBizLayoutExtra multi_guest_biz_layout_extra = 1;
     */
    multiGuestBizLayoutExtra?: MultiGuestBizLayoutExtra | undefined;
    /**
     * @generated from field: webcast.im.CoHostBizLayoutExtra co_host_biz_layout_extra = 2;
     */
    coHostBizLayoutExtra?: CoHostBizLayoutExtra | undefined;
};
/**
 * Describes the message webcast.im.BizLayoutState.
 * Use `create(BizLayoutStateSchema)` to create a new message.
 */
export declare const BizLayoutStateSchema: GenMessage<BizLayoutState>;
/**
 * @generated from message webcast.im.BizSpotExtra
 */
export type BizSpotExtra = Message<"webcast.im.BizSpotExtra"> & {
    /**
     * @generated from field: webcast.im.MultiGuestBizSpotExtra multi_guest_biz_spot_extra = 1;
     */
    multiGuestBizSpotExtra?: MultiGuestBizSpotExtra | undefined;
    /**
     * @generated from field: webcast.im.CoHostBizSpotExtra co_host_biz_spot_extra = 2;
     */
    coHostBizSpotExtra?: CoHostBizSpotExtra | undefined;
};
/**
 * Describes the message webcast.im.BizSpotExtra.
 * Use `create(BizSpotExtraSchema)` to create a new message.
 */
export declare const BizSpotExtraSchema: GenMessage<BizSpotExtra>;
/**
 * @generated from message webcast.im.BizSpotInfo
 */
export type BizSpotInfo = Message<"webcast.im.BizSpotInfo"> & {
    /**
     * @generated from field: int32 spot_id = 1;
     */
    spotId: number;
    /**
     * @generated from field: webcast.linkmic.common.PosIdentity pos_identity = 2;
     */
    posIdentity?: PosIdentity | undefined;
    /**
     * @generated from field: webcast.im.BizSpotExtra biz_spot_extra = 3;
     */
    bizSpotExtra?: BizSpotExtra | undefined;
};
/**
 * Describes the message webcast.im.BizSpotInfo.
 * Use `create(BizSpotInfoSchema)` to create a new message.
 */
export declare const BizSpotInfoSchema: GenMessage<BizSpotInfo>;
/**
 * @generated from message webcast.im.CancelJoinGroupContent
 */
export type CancelJoinGroupContent = Message<"webcast.im.CancelJoinGroupContent"> & {
    /**
     * @generated from field: repeated webcast.linkmic.common.GroupPlayer leaver = 1;
     */
    leaver: GroupPlayer[];
    /**
     * @generated from field: webcast.linkmic.common.GroupPlayer operator = 2;
     */
    operator?: GroupPlayer | undefined;
    /**
     * @generated from field: webcast.linkmic.common.JoinType type = 3;
     */
    type: JoinType;
    /**
     * @generated from field: webcast.linkmic.common.GroupChannelAllUser group_user = 4;
     */
    groupUser?: GroupChannelAllUser | undefined;
};
/**
 * Describes the message webcast.im.CancelJoinGroupContent.
 * Use `create(CancelJoinGroupContentSchema)` to create a new message.
 */
export declare const CancelJoinGroupContentSchema: GenMessage<CancelJoinGroupContent>;
/**
 * @generated from message webcast.im.CoHostBizLayoutExtra
 */
export type CoHostBizLayoutExtra = Message<"webcast.im.CoHostBizLayoutExtra"> & {};
/**
 * Describes the message webcast.im.CoHostBizLayoutExtra.
 * Use `create(CoHostBizLayoutExtraSchema)` to create a new message.
 */
export declare const CoHostBizLayoutExtraSchema: GenMessage<CoHostBizLayoutExtra>;
/**
 * @generated from message webcast.im.CoHostBizSpotExtra
 */
export type CoHostBizSpotExtra = Message<"webcast.im.CoHostBizSpotExtra"> & {};
/**
 * Describes the message webcast.im.CoHostBizSpotExtra.
 * Use `create(CoHostBizSpotExtraSchema)` to create a new message.
 */
export declare const CoHostBizSpotExtraSchema: GenMessage<CoHostBizSpotExtra>;
/**
 * @generated from message webcast.im.CohostContent
 */
export type CohostContent = Message<"webcast.im.CohostContent"> & {
    /**
     * @generated from field: webcast.im.JoinGroupBizContent join_group_biz_content = 1;
     */
    joinGroupBizContent?: JoinGroupBizContent | undefined;
    /**
     * @generated from field: webcast.im.PermitJoinGroupBizContent permit_join_group_biz_content = 2;
     */
    permitJoinGroupBizContent?: PermitJoinGroupBizContent | undefined;
    /**
     * @generated from field: webcast.im.ListChangeBizContent list_change_biz_content = 11;
     */
    listChangeBizContent?: ListChangeBizContent | undefined;
    /**
     * @generated from field: webcast.im.JoinGroupDirectBizContent join_group_direct_biz_content = 119;
     */
    joinGroupDirectBizContent?: JoinGroupDirectBizContent | undefined;
};
/**
 * Describes the message webcast.im.CohostContent.
 * Use `create(CohostContentSchema)` to create a new message.
 */
export declare const CohostContentSchema: GenMessage<CohostContent>;
/**
 * @generated from message webcast.im.GroupChangeContent
 */
export type GroupChangeContent = Message<"webcast.im.GroupChangeContent"> & {
    /**
     * @generated from field: webcast.linkmic.common.GroupChannelAllUser group_user = 1;
     */
    groupUser?: GroupChannelAllUser | undefined;
    /**
     * @generated from field: repeated string linked_user_ui_positions = 2;
     */
    linkedUserUiPositions: string[];
};
/**
 * Describes the message webcast.im.GroupChangeContent.
 * Use `create(GroupChangeContentSchema)` to create a new message.
 */
export declare const GroupChangeContentSchema: GenMessage<GroupChangeContent>;
/**
 * @generated from message webcast.im.InvitationReorderExtra
 */
export type InvitationReorderExtra = Message<"webcast.im.InvitationReorderExtra"> & {
    /**
     * @generated from field: int64 strategy_number = 1;
     */
    strategyNumber: bigint;
    /**
     * @generated from field: string strategy_name = 2;
     */
    strategyName: string;
    /**
     * @generated from field: double strategy_score = 3;
     */
    strategyScore: number;
};
/**
 * Describes the message webcast.im.InvitationReorderExtra.
 * Use `create(InvitationReorderExtraSchema)` to create a new message.
 */
export declare const InvitationReorderExtraSchema: GenMessage<InvitationReorderExtra>;
/**
 * @generated from message webcast.im.JoinGroupBizContent
 */
export type JoinGroupBizContent = Message<"webcast.im.JoinGroupBizContent"> & {
    /**
     * @generated from field: int32 from_room_age_restricted = 1;
     */
    fromRoomAgeRestricted: number;
    /**
     * @generated from field: webcast.chatroom.interact.model.Tag from_tag = 2;
     */
    fromTag?: Tag | undefined;
    /**
     * @generated from field: webcast.model.message.PerceptionDialogInfo dialog = 3;
     */
    dialog?: PerceptionDialogInfo | undefined;
    /**
     * @generated from field: webcast.model.message.PunishEventInfo punish_info = 4;
     */
    punishInfo?: PunishEventInfo | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.CohostTopic topic_info = 5;
     */
    topicInfo?: CohostTopic | undefined;
    /**
     * @generated from field: string algo_request_id = 6;
     */
    algoRequestId: string;
    /**
     * @generated from field: webcast.model.data.CohostLayoutMode cohost_layout_mode = 7;
     */
    cohostLayoutMode: CohostLayoutMode;
    /**
     * @generated from field: webcast.chatroom.model.interact.TagV2 tag = 8;
     */
    tag?: TagV2 | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.RivalsGameTag game_tag = 9;
     */
    gameTag?: RivalsGameTag | undefined;
    /**
     * @generated from field: string new_user_education = 11;
     */
    newUserEducation: string;
    /**
     * @generated from field: map<int64, webcast.chatroom.model.interact.CohostABInfo> ab_infos = 12;
     */
    abInfos: {
        [key: string]: CohostABInfo;
    };
    /**
     * @generated from field: int32 matched_preference_tag = 13;
     */
    matchedPreferenceTag: number;
    /**
     * @generated from field: webcast.im.JoinGroupMessageExtra join_group_msg_extra = 101;
     */
    joinGroupMsgExtra?: JoinGroupMessageExtra | undefined;
};
/**
 * Describes the message webcast.im.JoinGroupBizContent.
 * Use `create(JoinGroupBizContentSchema)` to create a new message.
 */
export declare const JoinGroupBizContentSchema: GenMessage<JoinGroupBizContent>;
/**
 * @generated from message webcast.im.JoinGroupContent
 */
export type JoinGroupContent = Message<"webcast.im.JoinGroupContent"> & {
    /**
     * @generated from field: webcast.linkmic.common.GroupChannelAllUser group_user = 1;
     */
    groupUser?: GroupChannelAllUser | undefined;
    /**
     * @generated from field: webcast.linkmic.common.GroupPlayer join_user = 2;
     */
    joinUser?: GroupPlayer | undefined;
    /**
     * @generated from field: webcast.linkmic.common.JoinType type = 3;
     */
    type: JoinType;
    /**
     * @generated from field: repeated webcast.model.message.linkcore.RTCExtraInfo group_ext_info = 4;
     */
    groupExtInfo: RTCExtraInfo[];
};
/**
 * Describes the message webcast.im.JoinGroupContent.
 * Use `create(JoinGroupContentSchema)` to create a new message.
 */
export declare const JoinGroupContentSchema: GenMessage<JoinGroupContent>;
/**
 * @generated from message webcast.im.JoinGroupDirectBizContent
 */
export type JoinGroupDirectBizContent = Message<"webcast.im.JoinGroupDirectBizContent"> & {
    /**
     * @generated from field: webcast.chatroom.model.interact.GamePlayContent gameplay_content = 1;
     */
    gameplayContent?: GamePlayContent | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.RandomMatchContent random_match_content = 2;
     */
    randomMatchContent?: RandomMatchContent | undefined;
    /**
     * @generated from field: bool skip_cancel_match = 3;
     */
    skipCancelMatch: boolean;
};
/**
 * Describes the message webcast.im.JoinGroupDirectBizContent.
 * Use `create(JoinGroupDirectBizContentSchema)` to create a new message.
 */
export declare const JoinGroupDirectBizContentSchema: GenMessage<JoinGroupDirectBizContent>;
/**
 * @generated from message webcast.im.JoinGroupDirectContent
 */
export type JoinGroupDirectContent = Message<"webcast.im.JoinGroupDirectContent"> & {
    /**
     * @generated from field: repeated webcast.model.message.linkcore.RTCExtraInfo group_ext_info = 1;
     */
    groupExtInfo: RTCExtraInfo[];
    /**
     * @generated from field: webcast.linkmic.common.GroupChannelAllUser group_user = 2;
     */
    groupUser?: GroupChannelAllUser | undefined;
    /**
     * @generated from field: webcast.linkmic.common.MigrationDetails migration_details = 3;
     */
    migrationDetails?: MigrationDetails | undefined;
    /**
     * @generated from field: repeated webcast.linkmic.common.ContentPosition content_pos = 4;
     */
    contentPos: ContentPosition[];
    /**
     * @generated from field: webcast.linkmic.common.LayoutData cross_room_layout = 5;
     */
    crossRoomLayout?: LayoutData | undefined;
};
/**
 * Describes the message webcast.im.JoinGroupDirectContent.
 * Use `create(JoinGroupDirectContentSchema)` to create a new message.
 */
export declare const JoinGroupDirectContentSchema: GenMessage<JoinGroupDirectContent>;
/**
 * @generated from message webcast.im.JoinGroupMessageExtra
 */
export type JoinGroupMessageExtra = Message<"webcast.im.JoinGroupMessageExtra"> & {
    /**
     * @generated from field: int64 source_type = 1;
     */
    sourceType: bigint;
    /**
     * @generated from field: webcast.im.RivalExtra extra = 2;
     */
    extra?: RivalExtra | undefined;
    /**
     * @generated from field: repeated webcast.im.RivalExtra other_users = 3;
     */
    otherUsers: RivalExtra[];
    /**
     * @generated from field: webcast.im.InvitationReorderExtra invitation_reorder_extra = 4;
     */
    invitationReorderExtra?: InvitationReorderExtra | undefined;
    /**
     * @generated from field: map<int64, webcast.im.RivalGuestExtras> rival_guests_map = 5;
     */
    rivalGuestsMap: {
        [key: string]: RivalGuestExtras;
    };
    /**
     * @generated from field: bool is_from_cohost_over_issue = 6;
     */
    isFromCohostOverIssue: boolean;
};
/**
 * Describes the message webcast.im.JoinGroupMessageExtra.
 * Use `create(JoinGroupMessageExtraSchema)` to create a new message.
 */
export declare const JoinGroupMessageExtraSchema: GenMessage<JoinGroupMessageExtra>;
/**
 * @generated from message webcast.im.JoinRoomDirectBizContent
 */
export type JoinRoomDirectBizContent = Message<"webcast.im.JoinRoomDirectBizContent"> & {
    /**
     * @generated from field: int64 link_type_permission = 1;
     */
    linkTypePermission: bigint;
    /**
     * @generated from field: bool is_full_position_pre_approved = 2;
     */
    isFullPositionPreApproved: boolean;
};
/**
 * Describes the message webcast.im.JoinRoomDirectBizContent.
 * Use `create(JoinRoomDirectBizContentSchema)` to create a new message.
 */
export declare const JoinRoomDirectBizContentSchema: GenMessage<JoinRoomDirectBizContent>;
/**
 * @generated from message webcast.im.JoinRoomDirectContent
 */
export type JoinRoomDirectContent = Message<"webcast.im.JoinRoomDirectContent"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player joiner = 1;
     */
    joiner?: Player | undefined;
    /**
     * @generated from field: string joiner_link_mic_id = 2;
     */
    joinerLinkMicId: string;
    /**
     * @generated from field: webcast.model.message.linkcore.RTCExtraInfo joiner_ext_info = 3;
     */
    joinerExtInfo?: RTCExtraInfo | undefined;
    /**
     * @generated from field: webcast.linkmic.common.LayoutState layout = 4;
     */
    layout?: LayoutState | undefined;
    /**
     * @generated from field: repeated webcast.linkmic.common.SpotInfo spot_list = 5;
     */
    spotList: SpotInfo[];
    /**
     * @generated from field: repeated webcast.linkmic.common.PosIdentity ui_pos = 6;
     */
    uiPos: PosIdentity[];
};
/**
 * Describes the message webcast.im.JoinRoomDirectContent.
 * Use `create(JoinRoomDirectContentSchema)` to create a new message.
 */
export declare const JoinRoomDirectContentSchema: GenMessage<JoinRoomDirectContent>;
/**
 * @generated from message webcast.im.JustDanceExtra
 */
export type JustDanceExtra = Message<"webcast.im.JustDanceExtra"> & {};
/**
 * Describes the message webcast.im.JustDanceExtra.
 * Use `create(JustDanceExtraSchema)` to create a new message.
 */
export declare const JustDanceExtraSchema: GenMessage<JustDanceExtra>;
/**
 * @generated from message webcast.im.JustDanceLayoutExtra
 */
export type JustDanceLayoutExtra = Message<"webcast.im.JustDanceLayoutExtra"> & {
    /**
     * @generated from field: string just_dance_song_title = 1;
     */
    justDanceSongTitle: string;
};
/**
 * Describes the message webcast.im.JustDanceLayoutExtra.
 * Use `create(JustDanceLayoutExtraSchema)` to create a new message.
 */
export declare const JustDanceLayoutExtraSchema: GenMessage<JustDanceLayoutExtra>;
/**
 * @generated from message webcast.im.KickOutBizContent
 */
export type KickOutBizContent = Message<"webcast.im.KickOutBizContent"> & {
    /**
     * @generated from field: webcast.model.base.user.User operator_user_info = 1;
     */
    operatorUserInfo?: User | undefined;
    /**
     * @generated from field: webcast.linkmic.common.LinkMicUserAdminType operator_link_admin_type = 2;
     */
    operatorLinkAdminType: LinkMicUserAdminType;
    /**
     * @generated from field: webcast.model.base.user.User kick_player_user_info = 3;
     */
    kickPlayerUserInfo?: User | undefined;
};
/**
 * Describes the message webcast.im.KickOutBizContent.
 * Use `create(KickOutBizContentSchema)` to create a new message.
 */
export declare const KickOutBizContentSchema: GenMessage<KickOutBizContent>;
/**
 * @generated from message webcast.im.LeaveJoinGroupContent
 */
export type LeaveJoinGroupContent = Message<"webcast.im.LeaveJoinGroupContent"> & {
    /**
     * @generated from field: webcast.linkmic.common.GroupPlayer operator = 1;
     */
    operator?: GroupPlayer | undefined;
    /**
     * @generated from field: int64 group_channel_id = 2;
     */
    groupChannelId: bigint;
    /**
     * @generated from field: string leave_source = 3;
     */
    leaveSource: string;
    /**
     * @generated from field: repeated string linked_user_ui_positions = 4;
     */
    linkedUserUiPositions: string[];
};
/**
 * Describes the message webcast.im.LeaveJoinGroupContent.
 * Use `create(LeaveJoinGroupContentSchema)` to create a new message.
 */
export declare const LeaveJoinGroupContentSchema: GenMessage<LeaveJoinGroupContent>;
/**
 * @generated from message webcast.im.LinkEnvelopeContent
 */
export type LinkEnvelopeContent = Message<"webcast.im.LinkEnvelopeContent"> & {
    /**
     * @generated from field: webcast.linkmic.common.LinkUserIdentity sender = 1;
     */
    sender?: LinkUserIdentity | undefined;
    /**
     * @generated from field: webcast.linkmic.common.LinkUserIdentity receiver = 2;
     */
    receiver?: LinkUserIdentity | undefined;
    /**
     * @generated from field: webcast.linkmic.common.LinkEnvelopeMessagePayload message_payload = 10;
     */
    messagePayload?: LinkEnvelopeMessagePayload | undefined;
};
/**
 * Describes the message webcast.im.LinkEnvelopeContent.
 * Use `create(LinkEnvelopeContentSchema)` to create a new message.
 */
export declare const LinkEnvelopeContentSchema: GenMessage<LinkEnvelopeContent>;
/**
 * @generated from message webcast.im.ListChangeBizContent
 */
export type ListChangeBizContent = Message<"webcast.im.ListChangeBizContent"> & {
    /**
     * @generated from field: map<int64, webcast.linkmic.common.CohostUserInfo> user_infos = 1;
     */
    userInfos: {
        [key: string]: CohostUserInfo;
    };
    /**
     * @generated from field: repeated webcast.chatroom.model.interact.VirtualWaitingUser waiting_users = 2;
     */
    waitingUsers: VirtualWaitingUser[];
    /**
     * @generated from field: map<int64, webcast.chatroom.model.interact.CohostABInfo> ab_infos = 3;
     */
    abInfos: {
        [key: string]: CohostABInfo;
    };
    /**
     * @generated from field: map<int64, webcast.linkmic.common.GuestUserInfo> guest_user_infos = 4;
     */
    guestUserInfos: {
        [key: string]: GuestUserInfo;
    };
    /**
     * @generated from field: webcast.chatroom.model.interact.GamePlayContent gameplay_content = 5;
     */
    gameplayContent?: GamePlayContent | undefined;
};
/**
 * Describes the message webcast.im.ListChangeBizContent.
 * Use `create(ListChangeBizContentSchema)` to create a new message.
 */
export declare const ListChangeBizContentSchema: GenMessage<ListChangeBizContent>;
/**
 * @generated from message webcast.im.MultiGuestBizLayoutExtra
 */
export type MultiGuestBizLayoutExtra = Message<"webcast.im.MultiGuestBizLayoutExtra"> & {
    /**
     * @generated from field: webcast.im.JustDanceLayoutExtra just_dance_layout_extra = 1;
     */
    justDanceLayoutExtra?: JustDanceLayoutExtra | undefined;
};
/**
 * Describes the message webcast.im.MultiGuestBizLayoutExtra.
 * Use `create(MultiGuestBizLayoutExtraSchema)` to create a new message.
 */
export declare const MultiGuestBizLayoutExtraSchema: GenMessage<MultiGuestBizLayoutExtra>;
/**
 * @generated from message webcast.im.MultiGuestBizSpotExtra
 */
export type MultiGuestBizSpotExtra = Message<"webcast.im.MultiGuestBizSpotExtra"> & {
    /**
     * @generated from field: webcast.im.SoundWareEffectExtra sound_ware_effect_extra = 1;
     */
    soundWareEffectExtra?: SoundWareEffectExtra | undefined;
    /**
     * @generated from field: webcast.im.JustDanceExtra just_dance_extra = 2;
     */
    justDanceExtra?: JustDanceExtra | undefined;
};
/**
 * Describes the message webcast.im.MultiGuestBizSpotExtra.
 * Use `create(MultiGuestBizSpotExtraSchema)` to create a new message.
 */
export declare const MultiGuestBizSpotExtraSchema: GenMessage<MultiGuestBizSpotExtra>;
/**
 * @generated from message webcast.im.P2PGroupChangeContent
 */
export type P2PGroupChangeContent = Message<"webcast.im.P2PGroupChangeContent"> & {
    /**
     * @generated from field: repeated webcast.model.message.linkcore.RTCExtraInfo group_ext_info = 1;
     */
    groupExtInfo: RTCExtraInfo[];
    /**
     * @generated from field: webcast.linkmic.common.GroupChannelAllUser group_user = 2;
     */
    groupUser?: GroupChannelAllUser | undefined;
    /**
     * @generated from field: webcast.linkmic.common.MigrationDetails migration_details = 3;
     */
    migrationDetails?: MigrationDetails | undefined;
    /**
     * @generated from field: repeated webcast.linkmic.common.ContentPosition content_pos = 4;
     */
    contentPos: ContentPosition[];
    /**
     * @generated from field: webcast.linkmic.common.LayoutData cross_room_layout = 5;
     */
    crossRoomLayout?: LayoutData | undefined;
};
/**
 * Describes the message webcast.im.P2PGroupChangeContent.
 * Use `create(P2PGroupChangeContentSchema)` to create a new message.
 */
export declare const P2PGroupChangeContentSchema: GenMessage<P2PGroupChangeContent>;
/**
 * @generated from message webcast.im.PermitJoinGroupBizContent
 */
export type PermitJoinGroupBizContent = Message<"webcast.im.PermitJoinGroupBizContent"> & {
    /**
     * @generated from field: webcast.linkmic.common.ReplyStatus reply_status = 1;
     */
    replyStatus: ReplyStatus;
    /**
     * @generated from field: webcast.linkmic.common.SourceType source_type = 2;
     */
    sourceType: SourceType;
    /**
     * @generated from field: bool skip_cancel_match = 3;
     */
    skipCancelMatch: boolean;
    /**
     * @generated from field: int32 matched_preference_tag = 4;
     */
    matchedPreferenceTag: number;
    /**
     * @generated from field: webcast.im.QuickCohostInviteeUserInfo quick_cohost_invitee_user_info = 5;
     */
    quickCohostInviteeUserInfo?: QuickCohostInviteeUserInfo | undefined;
};
/**
 * Describes the message webcast.im.PermitJoinGroupBizContent.
 * Use `create(PermitJoinGroupBizContentSchema)` to create a new message.
 */
export declare const PermitJoinGroupBizContentSchema: GenMessage<PermitJoinGroupBizContent>;
/**
 * @generated from message webcast.im.PermitJoinGroupContent
 */
export type PermitJoinGroupContent = Message<"webcast.im.PermitJoinGroupContent"> & {
    /**
     * @generated from field: webcast.linkmic.common.GroupPlayer approver = 1;
     */
    approver?: GroupPlayer | undefined;
    /**
     * @generated from field: webcast.linkmic.common.AgreeStatus agree_status = 2;
     */
    agreeStatus: AgreeStatus;
    /**
     * @generated from field: webcast.linkmic.common.JoinType type = 3;
     */
    type: JoinType;
    /**
     * @generated from field: repeated webcast.model.message.linkcore.RTCExtraInfo group_ext_info = 4;
     */
    groupExtInfo: RTCExtraInfo[];
    /**
     * @generated from field: webcast.linkmic.common.GroupChannelAllUser group_user = 5;
     */
    groupUser?: GroupChannelAllUser | undefined;
    /**
     * @generated from field: webcast.linkmic.common.MigrationDetails migration_details = 6;
     */
    migrationDetails?: MigrationDetails | undefined;
    /**
     * @generated from field: repeated string linked_user_ui_positions = 7;
     */
    linkedUserUiPositions: string[];
    /**
     * @generated from field: int32 permit_group_type = 8;
     */
    permitGroupType: number;
    /**
     * @generated from field: webcast.linkmic.common.LayoutData cross_room_layout = 9;
     */
    crossRoomLayout?: LayoutData | undefined;
};
/**
 * Describes the message webcast.im.PermitJoinGroupContent.
 * Use `create(PermitJoinGroupContentSchema)` to create a new message.
 */
export declare const PermitJoinGroupContentSchema: GenMessage<PermitJoinGroupContent>;
/**
 * @generated from message webcast.im.QuickCohostInviteeUserInfo
 */
export type QuickCohostInviteeUserInfo = Message<"webcast.im.QuickCohostInviteeUserInfo"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_thumb = 1;
     */
    avatarThumb?: ImageModel | undefined;
    /**
     * @generated from field: string nickname = 2;
     */
    nickname: string;
};
/**
 * Describes the message webcast.im.QuickCohostInviteeUserInfo.
 * Use `create(QuickCohostInviteeUserInfoSchema)` to create a new message.
 */
export declare const QuickCohostInviteeUserInfoSchema: GenMessage<QuickCohostInviteeUserInfo>;
/**
 * @generated from message webcast.im.RivalExtra
 */
export type RivalExtra = Message<"webcast.im.RivalExtra"> & {
    /**
     * @generated from field: int64 user_count = 4;
     */
    userCount: bigint;
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
     * @generated from field: webcast.chatroom.model.interact.TopHostInfo top_host_info = 11;
     */
    topHostInfo?: TopHostInfo | undefined;
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
     * @generated from field: int64 eoy_level = 15;
     */
    eoyLevel: bigint;
    /**
     * @generated from field: webcast.model.data.CohostNudgeInfo nudge_info = 16;
     */
    nudgeInfo: CohostNudgeInfo;
    /**
     * @generated from field: int64 reservation_id = 17;
     */
    reservationId: bigint;
    /**
     * @generated from field: int64 follower_count = 18;
     */
    followerCount: bigint;
    /**
     * @generated from field: webcast.chatroom.model.interact.RivalsGameTag game_tag = 19;
     */
    gameTag?: RivalsGameTag | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.GiftGalleryBadgeInfo gift_gallery_badge_info = 20;
     */
    giftGalleryBadgeInfo?: GiftGalleryBadgeInfo | undefined;
    /**
     * @generated from field: int64 room_id = 21;
     */
    roomId: bigint;
    /**
     * @generated from field: webcast.chatroom.model.interact.ActivityBadgeInfo activity_badge_info = 22;
     */
    activityBadgeInfo?: ActivityBadgeInfo | undefined;
};
/**
 * Describes the message webcast.im.RivalExtra.
 * Use `create(RivalExtraSchema)` to create a new message.
 */
export declare const RivalExtraSchema: GenMessage<RivalExtra>;
/**
 * @generated from message webcast.im.RivalGuestExtra
 */
export type RivalGuestExtra = Message<"webcast.im.RivalGuestExtra"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_thumb = 2;
     */
    avatarThumb?: ImageModel | undefined;
    /**
     * @generated from field: string nickname = 3;
     */
    nickname: string;
};
/**
 * Describes the message webcast.im.RivalGuestExtra.
 * Use `create(RivalGuestExtraSchema)` to create a new message.
 */
export declare const RivalGuestExtraSchema: GenMessage<RivalGuestExtra>;
/**
 * @generated from message webcast.im.RivalGuestExtras
 */
export type RivalGuestExtras = Message<"webcast.im.RivalGuestExtras"> & {
    /**
     * @generated from field: repeated webcast.im.RivalGuestExtra rival_guests = 1;
     */
    rivalGuests: RivalGuestExtra[];
};
/**
 * Describes the message webcast.im.RivalGuestExtras.
 * Use `create(RivalGuestExtrasSchema)` to create a new message.
 */
export declare const RivalGuestExtrasSchema: GenMessage<RivalGuestExtras>;
/**
 * @generated from message webcast.im.SoundWareEffectExtra
 */
export type SoundWareEffectExtra = Message<"webcast.im.SoundWareEffectExtra"> & {
    /**
     * @generated from field: string static_image_name = 1;
     */
    staticImageName: string;
    /**
     * @generated from field: string dynamic_image_name = 2;
     */
    dynamicImageName: string;
    /**
     * @generated from field: int64 user_right_id = 3;
     */
    userRightId: bigint;
    /**
     * @generated from field: int64 right_id = 4;
     */
    rightId: bigint;
};
/**
 * Describes the message webcast.im.SoundWareEffectExtra.
 * Use `create(SoundWareEffectExtraSchema)` to create a new message.
 */
export declare const SoundWareEffectExtraSchema: GenMessage<SoundWareEffectExtra>;
/**
 * @generated from message webcast.im.WebcastLinkMicLayoutStateMessage
 */
export type WebcastLinkMicLayoutStateMessage = Message<"webcast.im.WebcastLinkMicLayoutStateMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 channel_id = 2;
     */
    channelId: bigint;
    /**
     * @generated from field: int32 scene = 3;
     */
    scene: number;
    /**
     * @generated from field: int64 version = 4;
     */
    version: bigint;
    /**
     * @generated from field: webcast.im.BizLayoutState biz_layout_state = 5;
     */
    bizLayoutState?: BizLayoutState | undefined;
    /**
     * @generated from field: repeated webcast.im.BizSpotInfo biz_spot_list = 6;
     */
    bizSpotList: BizSpotInfo[];
};
/**
 * Describes the message webcast.im.WebcastLinkMicLayoutStateMessage.
 * Use `create(WebcastLinkMicLayoutStateMessageSchema)` to create a new message.
 */
export declare const WebcastLinkMicLayoutStateMessageSchema: GenMessage<WebcastLinkMicLayoutStateMessage>;
/**
 * @generated from message webcast.im.WebcastLinkStateMessage
 */
export type WebcastLinkStateMessage = Message<"webcast.im.WebcastLinkStateMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 channel_id = 2;
     */
    channelId: bigint;
    /**
     * @generated from field: webcast.linkmic.common.Scene scene = 3;
     */
    scene: Scene;
    /**
     * @generated from field: int64 version = 4;
     */
    version: bigint;
    /**
     * @generated from field: int32 need_ack = 5;
     */
    needAck: number;
    /**
     * @generated from field: webcast.linkmic.common.LayoutState layout = 6;
     */
    layout?: LayoutState | undefined;
    /**
     * @generated from field: repeated webcast.linkmic.common.LinkUserState user_states = 7;
     */
    userStates: LinkUserState[];
    /**
     * @generated from field: int64 client_send_time = 8;
     */
    clientSendTime: bigint;
    /**
     * @generated from field: webcast.linkmic.common.StateType state_type = 9;
     */
    stateType: StateType;
    /**
     * @generated from field: webcast.linkmic.common.BackGroundImageState background = 10;
     */
    background?: BackGroundImageState | undefined;
    /**
     * @generated from field: string wallpaper_url = 12;
     */
    wallpaperUrl: string;
    /**
     * @generated from field: repeated webcast.linkmic.common.PosIdentity ui_pos = 13;
     */
    uiPos: PosIdentity[];
    /**
     * @generated from field: repeated webcast.linkmic.common.SpotInfo spot_list = 14;
     */
    spotList: SpotInfo[];
    /**
     * @generated from field: repeated int64 audio_muted_remote_channels = 15;
     */
    audioMutedRemoteChannels: bigint[];
    /**
     * @generated from field: int32 linker_mode = 16;
     */
    linkerMode: number;
};
/**
 * Describes the message webcast.im.WebcastLinkStateMessage.
 * Use `create(WebcastLinkStateMessageSchema)` to create a new message.
 */
export declare const WebcastLinkStateMessageSchema: GenMessage<WebcastLinkStateMessage>;
/**
 * @generated from enum webcast.im.BarrageMessage_BarrageType
 */
export declare enum BarrageMessage_BarrageType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: E_COM_ORDERING = 1;
     */
    E_COM_ORDERING = 1,
    /**
     * @generated from enum value: E_COM_BUYING = 2;
     */
    E_COM_BUYING = 2,
    /**
     * @generated from enum value: NORMAL = 3;
     */
    NORMAL = 3,
    /**
     * @generated from enum value: SUBSCRIBE = 4;
     */
    SUBSCRIBE = 4,
    /**
     * @generated from enum value: EVENT_VIEW = 5;
     */
    EVENT_VIEW = 5,
    /**
     * @generated from enum value: EVENT_REGISTERED = 6;
     */
    EVENT_REGISTERED = 6,
    /**
     * @generated from enum value: SUBSCRIBE_GIFT = 7;
     */
    SUBSCRIBE_GIFT = 7,
    /**
     * @generated from enum value: USER_UPGRADE = 8;
     */
    USER_UPGRADE = 8,
    /**
     * @generated from enum value: GRADE_USER_ENTRANCE_NOTIFICATION = 9;
     */
    GRADE_USER_ENTRANCE_NOTIFICATION = 9,
    /**
     * @generated from enum value: FANS_LEVEL_UPGRADE = 10;
     */
    FANS_LEVEL_UPGRADE = 10,
    /**
     * @generated from enum value: FANS_LEVEL_ENTRANCE = 11;
     */
    FANS_LEVEL_ENTRANCE = 11,
    /**
     * @generated from enum value: GAME_PARTNERSHIP = 12;
     */
    GAME_PARTNERSHIP = 12,
    /**
     * @generated from enum value: GIFT_GALLERY = 13;
     */
    GIFT_GALLERY = 13,
    /**
     * @generated from enum value: E_COM_BOUGHT = 14;
     */
    E_COM_BOUGHT = 14,
    /**
     * @generated from enum value: ENIGMA_ENTRANCE = 15;
     */
    ENIGMA_ENTRANCE = 15,
    /**
     * @generated from enum value: COMMON_BARRAGE = 100;
     */
    COMMON_BARRAGE = 100
}
/**
 * Describes the enum webcast.im.BarrageMessage_BarrageType.
 */
export declare const BarrageMessage_BarrageTypeSchema: GenEnum<BarrageMessage_BarrageType>;
/**
 * @generated from enum webcast.im.BarrageMessage_IconDisplayType
 */
export declare enum BarrageMessage_IconDisplayType {
    /**
     * @generated from enum value: ICON_DISPLAY_TYPE_IMAGE = 0;
     */
    ICON_DISPLAY_TYPE_IMAGE = 0,
    /**
     * @generated from enum value: ICON_DISPLAY_TYPE_BADGE = 1;
     */
    ICON_DISPLAY_TYPE_BADGE = 1
}
/**
 * Describes the enum webcast.im.BarrageMessage_IconDisplayType.
 */
export declare const BarrageMessage_IconDisplayTypeSchema: GenEnum<BarrageMessage_IconDisplayType>;
/**
 * @generated from enum webcast.im.BarrageMessage_RenderType
 */
export declare enum BarrageMessage_RenderType {
    /**
     * @generated from enum value: RENDER_TYPE_NATIVE = 0;
     */
    RENDER_TYPE_NATIVE = 0,
    /**
     * @generated from enum value: RENDER_TYPE_HYBRID = 1;
     */
    RENDER_TYPE_HYBRID = 1,
    /**
     * @generated from enum value: RENDER_TYPE_ALPHA = 2;
     */
    RENDER_TYPE_ALPHA = 2
}
/**
 * Describes the enum webcast.im.BarrageMessage_RenderType.
 */
export declare const BarrageMessage_RenderTypeSchema: GenEnum<BarrageMessage_RenderType>;
/**
 * @generated from enum webcast.im.BarrageMessage_ShowType
 */
export declare enum BarrageMessage_ShowType {
    /**
     * @generated from enum value: SHOW_TYPE_NORMAL = 0;
     */
    SHOW_TYPE_NORMAL = 0,
    /**
     * @generated from enum value: SHOW_TYPE_FADE_IN_OUT = 1;
     */
    SHOW_TYPE_FADE_IN_OUT = 1
}
/**
 * Describes the enum webcast.im.BarrageMessage_ShowType.
 */
export declare const BarrageMessage_ShowTypeSchema: GenEnum<BarrageMessage_ShowType>;
/**
 * @generated from enum webcast.im.BattleCardMsgType
 */
export declare enum BattleCardMsgType {
    /**
     * @generated from enum value: UNKNOWN_CARD_ACTION = 0;
     */
    UNKNOWN_CARD_ACTION = 0,
    /**
     * @generated from enum value: CARD_OBTAIN_GUIDE = 1;
     */
    CARD_OBTAIN_GUIDE = 1,
    /**
     * @generated from enum value: USE_CRITICAL_STRIKE_CARD = 2;
     */
    USE_CRITICAL_STRIKE_CARD = 2,
    /**
     * @generated from enum value: USE_SMOKE_CARD = 3;
     */
    USE_SMOKE_CARD = 3,
    /**
     * @generated from enum value: AWARD_CARD_NOTICE = 4;
     */
    AWARD_CARD_NOTICE = 4,
    /**
     * @generated from enum value: USE_EXTRA_TIME_CARD = 5;
     */
    USE_EXTRA_TIME_CARD = 5,
    /**
     * @generated from enum value: USE_SPECIAL_EFFECT_CARD = 6;
     */
    USE_SPECIAL_EFFECT_CARD = 6,
    /**
     * @generated from enum value: USE_POTION_CARD = 7;
     */
    USE_POTION_CARD = 7,
    /**
     * @generated from enum value: USE_WAVE_CARD = 8;
     */
    USE_WAVE_CARD = 8,
    /**
     * @generated from enum value: SPECIAL_EFFECT_NOTICE = 9;
     */
    SPECIAL_EFFECT_NOTICE = 9,
    /**
     * @generated from enum value: USE_TOP_2_CARD = 10;
     */
    USE_TOP_2_CARD = 10,
    /**
     * @generated from enum value: USE_TOP_3_CARD = 11;
     */
    USE_TOP_3_CARD = 11,
    /**
     * @generated from enum value: USE_VAULT_GLOVE_CARD = 12;
     */
    USE_VAULT_GLOVE_CARD = 12
}
/**
 * Describes the enum webcast.im.BattleCardMsgType.
 */
export declare const BattleCardMsgTypeSchema: GenEnum<BattleCardMsgType>;
/**
 * @generated from enum webcast.im.BattleRewardSettle_RewardStatus
 */
export declare enum BattleRewardSettle_RewardStatus {
    /**
     * @generated from enum value: REWARD_STATUS_SUCCEED = 0;
     */
    REWARD_STATUS_SUCCEED = 0,
    /**
     * @generated from enum value: REWARD_STATUS_FAILED = 1;
     */
    REWARD_STATUS_FAILED = 1
}
/**
 * Describes the enum webcast.im.BattleRewardSettle_RewardStatus.
 */
export declare const BattleRewardSettle_RewardStatusSchema: GenEnum<BattleRewardSettle_RewardStatus>;
/**
 * @generated from enum webcast.im.BattleTaskMessageType
 */
export declare enum BattleTaskMessageType {
    /**
     * @generated from enum value: START = 0;
     */
    START = 0,
    /**
     * @generated from enum value: TASK_UPDATE = 1;
     */
    TASK_UPDATE = 1,
    /**
     * @generated from enum value: TASK_SETTLE = 2;
     */
    TASK_SETTLE = 2,
    /**
     * @generated from enum value: REWARD_SETTLE = 3;
     */
    REWARD_SETTLE = 3
}
/**
 * Describes the enum webcast.im.BattleTaskMessageType.
 */
export declare const BattleTaskMessageTypeSchema: GenEnum<BattleTaskMessageType>;
/**
 * @generated from enum webcast.im.BattleTaskSettle_Result
 */
export declare enum BattleTaskSettle_Result {
    /**
     * @generated from enum value: SUCCEED = 0;
     */
    SUCCEED = 0,
    /**
     * @generated from enum value: FAILED = 1;
     */
    FAILED = 1,
    /**
     * @generated from enum value: BOTH_SUCCEED = 2;
     */
    BOTH_SUCCEED = 2
}
/**
 * Describes the enum webcast.im.BattleTaskSettle_Result.
 */
export declare const BattleTaskSettle_ResultSchema: GenEnum<BattleTaskSettle_Result>;
/**
 * @generated from enum webcast.im.BizType
 */
export declare enum BizType {
    /**
     * @generated from enum value: DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * @generated from enum value: RETHINK_CHAT = 1;
     */
    RETHINK_CHAT = 1,
    /**
     * @generated from enum value: RETHINK_QA = 2;
     */
    RETHINK_QA = 2,
    /**
     * @generated from enum value: WARNING_TAG_CURRENT_ROOM = 3;
     */
    WARNING_TAG_CURRENT_ROOM = 3,
    /**
     * @generated from enum value: WARNING_TAG_COHOST_ROOM = 4;
     */
    WARNING_TAG_COHOST_ROOM = 4,
    /**
     * @generated from enum value: AGS_AT_RISK_OF_UNABLE_TO_COMMENT = 5;
     */
    AGS_AT_RISK_OF_UNABLE_TO_COMMENT = 5,
    /**
     * @generated from enum value: PERCEPTION_CENTER = 6;
     */
    PERCEPTION_CENTER = 6
}
/**
 * Describes the enum webcast.im.BizType.
 */
export declare const BizTypeSchema: GenEnum<BizType>;
/**
 * @generated from enum webcast.im.ContentInviteSource
 */
export declare enum ContentInviteSource {
    /**
     * @generated from enum value: INVITE_SOURCE_UNKNOWN = 0;
     */
    INVITE_SOURCE_UNKNOWN = 0,
    /**
     * @generated from enum value: INVITE_SOURCE_PANEL_GO_LIVE = 1;
     */
    INVITE_SOURCE_PANEL_GO_LIVE = 1,
    /**
     * @generated from enum value: INVITE_SOURCE_MUTUAL_NOTICE = 2;
     */
    INVITE_SOURCE_MUTUAL_NOTICE = 2,
    /**
     * @generated from enum value: INVITE_SOURCE_USER_PROFILE = 3;
     */
    INVITE_SOURCE_USER_PROFILE = 3,
    /**
     * @generated from enum value: INVITE_SOURCE_RESERVE = 4;
     */
    INVITE_SOURCE_RESERVE = 4
}
/**
 * Describes the enum webcast.im.ContentInviteSource.
 */
export declare const ContentInviteSourceSchema: GenEnum<ContentInviteSource>;
/**
 * @generated from enum webcast.im.DisplayStyle
 */
export declare enum DisplayStyle {
    /**
     * @generated from enum value: DISPLAY_STYLE_NORMAL = 0;
     */
    DISPLAY_STYLE_NORMAL = 0,
    /**
     * @generated from enum value: STAY = 1;
     */
    STAY = 1,
    /**
     * @generated from enum value: CHAT = 2;
     */
    CHAT = 2
}
/**
 * Describes the enum webcast.im.DisplayStyle.
 */
export declare const DisplayStyleSchema: GenEnum<DisplayStyle>;
/**
 * @generated from enum webcast.im.ExhibitionType
 */
export declare enum ExhibitionType {
    /**
     * @generated from enum value: EXHIBITION_TYPE_DEFAULT = 0;
     */
    EXHIBITION_TYPE_DEFAULT = 0,
    /**
     * @generated from enum value: FOLD = 1;
     */
    FOLD = 1,
    /**
     * @generated from enum value: PUBLIC_SCREEN = 2;
     */
    PUBLIC_SCREEN = 2
}
/**
 * Describes the enum webcast.im.ExhibitionType.
 */
export declare const ExhibitionTypeSchema: GenEnum<ExhibitionType>;
/**
 * @generated from enum webcast.im.GameActionType
 */
export declare enum GameActionType {
    /**
     * @generated from enum value: SHOW = 0;
     */
    SHOW = 0,
    /**
     * @generated from enum value: JUMP = 1;
     */
    JUMP = 1,
    /**
     * @generated from enum value: FOLLOW = 2;
     */
    FOLLOW = 2,
    /**
     * @generated from enum value: COMMENT = 3;
     */
    COMMENT = 3
}
/**
 * Describes the enum webcast.im.GameActionType.
 */
export declare const GameActionTypeSchema: GenEnum<GameActionType>;
/**
 * @generated from enum webcast.im.GameRankNotifyMessage_MsgType
 */
export declare enum GameRankNotifyMessage_MsgType {
    /**
     * @generated from enum value: MSG_TYPE_RANK_IN_OUT = 0;
     */
    MSG_TYPE_RANK_IN_OUT = 0,
    /**
     * @generated from enum value: MSG_TYPE_RANK_CHANGE = 1;
     */
    MSG_TYPE_RANK_CHANGE = 1,
    /**
     * @generated from enum value: MSG_TYPE_ANCHOR_ENCOURAGE = 2;
     */
    MSG_TYPE_ANCHOR_ENCOURAGE = 2,
    /**
     * @generated from enum value: MSG_TYPE_UN_KNOW = 255;
     */
    MSG_TYPE_UN_KNOW = 255
}
/**
 * Describes the enum webcast.im.GameRankNotifyMessage_MsgType.
 */
export declare const GameRankNotifyMessage_MsgTypeSchema: GenEnum<GameRankNotifyMessage_MsgType>;
/**
 * @generated from enum webcast.im.GiftMessageIgnoreConfig
 */
export declare enum GiftMessageIgnoreConfig {
    /**
     * @generated from enum value: NOT_IGNORE = 0;
     */
    NOT_IGNORE = 0,
    /**
     * @generated from enum value: IGNORE_TRAY = 1;
     */
    IGNORE_TRAY = 1,
    /**
     * @generated from enum value: IGNORE_PSM = 2;
     */
    IGNORE_PSM = 2,
    /**
     * @generated from enum value: IGNORE_TRAY_AND_PSM = 3;
     */
    IGNORE_TRAY_AND_PSM = 3
}
/**
 * Describes the enum webcast.im.GiftMessageIgnoreConfig.
 */
export declare const GiftMessageIgnoreConfigSchema: GenEnum<GiftMessageIgnoreConfig>;
/**
 * @generated from enum webcast.im.GiftMessageVersion
 */
export declare enum GiftMessageVersion {
    /**
     * @generated from enum value: NUM_0 = 0;
     */
    NUM_0 = 0,
    /**
     * @generated from enum value: NUM_1 = 1;
     */
    NUM_1 = 1
}
/**
 * Describes the enum webcast.im.GiftMessageVersion.
 */
export declare const GiftMessageVersionSchema: GenEnum<GiftMessageVersion>;
/**
 * @generated from enum webcast.im.GiftSource
 */
export declare enum GiftSource {
    /**
     * @generated from enum value: GIFT_SOURCE_UNKNOWN = 0;
     */
    GIFT_SOURCE_UNKNOWN = 0,
    /**
     * @generated from enum value: PLATFORM = 1;
     */
    PLATFORM = 1,
    /**
     * @generated from enum value: USER_BUY_RANDOM = 2;
     */
    USER_BUY_RANDOM = 2,
    /**
     * @generated from enum value: USER_BUY_SPECIFIC = 3;
     */
    USER_BUY_SPECIFIC = 3
}
/**
 * Describes the enum webcast.im.GiftSource.
 */
export declare const GiftSourceSchema: GenEnum<GiftSource>;
/**
 * @generated from enum webcast.im.HitABStatus
 */
export declare enum HitABStatus {
    /**
     * @generated from enum value: NO_HIT = 0;
     */
    NO_HIT = 0,
    /**
     * @generated from enum value: ENTER_FROM_EXTERNAL_LINK_NEW_TEXT = 1;
     */
    ENTER_FROM_EXTERNAL_LINK_NEW_TEXT = 1,
    /**
     * @generated from enum value: ENTER_FROM_RE_POST_NEW_TEXT = 2;
     */
    ENTER_FROM_RE_POST_NEW_TEXT = 2
}
/**
 * Describes the enum webcast.im.HitABStatus.
 */
export declare const HitABStatusSchema: GenEnum<HitABStatus>;
/**
 * @generated from enum webcast.im.JumpPage
 */
export declare enum JumpPage {
    /**
     * @generated from enum value: GIFT_GOAL_SOURCE = 0;
     */
    GIFT_GOAL_SOURCE = 0,
    /**
     * @generated from enum value: GIFT_ALERT_SOURCE = 1;
     */
    GIFT_ALERT_SOURCE = 1,
    /**
     * @generated from enum value: COHOST_SETTING = 2;
     */
    COHOST_SETTING = 2,
    /**
     * @generated from enum value: GIFT_ER_RANK_LIST = 3;
     */
    GIFT_ER_RANK_LIST = 3,
    /**
     * @generated from enum value: WEEKLY_GAME_RANK_LIST = 4;
     */
    WEEKLY_GAME_RANK_LIST = 4,
    /**
     * @generated from enum value: FANS_CLUB = 5;
     */
    FANS_CLUB = 5,
    /**
     * @generated from enum value: GOODY_BAG_SETTING = 6;
     */
    GOODY_BAG_SETTING = 6,
    /**
     * @generated from enum value: GAME_GUESS_SETTING = 7;
     */
    GAME_GUESS_SETTING = 7,
    /**
     * @generated from enum value: ADMIN_SETTING = 8;
     */
    ADMIN_SETTING = 8,
    /**
     * @generated from enum value: GIFT_ALERT_TTS = 9;
     */
    GIFT_ALERT_TTS = 9,
    /**
     * @generated from enum value: LIVE_GOAL = 10;
     */
    LIVE_GOAL = 10,
    /**
     * @generated from enum value: TREASURE_BOX = 11;
     */
    TREASURE_BOX = 11,
    /**
     * @generated from enum value: GAME_REWARDS = 12;
     */
    GAME_REWARDS = 12,
    /**
     * @generated from enum value: POLL = 13;
     */
    POLL = 13,
    /**
     * @generated from enum value: SUBSCRIPTION = 14;
     */
    SUBSCRIPTION = 14,
    /**
     * @generated from enum value: MONET_IZ_ATION_TIPS_SETTING = 15;
     */
    MONET_IZ_ATION_TIPS_SETTING = 15,
    /**
     * @generated from enum value: EXTENDING_COUNTDOWN = 16;
     */
    EXTENDING_COUNTDOWN = 16,
    /**
     * @generated from enum value: PLAY_TOGETHER = 17;
     */
    PLAY_TOGETHER = 17,
    /**
     * @generated from enum value: MULTI_GUEST = 18;
     */
    MULTI_GUEST = 18,
    /**
     * @generated from enum value: PARTNERSHIP = 19;
     */
    PARTNERSHIP = 19,
    /**
     * @generated from enum value: GIFT_NOTIFICATION = 20;
     */
    GIFT_NOTIFICATION = 20,
    /**
     * @generated from enum value: JUMP_PAGE_GIFT_GALLERY = 21;
     */
    JUMP_PAGE_GIFT_GALLERY = 21,
    /**
     * @generated from enum value: PK_LTE_2 = 22;
     */
    PK_LTE_2 = 22,
    /**
     * @generated from enum value: COHOST_SETTING_FOR_RANKING = 23;
     */
    COHOST_SETTING_FOR_RANKING = 23,
    /**
     * @generated from enum value: PK_GTE_3 = 24;
     */
    PK_GTE_3 = 24,
    /**
     * @generated from enum value: GIFT_LIST = 25;
     */
    GIFT_LIST = 25,
    /**
     * @generated from enum value: RANK_STICKER_SETTING = 26;
     */
    RANK_STICKER_SETTING = 26
}
/**
 * Describes the enum webcast.im.JumpPage.
 */
export declare const JumpPageSchema: GenEnum<JumpPage>;
/**
 * @generated from enum webcast.im.LinkLayerMessageType
 */
export declare enum LinkLayerMessageType {
    /**
     * @generated from enum value: LINKER_UNKNOWN = 0;
     */
    LINKER_UNKNOWN = 0,
    /**
     * @generated from enum value: LINKER_CREATE = 1;
     */
    LINKER_CREATE = 1,
    /**
     * @generated from enum value: LINKER_INVITE = 2;
     */
    LINKER_INVITE = 2,
    /**
     * @generated from enum value: LINKER_APPLY = 3;
     */
    LINKER_APPLY = 3,
    /**
     * @generated from enum value: LINKER_PERMIT = 4;
     */
    LINKER_PERMIT = 4,
    /**
     * @generated from enum value: LINKER_REPLY = 5;
     */
    LINKER_REPLY = 5,
    /**
     * @generated from enum value: LINKER_KICK_OUT = 6;
     */
    LINKER_KICK_OUT = 6,
    /**
     * @generated from enum value: LINKER_CANCEL_APPLY = 7;
     */
    LINKER_CANCEL_APPLY = 7,
    /**
     * @generated from enum value: LINKER_CANCEL_INVITE = 8;
     */
    LINKER_CANCEL_INVITE = 8,
    /**
     * @generated from enum value: LINKER_LEAVE = 9;
     */
    LINKER_LEAVE = 9,
    /**
     * @generated from enum value: LINKER_FINISH = 10;
     */
    LINKER_FINISH = 10,
    /**
     * @generated from enum value: LINKER_LIST_CHANGE = 11;
     */
    LINKER_LIST_CHANGE = 11,
    /**
     * @generated from enum value: LINKER_JOIN_DIRECT = 12;
     */
    LINKER_JOIN_DIRECT = 12,
    /**
     * @generated from enum value: LINKER_JOIN_GROUP = 13;
     */
    LINKER_JOIN_GROUP = 13,
    /**
     * @generated from enum value: LINKER_PERMIT_GROUP = 14;
     */
    LINKER_PERMIT_GROUP = 14,
    /**
     * @generated from enum value: LINKER_CANCEL_GROUP = 15;
     */
    LINKER_CANCEL_GROUP = 15,
    /**
     * @generated from enum value: LINKER_LEAVE_GROUP = 16;
     */
    LINKER_LEAVE_GROUP = 16,
    /**
     * @generated from enum value: LINKER_P_2_P_GROUP_CHANGE = 17;
     */
    LINKER_P_2_P_GROUP_CHANGE = 17,
    /**
     * @generated from enum value: LINKER_GROUP_CHANGE = 18;
     */
    LINKER_GROUP_CHANGE = 18
}
/**
 * Describes the enum webcast.im.LinkLayerMessageType.
 */
export declare const LinkLayerMessageTypeSchema: GenEnum<LinkLayerMessageType>;
/**
 * @generated from enum webcast.im.LinkMicArmies_TriggerReason
 */
export declare enum LinkMicArmies_TriggerReason {
    /**
     * @generated from enum value: LINK_MIC_ARMIES_TRIGGER_REASON_UNKNOWN = 0;
     */
    LINK_MIC_ARMIES_TRIGGER_REASON_UNKNOWN = 0,
    /**
     * @generated from enum value: SCORE_UPDATE = 1;
     */
    SCORE_UPDATE = 1,
    /**
     * @generated from enum value: BATTLE_END = 2;
     */
    BATTLE_END = 2,
    /**
     * @generated from enum value: OPT_OUT_UPDATE = 3;
     */
    OPT_OUT_UPDATE = 3,
    /**
     * @generated from enum value: KEEP_ALIVE = 4;
     */
    KEEP_ALIVE = 4,
    /**
     * @generated from enum value: EFFECT_UPDATE = 5;
     */
    EFFECT_UPDATE = 5
}
/**
 * Describes the enum webcast.im.LinkMicArmies_TriggerReason.
 */
export declare const LinkMicArmies_TriggerReasonSchema: GenEnum<LinkMicArmies_TriggerReason>;
/**
 * @generated from enum webcast.im.LinkMicBattlePunishFinish_Reason
 */
export declare enum LinkMicBattlePunishFinish_Reason {
    /**
     * @generated from enum value: TIME_UP = 0;
     */
    TIME_UP = 0,
    /**
     * @generated from enum value: CUT_SHORT = 1;
     */
    CUT_SHORT = 1
}
/**
 * Describes the enum webcast.im.LinkMicBattlePunishFinish_Reason.
 */
export declare const LinkMicBattlePunishFinish_ReasonSchema: GenEnum<LinkMicBattlePunishFinish_Reason>;
/**
 * @generated from enum webcast.im.LinkMicBattle_BattleAction
 */
export declare enum LinkMicBattle_BattleAction {
    /**
     * @generated from enum value: LINK_MIC_BATTLE_BATTLE_ACTION_UNKNOWN = 0;
     */
    LINK_MIC_BATTLE_BATTLE_ACTION_UNKNOWN = 0,
    /**
     * @generated from enum value: INVITE = 1;
     */
    INVITE = 1,
    /**
     * @generated from enum value: REJECT = 2;
     */
    REJECT = 2,
    /**
     * @generated from enum value: CANCEL = 3;
     */
    CANCEL = 3,
    /**
     * @generated from enum value: OPEN = 4;
     */
    OPEN = 4,
    /**
     * @generated from enum value: FINISH = 5;
     */
    FINISH = 5,
    /**
     * @generated from enum value: LINK_MIC_BATTLE_BATTLE_ACTION_CUT_SHORT = 6;
     */
    LINK_MIC_BATTLE_BATTLE_ACTION_CUT_SHORT = 6,
    /**
     * @generated from enum value: ACCEPT = 7;
     */
    ACCEPT = 7,
    /**
     * @generated from enum value: QUIT_APPLY = 8;
     */
    QUIT_APPLY = 8,
    /**
     * @generated from enum value: DECLINE_QUIT = 9;
     */
    DECLINE_QUIT = 9,
    /**
     * @generated from enum value: DECLINE_OFF_QUIT = 10;
     */
    DECLINE_OFF_QUIT = 10,
    /**
     * @generated from enum value: LEAVE_LINKMIC = 11;
     */
    LEAVE_LINKMIC = 11
}
/**
 * Describes the enum webcast.im.LinkMicBattle_BattleAction.
 */
export declare const LinkMicBattle_BattleActionSchema: GenEnum<LinkMicBattle_BattleAction>;
/**
 * @generated from enum webcast.im.MessageDisplayStyle
 */
export declare enum MessageDisplayStyle {
    /**
     * @generated from enum value: MESSAGE_DISPLAY_STYLE_DEFAULT = 0;
     */
    MESSAGE_DISPLAY_STYLE_DEFAULT = 0,
    /**
     * @generated from enum value: POPUP = 1;
     */
    POPUP = 1
}
/**
 * Describes the enum webcast.im.MessageDisplayStyle.
 */
export declare const MessageDisplayStyleSchema: GenEnum<MessageDisplayStyle>;
/**
 * @generated from enum webcast.im.MessageType
 */
export declare enum MessageType {
    /**
     * @generated from enum value: SUB_SUCCESS = 0;
     */
    SUB_SUCCESS = 0,
    /**
     * @generated from enum value: ANCHOR_REMINDER = 1;
     */
    ANCHOR_REMINDER = 1,
    /**
     * @generated from enum value: ENTER_ROOM_EXPIRE_SOON = 2;
     */
    ENTER_ROOM_EXPIRE_SOON = 2,
    /**
     * @generated from enum value: SUB_GOAL_CREATE_TO_ANCHOR = 3;
     */
    SUB_GOAL_CREATE_TO_ANCHOR = 3,
    /**
     * @generated from enum value: SUB_GOAL_COMPLETE_TO_AUDIENCE = 4;
     */
    SUB_GOAL_COMPLETE_TO_AUDIENCE = 4,
    /**
     * @generated from enum value: SUB_GOAL_COMPLETE_TO_ANCHOR = 5;
     */
    SUB_GOAL_COMPLETE_TO_ANCHOR = 5,
    /**
     * @generated from enum value: SUB_GIFT_TIKTOK_2_USER_NOTICE = 6;
     */
    SUB_GIFT_TIKTOK_2_USER_NOTICE = 6,
    /**
     * @generated from enum value: SUB_GIFT_TIKTOK_2_ANCHOR_NOTICE = 7;
     */
    SUB_GIFT_TIKTOK_2_ANCHOR_NOTICE = 7,
    /**
     * @generated from enum value: SUB_GIFT_T_RECEIVES_END_NOTICE = 8;
     */
    SUB_GIFT_T_RECEIVES_END_NOTICE = 8,
    /**
     * @generated from enum value: SUB_GIFTS_END_SUCCEED_ROOM_MESSAGE = 9;
     */
    SUB_GIFTS_END_SUCCEED_ROOM_MESSAGE = 9,
    /**
     * @generated from enum value: SUB_GIFTS_END_SUCCEED_ANCHOR_NOTICE = 10;
     */
    SUB_GIFTS_END_SUCCEED_ANCHOR_NOTICE = 10,
    /**
     * @generated from enum value: SUB_GIFT_LOW_VERSION_UPGRADE_NOTICE = 11;
     */
    SUB_GIFT_LOW_VERSION_UPGRADE_NOTICE = 11,
    /**
     * @generated from enum value: SUB_GIFT_USER_BUY_AU_TH_NOTICE = 12;
     */
    SUB_GIFT_USER_BUY_AU_TH_NOTICE = 12,
    /**
     * @generated from enum value: SUB_COMMON_TEXT_NOTICE = 13;
     */
    SUB_COMMON_TEXT_NOTICE = 13,
    /**
     * @generated from enum value: SUB_MODERATOR_PIN_PERK = 14;
     */
    SUB_MODERATOR_PIN_PERK = 14
}
/**
 * Describes the enum webcast.im.MessageType.
 */
export declare const MessageTypeSchema: GenEnum<MessageType>;
/**
 * @generated from enum webcast.im.MicIdxOperation
 */
export declare enum MicIdxOperation {
    /**
     * @generated from enum value: MIC_IDX_OP_ON = 0;
     */
    MIC_IDX_OP_ON = 0,
    /**
     * @generated from enum value: MIC_IDX_OP_OFF = 1;
     */
    MIC_IDX_OP_OFF = 1
}
/**
 * Describes the enum webcast.im.MicIdxOperation.
 */
export declare const MicIdxOperationSchema: GenEnum<MicIdxOperation>;
/**
 * @generated from enum webcast.im.OldSubscribeStatus
 */
export declare enum OldSubscribeStatus {
    /**
     * @generated from enum value: FIRST = 0;
     */
    FIRST = 0,
    /**
     * @generated from enum value: RESUB = 1;
     */
    RESUB = 1,
    /**
     * @generated from enum value: SUB_IN_GRACE_PERIOD = 2;
     */
    SUB_IN_GRACE_PERIOD = 2,
    /**
     * @generated from enum value: SUB_NOT_IN_GRACE_PERIOD = 3;
     */
    SUB_NOT_IN_GRACE_PERIOD = 3,
    /**
     * @generated from enum value: OLD_SUBSCRIBE_STATUS_DEFAULT = 100;
     */
    OLD_SUBSCRIBE_STATUS_DEFAULT = 100
}
/**
 * Describes the enum webcast.im.OldSubscribeStatus.
 */
export declare const OldSubscribeStatusSchema: GenEnum<OldSubscribeStatus>;
/**
 * @generated from enum webcast.im.OpType
 */
export declare enum OpType {
    /**
     * @generated from enum value: OP_TYPE_DEFAULT = 0;
     */
    OP_TYPE_DEFAULT = 0,
    /**
     * @generated from enum value: ADD = 1;
     */
    ADD = 1,
    /**
     * @generated from enum value: REMOVE = 2;
     */
    REMOVE = 2,
    /**
     * @generated from enum value: RELOAD = 3;
     */
    RELOAD = 3,
    /**
     * @generated from enum value: BASIC_EFFECT = 4;
     */
    BASIC_EFFECT = 4
}
/**
 * Describes the enum webcast.im.OpType.
 */
export declare const OpTypeSchema: GenEnum<OpType>;
/**
 * @generated from enum webcast.im.PartnershipDropsUpdateMessage_ChangeMode
 */
export declare enum PartnershipDropsUpdateMessage_ChangeMode {
    /**
     * @generated from enum value: CHANGE_MODE_SHOW = 0;
     */
    CHANGE_MODE_SHOW = 0,
    /**
     * @generated from enum value: CHANGE_MODE_UPDATE = 1;
     */
    CHANGE_MODE_UPDATE = 1,
    /**
     * @generated from enum value: CHANGE_MODE_CLOSE = 2;
     */
    CHANGE_MODE_CLOSE = 2
}
/**
 * Describes the enum webcast.im.PartnershipDropsUpdateMessage_ChangeMode.
 */
export declare const PartnershipDropsUpdateMessage_ChangeModeSchema: GenEnum<PartnershipDropsUpdateMessage_ChangeMode>;
/**
 * @generated from enum webcast.im.PartnershipGameOfflineMessage_OfflineGameInfo_OfflineType
 */
export declare enum PartnershipGameOfflineMessage_OfflineGameInfo_OfflineType {
    /**
     * @generated from enum value: TASK_OFFLINE = 0;
     */
    TASK_OFFLINE = 0,
    /**
     * @generated from enum value: EVENT_OFFLINE = 1;
     */
    EVENT_OFFLINE = 1,
    /**
     * @generated from enum value: DROPS_OFFLINE = 2;
     */
    DROPS_OFFLINE = 2
}
/**
 * Describes the enum webcast.im.PartnershipGameOfflineMessage_OfflineGameInfo_OfflineType.
 */
export declare const PartnershipGameOfflineMessage_OfflineGameInfo_OfflineTypeSchema: GenEnum<PartnershipGameOfflineMessage_OfflineGameInfo_OfflineType>;
/**
 * @generated from enum webcast.im.PinMessage_actionType
 */
export declare enum PinMessage_actionType {
    /**
     * @generated from enum value: UN_KOWN = 0;
     */
    UN_KOWN = 0,
    /**
     * @generated from enum value: PIN = 1;
     */
    PIN = 1,
    /**
     * @generated from enum value: PIN_CANCEL = 2;
     */
    PIN_CANCEL = 2
}
/**
 * Describes the enum webcast.im.PinMessage_actionType.
 */
export declare const PinMessage_actionTypeSchema: GenEnum<PinMessage_actionType>;
/**
 * @generated from enum webcast.im.PublicAreaMessageCommon_CreatorSuccessInfo_Topic_DisplayLocation
 */
export declare enum PublicAreaMessageCommon_CreatorSuccessInfo_Topic_DisplayLocation {
    /**
     * @generated from enum value: DISPLAY_LOCATION_FULL_SCREEN = 0;
     */
    DISPLAY_LOCATION_FULL_SCREEN = 0,
    /**
     * @generated from enum value: DISPLAY_LOCATION_PUBLIC_SCREEN = 1;
     */
    DISPLAY_LOCATION_PUBLIC_SCREEN = 1,
    /**
     * @generated from enum value: DISPLAY_LOCATION_BOTH = 2;
     */
    DISPLAY_LOCATION_BOTH = 2
}
/**
 * Describes the enum webcast.im.PublicAreaMessageCommon_CreatorSuccessInfo_Topic_DisplayLocation.
 */
export declare const PublicAreaMessageCommon_CreatorSuccessInfo_Topic_DisplayLocationSchema: GenEnum<PublicAreaMessageCommon_CreatorSuccessInfo_Topic_DisplayLocation>;
/**
 * @generated from enum webcast.im.PublicAreaMessageCommon_PortraitInfo_UserMetrics_UserMetricsType
 */
export declare enum PublicAreaMessageCommon_PortraitInfo_UserMetrics_UserMetricsType {
    /**
     * @generated from enum value: USER_METRICS_TYPE_UNKNOWN = 0;
     */
    USER_METRICS_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: USER_METRICS_TYPE_GRADE = 1;
     */
    USER_METRICS_TYPE_GRADE = 1,
    /**
     * @generated from enum value: USER_METRICS_TYPE_SUBSCRIBE = 2;
     */
    USER_METRICS_TYPE_SUBSCRIBE = 2,
    /**
     * @generated from enum value: USER_METRICS_TYPE_FOLLOW = 3;
     */
    USER_METRICS_TYPE_FOLLOW = 3,
    /**
     * @generated from enum value: USER_METRICS_TYPE_FANS_CLUB = 4;
     */
    USER_METRICS_TYPE_FANS_CLUB = 4,
    /**
     * @generated from enum value: USER_METRICS_TYPE_TOP_VIEWER = 5;
     */
    USER_METRICS_TYPE_TOP_VIEWER = 5,
    /**
     * @generated from enum value: USER_METRICS_TYPE_GIFT = 6;
     */
    USER_METRICS_TYPE_GIFT = 6
}
/**
 * Describes the enum webcast.im.PublicAreaMessageCommon_PortraitInfo_UserMetrics_UserMetricsType.
 */
export declare const PublicAreaMessageCommon_PortraitInfo_UserMetrics_UserMetricsTypeSchema: GenEnum<PublicAreaMessageCommon_PortraitInfo_UserMetrics_UserMetricsType>;
/**
 * @generated from enum webcast.im.RankTextMessage_RankTestMessageScene
 */
export declare enum RankTextMessage_RankTestMessageScene {
    /**
     * @generated from enum value: RANK_TEXT_MESSAGE_RANK_TEST_MESSAGE_SCENE_UNKNOWN = 0;
     */
    RANK_TEXT_MESSAGE_RANK_TEST_MESSAGE_SCENE_UNKNOWN = 0,
    /**
     * @generated from enum value: ONLINE_AUDIENCE_TOP_N_UPDATE_PUBLIC_SCREEN = 1;
     */
    ONLINE_AUDIENCE_TOP_N_UPDATE_PUBLIC_SCREEN = 1,
    /**
     * @generated from enum value: MID_PEAK_MOTIVATION_PUBLIC_SCREEN_TOP = 2;
     */
    MID_PEAK_MOTIVATION_PUBLIC_SCREEN_TOP = 2,
    /**
     * @generated from enum value: MID_PEAK_MOTIVATION_PUBLIC_SCREEN_ENTER = 3;
     */
    MID_PEAK_MOTIVATION_PUBLIC_SCREEN_ENTER = 3,
    /**
     * @generated from enum value: TILE_REWARD_GUIDE = 4;
     */
    TILE_REWARD_GUIDE = 4
}
/**
 * Describes the enum webcast.im.RankTextMessage_RankTestMessageScene.
 */
export declare const RankTextMessage_RankTestMessageSceneSchema: GenEnum<RankTextMessage_RankTestMessageScene>;
/**
 * @generated from enum webcast.im.ScoreType
 */
export declare enum ScoreType {
    /**
     * @generated from enum value: SCORE_TYPE_UNKNOWN = 0;
     */
    SCORE_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: ALL_FAN_TICKET = 1;
     */
    ALL_FAN_TICKET = 1,
    /**
     * @generated from enum value: PLAY_SCORE = 2;
     */
    PLAY_SCORE = 2
}
/**
 * Describes the enum webcast.im.ScoreType.
 */
export declare const ScoreTypeSchema: GenEnum<ScoreType>;
/**
 * @generated from enum webcast.im.ShowType
 */
export declare enum ShowType {
    /**
     * @generated from enum value: HOVER = 0;
     */
    HOVER = 0,
    /**
     * @generated from enum value: PLUG = 1;
     */
    PLUG = 1
}
/**
 * Describes the enum webcast.im.ShowType.
 */
export declare const ShowTypeSchema: GenEnum<ShowType>;
/**
 * @generated from enum webcast.im.SubPinEventMessage_ActionType
 */
export declare enum SubPinEventMessage_ActionType {
    /**
     * @generated from enum value: SUB_PIN_EVENT_MESSAGE_ACTION_TYPE_UNKNOWN = 0;
     */
    SUB_PIN_EVENT_MESSAGE_ACTION_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: SUB_PIN_EVENT_MESSAGE_ACTION_TYPE_PIN = 1;
     */
    SUB_PIN_EVENT_MESSAGE_ACTION_TYPE_PIN = 1,
    /**
     * @generated from enum value: UNPIN = 2;
     */
    UNPIN = 2
}
/**
 * Describes the enum webcast.im.SubPinEventMessage_ActionType.
 */
export declare const SubPinEventMessage_ActionTypeSchema: GenEnum<SubPinEventMessage_ActionType>;
/**
 * @generated from enum webcast.im.SubscribeType
 */
export declare enum SubscribeType {
    /**
     * @generated from enum value: ONCE = 0;
     */
    ONCE = 0,
    /**
     * @generated from enum value: AUTO = 1;
     */
    AUTO = 1,
    /**
     * @generated from enum value: SUBSCRIBE_TYPE_DEFAULT = 100;
     */
    SUBSCRIBE_TYPE_DEFAULT = 100
}
/**
 * Describes the enum webcast.im.SubscribeType.
 */
export declare const SubscribeTypeSchema: GenEnum<SubscribeType>;
/**
 * @generated from enum webcast.im.SubscribingStatus
 */
export declare enum SubscribingStatus {
    /**
     * @generated from enum value: SUBSCRIBING_STATUS_UNKNOWN = 0;
     */
    SUBSCRIBING_STATUS_UNKNOWN = 0,
    /**
     * @generated from enum value: SUBSCRIBING_STATUS_ONCE = 1;
     */
    SUBSCRIBING_STATUS_ONCE = 1,
    /**
     * @generated from enum value: CIRCLE = 2;
     */
    CIRCLE = 2,
    /**
     * @generated from enum value: CIRCLE_CANCEL = 3;
     */
    CIRCLE_CANCEL = 3,
    /**
     * @generated from enum value: REFUND = 4;
     */
    REFUND = 4,
    /**
     * @generated from enum value: IN_GRACE_PERIOD = 5;
     */
    IN_GRACE_PERIOD = 5,
    /**
     * @generated from enum value: NOT_IN_GRACE_PERIOD = 6;
     */
    NOT_IN_GRACE_PERIOD = 6
}
/**
 * Describes the enum webcast.im.SubscribingStatus.
 */
export declare const SubscribingStatusSchema: GenEnum<SubscribingStatus>;
/**
 * @generated from enum webcast.im.TextType
 */
export declare enum TextType {
    /**
     * @generated from enum value: DISPLAY_TEXT = 0;
     */
    DISPLAY_TEXT = 0,
    /**
     * @generated from enum value: CONTENT = 1;
     */
    CONTENT = 1
}
/**
 * Describes the enum webcast.im.TextType.
 */
export declare const TextTypeSchema: GenEnum<TextType>;
/**
 * @generated from enum webcast.im.UnionAnimationInfoType
 */
export declare enum UnionAnimationInfoType {
    /**
     * @generated from enum value: NO_UNION_ANIMATION = 0;
     */
    NO_UNION_ANIMATION = 0,
    /**
     * @generated from enum value: LOOP = 1;
     */
    LOOP = 1,
    /**
     * @generated from enum value: LOCK = 2;
     */
    LOCK = 2
}
/**
 * Describes the enum webcast.im.UnionAnimationInfoType.
 */
export declare const UnionAnimationInfoTypeSchema: GenEnum<UnionAnimationInfoType>;
//# sourceMappingURL=im_pb.d.ts.map