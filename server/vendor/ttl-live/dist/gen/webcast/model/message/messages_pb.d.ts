import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { SubPinCard } from "../../chatroom/api_pb.js";
import type { RivalExtraInfo } from "../../chatroom/interact_model_pb.js";
import type { CohostListUser, GiftGalleryBadgeInfo, GiftGalleryBadgeSection } from "../../chatroom/model/interact_messages_pb.js";
import type { BarrageMessage_BarrageType, BarrageMessage_IconDisplayType, BarrageMessage_RenderType, BarrageMessage_ShowType, BattleCardMsgType, BattleTaskMessageType, BizType, DisplayStyle, ExhibitionType, GameActionType, GameRankNotifyMessage_MsgType, GiftMessageIgnoreConfig, GiftMessageVersion, GiftSource, HitABStatus, JumpPage, LinkMicArmies_TriggerReason, LinkMicBattle_BattleAction, LinkMicBattlePunishFinish_Reason, MessageDisplayStyle, MessageType, OldSubscribeStatus, OpType, PartnershipDropsUpdateMessage_ChangeMode, PartnershipGameOfflineMessage_OfflineGameInfo_OfflineType, PinMessage_actionType, PublicAreaMessageCommon_CreatorSuccessInfo_Topic_DisplayLocation, PublicAreaMessageCommon_PortraitInfo_UserMetrics_UserMetricsType, RankTextMessage_RankTestMessageScene, ScoreType, ShowType, SubPinEventMessage_ActionType, SubscribeType, SubscribingStatus, TextType, UnionAnimationInfoType } from "../../im_pb.js";
import type { LayoutData, LinkerMediaChangeOperator } from "../../linkmic/common_pb.js";
import type { DisplayControl, RankUserEnigmaInfo } from "../../message_proto_pb.js";
import type { PerceptionSheetInfo } from "../../message_proto_perception_sheet_info_pb.js";
import type { EmoteModel, EmoteWithIndex } from "../base/emoji_pb.js";
import type { ImageModel } from "../base/messages_pb.js";
import type { BadgeStruct, PrivilegeLogExtra } from "../base/user_pb.js";
import type { User } from "../base/user_2_pb.js";
import type { Gift, GiftTrayInfo } from "../color_group_pb.js";
import type { ActionButtonType, AffiliatedInfo_StickerShowScene, EntranceGroupType, GamepadTaskType, GiftPermissionType, GiftTrayStyle, GuestMicCameraChangeScene, GuestMicCameraManageOp, LinkmicGiftExpressionStrategy, LinkmicReplyType, MsgFilter, PerceptionDialogIconType, PollAppealStatus, PollEndType, PollKind, PollTemplateStatus, ProfitRankType, TagType, TopicActionType, UserIdentity } from "../data/messages_pb.js";
import type { PlayScene, PlayUserTag } from "../data/multi_guest_play_pb.js";
import type { AssetsModel } from "../gift/assets_pb.js";
import type { DynamicRestriction, FlyingMicResources, LynxGiftExtra, MatchInfo, SecondaryEffectInfo } from "../gift/model_pb.js";
import type { AssetBundle } from "../gift/model_asset_bundle_pb.js";
import type { GiftEffect } from "../gift/model_gift_effect_pb.js";
import type { MultiLiveUpdateUserSettingContent } from "../linksetting_pb.js";
import type { AnchorMatchSettings, BattleABTestSetting, BattleComboInfo, BattleEffectInfos, BattleFeatureFlags, BattleTeamResult, BattleUserInfo, CommunityHeartMeInfo, CriticalStrikeCardInfo, EnigmaBattleExtraInfo, EnigmaBattleSetting, ExtraTimeCardInfo, HighScoreControlCfg, LeagueScoreInfo, MatchPunishExtraInfo, MatchThemeDisplayResource, PotionCardInfo, SmokeCardInfo, SpecialEffectCardInfo, TeamMatchCampaign, Top2CardInfo, Top3CardInfo, VaultGloveCardInfo, WaveCardInfo } from "../live_match_pb.js";
import type { BattleTeamUserArmies } from "../live_match_battle_team_user_armies_pb.js";
import type { BattleDisplayConfig, BattleResult, BattleRewardSettle, BattleSetting, BattleTaskSettle, BattleTaskStart, BattleTaskUpdate, BattleUserArmies, BattleUserInfoWrapper, SupportedActionsWrapper, UserArmiesWrapper } from "./battle_pb.js";
import type { Text } from "./common_pb.js";
import type { PerceptionDialogInfo, PunishEventInfo } from "./invite_top_host_info_pb.js";
import type { LinkerInviteContent } from "./linker/invite_message_pb.js";
import type { LinkedListChangeContent } from "./linker/linked_list_change_message_pb.js";
import type { LinkerListChangeContent } from "./linker/listchangemessage_pb.js";
import type { LinkerAcceptNoticeContent, LinkerCancelContent, LinkerEnterContent, LinkerKickOutContent, LinkerLeaveContent, LinkerMuteContent, LinkerRandomMatchContent } from "./linker/messages_pb.js";
import type { LinkerMicIdxUpdateContent } from "./linker/mic_update_pb.js";
import type { LinkerReplyContent } from "./linker/reply_message_pb.js";
import type { BorderInfo, GiftsBoxInfo, LikeEffect, VoteUser } from "../messages_pb.js";
import type { ClassInfo, RankTabInfo, SettleInfo, TeamRankBonusTime } from "../rank_pb.js";
import type { ViewerPicksInfo } from "../viewer_picks_pb.js";
import type { CommonMessageData } from "../../shared/message_pb.js";
import type { EnhancementTextInfo } from "../../shared/messages_pb.js";
import type { CommentTag, ControlAction, MemberMessageAction } from "../../synthetic_enums_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/messages.proto.
 */
export declare const file_webcast_model_message_messages: GenFile;
/**
 * @generated from message webcast.model.message.AccessControlCaptcha
 */
export type AccessControlCaptcha = Message<"webcast.model.message.AccessControlCaptcha"> & {
    /**
     * @generated from field: int64 captcha_record_id = 1;
     */
    captchaRecordId: bigint;
    /**
     * @generated from field: int64 room_id = 2;
     */
    roomId: bigint;
    /**
     * @generated from field: int64 verify_duration_in_sec = 3;
     */
    verifyDurationInSec: bigint;
};
/**
 * Describes the message webcast.model.message.AccessControlCaptcha.
 * Use `create(AccessControlCaptchaSchema)` to create a new message.
 */
export declare const AccessControlCaptchaSchema: GenMessage<AccessControlCaptcha>;
/**
 * @generated from message webcast.model.message.ActionButton
 */
export type ActionButton = Message<"webcast.model.message.ActionButton"> & {
    /**
     * @generated from field: webcast.model.data.ActionButtonType button_type = 1;
     */
    buttonType: ActionButtonType;
    /**
     * @generated from field: webcast.model.message.common.Text button_active_text = 2;
     */
    buttonActiveText?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text button_inactive_text = 3;
     */
    buttonInactiveText?: Text | undefined;
    /**
     * @generated from field: string button_schema = 4;
     */
    buttonSchema: string;
    /**
     * @generated from field: bool enable_button_inactive_text = 5;
     */
    enableButtonInactiveText: boolean;
};
/**
 * Describes the message webcast.model.message.ActionButton.
 * Use `create(ActionButtonSchema)` to create a new message.
 */
export declare const ActionButtonSchema: GenMessage<ActionButton>;
/**
 * @generated from message webcast.model.message.AddToCartButton
 */
export type AddToCartButton = Message<"webcast.model.message.AddToCartButton"> & {
    /**
     * @generated from field: int32 status = 1;
     */
    status: number;
    /**
     * @generated from field: string click_hint_starling = 2;
     */
    clickHintStarling: string;
};
/**
 * Describes the message webcast.model.message.AddToCartButton.
 * Use `create(AddToCartButtonSchema)` to create a new message.
 */
export declare const AddToCartButtonSchema: GenMessage<AddToCartButton>;
/**
 * @generated from message webcast.model.message.AffiliatedInfo
 */
export type AffiliatedInfo = Message<"webcast.model.message.AffiliatedInfo"> & {
    /**
     * @generated from field: webcast.model.message.common.Text text_content = 1;
     */
    textContent?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text gap_desc = 2;
     */
    gapDesc?: Text | undefined;
    /**
     * @generated from field: int64 real_time_rank = 3;
     */
    realTimeRank: bigint;
    /**
     * @generated from field: webcast.model.rank.TeamRankBonusTime team_rank_bonus_time = 4;
     */
    teamRankBonusTime?: TeamRankBonusTime | undefined;
    /**
     * @generated from field: webcast.model.rank.SettleInfo settle_info = 5;
     */
    settleInfo?: SettleInfo | undefined;
    /**
     * @generated from field: int64 midday_peak_time_stamp = 6;
     */
    middayPeakTimeStamp: bigint;
    /**
     * @generated from field: webcast.model.data.AffiliatedInfo_StickerShowScene sticker_show_scene = 7;
     */
    stickerShowScene: AffiliatedInfo_StickerShowScene;
    /**
     * @generated from field: int64 sticker_settle_show_duration = 8;
     */
    stickerSettleShowDuration: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text sticker_gap_desc = 9;
     */
    stickerGapDesc?: Text | undefined;
    /**
     * @generated from field: map<string, string> sticker_track_param = 10;
     */
    stickerTrackParam: {
        [key: string]: string;
    };
};
/**
 * Describes the message webcast.model.message.AffiliatedInfo.
 * Use `create(AffiliatedInfoSchema)` to create a new message.
 */
export declare const AffiliatedInfoSchema: GenMessage<AffiliatedInfo>;
/**
 * @generated from message webcast.model.message.AnchorPair
 */
export type AnchorPair = Message<"webcast.model.message.AnchorPair"> & {
    /**
     * @generated from field: int64 source_anchor_id = 1;
     */
    sourceAnchorId: bigint;
    /**
     * @generated from field: int64 target_anchor_id = 2;
     */
    targetAnchorId: bigint;
};
/**
 * Describes the message webcast.model.message.AnchorPair.
 * Use `create(AnchorPairSchema)` to create a new message.
 */
export declare const AnchorPairSchema: GenMessage<AnchorPair>;
/**
 * @generated from message webcast.model.message.AnimationData
 */
export type AnimationData = Message<"webcast.model.message.AnimationData"> & {
    /**
     * @generated from field: string gecko_channel_name = 1;
     */
    geckoChannelName: string;
    /**
     * @generated from field: string file_name = 2;
     */
    fileName: string;
    /**
     * @generated from field: int64 height = 3;
     */
    height: bigint;
    /**
     * @generated from field: int64 width = 4;
     */
    width: bigint;
    /**
     * @generated from field: int64 right_offset = 5;
     */
    rightOffset: bigint;
};
/**
 * Describes the message webcast.model.message.AnimationData.
 * Use `create(AnimationDataSchema)` to create a new message.
 */
export declare const AnimationDataSchema: GenMessage<AnimationData>;
/**
 * @generated from message webcast.model.message.AtmosphereTagInfo
 */
export type AtmosphereTagInfo = Message<"webcast.model.message.AtmosphereTagInfo"> & {
    /**
     * @generated from field: int32 tag_type = 1;
     */
    tagType: number;
    /**
     * @generated from field: repeated webcast.model.message.ProductAtmosphereTag atmosphere_tags = 2;
     */
    atmosphereTags: ProductAtmosphereTag[];
    /**
     * @generated from field: repeated webcast.model.message.ProductAtmosphereTag pin_atmosphere_tags = 3;
     */
    pinAtmosphereTags: ProductAtmosphereTag[];
};
/**
 * Describes the message webcast.model.message.AtmosphereTagInfo.
 * Use `create(AtmosphereTagInfoSchema)` to create a new message.
 */
export declare const AtmosphereTagInfoSchema: GenMessage<AtmosphereTagInfo>;
/**
 * @generated from message webcast.model.message.AwardCardNotice
 */
export type AwardCardNotice = Message<"webcast.model.message.AwardCardNotice"> & {
    /**
     * @generated from field: webcast.model.message.common.Text display_content = 1;
     */
    displayContent?: Text | undefined;
    /**
     * @generated from field: repeated webcast.model.live.match.BattleUserInfo awarded_users = 2;
     */
    awardedUsers: BattleUserInfo[];
};
/**
 * Describes the message webcast.model.message.AwardCardNotice.
 * Use `create(AwardCardNoticeSchema)` to create a new message.
 */
export declare const AwardCardNoticeSchema: GenMessage<AwardCardNotice>;
/**
 * @generated from message webcast.model.message.Background
 */
export type Background = Message<"webcast.model.message.Background"> & {
    /**
     * @generated from field: int32 width = 1;
     */
    width: number;
    /**
     * @generated from field: int32 height = 2;
     */
    height: number;
    /**
     * @generated from field: repeated string m_urls = 3;
     */
    mUrls: string[];
    /**
     * @generated from field: string m_uri = 4;
     */
    mUri: string;
};
/**
 * Describes the message webcast.model.message.Background.
 * Use `create(BackgroundSchema)` to create a new message.
 */
export declare const BackgroundSchema: GenMessage<Background>;
/**
 * @generated from message webcast.model.message.BarrageEvent
 */
export type BarrageEvent = Message<"webcast.model.message.BarrageEvent"> & {
    /**
     * @generated from field: string event_name = 1;
     */
    eventName: string;
    /**
     * @generated from field: map<string, string> params = 2;
     */
    params: {
        [key: string]: string;
    };
};
/**
 * Describes the message webcast.model.message.BarrageEvent.
 * Use `create(BarrageEventSchema)` to create a new message.
 */
export declare const BarrageEventSchema: GenMessage<BarrageEvent>;
/**
 * @generated from message webcast.model.message.BarrageTypeEcomLiveParam
 */
export type BarrageTypeEcomLiveParam = Message<"webcast.model.message.BarrageTypeEcomLiveParam"> & {
    /**
     * @generated from field: string plp_params = 1;
     */
    plpParams: string;
    /**
     * @generated from field: string scene = 2;
     */
    scene: string;
    /**
     * @generated from field: string anchored_product_id = 3;
     */
    anchoredProductId: string;
    /**
     * @generated from field: string anchored_label_key = 4;
     */
    anchoredLabelKey: string;
    /**
     * @generated from field: string entrance_form = 5;
     */
    entranceForm: string;
    /**
     * @generated from field: string anchored_product_source = 6;
     */
    anchoredProductSource: string;
    /**
     * @generated from field: int32 anchored_product_platform = 7;
     */
    anchoredProductPlatform: number;
};
/**
 * Describes the message webcast.model.message.BarrageTypeEcomLiveParam.
 * Use `create(BarrageTypeEcomLiveParamSchema)` to create a new message.
 */
export declare const BarrageTypeEcomLiveParamSchema: GenMessage<BarrageTypeEcomLiveParam>;
/**
 * @generated from message webcast.model.message.BarrageTypeFansLevelParam
 */
export type BarrageTypeFansLevelParam = Message<"webcast.model.message.BarrageTypeFansLevelParam"> & {
    /**
     * @generated from field: int32 current_grade = 1;
     */
    currentGrade: number;
    /**
     * @generated from field: int32 display_config = 2;
     */
    displayConfig: number;
    /**
     * @generated from field: webcast.model.base.user.User user = 4;
     */
    user?: User | undefined;
};
/**
 * Describes the message webcast.model.message.BarrageTypeFansLevelParam.
 * Use `create(BarrageTypeFansLevelParamSchema)` to create a new message.
 */
export declare const BarrageTypeFansLevelParamSchema: GenMessage<BarrageTypeFansLevelParam>;
/**
 * @generated from message webcast.model.message.BarrageTypeGiftGalleryParam
 */
export type BarrageTypeGiftGalleryParam = Message<"webcast.model.message.BarrageTypeGiftGalleryParam"> & {
    /**
     * @generated from field: int64 from_user_id = 1;
     */
    fromUserId: bigint;
    /**
     * @generated from field: int64 to_user_id = 2;
     */
    toUserId: bigint;
};
/**
 * Describes the message webcast.model.message.BarrageTypeGiftGalleryParam.
 * Use `create(BarrageTypeGiftGalleryParamSchema)` to create a new message.
 */
export declare const BarrageTypeGiftGalleryParamSchema: GenMessage<BarrageTypeGiftGalleryParam>;
/**
 * @generated from message webcast.model.message.BarrageTypeSubscribeGiftParam
 */
export type BarrageTypeSubscribeGiftParam = Message<"webcast.model.message.BarrageTypeSubscribeGiftParam"> & {
    /**
     * @generated from field: int64 gift_sub_count = 1;
     */
    giftSubCount: bigint;
    /**
     * @generated from field: bool show_gift_sub_count = 2;
     */
    showGiftSubCount: boolean;
    /**
     * @generated from field: webcast.im.GiftSource gift_source = 3;
     */
    giftSource: GiftSource;
};
/**
 * Describes the message webcast.model.message.BarrageTypeSubscribeGiftParam.
 * Use `create(BarrageTypeSubscribeGiftParamSchema)` to create a new message.
 */
export declare const BarrageTypeSubscribeGiftParamSchema: GenMessage<BarrageTypeSubscribeGiftParam>;
/**
 * @generated from message webcast.model.message.BarrageTypeUserGradeParam
 */
export type BarrageTypeUserGradeParam = Message<"webcast.model.message.BarrageTypeUserGradeParam"> & {
    /**
     * @generated from field: int32 current_grade = 1;
     */
    currentGrade: number;
    /**
     * @generated from field: int32 display_config = 2;
     */
    displayConfig: number;
    /**
     * @generated from field: string user_id = 3;
     */
    userId: string;
    /**
     * @generated from field: webcast.model.base.user.User user = 4;
     */
    user?: User | undefined;
};
/**
 * Describes the message webcast.model.message.BarrageTypeUserGradeParam.
 * Use `create(BarrageTypeUserGradeParamSchema)` to create a new message.
 */
export declare const BarrageTypeUserGradeParamSchema: GenMessage<BarrageTypeUserGradeParam>;
/**
 * @generated from message webcast.model.message.BattleInviteeGiftPermission
 */
export type BattleInviteeGiftPermission = Message<"webcast.model.message.BattleInviteeGiftPermission"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: int32 gift_permission_type = 2;
     */
    giftPermissionType: number;
};
/**
 * Describes the message webcast.model.message.BattleInviteeGiftPermission.
 * Use `create(BattleInviteeGiftPermissionSchema)` to create a new message.
 */
export declare const BattleInviteeGiftPermissionSchema: GenMessage<BattleInviteeGiftPermission>;
/**
 * @generated from message webcast.model.message.BillboardDisplayResult
 */
export type BillboardDisplayResult = Message<"webcast.model.message.BillboardDisplayResult"> & {
    /**
     * @generated from field: int32 billboard_type = 1;
     */
    billboardType: number;
    /**
     * @generated from field: string billboard_id = 2;
     */
    billboardId: string;
    /**
     * @generated from field: int32 display_result = 3;
     */
    displayResult: number;
};
/**
 * Describes the message webcast.model.message.BillboardDisplayResult.
 * Use `create(BillboardDisplayResultSchema)` to create a new message.
 */
export declare const BillboardDisplayResultSchema: GenMessage<BillboardDisplayResult>;
/**
 * @generated from message webcast.model.message.BillboardInfo
 */
export type BillboardInfo = Message<"webcast.model.message.BillboardInfo"> & {
    /**
     * @generated from field: int32 billboard_type = 1;
     */
    billboardType: number;
    /**
     * @generated from field: repeated string billboard_ids = 2;
     */
    billboardIds: string[];
    /**
     * @generated from field: int32 source_from = 3;
     */
    sourceFrom: number;
    /**
     * @generated from field: string born_time_ms = 4;
     */
    bornTimeMs: string;
    /**
     * @generated from field: int32 billboard_version = 5;
     */
    billboardVersion: number;
    /**
     * @generated from field: map<string, string> da_info = 6;
     */
    daInfo: {
        [key: string]: string;
    };
};
/**
 * Describes the message webcast.model.message.BillboardInfo.
 * Use `create(BillboardInfoSchema)` to create a new message.
 */
export declare const BillboardInfoSchema: GenMessage<BillboardInfo>;
/**
 * @generated from message webcast.model.message.BoostCard
 */
export type BoostCard = Message<"webcast.model.message.BoostCard"> & {
    /**
     * @generated from field: int64 m_card_id = 1;
     */
    mCardId: bigint;
    /**
     * @generated from field: int32 task_source = 2;
     */
    taskSource: number;
    /**
     * @generated from field: int64 task_id = 3;
     */
    taskId: bigint;
};
/**
 * Describes the message webcast.model.message.BoostCard.
 * Use `create(BoostCardSchema)` to create a new message.
 */
export declare const BoostCardSchema: GenMessage<BoostCard>;
/**
 * @generated from message webcast.model.message.CampaignBannerDisplay
 */
export type CampaignBannerDisplay = Message<"webcast.model.message.CampaignBannerDisplay"> & {
    /**
     * @generated from field: string image_url = 1;
     */
    imageUrl: string;
    /**
     * @generated from field: bool campaign_banner_is_display = 2;
     */
    campaignBannerIsDisplay: boolean;
    /**
     * @generated from field: int32 source_from = 3;
     */
    sourceFrom: number;
    /**
     * @generated from field: string born_time_ms = 4;
     */
    bornTimeMs: string;
    /**
     * @generated from field: int32 billboard_version = 5;
     */
    billboardVersion: number;
    /**
     * @generated from field: map<string, string> da_info = 6;
     */
    daInfo: {
        [key: string]: string;
    };
};
/**
 * Describes the message webcast.model.message.CampaignBannerDisplay.
 * Use `create(CampaignBannerDisplaySchema)` to create a new message.
 */
export declare const CampaignBannerDisplaySchema: GenMessage<CampaignBannerDisplay>;
/**
 * @generated from message webcast.model.message.CampaignBannerDisplayResult
 */
export type CampaignBannerDisplayResult = Message<"webcast.model.message.CampaignBannerDisplayResult"> & {
    /**
     * @generated from field: int32 campaign_banner_display_result = 1;
     */
    campaignBannerDisplayResult: number;
};
/**
 * Describes the message webcast.model.message.CampaignBannerDisplayResult.
 * Use `create(CampaignBannerDisplayResultSchema)` to create a new message.
 */
export declare const CampaignBannerDisplayResultSchema: GenMessage<CampaignBannerDisplayResult>;
/**
 * @generated from message webcast.model.message.CapsuleBizParams
 */
export type CapsuleBizParams = Message<"webcast.model.message.CapsuleBizParams"> & {
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsCohost cohost = 1;
     */
    cohost?: CapsuleBizParamsCohost | undefined;
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsRandomGift random_gift = 3;
     */
    randomGift?: CapsuleBizParamsRandomGift | undefined;
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsNewAnchorEffect effect_params = 4;
     */
    effectParams?: CapsuleBizParamsNewAnchorEffect | undefined;
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsCommentFlaggedPrompt comment_flagged_prompt = 5;
     */
    commentFlaggedPrompt?: CapsuleBizParamsCommentFlaggedPrompt | undefined;
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsMultiGuestInviteGuide multi_guest_invite_guide = 6;
     */
    multiGuestInviteGuide?: CapsuleBizParamsMultiGuestInviteGuide | undefined;
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsAnchorPinPerk anchor_pin_perk = 7;
     */
    anchorPinPerk?: CapsuleBizParamsAnchorPinPerk | undefined;
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsGamingModeratorsCommentGuide gaming_moderators_comment_guide = 8;
     */
    gamingModeratorsCommentGuide?: CapsuleBizParamsGamingModeratorsCommentGuide | undefined;
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsCommentMuteRulePrompt comment_mute_rule_prompt = 9;
     */
    commentMuteRulePrompt?: CapsuleBizParamsCommentMuteRulePrompt | undefined;
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsCommentFlaggedPromptForNewUser comment_flagged_prompt_for_new_user = 10;
     */
    commentFlaggedPromptForNewUser?: CapsuleBizParamsCommentFlaggedPromptForNewUser | undefined;
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsModeratorGuide moderator_guide_info = 11;
     */
    moderatorGuideInfo?: CapsuleBizParamsModeratorGuide | undefined;
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsMultiGuestApplyGuide multi_guest_apply_guide = 12;
     */
    multiGuestApplyGuide?: CapsuleBizParamsMultiGuestApplyGuide | undefined;
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsEcom ecom = 13;
     */
    ecom?: CapsuleBizParamsEcom | undefined;
};
/**
 * Describes the message webcast.model.message.CapsuleBizParams.
 * Use `create(CapsuleBizParamsSchema)` to create a new message.
 */
export declare const CapsuleBizParamsSchema: GenMessage<CapsuleBizParams>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsAnchorPinPerk
 */
