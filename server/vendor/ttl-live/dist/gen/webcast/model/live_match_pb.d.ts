import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "./base/messages_pb.js";
import type { BattleABTestType, EffectStruct } from "./data/messages_pb.js";
import type { Text } from "./message/common_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/live_match.proto.
 */
export declare const file_webcast_model_live_match: GenFile;
/**
 * @generated from message webcast.model.live.match.AnchorGiftModeMetaMap
 */
export type AnchorGiftModeMetaMap = Message<"webcast.model.live.match.AnchorGiftModeMetaMap"> & {
    /**
     * @generated from field: map<int64, webcast.model.live.match.GiftModeMetaList> anchor_gift_mode_metas = 1;
     */
    anchorGiftModeMetas: {
        [key: string]: GiftModeMetaList;
    };
};
/**
 * Describes the message webcast.model.live.match.AnchorGiftModeMetaMap.
 * Use `create(AnchorGiftModeMetaMapSchema)` to create a new message.
 */
export declare const AnchorGiftModeMetaMapSchema: GenMessage<AnchorGiftModeMetaMap>;
/**
 * @generated from message webcast.model.live.match.AnchorMatchSettings
 */
export type AnchorMatchSettings = Message<"webcast.model.live.match.AnchorMatchSettings"> & {
    /**
     * @generated from field: bool enable_ai_commentary = 1;
     */
    enableAiCommentary: boolean;
};
/**
 * Describes the message webcast.model.live.match.AnchorMatchSettings.
 * Use `create(AnchorMatchSettingsSchema)` to create a new message.
 */
export declare const AnchorMatchSettingsSchema: GenMessage<AnchorMatchSettings>;
/**
 * @generated from message webcast.model.live.match.BattleABTest
 */
export type BattleABTest = Message<"webcast.model.live.match.BattleABTest"> & {
    /**
     * @generated from field: webcast.model.data.BattleABTestType ab_test_type = 1;
     */
    abTestType: BattleABTestType;
    /**
     * @generated from field: int32 group = 2;
     */
    group: number;
};
/**
 * Describes the message webcast.model.live.match.BattleABTest.
 * Use `create(BattleABTestSchema)` to create a new message.
 */
export declare const BattleABTestSchema: GenMessage<BattleABTest>;
/**
 * @generated from message webcast.model.live.match.BattleABTestList
 */
export type BattleABTestList = Message<"webcast.model.live.match.BattleABTestList"> & {
    /**
     * @generated from field: repeated webcast.model.live.match.BattleABTest ab_test_list = 1;
     */
    abTestList: BattleABTest[];
};
/**
 * Describes the message webcast.model.live.match.BattleABTestList.
 * Use `create(BattleABTestListSchema)` to create a new message.
 */
export declare const BattleABTestListSchema: GenMessage<BattleABTestList>;
/**
 * @generated from message webcast.model.live.match.BattleABTestSetting
 */
export type BattleABTestSetting = Message<"webcast.model.live.match.BattleABTestSetting"> & {
    /**
     * @generated from field: int64 key = 1;
     */
    key: bigint;
    /**
     * @generated from field: webcast.model.live.match.BattleABTestList value = 2;
     */
    value?: BattleABTestList | undefined;
};
/**
 * Describes the message webcast.model.live.match.BattleABTestSetting.
 * Use `create(BattleABTestSettingSchema)` to create a new message.
 */
export declare const BattleABTestSettingSchema: GenMessage<BattleABTestSetting>;
/**
 * @generated from message webcast.model.live.match.BattleBaseUserInfo
 */
export type BattleBaseUserInfo = Message<"webcast.model.live.match.BattleBaseUserInfo"> & {
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
     * @generated from field: string display_id = 4;
     */
    displayId: string;
    /**
     * @generated from field: int64 room_id = 5;
     */
    roomId: bigint;
    /**
     * @generated from field: int32 invitation_role = 6;
     */
    invitationRole: number;
};
/**
 * Describes the message webcast.model.live.match.BattleBaseUserInfo.
 * Use `create(BattleBaseUserInfoSchema)` to create a new message.
 */
export declare const BattleBaseUserInfoSchema: GenMessage<BattleBaseUserInfo>;
/**
 * @generated from message webcast.model.live.match.BattleBonusConfig
 */
export type BattleBonusConfig = Message<"webcast.model.live.match.BattleBonusConfig"> & {
    /**
     * @generated from field: int64 preview_start_time = 1;
     */
    previewStartTime: bigint;
    /**
     * @generated from field: repeated webcast.model.live.match.PreviewPeriod preview_config = 2;
     */
    previewConfig: PreviewPeriod[];
    /**
     * @generated from field: webcast.model.live.match.TaskPeriodConfig target_config = 3;
     */
    targetConfig?: TaskPeriodConfig | undefined;
    /**
     * @generated from field: webcast.model.live.match.RewardPeriodConfig reward_config = 4;
     */
    rewardConfig?: RewardPeriodConfig | undefined;
    /**
     * @generated from field: map<int64, webcast.model.live.match.BattleTaskGiftAmountGuide> gift_amount_guide = 5;
     */
    giftAmountGuide: {
        [key: string]: BattleTaskGiftAmountGuide;
    };
    /**
     * @generated from field: int64 preview_start_timestamp = 6;
     */
    previewStartTimestamp: bigint;
    /**
     * @generated from field: string preview_click_action_schema_url = 7;
     */
    previewClickActionSchemaUrl: string;
};
/**
 * Describes the message webcast.model.live.match.BattleBonusConfig.
 * Use `create(BattleBonusConfigSchema)` to create a new message.
 */
export declare const BattleBonusConfigSchema: GenMessage<BattleBonusConfig>;
/**
 * @generated from message webcast.model.live.match.BattleComboInfo
 */
export type BattleComboInfo = Message<"webcast.model.live.match.BattleComboInfo"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: int64 combo_status = 2;
     */
    comboStatus: bigint;
    /**
     * @generated from field: int64 combo_count = 3;
     */
    comboCount: bigint;
    /**
     * @generated from field: string combo_icon_url = 4;
     */
    comboIconUrl: string;
    /**
     * @generated from field: int32 combo_type = 5;
     */
    comboType: number;
    /**
     * @generated from field: string combo_rule_guide_schema = 6;
     */
    comboRuleGuideSchema: string;
    /**
     * @generated from field: string user_id_str = 7;
     */
    userIdStr: string;
    /**
     * @generated from field: string combo_count_str = 8;
     */
    comboCountStr: string;
};
/**
 * Describes the message webcast.model.live.match.BattleComboInfo.
 * Use `create(BattleComboInfoSchema)` to create a new message.
 */
