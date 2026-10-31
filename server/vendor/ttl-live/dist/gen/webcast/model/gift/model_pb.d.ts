import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "../base/messages_pb.js";
import type { EnigmaInfo } from "../base/user_pb.js";
import type { GiftPanelBeaconBubbleType, MatchInfo_MultiplierType } from "../data/messages_pb.js";
import type { FaceRecognitionMeta } from "./assets_face_recognition_meta_pb.js";
import type { GoalReward, GoalStats, SubGoalContribution, SubGoalPinInfo } from "../goal_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/gift/model.proto.
 */
export declare const file_webcast_model_gift_model: GenFile;
/**
 * @generated from message webcast.model.gift.model.AssetBase
 */
export type AssetBase = Message<"webcast.model.gift.model.AssetBase"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel url = 2;
     */
    url?: ImageModel | undefined;
    /**
     * @generated from field: string md5 = 3;
     */
    md5: string;
    /**
     * @generated from field: webcast.model.gift.assets.FaceRecognitionMeta face_meta = 4;
     */
    faceMeta?: FaceRecognitionMeta | undefined;
};
/**
 * Describes the message webcast.model.gift.model.AssetBase.
 * Use `create(AssetBaseSchema)` to create a new message.
 */
export declare const AssetBaseSchema: GenMessage<AssetBase>;
/**
 * @generated from message webcast.model.gift.model.AssetExtra
 */
export type AssetExtra = Message<"webcast.model.gift.model.AssetExtra"> & {
    /**
     * @generated from field: string effect_starling_key = 1;
     */
    effectStarlingKey: string;
};
/**
 * Describes the message webcast.model.gift.model.AssetExtra.
 * Use `create(AssetExtraSchema)` to create a new message.
 */
export declare const AssetExtraSchema: GenMessage<AssetExtra>;
/**
 * @generated from message webcast.model.gift.model.AuditInfo
 */
export type AuditInfo = Message<"webcast.model.gift.model.AuditInfo"> & {
    /**
     * @generated from field: int64 violation_id = 1;
     */
    violationId: bigint;
    /**
     * @generated from field: int32 task_type = 2;
     */
    taskType: number;
};
/**
 * Describes the message webcast.model.gift.model.AuditInfo.
 * Use `create(AuditInfoSchema)` to create a new message.
 */
export declare const AuditInfoSchema: GenMessage<AuditInfo>;
/**
 * @generated from message webcast.model.gift.model.BEFViewRenderSize
 */
export type BEFViewRenderSize = Message<"webcast.model.gift.model.BEFViewRenderSize"> & {
    /**
     * @generated from field: int32 w = 1;
     */
    w: number;
    /**
     * @generated from field: int32 h = 2;
     */
    h: number;
};
/**
 * Describes the message webcast.model.gift.model.BEFViewRenderSize.
 * Use `create(BEFViewRenderSizeSchema)` to create a new message.
 */
export declare const BEFViewRenderSizeSchema: GenMessage<BEFViewRenderSize>;
/**
 * @generated from message webcast.model.gift.model.DistributionStrategy
 */
export type DistributionStrategy = Message<"webcast.model.gift.model.DistributionStrategy"> & {
    /**
     * @generated from field: webcast.model.gift.model.AssetBase asset_base = 1;
     */
    assetBase?: AssetBase | undefined;
    /**
     * @generated from field: int32 resource_type = 2;
     */
    resourceType: number;
};
/**
 * Describes the message webcast.model.gift.model.DistributionStrategy.
 * Use `create(DistributionStrategySchema)` to create a new message.
 */
export declare const DistributionStrategySchema: GenMessage<DistributionStrategy>;
/**
 * @generated from message webcast.model.gift.model.DynamicRestriction
 */
export type DynamicRestriction = Message<"webcast.model.gift.model.DynamicRestriction"> & {
    /**
     * @generated from field: webcast.model.gift.model.SceneRestriction scenes = 1;
     */
    scenes?: SceneRestriction | undefined;
    /**
     * @generated from field: repeated webcast.model.gift.model.ReceiverRestriction receivers = 2;
     */
    receivers: ReceiverRestriction[];
};
/**
 * Describes the message webcast.model.gift.model.DynamicRestriction.
 * Use `create(DynamicRestrictionSchema)` to create a new message.
 */
export declare const DynamicRestrictionSchema: GenMessage<DynamicRestriction>;
/**
 * @generated from message webcast.model.gift.model.FlyingMicResources
 */
