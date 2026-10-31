import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/data/messages.proto.
 */
export declare const file_webcast_model_data_messages: GenFile;
/**
 * @generated from message webcast.model.data.DiffInfo
 */
export type DiffInfo = Message<"webcast.model.data.DiffInfo"> & {
    /**
     * @generated from field: webcast.model.data.UrlDataStruct diff_url = 1;
     */
    diffUrl?: UrlDataStruct | undefined;
    /**
     * @generated from field: webcast.model.data.UrlDataStruct base_url = 2;
     */
    baseUrl?: UrlDataStruct | undefined;
    /**
     * @generated from field: string extra = 3;
     */
    extra: string;
};
/**
 * Describes the message webcast.model.data.DiffInfo.
 * Use `create(DiffInfoSchema)` to create a new message.
 */
export declare const DiffInfoSchema: GenMessage<DiffInfo>;
/**
 * @generated from message webcast.model.data.EffectStruct
 */
export type EffectStruct = Message<"webcast.model.data.EffectStruct"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string hint = 2;
     */
    hint: string;
    /**
     * @generated from field: webcast.model.data.UrlDataStruct hint_icon = 3;
     */
    hintIcon?: UrlDataStruct | undefined;
    /**
     * @generated from field: string sdk_version = 4;
     */
    sdkVersion: string;
    /**
     * @generated from field: string app_version = 5;
     */
    appVersion: string;
    /**
     * @generated from field: webcast.model.data.UrlDataStruct file_url = 6;
     */
    fileUrl?: UrlDataStruct | undefined;
    /**
     * @generated from field: webcast.model.data.UrlDataStruct icon_url = 7;
     */
    iconUrl?: UrlDataStruct | undefined;
    /**
     * @generated from field: string id = 8;
     */
    id: string;
    /**
     * @generated from field: string effect_id = 9;
     */
    effectId: string;
    /**
     * @generated from field: string device_platform = 10;
     */
    devicePlatform: string;
    /**
     * @generated from field: repeated string types = 11;
     */
    types: string[];
    /**
     * @generated from field: repeated string tags = 12;
     */
    tags: string[];
    /**
     * @generated from field: string tags_updated_at = 13;
     */
    tagsUpdatedAt: string;
    /**
     * @generated from field: string parent = 14;
     */
    parent: string;
    /**
     * @generated from field: repeated string children = 15;
     */
    children: string[];
    /**
     * @generated from field: int32 effect_type = 16;
     */
    effectType: number;
    /**
     * @generated from field: repeated string music = 17;
     */
    music: string[];
    /**
     * @generated from field: int32 source = 18;
     */
    source: number;
    /**
     * @generated from field: string designer_id = 19;
     */
    designerId: string;
    /**
     * @generated from field: string schema = 20;
     */
    schema: string;
    /**
     * @generated from field: repeated string requirements = 21;
     */
    requirements: string[];
    /**
     * @generated from field: string extra = 22;
     */
    extra: string;
    /**
     * @generated from field: bool is_busi = 23;
     */
    isBusi: boolean;
    /**
     * @generated from field: string designer_encrypted_id = 26;
     */
    designerEncryptedId: string;
    /**
     * @generated from field: string sdk_extra = 27;
     */
    sdkExtra: string;
    /**
     * @generated from field: string resource_id = 28;
     */
    resourceId: string;
    /**
     * @generated from field: string ad_raw_data = 29;
     */
    adRawData: string;
    /**
     * @generated from field: repeated string bind_ids = 30;
     */
    bindIds: string[];
    /**
     * @generated from field: int64 ptime = 31;
     */
    ptime: bigint;
    /**
     * @generated from field: string grade_key = 32;
     */
    gradeKey: string;
    /**
     * @generated from field: string composer_params = 33;
     */
    composerParams: string;
    /**
     * @generated from field: webcast.model.data.UrlDataStruct hint_file = 34;
     */
    hintFile?: UrlDataStruct | undefined;
    /**
     * @generated from field: int64 use_number = 35;
     */
    useNumber: bigint;
    /**
     * @generated from field: repeated string types_sec = 36;
     */
    typesSec: string[];
    /**
     * @generated from field: repeated string requirements_sec = 37;
     */
    requirementsSec: string[];
    /**
     * @generated from field: string panel = 38;
     */
    panel: string;
    /**
     * @generated from field: string model_names = 39;
     */
    modelNames: string;
    /**
     * @generated from field: string model_names_sec = 40;
     */
    modelNamesSec: string;
    /**
     * @generated from field: int32 hint_file_format = 41;
     */
    hintFileFormat: number;
    /**
     * @generated from field: string poi_id = 42;
     */
    poiId: string;
    /**
     * @generated from field: bool is_poi = 43;
     */
    isPoi: boolean;
    /**
     * @generated from field: repeated string challenge = 44;
     */
    challenge: string[];
    /**
     * @generated from field: repeated string system_list = 45;
     */
    systemList: string[];
    /**
     * @generated from field: string original_effect_id = 46;
     */
    originalEffectId: string;
    /**
     * @generated from field: webcast.model.data.UrlDataStruct trans_file_url = 47;
     */
    transFileUrl?: UrlDataStruct | undefined;
    /**
     * @generated from field: string template_effect_id = 48;
     */
    templateEffectId: string;
    /**
     * @generated from field: int64 rec_tag = 49;
     */
    recTag: bigint;
    /**
     * @generated from field: webcast.model.data.TemplateEffectExtra template_effect_extra = 50;
     */
    templateEffectExtra?: TemplateEffectExtra | undefined;
    /**
     * @generated from field: webcast.model.data.DiffInfo file_diff = 51;
     */
    fileDiff?: DiffInfo | undefined;
    /**
     * @generated from field: int32 provider = 52;
     */
    provider: number;
    /**
     * @generated from field: int64 package_size = 53;
     */
    packageSize: bigint;
    /**
     * @generated from field: int64 from_app_id = 54;
     */
    fromAppId: bigint;
};
/**
 * Describes the message webcast.model.data.EffectStruct.
 * Use `create(EffectStructSchema)` to create a new message.
 */
export declare const EffectStructSchema: GenMessage<EffectStruct>;
/**
 * @generated from message webcast.model.data.EventUserInfo
 */
export type EventUserInfo = Message<"webcast.model.data.EventUserInfo"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: string avatar_uri = 2;
     */
    avatarUri: string;
};
/**
 * Describes the message webcast.model.data.EventUserInfo.
 * Use `create(EventUserInfoSchema)` to create a new message.
 */
export declare const EventUserInfoSchema: GenMessage<EventUserInfo>;
/**
 * @generated from message webcast.model.data.MsgFilter
 */
export type MsgFilter = Message<"webcast.model.data.MsgFilter"> & {
    /**
     * @generated from field: bool is_gifter = 1;
     */
    isGifter: boolean;
    /**
     * @generated from field: bool is_subscribed_to_anchor = 2;
     */
    isSubscribedToAnchor: boolean;
};
/**
 * Describes the message webcast.model.data.MsgFilter.
 * Use `create(MsgFilterSchema)` to create a new message.
 */
export declare const MsgFilterSchema: GenMessage<MsgFilter>;
/**
 * @generated from message webcast.model.data.PaidEventPreview
 */
export type PaidEventPreview = Message<"webcast.model.data.PaidEventPreview"> & {
    /**
     * @generated from field: int64 allow_preview = 1;
     */
    allowPreview: bigint;
    /**
     * @generated from field: int64 allow_preview_time = 2;
     */
    allowPreviewTime: bigint;
};
/**
 * Describes the message webcast.model.data.PaidEventPreview.
 * Use `create(PaidEventPreviewSchema)` to create a new message.
 */
export declare const PaidEventPreviewSchema: GenMessage<PaidEventPreview>;
/**
 * @generated from message webcast.model.data.SubSplitStatus
 */
export type SubSplitStatus = Message<"webcast.model.data.SubSplitStatus"> & {
    /**
     * @generated from field: bool is_old_sub_creator = 1;
     */
    isOldSubCreator: boolean;
    /**
     * @generated from field: webcast.model.data.SubSplitPeriod cur_period = 2;
     */
    curPeriod: SubSplitPeriod;
};
/**
 * Describes the message webcast.model.data.SubSplitStatus.
 * Use `create(SubSplitStatusSchema)` to create a new message.
 */
export declare const SubSplitStatusSchema: GenMessage<SubSplitStatus>;
/**
 * @generated from message webcast.model.data.TemplateEffectExtra
 */
export type TemplateEffectExtra = Message<"webcast.model.data.TemplateEffectExtra"> & {
    /**
     * @generated from field: string resource_id = 1;
     */
    resourceId: string;
};
/**
 * Describes the message webcast.model.data.TemplateEffectExtra.
 * Use `create(TemplateEffectExtraSchema)` to create a new message.
 */
export declare const TemplateEffectExtraSchema: GenMessage<TemplateEffectExtra>;
/**
 * @generated from message webcast.model.data.UrlDataStruct
 */
export type UrlDataStruct = Message<"webcast.model.data.UrlDataStruct"> & {
    /**
     * @generated from field: string uri = 1;
     */
    uri: string;
    /**
     * @generated from field: repeated string url_list = 2;
     */
    urlList: string[];
    /**
     * @generated from field: int32 url_sub_type = 3;
     */
    urlSubType: number;
    /**
     * @generated from field: string md5 = 4;
     */
    md5: string;
    /**
     * @generated from field: repeated string url_prefix = 5;
     */
    urlPrefix: string[];
};
/**
 * Describes the message webcast.model.data.UrlDataStruct.
 * Use `create(UrlDataStructSchema)` to create a new message.
 */
export declare const UrlDataStructSchema: GenMessage<UrlDataStruct>;
/**
 * @generated from message webcast.model.data.UserIdentity
 */
export type UserIdentity = Message<"webcast.model.data.UserIdentity"> & {
    /**
     * @generated from field: bool is_gift_giver_of_anchor = 1;
     */
    isGiftGiverOfAnchor: boolean;
    /**
     * @generated from field: bool is_subscriber_of_anchor = 2;
     */
    isSubscriberOfAnchor: boolean;
    /**
     * @generated from field: bool is_mutual_following_with_anchor = 3;
     */
    isMutualFollowingWithAnchor: boolean;
    /**
     * @generated from field: bool is_follower_of_anchor = 4;
     */
    isFollowerOfAnchor: boolean;
    /**
     * @generated from field: bool is_moderator_of_anchor = 5;
     */
    isModeratorOfAnchor: boolean;
    /**
     * @generated from field: bool is_anchor = 6;
     */
    isAnchor: boolean;
};
/**
 * Describes the message webcast.model.data.UserIdentity.
 * Use `create(UserIdentitySchema)` to create a new message.
 */
export declare const UserIdentitySchema: GenMessage<UserIdentity>;
/**
 * @generated from enum webcast.model.data.ActionButtonType
 */
export declare enum ActionButtonType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: FOLLOW = 1;
     */
    FOLLOW = 1,
    /**
     * @generated from enum value: SET_GOAL = 2;
     */
    SET_GOAL = 2,
    /**
     * @generated from enum value: START_MATCH = 3;
     */
    START_MATCH = 3,
    /**
     * @generated from enum value: ADD_STICKER = 4;
     */
    ADD_STICKER = 4,
    /**
     * @generated from enum value: ADD_CRM_STICKER = 5;
     */
    ADD_CRM_STICKER = 5,
    /**
     * @generated from enum value: START_COHOST = 6;
     */
    START_COHOST = 6,
    /**
     * @generated from enum value: INVITE_LEVEL_UP_GAMEPLAY = 7;
     */
    INVITE_LEVEL_UP_GAMEPLAY = 7,
    /**
     * @generated from enum value: SEND_GOODY_BAG = 8;
     */
    SEND_GOODY_BAG = 8,
    /**
     * @generated from enum value: PIN_MESSAGE = 9;
     */
    PIN_MESSAGE = 9,
    /**
     * @generated from enum value: ACTIVATE_UPGRADE_GIFT_GALLERY = 10;
     */
    ACTIVATE_UPGRADE_GIFT_GALLERY = 10,
    /**
     * @generated from enum value: SET_FANS_CLUB_ID = 11;
     */
    SET_FANS_CLUB_ID = 11,
    /**
     * @generated from enum value: VIEWER_WISH = 12;
     */
    VIEWER_WISH = 12,
    /**
     * @generated from enum value: OPEN_PLAY_BOOK = 13;
     */
    OPEN_PLAY_BOOK = 13,
    /**
     * @generated from enum value: LIVE_GOAL_PIN = 14;
     */
    LIVE_GOAL_PIN = 14,
    /**
     * @generated from enum value: GUESSING_GAME = 15;
     */
    GUESSING_GAME = 15,
    /**
     * @generated from enum value: LAUNCH_GAME_QUIZ = 16;
     */
    LAUNCH_GAME_QUIZ = 16,
    /**
     * @generated from enum value: PIN_COMMENT = 17;
     */
    PIN_COMMENT = 17,
    /**
     * @generated from enum value: INVITE_ON_MIC = 18;
     */
    INVITE_ON_MIC = 18
}
/**
 * Describes the enum webcast.model.data.ActionButtonType.
 */
export declare const ActionButtonTypeSchema: GenEnum<ActionButtonType>;
/**
 * @generated from enum webcast.model.data.AffiliatedInfo_StickerShowScene
 */
export declare enum AffiliatedInfo_StickerShowScene {
    /**
     * @generated from enum value: NORMAL = 0;
     */
    NORMAL = 0,
    /**
     * @generated from enum value: SETTLING = 1;
     */
    SETTLING = 1,
    /**
     * @generated from enum value: SETTLED = 2;
     */
    SETTLED = 2
}
/**
 * Describes the enum webcast.model.data.AffiliatedInfo_StickerShowScene.
 */
export declare const AffiliatedInfo_StickerShowSceneSchema: GenEnum<AffiliatedInfo_StickerShowScene>;
/**
 * @generated from enum webcast.model.data.AuditStatus
 */
export declare enum AuditStatus {
    /**
     * @generated from enum value: AUDIT_STATUS_UNKNOWN = 0;
     */
    AUDIT_STATUS_UNKNOWN = 0,
    /**
     * @generated from enum value: PASS = 1;
     */
    PASS = 1,
    /**
     * @generated from enum value: FAILED = 2;
     */
    FAILED = 2,
    /**
     * @generated from enum value: REVIEWING = 3;
     */
    REVIEWING = 3,
    /**
     * @generated from enum value: FORBIDDEN = 4;
     */
    FORBIDDEN = 4
}
/**
 * Describes the enum webcast.model.data.AuditStatus.
 */
export declare const AuditStatusSchema: GenEnum<AuditStatus>;
/**
 * @generated from enum webcast.model.data.AuditTaskType
 */
export declare enum AuditTaskType {
    /**
     * @generated from enum value: DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * @generated from enum value: APPEAL = 1;
     */
    APPEAL = 1
}
/**
 * Describes the enum webcast.model.data.AuditTaskType.
 */
export declare const AuditTaskTypeSchema: GenEnum<AuditTaskType>;
/**
 * @generated from enum webcast.model.data.BadgeDisplayType
 */
export declare enum BadgeDisplayType {
    /**
     * @generated from enum value: BADGE_DISPLAY_TYPE_UNKNOWN = 0;
     */
    BADGE_DISPLAY_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: IMAGE = 1;
     */
    IMAGE = 1,
    /**
     * @generated from enum value: TEXT = 2;
     */
    TEXT = 2,
    /**
     * @generated from enum value: STRING = 3;
     */
    STRING = 3,
    /**
     * @generated from enum value: COMBINE = 4;
     */
    COMBINE = 4
}
/**
 * Describes the enum webcast.model.data.BadgeDisplayType.
 */
export declare const BadgeDisplayTypeSchema: GenEnum<BadgeDisplayType>;
/**
 * @generated from enum webcast.model.data.BadgeExhibitionType
 */
export declare enum BadgeExhibitionType {
    /**
     * @generated from enum value: BADGE = 0;
     */
    BADGE = 0,
    /**
     * @generated from enum value: IDENTITY_LABEL = 1;
     */
    IDENTITY_LABEL = 1
}
/**
 * Describes the enum webcast.model.data.BadgeExhibitionType.
 */
