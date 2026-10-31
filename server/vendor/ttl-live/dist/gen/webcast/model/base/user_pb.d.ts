import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { TimerDetail } from "../../chatroom/api_pb.js";
import type { ImageModel } from "./messages_pb.js";
import type { BadgeDisplayType, BadgeExhibitionType, BadgePriorityType, BadgeSceneType, BadgeTextPosition, DisplayStatus, HorizontalPaddingRule, Position, SubSplitStatus, User_SubscribeInfo_PayStatus, VerticalPaddingRule } from "../data/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/base/user.proto.
 */
export declare const file_webcast_model_base_user: GenFile;
/**
 * @generated from message webcast.model.base.user.ArrowConfig
 */
export type ArrowConfig = Message<"webcast.model.base.user.ArrowConfig"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 1;
     */
    icon?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.base.user.ArrowConfig.
 * Use `create(ArrowConfigSchema)` to create a new message.
 */
export declare const ArrowConfigSchema: GenMessage<ArrowConfig>;
/**
 * @generated from message webcast.model.base.user.BadgeStruct
 */
export type BadgeStruct = Message<"webcast.model.base.user.BadgeStruct"> & {
    /**
     * @generated from field: webcast.model.data.BadgeDisplayType display_type = 1;
     */
    displayType: BadgeDisplayType;
    /**
     * @generated from field: webcast.model.data.BadgePriorityType priority_type = 2;
     */
    priorityType: BadgePriorityType;
    /**
     * @generated from field: webcast.model.data.BadgeSceneType scene_type = 3;
     */
    sceneType: BadgeSceneType;
    /**
     * @generated from field: webcast.model.data.Position position = 4;
     */
    position: Position;
    /**
     * @generated from field: webcast.model.data.DisplayStatus display_status = 5;
     */
    displayStatus: DisplayStatus;
    /**
     * @generated from field: int64 greyed_by_client = 6;
     */
    greyedByClient: bigint;
    /**
     * @generated from field: webcast.model.data.BadgeExhibitionType exhibition_type = 7;
     */
    exhibitionType: BadgeExhibitionType;
    /**
     * @generated from field: string openweburl = 10;
     */
    openweburl: string;
    /**
     * @generated from field: bool display = 11;
     */
    display: boolean;
    /**
     * @generated from field: webcast.model.base.user.PrivilegeLogExtra privilege_log_extra = 12;
     */
    privilegeLogExtra?: PrivilegeLogExtra | undefined;
    /**
     * @generated from field: webcast.model.base.user.ImageBadge image = 20;
     */
    image?: ImageBadge | undefined;
    /**
     * @generated from field: webcast.model.base.user.TextBadge text = 21;
     */
    text?: TextBadge | undefined;
    /**
     * @generated from field: webcast.model.base.user.StringBadge str = 22;
     */
    str?: StringBadge | undefined;
    /**
     * @generated from field: webcast.model.base.user.CombineBadgeStruct combine = 23;
     */
    combine?: CombineBadgeStruct | undefined;
    /**
     * @generated from field: bool is_customized = 24;
     */
    isCustomized: boolean;
};
/**
 * Describes the message webcast.model.base.user.BadgeStruct.
 * Use `create(BadgeStructSchema)` to create a new message.
 */
export declare const BadgeStructSchema: GenMessage<BadgeStruct>;
/**
 * @generated from message webcast.model.base.user.BadgeText
 */
export type BadgeText = Message<"webcast.model.base.user.BadgeText"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string default_pattern = 2;
     */
    defaultPattern: string;
    /**
     * @generated from field: repeated string pieces = 3;
     */
    pieces: string[];
};
/**
 * Describes the message webcast.model.base.user.BadgeText.
 * Use `create(BadgeTextSchema)` to create a new message.
 */
export declare const BadgeTextSchema: GenMessage<BadgeText>;
/**
 * @generated from message webcast.model.base.user.CombineBadgeBackground
 */
