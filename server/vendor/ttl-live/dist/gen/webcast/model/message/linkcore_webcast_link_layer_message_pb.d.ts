import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { BusinessContent } from "../../chatroom/model/multiguestv3_pb.js";
import type { CancelJoinGroupContent, GroupChangeContent, JoinGroupContent, JoinGroupDirectContent, JoinRoomDirectContent, LeaveJoinGroupContent, LinkEnvelopeContent, LinkLayerMessageType, P2PGroupChangeContent, PermitJoinGroupContent } from "../../im_pb.js";
import type { LinkerMode, Scene } from "../../linkmic/common_pb.js";
import type { ApplyContent, CancelApplyContent, CancelInviteContent, CreateChannelContent, FinishChannelContent, InviteContent, JoinDirectContent, KickOutContent, LeaveContent, LinkListChangeContent, PermitApplyContent, ReplyInviteContent } from "./linkcore_pb.js";
import type { CommonMessageData } from "../../shared/message_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/linkcore_webcast_link_layer_message.proto.
 */
export declare const file_webcast_model_message_linkcore_webcast_link_layer_message: GenFile;
/**
 * @generated from message webcast.model.message.linkcore.WebcastLinkLayerMessage
 */
export type WebcastLinkLayerMessage = Message<"webcast.model.message.linkcore.WebcastLinkLayerMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.im.LinkLayerMessageType message_type = 2;
     */
    messageType: LinkLayerMessageType;
    /**
     * @generated from field: int64 channel_id = 3;
     */
    channelId: bigint;
    /**
     * @generated from field: webcast.linkmic.common.Scene scene = 4;
     */
    scene: Scene;
    /**
     * @generated from field: string source = 5;
     */
    source: string;
    /**
     * @generated from field: string centerized_idc = 6;
     */
    centerizedIdc: string;
    /**
     * @generated from field: int64 rtc_room_id = 7;
     */
    rtcRoomId: bigint;
    /**
     * @generated from field: int64 version = 8;
     */
    version: bigint;
    /**
     * @generated from field: webcast.linkmic.common.LinkerMode linker_mode = 9;
     */
    linkerMode: LinkerMode;
    /**
     * @generated from field: bool wait_cross_data = 10;
     */
    waitCrossData: boolean;
    /**
     * @generated from field: webcast.model.message.linkcore.CreateChannelContent create_channel_content = 100;
     */
    createChannelContent?: CreateChannelContent | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.LinkListChangeContent list_change_content = 102;
     */
    listChangeContent?: LinkListChangeContent | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.InviteContent invite_content = 103;
     */
    inviteContent?: InviteContent | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.ApplyContent apply_content = 104;
     */
    applyContent?: ApplyContent | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.PermitApplyContent permit_apply_content = 105;
     */
    permitApplyContent?: PermitApplyContent | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.ReplyInviteContent reply_invite_content = 106;
     */
    replyInviteContent?: ReplyInviteContent | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.KickOutContent kick_out_content = 107;
     */
    kickOutContent?: KickOutContent | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.CancelApplyContent cancel_apply_content = 108;
     */
    cancelApplyContent?: CancelApplyContent | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.CancelInviteContent cancel_invite_content = 109;
     */
    cancelInviteContent?: CancelInviteContent | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.LeaveContent leave_content = 110;
     */
    leaveContent?: LeaveContent | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.FinishChannelContent finish_content = 111;
     */
    finishContent?: FinishChannelContent | undefined;
    /**
     * @generated from field: webcast.model.message.linkcore.JoinDirectContent join_direct_content = 112;
     */
    joinDirectContent?: JoinDirectContent | undefined;
    /**
     * @generated from field: webcast.im.JoinGroupContent join_group_content = 113;
     */
    joinGroupContent?: JoinGroupContent | undefined;
    /**
     * @generated from field: webcast.im.PermitJoinGroupContent permit_group_content = 114;
     */
    permitGroupContent?: PermitJoinGroupContent | undefined;
    /**
     * @generated from field: webcast.im.CancelJoinGroupContent cancel_group_content = 115;
     */
    cancelGroupContent?: CancelJoinGroupContent | undefined;
    /**
     * @generated from field: webcast.im.LeaveJoinGroupContent leave_group_content = 116;
     */
    leaveGroupContent?: LeaveJoinGroupContent | undefined;
    /**
     * @generated from field: webcast.im.P2PGroupChangeContent p2p_group_change_content = 117;
     */
    p2pGroupChangeContent?: P2PGroupChangeContent | undefined;
    /**
     * @generated from field: webcast.im.GroupChangeContent group_change_content = 118;
     */
    groupChangeContent?: GroupChangeContent | undefined;
    /**
     * @generated from field: webcast.im.JoinGroupDirectContent join_group_direct_content = 119;
     */
    joinGroupDirectContent?: JoinGroupDirectContent | undefined;
    /**
     * @generated from field: webcast.im.JoinRoomDirectContent join_room_direct_content = 120;
     */
    joinRoomDirectContent?: JoinRoomDirectContent | undefined;
    /**
     * @generated from field: webcast.im.LinkEnvelopeContent link_envelope_content = 150;
     */
    linkEnvelopeContent?: LinkEnvelopeContent | undefined;
    /**
     * @generated from field: webcast.chatroom.model.multiguestv3.BusinessContent business_content = 200;
     */
    businessContent?: BusinessContent | undefined;
};
/**
 * Describes the message webcast.model.message.linkcore.WebcastLinkLayerMessage.
 * Use `create(WebcastLinkLayerMessageSchema)` to create a new message.
 */
export declare const WebcastLinkLayerMessageSchema: GenMessage<WebcastLinkLayerMessage>;
//# sourceMappingURL=linkcore_webcast_link_layer_message_pb.d.ts.map