import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { BattleRewardSettle_RewardStatus, BattleTaskSettle_Result } from "../../im_pb.js";
import type { ImageModel } from "../base/messages_pb.js";
import type { BattleInviteType, BattleResult_Result, BattleScene, BattleSettings_BattleStatus, BattleType, IceShowdownSetting, MatchGameplayOption } from "../data/messages_pb.js";
import type { BattleBonusConfig, BattlePrompt, BattleUserInfo, GiftModeMeta, GiftModeMetaV2 } from "../live_match_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/battle.proto.
 */
export declare const file_webcast_model_message_battle: GenFile;
/**
 * @generated from message webcast.model.message.battle.BattleDisplayConfig
 */
export type BattleDisplayConfig = Message<"webcast.model.message.battle.BattleDisplayConfig"> & {
    /**
     * @generated from field: int32 threshold = 1;
     */
    threshold: number;
    /**
     * @generated from field: string text = 2;
     */
    text: string;
    /**
     * @generated from field: int32 diff_threshold = 3;
     */
    diffThreshold: number;
    /**
     * @generated from field: string diff_text = 4;
     */
    diffText: string;
    /**
     * @generated from field: webcast.model.message.battle.ExemptStrategy exempt_strategy = 5;
     */
    exemptStrategy?: ExemptStrategy | undefined;
};
/**
 * Describes the message webcast.model.message.battle.BattleDisplayConfig.
 * Use `create(BattleDisplayConfigSchema)` to create a new message.
 */
export declare const BattleDisplayConfigSchema: GenMessage<BattleDisplayConfig>;
/**
 * @generated from message webcast.model.message.battle.BattleResult
 */
export type BattleResult = Message<"webcast.model.message.battle.BattleResult"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: webcast.model.data.BattleResult_Result result = 2;
     */
    result: BattleResult_Result;
    /**
     * @generated from field: int64 score = 3;
     */
    score: bigint;
    /**
     * @generated from field: int64 diamond_score = 4;
     */
    diamondScore: bigint;
    /**
     * @generated from field: int64 enigma_score = 5;
     */
    enigmaScore: bigint;
    /**
     * @generated from field: int64 enigma_uv = 6;
     */
    enigmaUv: bigint;
};
/**
 * Describes the message webcast.model.message.battle.BattleResult.
 * Use `create(BattleResultSchema)` to create a new message.
 */
export declare const BattleResultSchema: GenMessage<BattleResult>;
/**
 * @generated from message webcast.model.message.battle.BattleRewardSettle
 */
export type BattleRewardSettle = Message<"webcast.model.message.battle.BattleRewardSettle"> & {
    /**
     * @generated from field: webcast.model.live.match.BattlePrompt prompt = 1;
     */
    prompt?: BattlePrompt | undefined;
    /**
     * @generated from field: webcast.im.BattleRewardSettle_RewardStatus status = 2;
     */
    status: BattleRewardSettle_RewardStatus;
};
/**
 * Describes the message webcast.model.message.battle.BattleRewardSettle.
 * Use `create(BattleRewardSettleSchema)` to create a new message.
 */
export declare const BattleRewardSettleSchema: GenMessage<BattleRewardSettle>;
/**
 * @generated from message webcast.model.message.battle.BattleSetting
 */