export type CapsuleBizParamsAnchorPinPerk = Message<"webcast.model.message.CapsuleBizParamsAnchorPinPerk"> & {
    /**
     * @generated from field: int64 pin_id = 1;
     */
    pinId: bigint;
    /**
     * @generated from field: int32 pin_card_type = 2;
     */
    pinCardType: number;
    /**
     * @generated from field: string template_id = 3;
     */
    templateId: string;
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsAnchorPinPerk.
 * Use `create(CapsuleBizParamsAnchorPinPerkSchema)` to create a new message.
 */
export declare const CapsuleBizParamsAnchorPinPerkSchema: GenMessage<CapsuleBizParamsAnchorPinPerk>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsCohost
 */
export type CapsuleBizParamsCohost = Message<"webcast.model.message.CapsuleBizParamsCohost"> & {
    /**
     * @generated from field: int64 available_friend_number = 1;
     */
    availableFriendNumber: bigint;
    /**
     * @generated from field: bool is_followed_by_rival = 2;
     */
    isFollowedByRival: boolean;
    /**
     * @generated from field: webcast.model.base.user.User rival_user = 3;
     */
    rivalUser?: User | undefined;
    /**
     * @generated from field: string type = 4;
     */
    type: string;
    /**
     * @generated from field: webcast.model.message.UserModelPredictionData invitee_model_prediction_data = 5;
     */
    inviteeModelPredictionData?: UserModelPredictionData | undefined;
    /**
     * @generated from field: int64 invitee_room_id = 6;
     */
    inviteeRoomId: bigint;
    /**
     * @generated from field: int64 invitee_inner_channel_id = 7;
     */
    inviteeInnerChannelId: bigint;
    /**
     * @generated from field: webcast.model.base.user.User invitee_user_info = 8;
     */
    inviteeUserInfo?: User | undefined;
    /**
     * @generated from field: bool is_friend = 9;
     */
    isFriend: boolean;
    /**
     * @generated from field: string sub_type = 10;
     */
    subType: string;
    /**
     * @generated from field: string rival_vote_count = 11;
     */
    rivalVoteCount: string;
    /**
     * @generated from field: webcast.chatroom.model.interact.GiftGalleryBadgeSection anchor_class_label = 12;
     */
    anchorClassLabel?: GiftGalleryBadgeSection | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.GiftGalleryBadgeSection rival_class_label = 13;
     */
    rivalClassLabel?: GiftGalleryBadgeSection | undefined;
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsCohost.
 * Use `create(CapsuleBizParamsCohostSchema)` to create a new message.
 */
export declare const CapsuleBizParamsCohostSchema: GenMessage<CapsuleBizParamsCohost>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsCommentFlaggedPrompt
 */
export type CapsuleBizParamsCommentFlaggedPrompt = Message<"webcast.model.message.CapsuleBizParamsCommentFlaggedPrompt"> & {
    /**
     * @generated from field: int64 trigger = 1;
     */
    trigger: bigint;
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsCommentFlaggedPrompt.
 * Use `create(CapsuleBizParamsCommentFlaggedPromptSchema)` to create a new message.
 */
export declare const CapsuleBizParamsCommentFlaggedPromptSchema: GenMessage<CapsuleBizParamsCommentFlaggedPrompt>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsCommentFlaggedPromptForNewUser
 */
export type CapsuleBizParamsCommentFlaggedPromptForNewUser = Message<"webcast.model.message.CapsuleBizParamsCommentFlaggedPromptForNewUser"> & {
    /**
     * @generated from field: int64 trigger = 1;
     */
    trigger: bigint;
    /**
     * @generated from field: repeated int64 comment_ids = 2;
     */
    commentIds: bigint[];
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsCommentFlaggedPromptForNewUser.
 * Use `create(CapsuleBizParamsCommentFlaggedPromptForNewUserSchema)` to create a new message.
 */
export declare const CapsuleBizParamsCommentFlaggedPromptForNewUserSchema: GenMessage<CapsuleBizParamsCommentFlaggedPromptForNewUser>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsCommentMuteRulePrompt
 */
export type CapsuleBizParamsCommentMuteRulePrompt = Message<"webcast.model.message.CapsuleBizParamsCommentMuteRulePrompt"> & {
    /**
     * @generated from field: string content = 1;
     */
    content: string;
    /**
     * @generated from field: int64 user_cnt = 2;
     */
    userCnt: bigint;
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsCommentMuteRulePrompt.
 * Use `create(CapsuleBizParamsCommentMuteRulePromptSchema)` to create a new message.
 */
export declare const CapsuleBizParamsCommentMuteRulePromptSchema: GenMessage<CapsuleBizParamsCommentMuteRulePrompt>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsEcom
 */
export type CapsuleBizParamsEcom = Message<"webcast.model.message.CapsuleBizParamsEcom"> & {
    /**
     * @generated from field: webcast.model.message.CapsuleBizParamsEcom_EventTracking event_tracking = 3;
     */
    eventTracking?: CapsuleBizParamsEcom_EventTracking | undefined;
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsEcom.
 * Use `create(CapsuleBizParamsEcomSchema)` to create a new message.
 */
export declare const CapsuleBizParamsEcomSchema: GenMessage<CapsuleBizParamsEcom>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsEcom_EventTracking
 */
export type CapsuleBizParamsEcom_EventTracking = Message<"webcast.model.message.CapsuleBizParamsEcom_EventTracking"> & {
    /**
     * @generated from field: string ecom_recomm_id = 1;
     */
    ecomRecommId: string;
    /**
     * @generated from field: string ecom_recomm_trigger = 2;
     */
    ecomRecommTrigger: string;
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsEcom_EventTracking.
 * Use `create(CapsuleBizParamsEcom_EventTrackingSchema)` to create a new message.
 */
export declare const CapsuleBizParamsEcom_EventTrackingSchema: GenMessage<CapsuleBizParamsEcom_EventTracking>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsGamingModeratorsCommentGuide
 */
export type CapsuleBizParamsGamingModeratorsCommentGuide = Message<"webcast.model.message.CapsuleBizParamsGamingModeratorsCommentGuide"> & {
    /**
     * @generated from field: webcast.model.base.user.User user = 1;
     */
    user?: User | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text reply_msg_text = 2;
     */
    replyMsgText?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.RecommendComment recommend_text = 3;
     */
    recommendText?: RecommendComment | undefined;
    /**
     * @generated from field: int64 rule_id = 5;
     */
    ruleId: bigint;
    /**
     * @generated from field: webcast.model.message.GameAction action = 6;
     */
    action?: GameAction | undefined;
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsGamingModeratorsCommentGuide.
 * Use `create(CapsuleBizParamsGamingModeratorsCommentGuideSchema)` to create a new message.
 */
export declare const CapsuleBizParamsGamingModeratorsCommentGuideSchema: GenMessage<CapsuleBizParamsGamingModeratorsCommentGuide>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsModeratorGuide
 */
export type CapsuleBizParamsModeratorGuide = Message<"webcast.model.message.CapsuleBizParamsModeratorGuide"> & {
    /**
     * @generated from field: bool is_gift_moderator = 1;
     */
    isGiftModerator: boolean;
    /**
     * @generated from field: bool is_interactive_moderator = 2;
     */
    isInteractiveModerator: boolean;
    /**
     * @generated from field: bool is_tool_moderator = 3;
     */
    isToolModerator: boolean;
    /**
     * @generated from field: webcast.model.base.user.User hv_user = 4;
     */
    hvUser?: User | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text welcome_msg = 5;
     */
    welcomeMsg?: Text | undefined;
    /**
     * @generated from field: repeated string recommend_sensitive_words = 6;
     */
    recommendSensitiveWords: string[];
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsModeratorGuide.
 * Use `create(CapsuleBizParamsModeratorGuideSchema)` to create a new message.
 */
export declare const CapsuleBizParamsModeratorGuideSchema: GenMessage<CapsuleBizParamsModeratorGuide>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsMultiGuestApplyGuide
 */
export type CapsuleBizParamsMultiGuestApplyGuide = Message<"webcast.model.message.CapsuleBizParamsMultiGuestApplyGuide"> & {
    /**
     * @generated from field: webcast.model.base.user.User apply_user = 1;
     */
    applyUser?: User | undefined;
    /**
     * @generated from field: int32 display_strategy = 2;
     */
    displayStrategy: number;
    /**
     * @generated from field: string linkmic_audience_apply_notice_reason = 3;
     */
    linkmicAudienceApplyNoticeReason: string;
    /**
     * @generated from field: int32 notice_type = 4;
     */
    noticeType: number;
    /**
     * @generated from field: webcast.model.message.LinkmicAudienceApplyGuide apply_notice_guide = 5;
     */
    applyNoticeGuide?: LinkmicAudienceApplyGuide | undefined;
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsMultiGuestApplyGuide.
 * Use `create(CapsuleBizParamsMultiGuestApplyGuideSchema)` to create a new message.
 */
export declare const CapsuleBizParamsMultiGuestApplyGuideSchema: GenMessage<CapsuleBizParamsMultiGuestApplyGuide>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsMultiGuestInviteGuide
 */
export type CapsuleBizParamsMultiGuestInviteGuide = Message<"webcast.model.message.CapsuleBizParamsMultiGuestInviteGuide"> & {
    /**
     * @generated from field: webcast.model.base.user.User invitee_user = 1;
     */
    inviteeUser?: User | undefined;
    /**
     * @generated from field: int32 display_strategy = 2;
     */
    displayStrategy: number;
    /**
     * @generated from field: string linkmic_audience_invite_notice_reason = 3;
     */
    linkmicAudienceInviteNoticeReason: string;
    /**
     * @generated from field: int32 notice_type = 4;
     */
    noticeType: number;
    /**
     * @generated from field: webcast.model.message.LinkMicAudienceTurnOnGuide turn_on_guide = 5;
     */
    turnOnGuide?: LinkMicAudienceTurnOnGuide | undefined;
    /**
     * @generated from field: webcast.model.message.LinkMicAudienceInviteGuide notice_guide = 6;
     */
    noticeGuide?: LinkMicAudienceInviteGuide | undefined;
    /**
     * @generated from field: webcast.model.message.LinkmicAudienceInviteGroupChatMemberGuide group_chat_member_invite_guide = 7;
     */
    groupChatMemberInviteGuide?: LinkmicAudienceInviteGroupChatMemberGuide | undefined;
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsMultiGuestInviteGuide.
 * Use `create(CapsuleBizParamsMultiGuestInviteGuideSchema)` to create a new message.
 */
export declare const CapsuleBizParamsMultiGuestInviteGuideSchema: GenMessage<CapsuleBizParamsMultiGuestInviteGuide>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsNewAnchorEffect
 */
export type CapsuleBizParamsNewAnchorEffect = Message<"webcast.model.message.CapsuleBizParamsNewAnchorEffect"> & {
    /**
     * @generated from field: string effect_panel = 1;
     */
    effectPanel: string;
    /**
     * @generated from field: string resource_id = 2;
     */
    resourceId: string;
    /**
     * @generated from field: string category_id = 3;
     */
    categoryId: string;
    /**
     * @generated from field: string tab_key = 4;
     */
    tabKey: string;
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsNewAnchorEffect.
 * Use `create(CapsuleBizParamsNewAnchorEffectSchema)` to create a new message.
 */
export declare const CapsuleBizParamsNewAnchorEffectSchema: GenMessage<CapsuleBizParamsNewAnchorEffect>;
/**
 * @generated from message webcast.model.message.CapsuleBizParamsRandomGift
 */
export type CapsuleBizParamsRandomGift = Message<"webcast.model.message.CapsuleBizParamsRandomGift"> & {
    /**
     * @generated from field: int64 round = 1;
     */
    round: bigint;
    /**
     * @generated from field: string effect_name_key = 2;
     */
    effectNameKey: string;
    /**
     * @generated from field: webcast.model.Gift gift = 3;
     */
    gift?: Gift | undefined;
    /**
     * @generated from field: int64 type = 4;
     */
    type: bigint;
    /**
     * @generated from field: bool filter_host = 5;
     */
    filterHost: boolean;
};
/**
 * Describes the message webcast.model.message.CapsuleBizParamsRandomGift.
 * Use `create(CapsuleBizParamsRandomGiftSchema)` to create a new message.
 */
export declare const CapsuleBizParamsRandomGiftSchema: GenMessage<CapsuleBizParamsRandomGift>;
/**
 * @generated from message webcast.model.message.CaptionContent
 */
export type CaptionContent = Message<"webcast.model.message.CaptionContent"> & {
    /**
     * @generated from field: string lang = 1;
     */
    lang: string;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
};
/**
 * Describes the message webcast.model.message.CaptionContent.
 * Use `create(CaptionContentSchema)` to create a new message.
 */
export declare const CaptionContentSchema: GenMessage<CaptionContent>;
/**
 * @generated from message webcast.model.message.CardObtainGuide
 */
export type CardObtainGuide = Message<"webcast.model.message.CardObtainGuide"> & {
    /**
     * @generated from field: int32 not_in_use = 1;
     */
    notInUse: number;
};
/**
 * Describes the message webcast.model.message.CardObtainGuide.
 * Use `create(CardObtainGuideSchema)` to create a new message.
 */
export declare const CardObtainGuideSchema: GenMessage<CardObtainGuide>;
/**
 * @generated from message webcast.model.message.CohostListChangeContent
 */
export type CohostListChangeContent = Message<"webcast.model.message.CohostListChangeContent"> & {
    /**
     * @generated from field: repeated webcast.chatroom.model.interact.CohostListUser users = 1;
     */
    users: CohostListUser[];
};
/**
 * Describes the message webcast.model.message.CohostListChangeContent.
 * Use `create(CohostListChangeContentSchema)` to create a new message.
 */
export declare const CohostListChangeContentSchema: GenMessage<CohostListChangeContent>;
/**
 * @generated from message webcast.model.message.CommentLabelScore
 */
export type CommentLabelScore = Message<"webcast.model.message.CommentLabelScore"> & {
    /**
     * @generated from field: string label_name = 1;
     */
    labelName: string;
    /**
     * @generated from field: float score = 2;
     */
    score: number;
};
/**
 * Describes the message webcast.model.message.CommentLabelScore.
 * Use `create(CommentLabelScoreSchema)` to create a new message.
 */
export declare const CommentLabelScoreSchema: GenMessage<CommentLabelScore>;
/**
 * @generated from message webcast.model.message.CommentQualityScore
 */
export type CommentQualityScore = Message<"webcast.model.message.CommentQualityScore"> & {
    /**
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * @generated from field: int64 score = 2;
     */
    score: bigint;
};
/**
 * Describes the message webcast.model.message.CommentQualityScore.
 * Use `create(CommentQualityScoreSchema)` to create a new message.
 */
export declare const CommentQualityScoreSchema: GenMessage<CommentQualityScore>;
/**
 * @generated from message webcast.model.message.Contributor
 */
export type Contributor = Message<"webcast.model.message.Contributor"> & {
    /**
     * @generated from field: int64 score = 1;
     */
    score: bigint;
    /**
     * @generated from field: webcast.model.base.user.User user = 2;
     */
    user?: User | undefined;
    /**
     * @generated from field: int64 rank = 3;
     */
    rank: bigint;
    /**
     * @generated from field: int64 delta = 4;
     */
    delta: bigint;
};
/**
 * Describes the message webcast.model.message.Contributor.
 * Use `create(ContributorSchema)` to create a new message.
 */
export declare const ContributorSchema: GenMessage<Contributor>;
/**
 * @generated from message webcast.model.message.CreatorSuccessInfo
 */
export type CreatorSuccessInfo = Message<"webcast.model.message.CreatorSuccessInfo"> & {
    /**
     * @generated from field: repeated webcast.model.message.TagItem tags = 1;
     */
    tags: TagItem[];
    /**
     * @generated from field: webcast.model.message.Topic topic = 2;
     */
    topic?: Topic | undefined;
    /**
     * @generated from field: repeated webcast.model.message.Topic topic_list = 3;
     */
    topicList: Topic[];
    /**
     * @generated from field: webcast.model.message.FrequencyControl frequency_control = 4;
     */
    frequencyControl?: FrequencyControl | undefined;
};
/**
 * Describes the message webcast.model.message.CreatorSuccessInfo.
 * Use `create(CreatorSuccessInfoSchema)` to create a new message.
 */
export declare const CreatorSuccessInfoSchema: GenMessage<CreatorSuccessInfo>;
/**
 * @generated from message webcast.model.message.DelayParam
 */
export type DelayParam = Message<"webcast.model.message.DelayParam"> & {
    /**
     * @generated from field: int64 min_delay_ms = 1;
     */
    minDelayMs: bigint;
    /**
     * @generated from field: int64 max_delay_ms = 2;
     */
    maxDelayMs: bigint;
};
/**
 * Describes the message webcast.model.message.DelayParam.
 * Use `create(DelayParamSchema)` to create a new message.
 */
export declare const DelayParamSchema: GenMessage<DelayParam>;
/**
 * @generated from message webcast.model.message.Detail
 */
export type Detail = Message<"webcast.model.message.Detail"> & {
    /**
     * @generated from field: webcast.model.message.common.Text text = 1;
     */
    text?: Text | undefined;
    /**
     * @generated from field: int32 text_font_size = 2;
     */
    textFontSize: number;
    /**
     * @generated from field: webcast.model.base.ImageModel background = 3;
     */
    background?: ImageModel | undefined;
    /**
     * @generated from field: int64 start = 4;
     */
    start: bigint;
    /**
     * @generated from field: int64 duration = 5;
     */
    duration: bigint;
    /**
     * @generated from field: int32 x = 6;
     */
    x: number;
    /**
     * @generated from field: int32 y = 7;
     */
    y: number;
    /**
     * @generated from field: int32 width = 8;
     */
    width: number;
    /**
     * @generated from field: int32 height = 9;
     */
    height: number;
    /**
     * @generated from field: int32 shadow_dx = 10;
     */
    shadowDx: number;
    /**
     * @generated from field: int32 shadow_dy = 11;
     */
    shadowDy: number;
    /**
     * @generated from field: int32 shadow_radius = 12;
     */
    shadowRadius: number;
    /**
     * @generated from field: string shadow_color = 13;
     */
    shadowColor: string;
    /**
     * @generated from field: string stroke_color = 14;
     */
    strokeColor: string;
    /**
     * @generated from field: int32 stroke_width = 15;
     */
    strokeWidth: number;
};
/**
 * Describes the message webcast.model.message.Detail.
 * Use `create(DetailSchema)` to create a new message.
 */
export declare const DetailSchema: GenMessage<Detail>;
/**
 * @generated from message webcast.model.message.DispersionInfo
 */
export type DispersionInfo = Message<"webcast.model.message.DispersionInfo"> & {
    /**
     * @generated from field: int32 dispersion_path = 1;
     */
    dispersionPath: number;
    /**
     * @generated from field: webcast.model.message.DelayParam delay_param = 2;
     */
    delayParam?: DelayParam | undefined;
};
/**
 * Describes the message webcast.model.message.DispersionInfo.
 * Use `create(DispersionInfoSchema)` to create a new message.
 */
export declare const DispersionInfoSchema: GenMessage<DispersionInfo>;
/**
 * @generated from message webcast.model.message.EffectConfigBean
 */
export type EffectConfigBean = Message<"webcast.model.message.EffectConfigBean"> & {
    /**
     * @generated from field: int32 type = 1;
     */
    type: number;
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 2;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text text = 4;
     */
    text?: Text | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel badge = 8;
     */
    badge?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.message.EffectConfigBean.
 * Use `create(EffectConfigBeanSchema)` to create a new message.
 */
export declare const EffectConfigBeanSchema: GenMessage<EffectConfigBean>;
/**
 * @generated from message webcast.model.message.Extra
 */
export type Extra = Message<"webcast.model.message.Extra"> & {
    /**
     * @generated from field: string ban_info_url = 1;
     */
    banInfoUrl: string;
    /**
     * @generated from field: int64 reason_no = 2;
     */
    reasonNo: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text title = 3;
     */
    title?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text violation_reason = 4;
     */
    violationReason?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text content = 5;
     */
    content?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text got_it_button = 6;
     */
    gotItButton?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text ban_detail_button = 7;
     */
    banDetailButton?: Text | undefined;
    /**
     * @generated from field: string source = 8;
     */
    source: string;
};
/**
 * Describes the message webcast.model.message.Extra.
 * Use `create(ExtraSchema)` to create a new message.
 */
export declare const ExtraSchema: GenMessage<Extra>;
/**
 * @generated from message webcast.model.message.FanTicketRoomNoticeContent
 */
export type FanTicketRoomNoticeContent = Message<"webcast.model.message.FanTicketRoomNoticeContent"> & {
    /**
     * @generated from field: repeated webcast.model.message.UserFanTicket user_fan_ticket = 1;
     */
    userFanTicket: UserFanTicket[];
    /**
     * @generated from field: int64 total_linkmic_fan_ticket = 2;
     */
    totalLinkmicFanTicket: bigint;
    /**
     * @generated from field: int64 match_id = 3;
     */
    matchId: bigint;
    /**
     * @generated from field: int64 event_time = 4;
     */
    eventTime: bigint;
    /**
     * @generated from field: string fan_ticket_icon_url = 5;
     */
    fanTicketIconUrl: string;
    /**
     * @generated from field: int64 play_id = 6;
     */
    playId: bigint;
    /**
     * @generated from field: webcast.model.data.multi_guest_play.PlayScene play_scene = 7;
     */
    playScene: PlayScene;
    /**
     * @generated from field: int64 version = 8;
     */
    version: bigint;
    /**
     * @generated from field: webcast.im.ScoreType score_type = 9;
     */
    scoreType: ScoreType;
};
/**
 * Describes the message webcast.model.message.FanTicketRoomNoticeContent.
 * Use `create(FanTicketRoomNoticeContentSchema)` to create a new message.
 */
export declare const FanTicketRoomNoticeContentSchema: GenMessage<FanTicketRoomNoticeContent>;
/**
 * @generated from message webcast.model.message.FlashSaleAtmosphere
 */
export type FlashSaleAtmosphere = Message<"webcast.model.message.FlashSaleAtmosphere"> & {
    /**
     * @generated from field: int32 status = 1;
     */
    status: number;
    /**
     * @generated from field: int64 start_time = 2;
     */
    startTime: bigint;
    /**
     * @generated from field: int64 end_time = 3;
     */
    endTime: bigint;
    /**
     * @generated from field: int64 preheat_time = 4;
     */
    preheatTime: bigint;
    /**
     * @generated from field: webcast.model.message.FlashSaleEnhancementInfo enhancement_info = 5;
     */
    enhancementInfo?: FlashSaleEnhancementInfo | undefined;
    /**
     * @generated from field: int32 pdp_viewer_count = 6;
     */
    pdpViewerCount: number;
};
/**
 * Describes the message webcast.model.message.FlashSaleAtmosphere.
 * Use `create(FlashSaleAtmosphereSchema)` to create a new message.
 */
export declare const FlashSaleAtmosphereSchema: GenMessage<FlashSaleAtmosphere>;
/**
 * @generated from message webcast.model.message.FlashSaleAtmosphereInfo
 */
export type FlashSaleAtmosphereInfo = Message<"webcast.model.message.FlashSaleAtmosphereInfo"> & {
    /**
     * @generated from field: string product_id = 1;
     */
    productId: string;
    /**
     * @generated from field: int64 activity_id = 2;
     */
    activityId: bigint;
    /**
     * @generated from field: webcast.model.message.FlashSaleAtmosphere flash_sale_atmosphere = 3;
     */
    flashSaleAtmosphere?: FlashSaleAtmosphere | undefined;
    /**
     * @generated from field: webcast.model.message.FlashSaleStock flash_sale_stock = 4;
     */
    flashSaleStock?: FlashSaleStock | undefined;
    /**
     * @generated from field: bool pinned_product = 5;
     */
    pinnedProduct: boolean;
    /**
     * @generated from field: bool live_only_channel = 6;
     */
    liveOnlyChannel: boolean;
    /**
     * @generated from field: int32 creator_limit_type = 7;
     */
    creatorLimitType: number;
};
/**
 * Describes the message webcast.model.message.FlashSaleAtmosphereInfo.
 * Use `create(FlashSaleAtmosphereInfoSchema)` to create a new message.
 */
export declare const FlashSaleAtmosphereInfoSchema: GenMessage<FlashSaleAtmosphereInfo>;
/**
 * @generated from message webcast.model.message.FlashSaleEnhancementInfo
 */
export type FlashSaleEnhancementInfo = Message<"webcast.model.message.FlashSaleEnhancementInfo"> & {
    /**
     * @generated from field: int32 stock_show_status = 1;
     */
    stockShowStatus: number;
    /**
     * @generated from field: repeated webcast.model.message.UserInfo buyer_infos = 2;
     */
    buyerInfos: UserInfo[];
    /**
     * @generated from field: webcast.shared.EnhancementTextInfo enhancement_text_info = 3;
     */
    enhancementTextInfo?: EnhancementTextInfo | undefined;
};
/**
 * Describes the message webcast.model.message.FlashSaleEnhancementInfo.
 * Use `create(FlashSaleEnhancementInfoSchema)` to create a new message.
 */
export declare const FlashSaleEnhancementInfoSchema: GenMessage<FlashSaleEnhancementInfo>;
/**
 * @generated from message webcast.model.message.FlashSaleStock
 */
export type FlashSaleStock = Message<"webcast.model.message.FlashSaleStock"> & {
    /**
     * @generated from field: int32 activity_stock_status = 1;
     */
    activityStockStatus: number;
    /**
     * @generated from field: int32 activity_stock = 2;
     */
    activityStock: number;
    /**
     * @generated from field: string activity_stock_text = 3;
     */
    activityStockText: string;
    /**
     * @generated from field: int32 total_stock = 4;
     */
    totalStock: number;
};
/**
 * Describes the message webcast.model.message.FlashSaleStock.
 * Use `create(FlashSaleStockSchema)` to create a new message.
 */
export declare const FlashSaleStockSchema: GenMessage<FlashSaleStock>;
/**
 * @generated from message webcast.model.message.FrequencyControl
 */
export type FrequencyControl = Message<"webcast.model.message.FrequencyControl"> & {
    /**
     * @generated from field: string frequency_control_key = 1;
     */
    frequencyControlKey: string;
    /**
     * @generated from field: int64 window_size = 2;
     */
    windowSize: bigint;
    /**
     * @generated from field: int64 limit_in_window = 3;
     */
    limitInWindow: bigint;
};
/**
 * Describes the message webcast.model.message.FrequencyControl.
 * Use `create(FrequencyControlSchema)` to create a new message.
 */
export declare const FrequencyControlSchema: GenMessage<FrequencyControl>;
/**
 * @generated from message webcast.model.message.GalleryData
 */
export type GalleryData = Message<"webcast.model.message.GalleryData"> & {
    /**
     * @generated from field: map<int64, webcast.model.message.TitleData> progress = 1;
     */
    progress: {
        [key: string]: TitleData;
    };
    /**
     * @generated from field: int64 period = 2;
     */
    period: bigint;
    /**
     * @generated from field: int64 end_time_in_ms = 3;
     */
    endTimeInMs: bigint;
};
/**
 * Describes the message webcast.model.message.GalleryData.
 * Use `create(GalleryDataSchema)` to create a new message.
 */
export declare const GalleryDataSchema: GenMessage<GalleryData>;
/**
 * @generated from message webcast.model.message.GameAction
 */
export type GameAction = Message<"webcast.model.message.GameAction"> & {
    /**
     * @generated from field: webcast.im.GameActionType action_type = 1;
     */
    actionType: GameActionType;
    /**
     * @generated from field: webcast.im.JumpPage jump_page = 2;
     */
    jumpPage: JumpPage;
    /**
     * @generated from field: int64 follow_user_id = 3;
     */
    followUserId: bigint;
    /**
     * @generated from field: webcast.model.base.user.User follow_user_info = 4;
     */
    followUserInfo?: User | undefined;
    /**
     * @generated from field: string action_schema = 5;
     */
    actionSchema: string;
};
/**
 * Describes the message webcast.model.message.GameAction.
 * Use `create(GameActionSchema)` to create a new message.
 */
export declare const GameActionSchema: GenMessage<GameAction>;
/**
 * @generated from message webcast.model.message.GiftIMPriority
 */
export type GiftIMPriority = Message<"webcast.model.message.GiftIMPriority"> & {
    /**
     * @generated from field: repeated int64 queue_sizes = 1;
     */
    queueSizes: bigint[];
    /**
     * @generated from field: int64 self_queue_priority = 2;
     */
    selfQueuePriority: bigint;
    /**
     * @generated from field: int32 priority = 3;
     */
    priority: number;
};
/**
 * Describes the message webcast.model.message.GiftIMPriority.
 * Use `create(GiftIMPrioritySchema)` to create a new message.
 */
export declare const GiftIMPrioritySchema: GenMessage<GiftIMPriority>;
/**
 * @generated from message webcast.model.message.GiftInfo
 */
export type GiftInfo = Message<"webcast.model.message.GiftInfo"> & {
    /**
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * @generated from field: int64 price = 2;
     */
    price: bigint;
};
/**
 * Describes the message webcast.model.message.GiftInfo.
 * Use `create(GiftInfoSchema)` to create a new message.
 */
export declare const GiftInfoSchema: GenMessage<GiftInfo>;
/**
 * @generated from message webcast.model.message.GiftMonitorInfo
 */
export type GiftMonitorInfo = Message<"webcast.model.message.GiftMonitorInfo"> & {
    /**
     * @generated from field: int64 anchor_id = 1;
     */
    anchorId: bigint;
    /**
     * @generated from field: int64 profitapi_message_dur = 2;
     */
    profitapiMessageDur: bigint;
    /**
     * @generated from field: int64 send_gift_profit_api_start_ms = 3;
     */
    sendGiftProfitApiStartMs: bigint;
    /**
     * @generated from field: int64 send_gift_profit_core_start_ms = 4;
     */
    sendGiftProfitCoreStartMs: bigint;
    /**
     * @generated from field: int64 send_gift_req_start_ms = 5;
     */
    sendGiftReqStartMs: bigint;
    /**
     * @generated from field: int64 send_gift_send_message_success_ms = 6;
     */
    sendGiftSendMessageSuccessMs: bigint;
    /**
     * @generated from field: int64 send_profitapi_dur = 7;
     */
    sendProfitapiDur: bigint;
    /**
     * @generated from field: int64 to_user_id = 8;
     */
    toUserId: bigint;
    /**
     * @generated from field: int64 send_gift_start_client_local_ms = 9;
     */
    sendGiftStartClientLocalMs: bigint;
    /**
     * @generated from field: string from_platform = 10;
     */
    fromPlatform: string;
    /**
     * @generated from field: string from_version = 11;
     */
    fromVersion: string;
};
/**
 * Describes the message webcast.model.message.GiftMonitorInfo.
 * Use `create(GiftMonitorInfoSchema)` to create a new message.
 */
export declare const GiftMonitorInfoSchema: GenMessage<GiftMonitorInfo>;
/**
 * @generated from message webcast.model.message.GoalData
 */
export type GoalData = Message<"webcast.model.message.GoalData"> & {
    /**
     * @generated from field: int32 status = 1;
     */
    status: number;
    /**
     * @generated from field: map<int64, webcast.model.message.Progress> goal_progress = 2;
     */
    goalProgress: {
        [key: string]: Progress;
    };
};
/**
 * Describes the message webcast.model.message.GoalData.
 * Use `create(GoalDataSchema)` to create a new message.
 */
export declare const GoalDataSchema: GenMessage<GoalData>;
/**
 * @generated from message webcast.model.message.GuideMessageFrequencyRule
 */
export type GuideMessageFrequencyRule = Message<"webcast.model.message.GuideMessageFrequencyRule"> & {
    /**
     * @generated from field: int64 room_show_count = 1;
     */
    roomShowCount: bigint;
    /**
     * @generated from field: int64 day_show_count = 2;
     */
    dayShowCount: bigint;
};
/**
 * Describes the message webcast.model.message.GuideMessageFrequencyRule.
 * Use `create(GuideMessageFrequencyRuleSchema)` to create a new message.
 */
export declare const GuideMessageFrequencyRuleSchema: GenMessage<GuideMessageFrequencyRule>;
/**
 * @generated from message webcast.model.message.HourlyRankRewardInfo
 */
export type HourlyRankRewardInfo = Message<"webcast.model.message.HourlyRankRewardInfo"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: int64 asset_id = 2;
     */
    assetId: bigint;
    /**
     * @generated from field: webcast.model.message.WebcastRoomNotifyMessage notify = 3;
     */
    notify?: WebcastRoomNotifyMessage | undefined;
    /**
     * @generated from field: webcast.model.BorderInfo avatar_border = 4;
     */
    avatarBorder?: BorderInfo | undefined;
};
/**
 * Describes the message webcast.model.message.HourlyRankRewardInfo.
 * Use `create(HourlyRankRewardInfoSchema)` to create a new message.
 */
export declare const HourlyRankRewardInfoSchema: GenMessage<HourlyRankRewardInfo>;
/**
 * @generated from message webcast.model.message.Img
 */
export type Img = Message<"webcast.model.message.Img"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: int32 width = 2;
     */
    width: number;
    /**
     * @generated from field: int32 height = 3;
     */
    height: number;
    /**
     * @generated from field: string url = 4;
     */
    url: string;
};
/**
 * Describes the message webcast.model.message.Img.
 * Use `create(ImgSchema)` to create a new message.
 */
export declare const ImgSchema: GenMessage<Img>;
/**
 * @generated from message webcast.model.message.InteractiveGiftInfo
 */
export type InteractiveGiftInfo = Message<"webcast.model.message.InteractiveGiftInfo"> & {
    /**
     * @generated from field: int64 cross_screen_delay = 1;
     */
    crossScreenDelay: bigint;
    /**
     * @generated from field: int64 cross_screen_role = 2;
     */
    crossScreenRole: bigint;
    /**
     * @generated from field: webcast.im.GiftMessageIgnoreConfig ignore_config = 3;
     */
    ignoreConfig: GiftMessageIgnoreConfig;
    /**
     * @generated from field: int64 uniq_id = 4;
     */
    uniqId: bigint;
    /**
     * @generated from field: int64 to_user_team_id = 5;
     */
    toUserTeamId: bigint;
    /**
     * @generated from field: int64 ignore_component = 6;
     */
    ignoreComponent: bigint;
};
/**
 * Describes the message webcast.model.message.InteractiveGiftInfo.
 * Use `create(InteractiveGiftInfoSchema)` to create a new message.
 */
export declare const InteractiveGiftInfoSchema: GenMessage<InteractiveGiftInfo>;
/**
 * @generated from message webcast.model.message.LinkMicAudienceInviteGuide
 */
export type LinkMicAudienceInviteGuide = Message<"webcast.model.message.LinkMicAudienceInviteGuide"> & {
    /**
     * @generated from field: webcast.model.message.LinkMicAudienceNoticeText content = 1;
     */
    content?: LinkMicAudienceNoticeText | undefined;
    /**
     * @generated from field: webcast.model.message.LinkMicAudienceNoticeText button_content = 2;
     */
    buttonContent?: LinkMicAudienceNoticeText | undefined;
    /**
     * @generated from field: webcast.model.base.user.User user = 3;
     */
    user?: User | undefined;
    /**
     * @generated from field: int32 display_strategy = 4;
     */
    displayStrategy: number;
    /**
     * @generated from field: string linkmic_audience_invite_notice_reason = 5;
     */
    linkmicAudienceInviteNoticeReason: string;
};
/**
 * Describes the message webcast.model.message.LinkMicAudienceInviteGuide.
 * Use `create(LinkMicAudienceInviteGuideSchema)` to create a new message.
 */
export declare const LinkMicAudienceInviteGuideSchema: GenMessage<LinkMicAudienceInviteGuide>;
/**
 * @generated from message webcast.model.message.LinkMicAudienceNoticeText
 */
export type LinkMicAudienceNoticeText = Message<"webcast.model.message.LinkMicAudienceNoticeText"> & {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
};
/**
 * Describes the message webcast.model.message.LinkMicAudienceNoticeText.
 * Use `create(LinkMicAudienceNoticeTextSchema)` to create a new message.
 */
export declare const LinkMicAudienceNoticeTextSchema: GenMessage<LinkMicAudienceNoticeText>;
/**
 * @generated from message webcast.model.message.LinkMicAudienceTurnOnGuide
 */
export type LinkMicAudienceTurnOnGuide = Message<"webcast.model.message.LinkMicAudienceTurnOnGuide"> & {
    /**
     * @generated from field: webcast.model.message.LinkMicAudienceNoticeText content = 1;
     */
    content?: LinkMicAudienceNoticeText | undefined;
    /**
     * @generated from field: webcast.model.message.LinkMicAudienceNoticeText button_content = 2;
     */
    buttonContent?: LinkMicAudienceNoticeText | undefined;
};
/**
 * Describes the message webcast.model.message.LinkMicAudienceTurnOnGuide.
 * Use `create(LinkMicAudienceTurnOnGuideSchema)` to create a new message.
 */
export declare const LinkMicAudienceTurnOnGuideSchema: GenMessage<LinkMicAudienceTurnOnGuide>;
/**
 * @generated from message webcast.model.message.LinkerCloseContent
 */
export type LinkerCloseContent = Message<"webcast.model.message.LinkerCloseContent"> & {};
/**
 * Describes the message webcast.model.message.LinkerCloseContent.
 * Use `create(LinkerCloseContentSchema)` to create a new message.
 */
export declare const LinkerCloseContentSchema: GenMessage<LinkerCloseContent>;
/**
 * @generated from message webcast.model.message.LinkerCreateContent
 */
export type LinkerCreateContent = Message<"webcast.model.message.LinkerCreateContent"> & {
    /**
     * @generated from field: int64 owner_id = 1;
     */
    ownerId: bigint;
    /**
     * @generated from field: int64 owner_room_id = 2;
     */
    ownerRoomId: bigint;
    /**
     * @generated from field: int64 link_type = 3;
     */
    linkType: bigint;
};
/**
 * Describes the message webcast.model.message.LinkerCreateContent.
 * Use `create(LinkerCreateContentSchema)` to create a new message.
 */
export declare const LinkerCreateContentSchema: GenMessage<LinkerCreateContent>;
/**
 * @generated from message webcast.model.message.LinkerMediaChangeContent
 */
export type LinkerMediaChangeContent = Message<"webcast.model.message.LinkerMediaChangeContent"> & {
    /**
     * @generated from field: webcast.model.data.GuestMicCameraManageOp op = 1;
     */
    op: GuestMicCameraManageOp;
    /**
     * @generated from field: int64 to_user_id = 2;
     */
    toUserId: bigint;
    /**
     * @generated from field: int64 anchor_id = 3;
     */
    anchorId: bigint;
    /**
     * @generated from field: int64 room_id = 4;
     */
    roomId: bigint;
    /**
     * @generated from field: webcast.model.data.GuestMicCameraChangeScene change_scene = 5;
     */
    changeScene: GuestMicCameraChangeScene;
    /**
     * @generated from field: webcast.linkmic.common.LinkerMediaChangeOperator operator_info = 7;
     */
    operatorInfo?: LinkerMediaChangeOperator | undefined;
};
/**
 * Describes the message webcast.model.message.LinkerMediaChangeContent.
 * Use `create(LinkerMediaChangeContentSchema)` to create a new message.
 */
export declare const LinkerMediaChangeContentSchema: GenMessage<LinkerMediaChangeContent>;
/**
 * @generated from message webcast.model.message.LinkerSysKickOutContent
 */
export type LinkerSysKickOutContent = Message<"webcast.model.message.LinkerSysKickOutContent"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: string linkmic_id_str = 2;
     */
    linkmicIdStr: string;
};
/**
 * Describes the message webcast.model.message.LinkerSysKickOutContent.
 * Use `create(LinkerSysKickOutContentSchema)` to create a new message.
 */
export declare const LinkerSysKickOutContentSchema: GenMessage<LinkerSysKickOutContent>;
/**
 * @generated from message webcast.model.message.LinkerUpdateUserContent
 */
export type LinkerUpdateUserContent = Message<"webcast.model.message.LinkerUpdateUserContent"> & {
    /**
     * @generated from field: int64 from_user_id = 1;
     */
    fromUserId: bigint;
    /**
     * @generated from field: int64 to_user_id = 2;
     */
    toUserId: bigint;
    /**
     * @generated from field: map<string, string> update_info = 3;
     */
    updateInfo: {
        [key: string]: string;
    };
};
/**
 * Describes the message webcast.model.message.LinkerUpdateUserContent.
 * Use `create(LinkerUpdateUserContentSchema)` to create a new message.
 */
export declare const LinkerUpdateUserContentSchema: GenMessage<LinkerUpdateUserContent>;
/**
 * @generated from message webcast.model.message.LinkerWaitingListChangeContent
 */
export type LinkerWaitingListChangeContent = Message<"webcast.model.message.LinkerWaitingListChangeContent"> & {};
/**
 * Describes the message webcast.model.message.LinkerWaitingListChangeContent.
 * Use `create(LinkerWaitingListChangeContentSchema)` to create a new message.
 */
export declare const LinkerWaitingListChangeContentSchema: GenMessage<LinkerWaitingListChangeContent>;
/**
 * @generated from message webcast.model.message.LinkmicAudienceApplyGuide
 */
export type LinkmicAudienceApplyGuide = Message<"webcast.model.message.LinkmicAudienceApplyGuide"> & {
    /**
     * @generated from field: webcast.model.message.LinkMicAudienceNoticeText content = 1;
     */
    content?: LinkMicAudienceNoticeText | undefined;
    /**
     * @generated from field: webcast.model.message.LinkMicAudienceNoticeText button_content = 2;
     */
    buttonContent?: LinkMicAudienceNoticeText | undefined;
    /**
     * @generated from field: webcast.model.base.user.User user = 3;
     */
    user?: User | undefined;
    /**
     * @generated from field: int32 display_strategy = 4;
     */
    displayStrategy: number;
    /**
     * @generated from field: string linkmic_audience_apply_notice_reason = 5;
     */
    linkmicAudienceApplyNoticeReason: string;
    /**
     * @generated from field: int64 display_position = 6;
     */
    displayPosition: bigint;
    /**
     * @generated from field: string trigger_type = 7;
     */
    triggerType: string;
    /**
     * @generated from field: string request_id = 8;
     */
    requestId: string;
    /**
     * @generated from field: string linkmic_id = 9;
     */
    linkmicId: string;
};
/**
 * Describes the message webcast.model.message.LinkmicAudienceApplyGuide.
 * Use `create(LinkmicAudienceApplyGuideSchema)` to create a new message.
 */
export declare const LinkmicAudienceApplyGuideSchema: GenMessage<LinkmicAudienceApplyGuide>;
/**
 * @generated from message webcast.model.message.LinkmicAudienceInviteGroupChatMemberGuide
 */
export type LinkmicAudienceInviteGroupChatMemberGuide = Message<"webcast.model.message.LinkmicAudienceInviteGroupChatMemberGuide"> & {
    /**
     * @generated from field: webcast.model.message.LinkMicAudienceNoticeText content = 1;
     */
    content?: LinkMicAudienceNoticeText | undefined;
    /**
     * @generated from field: webcast.model.message.LinkMicAudienceNoticeText button_content = 2;
     */
    buttonContent?: LinkMicAudienceNoticeText | undefined;
    /**
     * @generated from field: repeated int64 group_member_user_ids = 3;
     */
    groupMemberUserIds: bigint[];
};
/**
 * Describes the message webcast.model.message.LinkmicAudienceInviteGroupChatMemberGuide.
 * Use `create(LinkmicAudienceInviteGroupChatMemberGuideSchema)` to create a new message.
 */
export declare const LinkmicAudienceInviteGroupChatMemberGuideSchema: GenMessage<LinkmicAudienceInviteGroupChatMemberGuide>;
/**
 * @generated from message webcast.model.message.LinkmicUserToastContent
 */
export type LinkmicUserToastContent = Message<"webcast.model.message.LinkmicUserToastContent"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: int64 room_id = 2;
     */
    roomId: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text display_text = 3;
     */
    displayText?: Text | undefined;
    /**
     * @generated from field: int64 leaved_user_id = 4;
     */
    leavedUserId: bigint;
};
/**
 * Describes the message webcast.model.message.LinkmicUserToastContent.
 * Use `create(LinkmicUserToastContentSchema)` to create a new message.
 */
export declare const LinkmicUserToastContentSchema: GenMessage<LinkmicUserToastContent>;
/**
 * @generated from message webcast.model.message.LivePermissionInfo
 */
export type LivePermissionInfo = Message<"webcast.model.message.LivePermissionInfo"> & {
    /**
     * @generated from field: int64 end_time = 1;
     */
    endTime: bigint;
    /**
     * @generated from field: string reason = 2;
     */
    reason: string;
};
/**
 * Describes the message webcast.model.message.LivePermissionInfo.
 * Use `create(LivePermissionInfoSchema)` to create a new message.
 */
export declare const LivePermissionInfoSchema: GenMessage<LivePermissionInfo>;
/**
 * @generated from message webcast.model.message.MessageDisplayInfo
 */
export type MessageDisplayInfo = Message<"webcast.model.message.MessageDisplayInfo"> & {
    /**
     * @generated from field: int32 duration_type = 1;
     */
    durationType: number;
    /**
     * @generated from field: int64 show_duration_ms = 2;
     */
    showDurationMs: bigint;
    /**
     * @generated from field: int64 incr_duration_ms = 3;
     */
    incrDurationMs: bigint;
    /**
     * @generated from field: int32 stay_style = 4;
     */
    stayStyle: number;
};
/**
 * Describes the message webcast.model.message.MessageDisplayInfo.
 * Use `create(MessageDisplayInfoSchema)` to create a new message.
 */
export declare const MessageDisplayInfoSchema: GenMessage<MessageDisplayInfo>;
/**
 * @generated from message webcast.model.message.MessageEntity
 */
export type MessageEntity = Message<"webcast.model.message.MessageEntity"> & {
    /**
     * @generated from field: webcast.model.message.WebcastRoomNotifyMessage notify = 1;
     */
    notify?: WebcastRoomNotifyMessage | undefined;
};
/**
 * Describes the message webcast.model.message.MessageEntity.
 * Use `create(MessageEntitySchema)` to create a new message.
 */
export declare const MessageEntitySchema: GenMessage<MessageEntity>;
/**
 * @generated from message webcast.model.message.NotifyHighlightContent
 */
export type NotifyHighlightContent = Message<"webcast.model.message.NotifyHighlightContent"> & {
    /**
     * @generated from field: string content = 1;
     */
    content: string;
    /**
     * @generated from field: bool need_high_light = 2;
     */
    needHighLight: boolean;
};
/**
 * Describes the message webcast.model.message.NotifyHighlightContent.
 * Use `create(NotifyHighlightContentSchema)` to create a new message.
 */
export declare const NotifyHighlightContentSchema: GenMessage<NotifyHighlightContent>;
/**
 * @generated from message webcast.model.message.NotifyHighlightInfo
 */
export type NotifyHighlightInfo = Message<"webcast.model.message.NotifyHighlightInfo"> & {
    /**
     * @generated from field: repeated webcast.model.message.NotifyHighlightContent contents = 1;
     */
    contents: NotifyHighlightContent[];
    /**
     * @generated from field: string high_light_color = 2;
     */
    highLightColor: string;
};
/**
 * Describes the message webcast.model.message.NotifyHighlightInfo.
 * Use `create(NotifyHighlightInfoSchema)` to create a new message.
 */
export declare const NotifyHighlightInfoSchema: GenMessage<NotifyHighlightInfo>;
/**
 * @generated from message webcast.model.message.OfflineGameInfo
 */
export type OfflineGameInfo = Message<"webcast.model.message.OfflineGameInfo"> & {
    /**
     * @generated from field: string task_id = 1;
     */
    taskId: string;
    /**
     * @generated from field: string toast_text = 2;
     */
    toastText: string;
    /**
     * @generated from field: int32 task_list_len = 3;
     */
    taskListLen: number;
    /**
     * @generated from field: webcast.im.PartnershipGameOfflineMessage_OfflineGameInfo_OfflineType offline_type = 4;
     */
    offlineType: PartnershipGameOfflineMessage_OfflineGameInfo_OfflineType;
    /**
     * @generated from field: string toast_title = 5;
     */
    toastTitle: string;
    /**
     * @generated from field: string game_id = 6;
     */
    gameId: string;
    /**
     * @generated from field: webcast.model.data.GamepadTaskType task_type = 7;
     */
    taskType: GamepadTaskType;
};
/**
 * Describes the message webcast.model.message.OfflineGameInfo.
 * Use `create(OfflineGameInfoSchema)` to create a new message.
 */
export declare const OfflineGameInfoSchema: GenMessage<OfflineGameInfo>;
/**
 * @generated from message webcast.model.message.OperationInfo
 */
export type OperationInfo = Message<"webcast.model.message.OperationInfo"> & {
    /**
     * @generated from field: webcast.model.message.OperationState initial_state = 1;
     */
    initialState?: OperationState | undefined;
    /**
     * @generated from field: webcast.model.message.OperationState success_state = 2;
     */
    successState?: OperationState | undefined;
    /**
     * @generated from field: webcast.model.message.OperationState failure_state = 3;
     */
    failureState?: OperationState | undefined;
};
/**
 * Describes the message webcast.model.message.OperationInfo.
 * Use `create(OperationInfoSchema)` to create a new message.
 */
export declare const OperationInfoSchema: GenMessage<OperationInfo>;
/**
 * @generated from message webcast.model.message.OperationState
 */
export type OperationState = Message<"webcast.model.message.OperationState"> & {
    /**
     * @generated from field: string scene = 1;
     */
    scene: string;
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 2;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text text = 3;
     */
    text?: Text | undefined;
    /**
     * @generated from field: string schema = 4;
     */
    schema: string;
    /**
     * @generated from field: int64 animation_style = 5;
     */
    animationStyle: bigint;
    /**
     * @generated from field: int64 duration = 6;
     */
    duration: bigint;
};
/**
 * Describes the message webcast.model.message.OperationState.
 * Use `create(OperationStateSchema)` to create a new message.
 */
export declare const OperationStateSchema: GenMessage<OperationState>;
/**
 * @generated from message webcast.model.message.PollBasicInfo
 */
export type PollBasicInfo = Message<"webcast.model.message.PollBasicInfo"> & {
    /**
     * @generated from field: string poll_sponsor = 1;
     */
    pollSponsor: string;
    /**
     * @generated from field: int64 gift_id = 2;
     */
    giftId: bigint;
    /**
     * @generated from field: string title = 3;
     */
    title: string;
    /**
     * @generated from field: bool is_suggested_question = 4;
     */
    isSuggestedQuestion: boolean;
    /**
     * @generated from field: int64 user_cnt = 5;
     */
    userCnt: bigint;
    /**
     * @generated from field: webcast.model.Gift gift = 6;
     */
    gift?: Gift | undefined;
    /**
     * @generated from field: string poll_id_str = 7;
     */
    pollIdStr: string;
    /**
     * @generated from field: string suggested_question_key = 8;
     */
    suggestedQuestionKey: string;
    /**
     * @generated from field: int64 poll_duration = 9;
     */
    pollDuration: bigint;
    /**
     * @generated from field: int64 time_remain = 10;
     */
    timeRemain: bigint;
    /**
     * @generated from field: int64 poll_index = 11;
     */
    pollIndex: bigint;
    /**
     * @generated from field: int64 template_id = 12;
     */
    templateId: bigint;
};
/**
 * Describes the message webcast.model.message.PollBasicInfo.
 * Use `create(PollBasicInfoSchema)` to create a new message.
 */
export declare const PollBasicInfoSchema: GenMessage<PollBasicInfo>;
/**
 * @generated from message webcast.model.message.PollEndContent
 */
export type PollEndContent = Message<"webcast.model.message.PollEndContent"> & {
    /**
     * @generated from field: webcast.model.data.PollEndType end_type = 1;
     */
    endType: PollEndType;
    /**
     * @generated from field: repeated webcast.model.message.PollOptionInfo option_list = 2;
     */
    optionList: PollOptionInfo[];
    /**
     * @generated from field: webcast.model.base.user.User operator = 3;
     */
    operator?: User | undefined;
};
/**
 * Describes the message webcast.model.message.PollEndContent.
 * Use `create(PollEndContentSchema)` to create a new message.
 */
export declare const PollEndContentSchema: GenMessage<PollEndContent>;
/**
 * @generated from message webcast.model.message.PollOptionInfo
 */
export type PollOptionInfo = Message<"webcast.model.message.PollOptionInfo"> & {
    /**
     * @generated from field: int64 votes = 1;
     */
    votes: bigint;
    /**
     * @generated from field: string display_content = 2;
     */
    displayContent: string;
    /**
     * @generated from field: int32 option_idx = 3;
     */
    optionIdx: number;
    /**
     * @generated from field: repeated webcast.model.VoteUser vote_user_list = 4;
     */
    voteUserList: VoteUser[];
};
/**
 * Describes the message webcast.model.message.PollOptionInfo.
 * Use `create(PollOptionInfoSchema)` to create a new message.
 */
export declare const PollOptionInfoSchema: GenMessage<PollOptionInfo>;
/**
 * @generated from message webcast.model.message.PollStartContent
 */
export type PollStartContent = Message<"webcast.model.message.PollStartContent"> & {
    /**
     * @generated from field: int64 start_time = 1;
     */
    startTime: bigint;
    /**
     * @generated from field: int64 end_time = 2;
     */
    endTime: bigint;
    /**
     * @generated from field: repeated webcast.model.message.PollOptionInfo option_list = 3;
     */
    optionList: PollOptionInfo[];
    /**
     * @generated from field: string title = 4;
     */
    title: string;
    /**
     * @generated from field: webcast.model.base.user.User operator = 5;
     */
    operator?: User | undefined;
};
/**
 * Describes the message webcast.model.message.PollStartContent.
 * Use `create(PollStartContentSchema)` to create a new message.
 */
export declare const PollStartContentSchema: GenMessage<PollStartContent>;
/**
 * @generated from message webcast.model.message.PollUpdateVotesContent
 */
export type PollUpdateVotesContent = Message<"webcast.model.message.PollUpdateVotesContent"> & {
    /**
     * @generated from field: repeated webcast.model.message.PollOptionInfo option_list = 2;
     */
    optionList: PollOptionInfo[];
    /**
     * @generated from field: webcast.model.base.user.User operator = 3;
     */
    operator?: User | undefined;
};
/**
 * Describes the message webcast.model.message.PollUpdateVotesContent.
 * Use `create(PollUpdateVotesContentSchema)` to create a new message.
 */
export declare const PollUpdateVotesContentSchema: GenMessage<PollUpdateVotesContent>;
/**
 * @generated from message webcast.model.message.PortraitInfo
 */
export type PortraitInfo = Message<"webcast.model.message.PortraitInfo"> & {
    /**
     * @generated from field: repeated webcast.model.message.UserMetrics user_metrics = 1;
     */
    userMetrics: UserMetrics[];
    /**
     * @generated from field: repeated webcast.model.message.PortraitTag portrait_tag = 2;
     */
    portraitTag: PortraitTag[];
};
/**
 * Describes the message webcast.model.message.PortraitInfo.
 * Use `create(PortraitInfoSchema)` to create a new message.
 */
export declare const PortraitInfoSchema: GenMessage<PortraitInfo>;
/**
 * @generated from message webcast.model.message.PortraitTag
 */
export type PortraitTag = Message<"webcast.model.message.PortraitTag"> & {
    /**
     * @generated from field: string tag_id = 1;
     */
    tagId: string;
    /**
     * @generated from field: int64 priority = 2;
     */
    priority: bigint;
    /**
     * @generated from field: string show_value = 3;
     */
    showValue: string;
    /**
     * @generated from field: string show_args = 4;
     */
    showArgs: string;
};
/**
 * Describes the message webcast.model.message.PortraitTag.
 * Use `create(PortraitTagSchema)` to create a new message.
 */
export declare const PortraitTagSchema: GenMessage<PortraitTag>;
/**
 * @generated from message webcast.model.message.ProductAtmosphereTag
 */
export type ProductAtmosphereTag = Message<"webcast.model.message.ProductAtmosphereTag"> & {
    /**
     * @generated from field: string product_id = 1;
     */
    productId: string;
    /**
     * @generated from field: string tag_desc = 2;
     */
    tagDesc: string;
    /**
     * @generated from field: int64 count = 3;
     */
    count: bigint;
};
/**
 * Describes the message webcast.model.message.ProductAtmosphereTag.
 * Use `create(ProductAtmosphereTagSchema)` to create a new message.
 */
export declare const ProductAtmosphereTagSchema: GenMessage<ProductAtmosphereTag>;
/**
 * @generated from message webcast.model.message.ProductSnapShot
 */
export type ProductSnapShot = Message<"webcast.model.message.ProductSnapShot"> & {
    /**
     * @generated from field: string product_id = 1;
     */
    productId: string;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * @generated from field: webcast.model.message.Img cover = 3;
     */
    cover?: Img | undefined;
    /**
     * @generated from field: int32 stock_type = 4;
     */
    stockType: number;
    /**
     * @generated from field: int64 timestamp = 5;
     */
    timestamp: bigint;
    /**
     * @generated from field: webcast.model.message.AddToCartButton add_to_cart_button = 6;
     */
    addToCartButton?: AddToCartButton | undefined;
};
/**
 * Describes the message webcast.model.message.ProductSnapShot.
 * Use `create(ProductSnapShotSchema)` to create a new message.
 */
export declare const ProductSnapShotSchema: GenMessage<ProductSnapShot>;
/**
 * @generated from message webcast.model.message.Progress
 */
export type Progress = Message<"webcast.model.message.Progress"> & {
    /**
     * @generated from field: int64 current_progress = 1;
     */
    currentProgress: bigint;
    /**
     * @generated from field: int64 target = 2;
     */
    target: bigint;
    /**
     * @generated from field: int64 expired_timestamp_in_ms = 3;
     */
    expiredTimestampInMs: bigint;
};
/**
 * Describes the message webcast.model.message.Progress.
 * Use `create(ProgressSchema)` to create a new message.
 */
export declare const ProgressSchema: GenMessage<Progress>;
/**
 * @generated from message webcast.model.message.PromotionInfo
 */
export type PromotionInfo = Message<"webcast.model.message.PromotionInfo"> & {
    /**
     * @generated from field: string promotion_id = 1;
     */
    promotionId: string;
    /**
     * @generated from field: string failed_message = 2;
     */
    failedMessage: string;
    /**
     * @generated from field: repeated string product_ids = 100;
     */
    productIds: string[];
};
/**
 * Describes the message webcast.model.message.PromotionInfo.
 * Use `create(PromotionInfoSchema)` to create a new message.
 */
export declare const PromotionInfoSchema: GenMessage<PromotionInfo>;
/**
 * @generated from message webcast.model.message.PublicAreaCommon
 */
export type PublicAreaCommon = Message<"webcast.model.message.PublicAreaCommon"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel user_label = 1;
     */
    userLabel?: ImageModel | undefined;
    /**
     * @generated from field: int64 user_consume_in_room = 2;
     */
    userConsumeInRoom: bigint;
};
/**
 * Describes the message webcast.model.message.PublicAreaCommon.
 * Use `create(PublicAreaCommonSchema)` to create a new message.
 */
export declare const PublicAreaCommonSchema: GenMessage<PublicAreaCommon>;
/**
 * @generated from message webcast.model.message.PublicAreaMessageCommon
 */
export type PublicAreaMessageCommon = Message<"webcast.model.message.PublicAreaMessageCommon"> & {
    /**
     * @generated from field: int64 scroll_gap_count = 1;
     */
    scrollGapCount: bigint;
    /**
     * @generated from field: int64 anchor_scroll_gap_count = 2;
     */
    anchorScrollGapCount: bigint;
    /**
     * @generated from field: bool release_to_scroll_area = 3;
     */
    releaseToScrollArea: boolean;
    /**
     * @generated from field: bool anchor_release_to_scroll_area = 4;
     */
    anchorReleaseToScrollArea: boolean;
    /**
     * @generated from field: bool is_anchor_marked = 5;
     */
    isAnchorMarked: boolean;
    /**
     * @generated from field: webcast.model.message.CreatorSuccessInfo creator_success_info = 6;
     */
    creatorSuccessInfo?: CreatorSuccessInfo | undefined;
    /**
     * @generated from field: webcast.model.message.PortraitInfo portrait_info = 7;
     */
    portraitInfo?: PortraitInfo | undefined;
    /**
     * @generated from field: webcast.model.message.UserInteractionInfo user_interaction_info = 8;
     */
    userInteractionInfo?: UserInteractionInfo | undefined;
    /**
     * @generated from field: int64 admin_fold_type = 9;
     */
    adminFoldType: bigint;
    /**
     * @generated from field: webcast.model.message.MessageDisplayInfo display_info = 10;
     */
    displayInfo?: MessageDisplayInfo | undefined;
    /**
     * @generated from field: bool hide_above_scroll_area = 11;
     */
    hideAboveScrollArea: boolean;
    /**
     * @generated from field: webcast.model.message.OperationInfo operation_info = 12;
     */
    operationInfo?: OperationInfo | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text dynamic_display_text = 13;
     */
    dynamicDisplayText?: Text | undefined;
};
/**
 * Describes the message webcast.model.message.PublicAreaMessageCommon.
 * Use `create(PublicAreaMessageCommonSchema)` to create a new message.
 */
export declare const PublicAreaMessageCommonSchema: GenMessage<PublicAreaMessageCommon>;
/**
 * @generated from message webcast.model.message.Question
 */
export type Question = Message<"webcast.model.message.Question"> & {
    /**
     * @generated from field: int64 question_id = 1;
     */
    questionId: bigint;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
    /**
     * @generated from field: int32 answer_status = 3;
     */
    answerStatus: number;
    /**
     * @generated from field: int64 create_time = 4;
     */
    createTime: bigint;
    /**
     * @generated from field: webcast.model.base.user.User user = 5;
     */
    user?: User | undefined;
    /**
     * @generated from field: int32 create_from = 20;
     */
    createFrom: number;
    /**
     * @generated from field: int32 answer_from = 21;
     */
    answerFrom: number;
};
/**
 * Describes the message webcast.model.message.Question.
 * Use `create(QuestionSchema)` to create a new message.
 */
export declare const QuestionSchema: GenMessage<Question>;
/**
 * @generated from message webcast.model.message.RankAnimationInfo
 */
export type RankAnimationInfo = Message<"webcast.model.message.RankAnimationInfo"> & {
    /**
     * @generated from field: int32 type = 1;
     */
    type: number;
    /**
     * @generated from field: string background_color_string = 2;
     */
    backgroundColorString: string;
    /**
     * @generated from field: webcast.model.message.common.Text content_text = 3;
     */
    contentText?: Text | undefined;
    /**
     * @generated from field: int64 duration = 4;
     */
    duration: bigint;
    /**
     * @generated from field: repeated webcast.model.message.common.Text tile_content = 5;
     */
    tileContent: Text[];
};
/**
 * Describes the message webcast.model.message.RankAnimationInfo.
 * Use `create(RankAnimationInfoSchema)` to create a new message.
 */
export declare const RankAnimationInfoSchema: GenMessage<RankAnimationInfo>;
/**
 * @generated from message webcast.model.message.RankListTabInfo
 */
export type RankListTabInfo = Message<"webcast.model.message.RankListTabInfo"> & {
    /**
     * @generated from field: repeated webcast.model.rank.RankTabInfo tabs = 1;
     */
    tabs: RankTabInfo[];
    /**
     * @generated from field: int64 supported_version = 2;
     */
    supportedVersion: bigint;
};
/**
 * Describes the message webcast.model.message.RankListTabInfo.
 * Use `create(RankListTabInfoSchema)` to create a new message.
 */
export declare const RankListTabInfoSchema: GenMessage<RankListTabInfo>;
/**
 * @generated from message webcast.model.message.RankUpdate
 */
export type RankUpdate = Message<"webcast.model.message.RankUpdate"> & {
    /**
     * @generated from field: webcast.model.data.ProfitRankType rank_type = 1;
     */
    rankType: ProfitRankType;
    /**
     * @generated from field: int64 own_rank = 2;
     */
    ownRank: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text default_content = 3;
     */
    defaultContent?: Text | undefined;
    /**
     * @generated from field: bytes prompt = 4;
     */
    prompt: Uint8Array;
    /**
     * @generated from field: bool show_entrance_animation = 5;
     */
    showEntranceAnimation: boolean;
    /**
     * @generated from field: int64 countdown = 6;
     */
    countdown: bigint;
    /**
     * @generated from field: webcast.model.message.RankAnimationInfo animation_info = 7;
     */
    animationInfo?: RankAnimationInfo | undefined;
    /**
     * @generated from field: int32 belong_type = 8;
     */
    belongType: number;
    /**
     * @generated from field: webcast.model.data.ProfitRankType request_first_show_type = 9;
     */
    requestFirstShowType: ProfitRankType;
    /**
     * @generated from field: int64 supported_version = 10;
     */
    supportedVersion: bigint;
    /**
     * @generated from field: bool owneronrank = 11;
     */
    owneronrank: boolean;
    /**
     * @generated from field: webcast.model.base.ImageModel entranceicon = 12;
     */
    entranceicon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.message.AffiliatedInfo affiliated_info = 13;
     */
    affiliatedInfo?: AffiliatedInfo | undefined;
    /**
     * @generated from field: webcast.model.rank.ClassInfo class_info = 14;
     */
    classInfo?: ClassInfo | undefined;
    /**
     * @generated from field: int64 current_score = 15;
     */
    currentScore: bigint;
    /**
     * @generated from field: string list_schema = 16;
     */
    listSchema: string;
};
/**
 * Describes the message webcast.model.message.RankUpdate.
 * Use `create(RankUpdateSchema)` to create a new message.
 */
export declare const RankUpdateSchema: GenMessage<RankUpdate>;
/**
 * @generated from message webcast.model.message.RecommendComment
 */
export type RecommendComment = Message<"webcast.model.message.RecommendComment"> & {
    /**
     * @generated from field: int64 priority = 1;
     */
    priority: bigint;
    /**
     * @generated from field: int64 duration = 2;
     */
    duration: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text recommend_text = 3;
     */
    recommendText?: Text | undefined;
    /**
     * @generated from field: int64 tips_type = 4;
     */
    tipsType: bigint;
};
/**
 * Describes the message webcast.model.message.RecommendComment.
 * Use `create(RecommendCommentSchema)` to create a new message.
 */
export declare const RecommendCommentSchema: GenMessage<RecommendComment>;
/**
 * @generated from message webcast.model.message.RefreshLiveBagInfo
 */
export type RefreshLiveBagInfo = Message<"webcast.model.message.RefreshLiveBagInfo"> & {
    /**
     * @generated from field: repeated int32 refresh_live_bag_types = 1;
     */
    refreshLiveBagTypes: number[];
};
/**
 * Describes the message webcast.model.message.RefreshLiveBagInfo.
 * Use `create(RefreshLiveBagInfoSchema)` to create a new message.
 */
export declare const RefreshLiveBagInfoSchema: GenMessage<RefreshLiveBagInfo>;
/**
 * @generated from message webcast.model.message.RightLabel
 */
export type RightLabel = Message<"webcast.model.message.RightLabel"> & {
    /**
     * @generated from field: string background_color = 1;
     */
    backgroundColor: string;
    /**
     * @generated from field: webcast.model.message.common.Text content = 2;
     */
    content?: Text | undefined;
    /**
     * @generated from field: int64 height = 3;
     */
    height: bigint;
};
/**
 * Describes the message webcast.model.message.RightLabel.
 * Use `create(RightLabelSchema)` to create a new message.
 */
export declare const RightLabelSchema: GenMessage<RightLabel>;
/**
 * @generated from message webcast.model.message.RoomBasedGiftData
 */
export type RoomBasedGiftData = Message<"webcast.model.message.RoomBasedGiftData"> & {
    /**
     * @generated from field: map<int64, webcast.model.message.RoomBasedGifts> room_based_gifts = 2;
     */
    roomBasedGifts: {
        [key: string]: RoomBasedGifts;
    };
};
/**
 * Describes the message webcast.model.message.RoomBasedGiftData.
 * Use `create(RoomBasedGiftDataSchema)` to create a new message.
 */
export declare const RoomBasedGiftDataSchema: GenMessage<RoomBasedGiftData>;
/**
 * @generated from message webcast.model.message.RoomBasedGifts
 */
export type RoomBasedGifts = Message<"webcast.model.message.RoomBasedGifts"> & {
    /**
     * @generated from field: repeated webcast.model.message.GiftInfo gift_info = 1;
     */
    giftInfo: GiftInfo[];
};
/**
 * Describes the message webcast.model.message.RoomBasedGifts.
 * Use `create(RoomBasedGiftsSchema)` to create a new message.
 */
export declare const RoomBasedGiftsSchema: GenMessage<RoomBasedGifts>;
/**
 * @generated from message webcast.model.message.RoomNotifyMessageExtra
 */
export type RoomNotifyMessageExtra = Message<"webcast.model.message.RoomNotifyMessageExtra"> & {
    /**
     * @generated from field: int64 duration = 1;
     */
    duration: bigint;
    /**
     * @generated from field: webcast.model.message.Background background = 2;
     */
    background?: Background | undefined;
    /**
     * @generated from field: webcast.model.message.NotifyHighlightInfo content_list = 3;
     */
    contentList?: NotifyHighlightInfo | undefined;
};
/**
 * Describes the message webcast.model.message.RoomNotifyMessageExtra.
 * Use `create(RoomNotifyMessageExtraSchema)` to create a new message.
 */
export declare const RoomNotifyMessageExtraSchema: GenMessage<RoomNotifyMessageExtra>;
/**
 * @generated from message webcast.model.message.RoomNotifyMessage_EventTracking
 */
export type RoomNotifyMessage_EventTracking = Message<"webcast.model.message.RoomNotifyMessage_EventTracking"> & {
    /**
     * @generated from field: int64 gift_sub_sender_id = 1;
     */
    giftSubSenderId: bigint;
    /**
     * @generated from field: int64 gift_sub_receiver_id = 2;
     */
    giftSubReceiverId: bigint;
    /**
     * @generated from field: int64 anchor_id = 3;
     */
    anchorId: bigint;
    /**
     * @generated from field: int64 gift_sub_order_create_time = 4;
     */
    giftSubOrderCreateTime: bigint;
};
/**
 * Describes the message webcast.model.message.RoomNotifyMessage_EventTracking.
 * Use `create(RoomNotifyMessage_EventTrackingSchema)` to create a new message.
 */
export declare const RoomNotifyMessage_EventTrackingSchema: GenMessage<RoomNotifyMessage_EventTracking>;
/**
 * @generated from message webcast.model.message.SpecialEffectNotice
 */
export type SpecialEffectNotice = Message<"webcast.model.message.SpecialEffectNotice"> & {
    /**
     * @generated from field: int64 score = 1;
     */
    score: bigint;
    /**
     * @generated from field: int64 from_user_id = 2;
     */
    fromUserId: bigint;
    /**
     * @generated from field: int64 to_anchor_id = 3;
     */
    toAnchorId: bigint;
    /**
     * @generated from field: repeated webcast.model.message.AnchorPair affected_anchor_pairs = 4;
     */
    affectedAnchorPairs: AnchorPair[];
    /**
     * @generated from field: int32 effect_type = 5;
     */
    effectType: number;
    /**
     * @generated from field: webcast.model.live.match.CommunityHeartMeInfo community_heart_me_info = 6;
     */
    communityHeartMeInfo?: CommunityHeartMeInfo | undefined;
    /**
     * @generated from field: string community_heart_me_info_str = 7;
     */
    communityHeartMeInfoStr: string;
};
/**
 * Describes the message webcast.model.message.SpecialEffectNotice.
 * Use `create(SpecialEffectNoticeSchema)` to create a new message.
 */
export declare const SpecialEffectNoticeSchema: GenMessage<SpecialEffectNotice>;
/**
 * @generated from message webcast.model.message.SpecifiedDisplayText
 */
export type SpecifiedDisplayText = Message<"webcast.model.message.SpecifiedDisplayText"> & {
    /**
     * @generated from field: int64 uid = 1;
     */
    uid: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text display_text = 2;
     */
    displayText?: Text | undefined;
};
/**
 * Describes the message webcast.model.message.SpecifiedDisplayText.
 * Use `create(SpecifiedDisplayTextSchema)` to create a new message.
 */
export declare const SpecifiedDisplayTextSchema: GenMessage<SpecifiedDisplayText>;
/**
 * @generated from message webcast.model.message.SponsorshipInfo
 */
export type SponsorshipInfo = Message<"webcast.model.message.SponsorshipInfo"> & {
    /**
     * @generated from field: int64 gift_id = 1;
     */
    giftId: bigint;
    /**
     * @generated from field: int64 sponsor_id = 2;
     */
    sponsorId: bigint;
    /**
     * @generated from field: bool light_gift_up = 3;
     */
    lightGiftUp: boolean;
    /**
     * @generated from field: string unlighted_gift_icon = 4;
     */
    unlightedGiftIcon: string;
    /**
     * @generated from field: string gift_gallery_detail_page_scheme_url = 5;
     */
    giftGalleryDetailPageSchemeUrl: string;
    /**
     * @generated from field: bool gift_gallery_click_sponsor = 6;
     */
    giftGalleryClickSponsor: boolean;
    /**
     * @generated from field: webcast.model.data.GiftTrayStyle gift_tray_style = 7;
     */
    giftTrayStyle: GiftTrayStyle;
    /**
     * @generated from field: bool become_all_sponsored = 21;
     */
    becomeAllSponsored: boolean;
};
/**
 * Describes the message webcast.model.message.SponsorshipInfo.
 * Use `create(SponsorshipInfoSchema)` to create a new message.
 */
export declare const SponsorshipInfoSchema: GenMessage<SponsorshipInfo>;
/**
 * @generated from message webcast.model.message.TagItem
 */
export type TagItem = Message<"webcast.model.message.TagItem"> & {
    /**
     * @generated from field: webcast.model.data.TagType tag_type = 1;
     */
    tagType: TagType;
    /**
     * @generated from field: webcast.model.message.common.Text tag_text = 2;
     */
    tagText?: Text | undefined;
    /**
     * @generated from field: int64 tag_value = 3;
     */
    tagValue: bigint;
    /**
     * @generated from field: int32 display_location = 4;
     */
    displayLocation: number;
    /**
     * @generated from field: map<string, string> event_tracking_fields = 5;
     */
    eventTrackingFields: {
        [key: string]: string;
    };
    /**
     * @generated from field: string biz_name = 6;
     */
    bizName: string;
    /**
     * @generated from field: bool disable_count_frequency_control = 10;
     */
    disableCountFrequencyControl: boolean;
    /**
     * @generated from field: bool disable_crm_click = 11;
     */
    disableCrmClick: boolean;
};
/**
 * Describes the message webcast.model.message.TagItem.
 * Use `create(TagItemSchema)` to create a new message.
 */
export declare const TagItemSchema: GenMessage<TagItem>;
/**
 * @generated from message webcast.model.message.TeamUsersInfo
 */
export type TeamUsersInfo = Message<"webcast.model.message.TeamUsersInfo"> & {
    /**
     * @generated from field: int64 team_id = 1;
     */
    teamId: bigint;
    /**
     * @generated from field: repeated int64 user_id = 2;
     */
    userId: bigint[];
};
/**
 * Describes the message webcast.model.message.TeamUsersInfo.
 * Use `create(TeamUsersInfoSchema)` to create a new message.
 */
export declare const TeamUsersInfoSchema: GenMessage<TeamUsersInfo>;
/**
 * @generated from message webcast.model.message.TemplateContent
 */
export type TemplateContent = Message<"webcast.model.message.TemplateContent"> & {
    /**
     * @generated from field: int64 template_id = 1;
     */
    templateId: bigint;
    /**
     * @generated from field: string template_id_str = 2;
     */
    templateIdStr: string;
    /**
     * @generated from field: webcast.model.data.PollTemplateStatus status = 3;
     */
    status: PollTemplateStatus;
    /**
     * @generated from field: webcast.model.data.PollKind poll_kind = 4;
     */
    pollKind: PollKind;
    /**
     * @generated from field: webcast.model.data.PollAppealStatus appeal_status = 5;
     */
    appealStatus: PollAppealStatus;
    /**
     * @generated from field: string violation_id_str = 6;
     */
    violationIdStr: string;
};
/**
 * Describes the message webcast.model.message.TemplateContent.
 * Use `create(TemplateContentSchema)` to create a new message.
 */
export declare const TemplateContentSchema: GenMessage<TemplateContent>;
/**
 * @generated from message webcast.model.message.TextEffect
 */
export type TextEffect = Message<"webcast.model.message.TextEffect"> & {
    /**
     * @generated from field: webcast.model.message.Detail portrait = 1;
     */
    portrait?: Detail | undefined;
    /**
     * @generated from field: webcast.model.message.Detail landscape = 2;
     */
    landscape?: Detail | undefined;
};
/**
 * Describes the message webcast.model.message.TextEffect.
 * Use `create(TextEffectSchema)` to create a new message.
 */
export declare const TextEffectSchema: GenMessage<TextEffect>;
/**
 * @generated from message webcast.model.message.TimeInfo
 */
export type TimeInfo = Message<"webcast.model.message.TimeInfo"> & {
    /**
     * @generated from field: int64 client_start_ms = 1;
     */
    clientStartMs: bigint;
    /**
     * @generated from field: int64 api_recv_time_ms = 2;
     */
    apiRecvTimeMs: bigint;
    /**
     * @generated from field: int64 api_send_to_goim_ms = 3;
     */
    apiSendToGoimMs: bigint;
};
/**
 * Describes the message webcast.model.message.TimeInfo.
 * Use `create(TimeInfoSchema)` to create a new message.
 */
export declare const TimeInfoSchema: GenMessage<TimeInfo>;
/**
 * @generated from message webcast.model.message.TitleData
 */
export type TitleData = Message<"webcast.model.message.TitleData"> & {
    /**
     * @generated from field: int64 goal_count = 1;
     */
    goalCount: bigint;
    /**
     * @generated from field: int64 current_sponsor_id = 2;
     */
    currentSponsorId: bigint;
};
/**
 * Describes the message webcast.model.message.TitleData.
 * Use `create(TitleDataSchema)` to create a new message.
 */
export declare const TitleDataSchema: GenMessage<TitleData>;
/**
 * @generated from message webcast.model.message.Topic
 */
export type Topic = Message<"webcast.model.message.Topic"> & {
    /**
     * @generated from field: webcast.model.data.TopicActionType topic_action_type = 1;
     */
    topicActionType: TopicActionType;
    /**
     * @generated from field: webcast.model.message.common.Text topic_text = 2;
     */
    topicText?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text topic_tips = 3;
     */
    topicTips?: Text | undefined;
    /**
     * @generated from field: bool has_button = 4;
     */
    hasButton: boolean;
    /**
     * @generated from field: webcast.model.message.ActionButton action_button = 5;
     */
    actionButton?: ActionButton | undefined;
    /**
     * @generated from field: webcast.model.data.TagType tag_type = 6;
     */
    tagType: TagType;
    /**
     * @generated from field: webcast.im.PublicAreaMessageCommon_CreatorSuccessInfo_Topic_DisplayLocation display_location = 7;
     */
    displayLocation: PublicAreaMessageCommon_CreatorSuccessInfo_Topic_DisplayLocation;
    /**
     * @generated from field: map<string, string> event_tracking_fields = 8;
     */
    eventTrackingFields: {
        [key: string]: string;
    };
    /**
     * @generated from field: string biz_name = 9;
     */
    bizName: string;
    /**
     * @generated from field: bool disable_count_frequency_control = 10;
     */
    disableCountFrequencyControl: boolean;
};
/**
 * Describes the message webcast.model.message.Topic.
 * Use `create(TopicSchema)` to create a new message.
 */
export declare const TopicSchema: GenMessage<Topic>;
/**
 * @generated from message webcast.model.message.TriggerCondition
 */
export type TriggerCondition = Message<"webcast.model.message.TriggerCondition"> & {
    /**
     * @generated from field: bool uplink_detect_http = 1;
     */
    uplinkDetectHttp: boolean;
    /**
     * @generated from field: bool uplink_detect_websocket = 2;
     */
    uplinkDetectWebsocket: boolean;
    /**
     * @generated from field: bool detect_p2p_msg = 3;
     */
    detectP2pMsg: boolean;
    /**
     * @generated from field: bool detect_room_msg = 4;
     */
    detectRoomMsg: boolean;
    /**
     * @generated from field: bool http_optimize = 5;
     */
    httpOptimize: boolean;
};
/**
 * Describes the message webcast.model.message.TriggerCondition.
 * Use `create(TriggerConditionSchema)` to create a new message.
 */
export declare const TriggerConditionSchema: GenMessage<TriggerCondition>;
/**
 * @generated from message webcast.model.message.UnionAnimationInfo
 */
export type UnionAnimationInfo = Message<"webcast.model.message.UnionAnimationInfo"> & {
    /**
     * @generated from field: webcast.im.UnionAnimationInfoType union_type = 1;
     */
    unionType: UnionAnimationInfoType;
    /**
     * @generated from field: repeated int32 rank_type_array = 2;
     */
    rankTypeArray: number[];
    /**
     * @generated from field: int64 supported_version = 3;
     */
    supportedVersion: bigint;
};
/**
 * Describes the message webcast.model.message.UnionAnimationInfo.
 * Use `create(UnionAnimationInfoSchema)` to create a new message.
 */
export declare const UnionAnimationInfoSchema: GenMessage<UnionAnimationInfo>;
/**
 * @generated from message webcast.model.message.UseCriticalStrikeCard
 */
export type UseCriticalStrikeCard = Message<"webcast.model.message.UseCriticalStrikeCard"> & {
    /**
     * @generated from field: webcast.model.live.match.CriticalStrikeCardInfo card_info = 1;
     */
    cardInfo?: CriticalStrikeCardInfo | undefined;
    /**
     * @generated from field: int64 anchor_id = 2;
     */
    anchorId: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text display_content = 3;
     */
    displayContent?: Text | undefined;
};
/**
 * Describes the message webcast.model.message.UseCriticalStrikeCard.
 * Use `create(UseCriticalStrikeCardSchema)` to create a new message.
 */
export declare const UseCriticalStrikeCardSchema: GenMessage<UseCriticalStrikeCard>;
/**
 * @generated from message webcast.model.message.UseExtraTimeCard
 */
export type UseExtraTimeCard = Message<"webcast.model.message.UseExtraTimeCard"> & {
    /**
     * @generated from field: webcast.model.live.match.ExtraTimeCardInfo card_info = 1;
     */
    cardInfo?: ExtraTimeCardInfo | undefined;
    /**
     * @generated from field: int64 anchor_id = 2;
     */
    anchorId: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text display_content = 3;
     */
    displayContent?: Text | undefined;
};
/**
 * Describes the message webcast.model.message.UseExtraTimeCard.
 * Use `create(UseExtraTimeCardSchema)` to create a new message.
 */
export declare const UseExtraTimeCardSchema: GenMessage<UseExtraTimeCard>;
/**
 * @generated from message webcast.model.message.UsePotionCard
 */
export type UsePotionCard = Message<"webcast.model.message.UsePotionCard"> & {
    /**
     * @generated from field: webcast.model.live.match.PotionCardInfo card_info = 1;
     */
    cardInfo?: PotionCardInfo | undefined;
    /**
     * @generated from field: int64 anchor_id = 2;
     */
    anchorId: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text display_content = 3;
     */
    displayContent?: Text | undefined;
};
/**
 * Describes the message webcast.model.message.UsePotionCard.
 * Use `create(UsePotionCardSchema)` to create a new message.
 */
export declare const UsePotionCardSchema: GenMessage<UsePotionCard>;
/**
 * @generated from message webcast.model.message.UseSmokeCard
 */
export type UseSmokeCard = Message<"webcast.model.message.UseSmokeCard"> & {
    /**
     * @generated from field: webcast.model.live.match.SmokeCardInfo card_info = 1;
     */
    cardInfo?: SmokeCardInfo | undefined;
    /**
     * @generated from field: int64 anchor_id = 2;
     */
    anchorId: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text display_content = 3;
     */
    displayContent?: Text | undefined;
};
/**
 * Describes the message webcast.model.message.UseSmokeCard.
 * Use `create(UseSmokeCardSchema)` to create a new message.
 */
export declare const UseSmokeCardSchema: GenMessage<UseSmokeCard>;
/**
 * @generated from message webcast.model.message.UseSpecialEffectCard
 */
export type UseSpecialEffectCard = Message<"webcast.model.message.UseSpecialEffectCard"> & {
    /**
     * @generated from field: webcast.model.live.match.SpecialEffectCardInfo card_info = 1;
     */
    cardInfo?: SpecialEffectCardInfo | undefined;
    /**
     * @generated from field: int64 anchor_id = 2;
     */
    anchorId: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text display_content = 3;
     */
    displayContent?: Text | undefined;
    /**
     * @generated from field: repeated webcast.model.message.AnchorPair affected_anchor_pairs = 4;
     */
    affectedAnchorPairs: AnchorPair[];
    /**
     * @generated from field: int32 effect_type = 5;
     */
    effectType: number;
    /**
     * @generated from field: webcast.model.live.match.CommunityHeartMeInfo community_heart_me_info = 6;
     */
    communityHeartMeInfo?: CommunityHeartMeInfo | undefined;
    /**
     * @generated from field: string community_heart_me_info_str = 7;
     */
    communityHeartMeInfoStr: string;
};
/**
 * Describes the message webcast.model.message.UseSpecialEffectCard.
 * Use `create(UseSpecialEffectCardSchema)` to create a new message.
 */
export declare const UseSpecialEffectCardSchema: GenMessage<UseSpecialEffectCard>;
/**
 * @generated from message webcast.model.message.UseTop2Card
 */
export type UseTop2Card = Message<"webcast.model.message.UseTop2Card"> & {
    /**
     * @generated from field: webcast.model.live.match.Top2CardInfo card_info = 1;
     */
    cardInfo?: Top2CardInfo | undefined;
    /**
     * @generated from field: int64 anchor_id = 2;
     */
    anchorId: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text display_content = 3;
     */
    displayContent?: Text | undefined;
};
/**
 * Describes the message webcast.model.message.UseTop2Card.
 * Use `create(UseTop2CardSchema)` to create a new message.
 */
export declare const UseTop2CardSchema: GenMessage<UseTop2Card>;
/**
 * @generated from message webcast.model.message.UseTop3Card
 */
export type UseTop3Card = Message<"webcast.model.message.UseTop3Card"> & {
    /**
     * @generated from field: webcast.model.live.match.Top3CardInfo card_info = 1;
     */
    cardInfo?: Top3CardInfo | undefined;
    /**
     * @generated from field: int64 anchor_id = 2;
     */
    anchorId: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text display_content = 3;
     */
    displayContent?: Text | undefined;
};
/**
 * Describes the message webcast.model.message.UseTop3Card.
 * Use `create(UseTop3CardSchema)` to create a new message.
 */
export declare const UseTop3CardSchema: GenMessage<UseTop3Card>;
/**
 * @generated from message webcast.model.message.UseVaultGloveCard
 */
export type UseVaultGloveCard = Message<"webcast.model.message.UseVaultGloveCard"> & {
    /**
     * @generated from field: webcast.model.live.match.VaultGloveCardInfo card_info = 1;
     */
    cardInfo?: VaultGloveCardInfo | undefined;
    /**
     * @generated from field: int64 anchor_id = 2;
     */
    anchorId: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text display_content = 3;
     */
    displayContent?: Text | undefined;
};
/**
 * Describes the message webcast.model.message.UseVaultGloveCard.
 * Use `create(UseVaultGloveCardSchema)` to create a new message.
 */
export declare const UseVaultGloveCardSchema: GenMessage<UseVaultGloveCard>;
/**
 * @generated from message webcast.model.message.UseWaveCard
 */
export type UseWaveCard = Message<"webcast.model.message.UseWaveCard"> & {
    /**
     * @generated from field: webcast.model.live.match.WaveCardInfo card_info = 1;
     */
    cardInfo?: WaveCardInfo | undefined;
    /**
     * @generated from field: int64 anchor_id = 2;
     */
    anchorId: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text display_content = 3;
     */
    displayContent?: Text | undefined;
};
/**
 * Describes the message webcast.model.message.UseWaveCard.
 * Use `create(UseWaveCardSchema)` to create a new message.
 */
export declare const UseWaveCardSchema: GenMessage<UseWaveCard>;
/**
 * @generated from message webcast.model.message.UserCountdownInfo
 */
export type UserCountdownInfo = Message<"webcast.model.message.UserCountdownInfo"> & {
    /**
     * @generated from field: int64 countdown_id = 1;
     */
    countdownId: bigint;
    /**
     * @generated from field: int64 score = 2;
     */
    score: bigint;
    /**
     * @generated from field: int64 target_score = 3;
     */
    targetScore: bigint;
    /**
     * @generated from field: int32 completion_progress_percent = 4;
     */
    completionProgressPercent: number;
};
/**
 * Describes the message webcast.model.message.UserCountdownInfo.
 * Use `create(UserCountdownInfoSchema)` to create a new message.
 */
export declare const UserCountdownInfoSchema: GenMessage<UserCountdownInfo>;
/**
 * @generated from message webcast.model.message.UserFanTicket
 */
export type UserFanTicket = Message<"webcast.model.message.UserFanTicket"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: int64 fan_ticket = 2;
     */
    fanTicket: bigint;
    /**
     * @generated from field: int64 match_total_score = 3;
     */
    matchTotalScore: bigint;
    /**
     * @generated from field: int32 match_rank = 4;
     */
    matchRank: number;
    /**
     * @generated from field: webcast.model.message.UserCountdownInfo countdown_info = 5;
     */
    countdownInfo?: UserCountdownInfo | undefined;
    /**
     * @generated from field: webcast.model.message.UserPlayInfo play_info = 6;
     */
    playInfo?: UserPlayInfo | undefined;
    /**
     * @generated from field: string icon_name = 7;
     */
    iconName: string;
    /**
     * @generated from field: string animation_name = 8;
     */
    animationName: string;
    /**
     * @generated from field: string ticket_ui_style = 9;
     */
    ticketUiStyle: string;
    /**
     * @generated from field: int32 completion_progress_percent = 10;
     */
    completionProgressPercent: number;
    /**
     * @generated from field: int32 top_guest_rank = 11;
     */
    topGuestRank: number;
    /**
     * @generated from field: string ticket_ui_style_v2 = 12;
     */
    ticketUiStyleV2: string;
};
/**
 * Describes the message webcast.model.message.UserFanTicket.
 * Use `create(UserFanTicketSchema)` to create a new message.
 */
export declare const UserFanTicketSchema: GenMessage<UserFanTicket>;
/**
 * @generated from message webcast.model.message.UserInfo
 */
export type UserInfo = Message<"webcast.model.message.UserInfo"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar = 2;
     */
    avatar?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.message.UserInfo.
 * Use `create(UserInfoSchema)` to create a new message.
 */
export declare const UserInfoSchema: GenMessage<UserInfo>;
/**
 * @generated from message webcast.model.message.UserInteractionInfo
 */
export type UserInteractionInfo = Message<"webcast.model.message.UserInteractionInfo"> & {
    /**
     * @generated from field: int64 like_cnt = 1;
     */
    likeCnt: bigint;
    /**
     * @generated from field: int64 comment_cnt = 2;
     */
    commentCnt: bigint;
    /**
     * @generated from field: int64 share_cnt = 3;
     */
    shareCnt: bigint;
};
/**
 * Describes the message webcast.model.message.UserInteractionInfo.
 * Use `create(UserInteractionInfoSchema)` to create a new message.
 */
export declare const UserInteractionInfoSchema: GenMessage<UserInteractionInfo>;
/**
 * @generated from message webcast.model.message.UserMetrics
 */
export type UserMetrics = Message<"webcast.model.message.UserMetrics"> & {
    /**
     * @generated from field: webcast.im.PublicAreaMessageCommon_PortraitInfo_UserMetrics_UserMetricsType type = 1;
     */
    type: PublicAreaMessageCommon_PortraitInfo_UserMetrics_UserMetricsType;
    /**
     * @generated from field: string metrics_value = 2;
     */
    metricsValue: string;
};
/**
 * Describes the message webcast.model.message.UserMetrics.
 * Use `create(UserMetricsSchema)` to create a new message.
 */
export declare const UserMetricsSchema: GenMessage<UserMetrics>;
/**
 * @generated from message webcast.model.message.UserModelPredictionData
 */
export type UserModelPredictionData = Message<"webcast.model.message.UserModelPredictionData"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: map<string, double> model_prediction_data = 2;
     */
    modelPredictionData: {
        [key: string]: number;
    };
};
/**
 * Describes the message webcast.model.message.UserModelPredictionData.
 * Use `create(UserModelPredictionDataSchema)` to create a new message.
 */
export declare const UserModelPredictionDataSchema: GenMessage<UserModelPredictionData>;
/**
 * @generated from message webcast.model.message.UserPlayInfo
 */
export type UserPlayInfo = Message<"webcast.model.message.UserPlayInfo"> & {
    /**
     * @generated from field: int64 play_id = 1;
     */
    playId: bigint;
    /**
     * @generated from field: webcast.model.data.multi_guest_play.PlayScene play_scene = 2;
     */
    playScene: PlayScene;
    /**
     * @generated from field: int64 score = 3;
     */
    score: bigint;
    /**
     * @generated from field: int32 rank = 4;
     */
    rank: number;
    /**
     * @generated from field: int64 target_score = 5;
     */
    targetScore: bigint;
    /**
     * @generated from field: webcast.model.data.multi_guest_play.PlayUserTag user_tag = 6;
     */
    userTag: PlayUserTag;
};
/**
 * Describes the message webcast.model.message.UserPlayInfo.
 * Use `create(UserPlayInfoSchema)` to create a new message.
 */
export declare const UserPlayInfoSchema: GenMessage<UserPlayInfo>;
/**
 * @generated from message webcast.model.message.ValidRanks
 */
export type ValidRanks = Message<"webcast.model.message.ValidRanks"> & {
    /**
     * @generated from field: bool is_effect = 1;
     */
    isEffect: boolean;
    /**
     * @generated from field: repeated int32 rank_types = 2;
     */
    rankTypes: number[];
};
/**
 * Describes the message webcast.model.message.ValidRanks.
 * Use `create(ValidRanksSchema)` to create a new message.
 */
export declare const ValidRanksSchema: GenMessage<ValidRanks>;
/**
 * @generated from message webcast.model.message.Voucher
 */
export type Voucher = Message<"webcast.model.message.Voucher"> & {
    /**
     * @generated from field: int64 voucher_type_id = 1;
     */
    voucherTypeId: bigint;
    /**
     * @generated from field: int64 task_id = 2;
     */
    taskId: bigint;
    /**
     * @generated from field: int32 task_type = 3;
     */
    taskType: number;
    /**
     * @generated from field: int32 live_voucher_type = 4;
     */
    liveVoucherType: number;
    /**
     * @generated from field: string creator_operation_unique_id = 5;
     */
    creatorOperationUniqueId: string;
    /**
     * @generated from field: string voucher_max_face_value = 6;
     */
    voucherMaxFaceValue: string;
};
/**
 * Describes the message webcast.model.message.Voucher.
 * Use `create(VoucherSchema)` to create a new message.
 */
export declare const VoucherSchema: GenMessage<Voucher>;
/**
 * @generated from message webcast.model.message.WaveAlgorithmData
 */
export type WaveAlgorithmData = Message<"webcast.model.message.WaveAlgorithmData"> & {
    /**
     * @generated from field: string algorithm_version = 1;
     */
    algorithmVersion: string;
    /**
     * @generated from field: bool is_alg_hit = 2;
     */
    isAlgHit: boolean;
    /**
     * @generated from field: string predict_score = 3;
     */
    predictScore: string;
    /**
     * @generated from field: bool is_rewatch = 4;
     */
    isRewatch: boolean;
    /**
     * @generated from field: bool is_follow = 5;
     */
    isFollow: boolean;
};
/**
 * Describes the message webcast.model.message.WaveAlgorithmData.
 * Use `create(WaveAlgorithmDataSchema)` to create a new message.
 */
export declare const WaveAlgorithmDataSchema: GenMessage<WaveAlgorithmData>;
/**
 * @generated from message webcast.model.message.WebcastAccessControlMessage
 */
export type WebcastAccessControlMessage = Message<"webcast.model.message.WebcastAccessControlMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.message.AccessControlCaptcha captcha = 2;
     */
    captcha?: AccessControlCaptcha | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastAccessControlMessage.
 * Use `create(WebcastAccessControlMessageSchema)` to create a new message.
 */
export declare const WebcastAccessControlMessageSchema: GenMessage<WebcastAccessControlMessage>;
/**
 * @generated from message webcast.model.message.WebcastBarrageMessage
 */
export type WebcastBarrageMessage = Message<"webcast.model.message.WebcastBarrageMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.message.BarrageEvent event = 2;
     */
    event?: BarrageEvent | undefined;
    /**
     * @generated from field: webcast.im.BarrageMessage_BarrageType msg_type = 3;
     */
    msgType: BarrageMessage_BarrageType;
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 4;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text content = 5;
     */
    content?: Text | undefined;
    /**
     * @generated from field: int64 duration = 6;
     */
    duration: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel background = 7;
     */
    background?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel right_icon = 8;
     */
    rightIcon?: ImageModel | undefined;
    /**
     * @generated from field: int32 display_config = 9;
     */
    displayConfig: number;
    /**
     * @generated from field: int64 gallery_gift_id = 10;
     */
    galleryGiftId: bigint;
    /**
     * @generated from field: string scene = 11;
     */
    scene: string;
    /**
     * @generated from field: webcast.message.proto.DisplayControl control = 12;
     */
    control?: DisplayControl | undefined;
    /**
     * @generated from field: webcast.model.message.RightLabel right_label = 13;
     */
    rightLabel?: RightLabel | undefined;
    /**
     * @generated from field: bool use_marquee = 14;
     */
    useMarquee: boolean;
    /**
     * @generated from field: webcast.im.BarrageMessage_ShowType show_type = 15;
     */
    showType: BarrageMessage_ShowType;
    /**
     * @generated from field: webcast.model.base.user.BadgeStruct badge = 16;
     */
    badge?: BadgeStruct | undefined;
    /**
     * @generated from field: webcast.im.BarrageMessage_RenderType render_type = 17;
     */
    renderType: BarrageMessage_RenderType;
    /**
     * @generated from field: webcast.im.BarrageMessage_IconDisplayType left_icon_display_type = 18;
     */
    leftIconDisplayType: BarrageMessage_IconDisplayType;
    /**
     * @generated from field: webcast.model.base.ImageModel ribbon_animation = 19;
     */
    ribbonAnimation?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.message.AnimationData animation_data = 20;
     */
    animationData?: AnimationData | undefined;
    /**
     * @generated from field: string hybrid_url = 21;
     */
    hybridUrl: string;
    /**
     * @generated from field: string schema = 22;
     */
    schema: string;
    /**
     * @generated from field: string sub_type = 23;
     */
    subType: string;
    /**
     * @generated from field: webcast.model.message.common.Text common_barrage_content = 24;
     */
    commonBarrageContent?: Text | undefined;
    /**
     * @generated from field: webcast.model.base.user.User user = 50;
     */
    user?: User | undefined;
    /**
     * @generated from field: webcast.model.message.BarrageTypeUserGradeParam user_grade_param = 100;
     */
    userGradeParam?: BarrageTypeUserGradeParam | undefined;
    /**
     * @generated from field: webcast.model.message.BarrageTypeFansLevelParam fans_level_param = 101;
     */
    fansLevelParam?: BarrageTypeFansLevelParam | undefined;
    /**
     * @generated from field: webcast.model.message.BarrageTypeSubscribeGiftParam subscribe_gift_param = 102;
     */
    subscribeGiftParam?: BarrageTypeSubscribeGiftParam | undefined;
    /**
     * @generated from field: webcast.model.base.user.PrivilegeLogExtra privilege_log_extra = 103;
     */
    privilegeLogExtra?: PrivilegeLogExtra | undefined;
    /**
     * @generated from field: webcast.model.message.BarrageTypeGiftGalleryParam gift_gallery_params = 104;
     */
    giftGalleryParams?: BarrageTypeGiftGalleryParam | undefined;
    /**
     * @generated from field: webcast.model.message.PublicAreaMessageCommon public_area_message_common = 105;
     */
    publicAreaMessageCommon?: PublicAreaMessageCommon | undefined;
    /**
     * @generated from field: webcast.model.message.BarrageTypeEcomLiveParam ecom_live_param = 106;
     */
    ecomLiveParam?: BarrageTypeEcomLiveParam | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastBarrageMessage.
 * Use `create(WebcastBarrageMessageSchema)` to create a new message.
 */
export declare const WebcastBarrageMessageSchema: GenMessage<WebcastBarrageMessage>;
/**
 * @generated from message webcast.model.message.WebcastBoostCardMessage
 */
export type WebcastBoostCardMessage = Message<"webcast.model.message.WebcastBoostCardMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: repeated webcast.model.message.BoostCard cards = 3;
     */
    cards: BoostCard[];
};
/**
 * Describes the message webcast.model.message.WebcastBoostCardMessage.
 * Use `create(WebcastBoostCardMessageSchema)` to create a new message.
 */
export declare const WebcastBoostCardMessageSchema: GenMessage<WebcastBoostCardMessage>;
/**
 * @generated from message webcast.model.message.WebcastBottomMessage
 */
export type WebcastBottomMessage = Message<"webcast.model.message.WebcastBottomMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
    /**
     * @generated from field: webcast.im.ShowType show_type = 3;
     */
    showType: ShowType;
    /**
     * @generated from field: webcast.im.TextType text_type = 4;
     */
    textType: TextType;
    /**
     * @generated from field: int64 duration = 5;
     */
    duration: bigint;
    /**
     * @generated from field: webcast.im.BizType biz_type = 6;
     */
    bizType: BizType;
    /**
     * @generated from field: int64 violation_user_id = 7;
     */
    violationUserId: bigint;
    /**
     * @generated from field: webcast.model.message.PunishEventInfo punish_info = 8;
     */
    punishInfo?: PunishEventInfo | undefined;
    /**
     * @generated from field: int32 style = 9;
     */
    style: number;
    /**
     * @generated from field: string detail_url = 10;
     */
    detailUrl: string;
    /**
     * @generated from field: int32 float_style = 11;
     */
    floatStyle: number;
    /**
     * @generated from field: webcast.model.data.PerceptionDialogIconType float_icon_type = 12;
     */
    floatIconType: PerceptionDialogIconType;
};
/**
 * Describes the message webcast.model.message.WebcastBottomMessage.
 * Use `create(WebcastBottomMessageSchema)` to create a new message.
 */
export declare const WebcastBottomMessageSchema: GenMessage<WebcastBottomMessage>;
/**
 * @generated from message webcast.model.message.WebcastCapsuleMessage
 */
export type WebcastCapsuleMessage = Message<"webcast.model.message.WebcastCapsuleMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 2;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text desc = 3;
     */
    desc?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text button_text = 4;
     */
    buttonText?: Text | undefined;
    /**
     * @generated from field: string schema = 5;
     */
    schema: string;
    /**
     * @generated from field: int32 type = 6;
     */
    type: number;
    /**
     * @generated from field: string scene = 7;
     */
    scene: string;
    /**
     * @generated from field: webcast.model.message.CapsuleBizParams biz_params = 8;
     */
    bizParams?: CapsuleBizParams | undefined;
    /**
     * @generated from field: string sub_scene = 9;
     */
    subScene: string;
    /**
     * @generated from field: int32 style = 10;
     */
    style: number;
    /**
     * @generated from field: bool skip_fc = 11;
     */
    skipFc: boolean;
    /**
     * @generated from field: webcast.model.message.PublicAreaMessageCommon public_area_message_common = 12;
     */
    publicAreaMessageCommon?: PublicAreaMessageCommon | undefined;
    /**
     * @generated from field: bool report_action = 13;
     */
    reportAction: boolean;
};
/**
 * Describes the message webcast.model.message.WebcastCapsuleMessage.
 * Use `create(WebcastCapsuleMessageSchema)` to create a new message.
 */
export declare const WebcastCapsuleMessageSchema: GenMessage<WebcastCapsuleMessage>;
/**
 * @generated from message webcast.model.message.WebcastCaptionMessage
 */
export type WebcastCaptionMessage = Message<"webcast.model.message.WebcastCaptionMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 timestamp_ms = 2;
     */
    timestampMs: bigint;
    /**
     * @generated from field: int64 duration_ms = 3;
     */
    durationMs: bigint;
    /**
     * @generated from field: repeated webcast.model.message.CaptionContent content = 4;
     */
    content: CaptionContent[];
    /**
     * @generated from field: int64 sentence_id = 5;
     */
    sentenceId: bigint;
    /**
     * @generated from field: int64 sequence_id = 6;
     */
    sequenceId: bigint;
    /**
     * @generated from field: bool definite = 7;
     */
    definite: boolean;
};
/**
 * Describes the message webcast.model.message.WebcastCaptionMessage.
 * Use `create(WebcastCaptionMessageSchema)` to create a new message.
 */
export declare const WebcastCaptionMessageSchema: GenMessage<WebcastCaptionMessage>;
/**
 * @generated from message webcast.model.message.WebcastChatMessage
 */
export type WebcastChatMessage = Message<"webcast.model.message.WebcastChatMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.base.user.User user = 2;
     */
    user?: User | undefined;
    /**
     * @generated from field: string content = 3;
     */
    content: string;
    /**
     * @generated from field: bool visible_to_sender = 4;
     */
    visibleToSender: boolean;
    /**
     * @generated from field: webcast.model.base.ImageModel background_image = 5;
     */
    backgroundImage?: ImageModel | undefined;
    /**
     * @generated from field: string full_screen_text_color = 6;
     */
    fullScreenTextColor: string;
    /**
     * @generated from field: webcast.model.base.ImageModel background_image_v2 = 7;
     */
    backgroundImageV2?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.message.PublicAreaCommon public_area_common = 9;
     */
    publicAreaCommon?: PublicAreaCommon | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel gift_image = 10;
     */
    giftImage?: ImageModel | undefined;
    /**
     * @generated from field: int32 input_type = 11;
     */
    inputType: number;
    /**
     * @generated from field: webcast.model.base.user.User at_user = 12;
     */
    atUser?: User | undefined;
    /**
     * @generated from field: repeated webcast.model.base.emoji.EmoteWithIndex emotes = 13;
     */
    emotes: EmoteWithIndex[];
    /**
     * @generated from field: string content_language = 14;
     */
    contentLanguage: string;
    /**
     * @generated from field: webcast.model.data.MsgFilter msg_filter = 15;
     */
    msgFilter?: MsgFilter | undefined;
    /**
     * @generated from field: int32 quick_chat_scene = 16;
     */
    quickChatScene: number;
    /**
     * @generated from field: int32 community_flagged_status = 17;
     */
    communityFlaggedStatus: number;
    /**
     * @generated from field: webcast.model.data.UserIdentity user_identity = 18;
     */
    userIdentity?: UserIdentity | undefined;
    /**
     * @generated from field: repeated webcast.model.message.CommentQualityScore comment_quality_scores = 19;
     */
    commentQualityScores: CommentQualityScore[];
    /**
     * @generated from field: repeated webcast.im.CommentTag comment_tag = 20;
     */
    commentTag: CommentTag[];
    /**
     * @generated from field: webcast.model.message.PublicAreaMessageCommon public_area_message_common = 21;
     */
    publicAreaMessageCommon?: PublicAreaMessageCommon | undefined;
    /**
     * @generated from field: int64 screen_time = 22;
     */
    screenTime: bigint;
    /**
     * @generated from field: string signature = 23;
     */
    signature: string;
    /**
     * @generated from field: string signature_version = 24;
     */
    signatureVersion: string;
    /**
     * @generated from field: string ec_streamer_key = 25;
     */
    ecStreamerKey: string;
    /**
     * @generated from field: repeated webcast.model.message.CommentLabelScore comment_label_scores = 26;
     */
    commentLabelScores: CommentLabelScore[];
    /**
     * @generated from field: repeated int64 mention_user_list = 27;
     */
    mentionUserList: bigint[];
    /**
     * @generated from field: repeated webcast.model.base.user.User mention_users = 28;
     */
    mentionUsers: User[];
    /**
     * @generated from field: bool is_on_comment_tray = 29;
     */
    isOnCommentTray: boolean;
};
/**
 * Describes the message webcast.model.message.WebcastChatMessage.
 * Use `create(WebcastChatMessageSchema)` to create a new message.
 */
export declare const WebcastChatMessageSchema: GenMessage<WebcastChatMessage>;
/**
 * @generated from message webcast.model.message.WebcastControlMessage
 */
export type WebcastControlMessage = Message<"webcast.model.message.WebcastControlMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.im.ControlAction action = 2;
     */
    action: ControlAction;
    /**
     * @generated from field: string tips = 3;
     */
    tips: string;
    /**
     * @generated from field: webcast.model.message.Extra extra = 4;
     */
    extra?: Extra | undefined;
    /**
     * @generated from field: webcast.model.message.PerceptionDialogInfo perception_dialog = 5;
     */
    perceptionDialog?: PerceptionDialogInfo | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text perception_audience_text = 6;
     */
    perceptionAudienceText?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.PunishEventInfo punish_info = 7;
     */
    punishInfo?: PunishEventInfo | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text float_text = 8;
     */
    floatText?: Text | undefined;
    /**
     * @generated from field: int32 float_style = 9;
     */
    floatStyle: number;
};
/**
 * Describes the message webcast.model.message.WebcastControlMessage.
 * Use `create(WebcastControlMessageSchema)` to create a new message.
 */
