import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ActivityBadgeInfo, BattleUserSettings, GiftGalleryBadgeInfo, OptPairInfo, RivalsGameTag, SubtitleSettings, TagV2, TopHostInfo, UserSuggestionInfo } from "./model/interact_messages_pb.js";
import type { CohostLayoutMode, DetailBlockReason, LinkmicPlayType, ReserveReplyStatus, RivalExtraInfo_AnchorLayer, RivalExtraInfo_BattleInfo_BattleInfoType, RivalExtraInfo_InviteBlockReason, RivalExtraInfo_TextType } from "../model/data/messages_pb.js";
import type { UserInfo } from "../shared/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/chatroom/interact_model.proto.
 */
export declare const file_webcast_chatroom_interact_model: GenFile;
/**
 * @generated from message webcast.chatroom.interact.model.AnchorLinkmicUserSettings
 */
export type AnchorLinkmicUserSettings = Message<"webcast.chatroom.interact.model.AnchorLinkmicUserSettings"> & {
    /**
     * @generated from field: bool is_turn_on = 1;
     */
    isTurnOn: boolean;
    /**
     * @generated from field: bool accept_multi_linkmic = 2;
     */
    acceptMultiLinkmic: boolean;
    /**
     * @generated from field: bool accept_not_follower_invite = 3;
     */
    acceptNotFollowerInvite: boolean;
    /**
     * @generated from field: bool allow_gift_to_other_anchors = 4;
     */
    allowGiftToOtherAnchors: boolean;
    /**
     * @generated from field: bool block_invitation_of_this_live = 5;
     */
    blockInvitationOfThisLive: boolean;
    /**
     * @generated from field: bool receive_friend_multi_host_invites = 6;
     */
    receiveFriendMultiHostInvites: boolean;
    /**
     * @generated from field: bool receive_friend_multi_host_application = 7;
     */
    receiveFriendMultiHostApplication: boolean;
    /**
     * @generated from field: bool block_this_multi_host_invites = 8;
     */
    blockThisMultiHostInvites: boolean;
    /**
     * @generated from field: bool block_this_multi_host_application = 9;
     */
    blockThisMultiHostApplication: boolean;
    /**
     * @generated from field: bool receive_not_friend_multi_host_invites = 10;
     */
    receiveNotFriendMultiHostInvites: boolean;
    /**
     * @generated from field: bool receive_not_friend_multi_host_application = 11;
     */
    receiveNotFriendMultiHostApplication: boolean;
    /**
     * @generated from field: bool allow_live_notice_of_friends = 12;
     */
    allowLiveNoticeOfFriends: boolean;
    /**
     * @generated from field: bool allow_friend_invites = 13;
     */
    allowFriendInvites: boolean;
    /**
     * @generated from field: bool allow_suggested_invites = 14;
     */
    allowSuggestedInvites: boolean;
    /**
     * @generated from field: bool allow_friend_invites_when_offlive = 15;
     */
    allowFriendInvitesWhenOfflive: boolean;
    /**
     * @generated from field: bool allow_user_cohost_suggestions = 16;
     */
    allowUserCohostSuggestions: boolean;
    /**
     * @generated from field: bool allow_missed_invitation_notice = 17;
     */
    allowMissedInvitationNotice: boolean;
    /**
     * @generated from field: bool allow_live_notice_of_suggested = 18;
     */
    allowLiveNoticeOfSuggested: boolean;
    /**
     * @generated from field: bool allow_guest_request_during_cohost = 19;
     */
    allowGuestRequestDuringCohost: boolean;
    /**
     * @generated from field: bool allow_guest_apply_during_cohost = 20;
     */
    allowGuestApplyDuringCohost: boolean;
    /**
     * @generated from field: webcast.chatroom.model.interact.SubtitleSettings subtitle_setting = 21;
     */
    subtitleSetting?: SubtitleSettings | undefined;
};
/**
 * Describes the message webcast.chatroom.interact.model.AnchorLinkmicUserSettings.
 * Use `create(AnchorLinkmicUserSettingsSchema)` to create a new message.
 */
