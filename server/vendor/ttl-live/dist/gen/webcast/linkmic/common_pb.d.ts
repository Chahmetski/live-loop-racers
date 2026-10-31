import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "../model/base/messages_pb.js";
import type { MicPositionData } from "../model/message/linkcore_mic_position_data_pb.js";
import type { Player } from "../model/message/linkcore_player_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/linkmic/common.proto.
 */
export declare const file_webcast_linkmic_common: GenFile;
/**
 * @generated from message webcast.linkmic.common.AnchorLayoutSetting
 */
export type AnchorLayoutSetting = Message<"webcast.linkmic.common.AnchorLayoutSetting"> & {
    /**
     * @generated from field: webcast.linkmic.common.LayoutStyle latest_layout_style = 1;
     */
    latestLayoutStyle: LayoutStyle;
    /**
     * @generated from field: repeated webcast.linkmic.common.AnchorLayoutStyleSetting layout_style_settings = 2;
     */
    layoutStyleSettings: AnchorLayoutStyleSetting[];
    /**
     * @generated from field: repeated webcast.linkmic.common.AnchorPanelLayoutTypeSetting panel_layout_type_setting = 3;
     */
    panelLayoutTypeSetting: AnchorPanelLayoutTypeSetting[];
};
/**
 * Describes the message webcast.linkmic.common.AnchorLayoutSetting.
 * Use `create(AnchorLayoutSettingSchema)` to create a new message.
 */
export declare const AnchorLayoutSettingSchema: GenMessage<AnchorLayoutSetting>;
/**
 * @generated from message webcast.linkmic.common.AnchorLayoutStyleSetting
 */
export type AnchorLayoutStyleSetting = Message<"webcast.linkmic.common.AnchorLayoutStyleSetting"> & {
    /**
     * @generated from field: webcast.linkmic.common.LayoutStyle layout_style = 1;
     */
    layoutStyle: LayoutStyle;
    /**
     * @generated from field: int32 max_position = 2;
     */
    maxPosition: number;
};
/**
 * Describes the message webcast.linkmic.common.AnchorLayoutStyleSetting.
 * Use `create(AnchorLayoutStyleSettingSchema)` to create a new message.
 */
export declare const AnchorLayoutStyleSettingSchema: GenMessage<AnchorLayoutStyleSetting>;
/**
 * @generated from message webcast.linkmic.common.AnchorPanelLayoutTypeSetting
 */
export type AnchorPanelLayoutTypeSetting = Message<"webcast.linkmic.common.AnchorPanelLayoutTypeSetting"> & {
    /**
     * @generated from field: int32 panel_layout_type = 1;
     */
    panelLayoutType: number;
    /**
     * @generated from field: int32 max_position = 2;
     */
    maxPosition: number;
};
/**
 * Describes the message webcast.linkmic.common.AnchorPanelLayoutTypeSetting.
 * Use `create(AnchorPanelLayoutTypeSettingSchema)` to create a new message.
 */
export declare const AnchorPanelLayoutTypeSettingSchema: GenMessage<AnchorPanelLayoutTypeSetting>;
/**
 * @generated from message webcast.linkmic.common.AvatarState
 */
export type AvatarState = Message<"webcast.linkmic.common.AvatarState"> & {
    /**
     * @generated from field: int64 avatar_id = 1;
     */
    avatarId: bigint;
};
/**
 * Describes the message webcast.linkmic.common.AvatarState.
 * Use `create(AvatarStateSchema)` to create a new message.
 */
export declare const AvatarStateSchema: GenMessage<AvatarState>;
/**
 * @generated from message webcast.linkmic.common.BackGroundImageState
 */
export type BackGroundImageState = Message<"webcast.linkmic.common.BackGroundImageState"> & {
    /**
     * @generated from field: string sticker_id = 1;
     */
    stickerId: string;
};
/**
 * Describes the message webcast.linkmic.common.BackGroundImageState.
 * Use `create(BackGroundImageStateSchema)` to create a new message.
 */
export declare const BackGroundImageStateSchema: GenMessage<BackGroundImageState>;
/**
 * @generated from message webcast.linkmic.common.CohostMode
 */
export type CohostMode = Message<"webcast.linkmic.common.CohostMode"> & {
    /**
     * @generated from field: bool is_take_the_stage_v2_supported = 1;
     */
    isTakeTheStageV2Supported: boolean;
    /**
     * @generated from field: int64 highest_take_the_stage_version_supported = 2;
     */
    highestTakeTheStageVersionSupported: bigint;
};
/**
 * Describes the message webcast.linkmic.common.CohostMode.
 * Use `create(CohostModeSchema)` to create a new message.
 */
export declare const CohostModeSchema: GenMessage<CohostMode>;
/**
 * @generated from message webcast.linkmic.common.CohostStreamConfig
 */
export type CohostStreamConfig = Message<"webcast.linkmic.common.CohostStreamConfig"> & {
    /**
     * @generated from field: string screen_share_stream_id = 1;
     */
    screenShareStreamId: string;
};
/**
 * Describes the message webcast.linkmic.common.CohostStreamConfig.
 * Use `create(CohostStreamConfigSchema)` to create a new message.
 */
export declare const CohostStreamConfigSchema: GenMessage<CohostStreamConfig>;
/**
 * @generated from message webcast.linkmic.common.CohostTypeLayoutExtra
 */
export type CohostTypeLayoutExtra = Message<"webcast.linkmic.common.CohostTypeLayoutExtra"> & {
    /**
     * @generated from field: int32 is_zoom_layout = 1;
     */
    isZoomLayout: number;
    /**
     * @generated from field: int32 offset_y = 2;
     */
    offsetY: number;
    /**
     * @generated from field: int32 scene = 3;
     */
    scene: number;
    /**
     * @generated from field: bool local_layout_only = 4;
     */
    localLayoutOnly: boolean;
    /**
     * @generated from field: int32 is_enlarge_mode = 5;
     */
    isEnlargeMode: number;
    /**
     * @generated from field: bool disable_match_component = 6;
     */
    disableMatchComponent: boolean;
    /**
     * @generated from field: int32 rematch_spot_id = 7;
     */
    rematchSpotId: number;
};
/**
 * Describes the message webcast.linkmic.common.CohostTypeLayoutExtra.
 * Use `create(CohostTypeLayoutExtraSchema)` to create a new message.
 */
export declare const CohostTypeLayoutExtraSchema: GenMessage<CohostTypeLayoutExtra>;
/**
 * @generated from message webcast.linkmic.common.CohostTypeLayoutNonSeiExtra
 */
export type CohostTypeLayoutNonSeiExtra = Message<"webcast.linkmic.common.CohostTypeLayoutNonSeiExtra"> & {};
/**
 * Describes the message webcast.linkmic.common.CohostTypeLayoutNonSeiExtra.
 * Use `create(CohostTypeLayoutNonSeiExtraSchema)` to create a new message.
 */
export declare const CohostTypeLayoutNonSeiExtraSchema: GenMessage<CohostTypeLayoutNonSeiExtra>;
/**
 * @generated from message webcast.linkmic.common.CohostTypeSpotExtra
 */
export type CohostTypeSpotExtra = Message<"webcast.linkmic.common.CohostTypeSpotExtra"> & {
    /**
     * @generated from field: bool is_enlarged = 1;
     */
    isEnlarged: boolean;
    /**
     * @generated from field: int32 content_type = 2;
     */
    contentType: number;
    /**
     * @generated from field: int32 pre_enlarge_spot_id = 3;
     */
    preEnlargeSpotId: number;
};
/**
 * Describes the message webcast.linkmic.common.CohostTypeSpotExtra.
 * Use `create(CohostTypeSpotExtraSchema)` to create a new message.
 */
