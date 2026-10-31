import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "./base/messages_pb.js";
import type { PrivilegeLogExtra } from "./base/user_pb.js";
import type { EventUserInfo, GiftStruct_SchemeGiftType, HashtagNamespace, LiveEventInfo_EventPayMethod, PaidEventPreview, User_FansClub_FansClubData_UserFansClubStatus } from "./data/messages_pb.js";
import type { AssetsModel } from "./gift/assets_pb.js";
import type { GiftColorInfo } from "./gift/model_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/messages.proto.
 */
export declare const file_webcast_model_messages: GenFile;
/**
 * @generated from message webcast.model.ActivityRewardInfo
 */
export type ActivityRewardInfo = Message<"webcast.model.ActivityRewardInfo"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel badge = 1;
     */
    badge?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel storytag = 2;
     */
    storytag?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.ActivityRewardInfo.
 * Use `create(ActivityRewardInfoSchema)` to create a new message.
 */
export declare const ActivityRewardInfoSchema: GenMessage<ActivityRewardInfo>;
/**
 * @generated from message webcast.model.AnchorInfo
 */
export type AnchorInfo = Message<"webcast.model.AnchorInfo"> & {
    /**
     * @generated from field: int64 level = 1;
     */
    level: bigint;
};
/**
 * Describes the message webcast.model.AnchorInfo.
 * Use `create(AnchorInfoSchema)` to create a new message.
 */
export declare const AnchorInfoSchema: GenMessage<AnchorInfo>;
/**
 * @generated from message webcast.model.AnchorLevel
 */