export declare const BadgeExhibitionTypeSchema: GenEnum<BadgeExhibitionType>;
/**
 * @generated from enum webcast.model.data.BadgePriorityType
 */
export declare enum BadgePriorityType {
    /**
     * @generated from enum value: BADGE_PRIORITY_TYPE_UNKNOWN = 0;
     */
    BADGE_PRIORITY_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: STRONG_RELATION = 10;
     */
    STRONG_RELATION = 10,
    /**
     * @generated from enum value: PLATFORM = 20;
     */
    PLATFORM = 20,
    /**
     * @generated from enum value: RELATION = 30;
     */
    RELATION = 30,
    /**
     * @generated from enum value: ACTIVITY = 40;
     */
    ACTIVITY = 40,
    /**
     * @generated from enum value: RANK_LIST = 50;
     */
    RANK_LIST = 50
}
/**
 * Describes the enum webcast.model.data.BadgePriorityType.
 */
export declare const BadgePriorityTypeSchema: GenEnum<BadgePriorityType>;
/**
 * @generated from enum webcast.model.data.BadgeSceneType
 */
export declare enum BadgeSceneType {
    /**
     * @generated from enum value: BADGE_SCENE_TYPE_UNKNOWN = 0;
     */
    BADGE_SCENE_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: ADMIN = 1;
     */
    ADMIN = 1,
    /**
     * @generated from enum value: FIRST_RECHARGE = 2;
     */
    FIRST_RECHARGE = 2,
    /**
     * @generated from enum value: FRIENDS = 3;
     */
    FRIENDS = 3,
    /**
     * @generated from enum value: SUBSCRIBER = 4;
     */
    SUBSCRIBER = 4,
    /**
     * @generated from enum value: BADGE_SCENE_TYPE_ACTIVITY = 5;
     */
    BADGE_SCENE_TYPE_ACTIVITY = 5,
    /**
     * @generated from enum value: BADGE_SCENE_TYPE_RANK_LIST = 6;
     */
    BADGE_SCENE_TYPE_RANK_LIST = 6,
    /**
     * @generated from enum value: NEW_SUBSCRIBER = 7;
     */
    NEW_SUBSCRIBER = 7,
    /**
     * @generated from enum value: USER_GRADE = 8;
     */
    USER_GRADE = 8,
    /**
     * @generated from enum value: STATE_CONTROLLED_MEDIA = 9;
     */
    STATE_CONTROLLED_MEDIA = 9,
    /**
     * @generated from enum value: FANS = 10;
     */
    FANS = 10,
    /**
     * @generated from enum value: LIVE_PRO = 11;
     */
    LIVE_PRO = 11,
    /**
     * @generated from enum value: ANCHOR = 12;
     */
    ANCHOR = 12,
    /**
     * @generated from enum value: CLASS_RANK = 13;
     */
    CLASS_RANK = 13,
    /**
     * @generated from enum value: ENIGMA = 14;
     */
    ENIGMA = 14
}
/**
 * Describes the enum webcast.model.data.BadgeSceneType.
 */
export declare const BadgeSceneTypeSchema: GenEnum<BadgeSceneType>;
/**
 * @generated from enum webcast.model.data.BadgeTextPosition
 */
export declare enum BadgeTextPosition {
    /**
     * @generated from enum value: BADGE_TEXT_POSITION_UNKNOWN = 0;
     */
    BADGE_TEXT_POSITION_UNKNOWN = 0,
    /**
     * @generated from enum value: RIGHT = 1;
     */
    RIGHT = 1,
    /**
     * @generated from enum value: BELOW = 2;
     */
    BELOW = 2
}
/**
 * Describes the enum webcast.model.data.BadgeTextPosition.
 */
export declare const BadgeTextPositionSchema: GenEnum<BadgeTextPosition>;
/**
 * @generated from enum webcast.model.data.BattleABTestType
 */
export declare enum BattleABTestType {
    /**
     * @generated from enum value: UNKNOWN_AB_TEST_TYPE = 0;
     */
    UNKNOWN_AB_TEST_TYPE = 0,
    /**
     * @generated from enum value: MEANWHILE_INVITE = 1;
     */
    MEANWHILE_INVITE = 1,
    /**
     * @generated from enum value: SPECIFIED_GIFT = 2;
     */
    SPECIFIED_GIFT = 2,
    /**
     * @generated from enum value: RT_C_MESSAGE_CHANNEL = 3;
     */
    RT_C_MESSAGE_CHANNEL = 3,
    /**
     * @generated from enum value: CONNECTION_TIME_OUT = 4;
     */
    CONNECTION_TIME_OUT = 4,
    /**
     * @generated from enum value: REMATCH_SKIP_TEAMMATE = 5;
     */
    REMATCH_SKIP_TEAMMATE = 5,
    /**
     * @generated from enum value: OPT_INVITEE_4048 = 6;
     */
    OPT_INVITEE_4048 = 6,
    /**
     * @generated from enum value: TIME_CALIBRATE = 7;
     */
    TIME_CALIBRATE = 7,
    /**
     * @generated from enum value: LIVE_MATCH_IS_PLAY_BOOK_ENABLED = 8;
     */
    LIVE_MATCH_IS_PLAY_BOOK_ENABLED = 8,
    /**
     * @generated from enum value: LIVE_MATCH_PLAY_BOOK_IS_DESIGNATED_GIFT_ENABLED = 9;
     */
    LIVE_MATCH_PLAY_BOOK_IS_DESIGNATED_GIFT_ENABLED = 9,
    /**
     * @generated from enum value: LIVE_MATCH_PLAY_BOOK_IS_PUNISH_EFFECT_ENABLED = 10;
     */
    LIVE_MATCH_PLAY_BOOK_IS_PUNISH_EFFECT_ENABLED = 10,
    /**
     * @generated from enum value: MATCH_ICE_SHOWDOWN = 11;
     */
    MATCH_ICE_SHOWDOWN = 11
}
/**
 * Describes the enum webcast.model.data.BattleABTestType.
 */
export declare const BattleABTestTypeSchema: GenEnum<BattleABTestType>;
/**
 * @generated from enum webcast.model.data.BattleInviteType
 */
export declare enum BattleInviteType {
    /**
     * @generated from enum value: BATTLE_INVITE_TYPE_NORMAL = 0;
     */
    BATTLE_INVITE_TYPE_NORMAL = 0,
    /**
     * @generated from enum value: AGAIN = 1;
     */
    AGAIN = 1,
    /**
     * @generated from enum value: TEAM_PAIR_INVITE_R = 2;
     */
    TEAM_PAIR_INVITE_R = 2,
    /**
     * @generated from enum value: TEAM_PAIR_QUICK_RECOMMEND_COHOST_INVITEE = 3;
     */
    TEAM_PAIR_QUICK_RECOMMEND_COHOST_INVITEE = 3,
    /**
     * @generated from enum value: TEAM_PAIR_QUICK_RECOMMEND_SOLO_INVITEE = 4;
     */
    TEAM_PAIR_QUICK_RECOMMEND_SOLO_INVITEE = 4
}
/**
 * Describes the enum webcast.model.data.BattleInviteType.
 */
export declare const BattleInviteTypeSchema: GenEnum<BattleInviteType>;
/**
 * @generated from enum webcast.model.data.BattleResult_Result
 */
export declare enum BattleResult_Result {
    /**
     * @generated from enum value: WIN = 0;
     */
    WIN = 0,
    /**
     * @generated from enum value: LOSE = 1;
     */
    LOSE = 1,
    /**
     * @generated from enum value: DRAW = 2;
     */
    DRAW = 2
}
/**
 * Describes the enum webcast.model.data.BattleResult_Result.
 */
export declare const BattleResult_ResultSchema: GenEnum<BattleResult_Result>;
/**
 * @generated from enum webcast.model.data.BattleScene
 */
export declare enum BattleScene {
    /**
     * @generated from enum value: BATTLE_SCENE_NORMAL = 0;
     */
    BATTLE_SCENE_NORMAL = 0,
    /**
     * @generated from enum value: TEAM_PAIR = 1;
     */
    TEAM_PAIR = 1
}
/**
 * Describes the enum webcast.model.data.BattleScene.
 */
export declare const BattleSceneSchema: GenEnum<BattleScene>;
/**
 * @generated from enum webcast.model.data.BattleSettings_BattleStatus
 */
export declare enum BattleSettings_BattleStatus {
    /**
     * @generated from enum value: BATTLE_NOT_STARTED = 0;
     */
    BATTLE_NOT_STARTED = 0,
    /**
     * @generated from enum value: BATTLE_STARTED = 1;
     */
    BATTLE_STARTED = 1,
    /**
     * @generated from enum value: BATTLE_FINISHED = 2;
     */
    BATTLE_FINISHED = 2,
    /**
     * @generated from enum value: BATTLE_PUNISH_STARTED = 3;
     */
    BATTLE_PUNISH_STARTED = 3,
    /**
     * @generated from enum value: BATTLE_PUNISH_FINISHED = 4;
     */
    BATTLE_PUNISH_FINISHED = 4
}
/**
 * Describes the enum webcast.model.data.BattleSettings_BattleStatus.
 */
export declare const BattleSettings_BattleStatusSchema: GenEnum<BattleSettings_BattleStatus>;
/**
 * @generated from enum webcast.model.data.BattleType
 */
export declare enum BattleType {
    /**
     * @generated from enum value: UNKNOWN_BATTLE_TYPE = 0;
     */
    UNKNOWN_BATTLE_TYPE = 0,
    /**
     * @generated from enum value: NORMAL_BATTLE = 1;
     */
    NORMAL_BATTLE = 1,
    /**
     * @generated from enum value: TEAM_BATTLE = 2;
     */
    TEAM_BATTLE = 2,
    /**
     * @generated from enum value: INDIVIDUAL_BATTLE = 3;
     */
    INDIVIDUAL_BATTLE = 3,
    /**
     * @generated from enum value: NUM_1_VN = 4;
     */
    NUM_1_VN = 4,
    /**
     * @generated from enum value: TAKE_THE_STAGE = 51;
     */
    TAKE_THE_STAGE = 51,
    /**
     * @generated from enum value: GROUP_SHOW = 52;
     */
    GROUP_SHOW = 52,
    /**
     * @generated from enum value: BEANS = 53;
     */
    BEANS = 53,
    /**
     * @generated from enum value: GROUP_RANK_LIST = 54;
     */
    GROUP_RANK_LIST = 54
}
/**
 * Describes the enum webcast.model.data.BattleType.
 */
export declare const BattleTypeSchema: GenEnum<BattleType>;
/**
 * @generated from enum webcast.model.data.ClassType
 */
export declare enum ClassType {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: D_5 = 100;
     */
    D_5 = 100,
    /**
     * @generated from enum value: D_4 = 200;
     */
    D_4 = 200,
    /**
     * @generated from enum value: D_3 = 300;
     */
    D_3 = 300,
    /**
     * @generated from enum value: D_2 = 400;
     */
    D_2 = 400,
    /**
     * @generated from enum value: D_1 = 500;
     */
    D_1 = 500,
    /**
     * @generated from enum value: C_5 = 600;
     */
    C_5 = 600,
    /**
     * @generated from enum value: C_4 = 700;
     */
    C_4 = 700,
    /**
     * @generated from enum value: C_3 = 800;
     */
    C_3 = 800,
    /**
     * @generated from enum value: C_2 = 900;
     */
    C_2 = 900,
    /**
     * @generated from enum value: C_1 = 1000;
     */
    C_1 = 1000,
    /**
     * @generated from enum value: B_5 = 1100;
     */
    B_5 = 1100,
    /**
     * @generated from enum value: B_4 = 1200;
     */
    B_4 = 1200,
    /**
     * @generated from enum value: B_3 = 1300;
     */
    B_3 = 1300,
    /**
     * @generated from enum value: B_2 = 1400;
     */
    B_2 = 1400,
    /**
     * @generated from enum value: B_1 = 1500;
     */
    B_1 = 1500,
    /**
     * @generated from enum value: A_5 = 1600;
     */
    A_5 = 1600,
    /**
     * @generated from enum value: A_4 = 1700;
     */
    A_4 = 1700,
    /**
     * @generated from enum value: A_3 = 1800;
     */
    A_3 = 1800,
    /**
     * @generated from enum value: A_2 = 1900;
     */
    A_2 = 1900,
    /**
     * @generated from enum value: A_1 = 2000;
     */
    A_1 = 2000,
    /**
     * @generated from enum value: S = 2100;
     */
    S = 2100
}
/**
 * Describes the enum webcast.model.data.ClassType.
 */
export declare const ClassTypeSchema: GenEnum<ClassType>;
/**
 * @generated from enum webcast.model.data.CoHostPermissoinType
 */
export declare enum CoHostPermissoinType {
    /**
     * @generated from enum value: NO_PERM = 0;
     */
    NO_PERM = 0,
    /**
     * @generated from enum value: COHOST_PERM = 1;
     */
    COHOST_PERM = 1,
    /**
     * @generated from enum value: MULTI_HOST_PERM = 2;
     */
    MULTI_HOST_PERM = 2
}
/**
 * Describes the enum webcast.model.data.CoHostPermissoinType.
 */
export declare const CoHostPermissoinTypeSchema: GenEnum<CoHostPermissoinType>;
/**
 * @generated from enum webcast.model.data.CohostABTestType
 */
export declare enum CohostABTestType {
    /**
     * @generated from enum value: COHOST_AB_TEST_TYPE_UNKNOWN = 0;
     */
    COHOST_AB_TEST_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: LINK_TIME_OUT_STRATEGY = 1;
     */
    LINK_TIME_OUT_STRATEGY = 1,
    /**
     * @generated from enum value: COHOST_RESERVATION = 2;
     */
    COHOST_RESERVATION = 2,
    /**
     * @generated from enum value: QUICK_PAIR_NEW_ARCH_SWITCH = 3;
     */
    QUICK_PAIR_NEW_ARCH_SWITCH = 3,
    /**
     * @generated from enum value: COHOST_INVITATION_TEXT = 4;
     */
    COHOST_INVITATION_TEXT = 4
}
/**
 * Describes the enum webcast.model.data.CohostABTestType.
 */
export declare const CohostABTestTypeSchema: GenEnum<CohostABTestType>;
/**
 * @generated from enum webcast.model.data.CohostLayoutMode
 */
export declare enum CohostLayoutMode {
    /**
     * @generated from enum value: COHOST_LAYOUT_MODE_NORMAL = 0;
     */
    COHOST_LAYOUT_MODE_NORMAL = 0,
    /**
     * @generated from enum value: SCREEN_SHARE = 1;
     */
    SCREEN_SHARE = 1
}
/**
 * Describes the enum webcast.model.data.CohostLayoutMode.
 */
export declare const CohostLayoutModeSchema: GenEnum<CohostLayoutMode>;
/**
 * @generated from enum webcast.model.data.CohostNudgeInfo
 */
export declare enum CohostNudgeInfo {
    /**
     * @generated from enum value: COHOST_NUDGE_INFO_NONE = 0;
     */
    COHOST_NUDGE_INFO_NONE = 0,
    /**
     * @generated from enum value: YOUR_NUDGE = 1;
     */
    YOUR_NUDGE = 1,
    /**
     * @generated from enum value: NUDGED_YOU = 2;
     */
    NUDGED_YOU = 2
}
/**
 * Describes the enum webcast.model.data.CohostNudgeInfo.
 */
export declare const CohostNudgeInfoSchema: GenEnum<CohostNudgeInfo>;
/**
 * @generated from enum webcast.model.data.ContentSource
 */
export declare enum ContentSource {
    /**
     * @generated from enum value: CONTENT_SOURCE_UNKNOWN = 0;
     */
    CONTENT_SOURCE_UNKNOWN = 0,
    /**
     * @generated from enum value: CONTENT_SOURCE_NORMAL = 1;
     */
    CONTENT_SOURCE_NORMAL = 1,
    /**
     * @generated from enum value: CAMERA = 2;
     */
    CAMERA = 2
}
/**
 * Describes the enum webcast.model.data.ContentSource.
 */
