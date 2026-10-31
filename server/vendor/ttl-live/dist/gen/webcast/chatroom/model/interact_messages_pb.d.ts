import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "../../model/base/messages_pb.js";
import type { CohostABTestType, CoHostPermissoinType, LinkmicPlayType, LinkmicUserStatus, OptPairStatus, TagV2_TagClassification } from "../../model/data/messages_pb.js";
import type { UserInfo } from "../../shared/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/chatroom/model/interact_messages.proto.
 */
export declare const file_webcast_chatroom_model_interact_messages: GenFile;
/**
 * @generated from message webcast.chatroom.model.interact.ActivityBadgeInfo
 */
export type ActivityBadgeInfo = Message<"webcast.chatroom.model.interact.ActivityBadgeInfo"> & {
    /**
     * @generated from field: webcast.chatroom.model.interact.LinkmicDisplayText badge_text = 1;
     */
    badgeText?: LinkmicDisplayText | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.LinkmicDisplayText badge_text_dark = 2;
     */
    badgeTextDark?: LinkmicDisplayText | undefined;
    /**
     * @generated from field: string background_color = 3;
     */
    backgroundColor: string;
    /**
     * @generated from field: string background_color_dark = 4;
     */
    backgroundColorDark: string;
    /**
     * @generated from field: map<string, string> event_trace = 5;
     */
    eventTrace: {
        [key: string]: string;
    };
};
/**
 * Describes the message webcast.chatroom.model.interact.ActivityBadgeInfo.
 * Use `create(ActivityBadgeInfoSchema)` to create a new message.
 */
export declare const ActivityBadgeInfoSchema: GenMessage<ActivityBadgeInfo>;
/**
 * @generated from message webcast.chatroom.model.interact.BattleGamePlayContent
 */
export type BattleGamePlayContent = Message<"webcast.chatroom.model.interact.BattleGamePlayContent"> & {
    /**
     * @generated from field: int64 battle_id = 1;
     */
    battleId: bigint;
    /**
     * @generated from field: int64 group_channel_id = 2;
     */
    groupChannelId: bigint;
    /**
     * @generated from field: repeated webcast.chatroom.model.interact.TeamUser team_member = 3;
     */
    teamMember: TeamUser[];
    /**
     * @generated from field: int64 source_type = 4;
     */
    sourceType: bigint;
    /**
     * @generated from field: int32 invite_type = 5;
     */
    inviteType: number;
};
/**
 * Describes the message webcast.chatroom.model.interact.BattleGamePlayContent.
 * Use `create(BattleGamePlayContentSchema)` to create a new message.
 */
export declare const BattleGamePlayContentSchema: GenMessage<BattleGamePlayContent>;
/**
 * @generated from message webcast.chatroom.model.interact.BattleGamePlayContent_UserInfo
 */
export type BattleGamePlayContent_UserInfo = Message<"webcast.chatroom.model.interact.BattleGamePlayContent_UserInfo"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: int64 room_id = 2;
     */
    roomId: bigint;
    /**
     * @generated from field: int32 invitation_role = 3;
     */
    invitationRole: number;
};
/**
 * Describes the message webcast.chatroom.model.interact.BattleGamePlayContent_UserInfo.
 * Use `create(BattleGamePlayContent_UserInfoSchema)` to create a new message.
 */
export declare const BattleGamePlayContent_UserInfoSchema: GenMessage<BattleGamePlayContent_UserInfo>;
/**
 * @generated from message webcast.chatroom.model.interact.BattleUserSettings
 */
export type BattleUserSettings = Message<"webcast.chatroom.model.interact.BattleUserSettings"> & {
    /**
     * @generated from field: bool is_turn_on = 1;
     */
    isTurnOn: boolean;
    /**
     * @generated from field: bool accept_not_follower_invite = 2;
     */
    acceptNotFollowerInvite: boolean;
    /**
     * @generated from field: bool allow_gift_to_other_anchors = 3;
     */
    allowGiftToOtherAnchors: boolean;
};
/**
 * Describes the message webcast.chatroom.model.interact.BattleUserSettings.
 * Use `create(BattleUserSettingsSchema)` to create a new message.
 */