export type AnchorLevel = Message<"webcast.model.AnchorLevel"> & {
    /**
     * @generated from field: int32 level = 1;
     */
    level: number;
    /**
     * @generated from field: int64 experience = 2;
     */
    experience: bigint;
    /**
     * @generated from field: int64 lowest_experience_this_level = 3;
     */
    lowestExperienceThisLevel: bigint;
    /**
     * @generated from field: int64 highest_experience_this_level = 4;
     */
    highestExperienceThisLevel: bigint;
    /**
     * @generated from field: int64 task_start_experience = 5;
     */
    taskStartExperience: bigint;
    /**
     * @generated from field: int64 task_start_time = 6;
     */
    taskStartTime: bigint;
    /**
     * @generated from field: int64 task_decrease_experience = 7;
     */
    taskDecreaseExperience: bigint;
    /**
     * @generated from field: int64 task_target_experience = 8;
     */
    taskTargetExperience: bigint;
    /**
     * @generated from field: int64 task_end_time = 9;
     */
    taskEndTime: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel profile_dialog_bg = 10;
     */
    profileDialogBg?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel profile_dialog_bg_back = 11;
     */
    profileDialogBgBack?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel stage_level = 12;
     */
    stageLevel?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel small_icon = 13;
     */
    smallIcon?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.AnchorLevel.
 * Use `create(AnchorLevelSchema)` to create a new message.
 */
export declare const AnchorLevelSchema: GenMessage<AnchorLevel>;
/**
 * @generated from message webcast.model.AudioResource
 */
export type AudioResource = Message<"webcast.model.AudioResource"> & {
    /**
     * @generated from field: string audio_url = 1;
     */
    audioUrl: string;
    /**
     * @generated from field: string lyrics_url = 2;
     */
    lyricsUrl: string;
    /**
     * @generated from field: int64 snippet_id = 3;
     */
    snippetId: bigint;
};
/**
 * Describes the message webcast.model.AudioResource.
 * Use `create(AudioResourceSchema)` to create a new message.
 */
export declare const AudioResourceSchema: GenMessage<AudioResource>;
/**
 * @generated from message webcast.model.AuthenticationInfo
 */
export type AuthenticationInfo = Message<"webcast.model.AuthenticationInfo"> & {
    /**
     * @generated from field: string custom_verify = 1;
     */
    customVerify: string;
    /**
     * @generated from field: string enterprise_verify_reason = 2;
     */
    enterpriseVerifyReason: string;
    /**
     * @generated from field: webcast.model.base.ImageModel authentication_badge = 3;
     */
    authenticationBadge?: ImageModel | undefined;
    /**
     * @generated from field: bool has_cert = 4;
     */
    hasCert: boolean;
};
/**
 * Describes the message webcast.model.AuthenticationInfo.
 * Use `create(AuthenticationInfoSchema)` to create a new message.
 */
export declare const AuthenticationInfoSchema: GenMessage<AuthenticationInfo>;
/**
 * @generated from message webcast.model.Author
 */
export type Author = Message<"webcast.model.Author"> & {
    /**
     * @generated from field: int64 video_total_count = 1;
     */
    videoTotalCount: bigint;
    /**
     * @generated from field: int64 video_total_play_count = 2;
     */
    videoTotalPlayCount: bigint;
    /**
     * @generated from field: int64 video_total_favorite_count = 6;
     */
    videoTotalFavoriteCount: bigint;
};
/**
 * Describes the message webcast.model.Author.
 * Use `create(AuthorSchema)` to create a new message.
 */
export declare const AuthorSchema: GenMessage<Author>;
/**
 * @generated from message webcast.model.BatchGiftInfo
 */
export type BatchGiftInfo = Message<"webcast.model.BatchGiftInfo"> & {
    /**
     * @generated from field: bool can_batch_send = 1;
     */
    canBatchSend: boolean;
    /**
     * @generated from field: repeated int64 available_counts = 2;
     */
    availableCounts: bigint[];
};
/**
 * Describes the message webcast.model.BatchGiftInfo.
 * Use `create(BatchGiftInfoSchema)` to create a new message.
 */
export declare const BatchGiftInfoSchema: GenMessage<BatchGiftInfo>;
/**
 * @generated from message webcast.model.BorderInfo
 */
export type BorderInfo = Message<"webcast.model.BorderInfo"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 1;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: int64 level = 2;
     */
    level: bigint;
    /**
     * @generated from field: string source = 3;
     */
    source: string;
    /**
     * @generated from field: webcast.model.base.ImageModel profile_decoration_ribbon = 4;
     */
    profileDecorationRibbon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.user.PrivilegeLogExtra border_privilege_log_extra = 5;
     */
    borderPrivilegeLogExtra?: PrivilegeLogExtra | undefined;
    /**
     * @generated from field: webcast.model.base.user.PrivilegeLogExtra profile_privilege_log_extra = 6;
     */
    profilePrivilegeLogExtra?: PrivilegeLogExtra | undefined;
    /**
     * @generated from field: string avatar_background_color = 7;
     */
    avatarBackgroundColor: string;
    /**
     * @generated from field: string avatar_background_border_color = 8;
     */
    avatarBackgroundBorderColor: string;
    /**
     * @generated from field: string name_starling_key = 9;
     */
    nameStarlingKey: string;
    /**
     * @generated from field: string desc_starling_key = 10;
     */
    descStarlingKey: string;
    /**
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * @generated from field: bool is_taller_avatar_background = 13;
     */
    isTallerAvatarBackground: boolean;
};
/**
 * Describes the message webcast.model.BorderInfo.
 * Use `create(BorderInfoSchema)` to create a new message.
 */
export declare const BorderInfoSchema: GenMessage<BorderInfo>;
/**
 * @generated from message webcast.model.ColorGroup
 */
export type ColorGroup = Message<"webcast.model.ColorGroup"> & {
    /**
     * @generated from field: string group_name = 1;
     */
    groupName: string;
    /**
     * @generated from field: repeated webcast.model.gift.model.GiftColorInfo color_infos = 2;
     */
    colorInfos: GiftColorInfo[];
};
/**
 * Describes the message webcast.model.ColorGroup.
 * Use `create(ColorGroupSchema)` to create a new message.
 */
export declare const ColorGroupSchema: GenMessage<ColorGroup>;
/**
 * @generated from message webcast.model.ColorPickerInfo
 */
export type ColorPickerInfo = Message<"webcast.model.ColorPickerInfo"> & {
    /**
     * @generated from field: repeated webcast.model.ColorGroup groups = 1;
     */
    groups: ColorGroup[];
};
/**
 * Describes the message webcast.model.ColorPickerInfo.
 * Use `create(ColorPickerInfoSchema)` to create a new message.
 */
export declare const ColorPickerInfoSchema: GenMessage<ColorPickerInfo>;
/**
 * @generated from message webcast.model.CrossScreenEffectInfo
 */