export declare const AnchorLinkmicUserSettingsSchema: GenMessage<AnchorLinkmicUserSettings>;
/**
 * @generated from message webcast.chatroom.interact.model.BattleInfo
 */
export type BattleInfo = Message<"webcast.chatroom.interact.model.BattleInfo"> & {
    /**
     * @generated from field: webcast.model.data.RivalExtraInfo_BattleInfo_BattleInfoType info_type = 1;
     */
    infoType: RivalExtraInfo_BattleInfo_BattleInfoType;
    /**
     * @generated from field: int64 value = 2;
     */
    value: bigint;
};
/**
 * Describes the message webcast.chatroom.interact.model.BattleInfo.
 * Use `create(BattleInfoSchema)` to create a new message.
 */
export declare const BattleInfoSchema: GenMessage<BattleInfo>;
/**
 * @generated from message webcast.chatroom.interact.model.LinkerInfo
 */
export type LinkerInfo = Message<"webcast.chatroom.interact.model.LinkerInfo"> & {
    /**
     * @generated from field: repeated webcast.shared.UserInfo linked_users = 1;
     */
    linkedUsers: UserInfo[];
    /**
     * @generated from field: bool in_quick_pairing = 2;
     */
    inQuickPairing: boolean;
    /**
     * @generated from field: repeated webcast.shared.UserInfo linked_guest_users = 3;
     */
    linkedGuestUsers: UserInfo[];
};
/**
 * Describes the message webcast.chatroom.interact.model.LinkerInfo.
 * Use `create(LinkerInfoSchema)` to create a new message.
 */
export declare const LinkerInfoSchema: GenMessage<LinkerInfo>;
/**
 * @generated from message webcast.chatroom.interact.model.OffliveInviteInfo
 */
export type OffliveInviteInfo = Message<"webcast.chatroom.interact.model.OffliveInviteInfo"> & {
    /**
     * @generated from field: int64 inviter_timestamp = 1;
     */
    inviterTimestamp: bigint;
};
/**
 * Describes the message webcast.chatroom.interact.model.OffliveInviteInfo.
 * Use `create(OffliveInviteInfoSchema)` to create a new message.
 */
export declare const OffliveInviteInfoSchema: GenMessage<OffliveInviteInfo>;
/**
 * @generated from message webcast.chatroom.interact.model.ReserveInfo
 */
export type ReserveInfo = Message<"webcast.chatroom.interact.model.ReserveInfo"> & {
    /**
     * @generated from field: int64 reservation_id = 1;
     */
    reservationId: bigint;
    /**
     * @generated from field: webcast.model.data.ReserveReplyStatus reply_status = 2;
     */
    replyStatus: ReserveReplyStatus;
    /**
     * @generated from field: string bubble_tip = 3;
     */
    bubbleTip: string;
    /**
     * @generated from field: int64 response_time = 4;
     */
    responseTime: bigint;
    /**
     * @generated from field: bool is_reservation_sender = 5;
     */
    isReservationSender: boolean;
    /**
     * @generated from field: int64 created_timestamp = 6;
     */
    createdTimestamp: bigint;
    /**
     * @generated from field: bool viewed = 7;
     */
    viewed: boolean;
};
/**
 * Describes the message webcast.chatroom.interact.model.ReserveInfo.
 * Use `create(ReserveInfoSchema)` to create a new message.
 */
export declare const ReserveInfoSchema: GenMessage<ReserveInfo>;
/**
 * @generated from message webcast.chatroom.interact.model.RivalExtraInfo
 */