export declare const BattleComboInfoSchema: GenMessage<BattleComboInfo>;
/**
 * @generated from message webcast.model.live.match.BattleEffect
 */
export type BattleEffect = Message<"webcast.model.live.match.BattleEffect"> & {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: repeated string uid_list = 2;
     */
    uidList: string[];
    /**
     * @generated from field: string effect_extra = 3;
     */
    effectExtra: string;
};
/**
 * Describes the message webcast.model.live.match.BattleEffect.
 * Use `create(BattleEffectSchema)` to create a new message.
 */
export declare const BattleEffectSchema: GenMessage<BattleEffect>;
/**
 * @generated from message webcast.model.live.match.BattleEffectInfos
 */
export type BattleEffectInfos = Message<"webcast.model.live.match.BattleEffectInfos"> & {
    /**
     * @generated from field: repeated webcast.model.live.match.BattleEffect effect_info_list = 1;
     */
    effectInfoList: BattleEffect[];
    /**
     * @generated from field: int64 effect_list_version = 2;
     */
    effectListVersion: bigint;
};
/**
 * Describes the message webcast.model.live.match.BattleEffectInfos.
 * Use `create(BattleEffectInfosSchema)` to create a new message.
 */
export declare const BattleEffectInfosSchema: GenMessage<BattleEffectInfos>;
/**
 * @generated from message webcast.model.live.match.BattleFeatureFlags
 */
export type BattleFeatureFlags = Message<"webcast.model.live.match.BattleFeatureFlags"> & {
    /**
     * @generated from field: bool enable_match_countdown_optimization = 1;
     */
    enableMatchCountdownOptimization: boolean;
    /**
     * @generated from field: bool hide_combo_count_on_start = 2;
     */
    hideComboCountOnStart: boolean;
};
/**
 * Describes the message webcast.model.live.match.BattleFeatureFlags.
 * Use `create(BattleFeatureFlagsSchema)` to create a new message.
 */
export declare const BattleFeatureFlagsSchema: GenMessage<BattleFeatureFlags>;
/**
 * @generated from message webcast.model.live.match.BattlePrompt
 */
export type BattlePrompt = Message<"webcast.model.live.match.BattlePrompt"> & {
    /**
     * @generated from field: string prompt_key = 1;
     */
    promptKey: string;
    /**
     * @generated from field: repeated webcast.model.live.match.BattlePromptElem elems = 2;
     */
    elems: BattlePromptElem[];
};
/**
 * Describes the message webcast.model.live.match.BattlePrompt.
 * Use `create(BattlePromptSchema)` to create a new message.
 */
export declare const BattlePromptSchema: GenMessage<BattlePrompt>;
/**
 * @generated from message webcast.model.live.match.BattlePromptElem
 */
export type BattlePromptElem = Message<"webcast.model.live.match.BattlePromptElem"> & {
    /**
     * @generated from field: string prompt_field = 1;
     */
    promptField: string;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
};
/**
 * Describes the message webcast.model.live.match.BattlePromptElem.
 * Use `create(BattlePromptElemSchema)` to create a new message.
 */
export declare const BattlePromptElemSchema: GenMessage<BattlePromptElem>;
/**
 * @generated from message webcast.model.live.match.BattleRivalTag
 */
export type BattleRivalTag = Message<"webcast.model.live.match.BattleRivalTag"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel bg_image = 1;
     */
    bgImage?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel icon_image = 2;
     */
    iconImage?: ImageModel | undefined;
    /**
     * @generated from field: string content = 3;
     */
    content: string;
};
/**
 * Describes the message webcast.model.live.match.BattleRivalTag.
 * Use `create(BattleRivalTagSchema)` to create a new message.
 */
export declare const BattleRivalTagSchema: GenMessage<BattleRivalTag>;
/**
 * @generated from message webcast.model.live.match.BattleTaskGiftAmountGuide
 */
export type BattleTaskGiftAmountGuide = Message<"webcast.model.live.match.BattleTaskGiftAmountGuide"> & {
    /**
     * @generated from field: webcast.model.live.match.BattlePrompt guide_prompt = 1;
     */
    guidePrompt?: BattlePrompt | undefined;
    /**
     * @generated from field: int32 prompt_type = 2;
     */
    promptType: number;
    /**
     * @generated from field: int32 disappear_duration = 3;
     */
    disappearDuration: number;
    /**
     * @generated from field: webcast.model.base.ImageModel icon_image = 11;
     */
    iconImage?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel gift_image = 12;
     */
    giftImage?: ImageModel | undefined;
    /**
     * @generated from field: int64 recommend_gift_id = 21;
     */
    recommendGiftId: bigint;
    /**
     * @generated from field: int32 recommend_gift_count = 22;
     */
    recommendGiftCount: number;
    /**
     * @generated from field: webcast.model.message.common.Text guide_content = 23;
     */
    guideContent?: Text | undefined;
};
/**
 * Describes the message webcast.model.live.match.BattleTaskGiftAmountGuide.
 * Use `create(BattleTaskGiftAmountGuideSchema)` to create a new message.
 */
export declare const BattleTaskGiftAmountGuideSchema: GenMessage<BattleTaskGiftAmountGuide>;
/**
 * @generated from message webcast.model.live.match.BattleTeamResult
 */
export type BattleTeamResult = Message<"webcast.model.live.match.BattleTeamResult"> & {
    /**
     * @generated from field: int64 team_id = 1;
     */
    teamId: bigint;
    /**
     * @generated from field: repeated webcast.model.live.match.BattleTeamUser team_user = 2;
     */
    teamUser: BattleTeamUser[];
    /**
     * @generated from field: int32 result = 3;
     */
    result: number;
    /**
     * @generated from field: int64 total_score = 4;
     */
    totalScore: bigint;
    /**
     * @generated from field: int64 total_enigma_score = 5;
     */
    totalEnigmaScore: bigint;
    /**
     * @generated from field: int64 total_enigma_uv = 6;
     */
    totalEnigmaUv: bigint;
};
/**
 * Describes the message webcast.model.live.match.BattleTeamResult.
 * Use `create(BattleTeamResultSchema)` to create a new message.
 */