export declare const CohostTypeSpotExtraSchema: GenMessage<CohostTypeSpotExtra>;
/**
 * @generated from message webcast.linkmic.common.CohostTypeSpotNonSeiExtra
 */
export type CohostTypeSpotNonSeiExtra = Message<"webcast.linkmic.common.CohostTypeSpotNonSeiExtra"> & {};
/**
 * Describes the message webcast.linkmic.common.CohostTypeSpotNonSeiExtra.
 * Use `create(CohostTypeSpotNonSeiExtraSchema)` to create a new message.
 */
export declare const CohostTypeSpotNonSeiExtraSchema: GenMessage<CohostTypeSpotNonSeiExtra>;
/**
 * @generated from message webcast.linkmic.common.CohostUserInfo
 */
export type CohostUserInfo = Message<"webcast.linkmic.common.CohostUserInfo"> & {
    /**
     * @generated from field: int64 permission_type = 1;
     */
    permissionType: bigint;
    /**
     * @generated from field: webcast.linkmic.common.SourceType source_type = 2;
     */
    sourceType: SourceType;
    /**
     * @generated from field: bool is_low_version = 3;
     */
    isLowVersion: boolean;
    /**
     * @generated from field: int64 best_teammate_uid = 4;
     */
    bestTeammateUid: bigint;
    /**
     * @generated from field: bool has_topic_perm = 5;
     */
    hasTopicPerm: boolean;
    /**
     * @generated from field: webcast.linkmic.common.CohostStreamConfig stream_config = 6;
     */
    streamConfig?: CohostStreamConfig | undefined;
    /**
     * @generated from field: bool in_different_invite_type_control_group = 7;
     */
    inDifferentInviteTypeControlGroup: boolean;
    /**
     * @generated from field: webcast.linkmic.common.CohostMode cohost_mode = 8;
     */
    cohostMode?: CohostMode | undefined;
    /**
     * @generated from field: string nickname = 11;
     */
    nickname: string;
    /**
     * @generated from field: string display_id = 12;
     */
    displayId: string;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_thumb = 13;
     */
    avatarThumb?: ImageModel | undefined;
    /**
     * @generated from field: int64 follow_status = 14;
     */
    followStatus: bigint;
    /**
     * @generated from field: string user_id_str = 15;
     */
    userIdStr: string;
    /**
     * @generated from field: bool is_enigma = 16;
     */
    isEnigma: boolean;
};
/**
 * Describes the message webcast.linkmic.common.CohostUserInfo.
 * Use `create(CohostUserInfoSchema)` to create a new message.
 */
export declare const CohostUserInfoSchema: GenMessage<CohostUserInfo>;
/**
 * @generated from message webcast.linkmic.common.ContentPosition
 */
export type ContentPosition = Message<"webcast.linkmic.common.ContentPosition"> & {
    /**
     * @generated from field: string content_i_d = 1;
     */
    contentID: string;
    /**
     * @generated from field: webcast.linkmic.common.ContentPositionType content_type = 2;
     */
    contentType: ContentPositionType;
    /**
     * @generated from field: webcast.model.message.linkcore.MicPositionData pos = 3;
     */
    pos?: MicPositionData | undefined;
    /**
     * @generated from field: string content_linkmic_i_d = 4;
     */
    contentLinkmicID: string;
    /**
     * @generated from field: int64 start_time_nano = 5;
     */
    startTimeNano: bigint;
};
/**
 * Describes the message webcast.linkmic.common.ContentPosition.
 * Use `create(ContentPositionSchema)` to create a new message.
 */
export declare const ContentPositionSchema: GenMessage<ContentPosition>;
/**
 * @generated from message webcast.linkmic.common.GroupPlayer
 */
export type GroupPlayer = Message<"webcast.linkmic.common.GroupPlayer"> & {
    /**
     * @generated from field: int64 channel_id = 1;
     */
    channelId: bigint;
    /**
     * @generated from field: webcast.model.message.linkcore.Player user = 2;
     */
    user?: Player | undefined;
};
/**
 * Describes the message webcast.linkmic.common.GroupPlayer.
 * Use `create(GroupPlayerSchema)` to create a new message.
 */
export declare const GroupPlayerSchema: GenMessage<GroupPlayer>;
/**
 * @generated from message webcast.linkmic.common.GuestUserInfo
 */
export type GuestUserInfo = Message<"webcast.linkmic.common.GuestUserInfo"> & {
    /**
     * @generated from field: string user_id_str = 1;
     */
    userIdStr: string;
    /**
     * @generated from field: string nickname = 2;
     */
    nickname: string;
    /**
     * @generated from field: string display_id = 3;
     */
    displayId: string;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_thumb = 4;
     */
    avatarThumb?: ImageModel | undefined;
    /**
     * @generated from field: int64 room_id = 5;
     */
    roomId: bigint;
    /**
     * @generated from field: string linkmic_id_str = 6;
     */
    linkmicIdStr: string;
    /**
     * @generated from field: bool is_enigma = 7;
     */
    isEnigma: boolean;
};
/**
 * Describes the message webcast.linkmic.common.GuestUserInfo.
 * Use `create(GuestUserInfoSchema)` to create a new message.
 */
export declare const GuestUserInfoSchema: GenMessage<GuestUserInfo>;
/**
 * @generated from message webcast.linkmic.common.LayoutData
 */
export type LayoutData = Message<"webcast.linkmic.common.LayoutData"> & {
    /**
     * @generated from field: webcast.linkmic.common.LayoutState layout = 1;
     */
    layout?: LayoutState | undefined;
    /**
     * @generated from field: repeated webcast.linkmic.common.SpotInfo spot_list = 2;
     */
    spotList: SpotInfo[];
    /**
     * @generated from field: int64 version = 3;
     */
    version: bigint;
    /**
     * @generated from field: int64 group_channel_id = 4;
     */
    groupChannelId: bigint;
    /**
     * @generated from field: repeated webcast.linkmic.common.PosIdentity ui_pos = 101;
     */
    uiPos: PosIdentity[];
};
/**
 * Describes the message webcast.linkmic.common.LayoutData.
 * Use `create(LayoutDataSchema)` to create a new message.
 */
export declare const LayoutDataSchema: GenMessage<LayoutData>;
/**
 * @generated from message webcast.linkmic.common.LayoutState
 */
export type LayoutState = Message<"webcast.linkmic.common.LayoutState"> & {
    /**
     * @generated from field: string layout_id = 1;
     */
    layoutId: string;
    /**
     * @generated from field: string layout_key = 2;
     */
    layoutKey: string;
    /**
     * @generated from field: webcast.linkmic.common.MultiGuestLayoutExtra multi_guest_layout_extra = 3;
     */
    multiGuestLayoutExtra?: MultiGuestLayoutExtra | undefined;
    /**
     * @generated from field: webcast.linkmic.common.MultiGuestLayoutNonSeiExtra multi_guest_layout_non_sei_extra = 4;
     */
    multiGuestLayoutNonSeiExtra?: MultiGuestLayoutNonSeiExtra | undefined;
    /**
     * @generated from field: webcast.linkmic.common.CohostTypeLayoutExtra cohost_layout_extra = 5;
     */
    cohostLayoutExtra?: CohostTypeLayoutExtra | undefined;
    /**
     * @generated from field: webcast.linkmic.common.CohostTypeLayoutNonSeiExtra cohost_layout_non_sei_extra = 6;
     */
    cohostLayoutNonSeiExtra?: CohostTypeLayoutNonSeiExtra | undefined;
};
/**
 * Describes the message webcast.linkmic.common.LayoutState.
 * Use `create(LayoutStateSchema)` to create a new message.
 */