export type RivalExtraInfo = Message<"webcast.chatroom.interact.model.RivalExtraInfo"> & {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
    /**
     * @generated from field: webcast.model.data.RivalExtraInfo_TextType text_type = 2;
     */
    textType: RivalExtraInfo_TextType;
    /**
     * @generated from field: string label = 3;
     */
    label: string;
    /**
     * @generated from field: webcast.model.data.RivalExtraInfo_AnchorLayer anchor_layer = 4;
     */
    anchorLayer: RivalExtraInfo_AnchorLayer;
    /**
     * @generated from field: webcast.chatroom.interact.model.LinkerInfo linker_info = 5;
     */
    linkerInfo?: LinkerInfo | undefined;
    /**
     * @generated from field: webcast.chatroom.interact.model.AnchorLinkmicUserSettings linkmic_user_settings = 6;
     */
    linkmicUserSettings?: AnchorLinkmicUserSettings | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.BattleUserSettings battle_user_settings = 7;
     */
    battleUserSettings?: BattleUserSettings | undefined;
    /**
     * @generated from field: webcast.model.data.RivalExtraInfo_InviteBlockReason invite_block_reason = 8;
     */
    inviteBlockReason: RivalExtraInfo_InviteBlockReason;
    /**
     * @generated from field: webcast.model.data.LinkmicPlayType show_play_type = 9;
     */
    showPlayType: LinkmicPlayType;
    /**
     * @generated from field: webcast.chatroom.model.interact.TopHostInfo top_host_info = 10;
     */
    topHostInfo?: TopHostInfo | undefined;
    /**
     * @generated from field: webcast.chatroom.interact.model.Tag tag = 11;
     */
    tag?: Tag | undefined;
    /**
     * @generated from field: webcast.chatroom.interact.model.ReserveInfo reserve_info = 12;
     */
    reserveInfo?: ReserveInfo | undefined;
    /**
     * @generated from field: webcast.model.data.DetailBlockReason detail_block_reason = 13;
     */
    detailBlockReason: DetailBlockReason;
    /**
     * @generated from field: webcast.chatroom.model.interact.OptPairInfo opt_pair_info = 14;
     */
    optPairInfo?: OptPairInfo | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.TagV2 tag_v2 = 15;
     */
    tagV2?: TagV2 | undefined;
    /**
     * @generated from field: int64 eoy_level = 16;
     */
    eoyLevel: bigint;
    /**
     * @generated from field: webcast.chatroom.interact.model.BattleInfo battle_info = 17;
     */
    battleInfo?: BattleInfo | undefined;
    /**
     * @generated from field: webcast.model.data.CohostLayoutMode cohost_layout_mode = 18;
     */
    cohostLayoutMode: CohostLayoutMode;
    /**
     * @generated from field: webcast.chatroom.model.interact.RivalsGameTag game_tag = 19;
     */
    gameTag?: RivalsGameTag | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.GiftGalleryBadgeInfo gift_gallery_badge_info = 20;
     */
    giftGalleryBadgeInfo?: GiftGalleryBadgeInfo | undefined;
    /**
     * @generated from field: webcast.chatroom.interact.model.OffliveInviteInfo offlive_invite_info = 21;
     */
    offliveInviteInfo?: OffliveInviteInfo | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.UserSuggestionInfo user_suggestion_info = 22;
     */
    userSuggestionInfo?: UserSuggestionInfo | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.UserSuggestionInfo friend_suggestion_info = 23;
     */
    friendSuggestionInfo?: UserSuggestionInfo | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.ActivityBadgeInfo activity_badge_info = 24;
     */
    activityBadgeInfo?: ActivityBadgeInfo | undefined;
};
/**
 * Describes the message webcast.chatroom.interact.model.RivalExtraInfo.
 * Use `create(RivalExtraInfoSchema)` to create a new message.
 */
export declare const RivalExtraInfoSchema: GenMessage<RivalExtraInfo>;
/**
 * @generated from message webcast.chatroom.interact.model.Tag
 */
export type Tag = Message<"webcast.chatroom.interact.model.Tag"> & {
    /**
     * @generated from field: int32 tag_type = 1;
     */
    tagType: number;
    /**
     * @generated from field: string tag_value = 2;
     */
    tagValue: string;
    /**
     * @generated from field: string tag_text = 3;
     */
    tagText: string;
};
/**
 * Describes the message webcast.chatroom.interact.model.Tag.
 * Use `create(TagSchema)` to create a new message.
 */
export declare const TagSchema: GenMessage<Tag>;
//# sourceMappingURL=interact_model_pb.d.ts.map