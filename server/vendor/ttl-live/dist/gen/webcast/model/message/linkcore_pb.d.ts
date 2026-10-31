import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { AgreeStatus, ContentPosition, KickoutReason, LayoutState, LinkerUserType, PosIdentity, SpotInfo } from "../../linkmic/common_pb.js";
import type { MicPositionData } from "./linkcore_mic_position_data_pb.js";
import type { Player } from "./linkcore_player_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/linkcore.proto.
 */
export declare const file_webcast_model_message_linkcore: GenFile;
/**
 * @generated from message webcast.model.message.linkcore.AllListUser
 */
export type AllListUser = Message<"webcast.model.message.linkcore.AllListUser"> & {
    /**
     * @generated from field: repeated webcast.model.message.linkcore.LinkLayerListUser linked_list = 2;
     */
    linkedList: LinkLayerListUser[];
    /**
     * @generated from field: repeated webcast.model.message.linkcore.LinkLayerListUser applied_list = 3;
     */
    appliedList: LinkLayerListUser[];
    /**
     * @generated from field: repeated webcast.model.message.linkcore.LinkLayerListUser invited_list = 4;
     */
    invitedList: LinkLayerListUser[];
    /**
     * @generated from field: repeated webcast.model.message.linkcore.LinkLayerListUser ready_list = 5;
     */
    readyList: LinkLayerListUser[];
};
/**
 * Describes the message webcast.model.message.linkcore.AllListUser.
 * Use `create(AllListUserSchema)` to create a new message.
 */
export declare const AllListUserSchema: GenMessage<AllListUser>;
/**
 * @generated from message webcast.model.message.linkcore.ApplyContent
 */
export type ApplyContent = Message<"webcast.model.message.linkcore.ApplyContent"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player applier = 1;
     */
    applier?: Player | undefined;
    /**
     * @generated from field: string applier_link_mic_id = 2;
     */
    applierLinkMicId: string;
    /**
     * @generated from field: string applier_linker_session_id = 3;
     */
    applierLinkerSessionId: string;
};
/**
 * Describes the message webcast.model.message.linkcore.ApplyContent.
 * Use `create(ApplyContentSchema)` to create a new message.
 */
export declare const ApplyContentSchema: GenMessage<ApplyContent>;
/**
 * @generated from message webcast.model.message.linkcore.ByteRTCExtInfo
 */
export type ByteRTCExtInfo = Message<"webcast.model.message.linkcore.ByteRTCExtInfo"> & {
    /**
     * @generated from field: int32 default_signaling_server_first = 1;
     */
    defaultSignalingServerFirst: number;
};
/**
 * Describes the message webcast.model.message.linkcore.ByteRTCExtInfo.
 * Use `create(ByteRTCExtInfoSchema)` to create a new message.
 */
export declare const ByteRTCExtInfoSchema: GenMessage<ByteRTCExtInfo>;
/**
 * @generated from message webcast.model.message.linkcore.CancelApplyContent
 */
export type CancelApplyContent = Message<"webcast.model.message.linkcore.CancelApplyContent"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player applier = 1;
     */
    applier?: Player | undefined;
    /**
     * @generated from field: string applier_link_mic_id = 2;
     */
    applierLinkMicId: string;
    /**
     * @generated from field: string applier_linker_session_id = 3;
     */
    applierLinkerSessionId: string;
};
/**
 * Describes the message webcast.model.message.linkcore.CancelApplyContent.
 * Use `create(CancelApplyContentSchema)` to create a new message.
 */
export declare const CancelApplyContentSchema: GenMessage<CancelApplyContent>;
/**
 * @generated from message webcast.model.message.linkcore.CancelInviteContent
 */