export declare const WebcastControlMessageSchema: GenMessage<WebcastControlMessage>;
/**
 * @generated from message webcast.model.message.WebcastEmoteChatMessage
 */
export type WebcastEmoteChatMessage = Message<"webcast.model.message.WebcastEmoteChatMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.base.user.User user = 2;
     */
    user?: User | undefined;
    /**
     * @generated from field: repeated webcast.model.base.emoji.EmoteModel emote_list = 3;
     */
    emoteList: EmoteModel[];
    /**
     * @generated from field: webcast.model.data.MsgFilter msg_filter = 4;
     */
    msgFilter?: MsgFilter | undefined;
    /**
     * @generated from field: webcast.model.data.UserIdentity user_identity = 5;
     */
    userIdentity?: UserIdentity | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastEmoteChatMessage.
 * Use `create(WebcastEmoteChatMessageSchema)` to create a new message.
 */
export declare const WebcastEmoteChatMessageSchema: GenMessage<WebcastEmoteChatMessage>;
/**
 * @generated from message webcast.model.message.WebcastGameRankNotifyMessage
 */
export type WebcastGameRankNotifyMessage = Message<"webcast.model.message.WebcastGameRankNotifyMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.im.GameRankNotifyMessage_MsgType msg_type = 2;
     */
    msgType: GameRankNotifyMessage_MsgType;
    /**
     * @generated from field: webcast.model.message.common.Text notify_text = 3;
     */
    notifyText?: Text | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastGameRankNotifyMessage.
 * Use `create(WebcastGameRankNotifyMessageSchema)` to create a new message.
 */