export declare const LayoutStateSchema: GenMessage<LayoutState>;
/**
 * @generated from message webcast.linkmic.common.LinkEnvelopeMessagePayload
 */
export type LinkEnvelopeMessagePayload = Message<"webcast.linkmic.common.LinkEnvelopeMessagePayload"> & {
    /**
     * @generated from field: int32 message_type = 1;
     */
    messageType: number;
    /**
     * @generated from field: webcast.linkmic.common.ResolutionDemandPayload resolution_demand_payload = 100;
     */
    resolutionDemandPayload?: ResolutionDemandPayload | undefined;
};
/**
 * Describes the message webcast.linkmic.common.LinkEnvelopeMessagePayload.
 * Use `create(LinkEnvelopeMessagePayloadSchema)` to create a new message.
 */
export declare const LinkEnvelopeMessagePayloadSchema: GenMessage<LinkEnvelopeMessagePayload>;
/**
 * @generated from message webcast.linkmic.common.LinkUserIdentity
 */
export type LinkUserIdentity = Message<"webcast.linkmic.common.LinkUserIdentity"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player player = 1;
     */
    player?: Player | undefined;
    /**
     * @generated from field: string link_mic_id = 2;
     */
    linkMicId: string;
    /**
     * @generated from field: int64 channel_id = 3;
     */
    channelId: bigint;
};
/**
 * Describes the message webcast.linkmic.common.LinkUserIdentity.
 * Use `create(LinkUserIdentitySchema)` to create a new message.
 */
export declare const LinkUserIdentitySchema: GenMessage<LinkUserIdentity>;
/**
 * @generated from message webcast.linkmic.common.LinkUserState
 */
export type LinkUserState = Message<"webcast.linkmic.common.LinkUserState"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player user = 1;
     */
    user?: Player | undefined;
    /**
     * @generated from field: string linkmic_id = 2;
     */
    linkmicId: string;
    /**
     * @generated from field: webcast.model.message.linkcore.MicPositionData pos = 3;
     */
    pos?: MicPositionData | undefined;
    /**
     * @generated from field: int64 linked_time_nano = 4;
     */
    linkedTimeNano: bigint;
    /**
     * @generated from field: webcast.linkmic.common.OnlineUserState online_user_state = 5;
     */
    onlineUserState: OnlineUserState;
    /**
     * @generated from field: webcast.linkmic.common.MediaState audio_muted = 6;
     */
    audioMuted: MediaState;
    /**
     * @generated from field: webcast.linkmic.common.MediaState video_muted = 7;
     */
    videoMuted: MediaState;
    /**
     * @generated from field: webcast.linkmic.common.RtcConnectionState rtc_connection = 8;
     */
    rtcConnection: RtcConnectionState;
    /**
     * @generated from field: webcast.linkmic.common.NetworkState network_state = 9;
     */
    networkState: NetworkState;
    /**
     * @generated from field: webcast.linkmic.common.AvatarState avatar = 10;
     */
    avatar?: AvatarState | undefined;
    /**
     * @generated from field: string linker_session_id = 11;
     */
    linkerSessionId: string;
};
/**
 * Describes the message webcast.linkmic.common.LinkUserState.
 * Use `create(LinkUserStateSchema)` to create a new message.
 */
export declare const LinkUserStateSchema: GenMessage<LinkUserState>;
/**
 * @generated from message webcast.linkmic.common.LinkerMediaChangeOperator
 */
export type LinkerMediaChangeOperator = Message<"webcast.linkmic.common.LinkerMediaChangeOperator"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: webcast.linkmic.common.LinkMicUserAdminType operator_type = 2;
     */
    operatorType: LinkMicUserAdminType;
    /**
     * @generated from field: string nick_name = 3;
     */
    nickName: string;
    /**
     * @generated from field: string display_id = 4;
     */
    displayId: string;
};
/**
 * Describes the message webcast.linkmic.common.LinkerMediaChangeOperator.
 * Use `create(LinkerMediaChangeOperatorSchema)` to create a new message.
 */
export declare const LinkerMediaChangeOperatorSchema: GenMessage<LinkerMediaChangeOperator>;
/**
 * @generated from message webcast.linkmic.common.MigrationDetails
 */
export type MigrationDetails = Message<"webcast.linkmic.common.MigrationDetails"> & {
    /**
     * @generated from field: bool is_migrate = 1;
     */
    isMigrate: boolean;
    /**
     * @generated from field: int64 source_group_channel_id = 2;
     */
    sourceGroupChannelId: bigint;
    /**
     * @generated from field: int64 target_group_channel_id = 3;
     */
    targetGroupChannelId: bigint;
};
/**
 * Describes the message webcast.linkmic.common.MigrationDetails.
 * Use `create(MigrationDetailsSchema)` to create a new message.
 */
export declare const MigrationDetailsSchema: GenMessage<MigrationDetails>;
/**
 * @generated from message webcast.linkmic.common.MultiGuestLayoutExtra
 */
export type MultiGuestLayoutExtra = Message<"webcast.linkmic.common.MultiGuestLayoutExtra"> & {
    /**
     * @generated from field: webcast.linkmic.common.LayoutStyle origin_layout_style = 1;
     */
    originLayoutStyle: LayoutStyle;
    /**
     * @generated from field: webcast.linkmic.common.LayoutStyle current_layout_style = 2;
     */
    currentLayoutStyle: LayoutStyle;
    /**
     * @generated from field: int32 origin_max_position = 3;
     */
    originMaxPosition: number;
    /**
     * @generated from field: int32 current_max_position = 4;
     */
    currentMaxPosition: number;
    /**
     * @generated from field: webcast.linkmic.common.LayoutEnlargeStatus enlarge_status = 5;
     */
    enlargeStatus: LayoutEnlargeStatus;
    /**
     * @generated from field: int32 current_panel_layout_type = 6;
     */
    currentPanelLayoutType: number;
    /**
     * @generated from field: webcast.linkmic.common.SocialGameLayoutExtra social_game = 7;
     */
    socialGame?: SocialGameLayoutExtra | undefined;
};
/**
 * Describes the message webcast.linkmic.common.MultiGuestLayoutExtra.
 * Use `create(MultiGuestLayoutExtraSchema)` to create a new message.
 */
export declare const MultiGuestLayoutExtraSchema: GenMessage<MultiGuestLayoutExtra>;
/**
 * @generated from message webcast.linkmic.common.MultiGuestLayoutNonSeiExtra
 */
export type MultiGuestLayoutNonSeiExtra = Message<"webcast.linkmic.common.MultiGuestLayoutNonSeiExtra"> & {
    /**
     * @generated from field: webcast.linkmic.common.SocialGameLayoutNonSeiExtra social_game = 1;
     */
    socialGame?: SocialGameLayoutNonSeiExtra | undefined;
};
/**
 * Describes the message webcast.linkmic.common.MultiGuestLayoutNonSeiExtra.
 * Use `create(MultiGuestLayoutNonSeiExtraSchema)` to create a new message.
 */
export declare const MultiGuestLayoutNonSeiExtraSchema: GenMessage<MultiGuestLayoutNonSeiExtra>;
/**
 * @generated from message webcast.linkmic.common.MultiGuestSpotExtra
 */
export type MultiGuestSpotExtra = Message<"webcast.linkmic.common.MultiGuestSpotExtra"> & {
    /**
     * @generated from field: bool is_enlarged = 1;
     */
    isEnlarged: boolean;
    /**
     * @generated from field: bool is_single_zoom_enabled = 2;
     */
    isSingleZoomEnabled: boolean;
    /**
     * @generated from field: bool is_double_zoom_enabled = 3;
     */
    isDoubleZoomEnabled: boolean;
    /**
     * @generated from field: bool is_switch_spot_enabled = 4;
     */
    isSwitchSpotEnabled: boolean;
    /**
     * @generated from field: int32 spot_rank = 5;
     */
    spotRank: number;
    /**
     * @generated from field: int32 content_position_type = 6;
     */
    contentPositionType: number;
    /**
     * @generated from field: webcast.linkmic.common.SocialGameUserSpotExtra social_game_user = 7;
     */
    socialGameUser?: SocialGameUserSpotExtra | undefined;
};
/**
 * Describes the message webcast.linkmic.common.MultiGuestSpotExtra.
 * Use `create(MultiGuestSpotExtraSchema)` to create a new message.
 */