export type FlyingMicResources = Message<"webcast.model.gift.model.FlyingMicResources"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel path_image = 1;
     */
    pathImage?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel mic_image = 2;
     */
    micImage?: ImageModel | undefined;
    /**
     * @generated from field: repeated webcast.model.gift.model.TransitionConfig transition_configs = 3;
     */
    transitionConfigs: TransitionConfig[];
};
/**
 * Describes the message webcast.model.gift.model.FlyingMicResources.
 * Use `create(FlyingMicResourcesSchema)` to create a new message.
 */
export declare const FlyingMicResourcesSchema: GenMessage<FlyingMicResources>;
/**
 * @generated from message webcast.model.gift.model.GiftColorInfo
 */
export type GiftColorInfo = Message<"webcast.model.gift.model.GiftColorInfo"> & {
    /**
     * @generated from field: int64 color_id = 1;
     */
    colorId: bigint;
    /**
     * @generated from field: string color_name = 2;
     */
    colorName: string;
    /**
     * @generated from field: repeated string color_values = 3;
     */
    colorValues: string[];
    /**
     * @generated from field: webcast.model.base.ImageModel color_image = 4;
     */
    colorImage?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel gift_image = 5;
     */
    giftImage?: ImageModel | undefined;
    /**
     * @generated from field: int64 color_effect_id = 6;
     */
    colorEffectId: bigint;
    /**
     * @generated from field: bool is_default = 7;
     */
    isDefault: boolean;
    /**
     * @generated from field: int64 color_image_size = 8;
     */
    colorImageSize: bigint;
    /**
     * @generated from field: repeated string color_reason = 9;
     */
    colorReason: string[];
    /**
     * @generated from field: string color_name_english = 10;
     */
    colorNameEnglish: string;
    /**
     * @generated from field: string gift_describe = 11;
     */
    giftDescribe: string;
};
/**
 * Describes the message webcast.model.gift.model.GiftColorInfo.
 * Use `create(GiftColorInfoSchema)` to create a new message.
 */
export declare const GiftColorInfoSchema: GenMessage<GiftColorInfo>;
/**
 * @generated from message webcast.model.gift.model.GiftEffectCrossScreenStickerSpec
 */
export type GiftEffectCrossScreenStickerSpec = Message<"webcast.model.gift.model.GiftEffectCrossScreenStickerSpec"> & {
    /**
     * @generated from field: map<int64, int32> single_action_asset_ids = 1;
     */
    singleActionAssetIds: {
        [key: string]: number;
    };
    /**
     * @generated from field: map<int64, int32> action_asset_ids = 2;
     */
    actionAssetIds: {
        [key: string]: number;
    };
    /**
     * @generated from field: map<int64, int32> reaction_asset_ids = 3;
     */
    reactionAssetIds: {
        [key: string]: number;
    };
};
/**
 * Describes the message webcast.model.gift.model.GiftEffectCrossScreenStickerSpec.
 * Use `create(GiftEffectCrossScreenStickerSpecSchema)` to create a new message.
 */
export declare const GiftEffectCrossScreenStickerSpecSchema: GenMessage<GiftEffectCrossScreenStickerSpec>;
/**
 * @generated from message webcast.model.gift.model.GiftEffectLynxSpec
 */
export type GiftEffectLynxSpec = Message<"webcast.model.gift.model.GiftEffectLynxSpec"> & {
    /**
     * @generated from field: repeated int64 asset_ids = 1;
     */
    assetIds: bigint[];
};
/**
 * Describes the message webcast.model.gift.model.GiftEffectLynxSpec.
 * Use `create(GiftEffectLynxSpecSchema)` to create a new message.
 */
export declare const GiftEffectLynxSpecSchema: GenMessage<GiftEffectLynxSpec>;
/**
 * @generated from message webcast.model.gift.model.GiftEffectPrefabSpec
 */
export type GiftEffectPrefabSpec = Message<"webcast.model.gift.model.GiftEffectPrefabSpec"> & {
    /**
     * @generated from field: int64 template_asset_id = 1;
     */
    templateAssetId: bigint;
    /**
     * @generated from field: repeated int64 prefab_asset_ids = 2;
     */
    prefabAssetIds: bigint[];
};
/**
 * Describes the message webcast.model.gift.model.GiftEffectPrefabSpec.
 * Use `create(GiftEffectPrefabSpecSchema)` to create a new message.
 */