export type CancelInviteContent = Message<"webcast.model.message.linkcore.CancelInviteContent"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player invitor = 1;
     */
    invitor?: Player | undefined;
    /**
     * @generated from field: string invitor_link_mic_id = 2;
     */
    invitorLinkMicId: string;
    /**
     * @generated from field: string invitee_link_mic_id = 3;
     */
    inviteeLinkMicId: string;
    /**
     * @generated from field: int64 invite_seq_id = 4;
     */
    inviteSeqId: bigint;
    /**
     * @generated from field: webcast.model.message.linkcore.Player invitee = 5;
     */
    invitee?: Player | undefined;
    /**
     * @generated from field: string invitee_linker_session_id = 6;
     */
    inviteeLinkerSessionId: string;
};
/**
 * Describes the message webcast.model.message.linkcore.CancelInviteContent.
 * Use `create(CancelInviteContentSchema)` to create a new message.
 */
export declare const CancelInviteContentSchema: GenMessage<CancelInviteContent>;
/**
 * @generated from message webcast.model.message.linkcore.CreateChannelContent
 */
export type CreateChannelContent = Message<"webcast.model.message.linkcore.CreateChannelContent"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player owner = 1;
     */
    owner?: Player | undefined;
    /**
     * @generated from field: string owner_link_mic_id = 2;
     */
    ownerLinkMicId: string;
    /**
     * @generated from field: string owner_linker_session_id = 3;
     */
    ownerLinkerSessionId: string;
};
/**
 * Describes the message webcast.model.message.linkcore.CreateChannelContent.
 * Use `create(CreateChannelContentSchema)` to create a new message.
 */
export declare const CreateChannelContentSchema: GenMessage<CreateChannelContent>;
/**
 * @generated from message webcast.model.message.linkcore.DSLConfig
 */
export type DSLConfig = Message<"webcast.model.message.linkcore.DSLConfig"> & {
    /**
     * @generated from field: int32 scene_version = 1;
     */
    sceneVersion: number;
    /**
     * @generated from field: string layout_id = 2;
     */
    layoutId: string;
};
/**
 * Describes the message webcast.model.message.linkcore.DSLConfig.
 * Use `create(DSLConfigSchema)` to create a new message.
 */
export declare const DSLConfigSchema: GenMessage<DSLConfig>;
/**
 * @generated from message webcast.model.message.linkcore.FinishChannelContent
 */
export type FinishChannelContent = Message<"webcast.model.message.linkcore.FinishChannelContent"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player owner = 1;
     */
    owner?: Player | undefined;
    /**
     * @generated from field: int64 finish_reason = 2;
     */
    finishReason: bigint;
};
/**
 * Describes the message webcast.model.message.linkcore.FinishChannelContent.
 * Use `create(FinishChannelContentSchema)` to create a new message.
 */
export declare const FinishChannelContentSchema: GenMessage<FinishChannelContent>;
/**
 * @generated from message webcast.model.message.linkcore.InviteContent
 */
export type InviteContent = Message<"webcast.model.message.linkcore.InviteContent"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player invitor = 1;
     */
    invitor?: Player | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.RTCExtraInfo invitee_rtc_ext_info = 2;
     */
    inviteeRtcExtInfo?: RTCExtraInfo | undefined;
    /**
     * @generated from field: string invitor_link_mic_id = 3;
     */
    invitorLinkMicId: string;
    /**
     * @generated from field: string invitee_link_mic_id = 4;
     */
    inviteeLinkMicId: string;
    /**
     * @generated from field: bool is_owner = 5;
     */
    isOwner: boolean;
    /**
     * @generated from field: webcast.model.message.linkcore.MicPositionData pos = 6;
     */
    pos?: MicPositionData | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.DSLConfig dsl = 7;
     */
    dsl?: DSLConfig | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.Player invitee = 8;
     */
    invitee?: Player | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.Player operator = 9;
     */
    operator?: Player | undefined;
    /**
     * @generated from field: string invitee_linker_session_id = 10;
     */
    inviteeLinkerSessionId: string;
};
/**
 * Describes the message webcast.model.message.linkcore.InviteContent.
 * Use `create(InviteContentSchema)` to create a new message.
 */