export type CrossScreenEffectInfo = Message<"webcast.model.CrossScreenEffectInfo"> & {
    /**
     * @generated from field: map<int64, int32> single_action_effect_ids = 1;
     */
    singleActionEffectIds: {
        [key: string]: number;
    };
    /**
     * @generated from field: map<int64, int32> action_effect_ids = 2;
     */
    actionEffectIds: {
        [key: string]: number;
    };
    /**
     * @generated from field: map<int64, int32> reaction_effect_ids = 3;
     */
    reactionEffectIds: {
        [key: string]: number;
    };
};
/**
 * Describes the message webcast.model.CrossScreenEffectInfo.
 * Use `create(CrossScreenEffectInfoSchema)` to create a new message.
 */
export declare const CrossScreenEffectInfoSchema: GenMessage<CrossScreenEffectInfo>;
/**
 * @generated from message webcast.model.FansClubData
 */
export type FansClubData = Message<"webcast.model.FansClubData"> & {
    /**
     * @generated from field: string club_name = 1;
     */
    clubName: string;
    /**
     * @generated from field: int32 level = 2;
     */
    level: number;
    /**
     * @generated from field: webcast.model.data.User_FansClub_FansClubData_UserFansClubStatus user_fans_club_status = 3;
     */
    userFansClubStatus: User_FansClub_FansClubData_UserFansClubStatus;
    /**
     * @generated from field: webcast.model.UserBadge badge = 4;
     */
    badge?: UserBadge | undefined;
    /**
     * @generated from field: repeated int64 available_gift_ids = 5;
     */
    availableGiftIds: bigint[];
    /**
     * @generated from field: int64 anchor_id = 6;
     */
    anchorId: bigint;
};
/**
 * Describes the message webcast.model.FansClubData.
 * Use `create(FansClubDataSchema)` to create a new message.
 */
export declare const FansClubDataSchema: GenMessage<FansClubData>;
/**
 * @generated from message webcast.model.FansClubMember
 */
export type FansClubMember = Message<"webcast.model.FansClubMember"> & {
    /**
     * @generated from field: webcast.model.FansClubData data = 1;
     */
    data?: FansClubData | undefined;
    /**
     * @generated from field: map<int32, webcast.model.FansClubData> prefer_data = 2;
     */
    preferData: {
        [key: number]: FansClubData;
    };
};
/**
 * Describes the message webcast.model.FansClubMember.
 * Use `create(FansClubMemberSchema)` to create a new message.
 */
export declare const FansClubMemberSchema: GenMessage<FansClubMember>;
/**
 * @generated from message webcast.model.GiftBoxInfo
 */
export type GiftBoxInfo = Message<"webcast.model.GiftBoxInfo"> & {
    /**
     * @generated from field: int64 capacity = 1;
     */
    capacity: bigint;
    /**
     * @generated from field: bool is_primary_box = 2;
     */
    isPrimaryBox: boolean;
    /**
     * @generated from field: string scheme_url = 3;
     */
    schemeUrl: string;
    /**
     * @generated from field: repeated webcast.model.GiftInfoInBox gift_infos_in_box = 4;
     */
    giftInfosInBox: GiftInfoInBox[];
};
/**
 * Describes the message webcast.model.GiftBoxInfo.
 * Use `create(GiftBoxInfoSchema)` to create a new message.
 */
export declare const GiftBoxInfoSchema: GenMessage<GiftBoxInfo>;
/**
 * @generated from message webcast.model.GiftInfoInBox
 */
export type GiftInfoInBox = Message<"webcast.model.GiftInfoInBox"> & {
    /**
     * @generated from field: int64 gift_id = 1;
     */
    giftId: bigint;
    /**
     * @generated from field: int64 effect_id = 2;
     */
    effectId: bigint;
    /**
     * @generated from field: int64 color_id = 3;
     */
    colorId: bigint;
    /**
     * @generated from field: int32 remain_times = 4;
     */
    remainTimes: number;
    /**
     * @generated from field: webcast.model.gift.assets.AssetsModel asset = 5;
     */
    asset?: AssetsModel | undefined;
};
/**
 * Describes the message webcast.model.GiftInfoInBox.
 * Use `create(GiftInfoInBoxSchema)` to create a new message.
 */