export declare const BattleTeamResultSchema: GenMessage<BattleTeamResult>;
/**
 * @generated from message webcast.model.live.match.BattleTeamUser
 */
export type BattleTeamUser = Message<"webcast.model.live.match.BattleTeamUser"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: int64 score = 2;
     */
    score: bigint;
    /**
     * @generated from field: string user_id_str = 3;
     */
    userIdStr: string;
    /**
     * @generated from field: int64 enigma_score = 4;
     */
    enigmaScore: bigint;
};
/**
 * Describes the message webcast.model.live.match.BattleTeamUser.
 * Use `create(BattleTeamUserSchema)` to create a new message.
 */
export declare const BattleTeamUserSchema: GenMessage<BattleTeamUser>;
/**
 * @generated from message webcast.model.live.match.BattleUserInfo
 */
export type BattleUserInfo = Message<"webcast.model.live.match.BattleUserInfo"> & {
    /**
     * @generated from field: webcast.model.live.match.BattleBaseUserInfo user = 1;
     */
    user?: BattleBaseUserInfo | undefined;
    /**
     * @generated from field: repeated webcast.model.live.match.BattleRivalTag tags = 2;
     */
    tags: BattleRivalTag[];
};
/**
 * Describes the message webcast.model.live.match.BattleUserInfo.
 * Use `create(BattleUserInfoSchema)` to create a new message.
 */
export declare const BattleUserInfoSchema: GenMessage<BattleUserInfo>;
/**
 * @generated from message webcast.model.live.match.BestTeammateRelation
 */
export type BestTeammateRelation = Message<"webcast.model.live.match.BestTeammateRelation"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: int64 best_teammate_id = 2;
     */
    bestTeammateId: bigint;
};
/**
 * Describes the message webcast.model.live.match.BestTeammateRelation.
 * Use `create(BestTeammateRelationSchema)` to create a new message.
 */
export declare const BestTeammateRelationSchema: GenMessage<BestTeammateRelation>;
/**
 * @generated from message webcast.model.live.match.CohostContentGuideInfo
 */
export type CohostContentGuideInfo = Message<"webcast.model.live.match.CohostContentGuideInfo"> & {
    /**
     * @generated from field: int32 recommended_battle_type = 1;
     */
    recommendedBattleType: number;
};
/**
 * Describes the message webcast.model.live.match.CohostContentGuideInfo.
 * Use `create(CohostContentGuideInfoSchema)` to create a new message.
 */
export declare const CohostContentGuideInfoSchema: GenMessage<CohostContentGuideInfo>;
/**
 * @generated from message webcast.model.live.match.CommonCardInfo
 */
export type CommonCardInfo = Message<"webcast.model.live.match.CommonCardInfo"> & {
    /**
     * @generated from field: string card_name_key = 1;
     */
    cardNameKey: string;
    /**
     * @generated from field: webcast.model.base.ImageModel card_image = 2;
     */
    cardImage?: ImageModel | undefined;
    /**
     * @generated from field: int64 send_time_sec = 3;
     */
    sendTimeSec: bigint;
    /**
     * @generated from field: webcast.model.live.match.BattleUserInfo send_user = 4;
     */
    sendUser?: BattleUserInfo | undefined;
    /**
     * @generated from field: int64 effect_last_duration = 5;
     */
    effectLastDuration: bigint;
    /**
     * @generated from field: string rule_url = 6;
     */
    ruleUrl: string;
    /**
     * @generated from field: int64 effect_time_sec = 7;
     */
    effectTimeSec: bigint;
    /**
     * @generated from field: int64 to_anchor_id = 8;
     */
    toAnchorId: bigint;
    /**
     * @generated from field: string to_anchor_id_str = 9;
     */
    toAnchorIdStr: string;
};
/**
 * Describes the message webcast.model.live.match.CommonCardInfo.
 * Use `create(CommonCardInfoSchema)` to create a new message.
 */
export declare const CommonCardInfoSchema: GenMessage<CommonCardInfo>;
/**
 * @generated from message webcast.model.live.match.CommunityActiveDecoration
 */
export type CommunityActiveDecoration = Message<"webcast.model.live.match.CommunityActiveDecoration"> & {
    /**
     * @generated from field: int64 decoration_id = 1;
     */
    decorationId: bigint;
    /**
     * @generated from field: int32 slot_type = 2;
     */
    slotType: number;
    /**
     * @generated from field: map<int32, webcast.model.base.ImageModel> images = 3;
     */
    images: {
        [key: number]: ImageModel;
    };
};
/**
 * Describes the message webcast.model.live.match.CommunityActiveDecoration.
 * Use `create(CommunityActiveDecorationSchema)` to create a new message.
 */
export declare const CommunityActiveDecorationSchema: GenMessage<CommunityActiveDecoration>;
/**
 * @generated from message webcast.model.live.match.CommunityHeartMeInfo
 */
export type CommunityHeartMeInfo = Message<"webcast.model.live.match.CommunityHeartMeInfo"> & {
    /**
     * @generated from field: map<int32, webcast.model.live.match.CommunityActiveDecoration> slots = 1;
     */
    slots: {
        [key: number]: CommunityActiveDecoration;
    };
    /**
     * @generated from field: webcast.model.base.ImageModel thrown_item_image = 2;
     */
    thrownItemImage?: ImageModel | undefined;
    /**
     * @generated from field: int64 anchor_community_level = 3;
     */
    anchorCommunityLevel: bigint;
};
/**
 * Describes the message webcast.model.live.match.CommunityHeartMeInfo.
 * Use `create(CommunityHeartMeInfoSchema)` to create a new message.
 */
export declare const CommunityHeartMeInfoSchema: GenMessage<CommunityHeartMeInfo>;
/**
 * @generated from message webcast.model.live.match.CriticalStrikeCardInfo
 */