export declare const WebcastGameRankNotifyMessageSchema: GenMessage<WebcastGameRankNotifyMessage>;
/**
 * @generated from message webcast.model.message.WebcastGiftBroadcastMessage
 */
export type WebcastGiftBroadcastMessage = Message<"webcast.model.message.WebcastGiftBroadcastMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 from_user_id = 2;
     */
    fromUserId: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel left_icon = 3;
     */
    leftIcon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.message.WebcastRoomNotifyMessage notify = 4;
     */
    notify?: WebcastRoomNotifyMessage | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastGiftBroadcastMessage.
 * Use `create(WebcastGiftBroadcastMessageSchema)` to create a new message.
 */
export declare const WebcastGiftBroadcastMessageSchema: GenMessage<WebcastGiftBroadcastMessage>;
/**
 * @generated from message webcast.model.message.WebcastGiftDynamicRestrictionMessage
 */
export type WebcastGiftDynamicRestrictionMessage = Message<"webcast.model.message.WebcastGiftDynamicRestrictionMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.gift.model.DynamicRestriction dynamic_restriction = 2;
     */
    dynamicRestriction?: DynamicRestriction | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastGiftDynamicRestrictionMessage.
 * Use `create(WebcastGiftDynamicRestrictionMessageSchema)` to create a new message.
 */