export declare const GiftInfoInBoxSchema: GenMessage<GiftInfoInBox>;
/**
 * @generated from message webcast.model.GiftLockInfo
 */
export type GiftLockInfo = Message<"webcast.model.GiftLockInfo"> & {
    /**
     * @generated from field: bool lock = 1;
     */
    lock: boolean;
    /**
     * @generated from field: int32 lock_type = 2;
     */
    lockType: number;
    /**
     * @generated from field: int32 gift_level = 3;
     */
    giftLevel: number;
    /**
     * @generated from field: bool highlight_enabled = 4;
     */
    highlightEnabled: boolean;
    /**
     * @generated from field: string unlock_button_text = 5;
     */
    unlockButtonText: string;
    /**
     * @generated from field: string unlock_schema = 6;
     */
    unlockSchema: string;
};
/**
 * Describes the message webcast.model.GiftLockInfo.
 * Use `create(GiftLockInfoSchema)` to create a new message.
 */
export declare const GiftLockInfoSchema: GenMessage<GiftLockInfo>;
/**
 * @generated from message webcast.model.GiftRandomEffectInfo
 */
export type GiftRandomEffectInfo = Message<"webcast.model.GiftRandomEffectInfo"> & {
    /**
     * @generated from field: webcast.model.RandomGiftPanelBanner random_gift_panel_banner = 1;
     */
    randomGiftPanelBanner?: RandomGiftPanelBanner | undefined;
    /**
     * @generated from field: repeated int64 effect_ids = 2;
     */
    effectIds: bigint[];
    /**
     * @generated from field: string host_key = 3;
     */
    hostKey: string;
    /**
     * @generated from field: string audience_key = 4;
     */
    audienceKey: string;
    /**
     * @generated from field: webcast.model.RandomGiftBubble random_gift_bubble = 5;
     */
    randomGiftBubble?: RandomGiftBubble | undefined;
};
/**
 * Describes the message webcast.model.GiftRandomEffectInfo.
 * Use `create(GiftRandomEffectInfoSchema)` to create a new message.
 */
export declare const GiftRandomEffectInfoSchema: GenMessage<GiftRandomEffectInfo>;
/**
 * @generated from message webcast.model.GiftSeriesInfo
 */
export type GiftSeriesInfo = Message<"webcast.model.GiftSeriesInfo"> & {
    /**
     * @generated from field: string series_name = 2;
     */
    seriesName: string;
    /**
     * @generated from field: repeated int64 gift_ids = 3;
     */
    giftIds: bigint[];
    /**
     * @generated from field: bool enabled = 4;
     */
    enabled: boolean;
    /**
     * @generated from field: webcast.model.base.ImageModel container_background = 5;
     */
    containerBackground?: ImageModel | undefined;
    /**
     * @generated from field: string send_gift_button_color = 6;
     */
    sendGiftButtonColor: string;
    /**
     * @generated from field: string pointing_back_tri_color = 7;
     */
    pointingBackTriColor: string;
    /**
     * @generated from field: string series_name_color = 8;
     */
    seriesNameColor: string;
    /**
     * @generated from field: int64 end_time_sec = 9;
     */
    endTimeSec: bigint;
};
/**
 * Describes the message webcast.model.GiftSeriesInfo.
 * Use `create(GiftSeriesInfoSchema)` to create a new message.
 */
export declare const GiftSeriesInfoSchema: GenMessage<GiftSeriesInfo>;
/**
 * @generated from message webcast.model.GiftSkin
 */