export declare const GiftEffectPrefabSpecSchema: GenMessage<GiftEffectPrefabSpec>;
/**
 * @generated from message webcast.model.gift.model.GiftEffectSerialSpec
 */
export type GiftEffectSerialSpec = Message<"webcast.model.gift.model.GiftEffectSerialSpec"> & {
    /**
     * @generated from field: repeated int64 serial_asset_ids = 2;
     */
    serialAssetIds: bigint[];
};
/**
 * Describes the message webcast.model.gift.model.GiftEffectSerialSpec.
 * Use `create(GiftEffectSerialSpecSchema)` to create a new message.
 */
export declare const GiftEffectSerialSpecSchema: GenMessage<GiftEffectSerialSpec>;
/**
 * @generated from message webcast.model.gift.model.GiftEffectSpecs
 */
export type GiftEffectSpecs = Message<"webcast.model.gift.model.GiftEffectSpecs"> & {
    /**
     * @generated from field: webcast.model.gift.model.GiftEffectCrossScreenStickerSpec cross_screen_sticker = 1;
     */
    crossScreenSticker?: GiftEffectCrossScreenStickerSpec | undefined;
    /**
     * @generated from field: webcast.model.gift.model.GiftEffectLynxSpec lynx = 2;
     */
    lynx?: GiftEffectLynxSpec | undefined;
    /**
     * @generated from field: webcast.model.gift.model.GiftEffectPrefabSpec prefab = 3;
     */
    prefab?: GiftEffectPrefabSpec | undefined;
    /**
     * @generated from field: webcast.model.gift.model.GiftEffectSerialSpec serial_spec = 4;
     */
    serialSpec?: GiftEffectSerialSpec | undefined;
    /**
     * @generated from field: webcast.model.gift.model.GiftEffectStreamSpec stream_effect_spec = 5;
     */
    streamEffectSpec?: GiftEffectStreamSpec | undefined;
};
/**
 * Describes the message webcast.model.gift.model.GiftEffectSpecs.
 * Use `create(GiftEffectSpecsSchema)` to create a new message.
 */
export declare const GiftEffectSpecsSchema: GenMessage<GiftEffectSpecs>;
/**
 * @generated from message webcast.model.gift.model.GiftEffectStreamSpec
 */
export type GiftEffectStreamSpec = Message<"webcast.model.gift.model.GiftEffectStreamSpec"> & {
    /**
     * @generated from field: int64 basic_asset_id = 1;
     */
    basicAssetId: bigint;
    /**
     * @generated from field: repeated int64 extra_asset_ids = 2;
     */
    extraAssetIds: bigint[];
};
/**
 * Describes the message webcast.model.gift.model.GiftEffectStreamSpec.
 * Use `create(GiftEffectStreamSpecSchema)` to create a new message.
 */
export declare const GiftEffectStreamSpecSchema: GenMessage<GiftEffectStreamSpec>;
/**
 * @generated from message webcast.model.gift.model.GiftPanelBeaconBubble
 */
export type GiftPanelBeaconBubble = Message<"webcast.model.gift.model.GiftPanelBeaconBubble"> & {
    /**
     * @generated from field: string lynx_url = 1;
     */
    lynxUrl: string;
    /**
     * @generated from field: string lynx_extra = 2;
     */
    lynxExtra: string;
    /**
     * @generated from field: webcast.model.data.GiftPanelBeaconBubbleType type = 3;
     */
    type: GiftPanelBeaconBubbleType;
};
/**
 * Describes the message webcast.model.gift.model.GiftPanelBeaconBubble.
 * Use `create(GiftPanelBeaconBubbleSchema)` to create a new message.
 */
export declare const GiftPanelBeaconBubbleSchema: GenMessage<GiftPanelBeaconBubble>;
/**
 * @generated from message webcast.model.gift.model.GiftResource
 */
export type GiftResource = Message<"webcast.model.gift.model.GiftResource"> & {
    /**
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel image = 2;
     */
    image?: ImageModel | undefined;
    /**
     * @generated from field: int64 effect_id = 3;
     */
    effectId: bigint;
};
/**
 * Describes the message webcast.model.gift.model.GiftResource.
 * Use `create(GiftResourceSchema)` to create a new message.
 */
export declare const GiftResourceSchema: GenMessage<GiftResource>;
/**
 * @generated from message webcast.model.gift.model.LiveStreamGoal
 */