export declare const ContentSourceSchema: GenEnum<ContentSource>;
/**
 * @generated from enum webcast.model.data.DetailBlockReason
 */
export declare enum DetailBlockReason {
    /**
     * @generated from enum value: BLOCK_REASON_NONE = 0;
     */
    BLOCK_REASON_NONE = 0,
    /**
     * @generated from enum value: IN_LINKMIC = 100;
     */
    IN_LINKMIC = 100,
    /**
     * @generated from enum value: MULTI_HOST_FULL = 101;
     */
    MULTI_HOST_FULL = 101,
    /**
     * @generated from enum value: IN_COHOST_LINKMIC = 102;
     */
    IN_COHOST_LINKMIC = 102,
    /**
     * @generated from enum value: DEAL_OTHER_INVITE = 103;
     */
    DEAL_OTHER_INVITE = 103,
    /**
     * @generated from enum value: DEAL_OTHER_APPLY = 104;
     */
    DEAL_OTHER_APPLY = 104,
    /**
     * @generated from enum value: IN_PK_STATUS = 105;
     */
    IN_PK_STATUS = 105,
    /**
     * @generated from enum value: SELF_IN_PK_STATUS = 106;
     */
    SELF_IN_PK_STATUS = 106,
    /**
     * @generated from enum value: IN_COHOST_INVITE_APPLY = 107;
     */
    IN_COHOST_INVITE_APPLY = 107,
    /**
     * @generated from enum value: IN_AUDIENCE_LINKMIC = 108;
     */
    IN_AUDIENCE_LINKMIC = 108,
    /**
     * @generated from enum value: WAITING_AUTO_MATCH = 109;
     */
    WAITING_AUTO_MATCH = 109,
    /**
     * @generated from enum value: INVITE_NEED_TO_JOIN = 110;
     */
    INVITE_NEED_TO_JOIN = 110,
    /**
     * @generated from enum value: JOIN_NEED_TO_INVITE = 111;
     */
    JOIN_NEED_TO_INVITE = 111,
    /**
     * @generated from enum value: IN_TAKE_THE_STAGE_STATUS = 112;
     */
    IN_TAKE_THE_STAGE_STATUS = 112,
    /**
     * @generated from enum value: SELF_IN_TAKE_THE_STAGE_STATUS = 113;
     */
    SELF_IN_TAKE_THE_STAGE_STATUS = 113,
    /**
     * @generated from enum value: IN_CATCH_BEANS = 114;
     */
    IN_CATCH_BEANS = 114,
    /**
     * @generated from enum value: SELF_IN_CATCH_BEANS = 115;
     */
    SELF_IN_CATCH_BEANS = 115,
    /**
     * @generated from enum value: JOINING_LAST_SEAT = 116;
     */
    JOINING_LAST_SEAT = 116,
    /**
     * @generated from enum value: IN_COHOST_X_MULTIGUEST = 117;
     */
    IN_COHOST_X_MULTIGUEST = 117,
    /**
     * @generated from enum value: SELF_IN_COHOST_X_MULTIGUEST = 118;
     */
    SELF_IN_COHOST_X_MULTIGUEST = 118,
    /**
     * @generated from enum value: NO_LINKMIC_PERMISSION = 200;
     */
    NO_LINKMIC_PERMISSION = 200,
    /**
     * @generated from enum value: ANCHOR_LINKMIC_SETTING_CLOSED = 202;
     */
    ANCHOR_LINKMIC_SETTING_CLOSED = 202,
    /**
     * @generated from enum value: ANCHOR_LINKMIC_REFUSE_NOT_FOLLOWER = 203;
     */
    ANCHOR_LINKMIC_REFUSE_NOT_FOLLOWER = 203,
    /**
     * @generated from enum value: ANCHOR_LINKMIC_BLOCK_INVITATION_OF_LIVE = 204;
     */
    ANCHOR_LINKMIC_BLOCK_INVITATION_OF_LIVE = 204,
    /**
     * @generated from enum value: ANCHOR_LINKMIC_REFUSE_FRIEND_INVITE = 205;
     */
    ANCHOR_LINKMIC_REFUSE_FRIEND_INVITE = 205,
    /**
     * @generated from enum value: ANCHOR_LINKMIC_REFUSE_FRIEND_APPLY = 206;
     */
    ANCHOR_LINKMIC_REFUSE_FRIEND_APPLY = 206,
    /**
     * @generated from enum value: ANCHOR_LINKMIC_REFUSE_NOT_FRIEND_INVITE = 207;
     */
    ANCHOR_LINKMIC_REFUSE_NOT_FRIEND_INVITE = 207,
    /**
     * @generated from enum value: ANCHOR_LINKMIC_REFUSE_NOT_FRIEND_APPLY = 208;
     */
    ANCHOR_LINKMIC_REFUSE_NOT_FRIEND_APPLY = 208,
    /**
     * @generated from enum value: ANCHOR_LINKMIC_BLOCK_INVITATION_OF_MULTI_HOST = 209;
     */
    ANCHOR_LINKMIC_BLOCK_INVITATION_OF_MULTI_HOST = 209,
    /**
     * @generated from enum value: ANCHOR_LINKMIC_BLOCK_APPLY_OF_MULTI_HOST = 210;
     */
    ANCHOR_LINKMIC_BLOCK_APPLY_OF_MULTI_HOST = 210,
    /**
     * @generated from enum value: ROOM_PAUSED = 300;
     */
    ROOM_PAUSED = 300,
    /**
     * @generated from enum value: LIVE_TYPE_AUDIO = 301;
     */
    LIVE_TYPE_AUDIO = 301,
    /**
     * @generated from enum value: ROOM_INTERACTION_CONFLICT = 302;
     */
    ROOM_INTERACTION_CONFLICT = 302,
    /**
     * @generated from enum value: RIVAL_VERSION_NOT_SUPPORT = 303;
     */
    RIVAL_VERSION_NOT_SUPPORT = 303,
    /**
     * @generated from enum value: SELF_VERSION_NOT_SUPPORT = 304;
     */
    SELF_VERSION_NOT_SUPPORT = 304,
    /**
     * @generated from enum value: MATURE_THEME_MISMATCH = 305;
     */
    MATURE_THEME_MISMATCH = 305,
    /**
     * @generated from enum value: SELF_IN_OFFICIAL_CHANNEL = 306;
     */
    SELF_IN_OFFICIAL_CHANNEL = 306,
    /**
     * @generated from enum value: RIVAL_IN_OFFICIAL_CHANNEL = 307;
     */
    RIVAL_IN_OFFICIAL_CHANNEL = 307,
    /**
     * @generated from enum value: IN_OFFICIAL_BACKUP_CHANNEL = 308;
     */
    IN_OFFICIAL_BACKUP_CHANNEL = 308,
    /**
     * @generated from enum value: RIVAL_RESERVE_FULL = 309;
     */
    RIVAL_RESERVE_FULL = 309,
    /**
     * @generated from enum value: ANCHOR_NOT_LIVING = 310;
     */
    ANCHOR_NOT_LIVING = 310,
    /**
     * @generated from enum value: ANCHOR_IS_SELF = 311;
     */
    ANCHOR_IS_SELF = 311,
    /**
     * @generated from enum value: PRIVATE_ROOM = 312;
     */
    PRIVATE_ROOM = 312,
    /**
     * @generated from enum value: BLOCKED_BY_RIVAL = 313;
     */
    BLOCKED_BY_RIVAL = 313,
    /**
     * @generated from enum value: SELF_BLOCKED_RIVAL = 314;
     */
    SELF_BLOCKED_RIVAL = 314,
    /**
     * @generated from enum value: VIEWER_REGION_NOT_SUPPORT = 315;
     */
    VIEWER_REGION_NOT_SUPPORT = 315,
    /**
     * @generated from enum value: SUBSCRIBER_ROOM = 316;
     */
    SUBSCRIBER_ROOM = 316,
    /**
     * @generated from enum value: REGIONAL_BLOCK = 317;
     */
    REGIONAL_BLOCK = 317,
    /**
     * @generated from enum value: PENALTY_BANNED = 318;
     */
    PENALTY_BANNED = 318,
    /**
     * @generated from enum value: BLOCK_PROGRAM_LIVE_TAB_ROOM = 319;
     */
    BLOCK_PROGRAM_LIVE_TAB_ROOM = 319,
    /**
     * @generated from enum value: USER_NOT_ONLINE = 320;
     */
    USER_NOT_ONLINE = 320,
    /**
     * @generated from enum value: IN_LIVE_STUDIO = 321;
     */
    IN_LIVE_STUDIO = 321,
    /**
     * @generated from enum value: ANCHOR_NO_FEATURE_ACCESS = 323;
     */
    ANCHOR_NO_FEATURE_ACCESS = 323,
    /**
     * @generated from enum value: NETWORK_ERROR = 400;
     */
    NETWORK_ERROR = 400,
    /**
     * @generated from enum value: ROOM_FILTER_ERROR = 401;
     */
    ROOM_FILTER_ERROR = 401
}
/**
 * Describes the enum webcast.model.data.DetailBlockReason.
 */
export declare const DetailBlockReasonSchema: GenEnum<DetailBlockReason>;
/**
 * @generated from enum webcast.model.data.DisplayControl_HorizontalOnclickTriggerType
 */
export declare enum DisplayControl_HorizontalOnclickTriggerType {
    /**
     * @generated from enum value: ONCLICK_TRIGGER_TYPE_UNKNOWN = 0;
     */
    ONCLICK_TRIGGER_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: ONCLICK_TRIGGER_TYPE_LEFT = 1;
     */
    ONCLICK_TRIGGER_TYPE_LEFT = 1,
    /**
     * @generated from enum value: ONCLICK_TRIGGER_TYPE_MIDDLE = 2;
     */
    ONCLICK_TRIGGER_TYPE_MIDDLE = 2,
    /**
     * @generated from enum value: ONCLICK_TRIGGER_TYPE_RIGHT = 3;
     */
    ONCLICK_TRIGGER_TYPE_RIGHT = 3,
    /**
     * @generated from enum value: ONCLICK_TRIGGER_TYPE_ALL_AREA = 4;
     */
    ONCLICK_TRIGGER_TYPE_ALL_AREA = 4
}
/**
 * Describes the enum webcast.model.data.DisplayControl_HorizontalOnclickTriggerType.
 */
export declare const DisplayControl_HorizontalOnclickTriggerTypeSchema: GenEnum<DisplayControl_HorizontalOnclickTriggerType>;
/**
 * @generated from enum webcast.model.data.DisplayStatus
 */
export declare enum DisplayStatus {
    /**
     * @generated from enum value: DISPLAY_STATUS_NORMAL = 0;
     */
    DISPLAY_STATUS_NORMAL = 0,
    /**
     * @generated from enum value: SHADOW = 1;
     */
    SHADOW = 1
}
/**
 * Describes the enum webcast.model.data.DisplayStatus.
 */
export declare const DisplayStatusSchema: GenEnum<DisplayStatus>;
/**
 * @generated from enum webcast.model.data.EmotePrivateType
 */
export declare enum EmotePrivateType {
    /**
     * @generated from enum value: EMOTE_PRIVATE_TYPE_NORMAL = 0;
     */
    EMOTE_PRIVATE_TYPE_NORMAL = 0,
    /**
     * @generated from enum value: SUB_WAVE = 1;
     */
    SUB_WAVE = 1,
    /**
     * @generated from enum value: GUESSING = 101;
     */
    GUESSING = 101
}
/**
 * Describes the enum webcast.model.data.EmotePrivateType.
 */
export declare const EmotePrivateTypeSchema: GenEnum<EmotePrivateType>;
/**
 * @generated from enum webcast.model.data.EmoteScene
 */
export declare enum EmoteScene {
    /**
     * @generated from enum value: SUBSCRIPTION = 0;
     */
    SUBSCRIPTION = 0,
    /**
     * @generated from enum value: GAME = 1;
     */
    GAME = 1,
    /**
     * @generated from enum value: FANS_CLUB = 2;
     */
    FANS_CLUB = 2
}
/**
 * Describes the enum webcast.model.data.EmoteScene.
 */
export declare const EmoteSceneSchema: GenEnum<EmoteScene>;
/**
 * @generated from enum webcast.model.data.EmoteType
 */
export declare enum EmoteType {
    /**
     * @generated from enum value: EMOTE_TYPE_NORMAL = 0;
     */
    EMOTE_TYPE_NORMAL = 0,
    /**
     * @generated from enum value: WITH_STICKER = 1;
     */
    WITH_STICKER = 1,
    /**
     * @generated from enum value: EMOTE_TYPE_FANS = 2;
     */
    EMOTE_TYPE_FANS = 2
}
/**
 * Describes the enum webcast.model.data.EmoteType.
 */
export declare const EmoteTypeSchema: GenEnum<EmoteType>;
/**
 * @generated from enum webcast.model.data.EntranceGroupType
 */
export declare enum EntranceGroupType {
    /**
     * @generated from enum value: ENTRANCE_GROUP_TYPE_DEFAULT = 0;
     */
    ENTRANCE_GROUP_TYPE_DEFAULT = 0,
    /**
     * @generated from enum value: GIFT = 1;
     */
    GIFT = 1,
    /**
     * @generated from enum value: E_COMMERCE = 2;
     */
    E_COMMERCE = 2,
    /**
     * @generated from enum value: ENTRANCE_GROUP_TYPE_GAME = 3;
     */
    ENTRANCE_GROUP_TYPE_GAME = 3
}
/**
 * Describes the enum webcast.model.data.EntranceGroupType.
 */
export declare const EntranceGroupTypeSchema: GenEnum<EntranceGroupType>;
/**
 * @generated from enum webcast.model.data.EnvelopeBusinessType
 */
export declare enum EnvelopeBusinessType {
    /**
     * @generated from enum value: BUSINESS_TYPE_UNKNOWN = 0;
     */
    BUSINESS_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: BUSINESS_TYPE_USER_DIAMOND = 1;
     */
    BUSINESS_TYPE_USER_DIAMOND = 1,
    /**
     * @generated from enum value: BUSINESS_TYPE_PLATFORM_DIAMOND = 2;
     */
    BUSINESS_TYPE_PLATFORM_DIAMOND = 2,
    /**
     * @generated from enum value: BUSINESS_TYPE_PLATFORM_SHELL = 3;
     */
    BUSINESS_TYPE_PLATFORM_SHELL = 3,
    /**
     * @generated from enum value: BUSINESS_TYPE_PORTAL = 4;
     */
    BUSINESS_TYPE_PORTAL = 4,
    /**
     * @generated from enum value: BUSINESS_TYPE_PLATFORM_MER_CH = 5;
     */
    BUSINESS_TYPE_PLATFORM_MER_CH = 5,
    /**
     * @generated from enum value: BUSINESS_TYPE_E_OY_DIAMOND = 6;
     */
    BUSINESS_TYPE_E_OY_DIAMOND = 6,
    /**
     * @generated from enum value: BUSINESS_TYPE_FANCLUB_GT_M = 7;
     */
    BUSINESS_TYPE_FANCLUB_GT_M = 7,
    /**
     * @generated from enum value: BUSINESS_TYPE_PLATFORM_PORTAL = 9;
     */
    BUSINESS_TYPE_PLATFORM_PORTAL = 9,
    /**
     * @generated from enum value: BUSINESS_TYPE_EO_YG_TM_POPULARITY_TICKET = 10;
     */
    BUSINESS_TYPE_EO_YG_TM_POPULARITY_TICKET = 10,
    /**
     * @generated from enum value: BUSINESS_TYPE_EO_YG_TM_REVENUE_DIAMOND = 11;
     */
    BUSINESS_TYPE_EO_YG_TM_REVENUE_DIAMOND = 11,
    /**
     * @generated from enum value: BUSINESS_TYPE_EO_YG_TM_GAME_DIAMOND = 12;
     */
    BUSINESS_TYPE_EO_YG_TM_GAME_DIAMOND = 12,
    /**
     * @generated from enum value: BUSINESS_TYPE_CREATOR_LEAGUE_PROMOTION_GT_M = 13;
     */
    BUSINESS_TYPE_CREATOR_LEAGUE_PROMOTION_GT_M = 13,
    /**
     * @generated from enum value: BUSINESS_TYPE_MOY_GT_M_POPULARITY_TICKET = 14;
     */
    BUSINESS_TYPE_MOY_GT_M_POPULARITY_TICKET = 14,
    /**
     * @generated from enum value: SUPER_FAN_BOX = 19;
     */
    SUPER_FAN_BOX = 19
}
/**
 * Describes the enum webcast.model.data.EnvelopeBusinessType.
 */