export type GiftSkin = Message<"webcast.model.GiftSkin"> & {
    /**
     * @generated from field: int64 gift_skin_id = 1;
     */
    giftSkinId: bigint;
    /**
     * @generated from field: string gift_skin_name = 2;
     */
    giftSkinName: string;
    /**
     * @generated from field: webcast.model.base.ImageModel static_image = 3;
     */
    staticImage?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel animated_image = 4;
     */
    animatedImage?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.GiftSkin.
 * Use `create(GiftSkinSchema)` to create a new message.
 */
export declare const GiftSkinSchema: GenMessage<GiftSkin>;
/**
 * @generated from message webcast.model.GiftSkinToGiftTextsInfo
 */
export type GiftSkinToGiftTextsInfo = Message<"webcast.model.GiftSkinToGiftTextsInfo"> & {
    /**
     * @generated from field: int64 gift_skin_id = 1;
     */
    giftSkinId: bigint;
    /**
     * @generated from field: repeated int64 gift_text_ids = 2;
     */
    giftTextIds: bigint[];
};
/**
 * Describes the message webcast.model.GiftSkinToGiftTextsInfo.
 * Use `create(GiftSkinToGiftTextsInfoSchema)` to create a new message.
 */
export declare const GiftSkinToGiftTextsInfoSchema: GenMessage<GiftSkinToGiftTextsInfo>;
/**
 * @generated from message webcast.model.GiftSponsorInfo
 */
export type GiftSponsorInfo = Message<"webcast.model.GiftSponsorInfo"> & {
    /**
     * @generated from field: int64 sponsor_id = 1;
     */
    sponsorId: bigint;
    /**
     * @generated from field: int64 sponsor_count = 2;
     */
    sponsorCount: bigint;
    /**
     * @generated from field: int64 current_count = 3;
     */
    currentCount: bigint;
    /**
     * @generated from field: int64 left_count_to_sponsor = 4;
     */
    leftCountToSponsor: bigint;
    /**
     * @generated from field: bool can_sponsor = 5;
     */
    canSponsor: boolean;
};
/**
 * Describes the message webcast.model.GiftSponsorInfo.
 * Use `create(GiftSponsorInfoSchema)` to create a new message.
 */
export declare const GiftSponsorInfoSchema: GenMessage<GiftSponsorInfo>;
/**
 * @generated from message webcast.model.GiftText
 */
export type GiftText = Message<"webcast.model.GiftText"> & {
    /**
     * @generated from field: int64 gift_text_id = 1;
     */
    giftTextId: bigint;
    /**
     * @generated from field: string gift_text_name = 2;
     */
    giftTextName: string;
};
/**
 * Describes the message webcast.model.GiftText.
 * Use `create(GiftTextSchema)` to create a new message.
 */
export declare const GiftTextSchema: GenMessage<GiftText>;
/**
 * @generated from message webcast.model.GiftsBoxInfo
 */
export type GiftsBoxInfo = Message<"webcast.model.GiftsBoxInfo"> & {
    /**
     * @generated from field: repeated webcast.model.GiftInfoInBox gifts_info_in_box = 1;
     */
    giftsInfoInBox: GiftInfoInBox[];
};
/**
 * Describes the message webcast.model.GiftsBoxInfo.
 * Use `create(GiftsBoxInfoSchema)` to create a new message.
 */
export declare const GiftsBoxInfoSchema: GenMessage<GiftsBoxInfo>;
/**
 * @generated from message webcast.model.GradeIcon
 */
export type GradeIcon = Message<"webcast.model.GradeIcon"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 1;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: int32 icon_diamond = 2;
     */
    iconDiamond: number;
    /**
     * @generated from field: int32 level = 3;
     */
    level: number;
    /**
     * @generated from field: string level_str = 4;
     */
    levelStr: string;
};
/**
 * Describes the message webcast.model.GradeIcon.
 * Use `create(GradeIconSchema)` to create a new message.
 */
export declare const GradeIconSchema: GenMessage<GradeIcon>;
/**
 * @generated from message webcast.model.Hashtag
 */
export type Hashtag = Message<"webcast.model.Hashtag"> & {
    /**
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * @generated from field: webcast.model.base.ImageModel image = 3;
     */
    image?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.data.HashtagNamespace namespace = 4;
     */
    namespace: HashtagNamespace;
};
/**
 * Describes the message webcast.model.Hashtag.
 * Use `create(HashtagSchema)` to create a new message.
 */
export declare const HashtagSchema: GenMessage<Hashtag>;
/**
 * @generated from message webcast.model.LikeEffect
 */
export type LikeEffect = Message<"webcast.model.LikeEffect"> & {
    /**
     * @generated from field: int64 version = 1;
     */
    version: bigint;
    /**
     * @generated from field: int64 effect_cnt = 2;
     */
    effectCnt: bigint;
    /**
     * @generated from field: int64 effect_interval_ms = 3;
     */
    effectIntervalMs: bigint;
    /**
     * @generated from field: int64 level = 4;
     */
    level: bigint;
};
/**
 * Describes the message webcast.model.LikeEffect.
 * Use `create(LikeEffectSchema)` to create a new message.
 */