export declare const MultiGuestSpotExtraSchema: GenMessage<MultiGuestSpotExtra>;
/**
 * @generated from message webcast.linkmic.common.MultiGuestSpotNonSeiExtra
 */
export type MultiGuestSpotNonSeiExtra = Message<"webcast.linkmic.common.MultiGuestSpotNonSeiExtra"> & {
    /**
     * @generated from field: webcast.linkmic.common.SocialGameUserSpotNonSeiExtra social_game_user = 1;
     */
    socialGameUser?: SocialGameUserSpotNonSeiExtra | undefined;
};
/**
 * Describes the message webcast.linkmic.common.MultiGuestSpotNonSeiExtra.
 * Use `create(MultiGuestSpotNonSeiExtraSchema)` to create a new message.
 */
export declare const MultiGuestSpotNonSeiExtraSchema: GenMessage<MultiGuestSpotNonSeiExtra>;
/**
 * @generated from message webcast.linkmic.common.PosIdentity
 */
export type PosIdentity = Message<"webcast.linkmic.common.PosIdentity"> & {
    /**
     * @generated from field: webcast.linkmic.common.PosIdentityType type = 1;
     */
    type: PosIdentityType;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
};
/**
 * Describes the message webcast.linkmic.common.PosIdentity.
 * Use `create(PosIdentitySchema)` to create a new message.
 */
export declare const PosIdentitySchema: GenMessage<PosIdentity>;
/**
 * @generated from message webcast.linkmic.common.PosIdentityExtra
 */
export type PosIdentityExtra = Message<"webcast.linkmic.common.PosIdentityExtra"> & {
    /**
     * @generated from field: string content_linkmic_i_d = 1;
     */
    contentLinkmicID: string;
};
/**
 * Describes the message webcast.linkmic.common.PosIdentityExtra.
 * Use `create(PosIdentityExtraSchema)` to create a new message.
 */
export declare const PosIdentityExtraSchema: GenMessage<PosIdentityExtra>;
/**
 * @generated from message webcast.linkmic.common.ResolutionDemandPayload
 */
export type ResolutionDemandPayload = Message<"webcast.linkmic.common.ResolutionDemandPayload"> & {
    /**
     * @generated from field: int32 action = 1;
     */
    action: number;
    /**
     * @generated from field: double width_ratio = 2;
     */
    widthRatio: number;
    /**
     * @generated from field: double height_ratio = 3;
     */
    heightRatio: number;
    /**
     * @generated from field: string config_id = 4;
     */
    configId: string;
    /**
     * @generated from field: string layout_key = 5;
     */
    layoutKey: string;
    /**
     * @generated from field: int64 spot_id = 6;
     */
    spotId: bigint;
    /**
     * @generated from field: int64 canvas_width = 7;
     */
    canvasWidth: bigint;
    /**
     * @generated from field: int64 canvas_height = 8;
     */
    canvasHeight: bigint;
    /**
     * @generated from field: int64 timestamp_ms = 9;
     */
    timestampMs: bigint;
};
/**
 * Describes the message webcast.linkmic.common.ResolutionDemandPayload.
 * Use `create(ResolutionDemandPayloadSchema)` to create a new message.
 */
export declare const ResolutionDemandPayloadSchema: GenMessage<ResolutionDemandPayload>;
/**
 * @generated from message webcast.linkmic.common.SocialGameLayoutExtra
 */
export type SocialGameLayoutExtra = Message<"webcast.linkmic.common.SocialGameLayoutExtra"> & {
    /**
     * @generated from field: int32 game_id = 1;
     */
    gameId: number;
    /**
     * @generated from field: int32 game_just_dance_status = 2;
     */
    gameJustDanceStatus: number;
    /**
     * @generated from field: int64 game_session_id = 3;
     */
    gameSessionId: bigint;
    /**
     * @generated from field: int64 game_start_play_ms = 4;
     */
    gameStartPlayMs: bigint;
    /**
     * @generated from field: int64 game_option_id = 5;
     */
    gameOptionId: bigint;
    /**
     * @generated from field: string loki_panel_name = 6;
     */
    lokiPanelName: string;
    /**
     * @generated from field: string required_loki_resource_id = 7;
     */
    requiredLokiResourceId: string;
    /**
     * @generated from field: string optional_loki_resource_id = 8;
     */
    optionalLokiResourceId: string;
};
/**
 * Describes the message webcast.linkmic.common.SocialGameLayoutExtra.
 * Use `create(SocialGameLayoutExtraSchema)` to create a new message.
 */
export declare const SocialGameLayoutExtraSchema: GenMessage<SocialGameLayoutExtra>;
/**
 * @generated from message webcast.linkmic.common.SocialGameLayoutNonSeiExtra
 */
export type SocialGameLayoutNonSeiExtra = Message<"webcast.linkmic.common.SocialGameLayoutNonSeiExtra"> & {
    /**
     * @generated from field: string just_dance_song_title = 1;
     */
    justDanceSongTitle: string;
};
/**
 * Describes the message webcast.linkmic.common.SocialGameLayoutNonSeiExtra.
 * Use `create(SocialGameLayoutNonSeiExtraSchema)` to create a new message.
 */
export declare const SocialGameLayoutNonSeiExtraSchema: GenMessage<SocialGameLayoutNonSeiExtra>;
/**
 * @generated from message webcast.linkmic.common.SocialGameUserSpotExtra
 */
export type SocialGameUserSpotExtra = Message<"webcast.linkmic.common.SocialGameUserSpotExtra"> & {
    /**
     * @generated from field: int32 game_just_dance_user_status = 1;
     */
    gameJustDanceUserStatus: number;
    /**
     * @generated from field: bool is_enlarged = 2;
     */
    isEnlarged: boolean;
    /**
     * @generated from field: bool is_main_content = 3;
     */
    isMainContent: boolean;
};
/**
 * Describes the message webcast.linkmic.common.SocialGameUserSpotExtra.
 * Use `create(SocialGameUserSpotExtraSchema)` to create a new message.
 */
export declare const SocialGameUserSpotExtraSchema: GenMessage<SocialGameUserSpotExtra>;
/**
 * @generated from message webcast.linkmic.common.SocialGameUserSpotNonSeiExtra
 */
export type SocialGameUserSpotNonSeiExtra = Message<"webcast.linkmic.common.SocialGameUserSpotNonSeiExtra"> & {
    /**
     * @generated from field: int32 game_score = 1;
     */
    gameScore: number;
};
/**
 * Describes the message webcast.linkmic.common.SocialGameUserSpotNonSeiExtra.
 * Use `create(SocialGameUserSpotNonSeiExtraSchema)` to create a new message.
 */
export declare const SocialGameUserSpotNonSeiExtraSchema: GenMessage<SocialGameUserSpotNonSeiExtra>;
/**
 * @generated from message webcast.linkmic.common.SpotInfo
 */