export type LiveStreamGoal = Message<"webcast.model.gift.model.LiveStreamGoal"> & {
    /**
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * @generated from field: int32 type = 2;
     */
    type: number;
    /**
     * @generated from field: int32 status = 3;
     */
    status: number;
    /**
     * @generated from field: repeated webcast.model.gift.model.LiveStreamSubGoal sub_goals = 4;
     */
    subGoals: LiveStreamSubGoal[];
    /**
     * @generated from field: string description = 5;
     */
    description: string;
    /**
     * @generated from field: int32 audit_status = 6;
     */
    auditStatus: number;
    /**
     * @generated from field: int32 cycle_type = 7;
     */
    cycleType: number;
    /**
     * @generated from field: int64 start_time = 8;
     */
    startTime: bigint;
    /**
     * @generated from field: int64 expire_time = 9;
     */
    expireTime: bigint;
    /**
     * @generated from field: int64 real_finish_time = 10;
     */
    realFinishTime: bigint;
    /**
     * @generated from field: repeated webcast.model.gift.model.LiveStreamGoalContributor contributors = 11;
     */
    contributors: LiveStreamGoalContributor[];
    /**
     * @generated from field: int32 contributors_length = 12;
     */
    contributorsLength: number;
    /**
     * @generated from field: string id_str = 13;
     */
    idStr: string;
    /**
     * @generated from field: string audit_description = 14;
     */
    auditDescription: string;
    /**
     * @generated from field: webcast.model.goal.GoalStats stats = 15;
     */
    stats?: GoalStats | undefined;
    /**
     * @generated from field: string goal_extra_info = 16;
     */
    goalExtraInfo: string;
    /**
     * @generated from field: int32 mode = 17;
     */
    mode: number;
    /**
     * @generated from field: webcast.model.gift.model.AuditInfo audit_info = 18;
     */
    auditInfo?: AuditInfo | undefined;
    /**
     * @generated from field: string challenge_type = 20;
     */
    challengeType: string;
    /**
     * @generated from field: bool is_uneditable = 21;
     */
    isUneditable: boolean;
    /**
     * @generated from field: webcast.model.goal.GoalReward goal_reward = 22;
     */
    goalReward?: GoalReward | undefined;
    /**
     * @generated from field: int32 create_source = 23;
     */
    createSource: number;
};
/**
 * Describes the message webcast.model.gift.model.LiveStreamGoal.
 * Use `create(LiveStreamGoalSchema)` to create a new message.
 */
export declare const LiveStreamGoalSchema: GenMessage<LiveStreamGoal>;
/**
 * @generated from message webcast.model.gift.model.LiveStreamGoalContributor
 */
export type LiveStreamGoalContributor = Message<"webcast.model.gift.model.LiveStreamGoalContributor"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar = 2;
     */
    avatar?: ImageModel | undefined;
    /**
     * @generated from field: string display_id = 3;
     */
    displayId: string;
    /**
     * @generated from field: int64 score = 4;
     */
    score: bigint;
    /**
     * @generated from field: string user_id_str = 5;
     */
    userIdStr: string;
    /**
     * @generated from field: bool in_room = 6;
     */
    inRoom: boolean;
    /**
     * @generated from field: bool is_friend = 7;
     */
    isFriend: boolean;
    /**
     * @generated from field: bool follow_by_owner = 9;
     */
    followByOwner: boolean;
    /**
     * @generated from field: bool is_fist_contribute = 10;
     */
    isFistContribute: boolean;
    /**
     * @generated from field: repeated webcast.model.goal.SubGoalContribution sub_goal_contributions = 11;
     */
    subGoalContributions: SubGoalContribution[];
    /**
     * @generated from field: webcast.model.base.user.EnigmaInfo enigma_info = 12;
     */
    enigmaInfo?: EnigmaInfo | undefined;
};
/**
 * Describes the message webcast.model.gift.model.LiveStreamGoalContributor.
 * Use `create(LiveStreamGoalContributorSchema)` to create a new message.
 */
export declare const LiveStreamGoalContributorSchema: GenMessage<LiveStreamGoalContributor>;
/**
 * @generated from message webcast.model.gift.model.LiveStreamGoalIndicator
 */
export type LiveStreamGoalIndicator = Message<"webcast.model.gift.model.LiveStreamGoalIndicator"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: int32 op = 2;
     */
    op: number;
};
/**
 * Describes the message webcast.model.gift.model.LiveStreamGoalIndicator.
 * Use `create(LiveStreamGoalIndicatorSchema)` to create a new message.
 */