export declare const BattleUserSettingsSchema: GenMessage<BattleUserSettings>;
/**
 * @generated from message webcast.chatroom.model.interact.CohostABInfo
 */
export type CohostABInfo = Message<"webcast.chatroom.model.interact.CohostABInfo"> & {
    /**
     * @generated from field: bool live_match_button_opt = 1;
     */
    liveMatchButtonOpt: boolean;
    /**
     * @generated from field: bool is_cohost_multiguest = 2;
     */
    isCohostMultiguest: boolean;
    /**
     * @generated from field: bool is_match_playbook_enabled = 3;
     */
    isMatchPlaybookEnabled: boolean;
    /**
     * @generated from field: bool is_cohost_during_multiguest_enabled = 4;
     */
    isCohostDuringMultiguestEnabled: boolean;
    /**
     * @generated from field: bool is_match_playbook_optimisation_enabled = 5;
     */
    isMatchPlaybookOptimisationEnabled: boolean;
};
/**
 * Describes the message webcast.chatroom.model.interact.CohostABInfo.
 * Use `create(CohostABInfoSchema)` to create a new message.
 */
export declare const CohostABInfoSchema: GenMessage<CohostABInfo>;
/**
 * @generated from message webcast.chatroom.model.interact.CohostABTest
 */
export type CohostABTest = Message<"webcast.chatroom.model.interact.CohostABTest"> & {
    /**
     * @generated from field: webcast.model.data.CohostABTestType ab_test_type = 1;
     */
    abTestType: CohostABTestType;
    /**
     * @generated from field: int64 group = 2;
     */
    group: bigint;
};
/**
 * Describes the message webcast.chatroom.model.interact.CohostABTest.
 * Use `create(CohostABTestSchema)` to create a new message.
 */
export declare const CohostABTestSchema: GenMessage<CohostABTest>;
/**
 * @generated from message webcast.chatroom.model.interact.CohostABTestList
 */
export type CohostABTestList = Message<"webcast.chatroom.model.interact.CohostABTestList"> & {
    /**
     * @generated from field: repeated webcast.chatroom.model.interact.CohostABTest ab_test_list = 1;
     */
    abTestList: CohostABTest[];
};
/**
 * Describes the message webcast.chatroom.model.interact.CohostABTestList.
 * Use `create(CohostABTestListSchema)` to create a new message.
 */
export declare const CohostABTestListSchema: GenMessage<CohostABTestList>;
/**
 * @generated from message webcast.chatroom.model.interact.CohostABTestSetting
 */
export type CohostABTestSetting = Message<"webcast.chatroom.model.interact.CohostABTestSetting"> & {
    /**
     * @generated from field: int64 key = 1;
     */
    key: bigint;
    /**
     * @generated from field: webcast.chatroom.model.interact.CohostABTestList value = 2;
     */
    value?: CohostABTestList | undefined;
};
/**
 * Describes the message webcast.chatroom.model.interact.CohostABTestSetting.
 * Use `create(CohostABTestSettingSchema)` to create a new message.
 */
export declare const CohostABTestSettingSchema: GenMessage<CohostABTestSetting>;
/**
 * @generated from message webcast.chatroom.model.interact.CohostListUser
 */