export type BattleSetting = Message<"webcast.model.message.battle.BattleSetting"> & {
    /**
     * @generated from field: int64 battle_id = 1;
     */
    battleId: bigint;
    /**
     * @generated from field: int64 start_time_ms = 2;
     */
    startTimeMs: bigint;
    /**
     * @generated from field: int32 duration = 3;
     */
    duration: number;
    /**
     * @generated from field: int64 channel_id = 4;
     */
    channelId: bigint;
    /**
     * @generated from field: webcast.model.data.BattleSettings_BattleStatus status = 5;
     */
    status: BattleSettings_BattleStatus;
    /**
     * @generated from field: webcast.model.data.BattleInviteType invite_type = 6;
     */
    inviteType: BattleInviteType;
    /**
     * @generated from field: webcast.model.live.match.GiftModeMeta gift_mode_meta = 7;
     */
    giftModeMeta?: GiftModeMeta | undefined;
    /**
     * @generated from field: webcast.model.data.BattleType battle_type = 8;
     */
    battleType: BattleType;
    /**
     * @generated from field: int64 extra_duration_second = 9;
     */
    extraDurationSecond: bigint;
    /**
     * @generated from field: int64 end_time_ms = 10;
     */
    endTimeMs: bigint;
    /**
     * @generated from field: webcast.model.data.BattleScene scene = 11;
     */
    scene: BattleScene;
    /**
     * @generated from field: int64 source_type = 12;
     */
    sourceType: bigint;
    /**
     * @generated from field: webcast.model.data.IceShowdownSetting ice_showdown_setting = 13;
     */
    iceShowdownSetting: IceShowdownSetting;
    /**
     * @generated from field: webcast.model.data.MatchGameplayOption gameplay_option = 14;
     */
    gameplayOption: MatchGameplayOption;
    /**
     * @generated from field: webcast.model.live.match.GiftModeMetaV2 gift_mode_meta_v2 = 15;
     */
    giftModeMetaV2?: GiftModeMetaV2 | undefined;
};
/**
 * Describes the message webcast.model.message.battle.BattleSetting.
 * Use `create(BattleSettingSchema)` to create a new message.
 */
export declare const BattleSettingSchema: GenMessage<BattleSetting>;
/**
 * @generated from message webcast.model.message.battle.BattleTaskSettle
 */
export type BattleTaskSettle = Message<"webcast.model.message.battle.BattleTaskSettle"> & {
    /**
     * @generated from field: webcast.im.BattleTaskSettle_Result result = 1;
     */
    result: BattleTaskSettle_Result;
    /**
     * @generated from field: int64 reward_start_time = 2;
     */
    rewardStartTime: bigint;
    /**
     * @generated from field: int64 reward_start_timestamp = 3;
     */
    rewardStartTimestamp: bigint;
};
/**
 * Describes the message webcast.model.message.battle.BattleTaskSettle.
 * Use `create(BattleTaskSettleSchema)` to create a new message.
 */
export declare const BattleTaskSettleSchema: GenMessage<BattleTaskSettle>;
/**
 * @generated from message webcast.model.message.battle.BattleTaskStart
 */
export type BattleTaskStart = Message<"webcast.model.message.battle.BattleTaskStart"> & {
    /**
     * @generated from field: webcast.model.live.match.BattleBonusConfig config = 1;
     */
    config?: BattleBonusConfig | undefined;
};
/**
 * Describes the message webcast.model.message.battle.BattleTaskStart.
 * Use `create(BattleTaskStartSchema)` to create a new message.
 */
export declare const BattleTaskStartSchema: GenMessage<BattleTaskStart>;
/**
 * @generated from message webcast.model.message.battle.BattleTaskUpdate
 */
export type BattleTaskUpdate = Message<"webcast.model.message.battle.BattleTaskUpdate"> & {
    /**
     * @generated from field: int64 progress = 1;
     */
    progress: bigint;
    /**
     * @generated from field: int64 from_user_id = 2;
     */
    fromUserId: bigint;
    /**
     * @generated from field: string prompt_key = 3;
     */
    promptKey: string;
    /**
     * @generated from field: string log_id = 21;
     */
    logId: string;
};
/**
 * Describes the message webcast.model.message.battle.BattleTaskUpdate.
 * Use `create(BattleTaskUpdateSchema)` to create a new message.
 */
export declare const BattleTaskUpdateSchema: GenMessage<BattleTaskUpdate>;
/**
 * @generated from message webcast.model.message.battle.BattleUserArmies
 */
export type BattleUserArmies = Message<"webcast.model.message.battle.BattleUserArmies"> & {
    /**
     * @generated from field: repeated webcast.model.message.battle.BattleUserArmy user_armies = 1;
     */
    userArmies: BattleUserArmy[];
    /**
     * @generated from field: int64 hostscore = 2;
     */
    hostscore: bigint;
    /**
     * @generated from field: string anchor_id_str = 3;
     */
    anchorIdStr: string;
    /**
     * @generated from field: int64 host_enigma_score = 4;
     */
    hostEnigmaScore: bigint;
    /**
     * @generated from field: int64 host_enigma_uv = 5;
     */
    hostEnigmaUv: bigint;
};
/**
 * Describes the message webcast.model.message.battle.BattleUserArmies.
 * Use `create(BattleUserArmiesSchema)` to create a new message.
 */