export declare const LiveStreamGoalIndicatorSchema: GenMessage<LiveStreamGoalIndicator>;
/**
 * @generated from message webcast.model.gift.model.LiveStreamSubGoal
 */
export type LiveStreamSubGoal = Message<"webcast.model.gift.model.LiveStreamSubGoal"> & {
    /**
     * @generated from field: int32 type = 1;
     */
    type: number;
    /**
     * @generated from field: int64 id = 2;
     */
    id: bigint;
    /**
     * @generated from field: int64 progress = 3;
     */
    progress: bigint;
    /**
     * @generated from field: int64 target = 4;
     */
    target: bigint;
    /**
     * @generated from field: webcast.model.gift.model.LiveStreamSubGoalGift gift = 5;
     */
    gift?: LiveStreamSubGoalGift | undefined;
    /**
     * @generated from field: string id_str = 6;
     */
    idStr: string;
    /**
     * @generated from field: webcast.model.goal.SubGoalPinInfo pin_info = 7;
     */
    pinInfo?: SubGoalPinInfo | undefined;
    /**
     * @generated from field: int32 source = 8;
     */
    source: number;
    /**
     * @generated from field: string recommended_text = 9;
     */
    recommendedText: string;
    /**
     * @generated from field: string recommended_header = 10;
     */
    recommendedHeader: string;
};
/**
 * Describes the message webcast.model.gift.model.LiveStreamSubGoal.
 * Use `create(LiveStreamSubGoalSchema)` to create a new message.
 */
export declare const LiveStreamSubGoalSchema: GenMessage<LiveStreamSubGoal>;
/**
 * @generated from message webcast.model.gift.model.LiveStreamSubGoalGift
 */
export type LiveStreamSubGoalGift = Message<"webcast.model.gift.model.LiveStreamSubGoalGift"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 2;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: int64 diamond_count = 3;
     */
    diamondCount: bigint;
    /**
     * @generated from field: int32 type = 4;
     */
    type: number;
};
/**
 * Describes the message webcast.model.gift.model.LiveStreamSubGoalGift.
 * Use `create(LiveStreamSubGoalGiftSchema)` to create a new message.
 */
export declare const LiveStreamSubGoalGiftSchema: GenMessage<LiveStreamSubGoalGift>;
/**
 * @generated from message webcast.model.gift.model.LokiExtraContent
 */
export type LokiExtraContent = Message<"webcast.model.gift.model.LokiExtraContent"> & {
    /**
     * @generated from field: string gift_type = 1;
     */
    giftType: string;
    /**
     * @generated from field: int64 gift_duration = 2;
     */
    giftDuration: bigint;
    /**
     * @generated from field: bool need_screen_shot = 3;
     */
    needScreenShot: boolean;
    /**
     * @generated from field: bool should_multi_frame = 4;
     */
    shouldMultiFrame: boolean;
    /**
     * @generated from field: string view_overlay = 5;
     */
    viewOverlay: string;
    /**
     * @generated from field: webcast.model.gift.model.BEFViewRenderSize bef_view_render_size = 6;
     */
    befViewRenderSize?: BEFViewRenderSize | undefined;
    /**
     * @generated from field: int32 bef_view_render_fps = 7;
     */
    befViewRenderFps: number;
    /**
     * @generated from field: int32 bef_view_fit_mode = 8;
     */
    befViewFitMode: number;
    /**
     * @generated from field: string model_names = 9;
     */
    modelNames: string;
    /**
     * @generated from field: repeated string requirements = 10;
     */
    requirements: string[];
};
/**
 * Describes the message webcast.model.gift.model.LokiExtraContent.
 * Use `create(LokiExtraContentSchema)` to create a new message.
 */
export declare const LokiExtraContentSchema: GenMessage<LokiExtraContent>;
/**
 * @generated from message webcast.model.gift.model.LynxGiftExtra
 */
export type LynxGiftExtra = Message<"webcast.model.gift.model.LynxGiftExtra"> & {
    /**
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * @generated from field: int64 code = 2;
     */
    code: bigint;
    /**
     * @generated from field: int64 type = 3;
     */
    type: bigint;
    /**
     * @generated from field: repeated string params = 4;
     */
    params: string[];
    /**
     * @generated from field: string extra = 5;
     */
    extra: string;
};
/**
 * Describes the message webcast.model.gift.model.LynxGiftExtra.
 * Use `create(LynxGiftExtraSchema)` to create a new message.
 */