export type CombineBadgeBackground = Message<"webcast.model.base.user.CombineBadgeBackground"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel image = 1;
     */
    image?: ImageModel | undefined;
    /**
     * @generated from field: string background_color_code = 2;
     */
    backgroundColorCode: string;
    /**
     * @generated from field: string border_color_code = 3;
     */
    borderColorCode: string;
    /**
     * @generated from field: webcast.model.base.user.StretchableBackgroundImage stretchable_background_image = 4;
     */
    stretchableBackgroundImage?: StretchableBackgroundImage | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel left_side_image = 5;
     */
    leftSideImage?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.base.user.CombineBadgeBackground.
 * Use `create(CombineBadgeBackgroundSchema)` to create a new message.
 */
export declare const CombineBadgeBackgroundSchema: GenMessage<CombineBadgeBackground>;
/**
 * @generated from message webcast.model.base.user.CombineBadgeStruct
 */
export type CombineBadgeStruct = Message<"webcast.model.base.user.CombineBadgeStruct"> & {
    /**
     * @generated from field: int32 display_type = 1;
     */
    displayType: number;
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 2;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.user.BadgeText text = 3;
     */
    text?: BadgeText | undefined;
    /**
     * @generated from field: string str = 4;
     */
    str: string;
    /**
     * @generated from field: webcast.model.base.user.PaddingInfo padding = 5;
     */
    padding?: PaddingInfo | undefined;
    /**
     * @generated from field: webcast.model.base.user.FontStyle font_style = 6;
     */
    fontStyle?: FontStyle | undefined;
    /**
     * @generated from field: webcast.model.base.user.ProfileCardPanel profile_card_panel = 7;
     */
    profileCardPanel?: ProfileCardPanel | undefined;
    /**
     * @generated from field: webcast.model.base.user.CombineBadgeBackground background = 11;
     */
    background?: CombineBadgeBackground | undefined;
    /**
     * @generated from field: webcast.model.base.user.CombineBadgeBackground background_dark_mode = 12;
     */
    backgroundDarkMode?: CombineBadgeBackground | undefined;
    /**
     * @generated from field: bool icon_auto_mirrored = 13;
     */
    iconAutoMirrored: boolean;
    /**
     * @generated from field: bool background_auto_mirrored = 14;
     */
    backgroundAutoMirrored: boolean;
    /**
     * @generated from field: int32 public_screen_show_style = 15;
     */
    publicScreenShowStyle: number;
    /**
     * @generated from field: int32 personal_card_show_style = 16;
     */
    personalCardShowStyle: number;
    /**
     * @generated from field: int32 ranklist_online_audience_show_style = 17;
     */
    ranklistOnlineAudienceShowStyle: number;
    /**
     * @generated from field: int32 multi_guest_show_style = 18;
     */
    multiGuestShowStyle: number;
    /**
     * @generated from field: webcast.model.base.user.ArrowConfig arrow_config = 19;
     */
    arrowConfig?: ArrowConfig | undefined;
    /**
     * @generated from field: webcast.model.base.user.PaddingInfo padding_new_font = 20;
     */
    paddingNewFont?: PaddingInfo | undefined;
};
/**
 * Describes the message webcast.model.base.user.CombineBadgeStruct.
 * Use `create(CombineBadgeStructSchema)` to create a new message.
 */
export declare const CombineBadgeStructSchema: GenMessage<CombineBadgeStruct>;
/**
 * @generated from message webcast.model.base.user.ComboBadgeInfo
 */
export type ComboBadgeInfo = Message<"webcast.model.base.user.ComboBadgeInfo"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 1;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: int64 combo_count = 2;
     */
    comboCount: bigint;
};
/**
 * Describes the message webcast.model.base.user.ComboBadgeInfo.
 * Use `create(ComboBadgeInfoSchema)` to create a new message.
 */
export declare const ComboBadgeInfoSchema: GenMessage<ComboBadgeInfo>;
/**
 * @generated from message webcast.model.base.user.CreatorScoreDisplayInfo
 */