export declare const InviteContentSchema: GenMessage<InviteContent>;
/**
 * @generated from message webcast.model.message.linkcore.JoinDirectContent
 */
export type JoinDirectContent = Message<"webcast.model.message.linkcore.JoinDirectContent"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.LinkLayerListUser joiner = 1;
     */
    joiner?: LinkLayerListUser | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.AllListUser all_users = 2;
     */
    allUsers?: AllListUser | undefined;
};
/**
 * Describes the message webcast.model.message.linkcore.JoinDirectContent.
 * Use `create(JoinDirectContentSchema)` to create a new message.
 */
export declare const JoinDirectContentSchema: GenMessage<JoinDirectContent>;
/**
 * @generated from message webcast.model.message.linkcore.KickOutContent
 */
export type KickOutContent = Message<"webcast.model.message.linkcore.KickOutContent"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player offliner = 1;
     */
    offliner?: Player | undefined;
    /**
     * @generated from field: webcast.linkmic.common.KickoutReason kickout_reason = 2;
     */
    kickoutReason: KickoutReason;
    /**
     * @generated from field: repeated string linked_user_ui_positions = 3;
     */
    linkedUserUiPositions: string[];
    /**
     * @generated from field: repeated webcast.linkmic.common.PosIdentity ui_pos = 4;
     */
    uiPos: PosIdentity[];
    /**
     * @generated from field: webcast.linkmic.common.LayoutState layout = 5;
     */
    layout?: LayoutState | undefined;
    /**
     * @generated from field: repeated webcast.linkmic.common.SpotInfo spot_list = 6;
     */
    spotList: SpotInfo[];
    /**
     * @generated from field: string offliner_linker_session_id = 7;
     */
    offlinerLinkerSessionId: string;
};
/**
 * Describes the message webcast.model.message.linkcore.KickOutContent.
 * Use `create(KickOutContentSchema)` to create a new message.
 */
export declare const KickOutContentSchema: GenMessage<KickOutContent>;
/**
 * @generated from message webcast.model.message.linkcore.LeaveContent
 */
export type LeaveContent = Message<"webcast.model.message.linkcore.LeaveContent"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player leaver = 1;
     */
    leaver?: Player | undefined;
    /**
     * @generated from field: int64 leave_reason = 2;
     */
    leaveReason: bigint;
    /**
     * @generated from field: repeated string linked_user_ui_positions = 3;
     */
    linkedUserUiPositions: string[];
    /**
     * @generated from field: repeated webcast.linkmic.common.PosIdentity ui_pos = 4;
     */
    uiPos: PosIdentity[];
    /**
     * @generated from field: webcast.linkmic.common.LayoutState layout = 5;
     */
    layout?: LayoutState | undefined;
    /**
     * @generated from field: repeated webcast.linkmic.common.SpotInfo spot_list = 6;
     */
    spotList: SpotInfo[];
    /**
     * @generated from field: string leaver_linker_session_id = 7;
     */
    leaverLinkerSessionId: string;
};
/**
 * Describes the message webcast.model.message.linkcore.LeaveContent.
 * Use `create(LeaveContentSchema)` to create a new message.
 */
export declare const LeaveContentSchema: GenMessage<LeaveContent>;
/**
 * @generated from message webcast.model.message.linkcore.LinkLayerListUser
 */
export type LinkLayerListUser = Message<"webcast.model.message.linkcore.LinkLayerListUser"> & {
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
     * @generated from field: string app_version = 5;
     */
    appVersion: string;
    /**
     * @generated from field: webcast.linkmic.common.LinkerUserType user_type = 6;
     */
    userType: LinkerUserType;
    /**
     * @generated from field: string linker_session_id = 7;
     */
    linkerSessionId: string;
};
/**
 * Describes the message webcast.model.message.linkcore.LinkLayerListUser.
 * Use `create(LinkLayerListUserSchema)` to create a new message.
 */