export declare const LynxGiftExtraSchema: GenMessage<LynxGiftExtra>;
/**
 * @generated from message webcast.model.gift.model.MatchInfo
 */
export type MatchInfo = Message<"webcast.model.gift.model.MatchInfo"> & {
    /**
     * @generated from field: int64 critical = 1;
     */
    critical: bigint;
    /**
     * @generated from field: bool effect_card_in_use = 2;
     */
    effectCardInUse: boolean;
    /**
     * @generated from field: webcast.model.data.MatchInfo_MultiplierType multiplier_type = 3;
     */
    multiplierType: MatchInfo_MultiplierType;
    /**
     * @generated from field: int64 multiplier_value = 4;
     */
    multiplierValue: bigint;
};
/**
 * Describes the message webcast.model.gift.model.MatchInfo.
 * Use `create(MatchInfoSchema)` to create a new message.
 */
export declare const MatchInfoSchema: GenMessage<MatchInfo>;
/**
 * @generated from message webcast.model.gift.model.PrefabBundle
 */
export type PrefabBundle = Message<"webcast.model.gift.model.PrefabBundle"> & {
    /**
     * @generated from field: repeated int64 prefab_effect_ids = 2;
     */
    prefabEffectIds: bigint[];
};
/**
 * Describes the message webcast.model.gift.model.PrefabBundle.
 * Use `create(PrefabBundleSchema)` to create a new message.
 */
export declare const PrefabBundleSchema: GenMessage<PrefabBundle>;
/**
 * @generated from message webcast.model.gift.model.ReceiverRestriction
 */
export type ReceiverRestriction = Message<"webcast.model.gift.model.ReceiverRestriction"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: repeated int64 hidden_gids = 2;
     */
    hiddenGids: bigint[];
};
/**
 * Describes the message webcast.model.gift.model.ReceiverRestriction.
 * Use `create(ReceiverRestrictionSchema)` to create a new message.
 */
export declare const ReceiverRestrictionSchema: GenMessage<ReceiverRestriction>;
/**
 * @generated from message webcast.model.gift.model.SceneRestriction
 */
export type SceneRestriction = Message<"webcast.model.gift.model.SceneRestriction"> & {
    /**
     * @generated from field: repeated int64 normal_hidden_gids = 1;
     */
    normalHiddenGids: bigint[];
    /**
     * @generated from field: repeated int64 match_hidden_gids = 2;
     */
    matchHiddenGids: bigint[];
    /**
     * @generated from field: repeated int64 cohost_hidden_gids = 3;
     */
    cohostHiddenGids: bigint[];
    /**
     * @generated from field: repeated int64 multiguest_hidden_gids = 4;
     */
    multiguestHiddenGids: bigint[];
};
/**
 * Describes the message webcast.model.gift.model.SceneRestriction.
 * Use `create(SceneRestrictionSchema)` to create a new message.
 */
export declare const SceneRestrictionSchema: GenMessage<SceneRestriction>;
/**
 * @generated from message webcast.model.gift.model.SecondaryEffectInfo
 */
export type SecondaryEffectInfo = Message<"webcast.model.gift.model.SecondaryEffectInfo"> & {
    /**
     * @generated from field: repeated int64 effect_ids = 1;
     */
    effectIds: bigint[];
    /**
     * @generated from field: repeated string builtin_strings = 2;
     */
    builtinStrings: string[];
    /**
     * @generated from field: int64 minute_game_gameplay_id = 3;
     */
    minuteGameGameplayId: bigint;
};
/**
 * Describes the message webcast.model.gift.model.SecondaryEffectInfo.
 * Use `create(SecondaryEffectInfoSchema)` to create a new message.
 */
export declare const SecondaryEffectInfoSchema: GenMessage<SecondaryEffectInfo>;
/**
 * @generated from message webcast.model.gift.model.TransitionConfig
 */
export type TransitionConfig = Message<"webcast.model.gift.model.TransitionConfig"> & {
    /**
     * @generated from field: int64 config_id = 1;
     */
    configId: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel resource_image = 2;
     */
    resourceImage?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.gift.model.TransitionConfig.
 * Use `create(TransitionConfigSchema)` to create a new message.
 */
export declare const TransitionConfigSchema: GenMessage<TransitionConfig>;
//# sourceMappingURL=model_pb.d.ts.map