export declare const BattleUserArmiesSchema: GenMessage<BattleUserArmies>;
/**
 * @generated from message webcast.model.message.battle.BattleUserArmy
 */
export type BattleUserArmy = Message<"webcast.model.message.battle.BattleUserArmy"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: int64 score = 2;
     */
    score: bigint;
    /**
     * @generated from field: string nickname = 3;
     */
    nickname: string;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_thumb = 4;
     */
    avatarThumb?: ImageModel | undefined;
    /**
     * @generated from field: int64 diamond_score = 5;
     */
    diamondScore: bigint;
    /**
     * @generated from field: string user_id_str = 6;
     */
    userIdStr: string;
    /**
     * @generated from field: int64 enigma_score = 7;
     */
    enigmaScore: bigint;
    /**
     * @generated from field: bool is_enigma = 8;
     */
    isEnigma: boolean;
};
/**
 * Describes the message webcast.model.message.battle.BattleUserArmy.
 * Use `create(BattleUserArmySchema)` to create a new message.
 */
export declare const BattleUserArmySchema: GenMessage<BattleUserArmy>;
/**
 * @generated from message webcast.model.message.battle.BattleUserInfoWrapper
 */
export type BattleUserInfoWrapper = Message<"webcast.model.message.battle.BattleUserInfoWrapper"> & {
    /**
     * @generated from field: int64 key = 1;
     */
    key: bigint;
    /**
     * @generated from field: webcast.model.live.match.BattleUserInfo value = 2;
     */
    value?: BattleUserInfo | undefined;
};
/**
 * Describes the message webcast.model.message.battle.BattleUserInfoWrapper.
 * Use `create(BattleUserInfoWrapperSchema)` to create a new message.
 */
export declare const BattleUserInfoWrapperSchema: GenMessage<BattleUserInfoWrapper>;
/**
 * @generated from message webcast.model.message.battle.ExemptStrategy
 */
export type ExemptStrategy = Message<"webcast.model.message.battle.ExemptStrategy"> & {
    /**
     * @generated from field: bool exempt_both_host = 1;
     */
    exemptBothHost: boolean;
    /**
     * @generated from field: int32 exempt_audience_top = 2;
     */
    exemptAudienceTop: number;
};
/**
 * Describes the message webcast.model.message.battle.ExemptStrategy.
 * Use `create(ExemptStrategySchema)` to create a new message.
 */
export declare const ExemptStrategySchema: GenMessage<ExemptStrategy>;
/**
 * @generated from message webcast.model.message.battle.SupportedActionsWrapper
 */
export type SupportedActionsWrapper = Message<"webcast.model.message.battle.SupportedActionsWrapper"> & {
    /**
     * @generated from field: int64 key = 1;
     */
    key: bigint;
    /**
     * @generated from field: bool value = 2;
     */
    value: boolean;
};
/**
 * Describes the message webcast.model.message.battle.SupportedActionsWrapper.
 * Use `create(SupportedActionsWrapperSchema)` to create a new message.
 */
export declare const SupportedActionsWrapperSchema: GenMessage<SupportedActionsWrapper>;
/**
 * @generated from message webcast.model.message.battle.UserArmiesWrapper
 */
export type UserArmiesWrapper = Message<"webcast.model.message.battle.UserArmiesWrapper"> & {
    /**
     * @generated from field: int64 key = 1;
     */
    key: bigint;
    /**
     * @generated from field: webcast.model.message.battle.BattleUserArmies value = 2;
     */
    value?: BattleUserArmies | undefined;
};
/**
 * Describes the message webcast.model.message.battle.UserArmiesWrapper.
 * Use `create(UserArmiesWrapperSchema)` to create a new message.
 */
export declare const UserArmiesWrapperSchema: GenMessage<UserArmiesWrapper>;
//# sourceMappingURL=battle_pb.d.ts.map