export declare const LinkLayerListUserSchema: GenMessage<LinkLayerListUser>;
/**
 * @generated from message webcast.model.message.linkcore.LinkListChangeContent
 */
export type LinkListChangeContent = Message<"webcast.model.message.linkcore.LinkListChangeContent"> & {
    /**
     * @generated from field: int32 type = 1;
     */
    type: number;
    /**
     * @generated from field: webcast.model.message.linkcore.AllListUser list = 2;
     */
    list?: AllListUser | undefined;
    /**
     * @generated from field: repeated string linked_user_ui_positions = 3;
     */
    linkedUserUiPositions: string[];
    /**
     * @generated from field: repeated webcast.linkmic.common.ContentPosition content_pos = 4;
     */
    contentPos: ContentPosition[];
};
/**
 * Describes the message webcast.model.message.linkcore.LinkListChangeContent.
 * Use `create(LinkListChangeContentSchema)` to create a new message.
 */
export declare const LinkListChangeContentSchema: GenMessage<LinkListChangeContent>;
/**
 * @generated from message webcast.model.message.linkcore.PermitApplyContent
 */
export type PermitApplyContent = Message<"webcast.model.message.linkcore.PermitApplyContent"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player permiter = 1;
     */
    permiter?: Player | undefined;
    /**
     * @generated from field: string permiter_link_mic_id = 2;
     */
    permiterLinkMicId: string;
    /**
     * @generated from field: webcast.model.message.linkcore.MicPositionData applier_pos = 3;
     */
    applierPos?: MicPositionData | undefined;
    /**
     * @generated from field: webcast.linkmic.common.AgreeStatus reply_status = 4;
     */
    replyStatus: AgreeStatus;
    /**
     * @generated from field: webcast.model.message.linkcore.DSLConfig dsl = 5;
     */
    dsl?: DSLConfig | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.Player applier = 6;
     */
    applier?: Player | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.Player operator = 7;
     */
    operator?: Player | undefined;
    /**
     * @generated from field: string applier_link_mic_id = 8;
     */
    applierLinkMicId: string;
    /**
     * @generated from field: repeated string linked_user_ui_positions = 9;
     */
    linkedUserUiPositions: string[];
    /**
     * @generated from field: string applier_rtc_token = 10;
     */
    applierRtcToken: string;
    /**
     * @generated from field: repeated webcast.linkmic.common.PosIdentity ui_pos = 11;
     */
    uiPos: PosIdentity[];
    /**
     * @generated from field: webcast.linkmic.common.LayoutState layout = 12;
     */
    layout?: LayoutState | undefined;
    /**
     * @generated from field: repeated webcast.linkmic.common.SpotInfo spot_list = 13;
     */
    spotList: SpotInfo[];
    /**
     * @generated from field: string applier_linker_session_id = 14;
     */
    applierLinkerSessionId: string;
};
/**
 * Describes the message webcast.model.message.linkcore.PermitApplyContent.
 * Use `create(PermitApplyContentSchema)` to create a new message.
 */
export declare const PermitApplyContentSchema: GenMessage<PermitApplyContent>;
/**
 * @generated from message webcast.model.message.linkcore.RTCBitRateMap
 */
export type RTCBitRateMap = Message<"webcast.model.message.linkcore.RTCBitRateMap"> & {
    /**
     * @generated from field: int32 xx1 = 1;
     */
    xx1: number;
    /**
     * @generated from field: int32 xx2 = 2;
     */
    xx2: number;
    /**
     * @generated from field: int32 xx3 = 3;
     */
    xx3: number;
    /**
     * @generated from field: int32 xx4 = 4;
     */
    xx4: number;
};
/**
 * Describes the message webcast.model.message.linkcore.RTCBitRateMap.
 * Use `create(RTCBitRateMapSchema)` to create a new message.
 */