export type CreatorScoreDisplayInfo = Message<"webcast.model.base.user.CreatorScoreDisplayInfo"> & {
    /**
     * @generated from field: webcast.model.base.user.CreatorScoreLabelInfo ecommerce_entrance_label = 1;
     */
    ecommerceEntranceLabel?: CreatorScoreLabelInfo | undefined;
    /**
     * @generated from field: int32 score_level = 2;
     */
    scoreLevel: number;
};
/**
 * Describes the message webcast.model.base.user.CreatorScoreDisplayInfo.
 * Use `create(CreatorScoreDisplayInfoSchema)` to create a new message.
 */
export declare const CreatorScoreDisplayInfoSchema: GenMessage<CreatorScoreDisplayInfo>;
/**
 * @generated from message webcast.model.base.user.CreatorScoreLabelInfo
 */
export type CreatorScoreLabelInfo = Message<"webcast.model.base.user.CreatorScoreLabelInfo"> & {
    /**
     * @generated from field: string label_text = 1;
     */
    labelText: string;
    /**
     * @generated from field: string label_text_color_dark = 2;
     */
    labelTextColorDark: string;
    /**
     * @generated from field: string label_text_color_light = 3;
     */
    labelTextColorLight: string;
    /**
     * @generated from field: webcast.model.base.ImageModel logo_dark = 4;
     */
    logoDark?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel logo_light = 5;
     */
    logoLight?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.user.PopUpInfo pop_up_info = 6;
     */
    popUpInfo?: PopUpInfo | undefined;
};
/**
 * Describes the message webcast.model.base.user.CreatorScoreLabelInfo.
 * Use `create(CreatorScoreLabelInfoSchema)` to create a new message.
 */
export declare const CreatorScoreLabelInfoSchema: GenMessage<CreatorScoreLabelInfo>;
/**
 * @generated from message webcast.model.base.user.CreatorScoreProfile
 */
export type CreatorScoreProfile = Message<"webcast.model.base.user.CreatorScoreProfile"> & {
    /**
     * @generated from field: double final_score = 1;
     */
    finalScore: number;
    /**
     * @generated from field: string country_code = 3;
     */
    countryCode: string;
    /**
     * @generated from field: webcast.model.base.user.CreatorScoreDisplayInfo display_info = 4;
     */
    displayInfo?: CreatorScoreDisplayInfo | undefined;
    /**
     * @generated from field: map<string, string> score_info_extra = 5;
     */
    scoreInfoExtra: {
        [key: string]: string;
    };
};
/**
 * Describes the message webcast.model.base.user.CreatorScoreProfile.
 * Use `create(CreatorScoreProfileSchema)` to create a new message.
 */
export declare const CreatorScoreProfileSchema: GenMessage<CreatorScoreProfile>;
/**
 * @generated from message webcast.model.base.user.EnigmaInfo
 */
export type EnigmaInfo = Message<"webcast.model.base.user.EnigmaInfo"> & {
    /**
     * @generated from field: bool is_enigma_mask_on = 1;
     */
    isEnigmaMaskOn: boolean;
};
/**
 * Describes the message webcast.model.base.user.EnigmaInfo.
 * Use `create(EnigmaInfoSchema)` to create a new message.
 */
export declare const EnigmaInfoSchema: GenMessage<EnigmaInfo>;
/**
 * @generated from message webcast.model.base.user.FansClubInfo
 */
export type FansClubInfo = Message<"webcast.model.base.user.FansClubInfo"> & {
    /**
     * @generated from field: bool is_sleeping = 1;
     */
    isSleeping: boolean;
    /**
     * @generated from field: int64 fans_level = 2;
     */
    fansLevel: bigint;
    /**
     * @generated from field: int64 fans_score = 3;
     */
    fansScore: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel badge = 4;
     */
    badge?: ImageModel | undefined;
    /**
     * @generated from field: int64 fans_count = 5;
     */
    fansCount: bigint;
    /**
     * @generated from field: string fans_club_name = 6;
     */
    fansClubName: string;
};
/**
 * Describes the message webcast.model.base.user.FansClubInfo.
 * Use `create(FansClubInfoSchema)` to create a new message.
 */