export declare const EnvelopeBusinessTypeSchema: GenEnum<EnvelopeBusinessType>;
/**
 * @generated from enum webcast.model.data.EnvelopeDisplay
 */
export declare enum EnvelopeDisplay {
    /**
     * @generated from enum value: ENVELOPE_DISPLAY_UNKNOWN = 0;
     */
    ENVELOPE_DISPLAY_UNKNOWN = 0,
    /**
     * @generated from enum value: NEW = 1;
     */
    NEW = 1,
    /**
     * @generated from enum value: HIDE = 2;
     */
    HIDE = 2
}
/**
 * Describes the enum webcast.model.data.EnvelopeDisplay.
 */
export declare const EnvelopeDisplaySchema: GenEnum<EnvelopeDisplay>;
/**
 * @generated from enum webcast.model.data.EnvelopeFollowShowStatus
 */
export declare enum EnvelopeFollowShowStatus {
    /**
     * @generated from enum value: ENVELOPE_FOLLOW_SHOW_UNKNOWN = 0;
     */
    ENVELOPE_FOLLOW_SHOW_UNKNOWN = 0,
    /**
     * @generated from enum value: ENVELOPE_FOLLOW_SHOW = 1;
     */
    ENVELOPE_FOLLOW_SHOW = 1,
    /**
     * @generated from enum value: ENVELOPE_FOLLOW_NOT_SHOW = 2;
     */
    ENVELOPE_FOLLOW_NOT_SHOW = 2
}
/**
 * Describes the enum webcast.model.data.EnvelopeFollowShowStatus.
 */
export declare const EnvelopeFollowShowStatusSchema: GenEnum<EnvelopeFollowShowStatus>;
/**
 * @generated from enum webcast.model.data.GamepadTaskType
 */
export declare enum GamepadTaskType {
    /**
     * @generated from enum value: PARTNERSHIP = 0;
     */
    PARTNERSHIP = 0,
    /**
     * @generated from enum value: PUBLISHER = 1;
     */
    PUBLISHER = 1,
    /**
     * @generated from enum value: EVENT = 2;
     */
    EVENT = 2,
    /**
     * @generated from enum value: ORG = 3;
     */
    ORG = 3
}
/**
 * Describes the enum webcast.model.data.GamepadTaskType.
 */
export declare const GamepadTaskTypeSchema: GenEnum<GamepadTaskType>;
/**
 * @generated from enum webcast.model.data.GiftPanelBeaconBubbleType
 */
export declare enum GiftPanelBeaconBubbleType {
    /**
     * @generated from enum value: GIFT_PANEL_BEACON_BUBBLE_TYPE_UNKNOWN = 0;
     */
    GIFT_PANEL_BEACON_BUBBLE_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: GIFT_PANEL_BEACON_BUBBLE_TYPE_DEFAULT = 1;
     */
    GIFT_PANEL_BEACON_BUBBLE_TYPE_DEFAULT = 1,
    /**
     * @generated from enum value: LYNX_DEFAULT = 2;
     */
    LYNX_DEFAULT = 2,
    /**
     * @generated from enum value: LIVE_GOAL = 3;
     */
    LIVE_GOAL = 3,
    /**
     * @generated from enum value: GIFT_GALLERY = 4;
     */
    GIFT_GALLERY = 4,
    /**
     * @generated from enum value: UG_HIGH_PRIORITY = 5;
     */
    UG_HIGH_PRIORITY = 5,
    /**
     * @generated from enum value: UG_LOW_PRIORITY = 6;
     */
    UG_LOW_PRIORITY = 6,
    /**
     * @generated from enum value: VIEWER_PICKS = 7;
     */
    VIEWER_PICKS = 7
}
/**
 * Describes the enum webcast.model.data.GiftPanelBeaconBubbleType.
 */
export declare const GiftPanelBeaconBubbleTypeSchema: GenEnum<GiftPanelBeaconBubbleType>;
/**
 * @generated from enum webcast.model.data.GiftPermissionType
 */
export declare enum GiftPermissionType {
    /**
     * @generated from enum value: UNKNOWN_TYPE = 0;
     */
    UNKNOWN_TYPE = 0,
    /**
     * @generated from enum value: NO_GIFT_PERMISSION = 1;
     */
    NO_GIFT_PERMISSION = 1,
    /**
     * @generated from enum value: ANCHOR_CLOSE = 2;
     */
    ANCHOR_CLOSE = 2,
    /**
     * @generated from enum value: HAS_GIFT_PERMISSION = 3;
     */
    HAS_GIFT_PERMISSION = 3,
    /**
     * @generated from enum value: ANCHOR_BANNED = 4;
     */
    ANCHOR_BANNED = 4
}
/**
 * Describes the enum webcast.model.data.GiftPermissionType.
 */
export declare const GiftPermissionTypeSchema: GenEnum<GiftPermissionType>;
/**
 * @generated from enum webcast.model.data.GiftShowType
 */
export declare enum GiftShowType {
    /**
     * @generated from enum value: GIFT_SHOW_DEFAULT = 0;
     */
    GIFT_SHOW_DEFAULT = 0,
    /**
     * @generated from enum value: GIFT_SHOW_NAME = 1;
     */
    GIFT_SHOW_NAME = 1
}
/**
 * Describes the enum webcast.model.data.GiftShowType.
 */
export declare const GiftShowTypeSchema: GenEnum<GiftShowType>;
/**
 * @generated from enum webcast.model.data.GiftStruct_SchemeGiftType
 */
export declare enum GiftStruct_SchemeGiftType {
    /**
     * @generated from enum value: SCHEME_GIFT_TYPE_NONE = 0;
     */
    SCHEME_GIFT_TYPE_NONE = 0,
    /**
     * @generated from enum value: SCHEME_GIFT_TYPE_MAGIC = 1;
     */
    SCHEME_GIFT_TYPE_MAGIC = 1
}
/**
 * Describes the enum webcast.model.data.GiftStruct_SchemeGiftType.
 */
export declare const GiftStruct_SchemeGiftTypeSchema: GenEnum<GiftStruct_SchemeGiftType>;
/**
 * @generated from enum webcast.model.data.GiftTrayStyle
 */
export declare enum GiftTrayStyle {
    /**
     * @generated from enum value: GIFT_TRAY_STYLE_DEFAULT = 0;
     */
    GIFT_TRAY_STYLE_DEFAULT = 0,
    /**
     * @generated from enum value: GALLERY_REPURCHASE_FULL = 1;
     */
    GALLERY_REPURCHASE_FULL = 1,
    /**
     * @generated from enum value: GALLERY_REPURCHASE_BACKGROUND = 2;
     */
    GALLERY_REPURCHASE_BACKGROUND = 2
}
/**
 * Describes the enum webcast.model.data.GiftTrayStyle.
 */
export declare const GiftTrayStyleSchema: GenEnum<GiftTrayStyle>;
/**
 * @generated from enum webcast.model.data.GoalMessageSource
 */
export declare enum GoalMessageSource {
    /**
     * @generated from enum value: GOAL_MESSAGE_SOURCE_UNKNOWN = 0;
     */
    GOAL_MESSAGE_SOURCE_UNKNOWN = 0,
    /**
     * @generated from enum value: COMMIT = 1;
     */
    COMMIT = 1,
    /**
     * @generated from enum value: PROGRESS_UPDATE = 2;
     */
    PROGRESS_UPDATE = 2,
    /**
     * @generated from enum value: PIN = 3;
     */
    PIN = 3,
    /**
     * @generated from enum value: UNPIN = 4;
     */
    UNPIN = 4,
    /**
     * @generated from enum value: REVIEW_CALLBACK = 5;
     */
    REVIEW_CALLBACK = 5,
    /**
     * @generated from enum value: SUSPEND = 6;
     */
    SUSPEND = 6,
    /**
     * @generated from enum value: CHALLENGE_PROMPT = 7;
     */
    CHALLENGE_PROMPT = 7
}
/**
 * Describes the enum webcast.model.data.GoalMessageSource.
 */
export declare const GoalMessageSourceSchema: GenEnum<GoalMessageSource>;
/**
 * @generated from enum webcast.model.data.GuestMicCameraChangeScene
 */
export declare enum GuestMicCameraChangeScene {
    /**
     * @generated from enum value: CHANGE_SCENE_UNKNOWN = 0;
     */
    CHANGE_SCENE_UNKNOWN = 0,
    /**
     * @generated from enum value: LIVE_SHOW_BY_ANCHOR_AUTO = 1;
     */
    LIVE_SHOW_BY_ANCHOR_AUTO = 1,
    /**
     * @generated from enum value: LIVE_SHOW_BY_SERVER_NORMAL = 2;
     */
    LIVE_SHOW_BY_SERVER_NORMAL = 2,
    /**
     * @generated from enum value: LIVE_SHOW_BY_SHOW_END = 3;
     */
    LIVE_SHOW_BY_SHOW_END = 3,
    /**
     * @generated from enum value: COHOST_WITH_GUEST = 4;
     */
    COHOST_WITH_GUEST = 4
}
/**
 * Describes the enum webcast.model.data.GuestMicCameraChangeScene.
 */
export declare const GuestMicCameraChangeSceneSchema: GenEnum<GuestMicCameraChangeScene>;
/**
 * @generated from enum webcast.model.data.GuestMicCameraManageOp
 */
export declare enum GuestMicCameraManageOp {
    /**
     * @generated from enum value: OPEN_MIC = 0;
     */
    OPEN_MIC = 0,
    /**
     * @generated from enum value: OPEN_CAMERA = 1;
     */
    OPEN_CAMERA = 1,
    /**
     * @generated from enum value: CLOSE_MIC = 2;
     */
    CLOSE_MIC = 2,
    /**
     * @generated from enum value: CLOSE_CAMERA = 3;
     */
    CLOSE_CAMERA = 3,
    /**
     * @generated from enum value: CLOSE_MIC_PUNISH = 4;
     */
    CLOSE_MIC_PUNISH = 4
}
/**
 * Describes the enum webcast.model.data.GuestMicCameraManageOp.
 */
export declare const GuestMicCameraManageOpSchema: GenEnum<GuestMicCameraManageOp>;
/**
 * @generated from enum webcast.model.data.HashtagNamespace
 */
export declare enum HashtagNamespace {
    /**
     * @generated from enum value: GLOBAL = 0;
     */
    GLOBAL = 0,
    /**
     * @generated from enum value: GAMING = 1;
     */
    GAMING = 1
}
/**
 * Describes the enum webcast.model.data.HashtagNamespace.
 */
export declare const HashtagNamespaceSchema: GenEnum<HashtagNamespace>;
/**
 * @generated from enum webcast.model.data.HorizontalPaddingRule
 */
export declare enum HorizontalPaddingRule {
    /**
     * @generated from enum value: USE_MIDDLE_AND_WIDTH = 0;
     */
    USE_MIDDLE_AND_WIDTH = 0,
    /**
     * @generated from enum value: USE_LEFT_AND_MIDDLE_AND_RIGHT = 1;
     */
    USE_LEFT_AND_MIDDLE_AND_RIGHT = 1
}
/**
 * Describes the enum webcast.model.data.HorizontalPaddingRule.
 */
export declare const HorizontalPaddingRuleSchema: GenEnum<HorizontalPaddingRule>;
/**
 * @generated from enum webcast.model.data.IceShowdownSetting
 */
export declare enum IceShowdownSetting {
    /**
     * @generated from enum value: ICE_SHOWDOWN_OFF = 0;
     */
    ICE_SHOWDOWN_OFF = 0,
    /**
     * @generated from enum value: ICE_SHOWDOWN_MANUAL = 1;
     */
    ICE_SHOWDOWN_MANUAL = 1,
    /**
     * @generated from enum value: ICE_SHOWDOWN_SYSTEM = 2;
     */
    ICE_SHOWDOWN_SYSTEM = 2
}
/**
 * Describes the enum webcast.model.data.IceShowdownSetting.
 */
export declare const IceShowdownSettingSchema: GenEnum<IceShowdownSetting>;
/**
 * @generated from enum webcast.model.data.LinkListStatus
 */
export declare enum LinkListStatus {
    /**
     * @generated from enum value: STATUS_UN_KOWN = 0;
     */
    STATUS_UN_KOWN = 0,
    /**
     * @generated from enum value: STATUS_WAITING = 1;
     */
    STATUS_WAITING = 1,
    /**
     * @generated from enum value: STATUS_LINKED = 2;
     */
    STATUS_LINKED = 2,
    /**
     * @generated from enum value: STATUS_FINISHED = 3;
     */
    STATUS_FINISHED = 3,
    /**
     * @generated from enum value: STATUS_WAITING_OR_LINKED = 4;
     */
    STATUS_WAITING_OR_LINKED = 4
}
/**
 * Describes the enum webcast.model.data.LinkListStatus.
 */
export declare const LinkListStatusSchema: GenEnum<LinkListStatus>;
/**
 * @generated from enum webcast.model.data.LinkRoleType
 */
export declare enum LinkRoleType {
    /**
     * @generated from enum value: TYPE_ROLE_TYPE_UN_KOWN = 0;
     */
    TYPE_ROLE_TYPE_UN_KOWN = 0,
    /**
     * @generated from enum value: TYPE_LEADER = 1;
     */
    TYPE_LEADER = 1,
    /**
     * @generated from enum value: TYPE_PLAYER = 2;
     */
    TYPE_PLAYER = 2,
    /**
     * @generated from enum value: TYPE_INVITEE = 3;
     */
    TYPE_INVITEE = 3,
    /**
     * @generated from enum value: TYPE_APP_LIER = 4;
     */
    TYPE_APP_LIER = 4
}
/**
 * Describes the enum webcast.model.data.LinkRoleType.
 */
export declare const LinkRoleTypeSchema: GenEnum<LinkRoleType>;
/**
 * @generated from enum webcast.model.data.LinkSilenceStatus
 */
export declare enum LinkSilenceStatus {
    /**
     * @generated from enum value: STATUS_UN_SILENCE = 0;
     */
    STATUS_UN_SILENCE = 0,
    /**
     * @generated from enum value: STATUS_SILENCE_BY_SELF = 1;
     */
    STATUS_SILENCE_BY_SELF = 1,
    /**
     * @generated from enum value: STATUS_SILENCE_BY_OWNER = 2;
     */
    STATUS_SILENCE_BY_OWNER = 2
}
/**
 * Describes the enum webcast.model.data.LinkSilenceStatus.
 */
export declare const LinkSilenceStatusSchema: GenEnum<LinkSilenceStatus>;
/**
 * @generated from enum webcast.model.data.LinkType
 */
export declare enum LinkType {
    /**
     * @generated from enum value: TYPE_UNKNOWN = 0;
     */
    TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: TYPE_VIDEO = 1;
     */
    TYPE_VIDEO = 1,
    /**
     * @generated from enum value: TYPE_AUDIO = 2;
     */
    TYPE_AUDIO = 2,
    /**
     * @generated from enum value: TYPE_VIRTUAL = 3;
     */
    TYPE_VIRTUAL = 3
}
/**
 * Describes the enum webcast.model.data.LinkType.
 */
export declare const LinkTypeSchema: GenEnum<LinkType>;
/**
 * @generated from enum webcast.model.data.LinkUserType
 */
export declare enum LinkUserType {
    /**
     * @generated from enum value: LINK_USER_TYPE_DEFAULT = 0;
     */
    LINK_USER_TYPE_DEFAULT = 0,
    /**
     * @generated from enum value: KARAOKE = 1;
     */
    KARAOKE = 1
}
/**
 * Describes the enum webcast.model.data.LinkUserType.
 */