export type CriticalStrikeCardInfo = Message<"webcast.model.live.match.CriticalStrikeCardInfo"> & {
    /**
     * @generated from field: string card_name_key = 1;
     */
    cardNameKey: string;
    /**
     * @generated from field: webcast.model.base.ImageModel card_image = 2;
     */
    cardImage?: ImageModel | undefined;
    /**
     * @generated from field: int64 send_time_sec = 3;
     */
    sendTimeSec: bigint;
    /**
     * @generated from field: webcast.model.live.match.BattleUserInfo send_user = 4;
     */
    sendUser?: BattleUserInfo | undefined;
    /**
     * @generated from field: int64 effect_last_duration = 5;
     */
    effectLastDuration: bigint;
    /**
     * @generated from field: int64 critical_strike_rate_low = 6;
     */
    criticalStrikeRateLow: bigint;
    /**
     * @generated from field: int64 critical_strike_rate_high = 7;
     */
    criticalStrikeRateHigh: bigint;
    /**
     * @generated from field: int64 multiple = 8;
     */
    multiple: bigint;
    /**
     * @generated from field: string gift_name_key = 9;
     */
    giftNameKey: string;
    /**
     * @generated from field: string rule_url = 10;
     */
    ruleUrl: string;
    /**
     * @generated from field: int64 effect_time_sec = 11;
     */
    effectTimeSec: bigint;
    /**
     * @generated from field: int64 to_anchor_id = 12;
     */
    toAnchorId: bigint;
    /**
     * @generated from field: string to_anchor_id_str = 13;
     */
    toAnchorIdStr: string;
};
/**
 * Describes the message webcast.model.live.match.CriticalStrikeCardInfo.
 * Use `create(CriticalStrikeCardInfoSchema)` to create a new message.
 */
export declare const CriticalStrikeCardInfoSchema: GenMessage<CriticalStrikeCardInfo>;
/**
 * @generated from message webcast.model.live.match.EnigmaBattleExtraInfo
 */
export type EnigmaBattleExtraInfo = Message<"webcast.model.live.match.EnigmaBattleExtraInfo"> & {
    /**
     * @generated from field: bool has_started = 1;
     */
    hasStarted: boolean;
    /**
     * @generated from field: bool is_gift_from_enigma = 2;
     */
    isGiftFromEnigma: boolean;
};
/**
 * Describes the message webcast.model.live.match.EnigmaBattleExtraInfo.
 * Use `create(EnigmaBattleExtraInfoSchema)` to create a new message.
 */
export declare const EnigmaBattleExtraInfoSchema: GenMessage<EnigmaBattleExtraInfo>;
/**
 * @generated from message webcast.model.live.match.EnigmaBattleSetting
 */
export type EnigmaBattleSetting = Message<"webcast.model.live.match.EnigmaBattleSetting"> & {
    /**
     * @generated from field: bool is_startable = 1;
     */
    isStartable: boolean;
    /**
     * @generated from field: int64 enigma_battle_campaign_start = 2;
     */
    enigmaBattleCampaignStart: bigint;
    /**
     * @generated from field: int64 enigma_battle_campaign_end = 3;
     */
    enigmaBattleCampaignEnd: bigint;
    /**
     * @generated from field: repeated int64 enigma_score_reveal_countdown_sec = 4;
     */
    enigmaScoreRevealCountdownSec: bigint[];
    /**
     * @generated from field: int64 enigma_score_reveal_duration_sec = 5;
     */
    enigmaScoreRevealDurationSec: bigint;
};
/**
 * Describes the message webcast.model.live.match.EnigmaBattleSetting.
 * Use `create(EnigmaBattleSettingSchema)` to create a new message.
 */
export declare const EnigmaBattleSettingSchema: GenMessage<EnigmaBattleSetting>;
/**
 * @generated from message webcast.model.live.match.ExtraTimeCardInfo
 */
export type ExtraTimeCardInfo = Message<"webcast.model.live.match.ExtraTimeCardInfo"> & {
    /**
     * @generated from field: string card_name_key = 1;
     */
    cardNameKey: string;
    /**
     * @generated from field: webcast.model.base.ImageModel card_image = 2;
     */
    cardImage?: ImageModel | undefined;
    /**
     * @generated from field: int64 send_time_sec = 3;
     */
    sendTimeSec: bigint;
    /**
     * @generated from field: webcast.model.live.match.BattleUserInfo send_user = 4;
     */
    sendUser?: BattleUserInfo | undefined;
    /**
     * @generated from field: int64 effect_last_duration = 5;
     */
    effectLastDuration: bigint;
    /**
     * @generated from field: string rule_url = 6;
     */
    ruleUrl: string;
    /**
     * @generated from field: int64 effect_time_sec = 7;
     */
    effectTimeSec: bigint;
    /**
     * @generated from field: int64 to_anchor_id = 8;
     */
    toAnchorId: bigint;
    /**
     * @generated from field: int64 extra_duration_sec = 9;
     */
    extraDurationSec: bigint;
    /**
     * @generated from field: string to_anchor_id_str = 10;
     */
    toAnchorIdStr: string;
};
/**
 * Describes the message webcast.model.live.match.ExtraTimeCardInfo.
 * Use `create(ExtraTimeCardInfoSchema)` to create a new message.
 */
export declare const ExtraTimeCardInfoSchema: GenMessage<ExtraTimeCardInfo>;
/**
 * @generated from message webcast.model.live.match.GiftModeMeta
 */
export type GiftModeMeta = Message<"webcast.model.live.match.GiftModeMeta"> & {
    /**
     * @generated from field: int64 gift_id = 1;
     */
    giftId: bigint;
    /**
     * @generated from field: string gift_name_key = 2;
     */
    giftNameKey: string;
    /**
     * @generated from field: webcast.model.base.ImageModel gift_icon_image = 3;
     */
    giftIconImage?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text gift_mode_desc = 4;
     */
    giftModeDesc?: Text | undefined;
};
/**
 * Describes the message webcast.model.live.match.GiftModeMeta.
 * Use `create(GiftModeMetaSchema)` to create a new message.
 */
export declare const GiftModeMetaSchema: GenMessage<GiftModeMeta>;
/**
 * @generated from message webcast.model.live.match.GiftModeMetaList
 */