export type SpotInfo = Message<"webcast.linkmic.common.SpotInfo"> & {
    /**
     * @generated from field: int32 spot_id = 1;
     */
    spotId: number;
    /**
     * @generated from field: webcast.linkmic.common.PosIdentity pos_identity = 2;
     */
    posIdentity?: PosIdentity | undefined;
    /**
     * @generated from field: webcast.linkmic.common.MultiGuestSpotExtra multi_guest_spot_extra = 3;
     */
    multiGuestSpotExtra?: MultiGuestSpotExtra | undefined;
    /**
     * @generated from field: webcast.linkmic.common.MultiGuestSpotNonSeiExtra multi_guest_spot_non_sei_extra = 4;
     */
    multiGuestSpotNonSeiExtra?: MultiGuestSpotNonSeiExtra | undefined;
    /**
     * @generated from field: webcast.linkmic.common.CohostTypeSpotExtra cohost_spot_extra = 5;
     */
    cohostSpotExtra?: CohostTypeSpotExtra | undefined;
    /**
     * @generated from field: webcast.linkmic.common.CohostTypeSpotNonSeiExtra cohost_spot_non_sei_extra = 6;
     */
    cohostSpotNonSeiExtra?: CohostTypeSpotNonSeiExtra | undefined;
    /**
     * @generated from field: webcast.linkmic.common.PosIdentityExtra pos_identity_extra = 7;
     */
    posIdentityExtra?: PosIdentityExtra | undefined;
};
/**
 * Describes the message webcast.linkmic.common.SpotInfo.
 * Use `create(SpotInfoSchema)` to create a new message.
 */
export declare const SpotInfoSchema: GenMessage<SpotInfo>;
/**
 * @generated from enum webcast.linkmic.common.AgreeStatus
 */
export declare enum AgreeStatus {
    /**
     * @generated from enum value: AGREE_UNKNOWN = 0;
     */
    AGREE_UNKNOWN = 0,
    /**
     * @generated from enum value: AGREE = 1;
     */
    AGREE = 1,
    /**
     * @generated from enum value: REJECT = 2;
     */
    REJECT = 2
}
/**
 * Describes the enum webcast.linkmic.common.AgreeStatus.
 */
export declare const AgreeStatusSchema: GenEnum<AgreeStatus>;
/**
 * @generated from enum webcast.linkmic.common.ContentPositionType
 */
export declare enum ContentPositionType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: STREAM = 1;
     */
    STREAM = 1,
    /**
     * @generated from enum value: LIVE_STUDIO_STREAM_PORTRAIT = 2;
     */
    LIVE_STUDIO_STREAM_PORTRAIT = 2,
    /**
     * @generated from enum value: LIVE_STUDIO_STREAM_LANDSCAPE = 3;
     */
    LIVE_STUDIO_STREAM_LANDSCAPE = 3
}
/**
 * Describes the enum webcast.linkmic.common.ContentPositionType.
 */
export declare const ContentPositionTypeSchema: GenEnum<ContentPositionType>;
/**
 * @generated from enum webcast.linkmic.common.GroupStatus
 */
export declare enum GroupStatus {
    /**
     * @generated from enum value: GROUP_STATUS_UNKNOWN = 0;
     */
    GROUP_STATUS_UNKNOWN = 0,
    /**
     * @generated from enum value: WAITING = 1;
     */
    WAITING = 1,
    /**
     * @generated from enum value: LINKED = 3;
     */
    LINKED = 3
}
/**
 * Describes the enum webcast.linkmic.common.GroupStatus.
 */
export declare const GroupStatusSchema: GenEnum<GroupStatus>;
/**
 * @generated from enum webcast.linkmic.common.JoinType
 */
export declare enum JoinType {
    /**
     * @generated from enum value: JOIN_TYPE_UNKNOWN = 0;
     */
    JOIN_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: CHANNEL_APPLY = 1;
     */
    CHANNEL_APPLY = 1,
    /**
     * @generated from enum value: CHANNEL_INVITE = 2;
     */
    CHANNEL_INVITE = 2,
    /**
     * @generated from enum value: GROUP_APPLY = 100;
     */
    GROUP_APPLY = 100,
    /**
     * @generated from enum value: GROUP_APPLY_FOLLOW = 101;
     */
    GROUP_APPLY_FOLLOW = 101,
    /**
     * @generated from enum value: GROUP_INVITE = 102;
     */
    GROUP_INVITE = 102,
    /**
     * @generated from enum value: GROUP_INVITE_FOLLOW = 103;
     */
    GROUP_INVITE_FOLLOW = 103,
    /**
     * @generated from enum value: GROUP_OWNER_JOIN = 104;
     */
    GROUP_OWNER_JOIN = 104
}
/**
 * Describes the enum webcast.linkmic.common.JoinType.
 */
export declare const JoinTypeSchema: GenEnum<JoinType>;
/**
 * @generated from enum webcast.linkmic.common.KickoutReason
 */
export declare enum KickoutReason {
    /**
     * @generated from enum value: KICK_OUT_REASON_UNKNOWN = 0;
     */
    KICK_OUT_REASON_UNKNOWN = 0,
    /**
     * @generated from enum value: KICK_OUT_REASON_FIRST_FRAME_TIME_OUT = 1;
     */
    KICK_OUT_REASON_FIRST_FRAME_TIME_OUT = 1,
    /**
     * @generated from enum value: KICK_OUT_REASON_BY_HOST = 2;
     */
    KICK_OUT_REASON_BY_HOST = 2,
    /**
     * @generated from enum value: KICK_OUT_REASON_RTC_LOST_CONNECTION = 3;
     */
    KICK_OUT_REASON_RTC_LOST_CONNECTION = 3,
    /**
     * @generated from enum value: KICK_OUT_REASON_BY_PUNISH = 4;
     */
    KICK_OUT_REASON_BY_PUNISH = 4,
    /**
     * @generated from enum value: KICK_OUT_REASON_BY_ADMIN = 5;
     */
    KICK_OUT_REASON_BY_ADMIN = 5,
    /**
     * @generated from enum value: KICK_OUT_REASON_HOST_REMOVE_ALL_GUESTS = 6;
     */
    KICK_OUT_REASON_HOST_REMOVE_ALL_GUESTS = 6,
    /**
     * @generated from enum value: KICK_OUT_REASON_ENIGMA_EXPIRE = 7;
     */
    KICK_OUT_REASON_ENIGMA_EXPIRE = 7
}
/**
 * Describes the enum webcast.linkmic.common.KickoutReason.
 */
export declare const KickoutReasonSchema: GenEnum<KickoutReason>;
/**
 * @generated from enum webcast.linkmic.common.LayoutEnlargeStatus
 */
export declare enum LayoutEnlargeStatus {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: SINGLE_ENLARGED = 1;
     */
    SINGLE_ENLARGED = 1,
    /**
     * @generated from enum value: DOUBLE_ENLARGED = 2;
     */
    DOUBLE_ENLARGED = 2
}
/**
 * Describes the enum webcast.linkmic.common.LayoutEnlargeStatus.
 */
export declare const LayoutEnlargeStatusSchema: GenEnum<LayoutEnlargeStatus>;
/**
 * @generated from enum webcast.linkmic.common.LayoutStyle
 */
export declare enum LayoutStyle {
    /**
     * @generated from enum value: UNDEFINED = 0;
     */
    UNDEFINED = 0,
    /**
     * @generated from enum value: OVERLAPPING_FLOW = 1;
     */
    OVERLAPPING_FLOW = 1,
    /**
     * @generated from enum value: OVERLAPPING_FIXED = 2;
     */
    OVERLAPPING_FIXED = 2,
    /**
     * @generated from enum value: GRID_FLOW = 3;
     */
    GRID_FLOW = 3,
    /**
     * @generated from enum value: GRID_FIXED = 4;
     */
    GRID_FIXED = 4
}
/**
 * Describes the enum webcast.linkmic.common.LayoutStyle.
 */