export type CohostListUser = Message<"webcast.chatroom.model.interact.CohostListUser"> & {
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
     * @generated from field: int64 linked_time = 4;
     */
    linkedTime: bigint;
    /**
     * @generated from field: webcast.model.data.LinkmicPlayType play_type = 5;
     */
    playType: LinkmicPlayType;
    /**
     * @generated from field: int64 room_id = 6;
     */
    roomId: bigint;
    /**
     * @generated from field: webcast.model.data.LinkmicUserStatus linkmic_user_status = 7;
     */
    linkmicUserStatus: LinkmicUserStatus;
    /**
     * @generated from field: int64 link_remaining_time = 8;
     */
    linkRemainingTime: bigint;
    /**
     * @generated from field: webcast.model.data.CoHostPermissoinType permission_type = 9;
     */
    permissionType: CoHostPermissoinType;
    /**
     * @generated from field: string display_id = 10;
     */
    displayId: string;
    /**
     * @generated from field: int64 follow_status = 11;
     */
    followStatus: bigint;
    /**
     * @generated from field: bool is_low_version = 12;
     */
    isLowVersion: boolean;
    /**
     * @generated from field: int64 rival_user_id = 13;
     */
    rivalUserId: bigint;
    /**
     * @generated from field: int64 rival_room_id = 14;
     */
    rivalRoomId: bigint;
    /**
     * @generated from field: bool is_initiator = 15;
     */
    isInitiator: boolean;
    /**
     * @generated from field: string linkmic_id_str = 16;
     */
    linkmicIdStr: string;
    /**
     * @generated from field: int64 best_teammate_uid = 17;
     */
    bestTeammateUid: bigint;
    /**
     * @generated from field: bool has_topic_perm = 18;
     */
    hasTopicPerm: boolean;
    /**
     * @generated from field: int64 inner_channel_id = 19;
     */
    innerChannelId: bigint;
};
/**
 * Describes the message webcast.chatroom.model.interact.CohostListUser.
 * Use `create(CohostListUserSchema)` to create a new message.
 */
export declare const CohostListUserSchema: GenMessage<CohostListUser>;
/**
 * @generated from message webcast.chatroom.model.interact.CohostTopic
 */
export type CohostTopic = Message<"webcast.chatroom.model.interact.CohostTopic"> & {
    /**
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * @generated from field: string title_key = 2;
     */
    titleKey: string;
    /**
     * @generated from field: string title_text = 3;
     */
    titleText: string;
    /**
     * @generated from field: bool liked = 21;
     */
    liked: boolean;
    /**
     * @generated from field: int64 total_heat = 22;
     */
    totalHeat: bigint;
    /**
     * @generated from field: int64 total_rivals = 23;
     */
    totalRivals: bigint;
    /**
     * @generated from field: repeated webcast.model.base.ImageModel rivals_avatar = 24;
     */
    rivalsAvatar: ImageModel[];
};
/**
 * Describes the message webcast.chatroom.model.interact.CohostTopic.
 * Use `create(CohostTopicSchema)` to create a new message.
 */
export declare const CohostTopicSchema: GenMessage<CohostTopic>;
/**
 * @generated from message webcast.chatroom.model.interact.GamePlayContent
 */
export type GamePlayContent = Message<"webcast.chatroom.model.interact.GamePlayContent"> & {
    /**
     * @generated from field: webcast.chatroom.model.interact.BattleGamePlayContent battle_gameplay_content = 1;
     */
    battleGameplayContent?: BattleGamePlayContent | undefined;
};
/**
 * Describes the message webcast.chatroom.model.interact.GamePlayContent.
 * Use `create(GamePlayContentSchema)` to create a new message.
 */
export declare const GamePlayContentSchema: GenMessage<GamePlayContent>;
/**
 * @generated from message webcast.chatroom.model.interact.GiftGalleryBadgeInfo
 */
export type GiftGalleryBadgeInfo = Message<"webcast.chatroom.model.interact.GiftGalleryBadgeInfo"> & {
    /**
     * @generated from field: webcast.chatroom.model.interact.GiftGalleryBadgeSection league_info = 1;
     */
    leagueInfo?: GiftGalleryBadgeSection | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.GiftGalleryBadgeSection gallery_info = 2;
     */
    galleryInfo?: GiftGalleryBadgeSection | undefined;
    /**
     * @generated from field: string background_color = 3;
     */
    backgroundColor: string;
    /**
     * @generated from field: string separator_color = 4;
     */
    separatorColor: string;
    /**
     * @generated from field: string dark_mode_background_color = 5;
     */
    darkModeBackgroundColor: string;
    /**
     * @generated from field: string league_name = 6;
     */
    leagueName: string;
    /**
     * @generated from field: string schema = 7;
     */
    schema: string;
};
/**
 * Describes the message webcast.chatroom.model.interact.GiftGalleryBadgeInfo.
 * Use `create(GiftGalleryBadgeInfoSchema)` to create a new message.
 */