export declare const LinkUserTypeSchema: GenEnum<LinkUserType>;
/**
 * @generated from enum webcast.model.data.LinkmicApplierSortSetting
 */
export declare enum LinkmicApplierSortSetting {
    /**
     * @generated from enum value: LINKMIC_APP_LIER_SORT_SETTING_NONE = 0;
     */
    LINKMIC_APP_LIER_SORT_SETTING_NONE = 0,
    /**
     * @generated from enum value: LINKMIC_APP_LIER_SORT_SETTING_BY_GIFT_SCORE = 1;
     */
    LINKMIC_APP_LIER_SORT_SETTING_BY_GIFT_SCORE = 1
}
/**
 * Describes the enum webcast.model.data.LinkmicApplierSortSetting.
 */
export declare const LinkmicApplierSortSettingSchema: GenEnum<LinkmicApplierSortSetting>;
/**
 * @generated from enum webcast.model.data.LinkmicGiftExpressionStrategy
 */
export declare enum LinkmicGiftExpressionStrategy {
    /**
     * @generated from enum value: CONTROL_V1 = 0;
     */
    CONTROL_V1 = 0,
    /**
     * @generated from enum value: EXPERIMENT_V1 = 1;
     */
    EXPERIMENT_V1 = 1,
    /**
     * @generated from enum value: EXPERIMENT_V2 = 2;
     */
    EXPERIMENT_V2 = 2
}
/**
 * Describes the enum webcast.model.data.LinkmicGiftExpressionStrategy.
 */
export declare const LinkmicGiftExpressionStrategySchema: GenEnum<LinkmicGiftExpressionStrategy>;
/**
 * @generated from enum webcast.model.data.LinkmicMultiLiveEnum
 */
export declare enum LinkmicMultiLiveEnum {
    /**
     * @generated from enum value: LINKMIC_MULTI_LIVE_ENUM_DEFAULT = 0;
     */
    LINKMIC_MULTI_LIVE_ENUM_DEFAULT = 0,
    /**
     * @generated from enum value: ANCHOR_USE_NEW_LAYOUT = 1;
     */
    ANCHOR_USE_NEW_LAYOUT = 1
}
/**
 * Describes the enum webcast.model.data.LinkmicMultiLiveEnum.
 */
export declare const LinkmicMultiLiveEnumSchema: GenEnum<LinkmicMultiLiveEnum>;
/**
 * @generated from enum webcast.model.data.LinkmicPlayType
 */
export declare enum LinkmicPlayType {
    /**
     * @generated from enum value: PLAY_TYPE_INVITE = 0;
     */
    PLAY_TYPE_INVITE = 0,
    /**
     * @generated from enum value: PLAY_TYPE_APPLY = 1;
     */
    PLAY_TYPE_APPLY = 1,
    /**
     * @generated from enum value: PLAY_TYPE_RESERVE = 2;
     */
    PLAY_TYPE_RESERVE = 2,
    /**
     * @generated from enum value: PLAY_TYPE_OFF_LIVE = 3;
     */
    PLAY_TYPE_OFF_LIVE = 3,
    /**
     * @generated from enum value: PLAY_TYPE_OFFLINE = 4;
     */
    PLAY_TYPE_OFFLINE = 4
}
/**
 * Describes the enum webcast.model.data.LinkmicPlayType.
 */
export declare const LinkmicPlayTypeSchema: GenEnum<LinkmicPlayType>;
/**
 * @generated from enum webcast.model.data.LinkmicReplyType
 */
export declare enum LinkmicReplyType {
    /**
     * @generated from enum value: RT_UNKNOWN = 0;
     */
    RT_UNKNOWN = 0,
    /**
     * @generated from enum value: RT_AGREE = 1;
     */
    RT_AGREE = 1,
    /**
     * @generated from enum value: RT_REJECT = 2;
     */
    RT_REJECT = 2
}
/**
 * Describes the enum webcast.model.data.LinkmicReplyType.
 */
export declare const LinkmicReplyTypeSchema: GenEnum<LinkmicReplyType>;
/**
 * @generated from enum webcast.model.data.LinkmicShareRevenueSetting
 */
export declare enum LinkmicShareRevenueSetting {
    /**
     * @generated from enum value: LINKMIC_SHARE_REVENUE_NOT_SET = 0;
     */
    LINKMIC_SHARE_REVENUE_NOT_SET = 0,
    /**
     * @generated from enum value: LINKMIC_SHARE_REVENUE_OPEN = 1;
     */
    LINKMIC_SHARE_REVENUE_OPEN = 1,
    /**
     * @generated from enum value: LINKMIC_SHARE_REVENUE_CLOSE = 2;
     */
    LINKMIC_SHARE_REVENUE_CLOSE = 2
}
/**
 * Describes the enum webcast.model.data.LinkmicShareRevenueSetting.
 */
export declare const LinkmicShareRevenueSettingSchema: GenEnum<LinkmicShareRevenueSetting>;
/**
 * @generated from enum webcast.model.data.LinkmicStatus
 */
export declare enum LinkmicStatus {
    /**
     * @generated from enum value: DISABLE = 0;
     */
    DISABLE = 0,
    /**
     * @generated from enum value: ENABLE = 1;
     */
    ENABLE = 1,
    /**
     * @generated from enum value: JUST_FOLLOWING = 2;
     */
    JUST_FOLLOWING = 2,
    /**
     * @generated from enum value: MULTI_LINKING = 3;
     */
    MULTI_LINKING = 3,
    /**
     * @generated from enum value: MULTI_LINKING_ONLY_FOLLOWING = 4;
     */
    MULTI_LINKING_ONLY_FOLLOWING = 4
}
/**
 * Describes the enum webcast.model.data.LinkmicStatus.
 */
export declare const LinkmicStatusSchema: GenEnum<LinkmicStatus>;
/**
 * @generated from enum webcast.model.data.LinkmicUserSettingDisableVideoLinkmic
 */
export declare enum LinkmicUserSettingDisableVideoLinkmic {
    /**
     * @generated from enum value: UN_SET = 0;
     */
    UN_SET = 0,
    /**
     * @generated from enum value: OPEN_AND_SHOW = 1;
     */
    OPEN_AND_SHOW = 1,
    /**
     * @generated from enum value: CLOSE_AND_SHOW = 2;
     */
    CLOSE_AND_SHOW = 2,
    /**
     * @generated from enum value: OPEN_AND_HIDE = 3;
     */
    OPEN_AND_HIDE = 3,
    /**
     * @generated from enum value: CLOSE_AND_HIDE = 4;
     */
    CLOSE_AND_HIDE = 4
}
/**
 * Describes the enum webcast.model.data.LinkmicUserSettingDisableVideoLinkmic.
 */
export declare const LinkmicUserSettingDisableVideoLinkmicSchema: GenEnum<LinkmicUserSettingDisableVideoLinkmic>;
/**
 * @generated from enum webcast.model.data.LinkmicUserSettingLayout
 */
export declare enum LinkmicUserSettingLayout {
    /**
     * @generated from enum value: GRID = 0;
     */
    GRID = 0,
    /**
     * @generated from enum value: FLOATING = 1;
     */
    FLOATING = 1
}
/**
 * Describes the enum webcast.model.data.LinkmicUserSettingLayout.
 */
export declare const LinkmicUserSettingLayoutSchema: GenEnum<LinkmicUserSettingLayout>;
/**
 * @generated from enum webcast.model.data.LinkmicUserSettingMultiGuestApplyAutoApprove
 */
export declare enum LinkmicUserSettingMultiGuestApplyAutoApprove {
    /**
     * @generated from enum value: NOT_SET = 0;
     */
    NOT_SET = 0,
    /**
     * @generated from enum value: ALL_AUDIENCE = 1;
     */
    ALL_AUDIENCE = 1,
    /**
     * @generated from enum value: ONLY_FOLLOWER = 2;
     */
    ONLY_FOLLOWER = 2,
    /**
     * @generated from enum value: ONLY_FRIEND = 3;
     */
    ONLY_FRIEND = 3,
    /**
     * @generated from enum value: ONLY_GIFT_ER = 4;
     */
    ONLY_GIFT_ER = 4
}
/**
 * Describes the enum webcast.model.data.LinkmicUserSettingMultiGuestApplyAutoApprove.
 */
export declare const LinkmicUserSettingMultiGuestApplyAutoApproveSchema: GenEnum<LinkmicUserSettingMultiGuestApplyAutoApprove>;
/**
 * @generated from enum webcast.model.data.LinkmicUserSettingShowAction
 */
export declare enum LinkmicUserSettingShowAction {
    /**
     * @generated from enum value: CHECKED = 0;
     */
    CHECKED = 0,
    /**
     * @generated from enum value: NOT_CHECKED = 1;
     */
    NOT_CHECKED = 1,
    /**
     * @generated from enum value: LINKMIC_USER_SETTING_SHOW_ACTION_HIDE = 2;
     */
    LINKMIC_USER_SETTING_SHOW_ACTION_HIDE = 2,
    /**
     * @generated from enum value: OPEN = 3;
     */
    OPEN = 3,
    /**
     * @generated from enum value: CLOSE = 4;
     */
    CLOSE = 4
}
/**
 * Describes the enum webcast.model.data.LinkmicUserSettingShowAction.
 */
export declare const LinkmicUserSettingShowActionSchema: GenEnum<LinkmicUserSettingShowAction>;
/**
 * @generated from enum webcast.model.data.LinkmicUserStatus
 */
export declare enum LinkmicUserStatus {
    /**
     * @generated from enum value: USER_STATUS_NONE = 0;
     */
    USER_STATUS_NONE = 0,
    /**
     * @generated from enum value: USER_STATUS_LINKED = 1;
     */
    USER_STATUS_LINKED = 1,
    /**
     * @generated from enum value: USER_STATUS_APPLYING = 2;
     */
    USER_STATUS_APPLYING = 2,
    /**
     * @generated from enum value: USER_STATUS_INVITING = 3;
     */
    USER_STATUS_INVITING = 3
}
/**
 * Describes the enum webcast.model.data.LinkmicUserStatus.
 */
export declare const LinkmicUserStatusSchema: GenEnum<LinkmicUserStatus>;
/**
 * @generated from enum webcast.model.data.LiveEventInfo_EventPayMethod
 */
export declare enum LiveEventInfo_EventPayMethod {
    /**
     * @generated from enum value: EVENT_PAY_METHOD_INVALID = 0;
     */
    EVENT_PAY_METHOD_INVALID = 0,
    /**
     * @generated from enum value: EVENT_PAY_METHOD_COINS = 1;
     */
    EVENT_PAY_METHOD_COINS = 1,
    /**
     * @generated from enum value: EVENT_PAY_METHOD_CASH = 2;
     */
    EVENT_PAY_METHOD_CASH = 2
}
/**
 * Describes the enum webcast.model.data.LiveEventInfo_EventPayMethod.
 */
export declare const LiveEventInfo_EventPayMethodSchema: GenEnum<LiveEventInfo_EventPayMethod>;
/**
 * @generated from enum webcast.model.data.MatchGameplayOption
 */
export declare enum MatchGameplayOption {
    /**
     * @generated from enum value: MATCH_OPTION_UNKNOWN = 0;
     */
    MATCH_OPTION_UNKNOWN = 0,
    /**
     * @generated from enum value: MATCH_OPTION_SPECIFIC_GIFT = 1;
     */
    MATCH_OPTION_SPECIFIC_GIFT = 1,
    /**
     * @generated from enum value: MATCH_OPTION_ICE_SHOWDOWN = 2;
     */
    MATCH_OPTION_ICE_SHOWDOWN = 2
}
/**
 * Describes the enum webcast.model.data.MatchGameplayOption.
 */
export declare const MatchGameplayOptionSchema: GenEnum<MatchGameplayOption>;
/**
 * @generated from enum webcast.model.data.MatchInfo_MultiplierType
 */
export declare enum MatchInfo_MultiplierType {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CRITICAL_STRIKE = 1;
     */
    CRITICAL_STRIKE = 1,
    /**
     * @generated from enum value: TOP_2 = 2;
     */
    TOP_2 = 2,
    /**
     * @generated from enum value: TOP_3 = 3;
     */
    TOP_3 = 3,
    /**
     * @generated from enum value: VAULT_GLOVE = 4;
     */
    VAULT_GLOVE = 4
}
/**
 * Describes the enum webcast.model.data.MatchInfo_MultiplierType.
 */
export declare const MatchInfo_MultiplierTypeSchema: GenEnum<MatchInfo_MultiplierType>;
/**
 * @generated from enum webcast.model.data.MultiGuestOutsideRoomInviteSource
 */
export declare enum MultiGuestOutsideRoomInviteSource {
    /**
     * @generated from enum value: OUTSIDE_ROOM_INVITE_SOURCE_UNKNOWN = 0;
     */
    OUTSIDE_ROOM_INVITE_SOURCE_UNKNOWN = 0,
    /**
     * @generated from enum value: OUTSIDE_ROOM_INVITE_SOURCE_PANEL = 1;
     */
    OUTSIDE_ROOM_INVITE_SOURCE_PANEL = 1,
    /**
     * @generated from enum value: OUTSIDE_ROOM_INVITE_SOURCE_CAPSULE = 2;
     */
    OUTSIDE_ROOM_INVITE_SOURCE_CAPSULE = 2,
    /**
     * @generated from enum value: OUTSIDE_ROOM_INVITE_SOURCE_EMPTY_POSITION = 3;
     */
    OUTSIDE_ROOM_INVITE_SOURCE_EMPTY_POSITION = 3
}
/**
 * Describes the enum webcast.model.data.MultiGuestOutsideRoomInviteSource.
 */
export declare const MultiGuestOutsideRoomInviteSourceSchema: GenEnum<MultiGuestOutsideRoomInviteSource>;
/**
 * @generated from enum webcast.model.data.OptPairStatus
 */
export declare enum OptPairStatus {
    /**
     * @generated from enum value: OPT_PAIR_STATUS_UNKNOWN = 0;
     */
    OPT_PAIR_STATUS_UNKNOWN = 0,
    /**
     * @generated from enum value: OFFLINE = 1;
     */
    OFFLINE = 1,
    /**
     * @generated from enum value: FINISHED = 2;
     */
    FINISHED = 2
}
/**
 * Describes the enum webcast.model.data.OptPairStatus.
 */
export declare const OptPairStatusSchema: GenEnum<OptPairStatus>;
/**
 * @generated from enum webcast.model.data.PerceptionDialogIconType
 */
export declare enum PerceptionDialogIconType {
    /**
     * @generated from enum value: ICON_TYPE_NONE = 0;
     */
    ICON_TYPE_NONE = 0,
    /**
     * @generated from enum value: ICON_TYPE_WARNING = 1;
     */
    ICON_TYPE_WARNING = 1,
    /**
     * @generated from enum value: ICON_TYPE_LINKMIC = 2;
     */
    ICON_TYPE_LINKMIC = 2,
    /**
     * @generated from enum value: ICON_TYPE_GUEST_LINKMIC = 3;
     */
    ICON_TYPE_GUEST_LINKMIC = 3,
    /**
     * @generated from enum value: ICON_TYPE_LIVE = 4;
     */
    ICON_TYPE_LIVE = 4,
    /**
     * @generated from enum value: ICON_TYPE_TREASURE_BOX = 5;
     */
    ICON_TYPE_TREASURE_BOX = 5,
    /**
     * @generated from enum value: ICON_TYPE_MUTE = 6;
     */
    ICON_TYPE_MUTE = 6,
    /**
     * @generated from enum value: ICON_GAMEPAD_ACCESS_REVOKED = 7;
     */
    ICON_GAMEPAD_ACCESS_REVOKED = 7,
    /**
     * @generated from enum value: ICON_TYPE_BAN_REPORT_LIVE_SINGLE_ROOM = 8;
     */
    ICON_TYPE_BAN_REPORT_LIVE_SINGLE_ROOM = 8,
    /**
     * @generated from enum value: ICON_TYPE_BAN_REPORT_LIVE_ALL_ROOM = 9;
     */
    ICON_TYPE_BAN_REPORT_LIVE_ALL_ROOM = 9,
    /**
     * @generated from enum value: ICON_TYPE_BAN_REPORT_LIVE_GREEN_SCREEN = 10;
     */
    ICON_TYPE_BAN_REPORT_LIVE_GREEN_SCREEN = 10,
    /**
     * @generated from enum value: ICON_TYPE_GIFT = 11;
     */
    ICON_TYPE_GIFT = 11,
    /**
     * @generated from enum value: ICON_TYPE_APPEAL_SUCCESS = 12;
     */
    ICON_TYPE_APPEAL_SUCCESS = 12,
    /**
     * @generated from enum value: ICON_TYPE_MATCH = 13;
     */
    ICON_TYPE_MATCH = 13,
    /**
     * @generated from enum value: ICON_TYPE_LIVE_GOAL = 14;
     */
    ICON_TYPE_LIVE_GOAL = 14,
    /**
     * @generated from enum value: ICON_TYPE_SUBSCRIPTION = 15;
     */
    ICON_TYPE_SUBSCRIPTION = 15,
    /**
     * @generated from enum value: ICON_TYPE_STAR_COMMENT = 16;
     */
    ICON_TYPE_STAR_COMMENT = 16,
    /**
     * @generated from enum value: ICON_TYPE_RANKING = 17;
     */
    ICON_TYPE_RANKING = 17,
    /**
     * @generated from enum value: ICON_TYPE_COMMON = 18;
     */
    ICON_TYPE_COMMON = 18
}
/**
 * Describes the enum webcast.model.data.PerceptionDialogIconType.
 */