export type GiftModeMetaList = Message<"webcast.model.live.match.GiftModeMetaList"> & {
    /**
     * @generated from field: repeated webcast.model.live.match.GiftModeMeta gift_mode_meta = 1;
     */
    giftModeMeta: GiftModeMeta[];
};
/**
 * Describes the message webcast.model.live.match.GiftModeMetaList.
 * Use `create(GiftModeMetaListSchema)` to create a new message.
 */
export declare const GiftModeMetaListSchema: GenMessage<GiftModeMetaList>;
/**
 * @generated from message webcast.model.live.match.GiftModeMetaV2
 */
export type GiftModeMetaV2 = Message<"webcast.model.live.match.GiftModeMetaV2"> & {
    /**
     * @generated from field: map<int64, webcast.model.live.match.AnchorGiftModeMetaMap> anchor_gift_mode_meta_by_type = 1;
     */
    anchorGiftModeMetaByType: {
        [key: string]: AnchorGiftModeMetaMap;
    };
};
/**
 * Describes the message webcast.model.live.match.GiftModeMetaV2.
 * Use `create(GiftModeMetaV2Schema)` to create a new message.
 */
export declare const GiftModeMetaV2Schema: GenMessage<GiftModeMetaV2>;
/**
 * @generated from message webcast.model.live.match.HighScoreControlCfg
 */
export type HighScoreControlCfg = Message<"webcast.model.live.match.HighScoreControlCfg"> & {
    /**
     * @generated from field: bool normal_control_applied = 1;
     */
    normalControlApplied: boolean;
    /**
     * @generated from field: int64 threshold = 2;
     */
    threshold: bigint;
    /**
     * @generated from field: repeated int64 origin_display_to_user_list = 3;
     */
    originDisplayToUserList: bigint[];
};
/**
 * Describes the message webcast.model.live.match.HighScoreControlCfg.
 * Use `create(HighScoreControlCfgSchema)` to create a new message.
 */
export declare const HighScoreControlCfgSchema: GenMessage<HighScoreControlCfg>;
/**
 * @generated from message webcast.model.live.match.LeagueScoreInfo
 */
export type LeagueScoreInfo = Message<"webcast.model.live.match.LeagueScoreInfo"> & {
    /**
     * @generated from field: int64 estimated_score = 1;
     */
    estimatedScore: bigint;
    /**
     * @generated from field: bool is_opt_out = 2;
     */
    isOptOut: boolean;
    /**
     * @generated from field: bool is_activity_period = 3;
     */
    isActivityPeriod: boolean;
    /**
     * @generated from field: webcast.model.message.common.Text content_text = 4;
     */
    contentText?: Text | undefined;
    /**
     * @generated from field: bool class_opt_out = 5;
     */
    classOptOut: boolean;
    /**
     * @generated from field: webcast.model.message.common.Text content_text_open = 6;
     */
    contentTextOpen?: Text | undefined;
    /**
     * @generated from field: int32 match_theme = 7;
     */
    matchTheme: number;
    /**
     * @generated from field: webcast.model.base.ImageModel left_icon = 8;
     */
    leftIcon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel right_icon = 9;
     */
    rightIcon?: ImageModel | undefined;
    /**
     * @generated from field: string right_schema_jump_link = 10;
     */
    rightSchemaJumpLink: string;
};
/**
 * Describes the message webcast.model.live.match.LeagueScoreInfo.
 * Use `create(LeagueScoreInfoSchema)` to create a new message.
 */
export declare const LeagueScoreInfoSchema: GenMessage<LeagueScoreInfo>;
/**
 * @generated from message webcast.model.live.match.MatchInvitePanelConfig
 */
export type MatchInvitePanelConfig = Message<"webcast.model.live.match.MatchInvitePanelConfig"> & {
    /**
     * @generated from field: webcast.model.message.common.Text header_text = 1;
     */
    headerText?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text header_text_dark_mode = 2;
     */
    headerTextDarkMode?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text desc_text = 3;
     */
    descText?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text desc_text_dark_mode = 4;
     */
    descTextDarkMode?: Text | undefined;
};
/**
 * Describes the message webcast.model.live.match.MatchInvitePanelConfig.
 * Use `create(MatchInvitePanelConfigSchema)` to create a new message.
 */
export declare const MatchInvitePanelConfigSchema: GenMessage<MatchInvitePanelConfig>;
/**
 * @generated from message webcast.model.live.match.MatchOpeningAnimationConfig
 */
export type MatchOpeningAnimationConfig = Message<"webcast.model.live.match.MatchOpeningAnimationConfig"> & {
    /**
     * @generated from field: string start_animation_rule = 1;
     */
    startAnimationRule: string;
};
/**
 * Describes the message webcast.model.live.match.MatchOpeningAnimationConfig.
 * Use `create(MatchOpeningAnimationConfigSchema)` to create a new message.
 */
export declare const MatchOpeningAnimationConfigSchema: GenMessage<MatchOpeningAnimationConfig>;
/**
 * @generated from message webcast.model.live.match.MatchPunishEffectInfo
 */
export type MatchPunishEffectInfo = Message<"webcast.model.live.match.MatchPunishEffectInfo"> & {
    /**
     * @generated from field: map<int64, int64> user_to_effect_map = 1;
     */
    userToEffectMap: {
        [key: string]: bigint;
    };
    /**
     * @generated from field: map<int64, webcast.model.data.EffectStruct> effect_to_effect_struct_map = 2;
     */
    effectToEffectStructMap: {
        [key: string]: EffectStruct;
    };
};
/**
 * Describes the message webcast.model.live.match.MatchPunishEffectInfo.
 * Use `create(MatchPunishEffectInfoSchema)` to create a new message.
 */
export declare const MatchPunishEffectInfoSchema: GenMessage<MatchPunishEffectInfo>;
/**
 * @generated from message webcast.model.live.match.MatchPunishExtraInfo
 */