export declare const GiftGalleryBadgeInfoSchema: GenMessage<GiftGalleryBadgeInfo>;
/**
 * @generated from message webcast.chatroom.model.interact.GiftGalleryBadgeSection
 */
export type GiftGalleryBadgeSection = Message<"webcast.chatroom.model.interact.GiftGalleryBadgeSection"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 1;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.chatroom.model.interact.LinkMicGiftGalleryDisplayText display_text = 2;
     */
    displayText?: LinkMicGiftGalleryDisplayText | undefined;
    /**
     * @generated from field: bool should_show = 3;
     */
    shouldShow: boolean;
    /**
     * @generated from field: webcast.model.base.ImageModel dark_mode_icon = 4;
     */
    darkModeIcon?: ImageModel | undefined;
};
/**
 * Describes the message webcast.chatroom.model.interact.GiftGalleryBadgeSection.
 * Use `create(GiftGalleryBadgeSectionSchema)` to create a new message.
 */
export declare const GiftGalleryBadgeSectionSchema: GenMessage<GiftGalleryBadgeSection>;
/**
 * @generated from message webcast.chatroom.model.interact.LinkMicGiftGalleryDisplayText
 */
export type LinkMicGiftGalleryDisplayText = Message<"webcast.chatroom.model.interact.LinkMicGiftGalleryDisplayText"> & {
    /**
     * @generated from field: string content = 1;
     */
    content: string;
    /**
     * @generated from field: string color = 2;
     */
    color: string;
    /**
     * @generated from field: string dark_mode_color = 3;
     */
    darkModeColor: string;
};
/**
 * Describes the message webcast.chatroom.model.interact.LinkMicGiftGalleryDisplayText.
 * Use `create(LinkMicGiftGalleryDisplayTextSchema)` to create a new message.
 */
export declare const LinkMicGiftGalleryDisplayTextSchema: GenMessage<LinkMicGiftGalleryDisplayText>;
/**
 * @generated from message webcast.chatroom.model.interact.LinkmicDisplayText
 */
export type LinkmicDisplayText = Message<"webcast.chatroom.model.interact.LinkmicDisplayText"> & {
    /**
     * @generated from field: string color = 1;
     */
    color: string;
    /**
     * @generated from field: string key = 20;
     */
    key: string;
    /**
     * @generated from field: string default_pattern = 21;
     */
    defaultPattern: string;
    /**
     * @generated from field: repeated webcast.chatroom.model.interact.LinkmicDisplayTextPieces pieces = 22;
     */
    pieces: LinkmicDisplayTextPieces[];
};
/**
 * Describes the message webcast.chatroom.model.interact.LinkmicDisplayText.
 * Use `create(LinkmicDisplayTextSchema)` to create a new message.
 */
export declare const LinkmicDisplayTextSchema: GenMessage<LinkmicDisplayText>;
/**
 * @generated from message webcast.chatroom.model.interact.LinkmicDisplayTextPieces
 */
export type LinkmicDisplayTextPieces = Message<"webcast.chatroom.model.interact.LinkmicDisplayTextPieces"> & {
    /**
     * @generated from field: string string_piece = 1;
     */
    stringPiece: string;
};
/**
 * Describes the message webcast.chatroom.model.interact.LinkmicDisplayTextPieces.
 * Use `create(LinkmicDisplayTextPiecesSchema)` to create a new message.
 */
export declare const LinkmicDisplayTextPiecesSchema: GenMessage<LinkmicDisplayTextPieces>;
/**
 * @generated from message webcast.chatroom.model.interact.LinkmicShareRevenueSettingStruct
 */