export declare const RTCBitRateMapSchema: GenMessage<RTCBitRateMap>;
/**
 * @generated from message webcast.model.message.linkcore.RTCEngineConfig
 */
export type RTCEngineConfig = Message<"webcast.model.message.linkcore.RTCEngineConfig"> & {
    /**
     * @generated from field: string rtc_app_id = 1;
     */
    rtcAppId: string;
    /**
     * @generated from field: string rtc_user_id = 2;
     */
    rtcUserId: string;
    /**
     * @generated from field: string rtc_token = 3;
     */
    rtcToken: string;
    /**
     * @generated from field: int64 rtc_channel_id = 4;
     */
    rtcChannelId: bigint;
};
/**
 * Describes the message webcast.model.message.linkcore.RTCEngineConfig.
 * Use `create(RTCEngineConfigSchema)` to create a new message.
 */
export declare const RTCEngineConfigSchema: GenMessage<RTCEngineConfig>;
/**
 * @generated from message webcast.model.message.linkcore.RTCExtraInfo
 */
export type RTCExtraInfo = Message<"webcast.model.message.linkcore.RTCExtraInfo"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.RTCEngineConfig live_rtc_engine_config = 1;
     */
    liveRtcEngineConfig?: RTCEngineConfig | undefined;
    /**
     * @generated from field: repeated webcast.model.message.linkcore.RTCLiveVideoParam live_rtc_video_param = 2;
     */
    liveRtcVideoParam: RTCLiveVideoParam[];
    /**
     * @generated from field: webcast.model.message.linkcore.RTCBitRateMap rtc_bitrate_map = 3;
     */
    rtcBitrateMap?: RTCBitRateMap | undefined;
    /**
     * @generated from field: int32 rtc_fps = 4;
     */
    rtcFps: number;
    /**
     * @generated from field: webcast.model.message.linkcore.RTCMixBase rtc_mix_base = 5;
     */
    rtcMixBase?: RTCMixBase | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.ByteRTCExtInfo byte_rtc_ext_info = 6;
     */
    byteRtcExtInfo?: ByteRTCExtInfo | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.RTCInfoExtra extra = 7;
     */
    extra?: RTCInfoExtra | undefined;
    /**
     * @generated from field: string rtc_business_id = 8;
     */
    rtcBusinessId: string;
    /**
     * @generated from field: webcast.model.message.linkcore.RTCOther rtc_other = 9;
     */
    rtcOther?: RTCOther | undefined;
    /**
     * @generated from field: int32 interact_client_type = 10;
     */
    interactClientType: number;
};
/**
 * Describes the message webcast.model.message.linkcore.RTCExtraInfo.
 * Use `create(RTCExtraInfoSchema)` to create a new message.
 */
export declare const RTCExtraInfoSchema: GenMessage<RTCExtraInfo>;
/**
 * @generated from message webcast.model.message.linkcore.RTCInfoExtra
 */
export type RTCInfoExtra = Message<"webcast.model.message.linkcore.RTCInfoExtra"> & {
    /**
     * @generated from field: string version = 1;
     */
    version: string;
};
/**
 * Describes the message webcast.model.message.linkcore.RTCInfoExtra.
 * Use `create(RTCInfoExtraSchema)` to create a new message.
 */
export declare const RTCInfoExtraSchema: GenMessage<RTCInfoExtra>;
/**
 * @generated from message webcast.model.message.linkcore.RTCLiveVideoParam
 */
export type RTCLiveVideoParam = Message<"webcast.model.message.linkcore.RTCLiveVideoParam"> & {
    /**
     * @generated from field: int32 strategy_id = 1;
     */
    strategyId: number;
    /**
     * @generated from field: webcast.model.message.linkcore.RTCVideoParam params = 2;
     */
    params?: RTCVideoParam | undefined;
};
/**
 * Describes the message webcast.model.message.linkcore.RTCLiveVideoParam.
 * Use `create(RTCLiveVideoParamSchema)` to create a new message.
 */