export declare const PerceptionDialogIconTypeSchema: GenEnum<PerceptionDialogIconType>;
/**
 * @generated from enum webcast.model.data.PinCardType
 */
export declare enum PinCardType {
    /**
     * @generated from enum value: UNKNOWN_PIN_CARD_TYPE = 0;
     */
    UNKNOWN_PIN_CARD_TYPE = 0,
    /**
     * @generated from enum value: CUSTOMIZED_BENEFIT_E_NUM = 1;
     */
    CUSTOMIZED_BENEFIT_E_NUM = 1,
    /**
     * @generated from enum value: SUB_GOAL_E_NUM = 2;
     */
    SUB_GOAL_E_NUM = 2,
    /**
     * @generated from enum value: UP_SELL_DM = 3;
     */
    UP_SELL_DM = 3,
    /**
     * @generated from enum value: UP_SELL_LEAD_SGEN = 4;
     */
    UP_SELL_LEAD_SGEN = 4,
    /**
     * @generated from enum value: SMB_SUB_PLAN = 5;
     */
    SMB_SUB_PLAN = 5,
    /**
     * @generated from enum value: SMB_COURSE = 6;
     */
    SMB_COURSE = 6
}
/**
 * Describes the enum webcast.model.data.PinCardType.
 */
export declare const PinCardTypeSchema: GenEnum<PinCardType>;
/**
 * @generated from enum webcast.model.data.PollAppealStatus
 */
export declare enum PollAppealStatus {
    /**
     * @generated from enum value: POLL_APPEAL_STATUS_UNKNOWN = 0;
     */
    POLL_APPEAL_STATUS_UNKNOWN = 0,
    /**
     * @generated from enum value: POLL_APPEAL_STATUS_PASS = 1;
     */
    POLL_APPEAL_STATUS_PASS = 1,
    /**
     * @generated from enum value: FAIL = 2;
     */
    FAIL = 2
}
/**
 * Describes the enum webcast.model.data.PollAppealStatus.
 */
export declare const PollAppealStatusSchema: GenEnum<PollAppealStatus>;
/**
 * @generated from enum webcast.model.data.PollEndType
 */
export declare enum PollEndType {
    /**
     * @generated from enum value: POLL_END_BY_TIME = 0;
     */
    POLL_END_BY_TIME = 0,
    /**
     * @generated from enum value: POLL_END_BY_OWNER = 1;
     */
    POLL_END_BY_OWNER = 1,
    /**
     * @generated from enum value: POLL_END_BY_OTHER = 2;
     */
    POLL_END_BY_OTHER = 2,
    /**
     * @generated from enum value: POLL_END_BY_ADMIN = 3;
     */
    POLL_END_BY_ADMIN = 3
}
/**
 * Describes the enum webcast.model.data.PollEndType.
 */
export declare const PollEndTypeSchema: GenEnum<PollEndType>;
/**
 * @generated from enum webcast.model.data.PollKind
 */
export declare enum PollKind {
    /**
     * @generated from enum value: POLL_KIND_NORMAL = 0;
     */
    POLL_KIND_NORMAL = 0,
    /**
     * @generated from enum value: POLL_KIND_GIFT = 1;
     */
    POLL_KIND_GIFT = 1,
    /**
     * @generated from enum value: CUSTOMIZABLE = 2;
     */
    CUSTOMIZABLE = 2,
    /**
     * @generated from enum value: CUSTOMIZABLE_GIFT = 3;
     */
    CUSTOMIZABLE_GIFT = 3,
    /**
     * @generated from enum value: QUICK_GIFT = 4;
     */
    QUICK_GIFT = 4,
    /**
     * @generated from enum value: EMOTE = 5;
     */
    EMOTE = 5
}
/**
 * Describes the enum webcast.model.data.PollKind.
 */
export declare const PollKindSchema: GenEnum<PollKind>;
/**
 * @generated from enum webcast.model.data.PollTemplateStatus
 */
export declare enum PollTemplateStatus {
    /**
     * @generated from enum value: TO_BE_REVIEWED = 0;
     */
    TO_BE_REVIEWED = 0,
    /**
     * @generated from enum value: UNDER_REVIEW = 1;
     */
    UNDER_REVIEW = 1,
    /**
     * @generated from enum value: REVIEWED = 2;
     */
    REVIEWED = 2,
    /**
     * @generated from enum value: REFUSED = 3;
     */
    REFUSED = 3
}
/**
 * Describes the enum webcast.model.data.PollTemplateStatus.
 */
export declare const PollTemplateStatusSchema: GenEnum<PollTemplateStatus>;
/**
 * @generated from enum webcast.model.data.Position
 */
export declare enum Position {
    /**
     * @generated from enum value: POSITION_UNKNOWN = 0;
     */
    POSITION_UNKNOWN = 0,
    /**
     * @generated from enum value: LEFT = 1;
     */
    LEFT = 1,
    /**
     * @generated from enum value: POSITION_RIGHT = 2;
     */
    POSITION_RIGHT = 2
}
/**
 * Describes the enum webcast.model.data.Position.
 */
export declare const PositionSchema: GenEnum<Position>;
/**
 * @generated from enum webcast.model.data.ProfitRankType
 */
export declare enum ProfitRankType {
    /**
     * @generated from enum value: TYPE_HOURLY_RANK = 0;
     */
    TYPE_HOURLY_RANK = 0,
    /**
     * @generated from enum value: TYPE_WEEKLY_RANK = 1;
     */
    TYPE_WEEKLY_RANK = 1,
    /**
     * @generated from enum value: TYPE_HOURLY_STAR_RANK = 2;
     */
    TYPE_HOURLY_STAR_RANK = 2,
    /**
     * @generated from enum value: TYPE_WEEKLY_RISING_RANK_ACTIVITY = 3;
     */
    TYPE_WEEKLY_RISING_RANK_ACTIVITY = 3,
    /**
     * @generated from enum value: TYPE_WEEKLY_RISING_RANK = 4;
     */
    TYPE_WEEKLY_RISING_RANK = 4,
    /**
     * @generated from enum value: TYPE_WEEKLY_ROOKIE = 5;
     */
    TYPE_WEEKLY_ROOKIE = 5,
    /**
     * @generated from enum value: TYPE_E_COMMERCE_WEEKLY = 6;
     */
    TYPE_E_COMMERCE_WEEKLY = 6,
    /**
     * @generated from enum value: TYPE_E_COMMERCE_DAILY = 7;
     */
    TYPE_E_COMMERCE_DAILY = 7,
    /**
     * @generated from enum value: TYPE_DAILY_RANK = 8;
     */
    TYPE_DAILY_RANK = 8,
    /**
     * @generated from enum value: TYPE_FIRST_GIFT_RANK = 9;
     */
    TYPE_FIRST_GIFT_RANK = 9,
    /**
     * @generated from enum value: TYPE_GAME_RANK = 10;
     */
    TYPE_GAME_RANK = 10,
    /**
     * @generated from enum value: TYPE_DAILY_GAME = 11;
     */
    TYPE_DAILY_GAME = 11,
    /**
     * @generated from enum value: TYPE_HALL_OF_FAME_RANK = 12;
     */
    TYPE_HALL_OF_FAME_RANK = 12,
    /**
     * @generated from enum value: TYPE_RANK_LEAGUE = 13;
     */
    TYPE_RANK_LEAGUE = 13,
    /**
     * @generated from enum value: DAILY_ROOKIE = 14;
     */
    DAILY_ROOKIE = 14,
    /**
     * @generated from enum value: TYPE_TEAM_RANK = 15;
     */
    TYPE_TEAM_RANK = 15,
    /**
     * @generated from enum value: TYPE_CLASS_RANK = 16;
     */
    TYPE_CLASS_RANK = 16,
    /**
     * @generated from enum value: TYPE_DAILY_GAME_PUB_G = 20;
     */
    TYPE_DAILY_GAME_PUB_G = 20,
    /**
     * @generated from enum value: TYPE_DAILY_GAME_MLB_B = 21;
     */
    TYPE_DAILY_GAME_MLB_B = 21,
    /**
     * @generated from enum value: TYPE_DAILY_GAME_FREE_FIRE = 22;
     */
    TYPE_DAILY_GAME_FREE_FIRE = 22,
    /**
     * @generated from enum value: TYPE_WEEKLY_GAME_SUBCATEGORY_ONE = 23;
     */
    TYPE_WEEKLY_GAME_SUBCATEGORY_ONE = 23,
    /**
     * @generated from enum value: TYPE_WEEKLY_GAME_SUBCATEGORY_TWO = 24;
     */
    TYPE_WEEKLY_GAME_SUBCATEGORY_TWO = 24,
    /**
     * @generated from enum value: TYPE_WEEKLY_GAME_SUBCATEGORY_THREE = 25;
     */
    TYPE_WEEKLY_GAME_SUBCATEGORY_THREE = 25,
    /**
     * @generated from enum value: TYPE_WEEKLY_E_COMMERCE_COLLECTIBLES = 26;
     */
    TYPE_WEEKLY_E_COMMERCE_COLLECTIBLES = 26,
    /**
     * @generated from enum value: TYPE_WEEKLY_E_COMMERCE_BEAUTY_PERSONAL_CARE = 27;
     */
    TYPE_WEEKLY_E_COMMERCE_BEAUTY_PERSONAL_CARE = 27,
    /**
     * @generated from enum value: TYPE_WEEKLY_E_COMMERCE_WOMEN_WEAR_UNDERWEAR = 28;
     */
    TYPE_WEEKLY_E_COMMERCE_WOMEN_WEAR_UNDERWEAR = 28,
    /**
     * @generated from enum value: TYPE_CAMPAIGN_LEAGUEMATCH_RANK = 101;
     */
    TYPE_CAMPAIGN_LEAGUEMATCH_RANK = 101
}
/**
 * Describes the enum webcast.model.data.ProfitRankType.
 */
export declare const ProfitRankTypeSchema: GenEnum<ProfitRankType>;
/**
 * @generated from enum webcast.model.data.PunishTypeId
 */
export declare enum PunishTypeId {
    /**
     * @generated from enum value: PUNISH_TYPE_IDUN_KNOWN = 0;
     */
    PUNISH_TYPE_IDUN_KNOWN = 0,
    /**
     * @generated from enum value: BAN_LINKMIC = 9;
     */
    BAN_LINKMIC = 9,
    /**
     * @generated from enum value: BAN_GAME_PARTNERSHIP = 25;
     */
    BAN_GAME_PARTNERSHIP = 25,
    /**
     * @generated from enum value: REMOVE_GAME_PARTNERSHIP = 26;
     */
    REMOVE_GAME_PARTNERSHIP = 26,
    /**
     * @generated from enum value: BAN_COHOST_LINKMIC = 55;
     */
    BAN_COHOST_LINKMIC = 55,
    /**
     * @generated from enum value: AUTHORITY_LIMIT_MATCH = 57;
     */
    AUTHORITY_LIMIT_MATCH = 57,
    /**
     * @generated from enum value: BAN_VOICE_CHAT = 59;
     */
    BAN_VOICE_CHAT = 59,
    /**
     * @generated from enum value: BAN_LIVE_GOAL = 64;
     */
    BAN_LIVE_GOAL = 64,
    /**
     * @generated from enum value: VIEWER_LIMIT = 70;
     */
    VIEWER_LIMIT = 70,
    /**
     * @generated from enum value: LIVE_CONSOLE_BAN = 76;
     */
    LIVE_CONSOLE_BAN = 76
}
/**
 * Describes the enum webcast.model.data.PunishTypeId.
 */
export declare const PunishTypeIdSchema: GenEnum<PunishTypeId>;
/**
 * @generated from enum webcast.model.data.ReserveReplyStatus
 */
export declare enum ReserveReplyStatus {
    /**
     * @generated from enum value: RESERVE_REPLY_STATUS_UNKNOWN = 0;
     */
    RESERVE_REPLY_STATUS_UNKNOWN = 0,
    /**
     * @generated from enum value: WAIT_FORME = 1;
     */
    WAIT_FORME = 1
}
/**
 * Describes the enum webcast.model.data.ReserveReplyStatus.
 */
export declare const ReserveReplyStatusSchema: GenEnum<ReserveReplyStatus>;
/**
 * @generated from enum webcast.model.data.RewardCondition
 */
export declare enum RewardCondition {
    /**
     * @generated from enum value: REWARD_CONDITION_SUBSCRIPTION = 0;
     */
    REWARD_CONDITION_SUBSCRIPTION = 0,
    /**
     * @generated from enum value: SUB_WAVE_CUSTOM = 1;
     */
    SUB_WAVE_CUSTOM = 1,
    /**
     * @generated from enum value: REWARD_CONDITION_FANS_CLUB = 2;
     */
    REWARD_CONDITION_FANS_CLUB = 2
}
/**
 * Describes the enum webcast.model.data.RewardCondition.
 */
export declare const RewardConditionSchema: GenEnum<RewardCondition>;
/**
 * @generated from enum webcast.model.data.RivalExtraInfo_AnchorLayer
 */
export declare enum RivalExtraInfo_AnchorLayer {
    /**
     * @generated from enum value: ANCHOR_LAYER_UNKNOWN = 0;
     */
    ANCHOR_LAYER_UNKNOWN = 0,
    /**
     * @generated from enum value: ANCHOR_LAYER_TOP = 1;
     */
    ANCHOR_LAYER_TOP = 1,
    /**
     * @generated from enum value: ANCHOR_LAYER_SMALL = 2;
     */
    ANCHOR_LAYER_SMALL = 2
}
/**
 * Describes the enum webcast.model.data.RivalExtraInfo_AnchorLayer.
 */
export declare const RivalExtraInfo_AnchorLayerSchema: GenEnum<RivalExtraInfo_AnchorLayer>;
/**
 * @generated from enum webcast.model.data.RivalExtraInfo_BattleInfo_BattleInfoType
 */
export declare enum RivalExtraInfo_BattleInfo_BattleInfoType {
    /**
     * @generated from enum value: BATTLE_INFO_TYPE_NONE = 0;
     */
    BATTLE_INFO_TYPE_NONE = 0,
    /**
     * @generated from enum value: BATTLE_INFO_TYPE_AVERAGE_SCORE = 1;
     */
    BATTLE_INFO_TYPE_AVERAGE_SCORE = 1,
    /**
     * @generated from enum value: BATTLE_INFO_TYPE_MAX_SCORE = 2;
     */
    BATTLE_INFO_TYPE_MAX_SCORE = 2,
    /**
     * @generated from enum value: BATTLE_INFO_TYPE_LAST_SCORE = 3;
     */
    BATTLE_INFO_TYPE_LAST_SCORE = 3,
    /**
     * @generated from enum value: BATTLE_INFO_TYPE_WIN_STREAK = 4;
     */
    BATTLE_INFO_TYPE_WIN_STREAK = 4
}
/**
 * Describes the enum webcast.model.data.RivalExtraInfo_BattleInfo_BattleInfoType.
 */