export declare const WebcastGiftDynamicRestrictionMessageSchema: GenMessage<WebcastGiftDynamicRestrictionMessage>;
/**
 * @generated from message webcast.model.message.WebcastGiftMessage
 */
export type WebcastGiftMessage = Message<"webcast.model.message.WebcastGiftMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 gift_id = 2;
     */
    giftId: bigint;
    /**
     * @generated from field: int32 fan_ticket_count = 3;
     */
    fanTicketCount: number;
    /**
     * @generated from field: int32 group_count = 4;
     */
    groupCount: number;
    /**
     * @generated from field: int32 repeat_count = 5;
     */
    repeatCount: number;
    /**
     * @generated from field: int32 combo_count = 6;
     */
    comboCount: number;
    /**
     * @generated from field: webcast.model.base.user.User user = 7;
     */
    user?: User | undefined;
    /**
     * @generated from field: webcast.model.base.user.User to_user = 8;
     */
    toUser?: User | undefined;
    /**
     * @generated from field: int32 repeat_end = 9;
     */
    repeatEnd: number;
    /**
     * @generated from field: webcast.model.message.TextEffect text_effect = 10;
     */
    textEffect?: TextEffect | undefined;
    /**
     * @generated from field: int64 group_id = 11;
     */
    groupId: bigint;
    /**
     * @generated from field: int64 income_taskgifts = 12;
     */
    incomeTaskgifts: bigint;
    /**
     * @generated from field: int64 room_fan_ticket_count = 13;
     */
    roomFanTicketCount: bigint;
    /**
     * @generated from field: webcast.model.message.GiftIMPriority priority = 14;
     */
    priority?: GiftIMPriority | undefined;
    /**
     * @generated from field: webcast.model.Gift gift = 15;
     */
    gift?: Gift | undefined;
    /**
     * @generated from field: string log_id = 16;
     */
    logId: string;
    /**
     * @generated from field: int64 send_type = 17;
     */
    sendType: bigint;
    /**
     * @generated from field: webcast.model.message.PublicAreaCommon public_area_common = 18;
     */
    publicAreaCommon?: PublicAreaCommon | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text tray_display_text = 19;
     */
    trayDisplayText?: Text | undefined;
    /**
     * @generated from field: int64 banned_display_effects = 20;
     */
    bannedDisplayEffects: bigint;
    /**
     * @generated from field: webcast.model.GiftTrayInfo tray_info = 21;
     */
    trayInfo?: GiftTrayInfo | undefined;
    /**
     * @generated from field: string monitor_extra = 22;
     */
    monitorExtra: string;
    /**
     * @generated from field: webcast.model.message.GiftMonitorInfo monitor_info = 23;
     */
    monitorInfo?: GiftMonitorInfo | undefined;
    /**
     * @generated from field: int64 color_id = 24;
     */
    colorId: bigint;
    /**
     * @generated from field: bool is_first_sent = 25;
     */
    isFirstSent: boolean;
    /**
     * @generated from field: webcast.model.message.common.Text display_text_for_anchor = 26;
     */
    displayTextForAnchor?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text display_text_for_audience = 27;
     */
    displayTextForAudience?: Text | undefined;
    /**
     * @generated from field: string order_id = 28;
     */
    orderId: string;
    /**
     * @generated from field: webcast.model.GiftsBoxInfo gifts_in_box = 29;
     */
    giftsInBox?: GiftsBoxInfo | undefined;
    /**
     * @generated from field: webcast.model.data.MsgFilter msg_filter = 30;
     */
    msgFilter?: MsgFilter | undefined;
    /**
     * @generated from field: repeated webcast.model.gift.model.LynxGiftExtra lynx_extra = 31;
     */
    lynxExtra: LynxGiftExtra[];
    /**
     * @generated from field: webcast.model.data.UserIdentity user_identity = 32;
     */
    userIdentity?: UserIdentity | undefined;
    /**
     * @generated from field: webcast.model.gift.model.MatchInfo match_info = 33;
     */
    matchInfo?: MatchInfo | undefined;
    /**
     * @generated from field: webcast.model.data.LinkmicGiftExpressionStrategy linkmic_gift_expression_strategy = 34;
     */
    linkmicGiftExpressionStrategy: LinkmicGiftExpressionStrategy;
    /**
     * @generated from field: webcast.model.gift.model.FlyingMicResources flying_mic_resources = 35;
     */
    flyingMicResources?: FlyingMicResources | undefined;
    /**
     * @generated from field: bool disable_gift_tracking = 36;
     */
    disableGiftTracking: boolean;
    /**
     * @generated from field: webcast.model.gift.assets.AssetsModel asset = 37;
     */
    asset?: AssetsModel | undefined;
    /**
     * @generated from field: webcast.im.GiftMessageVersion version = 38;
     */
    version: GiftMessageVersion;
    /**
     * @generated from field: repeated webcast.model.message.SponsorshipInfo sponsorship_info = 39;
     */
    sponsorshipInfo: SponsorshipInfo[];
    /**
     * @generated from field: webcast.model.gift.model.FlyingMicResources flying_mic_resources_v2 = 40;
     */
    flyingMicResourcesV2?: FlyingMicResources | undefined;
    /**
     * @generated from field: webcast.model.message.PublicAreaMessageCommon public_area_message_common = 41;
     */
    publicAreaMessageCommon?: PublicAreaMessageCommon | undefined;
    /**
     * @generated from field: string signature = 42;
     */
    signature: string;
    /**
     * @generated from field: string signature_version = 43;
     */
    signatureVersion: string;
    /**
     * @generated from field: bool multi_generate_message = 44;
     */
    multiGenerateMessage: boolean;
    /**
     * @generated from field: string to_member_id = 45;
     */
    toMemberId: string;
    /**
     * @generated from field: int64 to_member_id_int = 46;
     */
    toMemberIdInt: bigint;
    /**
     * @generated from field: string to_member_nickname = 47;
     */
    toMemberNickname: string;
    /**
     * @generated from field: webcast.model.message.InteractiveGiftInfo interactive_gift_info = 48;
     */
    interactiveGiftInfo?: InteractiveGiftInfo | undefined;
    /**
     * @generated from field: int64 display_duration_ms = 49;
     */
    displayDurationMs: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text display_text_for_sender = 50;
     */
    displayTextForSender?: Text | undefined;
    /**
     * @generated from field: bool is_asset_bundle_gift = 51;
     */
    isAssetBundleGift: boolean;
    /**
     * @generated from field: webcast.model.gift.model.AssetBundle asset_bundle = 52;
     */
    assetBundle?: AssetBundle | undefined;
    /**
     * @generated from field: string effect_extra = 53;
     */
    effectExtra: string;
    /**
     * @generated from field: webcast.model.gift.model.SecondaryEffectInfo secondary_effect_info = 54;
     */
    secondaryEffectInfo?: SecondaryEffectInfo | undefined;
    /**
     * @generated from field: int32 gift_variant_id = 55;
     */
    giftVariantId: number;
    /**
     * @generated from field: string shiny_card_unlock_token = 56;
     */
    shinyCardUnlockToken: string;
    /**
     * @generated from field: webcast.model.gift.model.GiftEffect gift_effect = 100;
     */
    giftEffect?: GiftEffect | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastGiftMessage.
 * Use `create(WebcastGiftMessageSchema)` to create a new message.
 */