export declare const FansClubInfoSchema: GenMessage<FansClubInfo>;
/**
 * @generated from message webcast.model.base.user.FollowInfo
 */
export type FollowInfo = Message<"webcast.model.base.user.FollowInfo"> & {
    /**
     * @generated from field: int64 following_count = 1;
     */
    followingCount: bigint;
    /**
     * @generated from field: int64 follower_count = 2;
     */
    followerCount: bigint;
    /**
     * @generated from field: int64 follow_status = 3;
     */
    followStatus: bigint;
    /**
     * @generated from field: int64 push_status = 4;
     */
    pushStatus: bigint;
};
/**
 * Describes the message webcast.model.base.user.FollowInfo.
 * Use `create(FollowInfoSchema)` to create a new message.
 */
export declare const FollowInfoSchema: GenMessage<FollowInfo>;
/**
 * @generated from message webcast.model.base.user.FontStyle
 */
export type FontStyle = Message<"webcast.model.base.user.FontStyle"> & {
    /**
     * @generated from field: int32 font_size = 1;
     */
    fontSize: number;
    /**
     * @generated from field: int32 font_width = 2;
     */
    fontWidth: number;
    /**
     * @generated from field: string font_color = 3;
     */
    fontColor: string;
    /**
     * @generated from field: string border_color = 4;
     */
    borderColor: string;
};
/**
 * Describes the message webcast.model.base.user.FontStyle.
 * Use `create(FontStyleSchema)` to create a new message.
 */
export declare const FontStyleSchema: GenMessage<FontStyle>;
/**
 * @generated from message webcast.model.base.user.IconConfig
 */
export type IconConfig = Message<"webcast.model.base.user.IconConfig"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 1;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.user.CombineBadgeBackground background = 2;
     */
    background?: CombineBadgeBackground | undefined;
};
/**
 * Describes the message webcast.model.base.user.IconConfig.
 * Use `create(IconConfigSchema)` to create a new message.
 */
export declare const IconConfigSchema: GenMessage<IconConfig>;
/**
 * @generated from message webcast.model.base.user.ImageBadge
 */