export declare const RivalExtraInfo_BattleInfo_BattleInfoTypeSchema: GenEnum<RivalExtraInfo_BattleInfo_BattleInfoType>;
/**
 * @generated from enum webcast.model.data.RivalExtraInfo_InviteBlockReason
 */
export declare enum RivalExtraInfo_InviteBlockReason {
    /**
     * @generated from enum value: RIVAL_EXTRA_INFO_INVITE_BLOCK_REASON_NONE = 0;
     */
    RIVAL_EXTRA_INFO_INVITE_BLOCK_REASON_NONE = 0,
    /**
     * @generated from enum value: IS_LINKING = 1;
     */
    IS_LINKING = 1,
    /**
     * @generated from enum value: INVITATION_DENIED = 2;
     */
    INVITATION_DENIED = 2,
    /**
     * @generated from enum value: PERMISSION_DENIED = 3;
     */
    PERMISSION_DENIED = 3,
    /**
     * @generated from enum value: LOW_CLIENT_VERSION = 4;
     */
    LOW_CLIENT_VERSION = 4,
    /**
     * @generated from enum value: RIVAL_EXTRA_INFO_INVITE_BLOCK_REASON_ROOM_PAUSED = 5;
     */
    RIVAL_EXTRA_INFO_INVITE_BLOCK_REASON_ROOM_PAUSED = 5,
    /**
     * @generated from enum value: LINKMIC_FULL = 6;
     */
    LINKMIC_FULL = 6,
    /**
     * @generated from enum value: MATURE_THEME_NOT_MATCH = 7;
     */
    MATURE_THEME_NOT_MATCH = 7,
    /**
     * @generated from enum value: RESERVE_FULL = 8;
     */
    RESERVE_FULL = 8,
    /**
     * @generated from enum value: RIVAL_EXTRA_INFO_INVITE_BLOCK_REASON_REGIONAL_BLOCK = 9;
     */
    RIVAL_EXTRA_INFO_INVITE_BLOCK_REASON_REGIONAL_BLOCK = 9
}
/**
 * Describes the enum webcast.model.data.RivalExtraInfo_InviteBlockReason.
 */
export declare const RivalExtraInfo_InviteBlockReasonSchema: GenEnum<RivalExtraInfo_InviteBlockReason>;
/**
 * @generated from enum webcast.model.data.RivalExtraInfo_TextType
 */
export declare enum RivalExtraInfo_TextType {
    /**
     * @generated from enum value: TEXT_TYPE_UNKNOWN = 0;
     */
    TEXT_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: CURRO_OMF_AN_TICKET = 1;
     */
    CURRO_OMF_AN_TICKET = 1,
    /**
     * @generated from enum value: TOTAL_DIAMOND_COUNT = 2;
     */
    TOTAL_DIAMOND_COUNT = 2,
    /**
     * @generated from enum value: DISTANCE = 3;
     */
    DISTANCE = 3,
    /**
     * @generated from enum value: DISTANCE_CITY = 4;
     */
    DISTANCE_CITY = 4
}
/**
 * Describes the enum webcast.model.data.RivalExtraInfo_TextType.
 */
export declare const RivalExtraInfo_TextTypeSchema: GenEnum<RivalExtraInfo_TextType>;
/**
 * @generated from enum webcast.model.data.SOVLockInfoType
 */
export declare enum SOVLockInfoType {
    /**
     * @generated from enum value: SOV_LOCK_INFO_TYPE_NONE = 0;
     */
    SOV_LOCK_INFO_TYPE_NONE = 0,
    /**
     * @generated from enum value: LOCK = 1;
     */
    LOCK = 1,
    /**
     * @generated from enum value: PREVIEW = 2;
     */
    PREVIEW = 2
}
/**
 * Describes the enum webcast.model.data.SOVLockInfoType.
 */
export declare const SOVLockInfoTypeSchema: GenEnum<SOVLockInfoType>;
/**
 * @generated from enum webcast.model.data.SOVMaskInfoType
 */
export declare enum SOVMaskInfoType {
    /**
     * @generated from enum value: SOV_MASK_INFO_TYPE_NONE = 0;
     */
    SOV_MASK_INFO_TYPE_NONE = 0,
    /**
     * @generated from enum value: SENSITIVE = 1;
     */
    SENSITIVE = 1,
    /**
     * @generated from enum value: VIOLATION = 2;
     */
    VIOLATION = 2,
    /**
     * @generated from enum value: MUSIC_COPYRIGHT = 3;
     */
    MUSIC_COPYRIGHT = 3,
    /**
     * @generated from enum value: UNAVAILABLE = 4;
     */
    UNAVAILABLE = 4
}
/**
 * Describes the enum webcast.model.data.SOVMaskInfoType.
 */
export declare const SOVMaskInfoTypeSchema: GenEnum<SOVMaskInfoType>;
/**
 * @generated from enum webcast.model.data.SOVStatus
 */
export declare enum SOVStatus {
    /**
     * @generated from enum value: SOV_STATUS_UNKNOWN = 0;
     */
    SOV_STATUS_UNKNOWN = 0,
    /**
     * @generated from enum value: ON = 1;
     */
    ON = 1,
    /**
     * @generated from enum value: OFF = 2;
     */
    OFF = 2
}
/**
 * Describes the enum webcast.model.data.SOVStatus.
 */
export declare const SOVStatusSchema: GenEnum<SOVStatus>;
/**
 * @generated from enum webcast.model.data.SubPinCardText_TextType
 */
export declare enum SubPinCardText_TextType {
    /**
     * @generated from enum value: SUB_PIN_CARD_TEXT_TEXT_TYPE_TEXT_TYPE_UNKNOWN = 0;
     */
    SUB_PIN_CARD_TEXT_TEXT_TYPE_TEXT_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: TEXT_TYPE_ORIGINAL = 1;
     */
    TEXT_TYPE_ORIGINAL = 1,
    /**
     * @generated from enum value: TEXT_TYPE_STARLING_KEY = 2;
     */
    TEXT_TYPE_STARLING_KEY = 2
}
/**
 * Describes the enum webcast.model.data.SubPinCardText_TextType.
 */
export declare const SubPinCardText_TextTypeSchema: GenEnum<SubPinCardText_TextType>;
/**
 * @generated from enum webcast.model.data.SubPinCard_Text_TextType
 */
export declare enum SubPinCard_Text_TextType {
    /**
     * @generated from enum value: UNKNOWN_TEXT_TYPE = 0;
     */
    UNKNOWN_TEXT_TYPE = 0,
    /**
     * @generated from enum value: ORIGINAL_TEXT = 1;
     */
    ORIGINAL_TEXT = 1,
    /**
     * @generated from enum value: STARLING_KEY = 2;
     */
    STARLING_KEY = 2
}
/**
 * Describes the enum webcast.model.data.SubPinCard_Text_TextType.
 */
export declare const SubPinCard_Text_TextTypeSchema: GenEnum<SubPinCard_Text_TextType>;
/**
 * @generated from enum webcast.model.data.SubSplitPeriod
 */
export declare enum SubSplitPeriod {
    /**
     * @generated from enum value: SUB_SPLIT_PERIOD_UNKNOWN = 0;
     */
    SUB_SPLIT_PERIOD_UNKNOWN = 0,
    /**
     * @generated from enum value: ANNOUNCEMENT = 1;
     */
    ANNOUNCEMENT = 1,
    /**
     * @generated from enum value: TRANSITION = 2;
     */
    TRANSITION = 2,
    /**
     * @generated from enum value: OFFICIAL = 3;
     */
    OFFICIAL = 3
}
/**
 * Describes the enum webcast.model.data.SubSplitPeriod.
 */
export declare const SubSplitPeriodSchema: GenEnum<SubSplitPeriod>;
/**
 * @generated from enum webcast.model.data.TagType
 */
export declare enum TagType {
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_UNKNOWN = 0;
     */
    CREATOR_CRM_TAG_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_USER_GRADE = 1;
     */
    CREATOR_CRM_TAG_TYPE_USER_GRADE = 1,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_FANS_LEVEL = 2;
     */
    CREATOR_CRM_TAG_TYPE_FANS_LEVEL = 2,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_WATCH_ME_DAYS_AGO = 3;
     */
    CREATOR_CRM_TAG_TYPE_WATCH_ME_DAYS_AGO = 3,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_CUSTOM = 4;
     */
    CREATOR_CRM_TAG_TYPE_CUSTOM = 4,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_TITLE_GIFT = 5;
     */
    CREATOR_CRM_TAG_TYPE_TITLE_GIFT = 5,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_FIRST_JOINED_TEAM = 6;
     */
    CREATOR_CRM_TAG_TYPE_FIRST_JOINED_TEAM = 6,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_PAY_ACCOMPANY_DAYS = 7;
     */
    CREATOR_CRM_TAG_TYPE_PAY_ACCOMPANY_DAYS = 7,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_SPONSOR_GIFT_LAST_ROOM = 8;
     */
    CREATOR_CRM_TAG_TYPE_SPONSOR_GIFT_LAST_ROOM = 8,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_MATCH_MVP_LAST_ROOM = 9;
     */
    CREATOR_CRM_TAG_TYPE_MATCH_MVP_LAST_ROOM = 9,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_LARGE_AMOUNT_GIFT_LAST_ROOM = 10;
     */
    CREATOR_CRM_TAG_TYPE_LARGE_AMOUNT_GIFT_LAST_ROOM = 10,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_COMMENT_LAST_ROOM = 11;
     */
    CREATOR_CRM_TAG_TYPE_COMMENT_LAST_ROOM = 11,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_RECENT_TITLED_GIFT = 12;
     */
    CREATOR_CRM_TAG_TYPE_RECENT_TITLED_GIFT = 12,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_MEET_ANNIVERSARY = 13;
     */
    CREATOR_CRM_TAG_TYPE_MEET_ANNIVERSARY = 13,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_FANS_SLEEP = 14;
     */
    CREATOR_CRM_TAG_TYPE_FANS_SLEEP = 14,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_NOT_SEND_HEART_ME = 15;
     */
    CREATOR_CRM_TAG_TYPE_NOT_SEND_HEART_ME = 15,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_NOT_JOIN_TEAM = 16;
     */
    CREATOR_CRM_TAG_TYPE_NOT_JOIN_TEAM = 16,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_FIRST_WATCH_LIVE = 17;
     */
    CREATOR_CRM_TAG_TYPE_FIRST_WATCH_LIVE = 17,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_RECENT_COMMENT = 18;
     */
    CREATOR_CRM_TAG_TYPE_RECENT_COMMENT = 18,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_RECENT_GIFT_TIMES = 19;
     */
    CREATOR_CRM_TAG_TYPE_RECENT_GIFT_TIMES = 19,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_RECENT_WATCH_LIVE_DURATION = 20;
     */
    CREATOR_CRM_TAG_TYPE_RECENT_WATCH_LIVE_DURATION = 20,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_RECENT_GIFT = 21;
     */
    CREATOR_CRM_TAG_TYPE_RECENT_GIFT = 21,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_RECENT_LIVE_CONTRIBUTION_TOP = 22;
     */
    CREATOR_CRM_TAG_TYPE_RECENT_LIVE_CONTRIBUTION_TOP = 22,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_JUST_UPGRADE = 28;
     */
    CREATOR_CRM_TAG_TYPE_JUST_UPGRADE = 28,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_FAN_TOTAL_WATCH_DURATION = 29;
     */
    CREATOR_CRM_TAG_TYPE_FAN_TOTAL_WATCH_DURATION = 29,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_FAN_TOTAL_COMMENT_NUM = 30;
     */
    CREATOR_CRM_TAG_TYPE_FAN_TOTAL_COMMENT_NUM = 30,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_FAN_TOTAL_GIFT_SENT_NUM = 31;
     */
    CREATOR_CRM_TAG_TYPE_FAN_TOTAL_GIFT_SENT_NUM = 31,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_VAULT_HOLD_INVITATION = 32;
     */
    CREATOR_CRM_TAG_TYPE_VAULT_HOLD_INVITATION = 32,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_VAULT_GET_INVITATION_FROM_ROOM = 33;
     */
    CREATOR_CRM_TAG_TYPE_VAULT_GET_INVITATION_FROM_ROOM = 33,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_VAULT_USER_RANK_TOP = 34;
     */
    CREATOR_CRM_TAG_TYPE_VAULT_USER_RANK_TOP = 34,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_VAULT_MOST_EXPENSIVE_GIFT_SENT_ALL_TIME = 35;
     */
    CREATOR_CRM_TAG_TYPE_VAULT_MOST_EXPENSIVE_GIFT_SENT_ALL_TIME = 35,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_VAULT_MOST_EXPENSIVE_GIFT_SENT_LAST_ACTIVITY = 36;
     */
    CREATOR_CRM_TAG_TYPE_VAULT_MOST_EXPENSIVE_GIFT_SENT_LAST_ACTIVITY = 36,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_VAULT_GIFT_ER = 37;
     */
    CREATOR_CRM_TAG_TYPE_VAULT_GIFT_ER = 37,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_E_COMMERCE_TAG = 42;
     */
    CREATOR_CRM_TAG_TYPE_E_COMMERCE_TAG = 42,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_NOT_FINISH_TICKET_TASK = 43;
     */
    CREATOR_CRM_TAG_TYPE_NOT_FINISH_TICKET_TASK = 43,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_GALLERY_PROGRESS = 44;
     */
    CREATOR_CRM_TAG_TYPE_GALLERY_PROGRESS = 44,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_SEND_GIFT_NOT_FANS = 45;
     */
    CREATOR_CRM_TAG_TYPE_SEND_GIFT_NOT_FANS = 45,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_WATCH_LIVE_NOT_FANS = 46;
     */
    CREATOR_CRM_TAG_TYPE_WATCH_LIVE_NOT_FANS = 46,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_TOP_3_NOT_FANS = 47;
     */
    CREATOR_CRM_TAG_TYPE_TOP_3_NOT_FANS = 47,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_UPGRADE_IN_ROOM = 48;
     */
    CREATOR_CRM_TAG_TYPE_UPGRADE_IN_ROOM = 48,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_HIGH_VIEW = 51;
     */
    CREATOR_CRM_TAG_TYPE_HIGH_VIEW = 51,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_HIGH_VIEW_DURATION = 52;
     */
    CREATOR_CRM_TAG_TYPE_HIGH_VIEW_DURATION = 52,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_HIGH_ACTIVE = 53;
     */
    CREATOR_CRM_TAG_TYPE_HIGH_ACTIVE = 53,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_HIGH_ACTIVE_NO_COMMENT = 54;
     */
    CREATOR_CRM_TAG_TYPE_HIGH_ACTIVE_NO_COMMENT = 54,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_HIGH_VIEW_DURATION_NO_ACTIVE = 55;
     */
    CREATOR_CRM_TAG_TYPE_HIGH_VIEW_DURATION_NO_ACTIVE = 55,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_REP_VIEWER = 56;
     */
    CREATOR_CRM_TAG_TYPE_REP_VIEWER = 56,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_HIGH_VIEW_DURATION_THIS_ROOM = 57;
     */
    CREATOR_CRM_TAG_TYPE_HIGH_VIEW_DURATION_THIS_ROOM = 57,
    /**
     * @generated from enum value: CREATOR_CRM_TAG_TYPE_HIGH_ACTIVE_THIS_ROOM = 58;
     */
    CREATOR_CRM_TAG_TYPE_HIGH_ACTIVE_THIS_ROOM = 58,
    /**
     * @generated from enum value: FANS_HIGHLIGHT = 100;
     */
    FANS_HIGHLIGHT = 100
}
/**
 * Describes the enum webcast.model.data.TagType.
 */
export declare const TagTypeSchema: GenEnum<TagType>;
/**
 * @generated from enum webcast.model.data.TagV2_TagClassification
 */