export declare const WebcastGiftMessageSchema: GenMessage<WebcastGiftMessage>;
/**
 * @generated from message webcast.model.message.WebcastGiftPanelUpdateMessage
 */
export type WebcastGiftPanelUpdateMessage = Message<"webcast.model.message.WebcastGiftPanelUpdateMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 room_id = 2;
     */
    roomId: bigint;
    /**
     * @generated from field: int64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * @generated from field: webcast.model.message.GalleryData gallery_data = 10;
     */
    galleryData?: GalleryData | undefined;
    /**
     * @generated from field: webcast.model.message.GoalData goal_data = 11;
     */
    goalData?: GoalData | undefined;
    /**
     * @generated from field: webcast.model.message.RoomBasedGiftData room_based_gift_data = 12;
     */
    roomBasedGiftData?: RoomBasedGiftData | undefined;
    /**
     * @generated from field: string strategy_context = 100;
     */
    strategyContext: string;
};
/**
 * Describes the message webcast.model.message.WebcastGiftPanelUpdateMessage.
 * Use `create(WebcastGiftPanelUpdateMessageSchema)` to create a new message.
 */
export declare const WebcastGiftPanelUpdateMessageSchema: GenMessage<WebcastGiftPanelUpdateMessage>;
/**
 * @generated from message webcast.model.message.WebcastGiftPromptMessage
 */
export type WebcastGiftPromptMessage = Message<"webcast.model.message.WebcastGiftPromptMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * @generated from field: string body = 3;
     */
    body: string;
    /**
     * @generated from field: int32 block_num_days = 4;
     */
    blockNumDays: number;
    /**
     * @generated from field: string order_id = 5;
     */
    orderId: string;
    /**
     * @generated from field: int64 order_timestamp = 6;
     */
    orderTimestamp: bigint;
    /**
     * @generated from field: bool in_user_gifting_addiction_expr = 7;
     */
    inUserGiftingAddictionExpr: boolean;
    /**
     * @generated from field: string pop_up_schema = 8;
     */
    popUpSchema: string;
};
/**
 * Describes the message webcast.model.message.WebcastGiftPromptMessage.
 * Use `create(WebcastGiftPromptMessageSchema)` to create a new message.
 */
export declare const WebcastGiftPromptMessageSchema: GenMessage<WebcastGiftPromptMessage>;
/**
 * @generated from message webcast.model.message.WebcastGuideMessage
 */
export type WebcastGuideMessage = Message<"webcast.model.message.WebcastGuideMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 guide_type = 2;
     */
    guideType: bigint;
    /**
     * @generated from field: int64 gift_id = 3;
     */
    giftId: bigint;
    /**
     * @generated from field: string description = 4;
     */
    description: string;
    /**
     * @generated from field: int64 duration = 5;
     */
    duration: bigint;
    /**
     * @generated from field: int64 display_style = 6;
     */
    displayStyle: bigint;
    /**
     * @generated from field: string scene = 7;
     */
    scene: string;
    /**
     * @generated from field: webcast.model.message.GuideMessageFrequencyRule frequency_rule = 8;
     */
    frequencyRule?: GuideMessageFrequencyRule | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastGuideMessage.
 * Use `create(WebcastGuideMessageSchema)` to create a new message.
 */
export declare const WebcastGuideMessageSchema: GenMessage<WebcastGuideMessage>;
/**
 * @generated from message webcast.model.message.WebcastHourlyRankRewardMessage
 */
export type WebcastHourlyRankRewardMessage = Message<"webcast.model.message.WebcastHourlyRankRewardMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: repeated webcast.model.message.HourlyRankRewardInfo winners = 2;
     */
    winners: HourlyRankRewardInfo[];
};
/**
 * Describes the message webcast.model.message.WebcastHourlyRankRewardMessage.
 * Use `create(WebcastHourlyRankRewardMessageSchema)` to create a new message.
 */
export declare const WebcastHourlyRankRewardMessageSchema: GenMessage<WebcastHourlyRankRewardMessage>;
/**
 * @generated from message webcast.model.message.WebcastImDeleteMessage
 */
export type WebcastImDeleteMessage = Message<"webcast.model.message.WebcastImDeleteMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: repeated int64 delete_msg_ids = 2;
     */
    deleteMsgIds: bigint[];
    /**
     * @generated from field: repeated int64 delete_user_ids = 3;
     */
    deleteUserIds: bigint[];
};
/**
 * Describes the message webcast.model.message.WebcastImDeleteMessage.
 * Use `create(WebcastImDeleteMessageSchema)` to create a new message.
 */
export declare const WebcastImDeleteMessageSchema: GenMessage<WebcastImDeleteMessage>;
/**
 * @generated from message webcast.model.message.WebcastInRoomBannerMessage
 */
export type WebcastInRoomBannerMessage = Message<"webcast.model.message.WebcastInRoomBannerMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastInRoomBannerMessage.
 * Use `create(WebcastInRoomBannerMessageSchema)` to create a new message.
 */
export declare const WebcastInRoomBannerMessageSchema: GenMessage<WebcastInRoomBannerMessage>;
/**
 * @generated from message webcast.model.message.WebcastLikeMessage
 */
export type WebcastLikeMessage = Message<"webcast.model.message.WebcastLikeMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int32 count = 2;
     */
    count: number;
    /**
     * @generated from field: int64 total = 3;
     */
    total: bigint;
    /**
     * @generated from field: int32 color = 4;
     */
    color: number;
    /**
     * @generated from field: webcast.model.base.user.User user = 5;
     */
    user?: User | undefined;
    /**
     * @generated from field: string icon = 6;
     */
    icon: string;
    /**
     * @generated from field: repeated webcast.model.base.ImageModel icons = 7;
     */
    icons: ImageModel[];
    /**
     * @generated from field: repeated webcast.model.message.SpecifiedDisplayText specified_display_text = 8;
     */
    specifiedDisplayText: SpecifiedDisplayText[];
    /**
     * @generated from field: int64 effect_cnt = 9;
     */
    effectCnt: bigint;
    /**
     * @generated from field: repeated webcast.model.LikeEffect like_effect = 10;
     */
    likeEffect: LikeEffect[];
    /**
     * @generated from field: webcast.model.message.PublicAreaMessageCommon public_area_message_common = 11;
     */
    publicAreaMessageCommon?: PublicAreaMessageCommon | undefined;
    /**
     * @generated from field: int64 room_message_heat_level = 12;
     */
    roomMessageHeatLevel: bigint;
};
/**
 * Describes the message webcast.model.message.WebcastLikeMessage.
 * Use `create(WebcastLikeMessageSchema)` to create a new message.
 */
export declare const WebcastLikeMessageSchema: GenMessage<WebcastLikeMessage>;
/**
 * @generated from message webcast.model.message.WebcastLinkMessage
 */
export type WebcastLinkMessage = Message<"webcast.model.message.WebcastLinkMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int32 message_type = 2;
     */
    messageType: number;
    /**
     * @generated from field: int64 linker_id = 3;
     */
    linkerId: bigint;
    /**
     * @generated from field: int32 scene = 4;
     */
    scene: number;
    /**
     * @generated from field: webcast.model.message.linker.invite_message.LinkerInviteContent invite_content = 5;
     */
    inviteContent?: LinkerInviteContent | undefined;
    /**
     * @generated from field: webcast.model.message.linker.reply_message.LinkerReplyContent reply_content = 6;
     */
    replyContent?: LinkerReplyContent | undefined;
    /**
     * @generated from field: webcast.model.message.LinkerCreateContent create_content = 7;
     */
    createContent?: LinkerCreateContent | undefined;
    /**
     * @generated from field: webcast.model.message.LinkerCloseContent close_content = 8;
     */
    closeContent?: LinkerCloseContent | undefined;
    /**
     * @generated from field: webcast.model.message.linker.LinkerEnterContent enter_content = 9;
     */
    enterContent?: LinkerEnterContent | undefined;
    /**
     * @generated from field: webcast.model.message.linker.LinkerLeaveContent leave_content = 10;
     */
    leaveContent?: LinkerLeaveContent | undefined;
    /**
     * @generated from field: webcast.model.message.linker.LinkerCancelContent cancel_content = 11;
     */
    cancelContent?: LinkerCancelContent | undefined;
    /**
     * @generated from field: webcast.model.message.linker.LinkerKickOutContent kick_out_content = 12;
     */
    kickOutContent?: LinkerKickOutContent | undefined;
    /**
     * @generated from field: webcast.model.message.linker.linked_list_change_message.LinkedListChangeContent linked_list_change_content = 13;
     */
    linkedListChangeContent?: LinkedListChangeContent | undefined;
    /**
     * @generated from field: webcast.model.message.LinkerUpdateUserContent update_user_content = 14;
     */
    updateUserContent?: LinkerUpdateUserContent | undefined;
    /**
     * @generated from field: webcast.model.message.LinkerWaitingListChangeContent waiting_list_change_content = 15;
     */
    waitingListChangeContent?: LinkerWaitingListChangeContent | undefined;
    /**
     * @generated from field: webcast.model.message.linker.LinkerMuteContent mute_content = 16;
     */
    muteContent?: LinkerMuteContent | undefined;
    /**
     * @generated from field: webcast.model.message.linker.LinkerRandomMatchContent random_match_content = 17;
     */
    randomMatchContent?: LinkerRandomMatchContent | undefined;
    /**
     * @generated from field: webcast.model.linksetting.MultiLiveUpdateUserSettingContent update_user_setting_content = 18;
     */
    updateUserSettingContent?: MultiLiveUpdateUserSettingContent | undefined;
    /**
     * @generated from field: webcast.model.message.linker.mic_update.LinkerMicIdxUpdateContent mic_idx_update_content = 19;
     */
    micIdxUpdateContent?: LinkerMicIdxUpdateContent | undefined;
    /**
     * @generated from field: webcast.model.message.linker.listchangemessage.LinkerListChangeContent list_change_content = 20;
     */
    listChangeContent?: LinkerListChangeContent | undefined;
    /**
     * @generated from field: webcast.model.message.CohostListChangeContent cohost_list_change_content = 21;
     */
    cohostListChangeContent?: CohostListChangeContent | undefined;
    /**
     * @generated from field: webcast.model.message.LinkerMediaChangeContent media_change_content = 22;
     */
    mediaChangeContent?: LinkerMediaChangeContent | undefined;
    /**
     * @generated from field: webcast.model.message.linker.LinkerAcceptNoticeContent reply_accept_notice_content = 23;
     */
    replyAcceptNoticeContent?: LinkerAcceptNoticeContent | undefined;
    /**
     * @generated from field: webcast.model.message.LinkerSysKickOutContent sys_kick_out_content = 101;
     */
    sysKickOutContent?: LinkerSysKickOutContent | undefined;
    /**
     * @generated from field: webcast.model.message.LinkmicUserToastContent user_toast_content = 102;
     */
    userToastContent?: LinkmicUserToastContent | undefined;
    /**
     * @generated from field: string extra = 200;
     */
    extra: string;
    /**
     * @generated from field: int64 expire_timestamp = 201;
     */
    expireTimestamp: bigint;
    /**
     * @generated from field: string transfer_extra = 202;
     */
    transferExtra: string;
    /**
     * @generated from field: int64 version = 203;
     */
    version: bigint;
};
/**
 * Describes the message webcast.model.message.WebcastLinkMessage.
 * Use `create(WebcastLinkMessageSchema)` to create a new message.
 */