export type MatchPunishExtraInfo = Message<"webcast.model.live.match.MatchPunishExtraInfo"> & {
    /**
     * @generated from field: webcast.model.live.match.MatchPunishEffectInfo match_punish_effect_info = 1;
     */
    matchPunishEffectInfo?: MatchPunishEffectInfo | undefined;
    /**
     * @generated from field: webcast.model.live.match.CohostContentGuideInfo cohost_content_guide_info = 2;
     */
    cohostContentGuideInfo?: CohostContentGuideInfo | undefined;
    /**
     * @generated from field: webcast.model.live.match.RecommendedPlaybookInfo recommended_playbook_info = 3;
     */
    recommendedPlaybookInfo?: RecommendedPlaybookInfo | undefined;
};
/**
 * Describes the message webcast.model.live.match.MatchPunishExtraInfo.
 * Use `create(MatchPunishExtraInfoSchema)` to create a new message.
 */
export declare const MatchPunishExtraInfoSchema: GenMessage<MatchPunishExtraInfo>;
/**
 * @generated from message webcast.model.live.match.MatchThemeDisplayResource
 */
export type MatchThemeDisplayResource = Message<"webcast.model.live.match.MatchThemeDisplayResource"> & {
    /**
     * @generated from field: int32 match_theme = 1;
     */
    matchTheme: number;
    /**
     * @generated from field: webcast.model.live.match.MatchOpeningAnimationConfig match_opening_animation_config = 2;
     */
    matchOpeningAnimationConfig?: MatchOpeningAnimationConfig | undefined;
    /**
     * @generated from field: webcast.model.live.match.MatchTitleBarConfig match_title_bar_config = 3;
     */
    matchTitleBarConfig?: MatchTitleBarConfig | undefined;
    /**
     * @generated from field: webcast.model.live.match.MatchInvitePanelConfig match_invite_panel_config = 4;
     */
    matchInvitePanelConfig?: MatchInvitePanelConfig | undefined;
};
/**
 * Describes the message webcast.model.live.match.MatchThemeDisplayResource.
 * Use `create(MatchThemeDisplayResourceSchema)` to create a new message.
 */
export declare const MatchThemeDisplayResourceSchema: GenMessage<MatchThemeDisplayResource>;
/**
 * @generated from message webcast.model.live.match.MatchTitleBarConfig
 */
export type MatchTitleBarConfig = Message<"webcast.model.live.match.MatchTitleBarConfig"> & {
    /**
     * @generated from field: repeated webcast.model.live.match.MatchTitleBarDisplayRule display_rules = 1;
     */
    displayRules: MatchTitleBarDisplayRule[];
};
/**
 * Describes the message webcast.model.live.match.MatchTitleBarConfig.
 * Use `create(MatchTitleBarConfigSchema)` to create a new message.
 */
export declare const MatchTitleBarConfigSchema: GenMessage<MatchTitleBarConfig>;
/**
 * @generated from message webcast.model.live.match.MatchTitleBarDisplayRule
 */
export type MatchTitleBarDisplayRule = Message<"webcast.model.live.match.MatchTitleBarDisplayRule"> & {
    /**
     * @generated from field: webcast.model.live.match.MatchTitleBarTrigger trigger = 1;
     */
    trigger?: MatchTitleBarTrigger | undefined;
    /**
     * @generated from field: webcast.model.live.match.TitleBarDisplayResource display_resource = 2;
     */
    displayResource?: TitleBarDisplayResource | undefined;
};
/**
 * Describes the message webcast.model.live.match.MatchTitleBarDisplayRule.
 * Use `create(MatchTitleBarDisplayRuleSchema)` to create a new message.
 */
export declare const MatchTitleBarDisplayRuleSchema: GenMessage<MatchTitleBarDisplayRule>;
/**
 * @generated from message webcast.model.live.match.MatchTitleBarTrigger
 */
export type MatchTitleBarTrigger = Message<"webcast.model.live.match.MatchTitleBarTrigger"> & {
    /**
     * @generated from field: int32 type = 1;
     */
    type: number;
};
/**
 * Describes the message webcast.model.live.match.MatchTitleBarTrigger.
 * Use `create(MatchTitleBarTriggerSchema)` to create a new message.
 */
export declare const MatchTitleBarTriggerSchema: GenMessage<MatchTitleBarTrigger>;
/**
 * @generated from message webcast.model.live.match.PlaybookBizExtra
 */
export type PlaybookBizExtra = Message<"webcast.model.live.match.PlaybookBizExtra"> & {
    /**
     * @generated from field: map<string, string> custom_atomic_capabilities = 1;
     */
    customAtomicCapabilities: {
        [key: string]: string;
    };
};
/**
 * Describes the message webcast.model.live.match.PlaybookBizExtra.
 * Use `create(PlaybookBizExtraSchema)` to create a new message.
 */
export declare const PlaybookBizExtraSchema: GenMessage<PlaybookBizExtra>;
/**
 * @generated from message webcast.model.live.match.PotionCardInfo
 */
export type PotionCardInfo = Message<"webcast.model.live.match.PotionCardInfo"> & {
    /**
     * @generated from field: string card_name_key = 1;
     */
    cardNameKey: string;
    /**
     * @generated from field: webcast.model.base.ImageModel card_image = 2;
     */
    cardImage?: ImageModel | undefined;
    /**
     * @generated from field: int64 send_time_sec = 3;
     */
    sendTimeSec: bigint;
    /**
     * @generated from field: webcast.model.live.match.BattleUserInfo send_user = 4;
     */
    sendUser?: BattleUserInfo | undefined;
    /**
     * @generated from field: int64 effect_last_duration = 5;
     */
    effectLastDuration: bigint;
    /**
     * @generated from field: string rule_url = 6;
     */
    ruleUrl: string;
    /**
     * @generated from field: int64 effect_time_sec = 7;
     */
    effectTimeSec: bigint;
    /**
     * @generated from field: int64 to_anchor_id = 8;
     */
    toAnchorId: bigint;
};
/**
 * Describes the message webcast.model.live.match.PotionCardInfo.
 * Use `create(PotionCardInfoSchema)` to create a new message.
 */
export declare const PotionCardInfoSchema: GenMessage<PotionCardInfo>;
/**
 * @generated from message webcast.model.live.match.PreviewPeriod
 */