export declare const LayoutStyleSchema: GenEnum<LayoutStyle>;
/**
 * @generated from enum webcast.linkmic.common.LinkMicUserAdminType
 */
export declare enum LinkMicUserAdminType {
    /**
     * @generated from enum value: UNDEFINED_TYPE = 0;
     */
    UNDEFINED_TYPE = 0,
    /**
     * @generated from enum value: MANAGER_TYPE = 1;
     */
    MANAGER_TYPE = 1,
    /**
     * @generated from enum value: HOST_TYPE = 2;
     */
    HOST_TYPE = 2
}
/**
 * Describes the enum webcast.linkmic.common.LinkMicUserAdminType.
 */
export declare const LinkMicUserAdminTypeSchema: GenEnum<LinkMicUserAdminType>;
/**
 * @generated from enum webcast.linkmic.common.LinkerMode
 */
export declare enum LinkerMode {
    /**
     * @generated from enum value: LINKER_MODE_UNKNOWN = 0;
     */
    LINKER_MODE_UNKNOWN = 0,
    /**
     * @generated from enum value: INNER = 1;
     */
    INNER = 1,
    /**
     * @generated from enum value: CROSS = 2;
     */
    CROSS = 2,
    /**
     * @generated from enum value: MIXED = 3;
     */
    MIXED = 3
}
/**
 * Describes the enum webcast.linkmic.common.LinkerMode.
 */
export declare const LinkerModeSchema: GenEnum<LinkerMode>;
/**
 * @generated from enum webcast.linkmic.common.LinkerUserType
 */
export declare enum LinkerUserType {
    /**
     * @generated from enum value: LINKER_USER_TYPE_UNKNOWN = 0;
     */
    LINKER_USER_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: GUEST = 1;
     */
    GUEST = 1,
    /**
     * @generated from enum value: HOST = 2;
     */
    HOST = 2
}
/**
 * Describes the enum webcast.linkmic.common.LinkerUserType.
 */
export declare const LinkerUserTypeSchema: GenEnum<LinkerUserType>;
/**
 * @generated from enum webcast.linkmic.common.MediaState
 */
export declare enum MediaState {
    /**
     * @generated from enum value: MEDIA_UNDEFINED = 0;
     */
    MEDIA_UNDEFINED = 0,
    /**
     * @generated from enum value: MEDIA_NORMAL = 1;
     */
    MEDIA_NORMAL = 1,
    /**
     * @generated from enum value: MEDIA_MUTED = 2;
     */
    MEDIA_MUTED = 2,
    /**
     * @generated from enum value: MEDIA_UN_MUTE_OCCUPIED = 3;
     */
    MEDIA_UN_MUTE_OCCUPIED = 3,
    /**
     * @generated from enum value: MEDIA_MUTED_OCCUPIED = 4;
     */
    MEDIA_MUTED_OCCUPIED = 4
}
/**
 * Describes the enum webcast.linkmic.common.MediaState.
 */
export declare const MediaStateSchema: GenEnum<MediaState>;
/**
 * @generated from enum webcast.linkmic.common.NetworkState
 */
export declare enum NetworkState {
    /**
     * @generated from enum value: STATE_NETWORK_UNDEFINED = 0;
     */
    STATE_NETWORK_UNDEFINED = 0,
    /**
     * @generated from enum value: STATE_NETWORK_EXCELLENT = 1;
     */
    STATE_NETWORK_EXCELLENT = 1,
    /**
     * @generated from enum value: STATE_NETWORK_GOOD = 2;
     */
    STATE_NETWORK_GOOD = 2,
    /**
     * @generated from enum value: STATE_NETWORK_POOR = 3;
     */
    STATE_NETWORK_POOR = 3,
    /**
     * @generated from enum value: STATE_NETWORK_BAD = 4;
     */
    STATE_NETWORK_BAD = 4,
    /**
     * @generated from enum value: STATE_NETWORK_VBAD = 5;
     */
    STATE_NETWORK_VBAD = 5,
    /**
     * @generated from enum value: STATE_NETWORK_DOWN = 6;
     */
    STATE_NETWORK_DOWN = 6
}
/**
 * Describes the enum webcast.linkmic.common.NetworkState.
 */
export declare const NetworkStateSchema: GenEnum<NetworkState>;
/**
 * @generated from enum webcast.linkmic.common.OnlineUserState
 */
export declare enum OnlineUserState {
    /**
     * @generated from enum value: STATE_UNDEFINED = 0;
     */
    STATE_UNDEFINED = 0,
    /**
     * @generated from enum value: STATE_NORMAL = 1;
     */
    STATE_NORMAL = 1,
    /**
     * @generated from enum value: STATE_PAUSED = 2;
     */
    STATE_PAUSED = 2
}
/**
 * Describes the enum webcast.linkmic.common.OnlineUserState.
 */
export declare const OnlineUserStateSchema: GenEnum<OnlineUserState>;
/**
 * @generated from enum webcast.linkmic.common.PosIdentityType
 */
export declare enum PosIdentityType {
    /**
     * @generated from enum value: IDENTITY_EMPTY_SLOT = 0;
     */
    IDENTITY_EMPTY_SLOT = 0,
    /**
     * @generated from enum value: IDENTITY_RTC_USER_ID = 1;
     */
    IDENTITY_RTC_USER_ID = 1,
    /**
     * @generated from enum value: IDENTITY_RTC_STREAM_ID = 2;
     */
    IDENTITY_RTC_STREAM_ID = 2,
    /**
     * @generated from enum value: IDENTITY_LIVE_USER_ID = 3;
     */
    IDENTITY_LIVE_USER_ID = 3
}
/**
 * Describes the enum webcast.linkmic.common.PosIdentityType.
 */
export declare const PosIdentityTypeSchema: GenEnum<PosIdentityType>;
/**
 * @generated from enum webcast.linkmic.common.ReplyStatus
 */