export type LinkmicShareRevenueSettingStruct = Message<"webcast.chatroom.model.interact.LinkmicShareRevenueSettingStruct"> & {
    /**
     * @generated from field: int64 share_revenue_setting_version_code = 1;
     */
    shareRevenueSettingVersionCode: bigint;
    /**
     * @generated from field: int32 linkmic_share_revenue_setting = 2;
     */
    linkmicShareRevenueSetting: number;
    /**
     * @generated from field: int32 linkmic_share_revenue_setting_ratio = 3;
     */
    linkmicShareRevenueSettingRatio: number;
    /**
     * @generated from field: bool enable_setting_ratio = 4;
     */
    enableSettingRatio: boolean;
};
/**
 * Describes the message webcast.chatroom.model.interact.LinkmicShareRevenueSettingStruct.
 * Use `create(LinkmicShareRevenueSettingStructSchema)` to create a new message.
 */
export declare const LinkmicShareRevenueSettingStructSchema: GenMessage<LinkmicShareRevenueSettingStruct>;
/**
 * @generated from message webcast.chatroom.model.interact.OptPairInfo
 */
export type OptPairInfo = Message<"webcast.chatroom.model.interact.OptPairInfo"> & {
    /**
     * @generated from field: int64 mapping_id = 1;
     */
    mappingId: bigint;
    /**
     * @generated from field: int64 expected_time_sec = 2;
     */
    expectedTimeSec: bigint;
    /**
     * @generated from field: webcast.model.data.OptPairStatus opt_pair_status = 3;
     */
    optPairStatus: OptPairStatus;
    /**
     * @generated from field: int64 opt_pair_type = 4;
     */
    optPairType: bigint;
    /**
     * @generated from field: repeated webcast.chatroom.model.interact.TeamInfo team_info = 5;
     */
    teamInfo: TeamInfo[];
};
/**
 * Describes the message webcast.chatroom.model.interact.OptPairInfo.
 * Use `create(OptPairInfoSchema)` to create a new message.
 */
export declare const OptPairInfoSchema: GenMessage<OptPairInfo>;
/**
 * @generated from message webcast.chatroom.model.interact.RandomMatchContent
 */
export type RandomMatchContent = Message<"webcast.chatroom.model.interact.RandomMatchContent"> & {
    /**
     * @generated from field: string match_id = 1;
     */
    matchId: string;
    /**
     * @generated from field: int64 source_type = 2;
     */
    sourceType: bigint;
    /**
     * @generated from field: int64 paired_time = 3;
     */
    pairedTime: bigint;
    /**
     * @generated from field: repeated webcast.chatroom.model.interact.UserGroup paired_group_list = 4;
     */
    pairedGroupList: UserGroup[];
    /**
     * @generated from field: int32 matched_preference_tag = 20;
     */
    matchedPreferenceTag: number;
};
/**
 * Describes the message webcast.chatroom.model.interact.RandomMatchContent.
 * Use `create(RandomMatchContentSchema)` to create a new message.
 */
export declare const RandomMatchContentSchema: GenMessage<RandomMatchContent>;
/**
 * @generated from message webcast.chatroom.model.interact.RandomMatchContent_UserInfo
 */
export type RandomMatchContent_UserInfo = Message<"webcast.chatroom.model.interact.RandomMatchContent_UserInfo"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: int64 room_id = 2;
     */
    roomId: bigint;
    /**
     * @generated from field: int32 invitation_role_type = 3;
     */
    invitationRoleType: number;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_thumb = 4;
     */
    avatarThumb?: ImageModel | undefined;
    /**
     * @generated from field: string nickname = 5;
     */
    nickname: string;
};
/**
 * Describes the message webcast.chatroom.model.interact.RandomMatchContent_UserInfo.
 * Use `create(RandomMatchContent_UserInfoSchema)` to create a new message.
 */
export declare const RandomMatchContent_UserInfoSchema: GenMessage<RandomMatchContent_UserInfo>;
/**
 * @generated from message webcast.chatroom.model.interact.RivalsGameTag
 */
export type RivalsGameTag = Message<"webcast.chatroom.model.interact.RivalsGameTag"> & {
    /**
     * @generated from field: int64 tag_id = 1;
     */
    tagId: bigint;
    /**
     * @generated from field: string tag_display_text = 2;
     */
    tagDisplayText: string;
    /**
     * @generated from field: int64 gap_time_tag = 3;
     */
    gapTimeTag: bigint;
};
/**
 * Describes the message webcast.chatroom.model.interact.RivalsGameTag.
 * Use `create(RivalsGameTagSchema)` to create a new message.
 */