export declare const LikeEffectSchema: GenMessage<LikeEffect>;
/**
 * @generated from message webcast.model.LiveEventInfo
 */
export type LiveEventInfo = Message<"webcast.model.LiveEventInfo"> & {
    /**
     * @generated from field: int64 event_id = 1;
     */
    eventId: bigint;
    /**
     * @generated from field: int64 start_time = 2;
     */
    startTime: bigint;
    /**
     * @generated from field: int64 duration = 3;
     */
    duration: bigint;
    /**
     * @generated from field: string title = 4;
     */
    title: string;
    /**
     * @generated from field: string description = 5;
     */
    description: string;
    /**
     * @generated from field: bool has_subscribed = 6;
     */
    hasSubscribed: boolean;
    /**
     * @generated from field: bool is_paid_event = 7;
     */
    isPaidEvent: boolean;
    /**
     * @generated from field: int64 ticket_amount = 8;
     */
    ticketAmount: bigint;
    /**
     * @generated from field: webcast.model.data.LiveEventInfo_EventPayMethod pay_method = 9;
     */
    payMethod: LiveEventInfo_EventPayMethod;
    /**
     * @generated from field: map<string, webcast.model.WalletPackage> wallet_pkg_dict = 10;
     */
    walletPkgDict: {
        [key: string]: WalletPackage;
    };
    /**
     * @generated from field: repeated webcast.model.data.EventUserInfo event_user_info = 11;
     */
    eventUserInfo: EventUserInfo[];
    /**
     * @generated from field: int64 subscribed_count = 12;
     */
    subscribedCount: bigint;
    /**
     * @generated from field: webcast.model.data.PaidEventPreview paid_event_preview = 13;
     */
    paidEventPreview?: PaidEventPreview | undefined;
    /**
     * @generated from field: webcast.model.WalletPackage wallet_package = 14;
     */
    walletPackage?: WalletPackage | undefined;
    /**
     * @generated from field: int64 register_type = 15;
     */
    registerType: bigint;
    /**
     * @generated from field: string periodic_settings = 16;
     */
    periodicSettings: string;
    /**
     * @generated from field: string periodic_shows = 17;
     */
    periodicShows: string;
};
/**
 * Describes the message webcast.model.LiveEventInfo.
 * Use `create(LiveEventInfoSchema)` to create a new message.
 */
export declare const LiveEventInfoSchema: GenMessage<LiveEventInfo>;
/**
 * @generated from message webcast.model.LynxCrossScreenEffectInfo
 */
export type LynxCrossScreenEffectInfo = Message<"webcast.model.LynxCrossScreenEffectInfo"> & {
    /**
     * @generated from field: repeated int64 effect_ids = 4;
     */
    effectIds: bigint[];
};
/**
 * Describes the message webcast.model.LynxCrossScreenEffectInfo.
 * Use `create(LynxCrossScreenEffectInfoSchema)` to create a new message.
 */
export declare const LynxCrossScreenEffectInfoSchema: GenMessage<LynxCrossScreenEffectInfo>;
/**
 * @generated from message webcast.model.MusicGiftInfo
 */
export type MusicGiftInfo = Message<"webcast.model.MusicGiftInfo"> & {
    /**
     * @generated from field: string artist_name = 1;
     */
    artistName: string;
    /**
     * @generated from field: webcast.model.AudioResource resource = 2;
     */
    resource?: AudioResource | undefined;
    /**
     * @generated from field: int64 song_id = 3;
     */
    songId: bigint;
    /**
     * @generated from field: int64 mood_id = 4;
     */
    moodId: bigint;
    /**
     * @generated from field: string song_name = 5;
     */
    songName: string;
};
/**
 * Describes the message webcast.model.MusicGiftInfo.
 * Use `create(MusicGiftInfoSchema)` to create a new message.
 */
export declare const MusicGiftInfoSchema: GenMessage<MusicGiftInfo>;
/**
 * @generated from message webcast.model.RandomGiftBubble
 */