export type ImageBadge = Message<"webcast.model.base.user.ImageBadge"> & {
    /**
     * @generated from field: webcast.model.data.BadgeDisplayType display_type = 1;
     */
    displayType: BadgeDisplayType;
    /**
     * @generated from field: webcast.model.base.ImageModel image = 2;
     */
    image?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.base.user.ImageBadge.
 * Use `create(ImageBadgeSchema)` to create a new message.
 */
export declare const ImageBadgeSchema: GenMessage<ImageBadge>;
/**
 * @generated from message webcast.model.base.user.LabelConfig
 */
export type LabelConfig = Message<"webcast.model.base.user.LabelConfig"> & {
    /**
     * @generated from field: string label = 1;
     */
    label: string;
    /**
     * @generated from field: webcast.model.base.user.FontStyle font_style = 2;
     */
    fontStyle?: FontStyle | undefined;
    /**
     * @generated from field: webcast.model.base.user.CombineBadgeBackground background = 3;
     */
    background?: CombineBadgeBackground | undefined;
};
/**
 * Describes the message webcast.model.base.user.LabelConfig.
 * Use `create(LabelConfigSchema)` to create a new message.
 */
export declare const LabelConfigSchema: GenMessage<LabelConfig>;
/**
 * @generated from message webcast.model.base.user.NumberConfig
 */
export type NumberConfig = Message<"webcast.model.base.user.NumberConfig"> & {
    /**
     * @generated from field: int64 number = 1;
     */
    number: bigint;
    /**
     * @generated from field: webcast.model.base.user.FontStyle font_style = 2;
     */
    fontStyle?: FontStyle | undefined;
    /**
     * @generated from field: webcast.model.base.user.CombineBadgeBackground background = 3;
     */
    background?: CombineBadgeBackground | undefined;
};
/**
 * Describes the message webcast.model.base.user.NumberConfig.
 * Use `create(NumberConfigSchema)` to create a new message.
 */
export declare const NumberConfigSchema: GenMessage<NumberConfig>;
/**
 * @generated from message webcast.model.base.user.OwnRoom
 */
export type OwnRoom = Message<"webcast.model.base.user.OwnRoom"> & {
    /**
     * @generated from field: repeated int64 room_ids = 1;
     */
    roomIds: bigint[];
    /**
     * @generated from field: repeated string room_ids_str = 2;
     */
    roomIdsStr: string[];
};
/**
 * Describes the message webcast.model.base.user.OwnRoom.
 * Use `create(OwnRoomSchema)` to create a new message.
 */
export declare const OwnRoomSchema: GenMessage<OwnRoom>;
/**
 * @generated from message webcast.model.base.user.PaddingInfo
 */
export type PaddingInfo = Message<"webcast.model.base.user.PaddingInfo"> & {
    /**
     * @generated from field: bool use_specific = 1;
     */
    useSpecific: boolean;
    /**
     * @generated from field: int32 middle_padding = 2;
     */
    middlePadding: number;
    /**
     * @generated from field: int32 badge_width = 3;
     */
    badgeWidth: number;
    /**
     * @generated from field: int32 left_padding = 4;
     */
    leftPadding: number;
    /**
     * @generated from field: int32 right_padding = 5;
     */
    rightPadding: number;
    /**
     * @generated from field: int32 icon_top_padding = 6;
     */
    iconTopPadding: number;
    /**
     * @generated from field: int32 icon_bottom_padding = 7;
     */
    iconBottomPadding: number;
    /**
     * @generated from field: webcast.model.data.HorizontalPaddingRule horizontal_padding_rule = 8;
     */
    horizontalPaddingRule: HorizontalPaddingRule;
    /**
     * @generated from field: webcast.model.data.VerticalPaddingRule vertical_padding_rule = 9;
     */
    verticalPaddingRule: VerticalPaddingRule;
};
/**
 * Describes the message webcast.model.base.user.PaddingInfo.
 * Use `create(PaddingInfoSchema)` to create a new message.
 */
export declare const PaddingInfoSchema: GenMessage<PaddingInfo>;
/**
 * @generated from message webcast.model.base.user.PopUpInfo
 */
export type PopUpInfo = Message<"webcast.model.base.user.PopUpInfo"> & {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
};
/**
 * Describes the message webcast.model.base.user.PopUpInfo.
 * Use `create(PopUpInfoSchema)` to create a new message.
 */
export declare const PopUpInfoSchema: GenMessage<PopUpInfo>;
/**
 * @generated from message webcast.model.base.user.PrivilegeLogExtra
 */
export type PrivilegeLogExtra = Message<"webcast.model.base.user.PrivilegeLogExtra"> & {
    /**
     * @generated from field: string data_version = 1;
     */
    dataVersion: string;
    /**
     * @generated from field: string privilege_id = 2;
     */
    privilegeId: string;
    /**
     * @generated from field: string privilege_version = 3;
     */
    privilegeVersion: string;
    /**
     * @generated from field: string privilege_order_id = 4;
     */
    privilegeOrderId: string;
    /**
     * @generated from field: string level = 5;
     */
    level: string;
    /**
     * @generated from field: int64 start_time = 6;
     */
    startTime: bigint;
    /**
     * @generated from field: int64 end_time = 7;
     */
    endTime: bigint;
};
/**
 * Describes the message webcast.model.base.user.PrivilegeLogExtra.
 * Use `create(PrivilegeLogExtraSchema)` to create a new message.
 */
export declare const PrivilegeLogExtraSchema: GenMessage<PrivilegeLogExtra>;
/**
 * @generated from message webcast.model.base.user.ProfileCardPanel
 */
export type ProfileCardPanel = Message<"webcast.model.base.user.ProfileCardPanel"> & {
    /**
     * @generated from field: bool use_new_profile_card_style = 1;
     */
    useNewProfileCardStyle: boolean;
    /**
     * @generated from field: webcast.model.data.BadgeTextPosition badge_text_position = 2;
     */
    badgeTextPosition: BadgeTextPosition;
    /**
     * @generated from field: webcast.model.base.user.ProjectionConfig projection_config = 3;
     */
    projectionConfig?: ProjectionConfig | undefined;
    /**
     * @generated from field: webcast.model.base.user.ProfileContent profile_content = 4;
     */
    profileContent?: ProfileContent | undefined;
    /**
     * @generated from field: webcast.model.base.user.SeparatorConfig separator_config = 5;
     */
    separatorConfig?: SeparatorConfig | undefined;
};
/**
 * Describes the message webcast.model.base.user.ProfileCardPanel.
 * Use `create(ProfileCardPanelSchema)` to create a new message.
 */
export declare const ProfileCardPanelSchema: GenMessage<ProfileCardPanel>;
/**
 * @generated from message webcast.model.base.user.ProfileContent
 */
export type ProfileContent = Message<"webcast.model.base.user.ProfileContent"> & {
    /**
     * @generated from field: bool use_content = 1;
     */
    useContent: boolean;
    /**
     * @generated from field: repeated webcast.model.base.user.IconConfig icon_list = 2;
     */
    iconList: IconConfig[];
    /**
     * @generated from field: webcast.model.base.user.NumberConfig number_config = 3;
     */
    numberConfig?: NumberConfig | undefined;
    /**
     * @generated from field: webcast.model.base.user.LabelConfig label_config = 4;
     */
    labelConfig?: LabelConfig | undefined;
};
/**
 * Describes the message webcast.model.base.user.ProfileContent.
 * Use `create(ProfileContentSchema)` to create a new message.
 */
export declare const ProfileContentSchema: GenMessage<ProfileContent>;
/**
 * @generated from message webcast.model.base.user.ProjectionConfig
 */
export type ProjectionConfig = Message<"webcast.model.base.user.ProjectionConfig"> & {
    /**
     * @generated from field: bool use_projection = 1;
     */
    useProjection: boolean;
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 2;
     */
    icon?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.base.user.ProjectionConfig.
 * Use `create(ProjectionConfigSchema)` to create a new message.
 */
export declare const ProjectionConfigSchema: GenMessage<ProjectionConfig>;
/**
 * @generated from message webcast.model.base.user.SeparatorConfig
 */
export type SeparatorConfig = Message<"webcast.model.base.user.SeparatorConfig"> & {
    /**
     * @generated from field: string color = 1;
     */
    color: string;
};
/**
 * Describes the message webcast.model.base.user.SeparatorConfig.
 * Use `create(SeparatorConfigSchema)` to create a new message.
 */
export declare const SeparatorConfigSchema: GenMessage<SeparatorConfig>;
/**
 * @generated from message webcast.model.base.user.StretchableBackgroundImage
 */
export type StretchableBackgroundImage = Message<"webcast.model.base.user.StretchableBackgroundImage"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel image = 1;
     */
    image?: ImageModel | undefined;
    /**
     * @generated from field: repeated int64 flex_settings = 2;
     */
    flexSettings: bigint[];
};
/**
 * Describes the message webcast.model.base.user.StretchableBackgroundImage.
 * Use `create(StretchableBackgroundImageSchema)` to create a new message.
 */
export declare const StretchableBackgroundImageSchema: GenMessage<StretchableBackgroundImage>;
/**
 * @generated from message webcast.model.base.user.StringBadge
 */
export type StringBadge = Message<"webcast.model.base.user.StringBadge"> & {
    /**
     * @generated from field: webcast.model.data.BadgeDisplayType display_type = 1;
     */
    displayType: BadgeDisplayType;
    /**
     * @generated from field: string str = 2;
     */
    str: string;
};
/**
 * Describes the message webcast.model.base.user.StringBadge.
 * Use `create(StringBadgeSchema)` to create a new message.
 */
export declare const StringBadgeSchema: GenMessage<StringBadge>;
/**
 * @generated from message webcast.model.base.user.SubscribeBadge
 */
export type SubscribeBadge = Message<"webcast.model.base.user.SubscribeBadge"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel origin_img = 3;
     */
    originImg?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel preview_img = 4;
     */
    previewImg?: ImageModel | undefined;
    /**
     * @generated from field: bool is_customized = 5;
     */
    isCustomized: boolean;
};
/**
 * Describes the message webcast.model.base.user.SubscribeBadge.
 * Use `create(SubscribeBadgeSchema)` to create a new message.
 */