export type PreviewPeriod = Message<"webcast.model.live.match.PreviewPeriod"> & {
    /**
     * @generated from field: int64 duration = 1;
     */
    duration: bigint;
    /**
     * @generated from field: webcast.model.live.match.BattlePrompt prompt = 2;
     */
    prompt?: BattlePrompt | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel icon_image = 25;
     */
    iconImage?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.live.match.PreviewPeriod.
 * Use `create(PreviewPeriodSchema)` to create a new message.
 */
export declare const PreviewPeriodSchema: GenMessage<PreviewPeriod>;
/**
 * @generated from message webcast.model.live.match.RecommendedPlaybookInfo
 */
export type RecommendedPlaybookInfo = Message<"webcast.model.live.match.RecommendedPlaybookInfo"> & {
    /**
     * @generated from field: repeated int64 playbook_ids = 1;
     */
    playbookIds: bigint[];
    /**
     * @generated from field: map<int64, webcast.model.live.match.PlaybookBizExtra> playbook_biz_extras = 2;
     */
    playbookBizExtras: {
        [key: string]: PlaybookBizExtra;
    };
};
/**
 * Describes the message webcast.model.live.match.RecommendedPlaybookInfo.
 * Use `create(RecommendedPlaybookInfoSchema)` to create a new message.
 */
export declare const RecommendedPlaybookInfoSchema: GenMessage<RecommendedPlaybookInfo>;
/**
 * @generated from message webcast.model.live.match.RewardPeriodConfig
 */
export type RewardPeriodConfig = Message<"webcast.model.live.match.RewardPeriodConfig"> & {
    /**
     * @generated from field: int64 reward_start_time = 1;
     */
    rewardStartTime: bigint;
    /**
     * @generated from field: int64 duration = 2;
     */
    duration: bigint;
    /**
     * @generated from field: int32 reward_multiple = 3;
     */
    rewardMultiple: number;
    /**
     * @generated from field: int64 reward_start_timestamp = 4;
     */
    rewardStartTimestamp: bigint;
    /**
     * @generated from field: webcast.model.live.match.BattlePrompt reward_prepare_prompt = 11;
     */
    rewardPreparePrompt?: BattlePrompt | undefined;
    /**
     * @generated from field: webcast.model.live.match.BattlePrompt rewarding_prompt = 12;
     */
    rewardingPrompt?: BattlePrompt | undefined;
    /**
     * @generated from field: webcast.model.live.match.BattlePrompt click_prompt = 13;
     */
    clickPrompt?: BattlePrompt | undefined;
};
/**
 * Describes the message webcast.model.live.match.RewardPeriodConfig.
 * Use `create(RewardPeriodConfigSchema)` to create a new message.
 */
export declare const RewardPeriodConfigSchema: GenMessage<RewardPeriodConfig>;
/**
 * @generated from message webcast.model.live.match.SmokeCardInfo
 */
export type SmokeCardInfo = Message<"webcast.model.live.match.SmokeCardInfo"> & {
    /**
     * @generated from field: string card_name_key = 1;
     */
    cardNameKey: string;
    /**
     * @generated from field: webcast.model.base.ImageModel card_image = 2;
     */
    cardImage?: ImageModel | undefined;
    /**
     * @generated from field: int64 send_time_sec = 3;
     */
    sendTimeSec: bigint;
    /**
     * @generated from field: webcast.model.live.match.BattleUserInfo send_user = 4;
     */
    sendUser?: BattleUserInfo | undefined;
    /**
     * @generated from field: int64 effect_last_duration = 5;
     */
    effectLastDuration: bigint;
    /**
     * @generated from field: string rule_url = 6;
     */
    ruleUrl: string;
    /**
     * @generated from field: int64 effect_time_sec = 7;
     */
    effectTimeSec: bigint;
    /**
     * @generated from field: int64 to_anchor_id = 12;
     */
    toAnchorId: bigint;
    /**
     * @generated from field: string to_anchor_id_str = 13;
     */
    toAnchorIdStr: string;
};
/**
 * Describes the message webcast.model.live.match.SmokeCardInfo.
 * Use `create(SmokeCardInfoSchema)` to create a new message.
 */
export declare const SmokeCardInfoSchema: GenMessage<SmokeCardInfo>;
/**
 * @generated from message webcast.model.live.match.SpecialEffectCardInfo
 */
export type SpecialEffectCardInfo = Message<"webcast.model.live.match.SpecialEffectCardInfo"> & {
    /**
     * @generated from field: string card_name_key = 1;
     */
    cardNameKey: string;
    /**
     * @generated from field: webcast.model.base.ImageModel card_image = 2;
     */
    cardImage?: ImageModel | undefined;
    /**
     * @generated from field: int64 send_time_sec = 3;
     */
    sendTimeSec: bigint;
    /**
     * @generated from field: webcast.model.live.match.BattleUserInfo send_user = 4;
     */
    sendUser?: BattleUserInfo | undefined;
    /**
     * @generated from field: int64 effect_last_duration = 5;
     */
    effectLastDuration: bigint;
    /**
     * @generated from field: string rule_url = 6;
     */
    ruleUrl: string;
    /**
     * @generated from field: int64 effect_time_sec = 7;
     */
    effectTimeSec: bigint;
    /**
     * @generated from field: int64 to_anchor_id = 8;
     */
    toAnchorId: bigint;
    /**
     * @generated from field: string to_anchor_id_str = 9;
     */
    toAnchorIdStr: string;
};
/**
 * Describes the message webcast.model.live.match.SpecialEffectCardInfo.
 * Use `create(SpecialEffectCardInfoSchema)` to create a new message.
 */
export declare const SpecialEffectCardInfoSchema: GenMessage<SpecialEffectCardInfo>;
/**
 * @generated from message webcast.model.live.match.TaskPeriodConfig
 */
export type TaskPeriodConfig = Message<"webcast.model.live.match.TaskPeriodConfig"> & {
    /**
     * @generated from field: int64 target_start_time = 1;
     */
    targetStartTime: bigint;
    /**
     * @generated from field: int64 duration = 2;
     */
    duration: bigint;
    /**
     * @generated from field: int64 target_start_timestamp = 3;
     */
    targetStartTimestamp: bigint;
    /**
     * @generated from field: int32 click_action = 11;
     */
    clickAction: number;
    /**
     * @generated from field: webcast.model.live.match.BattlePrompt click_prompt = 12;
     */
    clickPrompt?: BattlePrompt | undefined;
    /**
     * @generated from field: int32 prompt_type = 21;
     */
    promptType: number;
    /**
     * @generated from field: webcast.model.live.match.BattlePrompt static_prompt = 22;
     */
    staticPrompt?: BattlePrompt | undefined;
    /**
     * @generated from field: int64 progress_target = 23;
     */
    progressTarget: bigint;
    /**
     * @generated from field: int32 target_type = 24;
     */
    targetType: number;
    /**
     * @generated from field: webcast.model.base.ImageModel icon_image = 25;
     */
    iconImage?: ImageModel | undefined;
    /**
     * @generated from field: string click_action_schema_url = 26;
     */
    clickActionSchemaUrl: string;
};
/**
 * Describes the message webcast.model.live.match.TaskPeriodConfig.
 * Use `create(TaskPeriodConfigSchema)` to create a new message.
 */
export declare const TaskPeriodConfigSchema: GenMessage<TaskPeriodConfig>;
/**
 * @generated from message webcast.model.live.match.TeamMatchCampaign
 */
export type TeamMatchCampaign = Message<"webcast.model.live.match.TeamMatchCampaign"> & {
    /**
     * @generated from field: repeated webcast.model.live.match.BestTeammateRelation best_teammate_relation = 1;
     */
    bestTeammateRelation: BestTeammateRelation[];
    /**
     * @generated from field: repeated int64 start_sfx_team_id = 2;
     */
    startSfxTeamId: bigint[];
    /**
     * @generated from field: bool has_team_match_mvp_sfx = 3;
     */
    hasTeamMatchMvpSfx: boolean;
};
/**
 * Describes the message webcast.model.live.match.TeamMatchCampaign.
 * Use `create(TeamMatchCampaignSchema)` to create a new message.
 */
export declare const TeamMatchCampaignSchema: GenMessage<TeamMatchCampaign>;
/**
 * @generated from message webcast.model.live.match.TitleBarDisplayResource
 */
export type TitleBarDisplayResource = Message<"webcast.model.live.match.TitleBarDisplayResource"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel left_icon = 1;
     */
    leftIcon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text content_text = 2;
     */
    contentText?: Text | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel right_icon = 3;
     */
    rightIcon?: ImageModel | undefined;
    /**
     * @generated from field: string right_icon_schema_url = 4;
     */
    rightIconSchemaUrl: string;
    /**
     * @generated from field: int64 duration_ms = 5;
     */
    durationMs: bigint;
};
/**
 * Describes the message webcast.model.live.match.TitleBarDisplayResource.
 * Use `create(TitleBarDisplayResourceSchema)` to create a new message.
 */