export declare const RivalsGameTagSchema: GenMessage<RivalsGameTag>;
/**
 * @generated from message webcast.chatroom.model.interact.SecondDegreeRelationContent
 */
export type SecondDegreeRelationContent = Message<"webcast.chatroom.model.interact.SecondDegreeRelationContent"> & {
    /**
     * @generated from field: repeated webcast.shared.UserInfo related_users = 1;
     */
    relatedUsers: UserInfo[];
    /**
     * @generated from field: int64 total_related_user_cnt = 2;
     */
    totalRelatedUserCnt: bigint;
};
/**
 * Describes the message webcast.chatroom.model.interact.SecondDegreeRelationContent.
 * Use `create(SecondDegreeRelationContentSchema)` to create a new message.
 */
export declare const SecondDegreeRelationContentSchema: GenMessage<SecondDegreeRelationContent>;
/**
 * @generated from message webcast.chatroom.model.interact.SimilarInterestContent
 */
export type SimilarInterestContent = Message<"webcast.chatroom.model.interact.SimilarInterestContent"> & {
    /**
     * @generated from field: int64 content_id = 1;
     */
    contentId: bigint;
    /**
     * @generated from field: string display_text = 2;
     */
    displayText: string;
};
/**
 * Describes the message webcast.chatroom.model.interact.SimilarInterestContent.
 * Use `create(SimilarInterestContentSchema)` to create a new message.
 */
export declare const SimilarInterestContentSchema: GenMessage<SimilarInterestContent>;
/**
 * @generated from message webcast.chatroom.model.interact.SubtitleSettings
 */
export type SubtitleSettings = Message<"webcast.chatroom.model.interact.SubtitleSettings"> & {
    /**
     * @generated from field: int32 has_right = 1;
     */
    hasRight: number;
    /**
     * @generated from field: int32 temporary_ban = 2;
     */
    temporaryBan: number;
    /**
     * @generated from field: int32 enable = 3;
     */
    enable: number;
    /**
     * @generated from field: int64 expire_date = 4;
     */
    expireDate: bigint;
    /**
     * @generated from field: string target_language = 5;
     */
    targetLanguage: string;
    /**
     * @generated from field: string label_text = 6;
     */
    labelText: string;
};
/**
 * Describes the message webcast.chatroom.model.interact.SubtitleSettings.
 * Use `create(SubtitleSettingsSchema)` to create a new message.
 */
export declare const SubtitleSettingsSchema: GenMessage<SubtitleSettings>;
/**
 * @generated from message webcast.chatroom.model.interact.TagV2
 */
export type TagV2 = Message<"webcast.chatroom.model.interact.TagV2"> & {
    /**
     * @generated from field: webcast.model.data.TagV2_TagClassification tag_classification = 1;
     */
    tagClassification: TagV2_TagClassification;
    /**
     * @generated from field: int32 tag_type = 2;
     */
    tagType: number;
    /**
     * @generated from field: string tag_value = 3;
     */
    tagValue: string;
    /**
     * @generated from field: string starling_key = 4;
     */
    starlingKey: string;
    /**
     * @generated from field: webcast.chatroom.model.interact.SecondDegreeRelationContent second_degree_relation_content = 10;
     */
    secondDegreeRelationContent?: SecondDegreeRelationContent | undefined;
    /**
     * @generated from field: int64 cohost_history_day = 11;
     */
    cohostHistoryDay: bigint;
    /**
     * @generated from field: webcast.chatroom.model.interact.SimilarInterestContent similar_interest_content = 12;
     */
    similarInterestContent?: SimilarInterestContent | undefined;
};
/**
 * Describes the message webcast.chatroom.model.interact.TagV2.
 * Use `create(TagV2Schema)` to create a new message.
 */
export declare const TagV2Schema: GenMessage<TagV2>;
/**
 * @generated from message webcast.chatroom.model.interact.TeamInfo
 */