export declare const SubscribeBadgeSchema: GenMessage<SubscribeBadge>;
/**
 * @generated from message webcast.model.base.user.SubscribeInfo
 */
export type SubscribeInfo = Message<"webcast.model.base.user.SubscribeInfo"> & {
    /**
     * @generated from field: bool qualification = 1;
     */
    qualification: boolean;
    /**
     * @generated from field: bool is_subscribe = 2;
     */
    isSubscribe: boolean;
    /**
     * @generated from field: webcast.model.base.user.SubscribeBadge badge = 3;
     */
    badge?: SubscribeBadge | undefined;
    /**
     * @generated from field: bool enable_subscription = 4;
     */
    enableSubscription: boolean;
    /**
     * @generated from field: int32 subscriber_count = 5;
     */
    subscriberCount: number;
    /**
     * @generated from field: bool is_in_grace_period = 6;
     */
    isInGracePeriod: boolean;
    /**
     * @generated from field: bool is_subscribed_to_anchor = 7;
     */
    isSubscribedToAnchor: boolean;
    /**
     * @generated from field: webcast.chatroom.api.TimerDetail timer_detail = 8;
     */
    timerDetail?: TimerDetail | undefined;
    /**
     * @generated from field: bool user_gift_sub_auth = 9;
     */
    userGiftSubAuth: boolean;
    /**
     * @generated from field: bool anchor_gift_sub_auth = 10;
     */
    anchorGiftSubAuth: boolean;
    /**
     * @generated from field: webcast.model.data.User_SubscribeInfo_PayStatus status = 11;
     */
    status: User_SubscribeInfo_PayStatus;
    /**
     * @generated from field: int64 sub_end_time = 12;
     */
    subEndTime: bigint;
    /**
     * @generated from field: string package_id = 13;
     */
    packageId: string;
    /**
     * @generated from field: string sol_room_display_text = 14;
     */
    solRoomDisplayText: string;
    /**
     * @generated from field: bool is_sol_eligible = 15;
     */
    isSolEligible: boolean;
    /**
     * @generated from field: webcast.model.data.SubSplitStatus sub_split_status = 101;
     */
    subSplitStatus?: SubSplitStatus | undefined;
};
/**
 * Describes the message webcast.model.base.user.SubscribeInfo.
 * Use `create(SubscribeInfoSchema)` to create a new message.
 */
export declare const SubscribeInfoSchema: GenMessage<SubscribeInfo>;
/**
 * @generated from message webcast.model.base.user.TextBadge
 */
export type TextBadge = Message<"webcast.model.base.user.TextBadge"> & {
    /**
     * @generated from field: webcast.model.data.BadgeDisplayType display_type = 1;
     */
    displayType: BadgeDisplayType;
    /**
     * @generated from field: string key = 2;
     */
    key: string;
    /**
     * @generated from field: string default_pattern = 3;
     */
    defaultPattern: string;
    /**
     * @generated from field: repeated string pieces = 4;
     */
    pieces: string[];
};
/**
 * Describes the message webcast.model.base.user.TextBadge.
 * Use `create(TextBadgeSchema)` to create a new message.
 */
export declare const TextBadgeSchema: GenMessage<TextBadge>;
//# sourceMappingURL=user_pb.d.ts.map