export declare const WebcastLinkMessageSchema: GenMessage<WebcastLinkMessage>;
/**
 * @generated from message webcast.model.message.WebcastLinkMicArmies
 */
export type WebcastLinkMicArmies = Message<"webcast.model.message.WebcastLinkMicArmies"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 battle_id = 2;
     */
    battleId: bigint;
    /**
     * @generated from field: map<int64, webcast.model.message.battle.BattleUserArmies> armies = 3;
     */
    armies: {
        [key: string]: BattleUserArmies;
    };
    /**
     * @generated from field: int64 channel_id = 4;
     */
    channelId: bigint;
    /**
     * @generated from field: int64 send_gift_success_time = 5;
     */
    sendGiftSuccessTime: bigint;
    /**
     * @generated from field: int64 update_battle_score_time = 6;
     */
    updateBattleScoreTime: bigint;
    /**
     * @generated from field: webcast.im.LinkMicArmies_TriggerReason trigger_reason = 7;
     */
    triggerReason: LinkMicArmies_TriggerReason;
    /**
     * @generated from field: int64 from_user_id = 8;
     */
    fromUserId: bigint;
    /**
     * @generated from field: int64 gift_id = 9;
     */
    giftId: bigint;
    /**
     * @generated from field: int32 gift_count = 10;
     */
    giftCount: number;
    /**
     * @generated from field: webcast.model.base.ImageModel gift_icon_image = 11;
     */
    giftIconImage?: ImageModel | undefined;
    /**
     * @generated from field: int32 total_diamond_count = 12;
     */
    totalDiamondCount: number;
    /**
     * @generated from field: int32 repeat_count = 13;
     */
    repeatCount: number;
    /**
     * @generated from field: repeated webcast.model.live.match.BattleTeamUserArmies team_armies = 14;
     */
    teamArmies: BattleTeamUserArmies[];
    /**
     * @generated from field: bool trigger_critical_strike = 15;
     */
    triggerCriticalStrike: boolean;
    /**
     * @generated from field: bool has_team_match_mvp_sfx = 16;
     */
    hasTeamMatchMvpSfx: boolean;
    /**
     * @generated from field: string log_id = 17;
     */
    logId: string;
    /**
     * @generated from field: webcast.model.message.battle.BattleSetting battle_settings = 18;
     */
    battleSettings?: BattleSetting | undefined;
    /**
     * @generated from field: webcast.model.live.match.HighScoreControlCfg fuzzy_display_config_v2 = 19;
     */
    fuzzyDisplayConfigV2?: HighScoreControlCfg | undefined;
    /**
     * @generated from field: webcast.model.live.match.BattleEffectInfos effect_infos = 20;
     */
    effectInfos?: BattleEffectInfos | undefined;
    /**
     * @generated from field: webcast.model.live.match.EnigmaBattleExtraInfo enigma_battle_extra_info = 21;
     */
    enigmaBattleExtraInfo?: EnigmaBattleExtraInfo | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastLinkMicArmies.
 * Use `create(WebcastLinkMicArmiesSchema)` to create a new message.
 */
export declare const WebcastLinkMicArmiesSchema: GenMessage<WebcastLinkMicArmies>;
/**
 * @generated from message webcast.model.message.WebcastLinkMicBattle
 */
export type WebcastLinkMicBattle = Message<"webcast.model.message.WebcastLinkMicBattle"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 battle_id = 2;
     */
    battleId: bigint;
    /**
     * @generated from field: webcast.model.message.battle.BattleSetting battle_settings = 3;
     */
    battleSettings?: BattleSetting | undefined;
    /**
     * @generated from field: webcast.im.LinkMicBattle_BattleAction action = 4;
     */
    action: LinkMicBattle_BattleAction;
    /**
     * @generated from field: map<int64, webcast.model.message.battle.BattleResult> battle_result = 5;
     */
    battleResult: {
        [key: string]: BattleResult;
    };
    /**
     * @generated from field: webcast.model.message.battle.BattleDisplayConfig fuzzy_display_config = 6;
     */
    fuzzyDisplayConfig?: BattleDisplayConfig | undefined;
    /**
     * @generated from field: webcast.model.data.GiftPermissionType invitee_gift_permission_type = 8;
     */
    inviteeGiftPermissionType: GiftPermissionType;
    /**
     * @generated from field: repeated webcast.model.message.battle.UserArmiesWrapper armies = 9;
     */
    armies: UserArmiesWrapper[];
    /**
     * @generated from field: repeated webcast.model.message.battle.BattleUserInfoWrapper anchors_info = 10;
     */
    anchorsInfo: BattleUserInfoWrapper[];
    /**
     * @generated from field: string bubble_text = 11;
     */
    bubbleText: string;
    /**
     * @generated from field: repeated webcast.model.message.battle.SupportedActionsWrapper supported_actions = 12;
     */
    supportedActions: SupportedActionsWrapper[];
    /**
     * @generated from field: map<int64, webcast.model.live.match.BattleComboInfo> battle_combo_v2 = 13;
     */
    battleComboV2: {
        [key: string]: BattleComboInfo;
    };
    /**
     * @generated from field: repeated webcast.model.message.TeamUsersInfo team_member = 14;
     */
    teamMember: TeamUsersInfo[];
    /**
     * @generated from field: repeated webcast.model.message.BattleInviteeGiftPermission invitees_gift_permission_type = 15;
     */
    inviteesGiftPermissionType: BattleInviteeGiftPermission[];
    /**
     * @generated from field: int64 action_by_user_id = 16;
     */
    actionByUserId: bigint;
    /**
     * @generated from field: repeated webcast.model.live.match.BattleTeamResult team_battle_result = 17;
     */
    teamBattleResult: BattleTeamResult[];
    /**
     * @generated from field: repeated webcast.model.live.match.BattleTeamUserArmies team_armies = 18;
     */
    teamArmies: BattleTeamUserArmies[];
    /**
     * @generated from field: repeated webcast.model.live.match.BattleABTestSetting ab_test_setting = 19;
     */
    abTestSetting: BattleABTestSetting[];
    /**
     * @generated from field: webcast.model.live.match.TeamMatchCampaign team_match_campaign = 20;
     */
    teamMatchCampaign?: TeamMatchCampaign | undefined;
    /**
     * @generated from field: webcast.model.live.match.HighScoreControlCfg fuzzy_display_config_v2 = 21;
     */
    fuzzyDisplayConfigV2?: HighScoreControlCfg | undefined;
    /**
     * @generated from field: map<int64, webcast.chatroom.model.interact.GiftGalleryBadgeInfo> league_info_map = 22;
     */
    leagueInfoMap: {
        [key: string]: GiftGalleryBadgeInfo;
    };
    /**
     * @generated from field: map<int64, webcast.model.live.match.LeagueScoreInfo> league_score_info_map = 23;
     */
    leagueScoreInfoMap: {
        [key: string]: LeagueScoreInfo;
    };
    /**
     * @generated from field: webcast.model.live.match.MatchPunishExtraInfo match_punish_extra_info = 24;
     */
    matchPunishExtraInfo?: MatchPunishExtraInfo | undefined;
    /**
     * @generated from field: webcast.model.live.match.EnigmaBattleSetting enigma_battle_setting = 25;
     */
    enigmaBattleSetting?: EnigmaBattleSetting | undefined;
    /**
     * @generated from field: map<int64, webcast.model.live.match.AnchorMatchSettings> anchor_match_settings = 26;
     */
    anchorMatchSettings: {
        [key: string]: AnchorMatchSettings;
    };
    /**
     * @generated from field: webcast.model.live.match.BattleFeatureFlags battle_feature_flags = 27;
     */
    battleFeatureFlags?: BattleFeatureFlags | undefined;
    /**
     * @generated from field: webcast.linkmic.common.LayoutData cross_room_layout = 28;
     */
    crossRoomLayout?: LayoutData | undefined;
    /**
     * @generated from field: map<string, string> tracking_extra = 29;
     */
    trackingExtra: {
        [key: string]: string;
    };
    /**
     * @generated from field: webcast.model.live.match.MatchThemeDisplayResource match_theme_display_resource = 30;
     */
    matchThemeDisplayResource?: MatchThemeDisplayResource | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastLinkMicBattle.
 * Use `create(WebcastLinkMicBattleSchema)` to create a new message.
 */
export declare const WebcastLinkMicBattleSchema: GenMessage<WebcastLinkMicBattle>;
/**
 * @generated from message webcast.model.message.WebcastLinkMicBattleItemCard
 */
export type WebcastLinkMicBattleItemCard = Message<"webcast.model.message.WebcastLinkMicBattleItemCard"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 battle_id = 2;
     */
    battleId: bigint;
    /**
     * @generated from field: webcast.im.BattleCardMsgType msg_type = 3;
     */
    msgType: BattleCardMsgType;
    /**
     * @generated from field: webcast.model.message.CardObtainGuide card_obtain_guide = 4;
     */
    cardObtainGuide?: CardObtainGuide | undefined;
    /**
     * @generated from field: webcast.model.message.UseCriticalStrikeCard use_critical_strike_card = 5;
     */
    useCriticalStrikeCard?: UseCriticalStrikeCard | undefined;
    /**
     * @generated from field: webcast.model.message.UseSmokeCard use_smoke_card = 6;
     */
    useSmokeCard?: UseSmokeCard | undefined;
    /**
     * @generated from field: webcast.model.message.AwardCardNotice award_card_notice = 7;
     */
    awardCardNotice?: AwardCardNotice | undefined;
    /**
     * @generated from field: webcast.model.message.UseExtraTimeCard use_extra_time_card = 8;
     */
    useExtraTimeCard?: UseExtraTimeCard | undefined;
    /**
     * @generated from field: webcast.model.message.UseSpecialEffectCard use_special_effect_card = 9;
     */
    useSpecialEffectCard?: UseSpecialEffectCard | undefined;
    /**
     * @generated from field: webcast.model.message.UsePotionCard use_potion_card = 10;
     */
    usePotionCard?: UsePotionCard | undefined;
    /**
     * @generated from field: webcast.model.message.UseWaveCard use_wave_card = 11;
     */
    useWaveCard?: UseWaveCard | undefined;
    /**
     * @generated from field: webcast.model.message.SpecialEffectNotice special_effect_notice = 12;
     */
    specialEffectNotice?: SpecialEffectNotice | undefined;
    /**
     * @generated from field: webcast.model.message.UseTop2Card use_top2_card = 13;
     */
    useTop2Card?: UseTop2Card | undefined;
    /**
     * @generated from field: webcast.model.message.UseTop3Card use_top3_card = 14;
     */
    useTop3Card?: UseTop3Card | undefined;
    /**
     * @generated from field: webcast.model.message.UseVaultGloveCard use_vault_glove_card = 15;
     */
    useVaultGloveCard?: UseVaultGloveCard | undefined;
    /**
     * @generated from field: int32 award_reason = 16;
     */
    awardReason: number;
};
/**
 * Describes the message webcast.model.message.WebcastLinkMicBattleItemCard.
 * Use `create(WebcastLinkMicBattleItemCardSchema)` to create a new message.
 */
export declare const WebcastLinkMicBattleItemCardSchema: GenMessage<WebcastLinkMicBattleItemCard>;
/**
 * @generated from message webcast.model.message.WebcastLinkMicBattlePunishFinish
 */
export type WebcastLinkMicBattlePunishFinish = Message<"webcast.model.message.WebcastLinkMicBattlePunishFinish"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 channel_id = 2;
     */
    channelId: bigint;
    /**
     * @generated from field: int64 op_uid = 3;
     */
    opUid: bigint;
    /**
     * @generated from field: webcast.im.LinkMicBattlePunishFinish_Reason reason = 4;
     */
    reason: LinkMicBattlePunishFinish_Reason;
    /**
     * @generated from field: int64 battle_id = 5;
     */
    battleId: bigint;
    /**
     * @generated from field: webcast.model.message.battle.BattleSetting battle_settings = 6;
     */
    battleSettings?: BattleSetting | undefined;
    /**
     * @generated from field: webcast.model.live.match.MatchPunishExtraInfo match_punish_extra_info = 7;
     */
    matchPunishExtraInfo?: MatchPunishExtraInfo | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastLinkMicBattlePunishFinish.
 * Use `create(WebcastLinkMicBattlePunishFinishSchema)` to create a new message.
 */
export declare const WebcastLinkMicBattlePunishFinishSchema: GenMessage<WebcastLinkMicBattlePunishFinish>;
/**
 * @generated from message webcast.model.message.WebcastLinkMicFanTicketMethod
 */
export type WebcastLinkMicFanTicketMethod = Message<"webcast.model.message.WebcastLinkMicFanTicketMethod"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.message.FanTicketRoomNoticeContent fan_ticket_room_notice = 2;
     */
    fanTicketRoomNotice?: FanTicketRoomNoticeContent | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastLinkMicFanTicketMethod.
 * Use `create(WebcastLinkMicFanTicketMethodSchema)` to create a new message.
 */
export declare const WebcastLinkMicFanTicketMethodSchema: GenMessage<WebcastLinkMicFanTicketMethod>;
/**
 * @generated from message webcast.model.message.WebcastLinkMicMethod
 */
export type WebcastLinkMicMethod = Message<"webcast.model.message.WebcastLinkMicMethod"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int32 message_type = 2;
     */
    messageType: number;
    /**
     * @generated from field: string access_key = 3;
     */
    accessKey: string;
    /**
     * @generated from field: int32 anchor_linkmic_id = 4;
     */
    anchorLinkmicId: number;
    /**
     * @generated from field: int64 user_id = 5;
     */
    userId: bigint;
    /**
     * @generated from field: int64 fan_ticket = 6;
     */
    fanTicket: bigint;
    /**
     * @generated from field: int64 total_linkmic_fan_ticket = 7;
     */
    totalLinkmicFanTicket: bigint;
    /**
     * @generated from field: int64 channel_id = 8;
     */
    channelId: bigint;
    /**
     * @generated from field: int32 layout = 9;
     */
    layout: number;
    /**
     * @generated from field: int32 vendor = 10;
     */
    vendor: number;
    /**
     * @generated from field: int32 dimension = 11;
     */
    dimension: number;
    /**
     * @generated from field: string theme = 12;
     */
    theme: string;
    /**
     * @generated from field: int64 invite_uid = 13;
     */
    inviteUid: bigint;
    /**
     * @generated from field: int32 answer = 14;
     */
    answer: number;
    /**
     * @generated from field: int64 start_time = 15;
     */
    startTime: bigint;
    /**
     * @generated from field: int32 duration = 16;
     */
    duration: number;
    /**
     * @generated from field: repeated bytes user_scores = 17;
     */
    userScores: Uint8Array[];
    /**
     * @generated from field: int32 match_type = 18;
     */
    matchType: number;
    /**
     * @generated from field: bool win = 19;
     */
    win: boolean;
    /**
     * @generated from field: string prompts = 20;
     */
    prompts: string;
    /**
     * @generated from field: int64 to_user_id = 21;
     */
    toUserId: bigint;
    /**
     * @generated from field: int64 linkmic_layout = 23;
     */
    linkmicLayout: bigint;
    /**
     * @generated from field: int64 from_user_id = 24;
     */
    fromUserId: bigint;
    /**
     * @generated from field: string tips = 25;
     */
    tips: string;
    /**
     * @generated from field: int64 start_time_ms = 26;
     */
    startTimeMs: bigint;
    /**
     * @generated from field: int32 confluence_type = 27;
     */
    confluenceType: number;
    /**
     * @generated from field: int64 from_room_id = 28;
     */
    fromRoomId: bigint;
    /**
     * @generated from field: int32 invite_type = 29;
     */
    inviteType: number;
    /**
     * @generated from field: int64 sub_type = 30;
     */
    subType: bigint;
    /**
     * @generated from field: webcast.chatroom.interact.model.RivalExtraInfo inviter_rival_extra = 31;
     */
    inviterRivalExtra?: RivalExtraInfo | undefined;
    /**
     * @generated from field: string rtc_ext_info = 32;
     */
    rtcExtInfo: string;
    /**
     * @generated from field: string rtc_app_id = 33;
     */
    rtcAppId: string;
    /**
     * @generated from field: string app_id = 34;
     */
    appId: string;
    /**
     * @generated from field: string app_sign = 35;
     */
    appSign: string;
    /**
     * @generated from field: string rtc_app_sign = 36;
     */
    rtcAppSign: string;
    /**
     * @generated from field: string anchor_linkmic_id_str = 37;
     */
    anchorLinkmicIdStr: string;
    /**
     * @generated from field: int64 rival_anchor_id = 38;
     */
    rivalAnchorId: bigint;
    /**
     * @generated from field: int32 rival_linkmic_id = 39;
     */
    rivalLinkmicId: number;
    /**
     * @generated from field: string rival_linkmic_id_str = 40;
     */
    rivalLinkmicIdStr: string;
    /**
     * @generated from field: bool show_popup = 41;
     */
    showPopup: boolean;
    /**
     * @generated from field: int64 sec_invite_uid = 42;
     */
    secInviteUid: bigint;
    /**
     * @generated from field: int64 scene = 43;
     */
    scene: bigint;
    /**
     * @generated from field: int64 sec_apply_uid = 44;
     */
    secApplyUid: bigint;
    /**
     * @generated from field: repeated webcast.model.base.user.User linked_users = 45;
     */
    linkedUsers: User[];
    /**
     * @generated from field: string sec_from_user_id = 46;
     */
    secFromUserId: string;
    /**
     * @generated from field: webcast.model.data.LinkmicReplyType reply_type = 47;
     */
    replyType: LinkmicReplyType;
    /**
     * @generated from field: string reply_prompts = 48;
     */
    replyPrompts: string;
    /**
     * @generated from field: string sec_to_user_id = 49;
     */
    secToUserId: string;
    /**
     * @generated from field: bytes invitor_info = 50;
     */
    invitorInfo: Uint8Array;
    /**
     * @generated from field: bool rtc_join_channel = 51;
     */
    rtcJoinChannel: boolean;
    /**
     * @generated from field: int32 fan_ticket_icon_type = 52;
     */
    fanTicketIconType: number;
};
/**
 * Describes the message webcast.model.message.WebcastLinkMicMethod.
 * Use `create(WebcastLinkMicMethodSchema)` to create a new message.
 */
export declare const WebcastLinkMicMethodSchema: GenMessage<WebcastLinkMicMethod>;
/**
 * @generated from message webcast.model.message.WebcastLinkmicBattleTaskMessage
 */
export type WebcastLinkmicBattleTaskMessage = Message<"webcast.model.message.WebcastLinkmicBattleTaskMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.im.BattleTaskMessageType task_message_type = 2;
     */
    taskMessageType: BattleTaskMessageType;
    /**
     * @generated from field: webcast.model.message.battle.BattleTaskStart start = 3;
     */
    start?: BattleTaskStart | undefined;
    /**
     * @generated from field: webcast.model.message.battle.BattleTaskUpdate task_update = 4;
     */
    taskUpdate?: BattleTaskUpdate | undefined;
    /**
     * @generated from field: webcast.model.message.battle.BattleTaskSettle task_settle = 5;
     */
    taskSettle?: BattleTaskSettle | undefined;
    /**
     * @generated from field: webcast.model.message.battle.BattleRewardSettle reward = 6;
     */
    reward?: BattleRewardSettle | undefined;
    /**
     * @generated from field: int64 battle_id = 20;
     */
    battleId: bigint;
};
/**
 * Describes the message webcast.model.message.WebcastLinkmicBattleTaskMessage.
 * Use `create(WebcastLinkmicBattleTaskMessageSchema)` to create a new message.
 */
export declare const WebcastLinkmicBattleTaskMessageSchema: GenMessage<WebcastLinkmicBattleTaskMessage>;
/**
 * @generated from message webcast.model.message.WebcastLiveGameIntroMessage
 */
export type WebcastLiveGameIntroMessage = Message<"webcast.model.message.WebcastLiveGameIntroMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text content = 2;
     */
    content?: Text | undefined;
    /**
     * @generated from field: bool has_rank_info = 3;
     */
    hasRankInfo: boolean;
};
/**
 * Describes the message webcast.model.message.WebcastLiveGameIntroMessage.
 * Use `create(WebcastLiveGameIntroMessageSchema)` to create a new message.
 */
export declare const WebcastLiveGameIntroMessageSchema: GenMessage<WebcastLiveGameIntroMessage>;
/**
 * @generated from message webcast.model.message.WebcastLiveIntroMessage
 */
export type WebcastLiveIntroMessage = Message<"webcast.model.message.WebcastLiveIntroMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 id = 2;
     */
    id: bigint;
    /**
     * @generated from field: int32 audit_status = 3;
     */
    auditStatus: number;
    /**
     * @generated from field: string content = 4;
     */
    content: string;
    /**
     * @generated from field: webcast.model.base.user.User user = 5;
     */
    user?: User | undefined;
    /**
     * @generated from field: int32 intro_mode = 6;
     */
    introMode: number;
    /**
     * @generated from field: repeated webcast.model.base.user.BadgeStruct badges = 7;
     */
    badges: BadgeStruct[];
    /**
     * @generated from field: string content_language = 8;
     */
    contentLanguage: string;
};
/**
 * Describes the message webcast.model.message.WebcastLiveIntroMessage.
 * Use `create(WebcastLiveIntroMessageSchema)` to create a new message.
 */
export declare const WebcastLiveIntroMessageSchema: GenMessage<WebcastLiveIntroMessage>;
/**
 * @generated from message webcast.model.message.WebcastMarqueeAnnouncementMessage
 */
export type WebcastMarqueeAnnouncementMessage = Message<"webcast.model.message.WebcastMarqueeAnnouncementMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: string message_scene = 2;
     */
    messageScene: string;
    /**
     * @generated from field: repeated webcast.model.message.MessageEntity message_entity = 3;
     */
    messageEntity: MessageEntity[];
};
/**
 * Describes the message webcast.model.message.WebcastMarqueeAnnouncementMessage.
 * Use `create(WebcastMarqueeAnnouncementMessageSchema)` to create a new message.
 */
export declare const WebcastMarqueeAnnouncementMessageSchema: GenMessage<WebcastMarqueeAnnouncementMessage>;
/**
 * @generated from message webcast.model.message.WebcastMemberMessage
 */
export type WebcastMemberMessage = Message<"webcast.model.message.WebcastMemberMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.base.user.User user = 2;
     */
    user?: User | undefined;
    /**
     * @generated from field: int32 member_count = 3;
     */
    memberCount: number;
    /**
     * @generated from field: webcast.model.base.user.User operator = 4;
     */
    operator?: User | undefined;
    /**
     * @generated from field: bool is_set_to_admin = 5;
     */
    isSetToAdmin: boolean;
    /**
     * @generated from field: bool is_top_user = 6;
     */
    isTopUser: boolean;
    /**
     * @generated from field: int32 rank_score = 7;
     */
    rankScore: number;
    /**
     * @generated from field: int32 top_user_no = 8;
     */
    topUserNo: number;
    /**
     * @generated from field: int32 enter_type = 9;
     */
    enterType: number;
    /**
     * @generated from field: webcast.im.MemberMessageAction action = 10;
     */
    action: MemberMessageAction;
    /**
     * @generated from field: string action_description = 11;
     */
    actionDescription: string;
    /**
     * @generated from field: int64 user_id = 12;
     */
    userId: bigint;
    /**
     * @generated from field: bytes effect_config = 13;
     */
    effectConfig: Uint8Array;
    /**
     * @generated from field: string pop_str = 14;
     */
    popStr: string;
    /**
     * @generated from field: webcast.model.message.EffectConfigBean enter_effect_config = 15;
     */
    enterEffectConfig?: EffectConfigBean | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel background_image = 16;
     */
    backgroundImage?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel background_image_v2 = 17;
     */
    backgroundImageV2?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text anchor_display_text = 18;
     */
    anchorDisplayText?: Text | undefined;
    /**
     * @generated from field: string client_enter_source = 19;
     */
    clientEnterSource: string;
    /**
     * @generated from field: string client_enter_type = 20;
     */
    clientEnterType: string;
    /**
     * @generated from field: string client_live_reason = 21;
     */
    clientLiveReason: string;
    /**
     * @generated from field: int64 action_duration = 22;
     */
    actionDuration: bigint;
    /**
     * @generated from field: string user_share_type = 23;
     */
    userShareType: string;
    /**
     * @generated from field: webcast.im.DisplayStyle display_style = 24;
     */
    displayStyle: DisplayStyle;
    /**
     * @generated from field: map<int32, int32> admin_permissions = 25;
     */
    adminPermissions: {
        [key: number]: number;
    };
    /**
     * @generated from field: int32 kick_source = 26;
     */
    kickSource: number;
    /**
     * @generated from field: int64 allow_preview_time = 27;
     */
    allowPreviewTime: bigint;
    /**
     * @generated from field: int64 last_subscription_action = 28;
     */
    lastSubscriptionAction: bigint;
    /**
     * @generated from field: webcast.model.message.PublicAreaMessageCommon public_area_message_common = 29;
     */
    publicAreaMessageCommon?: PublicAreaMessageCommon | undefined;
    /**
     * @generated from field: int64 live_sub_only_tier = 30;
     */
    liveSubOnlyTier: bigint;
    /**
     * @generated from field: int64 live_sub_only_month = 31;
     */
    liveSubOnlyMonth: bigint;
    /**
     * @generated from field: string ec_streamer_key = 32;
     */
    ecStreamerKey: string;
    /**
     * @generated from field: int64 show_wave = 33;
     */
    showWave: bigint;
    /**
     * @generated from field: webcast.model.message.WaveAlgorithmData wave_algorithm_data = 34;
     */
    waveAlgorithmData?: WaveAlgorithmData | undefined;
    /**
     * @generated from field: webcast.im.HitABStatus hit_ab_status = 35;
     */
    hitAbStatus: HitABStatus;
};
/**
 * Describes the message webcast.model.message.WebcastMemberMessage.
 * Use `create(WebcastMemberMessageSchema)` to create a new message.
 */