export declare enum ReplyStatus {
    /**
     * @generated from enum value: REPLY_STATUS_UNKNOWN = 0;
     */
    REPLY_STATUS_UNKNOWN = 0,
    /**
     * @generated from enum value: REPLY_STATUS_AGREE = 1;
     */
    REPLY_STATUS_AGREE = 1,
    /**
     * @generated from enum value: REFUSE_PERSONALLY = 2;
     */
    REFUSE_PERSONALLY = 2,
    /**
     * @generated from enum value: REFUSE_TYPE_NOT_SUPPORT = 3;
     */
    REFUSE_TYPE_NOT_SUPPORT = 3,
    /**
     * @generated from enum value: REFUSE_PROCESSING_INVITATION = 4;
     */
    REFUSE_PROCESSING_INVITATION = 4,
    /**
     * @generated from enum value: REFUSE_BY_TIME_OUT = 5;
     */
    REFUSE_BY_TIME_OUT = 5,
    /**
     * @generated from enum value: REFUSE_EXCEPTION = 6;
     */
    REFUSE_EXCEPTION = 6,
    /**
     * @generated from enum value: REFUSE_SYSTEM_NOT_SUPPORTED = 7;
     */
    REFUSE_SYSTEM_NOT_SUPPORTED = 7,
    /**
     * @generated from enum value: REFUSE_SUBTYPE_DIFFERENCE = 8;
     */
    REFUSE_SUBTYPE_DIFFERENCE = 8,
    /**
     * @generated from enum value: REFUSE_IN_MIC_ROOM = 9;
     */
    REFUSE_IN_MIC_ROOM = 9,
    /**
     * @generated from enum value: REFUSE_NOT_LOAD_PLUGIN = 10;
     */
    REFUSE_NOT_LOAD_PLUGIN = 10,
    /**
     * @generated from enum value: REFUSE_IN_MULTI_GUEST = 11;
     */
    REFUSE_IN_MULTI_GUEST = 11,
    /**
     * @generated from enum value: REFUSE_PAUSE_LIVE = 12;
     */
    REFUSE_PAUSE_LIVE = 12,
    /**
     * @generated from enum value: REFUSE_OPEN_CAMERA_DIALOG_SHOWING = 13;
     */
    REFUSE_OPEN_CAMERA_DIALOG_SHOWING = 13,
    /**
     * @generated from enum value: REFUSE_DRAW_GUESSING = 14;
     */
    REFUSE_DRAW_GUESSING = 14,
    /**
     * @generated from enum value: REFUSE_RANDOM_MATCHING = 15;
     */
    REFUSE_RANDOM_MATCHING = 15,
    /**
     * @generated from enum value: REFUSE_IN_MATCH_PROCESSING = 16;
     */
    REFUSE_IN_MATCH_PROCESSING = 16,
    /**
     * @generated from enum value: REFUSE_IN_MIC_ROOM_FOR_MULTI_COHOST = 17;
     */
    REFUSE_IN_MIC_ROOM_FOR_MULTI_COHOST = 17,
    /**
     * @generated from enum value: REFUSE_COHOST_FINISHED = 18;
     */
    REFUSE_COHOST_FINISHED = 18,
    /**
     * @generated from enum value: REFUSE_NOT_CONNECTED = 19;
     */
    REFUSE_NOT_CONNECTED = 19,
    /**
     * @generated from enum value: REFUSE_LINKMIC_FULL = 20;
     */
    REFUSE_LINKMIC_FULL = 20,
    /**
     * @generated from enum value: REFUSE_ARC_INCOMPATIBLE = 21;
     */
    REFUSE_ARC_INCOMPATIBLE = 21,
    /**
     * @generated from enum value: REFUSE_PROCESSING_OTHER_INVITE = 22;
     */
    REFUSE_PROCESSING_OTHER_INVITE = 22,
    /**
     * @generated from enum value: REFUSE_PROCESSING_OTHER_APPLY = 23;
     */
    REFUSE_PROCESSING_OTHER_APPLY = 23,
    /**
     * @generated from enum value: REFUSE_IN_ANCHOR_COHOST = 24;
     */
    REFUSE_IN_ANCHOR_COHOST = 24,
    /**
     * @generated from enum value: REFUSE_TOPIC_PAIRING = 25;
     */
    REFUSE_TOPIC_PAIRING = 25,
    /**
     * @generated from enum value: REFUSE_POSITION_CONFLICT = 26;
     */
    REFUSE_POSITION_CONFLICT = 26,
    /**
     * @generated from enum value: REFUSE_CONFLICT_QUICK_COHOST = 27;
     */
    REFUSE_CONFLICT_QUICK_COHOST = 27,
    /**
     * @generated from enum value: REFUSE_IN_TAKE_STAGE_PROCESSING = 28;
     */
    REFUSE_IN_TAKE_STAGE_PROCESSING = 28,
    /**
     * @generated from enum value: REFUSE_IN_CATCH_BEANS_PROCESSING = 29;
     */
    REFUSE_IN_CATCH_BEANS_PROCESSING = 29,
    /**
     * @generated from enum value: REFUSE_IN_VIEWER_WISHES_PROCESSING = 30;
     */
    REFUSE_IN_VIEWER_WISHES_PROCESSING = 30,
    /**
     * @generated from enum value: REFUSE_IN_COHOST_WITH_GUEST = 31;
     */
    REFUSE_IN_COHOST_WITH_GUEST = 31
}
/**
 * Describes the enum webcast.linkmic.common.ReplyStatus.
 */
export declare const ReplyStatusSchema: GenEnum<ReplyStatus>;
/**
 * @generated from enum webcast.linkmic.common.RtcConnectionState
 */
export declare enum RtcConnectionState {
    /**
     * @generated from enum value: STATE_RTC_UNDEFINED = 0;
     */
    STATE_RTC_UNDEFINED = 0,
    /**
     * @generated from enum value: STATE_RTC_NORMAL = 1;
     */
    STATE_RTC_NORMAL = 1,
    /**
     * @generated from enum value: STATE_RTC_DISCONNECT = 2;
     */
    STATE_RTC_DISCONNECT = 2
}
/**
 * Describes the enum webcast.linkmic.common.RtcConnectionState.
 */
export declare const RtcConnectionStateSchema: GenEnum<RtcConnectionState>;
/**
 * @generated from enum webcast.linkmic.common.Scene
 */
export declare enum Scene {
    /**
     * @generated from enum value: SCENE_UNKNOWN = 0;
     */
    SCENE_UNKNOWN = 0,
    /**
     * @generated from enum value: CO_HOST = 2;
     */
    CO_HOST = 2,
    /**
     * @generated from enum value: MULTI_LIVE = 4;
     */
    MULTI_LIVE = 4
}
/**
 * Describes the enum webcast.linkmic.common.Scene.
 */
export declare const SceneSchema: GenEnum<Scene>;
/**
 * @generated from enum webcast.linkmic.common.SourceType
 */