export type TeamInfo = Message<"webcast.chatroom.model.interact.TeamInfo"> & {
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
 * Describes the message webcast.chatroom.model.interact.TeamInfo.
 * Use `create(TeamInfoSchema)` to create a new message.
 */
export declare const TeamInfoSchema: GenMessage<TeamInfo>;
/**
 * @generated from message webcast.chatroom.model.interact.TeamUser
 */
export type TeamUser = Message<"webcast.chatroom.model.interact.TeamUser"> & {
    /**
     * @generated from field: int64 team_id = 1;
     */
    teamId: bigint;
    /**
     * @generated from field: repeated int64 user_id = 2;
     */
    userId: bigint[];
    /**
     * @generated from field: repeated webcast.chatroom.model.interact.BattleGamePlayContent_UserInfo user_info_list = 3;
     */
    userInfoList: BattleGamePlayContent_UserInfo[];
};
/**
 * Describes the message webcast.chatroom.model.interact.TeamUser.
 * Use `create(TeamUserSchema)` to create a new message.
 */
export declare const TeamUserSchema: GenMessage<TeamUser>;
/**
 * @generated from message webcast.chatroom.model.interact.TopHostInfo
 */
export type TopHostInfo = Message<"webcast.chatroom.model.interact.TopHostInfo"> & {
    /**
     * @generated from field: string rank_type = 1;
     */
    rankType: string;
    /**
     * @generated from field: int64 top_index = 2;
     */
    topIndex: bigint;
};
/**
 * Describes the message webcast.chatroom.model.interact.TopHostInfo.
 * Use `create(TopHostInfoSchema)` to create a new message.
 */
export declare const TopHostInfoSchema: GenMessage<TopHostInfo>;
/**
 * @generated from message webcast.chatroom.model.interact.UserGroup
 */
export type UserGroup = Message<"webcast.chatroom.model.interact.UserGroup"> & {
    /**
     * @generated from field: repeated webcast.chatroom.model.interact.RandomMatchContent_UserInfo user_info = 1;
     */
    userInfo: RandomMatchContent_UserInfo[];
};
/**
 * Describes the message webcast.chatroom.model.interact.UserGroup.
 * Use `create(UserGroupSchema)` to create a new message.
 */
export declare const UserGroupSchema: GenMessage<UserGroup>;
/**
 * @generated from message webcast.chatroom.model.interact.UserSuggestionInfo
 */
export type UserSuggestionInfo = Message<"webcast.chatroom.model.interact.UserSuggestionInfo"> & {
    /**
     * @generated from field: int64 vote_count = 1;
     */
    voteCount: bigint;
    /**
     * @generated from field: repeated webcast.shared.UserInfo voter_info_list = 2;
     */
    voterInfoList: UserInfo[];
    /**
     * @generated from field: string detail_page_lynx = 3;
     */
    detailPageLynx: string;
};
/**
 * Describes the message webcast.chatroom.model.interact.UserSuggestionInfo.
 * Use `create(UserSuggestionInfoSchema)` to create a new message.
 */
export declare const UserSuggestionInfoSchema: GenMessage<UserSuggestionInfo>;
/**
 * @generated from message webcast.chatroom.model.interact.VirtualWaitingUser
 */
export type VirtualWaitingUser = Message<"webcast.chatroom.model.interact.VirtualWaitingUser"> & {
    /**
     * @generated from field: int64 send_user_id = 1;
     */
    sendUserId: bigint;
    /**
     * @generated from field: int64 send_timestamp = 2;
     */
    sendTimestamp: bigint;
    /**
     * @generated from field: repeated webcast.model.base.ImageModel avatars = 3;
     */
    avatars: ImageModel[];
};
/**
 * Describes the message webcast.chatroom.model.interact.VirtualWaitingUser.
 * Use `create(VirtualWaitingUserSchema)` to create a new message.
 */
export declare const VirtualWaitingUserSchema: GenMessage<VirtualWaitingUser>;
//# sourceMappingURL=interact_messages_pb.d.ts.map