export type RandomGiftBubble = Message<"webcast.model.RandomGiftBubble"> & {
    /**
     * @generated from field: string display_text = 1;
     */
    displayText: string;
    /**
     * @generated from field: webcast.model.base.ImageModel icon_dynamic_effect = 2;
     */
    iconDynamicEffect?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.RandomGiftBubble.
 * Use `create(RandomGiftBubbleSchema)` to create a new message.
 */
export declare const RandomGiftBubbleSchema: GenMessage<RandomGiftBubble>;
/**
 * @generated from message webcast.model.RandomGiftPanelBanner
 */
export type RandomGiftPanelBanner = Message<"webcast.model.RandomGiftPanelBanner"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel bg_image = 1;
     */
    bgImage?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel shading_image = 2;
     */
    shadingImage?: ImageModel | undefined;
    /**
     * @generated from field: int64 target_num = 3;
     */
    targetNum: bigint;
    /**
     * @generated from field: int64 collect_num = 4;
     */
    collectNum: bigint;
    /**
     * @generated from field: string display_text = 5;
     */
    displayText: string;
    /**
     * @generated from field: webcast.model.base.ImageModel left_icon = 6;
     */
    leftIcon?: ImageModel | undefined;
    /**
     * @generated from field: string schema_url = 7;
     */
    schemaUrl: string;
    /**
     * @generated from field: repeated string bg_color_values = 8;
     */
    bgColorValues: string[];
    /**
     * @generated from field: int64 round = 9;
     */
    round: bigint;
    /**
     * @generated from field: int32 banner_priority = 10;
     */
    bannerPriority: number;
};
/**
 * Describes the message webcast.model.RandomGiftPanelBanner.
 * Use `create(RandomGiftPanelBannerSchema)` to create a new message.
 */
export declare const RandomGiftPanelBannerSchema: GenMessage<RandomGiftPanelBanner>;
/**
 * @generated from message webcast.model.SchemeInfo
 */
export type SchemeInfo = Message<"webcast.model.SchemeInfo"> & {
    /**
     * @generated from field: webcast.model.data.GiftStruct_SchemeGiftType scheme_gift_type = 1;
     */
    schemeGiftType: GiftStruct_SchemeGiftType;
    /**
     * @generated from field: string scheme_url = 2;
     */
    schemeUrl: string;
    /**
     * @generated from field: string scheme_describe = 3;
     */
    schemeDescribe: string;
    /**
     * @generated from field: string scheme_describe_color = 4;
     */
    schemeDescribeColor: string;
};
/**
 * Describes the message webcast.model.SchemeInfo.
 * Use `create(SchemeInfoSchema)` to create a new message.
 */
export declare const SchemeInfoSchema: GenMessage<SchemeInfo>;
/**
 * @generated from message webcast.model.UGGiftStructInfo
 */
export type UGGiftStructInfo = Message<"webcast.model.UGGiftStructInfo"> & {
    /**
     * @generated from field: bool is_ug_gift = 1;
     */
    isUgGift: boolean;
    /**
     * @generated from field: int64 ug_points_cost = 2;
     */
    ugPointsCost: bigint;
};
/**
 * Describes the message webcast.model.UGGiftStructInfo.
 * Use `create(UGGiftStructInfoSchema)` to create a new message.
 */
export declare const UGGiftStructInfoSchema: GenMessage<UGGiftStructInfo>;
/**
 * @generated from message webcast.model.UserAttr
 */
export type UserAttr = Message<"webcast.model.UserAttr"> & {
    /**
     * @generated from field: bool is_muted = 1;
     */
    isMuted: boolean;
    /**
     * @generated from field: bool is_admin = 2;
     */
    isAdmin: boolean;
    /**
     * @generated from field: bool is_super_admin = 3;
     */
    isSuperAdmin: boolean;
    /**
     * @generated from field: int64 mute_duration = 4;
     */
    muteDuration: bigint;
    /**
     * @generated from field: map<int32, int32> admin_permissions = 5;
     */
    adminPermissions: {
        [key: number]: number;
    };
    /**
     * @generated from field: bool has_voting_function = 6;
     */
    hasVotingFunction: boolean;
    /**
     * @generated from field: bool is_channel_admin = 7;
     */
    isChannelAdmin: boolean;
};
/**
 * Describes the message webcast.model.UserAttr.
 * Use `create(UserAttrSchema)` to create a new message.
 */