export declare const RTCLiveVideoParamSchema: GenMessage<RTCLiveVideoParam>;
/**
 * @generated from message webcast.model.message.linkcore.RTCMixBase
 */
export type RTCMixBase = Message<"webcast.model.message.linkcore.RTCMixBase"> & {
    /**
     * @generated from field: int32 bitrate = 1;
     */
    bitrate: number;
};
/**
 * Describes the message webcast.model.message.linkcore.RTCMixBase.
 * Use `create(RTCMixBaseSchema)` to create a new message.
 */
export declare const RTCMixBaseSchema: GenMessage<RTCMixBase>;
/**
 * @generated from message webcast.model.message.linkcore.RTCOther
 */
export type RTCOther = Message<"webcast.model.message.linkcore.RTCOther"> & {
    /**
     * @generated from field: int32 max_transcoding_cb_interval_second = 1;
     */
    maxTranscodingCbIntervalSecond: number;
};
/**
 * Describes the message webcast.model.message.linkcore.RTCOther.
 * Use `create(RTCOtherSchema)` to create a new message.
 */
export declare const RTCOtherSchema: GenMessage<RTCOther>;
/**
 * @generated from message webcast.model.message.linkcore.RTCVideoParam
 */
export type RTCVideoParam = Message<"webcast.model.message.linkcore.RTCVideoParam"> & {
    /**
     * @generated from field: int32 width = 1;
     */
    width: number;
    /**
     * @generated from field: int32 height = 2;
     */
    height: number;
    /**
     * @generated from field: int32 fps = 3;
     */
    fps: number;
    /**
     * @generated from field: int32 bitrate_kbps = 4;
     */
    bitrateKbps: number;
};
/**
 * Describes the message webcast.model.message.linkcore.RTCVideoParam.
 * Use `create(RTCVideoParamSchema)` to create a new message.
 */
export declare const RTCVideoParamSchema: GenMessage<RTCVideoParam>;
/**
 * @generated from message webcast.model.message.linkcore.ReplyInviteContent
 */
export type ReplyInviteContent = Message<"webcast.model.message.linkcore.ReplyInviteContent"> & {
    /**
     * @generated from field: webcast.model.message.linkcore.Player invitee = 1;
     */
    invitee?: Player | undefined;
    /**
     * @generated from field: webcast.linkmic.common.AgreeStatus reply_status = 2;
     */
    replyStatus: AgreeStatus;
    /**
     * @generated from field: string invitee_link_mic_id = 3;
     */
    inviteeLinkMicId: string;
    /**
     * @generated from field: webcast.model.message.linkcore.MicPositionData invitee_pos = 4;
     */
    inviteePos?: MicPositionData | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.Player invite_operator_user = 5;
     */
    inviteOperatorUser?: Player | undefined;
    /**
     * @generated from field: repeated string linked_user_ui_positions = 6;
     */
    linkedUserUiPositions: string[];
    /**
     * @generated from field: repeated webcast.linkmic.common.PosIdentity ui_pos = 7;
     */
    uiPos: PosIdentity[];
    /**
     * @generated from field: webcast.linkmic.common.LayoutState layout = 8;
     */
    layout?: LayoutState | undefined;
    /**
     * @generated from field: repeated webcast.linkmic.common.SpotInfo spot_list = 9;
     */
    spotList: SpotInfo[];
    /**
     * @generated from field: string invitee_linker_session_id = 10;
     */
    inviteeLinkerSessionId: string;
};
/**
 * Describes the message webcast.model.message.linkcore.ReplyInviteContent.
 * Use `create(ReplyInviteContentSchema)` to create a new message.
 */
export declare const ReplyInviteContentSchema: GenMessage<ReplyInviteContent>;
//# sourceMappingURL=linkcore_pb.d.ts.map