export declare enum TagV2_TagClassification {
    /**
     * @generated from enum value: TAG_V2_TAG_CLASSIFICATION_UNKNOWN = 0;
     */
    TAG_V2_TAG_CLASSIFICATION_UNKNOWN = 0,
    /**
     * @generated from enum value: COHOST_HISTORY = 1;
     */
    COHOST_HISTORY = 1,
    /**
     * @generated from enum value: FIRST_DEGREE_RELATION = 2;
     */
    FIRST_DEGREE_RELATION = 2,
    /**
     * @generated from enum value: SECOND_DEGREE_RELATION = 3;
     */
    SECOND_DEGREE_RELATION = 3,
    /**
     * @generated from enum value: RANK = 4;
     */
    RANK = 4,
    /**
     * @generated from enum value: SIMILAR_INTERESTS = 5;
     */
    SIMILAR_INTERESTS = 5
}
/**
 * Describes the enum webcast.model.data.TagV2_TagClassification.
 */
export declare const TagV2_TagClassificationSchema: GenEnum<TagV2_TagClassification>;
/**
 * @generated from enum webcast.model.data.TimerDetail_AntidirtStatus
 */
export declare enum TimerDetail_AntidirtStatus {
    /**
     * @generated from enum value: TIMER_DETAIL_ANTIDIRT_STATUS_PASS = 0;
     */
    TIMER_DETAIL_ANTIDIRT_STATUS_PASS = 0,
    /**
     * @generated from enum value: TIMER_DETAIL_ANTIDIRT_STATUS_FAILED = 1;
     */
    TIMER_DETAIL_ANTIDIRT_STATUS_FAILED = 1
}
/**
 * Describes the enum webcast.model.data.TimerDetail_AntidirtStatus.
 */
export declare const TimerDetail_AntidirtStatusSchema: GenEnum<TimerDetail_AntidirtStatus>;
/**
 * @generated from enum webcast.model.data.TimerDetail_AuditStatus
 */
export declare enum TimerDetail_AuditStatus {
    /**
     * @generated from enum value: TIMER_DETAIL_AUDIT_STATUS_AUDIT_STATUS_UNKNOWN = 0;
     */
    TIMER_DETAIL_AUDIT_STATUS_AUDIT_STATUS_UNKNOWN = 0,
    /**
     * @generated from enum value: AUDIT_STATUS_PASS = 1;
     */
    AUDIT_STATUS_PASS = 1,
    /**
     * @generated from enum value: AUDIT_STATUS_FAILED = 2;
     */
    AUDIT_STATUS_FAILED = 2,
    /**
     * @generated from enum value: AUDIT_STATUS_REVIEWING = 3;
     */
    AUDIT_STATUS_REVIEWING = 3,
    /**
     * @generated from enum value: AUDIT_STATUS_FORBIDDEN = 4;
     */
    AUDIT_STATUS_FORBIDDEN = 4
}
/**
 * Describes the enum webcast.model.data.TimerDetail_AuditStatus.
 */
export declare const TimerDetail_AuditStatusSchema: GenEnum<TimerDetail_AuditStatus>;
/**
 * @generated from enum webcast.model.data.TimerDetail_AuditTaskType
 */
export declare enum TimerDetail_AuditTaskType {
    /**
     * @generated from enum value: AUDIT_TASK_TYPE_DEFAULT = 0;
     */
    AUDIT_TASK_TYPE_DEFAULT = 0,
    /**
     * @generated from enum value: AUDIT_TASK_TYPE_APPEAL = 1;
     */
    AUDIT_TASK_TYPE_APPEAL = 1
}
/**
 * Describes the enum webcast.model.data.TimerDetail_AuditTaskType.
 */
export declare const TimerDetail_AuditTaskTypeSchema: GenEnum<TimerDetail_AuditTaskType>;
/**
 * @generated from enum webcast.model.data.TimerStatus
 */
export declare enum TimerStatus {
    /**
     * @generated from enum value: NOT_STARTED = 0;
     */
    NOT_STARTED = 0,
    /**
     * @generated from enum value: RUNNING = 1;
     */
    RUNNING = 1,
    /**
     * @generated from enum value: PAUSED = 2;
     */
    PAUSED = 2,
    /**
     * @generated from enum value: CANCELLED = 3;
     */
    CANCELLED = 3,
    /**
     * @generated from enum value: TIMER_STATUS_FINISHED = 4;
     */
    TIMER_STATUS_FINISHED = 4
}
/**
 * Describes the enum webcast.model.data.TimerStatus.
 */
export declare const TimerStatusSchema: GenEnum<TimerStatus>;
/**
 * @generated from enum webcast.model.data.TopicActionType
 */
export declare enum TopicActionType {
    /**
     * @generated from enum value: TOPIC_ACTION_TYPE_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: TOPIC_ACTION_TYPE_FOLLOW = 1;
     */
    FOLLOW = 1
}
/**
 * Describes the enum webcast.model.data.TopicActionType.
 */
export declare const TopicActionTypeSchema: GenEnum<TopicActionType>;
/**
 * @generated from enum webcast.model.data.UserEmoteUploadSource
 */
export declare enum UserEmoteUploadSource {
    /**
     * @generated from enum value: EMOTE_UPLOAD_SOURCE_ANCHOR = 0;
     */
    EMOTE_UPLOAD_SOURCE_ANCHOR = 0,
    /**
     * @generated from enum value: EMOTE_UPLOAD_SOURCE_SUBSCRIBER = 1;
     */
    EMOTE_UPLOAD_SOURCE_SUBSCRIBER = 1,
    /**
     * @generated from enum value: EMOTE_UPLOAD_SOURCE_MODERATOR = 2;
     */
    EMOTE_UPLOAD_SOURCE_MODERATOR = 2,
    /**
     * @generated from enum value: EMOTE_UPLOAD_SOURCE_AI = 3;
     */
    EMOTE_UPLOAD_SOURCE_AI = 3
}
/**
 * Describes the enum webcast.model.data.UserEmoteUploadSource.
 */
export declare const UserEmoteUploadSourceSchema: GenEnum<UserEmoteUploadSource>;
/**
 * @generated from enum webcast.model.data.User_EcommerceEntrance_CreatorType
 */
export declare enum User_EcommerceEntrance_CreatorType {
    /**
     * @generated from enum value: UNDEFINED = 0;
     */
    UNDEFINED = 0,
    /**
     * @generated from enum value: USER_ECOMMERCE_ENTRANCE_CREATOR_TYPE_OFFICIAL = 1;
     */
    USER_ECOMMERCE_ENTRANCE_CREATOR_TYPE_OFFICIAL = 1,
    /**
     * @generated from enum value: MARKET = 2;
     */
    MARKET = 2,
    /**
     * @generated from enum value: USER_ECOMMERCE_ENTRANCE_CREATOR_TYPE_NORMAL = 3;
     */
    USER_ECOMMERCE_ENTRANCE_CREATOR_TYPE_NORMAL = 3
}
/**
 * Describes the enum webcast.model.data.User_EcommerceEntrance_CreatorType.
 */
export declare const User_EcommerceEntrance_CreatorTypeSchema: GenEnum<User_EcommerceEntrance_CreatorType>;
/**
 * @generated from enum webcast.model.data.User_EcommerceEntrance_EntranceType
 */
export declare enum User_EcommerceEntrance_EntranceType {
    /**
     * @generated from enum value: PROFILE = 0;
     */
    PROFILE = 0,
    /**
     * @generated from enum value: SHOWCASE = 1;
     */
    SHOWCASE = 1,
    /**
     * @generated from enum value: SHOP = 2;
     */
    SHOP = 2
}
/**
 * Describes the enum webcast.model.data.User_EcommerceEntrance_EntranceType.
 */
export declare const User_EcommerceEntrance_EntranceTypeSchema: GenEnum<User_EcommerceEntrance_EntranceType>;
/**
 * @generated from enum webcast.model.data.User_EcommerceEntrance_SellingPoint_LiveSellingPointType
 */
export declare enum User_EcommerceEntrance_SellingPoint_LiveSellingPointType {
    /**
     * @generated from enum value: USER_ECOMMERCE_ENTRANCE_SELLING_POINT_LIVE_SELLING_POINT_TYPE_UNDEFINED = 0;
     */
    USER_ECOMMERCE_ENTRANCE_SELLING_POINT_LIVE_SELLING_POINT_TYPE_UNDEFINED = 0,
    /**
     * @generated from enum value: QUALITY = 1;
     */
    QUALITY = 1,
    /**
     * @generated from enum value: SOLD = 2;
     */
    SOLD = 2,
    /**
     * @generated from enum value: TRUST_BETTER_THAN_OTHER_SHOP = 3;
     */
    TRUST_BETTER_THAN_OTHER_SHOP = 3,
    /**
     * @generated from enum value: TRUST_REPLY_IN_TIME = 4;
     */
    TRUST_REPLY_IN_TIME = 4,
    /**
     * @generated from enum value: TRUST_CREATE_SHIP_IN_TIME = 5;
     */
    TRUST_CREATE_SHIP_IN_TIME = 5,
    /**
     * @generated from enum value: TRUST_POSITIVE_REVIEW_RATE = 6;
     */
    TRUST_POSITIVE_REVIEW_RATE = 6
}
/**
 * Describes the enum webcast.model.data.User_EcommerceEntrance_SellingPoint_LiveSellingPointType.
 */
export declare const User_EcommerceEntrance_SellingPoint_LiveSellingPointTypeSchema: GenEnum<User_EcommerceEntrance_SellingPoint_LiveSellingPointType>;
/**
 * @generated from enum webcast.model.data.User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_ShopIdentityLabelType
 */
export declare enum User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_ShopIdentityLabelType {
    /**
     * @generated from enum value: USER_ECOMMERCE_ENTRANCE_SHOP_ENTRANCE_INFO_STORE_LABEL_SHOP_IDENTITY_LABEL_TYPE_UNKNOWN = 0;
     */
    USER_ECOMMERCE_ENTRANCE_SHOP_ENTRANCE_INFO_STORE_LABEL_SHOP_IDENTITY_LABEL_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: TOP_BRAND = 1;
     */
    TOP_BRAND = 1,
    /**
     * @generated from enum value: OFFICIAL_SHOP = 2;
     */
    OFFICIAL_SHOP = 2,
    /**
     * @generated from enum value: AUTHORIZED_SHOP = 3;
     */
    AUTHORIZED_SHOP = 3,
    /**
     * @generated from enum value: GOLDEN_SHOP = 4;
     */
    GOLDEN_SHOP = 4,
    /**
     * @generated from enum value: SILVER_SHOP = 5;
     */
    SILVER_SHOP = 5,
    /**
     * @generated from enum value: GB_TOP_BRAND = 51;
     */
    GB_TOP_BRAND = 51,
    /**
     * @generated from enum value: MALL = 101;
     */
    MALL = 101,
    /**
     * @generated from enum value: TOP_CHOICE = 102;
     */
    TOP_CHOICE = 102,
    /**
     * @generated from enum value: NORMAL_BLUE_V = 1000;
     */
    NORMAL_BLUE_V = 1000
}
/**
 * Describes the enum webcast.model.data.User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_ShopIdentityLabelType.
 */
export declare const User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_ShopIdentityLabelTypeSchema: GenEnum<User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_ShopIdentityLabelType>;
/**
 * @generated from enum webcast.model.data.User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreBrandLabelType
 */
export declare enum User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreBrandLabelType {
    /**
     * @generated from enum value: USER_ECOMMERCE_ENTRANCE_SHOP_ENTRANCE_INFO_STORE_LABEL_STORE_BRAND_LABEL_TYPE_NONE = 0;
     */
    USER_ECOMMERCE_ENTRANCE_SHOP_ENTRANCE_INFO_STORE_LABEL_STORE_BRAND_LABEL_TYPE_NONE = 0,
    /**
     * @generated from enum value: USER_ECOMMERCE_ENTRANCE_SHOP_ENTRANCE_INFO_STORE_LABEL_STORE_BRAND_LABEL_TYPE_OFFICIAL = 1;
     */
    USER_ECOMMERCE_ENTRANCE_SHOP_ENTRANCE_INFO_STORE_LABEL_STORE_BRAND_LABEL_TYPE_OFFICIAL = 1,
    /**
     * @generated from enum value: AUTHORIZED = 2;
     */
    AUTHORIZED = 2,
    /**
     * @generated from enum value: STORE_BRAND_LABEL_TYPE_BLUE_V = 3;
     */
    STORE_BRAND_LABEL_TYPE_BLUE_V = 3,
    /**
     * @generated from enum value: STORE_BRAND_LABEL_TYPE_TOP_CHOICE = 4;
     */
    STORE_BRAND_LABEL_TYPE_TOP_CHOICE = 4,
    /**
     * @generated from enum value: STORE_BRAND_LABEL_TYPE_MALL = 5;
     */
    STORE_BRAND_LABEL_TYPE_MALL = 5
}
/**
 * Describes the enum webcast.model.data.User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreBrandLabelType.
 */
export declare const User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreBrandLabelTypeSchema: GenEnum<User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreBrandLabelType>;
/**
 * @generated from enum webcast.model.data.User_EcommerceEntrance_ViewVersion
 */
export declare enum User_EcommerceEntrance_ViewVersion {
    /**
     * @generated from enum value: VIEW_VERSION_UNKNOWN = 0;
     */
    VIEW_VERSION_UNKNOWN = 0,
    /**
     * @generated from enum value: VIEW_VERSION_STAR_SHOP = 1;
     */
    VIEW_VERSION_STAR_SHOP = 1
}
/**
 * Describes the enum webcast.model.data.User_EcommerceEntrance_ViewVersion.
 */
export declare const User_EcommerceEntrance_ViewVersionSchema: GenEnum<User_EcommerceEntrance_ViewVersion>;
/**
 * @generated from enum webcast.model.data.User_FansClub_FansClubData_UserFansClubStatus
 */
export declare enum User_FansClub_FansClubData_UserFansClubStatus {
    /**
     * @generated from enum value: NOT_JOINED = 0;
     */
    NOT_JOINED = 0,
    /**
     * @generated from enum value: ACTIVE = 1;
     */
    ACTIVE = 1,
    /**
     * @generated from enum value: INACTIVE = 2;
     */
    INACTIVE = 2
}
/**
 * Describes the enum webcast.model.data.User_FansClub_FansClubData_UserFansClubStatus.
 */
export declare const User_FansClub_FansClubData_UserFansClubStatusSchema: GenEnum<User_FansClub_FansClubData_UserFansClubStatus>;
/**
 * @generated from enum webcast.model.data.User_SubscribeInfo_PayStatus
 */
export declare enum User_SubscribeInfo_PayStatus {
    /**
     * @generated from enum value: SUB_STATUS_UNKNOWN = 0;
     */
    SUB_STATUS_UNKNOWN = 0,
    /**
     * @generated from enum value: SUB_STATUS_ONE_TIME = 1;
     */
    SUB_STATUS_ONE_TIME = 1,
    /**
     * @generated from enum value: SUB_STATUS_AUTO_DEDUCTION = 2;
     */
    SUB_STATUS_AUTO_DEDUCTION = 2,
    /**
     * @generated from enum value: SUB_STATUS_AUTO_DEDUCTION_CANCELED = 3;
     */
    SUB_STATUS_AUTO_DEDUCTION_CANCELED = 3,
    /**
     * @generated from enum value: SUB_STATUS_REVOKE = 4;
     */
    SUB_STATUS_REVOKE = 4
}
/**
 * Describes the enum webcast.model.data.User_SubscribeInfo_PayStatus.
 */
export declare const User_SubscribeInfo_PayStatusSchema: GenEnum<User_SubscribeInfo_PayStatus>;
/**
 * @generated from enum webcast.model.data.VerticalPaddingRule
 */
export declare enum VerticalPaddingRule {
    /**
     * @generated from enum value: USE_DEFAULT = 0;
     */
    USE_DEFAULT = 0,
    /**
     * @generated from enum value: USE_TOP_AND_BOTTOM = 1;
     */
    USE_TOP_AND_BOTTOM = 1
}
/**
 * Describes the enum webcast.model.data.VerticalPaddingRule.
 */
export declare const VerticalPaddingRuleSchema: GenEnum<VerticalPaddingRule>;
//# sourceMappingURL=messages_pb.d.ts.map