export declare const UserAttrSchema: GenMessage<UserAttr>;
/**
 * @generated from message webcast.model.UserBadge
 */
export type UserBadge = Message<"webcast.model.UserBadge"> & {
    /**
     * @generated from field: map<int32, webcast.model.base.ImageModel> icons = 1;
     */
    icons: {
        [key: number]: ImageModel;
    };
    /**
     * @generated from field: string title = 2;
     */
    title: string;
};
/**
 * Describes the message webcast.model.UserBadge.
 * Use `create(UserBadgeSchema)` to create a new message.
 */
export declare const UserBadgeSchema: GenMessage<UserBadge>;
/**
 * @generated from message webcast.model.UserHonor
 */
export type UserHonor = Message<"webcast.model.UserHonor"> & {
    /**
     * @generated from field: int64 deprecated20 = 1;
     */
    deprecated20: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel diamond_icon = 2;
     */
    diamondIcon?: ImageModel | undefined;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 4;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: string next_name = 5;
     */
    nextName: string;
    /**
     * @generated from field: int32 level = 6;
     */
    level: number;
    /**
     * @generated from field: webcast.model.base.ImageModel next_icon = 7;
     */
    nextIcon?: ImageModel | undefined;
    /**
     * @generated from field: int64 deprecated23 = 9;
     */
    deprecated23: bigint;
    /**
     * @generated from field: int64 deprecated24 = 10;
     */
    deprecated24: bigint;
    /**
     * @generated from field: int64 deprecated25 = 11;
     */
    deprecated25: bigint;
    /**
     * @generated from field: string grade_describe = 13;
     */
    gradeDescribe: string;
    /**
     * @generated from field: repeated webcast.model.GradeIcon grade_icon_list = 14;
     */
    gradeIconList: GradeIcon[];
    /**
     * @generated from field: int64 screen_chat_type = 15;
     */
    screenChatType: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel im_icon = 16;
     */
    imIcon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel im_icon_with_level = 17;
     */
    imIconWithLevel?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel live_icon = 18;
     */
    liveIcon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel new_im_icon_with_level = 19;
     */
    newImIconWithLevel?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel new_live_icon = 20;
     */
    newLiveIcon?: ImageModel | undefined;
    /**
     * @generated from field: int64 upgrade_need_consume = 21;
     */
    upgradeNeedConsume: bigint;
    /**
     * @generated from field: string next_privileges = 22;
     */
    nextPrivileges: string;
    /**
     * @generated from field: webcast.model.base.ImageModel background = 23;
     */
    background?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel background_back = 24;
     */
    backgroundBack?: ImageModel | undefined;
    /**
     * @generated from field: int64 score = 25;
     */
    score: bigint;
    /**
     * @generated from field: string grade_banner = 1001;
     */
    gradeBanner: string;
};
/**
 * Describes the message webcast.model.UserHonor.
 * Use `create(UserHonorSchema)` to create a new message.
 */
export declare const UserHonorSchema: GenMessage<UserHonor>;
/**
 * @generated from message webcast.model.VoteUser
 */
export type VoteUser = Message<"webcast.model.VoteUser"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: string nick_name = 2;
     */
    nickName: string;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_thumb = 3;
     */
    avatarThumb?: ImageModel | undefined;
    /**
     * @generated from field: int64 vote_count = 4;
     */
    voteCount: bigint;
};
/**
 * Describes the message webcast.model.VoteUser.
 * Use `create(VoteUserSchema)` to create a new message.
 */
export declare const VoteUserSchema: GenMessage<VoteUser>;
/**
 * @generated from message webcast.model.WalletPackage
 */
export type WalletPackage = Message<"webcast.model.WalletPackage"> & {
    /**
     * @generated from field: string iap_id = 1;
     */
    iapId: string;
    /**
     * @generated from field: string usd_price_show = 2;
     */
    usdPriceShow: string;
};
/**
 * Describes the message webcast.model.WalletPackage.
 * Use `create(WalletPackageSchema)` to create a new message.
 */
export declare const WalletPackageSchema: GenMessage<WalletPackage>;
//# sourceMappingURL=messages_pb.d.ts.map