export declare const TitleBarDisplayResourceSchema: GenMessage<TitleBarDisplayResource>;
/**
 * @generated from message webcast.model.live.match.Top2CardInfo
 */
export type Top2CardInfo = Message<"webcast.model.live.match.Top2CardInfo"> & {
    /**
     * @generated from field: webcast.model.live.match.CommonCardInfo common = 1;
     */
    common?: CommonCardInfo | undefined;
};
/**
 * Describes the message webcast.model.live.match.Top2CardInfo.
 * Use `create(Top2CardInfoSchema)` to create a new message.
 */
export declare const Top2CardInfoSchema: GenMessage<Top2CardInfo>;
/**
 * @generated from message webcast.model.live.match.Top3CardInfo
 */
export type Top3CardInfo = Message<"webcast.model.live.match.Top3CardInfo"> & {
    /**
     * @generated from field: webcast.model.live.match.CommonCardInfo common = 1;
     */
    common?: CommonCardInfo | undefined;
};
/**
 * Describes the message webcast.model.live.match.Top3CardInfo.
 * Use `create(Top3CardInfoSchema)` to create a new message.
 */
export declare const Top3CardInfoSchema: GenMessage<Top3CardInfo>;
/**
 * @generated from message webcast.model.live.match.VaultGloveCardInfo
 */
export type VaultGloveCardInfo = Message<"webcast.model.live.match.VaultGloveCardInfo"> & {
    /**
     * @generated from field: webcast.model.live.match.CommonCardInfo common = 1;
     */
    common?: CommonCardInfo | undefined;
    /**
     * @generated from field: string gift_name_key = 2;
     */
    giftNameKey: string;
    /**
     * @generated from field: int64 multiple = 3;
     */
    multiple: bigint;
    /**
     * @generated from field: int64 multiple_other = 4;
     */
    multipleOther: bigint;
    /**
     * @generated from field: int64 critical_strike_rate_low = 5;
     */
    criticalStrikeRateLow: bigint;
    /**
     * @generated from field: int64 critical_strike_rate_high = 6;
     */
    criticalStrikeRateHigh: bigint;
};
/**
 * Describes the message webcast.model.live.match.VaultGloveCardInfo.
 * Use `create(VaultGloveCardInfoSchema)` to create a new message.
 */
export declare const VaultGloveCardInfoSchema: GenMessage<VaultGloveCardInfo>;
/**
 * @generated from message webcast.model.live.match.WaveCardInfo
 */
export type WaveCardInfo = Message<"webcast.model.live.match.WaveCardInfo"> & {
    /**
     * @generated from field: string card_name_key = 1;
     */
    cardNameKey: string;
    /**
     * @generated from field: webcast.model.base.ImageModel card_image = 2;
     */
    cardImage?: ImageModel | undefined;
    /**
     * @generated from field: int64 send_time_sec = 3;
     */
    sendTimeSec: bigint;
    /**
     * @generated from field: webcast.model.live.match.BattleUserInfo send_user = 4;
     */
    sendUser?: BattleUserInfo | undefined;
    /**
     * @generated from field: int64 effect_last_duration = 5;
     */
    effectLastDuration: bigint;
    /**
     * @generated from field: string rule_url = 6;
     */
    ruleUrl: string;
    /**
     * @generated from field: int64 effect_time_sec = 7;
     */
    effectTimeSec: bigint;
    /**
     * @generated from field: int64 to_anchor_id = 8;
     */
    toAnchorId: bigint;
};
/**
 * Describes the message webcast.model.live.match.WaveCardInfo.
 * Use `create(WaveCardInfoSchema)` to create a new message.
 */
export declare const WaveCardInfoSchema: GenMessage<WaveCardInfo>;
//# sourceMappingURL=live_match_pb.d.ts.map