export declare const WebcastMemberMessageSchema: GenMessage<WebcastMemberMessage>;
/**
 * @generated from message webcast.model.message.WebcastMsgDetectMessage
 */
export type WebcastMsgDetectMessage = Message<"webcast.model.message.WebcastMsgDetectMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int32 d_type = 2;
     */
    dType: number;
    /**
     * @generated from field: webcast.model.message.TriggerCondition t_condition = 3;
     */
    tCondition?: TriggerCondition | undefined;
    /**
     * @generated from field: webcast.model.message.TimeInfo t_info = 4;
     */
    tInfo?: TimeInfo | undefined;
    /**
     * @generated from field: int32 trigger_by = 5;
     */
    triggerBy: number;
    /**
     * @generated from field: string from_region = 6;
     */
    fromRegion: string;
};
/**
 * Describes the message webcast.model.message.WebcastMsgDetectMessage.
 * Use `create(WebcastMsgDetectMessageSchema)` to create a new message.
 */
export declare const WebcastMsgDetectMessageSchema: GenMessage<WebcastMsgDetectMessage>;
/**
 * @generated from message webcast.model.message.WebcastNoticeMessage
 */
export type WebcastNoticeMessage = Message<"webcast.model.message.WebcastNoticeMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
    /**
     * @generated from field: int32 notice_type = 3;
     */
    noticeType: number;
    /**
     * @generated from field: string style = 4;
     */
    style: string;
    /**
     * @generated from field: webcast.model.message.common.Text title = 5;
     */
    title?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text violation_reason = 6;
     */
    violationReason?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text display_text = 7;
     */
    displayText?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text tips_title = 8;
     */
    tipsTitle?: Text | undefined;
    /**
     * @generated from field: string tips_url = 9;
     */
    tipsUrl: string;
    /**
     * @generated from field: webcast.model.message.common.Text notice_title = 10;
     */
    noticeTitle?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text notice_content = 11;
     */
    noticeContent?: Text | undefined;
    /**
     * @generated from field: string scene = 12;
     */
    scene: string;
};
/**
 * Describes the message webcast.model.message.WebcastNoticeMessage.
 * Use `create(WebcastNoticeMessageSchema)` to create a new message.
 */
export declare const WebcastNoticeMessageSchema: GenMessage<WebcastNoticeMessage>;
/**
 * @generated from message webcast.model.message.WebcastPartnershipDropsUpdateMessage
 */
export type WebcastPartnershipDropsUpdateMessage = Message<"webcast.model.message.WebcastPartnershipDropsUpdateMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.im.PartnershipDropsUpdateMessage_ChangeMode change_mode = 2;
     */
    changeMode: PartnershipDropsUpdateMessage_ChangeMode;
    /**
     * @generated from field: string drops_id = 3;
     */
    dropsId: string;
    /**
     * @generated from field: string task_id = 4;
     */
    taskId: string;
    /**
     * @generated from field: string event_id = 5;
     */
    eventId: string;
    /**
     * @generated from field: int64 anchor_uid = 6;
     */
    anchorUid: bigint;
};
/**
 * Describes the message webcast.model.message.WebcastPartnershipDropsUpdateMessage.
 * Use `create(WebcastPartnershipDropsUpdateMessageSchema)` to create a new message.
 */
export declare const WebcastPartnershipDropsUpdateMessageSchema: GenMessage<WebcastPartnershipDropsUpdateMessage>;
/**
 * @generated from message webcast.model.message.WebcastPartnershipGameOfflineMessage
 */
export type WebcastPartnershipGameOfflineMessage = Message<"webcast.model.message.WebcastPartnershipGameOfflineMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: repeated webcast.model.message.OfflineGameInfo offline_game_list = 2;
     */
    offlineGameList: OfflineGameInfo[];
};
/**
 * Describes the message webcast.model.message.WebcastPartnershipGameOfflineMessage.
 * Use `create(WebcastPartnershipGameOfflineMessageSchema)` to create a new message.
 */
export declare const WebcastPartnershipGameOfflineMessageSchema: GenMessage<WebcastPartnershipGameOfflineMessage>;
/**
 * @generated from message webcast.model.message.WebcastPartnershipPunishMessage
 */
export type WebcastPartnershipPunishMessage = Message<"webcast.model.message.WebcastPartnershipPunishMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.message.PunishEventInfo punish_info = 2;
     */
    punishInfo?: PunishEventInfo | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastPartnershipPunishMessage.
 * Use `create(WebcastPartnershipPunishMessageSchema)` to create a new message.
 */
export declare const WebcastPartnershipPunishMessageSchema: GenMessage<WebcastPartnershipPunishMessage>;
/**
 * @generated from message webcast.model.message.WebcastPerceptionMessage
 */
export type WebcastPerceptionMessage = Message<"webcast.model.message.WebcastPerceptionMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.message.PerceptionDialogInfo dialog = 2;
     */
    dialog?: PerceptionDialogInfo | undefined;
    /**
     * @generated from field: webcast.model.message.PunishEventInfo punish_info = 3;
     */
    punishInfo?: PunishEventInfo | undefined;
    /**
     * @generated from field: int32 end_time = 4;
     */
    endTime: number;
    /**
     * @generated from field: bool show_violation_warning = 5;
     */
    showViolationWarning: boolean;
    /**
     * @generated from field: webcast.model.message.common.Text toast = 6;
     */
    toast?: Text | undefined;
    /**
     * @generated from field: int32 float_style = 7;
     */
    floatStyle: number;
    /**
     * @generated from field: webcast.model.message.common.Text float_text = 8;
     */
    floatText?: Text | undefined;
    /**
     * @generated from field: webcast.message.proto.PerceptionSheetInfo sheet = 9;
     */
    sheet?: PerceptionSheetInfo | undefined;
    /**
     * @generated from field: webcast.model.data.PerceptionDialogIconType float_icon_type = 10;
     */
    floatIconType: PerceptionDialogIconType;
};
/**
 * Describes the message webcast.model.message.WebcastPerceptionMessage.
 * Use `create(WebcastPerceptionMessageSchema)` to create a new message.
 */
export declare const WebcastPerceptionMessageSchema: GenMessage<WebcastPerceptionMessage>;
/**
 * @generated from message webcast.model.message.WebcastPollMessage
 */
export type WebcastPollMessage = Message<"webcast.model.message.WebcastPollMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 message_type = 2;
     */
    messageType: bigint;
    /**
     * @generated from field: int64 poll_id = 3;
     */
    pollId: bigint;
    /**
     * @generated from field: webcast.model.message.PollStartContent start_content = 4;
     */
    startContent?: PollStartContent | undefined;
    /**
     * @generated from field: webcast.model.message.PollEndContent end_content = 5;
     */
    endContent?: PollEndContent | undefined;
    /**
     * @generated from field: webcast.model.message.PollUpdateVotesContent update_votes_content = 6;
     */
    updateVotesContent?: PollUpdateVotesContent | undefined;
    /**
     * @generated from field: webcast.model.data.PollKind poll_kind = 7;
     */
    pollKind: PollKind;
    /**
     * @generated from field: webcast.model.message.PollBasicInfo poll_basic_info = 8;
     */
    pollBasicInfo?: PollBasicInfo | undefined;
    /**
     * @generated from field: webcast.model.message.TemplateContent template_content = 9;
     */
    templateContent?: TemplateContent | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastPollMessage.
 * Use `create(WebcastPollMessageSchema)` to create a new message.
 */
export declare const WebcastPollMessageSchema: GenMessage<WebcastPollMessage>;
/**
 * @generated from message webcast.model.message.WebcastQuestionNewMessage
 */
export type WebcastQuestionNewMessage = Message<"webcast.model.message.WebcastQuestionNewMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.message.Question data = 2;
     */
    data?: Question | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastQuestionNewMessage.
 * Use `create(WebcastQuestionNewMessageSchema)` to create a new message.
 */
export declare const WebcastQuestionNewMessageSchema: GenMessage<WebcastQuestionNewMessage>;
/**
 * @generated from message webcast.model.message.WebcastRankTextMessage
 */
export type WebcastRankTextMessage = Message<"webcast.model.message.WebcastRankTextMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.im.RankTextMessage_RankTestMessageScene scene = 2;
     */
    scene: RankTextMessage_RankTestMessageScene;
    /**
     * @generated from field: int64 owner_idx_before_update = 3;
     */
    ownerIdxBeforeUpdate: bigint;
    /**
     * @generated from field: int64 owner_idx_after_update = 4;
     */
    ownerIdxAfterUpdate: bigint;
    /**
     * @generated from field: webcast.model.message.common.Text self_get_badge_msg = 5;
     */
    selfGetBadgeMsg?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text other_get_badge_msg = 6;
     */
    otherGetBadgeMsg?: Text | undefined;
    /**
     * @generated from field: int64 cur_user_id = 7;
     */
    curUserId: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel left_icon = 8;
     */
    leftIcon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text content = 9;
     */
    content?: Text | undefined;
    /**
     * @generated from field: webcast.model.data.ProfitRankType rank_type = 10;
     */
    rankType: ProfitRankType;
    /**
     * @generated from field: webcast.message.proto.RankUserEnigmaInfo user_enigma_info = 11;
     */
    userEnigmaInfo?: RankUserEnigmaInfo | undefined;
    /**
     * @generated from field: webcast.model.message.PublicAreaMessageCommon public_area_msg_common = 12;
     */
    publicAreaMsgCommon?: PublicAreaMessageCommon | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastRankTextMessage.
 * Use `create(WebcastRankTextMessageSchema)` to create a new message.
 */
export declare const WebcastRankTextMessageSchema: GenMessage<WebcastRankTextMessage>;
/**
 * @generated from message webcast.model.message.WebcastRankUpdateMessage
 */
export type WebcastRankUpdateMessage = Message<"webcast.model.message.WebcastRankUpdateMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: repeated webcast.model.message.RankUpdate updates = 2;
     */
    updates: RankUpdate[];
    /**
     * @generated from field: webcast.model.data.EntranceGroupType group_type = 3;
     */
    groupType: EntranceGroupType;
    /**
     * @generated from field: webcast.im.OpType op_type = 4;
     */
    opType: OpType;
    /**
     * @generated from field: int64 rank_priority = 5;
     */
    rankPriority: bigint;
    /**
     * @generated from field: repeated webcast.model.rank.RankTabInfo tabs = 6;
     */
    tabs: RankTabInfo[];
    /**
     * @generated from field: bool is_animation_loop_play = 7;
     */
    isAnimationLoopPlay: boolean;
    /**
     * @generated from field: bool animation_loop_for_off = 8;
     */
    animationLoopForOff: boolean;
    /**
     * @generated from field: repeated webcast.model.message.UnionAnimationInfo union_animation = 9;
     */
    unionAnimation: UnionAnimationInfo[];
    /**
     * @generated from field: repeated webcast.model.message.RankListTabInfo tab_info = 10;
     */
    tabInfo: RankListTabInfo[];
    /**
     * @generated from field: webcast.model.message.ValidRanks valid_ranks = 11;
     */
    validRanks?: ValidRanks | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastRankUpdateMessage.
 * Use `create(WebcastRankUpdateMessageSchema)` to create a new message.
 */
export declare const WebcastRankUpdateMessageSchema: GenMessage<WebcastRankUpdateMessage>;
/**
 * @generated from message webcast.model.message.WebcastRoomMessage
 */
export type WebcastRoomMessage = Message<"webcast.model.message.WebcastRoomMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
    /**
     * @generated from field: bool supprot_landscape = 3;
     */
    supprotLandscape: boolean;
    /**
     * @generated from field: int32 source = 4;
     */
    source: number;
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 5;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: string scene = 6;
     */
    scene: string;
    /**
     * @generated from field: bool is_welcome = 7;
     */
    isWelcome: boolean;
    /**
     * @generated from field: webcast.model.message.PublicAreaMessageCommon public_area_common = 8;
     */
    publicAreaCommon?: PublicAreaMessageCommon | undefined;
    /**
     * @generated from field: int64 show_duration_ms = 9;
     */
    showDurationMs: bigint;
    /**
     * @generated from field: string sub_scene = 10;
     */
    subScene: string;
    /**
     * @generated from field: string schema = 11;
     */
    schema: string;
    /**
     * @generated from field: string signature = 12;
     */
    signature: string;
    /**
     * @generated from field: string signature_version = 13;
     */
    signatureVersion: string;
};
/**
 * Describes the message webcast.model.message.WebcastRoomMessage.
 * Use `create(WebcastRoomMessageSchema)` to create a new message.
 */
export declare const WebcastRoomMessageSchema: GenMessage<WebcastRoomMessage>;
/**
 * @generated from message webcast.model.message.WebcastRoomNotifyMessage
 */
export type WebcastRoomNotifyMessage = Message<"webcast.model.message.WebcastRoomNotifyMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: string schema = 2;
     */
    schema: string;
    /**
     * @generated from field: int64 notify_type = 3;
     */
    notifyType: bigint;
    /**
     * @generated from field: string content = 4;
     */
    content: string;
    /**
     * @generated from field: webcast.model.base.user.User user = 5;
     */
    user?: User | undefined;
    /**
     * @generated from field: webcast.model.message.RoomNotifyMessageExtra extra = 6;
     */
    extra?: RoomNotifyMessageExtra | undefined;
    /**
     * @generated from field: int32 notify_class = 7;
     */
    notifyClass: number;
    /**
     * @generated from field: repeated int64 flex_setting = 8;
     */
    flexSetting: bigint[];
    /**
     * @generated from field: string source = 9;
     */
    source: string;
    /**
     * @generated from field: int64 from_user_id = 10;
     */
    fromUserId: bigint;
    /**
     * @generated from field: webcast.model.base.user.PrivilegeLogExtra privilege_log_extra = 11;
     */
    privilegeLogExtra?: PrivilegeLogExtra | undefined;
    /**
     * @generated from field: int64 to_anchor_id = 12;
     */
    toAnchorId: bigint;
    /**
     * @generated from field: webcast.model.message.RoomNotifyMessage_EventTracking event_tracking = 13;
     */
    eventTracking?: RoomNotifyMessage_EventTracking | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastRoomNotifyMessage.
 * Use `create(WebcastRoomNotifyMessageSchema)` to create a new message.
 */
export declare const WebcastRoomNotifyMessageSchema: GenMessage<WebcastRoomNotifyMessage>;
/**
 * @generated from message webcast.model.message.WebcastRoomPinMessage
 */
export type WebcastRoomPinMessage = Message<"webcast.model.message.WebcastRoomPinMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.message.WebcastChatMessage chat_message = 2;
     */
    chatMessage?: WebcastChatMessage | undefined;
    /**
     * @generated from field: webcast.model.message.WebcastSocialMessage social_message = 3;
     */
    socialMessage?: WebcastSocialMessage | undefined;
    /**
     * @generated from field: webcast.model.message.WebcastGiftMessage gift_message = 4;
     */
    giftMessage?: WebcastGiftMessage | undefined;
    /**
     * @generated from field: webcast.model.message.WebcastMemberMessage member_message = 5;
     */
    memberMessage?: WebcastMemberMessage | undefined;
    /**
     * @generated from field: webcast.model.message.WebcastLikeMessage like_message = 6;
     */
    likeMessage?: WebcastLikeMessage | undefined;
    /**
     * @generated from field: string method = 30;
     */
    method: string;
    /**
     * @generated from field: int64 pin_time = 31;
     */
    pinTime: bigint;
    /**
     * @generated from field: webcast.model.base.user.User operator = 32;
     */
    operator?: User | undefined;
    /**
     * @generated from field: webcast.im.PinMessage_actionType action = 33;
     */
    action: PinMessage_actionType;
    /**
     * @generated from field: int64 display_duration = 34;
     */
    displayDuration: bigint;
    /**
     * @generated from field: int64 pin_msg_id = 35;
     */
    pinMsgId: bigint;
    /**
     * @generated from field: string ec_streamer_key = 36;
     */
    ecStreamerKey: string;
};
/**
 * Describes the message webcast.model.message.WebcastRoomPinMessage.
 * Use `create(WebcastRoomPinMessageSchema)` to create a new message.
 */
export declare const WebcastRoomPinMessageSchema: GenMessage<WebcastRoomPinMessage>;
/**
 * @generated from message webcast.model.message.WebcastRoomUserSeqMessage
 */
export type WebcastRoomUserSeqMessage = Message<"webcast.model.message.WebcastRoomUserSeqMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: repeated webcast.model.message.Contributor ranks = 2;
     */
    ranks: Contributor[];
    /**
     * @generated from field: int64 total = 3;
     */
    total: bigint;
    /**
     * @generated from field: string pop_str = 4;
     */
    popStr: string;
    /**
     * @generated from field: repeated webcast.model.message.Contributor seats = 5;
     */
    seats: Contributor[];
    /**
     * @generated from field: int64 popularity = 6;
     */
    popularity: bigint;
    /**
     * @generated from field: int64 total_user = 7;
     */
    totalUser: bigint;
    /**
     * @generated from field: int64 anonymous = 8;
     */
    anonymous: bigint;
};
/**
 * Describes the message webcast.model.message.WebcastRoomUserSeqMessage.
 * Use `create(WebcastRoomUserSeqMessageSchema)` to create a new message.
 */
export declare const WebcastRoomUserSeqMessageSchema: GenMessage<WebcastRoomUserSeqMessage>;
/**
 * @generated from message webcast.model.message.WebcastRoomVerifyMessage
 */
export type WebcastRoomVerifyMessage = Message<"webcast.model.message.WebcastRoomVerifyMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int32 action = 2;
     */
    action: number;
    /**
     * @generated from field: string content = 3;
     */
    content: string;
    /**
     * @generated from field: int64 notice_type = 4;
     */
    noticeType: bigint;
    /**
     * @generated from field: bool close_room = 5;
     */
    closeRoom: boolean;
};
/**
 * Describes the message webcast.model.message.WebcastRoomVerifyMessage.
 * Use `create(WebcastRoomVerifyMessageSchema)` to create a new message.
 */
export declare const WebcastRoomVerifyMessageSchema: GenMessage<WebcastRoomVerifyMessage>;
/**
 * @generated from message webcast.model.message.WebcastSocialMessage
 */
export type WebcastSocialMessage = Message<"webcast.model.message.WebcastSocialMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.base.user.User user = 2;
     */
    user?: User | undefined;
    /**
     * @generated from field: int64 share_type = 3;
     */
    shareType: bigint;
    /**
     * @generated from field: int64 action = 4;
     */
    action: bigint;
    /**
     * @generated from field: string share_target = 5;
     */
    shareTarget: string;
    /**
     * @generated from field: int64 follow_count = 6;
     */
    followCount: bigint;
    /**
     * @generated from field: int64 share_display_style = 7;
     */
    shareDisplayStyle: bigint;
    /**
     * @generated from field: int32 share_count = 8;
     */
    shareCount: number;
    /**
     * @generated from field: webcast.model.message.PublicAreaMessageCommon public_area_message_common = 9;
     */
    publicAreaMessageCommon?: PublicAreaMessageCommon | undefined;
    /**
     * @generated from field: string signature = 10;
     */
    signature: string;
    /**
     * @generated from field: string signature_version = 11;
     */
    signatureVersion: string;
    /**
     * @generated from field: int64 show_duration_ms = 12;
     */
    showDurationMs: bigint;
    /**
     * @generated from field: int32 follow_type = 13;
     */
    followType: number;
    /**
     * @generated from field: int64 target_user_id = 14;
     */
    targetUserId: bigint;
    /**
     * @generated from field: string scene = 15;
     */
    scene: string;
};
/**
 * Describes the message webcast.model.message.WebcastSocialMessage.
 * Use `create(WebcastSocialMessageSchema)` to create a new message.
 */
export declare const WebcastSocialMessageSchema: GenMessage<WebcastSocialMessage>;
/**
 * @generated from message webcast.model.message.WebcastSpeakerMessage
 */
export type WebcastSpeakerMessage = Message<"webcast.model.message.WebcastSpeakerMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastSpeakerMessage.
 * Use `create(WebcastSpeakerMessageSchema)` to create a new message.
 */
export declare const WebcastSpeakerMessageSchema: GenMessage<WebcastSpeakerMessage>;
/**
 * @generated from message webcast.model.message.WebcastSubNotifyMessage
 */
export type WebcastSubNotifyMessage = Message<"webcast.model.message.WebcastSubNotifyMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.base.user.User user = 2;
     */
    user?: User | undefined;
    /**
     * @generated from field: webcast.im.ExhibitionType exhibition_type = 3;
     */
    exhibitionType: ExhibitionType;
    /**
     * @generated from field: int64 sub_month = 4;
     */
    subMonth: bigint;
    /**
     * @generated from field: webcast.im.SubscribeType subscribe_type = 5;
     */
    subscribeType: SubscribeType;
    /**
     * @generated from field: webcast.im.OldSubscribeStatus old_subscribe_status = 6;
     */
    oldSubscribeStatus: OldSubscribeStatus;
    /**
     * @generated from field: webcast.im.MessageType message_type = 7;
     */
    messageType: MessageType;
    /**
     * @generated from field: webcast.im.SubscribingStatus subscribing_status = 8;
     */
    subscribingStatus: SubscribingStatus;
    /**
     * @generated from field: bool is_send = 9;
     */
    isSend: boolean;
    /**
     * @generated from field: bool is_custom = 10;
     */
    isCustom: boolean;
    /**
     * @generated from field: webcast.im.GiftSource gift_source = 11;
     */
    giftSource: GiftSource;
    /**
     * @generated from field: webcast.im.MessageDisplayStyle message_display_style = 12;
     */
    messageDisplayStyle: MessageDisplayStyle;
    /**
     * @generated from field: webcast.model.message.PublicAreaMessageCommon public_area_message_common = 13;
     */
    publicAreaMessageCommon?: PublicAreaMessageCommon | undefined;
    /**
     * @generated from field: string package_id = 14;
     */
    packageId: string;
    /**
     * @generated from field: webcast.model.message.RoomNotifyMessage_EventTracking event_tracking = 15;
     */
    eventTracking?: RoomNotifyMessage_EventTracking | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastSubNotifyMessage.
 * Use `create(WebcastSubNotifyMessageSchema)` to create a new message.
 */
export declare const WebcastSubNotifyMessageSchema: GenMessage<WebcastSubNotifyMessage>;
/**
 * @generated from message webcast.model.message.WebcastSubPinEventMessage
 */
export type WebcastSubPinEventMessage = Message<"webcast.model.message.WebcastSubPinEventMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.im.SubPinEventMessage_ActionType action_type = 2;
     */
    actionType: SubPinEventMessage_ActionType;
    /**
     * @generated from field: webcast.chatroom.api.SubPinCard card = 3;
     */
    card?: SubPinCard | undefined;
    /**
     * @generated from field: int64 operator_user_id = 4;
     */
    operatorUserId: bigint;
};
/**
 * Describes the message webcast.model.message.WebcastSubPinEventMessage.
 * Use `create(WebcastSubPinEventMessageSchema)` to create a new message.
 */
export declare const WebcastSubPinEventMessageSchema: GenMessage<WebcastSubPinEventMessage>;
/**
 * @generated from message webcast.model.message.WebcastToastMessage
 */
export type WebcastToastMessage = Message<"webcast.model.message.WebcastToastMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int64 display_duration_millisecond = 2;
     */
    displayDurationMillisecond: bigint;
    /**
     * @generated from field: int64 delay_display_duration_millisecond = 3;
     */
    delayDisplayDurationMillisecond: bigint;
    /**
     * @generated from field: string scene = 4;
     */
    scene: string;
};
/**
 * Describes the message webcast.model.message.WebcastToastMessage.
 * Use `create(WebcastToastMessageSchema)` to create a new message.
 */
export declare const WebcastToastMessageSchema: GenMessage<WebcastToastMessage>;
/**
 * @generated from message webcast.model.message.WebcastUnauthorizedMemberMessage
 */
export type WebcastUnauthorizedMemberMessage = Message<"webcast.model.message.WebcastUnauthorizedMemberMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int32 action = 2;
     */
    action: number;
    /**
     * @generated from field: webcast.model.message.common.Text nick_name_prefix = 3;
     */
    nickNamePrefix?: Text | undefined;
    /**
     * @generated from field: string nick_name = 4;
     */
    nickName: string;
    /**
     * @generated from field: webcast.model.message.common.Text enter_text = 5;
     */
    enterText?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.PublicAreaMessageCommon public_area_common = 6;
     */
    publicAreaCommon?: PublicAreaMessageCommon | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastUnauthorizedMemberMessage.
 * Use `create(WebcastUnauthorizedMemberMessageSchema)` to create a new message.
 */
export declare const WebcastUnauthorizedMemberMessageSchema: GenMessage<WebcastUnauthorizedMemberMessage>;
/**
 * @generated from message webcast.model.message.WebcastViewerPicksUpdateMessage
 */
export type WebcastViewerPicksUpdateMessage = Message<"webcast.model.message.WebcastViewerPicksUpdateMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int32 update_type = 2;
     */
    updateType: number;
    /**
     * @generated from field: webcast.model.viewer_picks.ViewerPicksInfo info = 3;
     */
    info?: ViewerPicksInfo | undefined;
};
/**
 * Describes the message webcast.model.message.WebcastViewerPicksUpdateMessage.
 * Use `create(WebcastViewerPicksUpdateMessageSchema)` to create a new message.
 */
export declare const WebcastViewerPicksUpdateMessageSchema: GenMessage<WebcastViewerPicksUpdateMessage>;
//# sourceMappingURL=messages_pb.d.ts.map