export declare enum SourceType {
    /**
     * @generated from enum value: SOURCE_TYPE_UNKNOWN = 0;
     */
    SOURCE_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: FRIEND_LIST = 1;
     */
    FRIEND_LIST = 1,
    /**
     * @generated from enum value: RECOMMEND_LIST = 2;
     */
    RECOMMEND_LIST = 2,
    /**
     * @generated from enum value: RECENT = 3;
     */
    RECENT = 3,
    /**
     * @generated from enum value: OTHER_FOLLOW = 4;
     */
    OTHER_FOLLOW = 4,
    /**
     * @generated from enum value: QUICK_PAIR = 5;
     */
    QUICK_PAIR = 5,
    /**
     * @generated from enum value: ACTIVITY = 6;
     */
    ACTIVITY = 6,
    /**
     * @generated from enum value: QUICK_RECOMMEND = 7;
     */
    QUICK_RECOMMEND = 7,
    /**
     * @generated from enum value: OFFICIAL_CHANNEL = 8;
     */
    OFFICIAL_CHANNEL = 8,
    /**
     * @generated from enum value: BEST_TEAMMATE = 9;
     */
    BEST_TEAMMATE = 9,
    /**
     * @generated from enum value: RESERVATION = 10;
     */
    RESERVATION = 10,
    /**
     * @generated from enum value: PAIRING = 11;
     */
    PAIRING = 11,
    /**
     * @generated from enum value: PAIRING_ON_RESERVATION = 12;
     */
    PAIRING_ON_RESERVATION = 12,
    /**
     * @generated from enum value: TOPIC_QUICK_PAIR = 13;
     */
    TOPIC_QUICK_PAIR = 13,
    /**
     * @generated from enum value: TOPIC_QUICK_RECOMMEND = 14;
     */
    TOPIC_QUICK_RECOMMEND = 14,
    /**
     * @generated from enum value: ONLINE_FRIEND_CAPSULE = 15;
     */
    ONLINE_FRIEND_CAPSULE = 15,
    /**
     * @generated from enum value: WEEKLY_RANK = 20;
     */
    WEEKLY_RANK = 20,
    /**
     * @generated from enum value: HOURLY_RANK = 21;
     */
    HOURLY_RANK = 21,
    /**
     * @generated from enum value: WEEKLY_RISING = 23;
     */
    WEEKLY_RISING = 23,
    /**
     * @generated from enum value: WEEKLY_ROOKIE = 24;
     */
    WEEKLY_ROOKIE = 24,
    /**
     * @generated from enum value: CONNECTION_LIST = 25;
     */
    CONNECTION_LIST = 25,
    /**
     * @generated from enum value: DAILY_RANK = 26;
     */
    DAILY_RANK = 26,
    /**
     * @generated from enum value: DAILY_RANK_HALL_OF_FAME = 27;
     */
    DAILY_RANK_HALL_OF_FAME = 27,
    /**
     * @generated from enum value: RESERVATION_BUBBLE = 28;
     */
    RESERVATION_BUBBLE = 28,
    /**
     * @generated from enum value: PAIRING_BUBBLE = 29;
     */
    PAIRING_BUBBLE = 29,
    /**
     * @generated from enum value: LEAGUE_PHASE_ONE = 30;
     */
    LEAGUE_PHASE_ONE = 30,
    /**
     * @generated from enum value: LEAGUE_PHASE_TWO = 31;
     */
    LEAGUE_PHASE_TWO = 31,
    /**
     * @generated from enum value: LEAGUE_PHASE_THREE = 32;
     */
    LEAGUE_PHASE_THREE = 32,
    /**
     * @generated from enum value: DAILY_ROOKIE = 33;
     */
    DAILY_ROOKIE = 33,
    /**
     * @generated from enum value: MAY_KNOW_LIST = 34;
     */
    MAY_KNOW_LIST = 34,
    /**
     * @generated from enum value: BANNER = 35;
     */
    BANNER = 35,
    /**
     * @generated from enum value: FANS_TEAM_RANK = 36;
     */
    FANS_TEAM_RANK = 36,
    /**
     * @generated from enum value: SEARCH = 37;
     */
    SEARCH = 37,
    /**
     * @generated from enum value: EOY_RANK_LIST = 38;
     */
    EOY_RANK_LIST = 38,
    /**
     * @generated from enum value: LEAGUE_CAMPAIGN_RANK = 39;
     */
    LEAGUE_CAMPAIGN_RANK = 39,
    /**
     * @generated from enum value: CREATOR_CLASS_RANK = 40;
     */
    CREATOR_CLASS_RANK = 40,
    /**
     * @generated from enum value: HISTORY = 41;
     */
    HISTORY = 41,
    /**
     * @generated from enum value: QUICK_RECOMMEND_DURING_COHOST = 43;
     */
    QUICK_RECOMMEND_DURING_COHOST = 43,
    /**
     * @generated from enum value: GTM_MAINPAGE_1_VN_KING = 44;
     */
    GTM_MAINPAGE_1_VN_KING = 44,
    /**
     * @generated from enum value: GTM_MAINPAGE_1_VN_KNIGHT = 45;
     */
    GTM_MAINPAGE_1_VN_KNIGHT = 45,
    /**
     * @generated from enum value: GTM_RANK_1_VN_KING = 46;
     */
    GTM_RANK_1_VN_KING = 46,
    /**
     * @generated from enum value: GTM_RANK_1_VN_KNIGHT = 47;
     */
    GTM_RANK_1_VN_KNIGHT = 47,
    /**
     * @generated from enum value: LEAGUE_RECOMMEND_LIST_SEARCH = 48;
     */
    LEAGUE_RECOMMEND_LIST_SEARCH = 48,
    /**
     * @generated from enum value: LEAGUE_RECOMMEND_LIST_ACTIVITY_PAGE = 49;
     */
    LEAGUE_RECOMMEND_LIST_ACTIVITY_PAGE = 49,
    /**
     * @generated from enum value: LEAGUE_MATCH_QUICK_PAIR = 50;
     */
    LEAGUE_MATCH_QUICK_PAIR = 50,
    /**
     * @generated from enum value: LEAGUE_MATCH_QUICK_RECOMMEND = 51;
     */
    LEAGUE_MATCH_QUICK_RECOMMEND = 51,
    /**
     * @generated from enum value: LEAGUE_MATCH_QUICK_RECOMMEND_DURING_COHOST = 52;
     */
    LEAGUE_MATCH_QUICK_RECOMMEND_DURING_COHOST = 52,
    /**
     * @generated from enum value: INVITE_OFF_LIVE_FRIEND = 53;
     */
    INVITE_OFF_LIVE_FRIEND = 53,
    /**
     * @generated from enum value: AVAILABLE_FRIEND_CAPULE = 54;
     */
    AVAILABLE_FRIEND_CAPULE = 54,
    /**
     * @generated from enum value: RECOMMENDED_FRIEND_CAPULE = 55;
     */
    RECOMMENDED_FRIEND_CAPULE = 55,
    /**
     * @generated from enum value: USER_SUGGESTED_LIST = 56;
     */
    USER_SUGGESTED_LIST = 56,
    /**
     * @generated from enum value: TEAM_PAIR_QUICK_PAIR = 57;
     */
    TEAM_PAIR_QUICK_PAIR = 57,
    /**
     * @generated from enum value: TEAM_PAIR_QUICK_RECOMMEND_COHOST_ANCHOR = 58;
     */
    TEAM_PAIR_QUICK_RECOMMEND_COHOST_ANCHOR = 58,
    /**
     * @generated from enum value: TEAM_PAIR_QUICK_RECOMMEND_SOLO_ANCHOR = 59;
     */
    TEAM_PAIR_QUICK_RECOMMEND_SOLO_ANCHOR = 59,
    /**
     * @generated from enum value: BIG_EVENT_PLATFORM = 60;
     */
    BIG_EVENT_PLATFORM = 60,
    /**
     * @generated from enum value: CCPK_ACTIVITY_PAGE = 61;
     */
    CCPK_ACTIVITY_PAGE = 61,
    /**
     * @generated from enum value: CCPK_QUICK_PAIR = 62;
     */
    CCPK_QUICK_PAIR = 62,
    /**
     * @generated from enum value: CCPK_QUICK_RE_COMMAND = 63;
     */
    CCPK_QUICK_RE_COMMAND = 63
}
/**
 * Describes the enum webcast.linkmic.common.SourceType.
 */
export declare const SourceTypeSchema: GenEnum<SourceType>;
/**
 * @generated from enum webcast.linkmic.common.StateType
 */
export declare enum StateType {
    /**
     * @generated from enum value: STATE_INVALID = 0;
     */
    STATE_INVALID = 0,
    /**
     * @generated from enum value: STATE_LAYOUT = 1;
     */
    STATE_LAYOUT = 1,
    /**
     * @generated from enum value: STATE_ONLINE_USER_STATE = 2;
     */
    STATE_ONLINE_USER_STATE = 2,
    /**
     * @generated from enum value: STATE_AUDIO_MUTE = 3;
     */
    STATE_AUDIO_MUTE = 3,
    /**
     * @generated from enum value: STATE_VIDEO_MUTE = 4;
     */
    STATE_VIDEO_MUTE = 4,
    /**
     * @generated from enum value: STATE_RTC_CONNECTION = 5;
     */
    STATE_RTC_CONNECTION = 5,
    /**
     * @generated from enum value: STATE_NETWORK = 6;
     */
    STATE_NETWORK = 6,
    /**
     * @generated from enum value: STATE_BACKGROUND_IMAGE = 7;
     */
    STATE_BACKGROUND_IMAGE = 7,
    /**
     * @generated from enum value: STATE_SCREEN_ORIENTATION = 8;
     */
    STATE_SCREEN_ORIENTATION = 8,
    /**
     * @generated from enum value: STATE_AVATAR_ID = 9;
     */
    STATE_AVATAR_ID = 9,
    /**
     * @generated from enum value: STATE_AUDIO_MUTE_CHANNELS = 10;
     */
    STATE_AUDIO_MUTE_CHANNELS = 10,
    /**
     * @generated from enum value: STATE_REQ_BATCH_CHANGE = 100;
     */
    STATE_REQ_BATCH_CHANGE = 100
}
/**
 * Describes the enum webcast.linkmic.common.StateType.
 */
export declare const StateTypeSchema: GenEnum<StateType>;
//# sourceMappingURL=common_pb.d.ts.map