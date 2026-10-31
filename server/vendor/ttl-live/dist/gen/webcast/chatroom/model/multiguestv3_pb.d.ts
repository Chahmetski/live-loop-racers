import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { LinkmicShareRevenueSettingStruct } from "./interact_messages_pb.js";
import type { MultiLiveAnchorPanelSettings } from "./multilive_pb.js";
import type { CohostContent, ContentInviteSource, JoinRoomDirectBizContent, KickOutBizContent } from "../../im_pb.js";
import type { LinkMicUserAdminType } from "../../linkmic/common_pb.js";
import type { User } from "../../model/base/user_2_pb.js";
import type { LinkmicShareRevenueSetting, LinkUserType, MultiGuestOutsideRoomInviteSource } from "../../model/data/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/chatroom/model/multiguestv3.proto.
 */
export declare const file_webcast_chatroom_model_multiguestv3: GenFile;
/**
 * @generated from message webcast.chatroom.model.multiguestv3.ApplyBizContent
 */
export type ApplyBizContent = Message<"webcast.chatroom.model.multiguestv3.ApplyBizContent"> & {
    /**
     * @generated from field: webcast.model.base.user.User user = 1;
     */
    user?: User | undefined;
};
/**
 * Describes the message webcast.chatroom.model.multiguestv3.ApplyBizContent.
 * Use `create(ApplyBizContentSchema)` to create a new message.
 */
export declare const ApplyBizContentSchema: GenMessage<ApplyBizContent>;
/**
 * @generated from message webcast.chatroom.model.multiguestv3.BusinessContent
 */
export type BusinessContent = Message<"webcast.chatroom.model.multiguestv3.BusinessContent"> & {
    /**
     * @generated from field: int64 over_length = 1;
     */
    overLength: bigint;
    /**
     * @generated from field: webcast.chatroom.model.multiguestv3.MultiLiveContent multi_live_content = 100;
     */
    multiLiveContent?: MultiLiveContent | undefined;
    /**
     * @generated from field: webcast.im.CohostContent cohost_content = 200;
     */
    cohostContent?: CohostContent | undefined;
};
/**
 * Describes the message webcast.chatroom.model.multiguestv3.BusinessContent.
 * Use `create(BusinessContentSchema)` to create a new message.
 */
export declare const BusinessContentSchema: GenMessage<BusinessContent>;
/**
 * @generated from message webcast.chatroom.model.multiguestv3.InviteBizContent
 */
export type InviteBizContent = Message<"webcast.chatroom.model.multiguestv3.InviteBizContent"> & {
    /**
     * @generated from field: webcast.chatroom.model.multilive.MultiLiveAnchorPanelSettings anchor_setting_info = 1;
     */
    anchorSettingInfo?: MultiLiveAnchorPanelSettings | undefined;
    /**
     * @generated from field: webcast.im.ContentInviteSource invite_source = 2;
     */
    inviteSource: ContentInviteSource;
    /**
     * @generated from field: webcast.model.base.user.User operator_user_info = 3;
     */
    operatorUserInfo?: User | undefined;
    /**
     * @generated from field: webcast.linkmic.common.LinkMicUserAdminType operator_link_admin_type = 4;
     */
    operatorLinkAdminType: LinkMicUserAdminType;
    /**
     * @generated from field: webcast.model.base.user.User invitee_user_info = 5;
     */
    inviteeUserInfo?: User | undefined;
    /**
     * @generated from field: webcast.model.data.LinkmicShareRevenueSetting share_revenue_setting = 6;
     */
    shareRevenueSetting: LinkmicShareRevenueSetting;
    /**
     * @generated from field: webcast.chatroom.model.interact.LinkmicShareRevenueSettingStruct share_revenue_setting_struct = 7;
     */
    shareRevenueSettingStruct?: LinkmicShareRevenueSettingStruct | undefined;
};
/**
 * Describes the message webcast.chatroom.model.multiguestv3.InviteBizContent.
 * Use `create(InviteBizContentSchema)` to create a new message.
 */
export declare const InviteBizContentSchema: GenMessage<InviteBizContent>;
/**
 * @generated from message webcast.chatroom.model.multiguestv3.JoinDirectBizContent
 */
export type JoinDirectBizContent = Message<"webcast.chatroom.model.multiguestv3.JoinDirectBizContent"> & {
    /**
     * @generated from field: int64 reply_im_msg_id = 1;
     */
    replyImMsgId: bigint;
    /**
     * @generated from field: webcast.model.data.MultiGuestOutsideRoomInviteSource outside_room_invite_source = 2;
     */
    outsideRoomInviteSource: MultiGuestOutsideRoomInviteSource;
    /**
     * @generated from field: bool is_full_position_pre_approved = 3;
     */
    isFullPositionPreApproved: boolean;
    /**
     * @generated from field: int32 mg_source_role = 4;
     */
    mgSourceRole: number;
};
/**
 * Describes the message webcast.chatroom.model.multiguestv3.JoinDirectBizContent.
 * Use `create(JoinDirectBizContentSchema)` to create a new message.
 */
export declare const JoinDirectBizContentSchema: GenMessage<JoinDirectBizContent>;
/**
 * @generated from message webcast.chatroom.model.multiguestv3.MultiLiveContent
 */
export type MultiLiveContent = Message<"webcast.chatroom.model.multiguestv3.MultiLiveContent"> & {
    /**
     * @generated from field: webcast.chatroom.model.multiguestv3.ApplyBizContent apply_biz_content = 1;
     */
    applyBizContent?: ApplyBizContent | undefined;
    /**
     * @generated from field: webcast.chatroom.model.multiguestv3.InviteBizContent invite_biz_content = 2;
     */
    inviteBizContent?: InviteBizContent | undefined;
    /**
     * @generated from field: webcast.chatroom.model.multiguestv3.ReplyBizContent reply_biz_content = 3;
     */
    replyBizContent?: ReplyBizContent | undefined;
    /**
     * @generated from field: webcast.chatroom.model.multiguestv3.PermitBizContent permit_biz_content = 4;
     */
    permitBizContent?: PermitBizContent | undefined;
    /**
     * @generated from field: webcast.chatroom.model.multiguestv3.JoinDirectBizContent join_direct_biz_content = 5;
     */
    joinDirectBizContent?: JoinDirectBizContent | undefined;
    /**
     * @generated from field: webcast.im.KickOutBizContent kick_out_biz_content = 6;
     */
    kickOutBizContent?: KickOutBizContent | undefined;
    /**
     * @generated from field: webcast.im.JoinRoomDirectBizContent join_room_direct_biz_content = 7;
     */
    joinRoomDirectBizContent?: JoinRoomDirectBizContent | undefined;
};
/**
 * Describes the message webcast.chatroom.model.multiguestv3.MultiLiveContent.
 * Use `create(MultiLiveContentSchema)` to create a new message.
 */
export declare const MultiLiveContentSchema: GenMessage<MultiLiveContent>;
/**
 * @generated from message webcast.chatroom.model.multiguestv3.PermitBizContent
 */
export type PermitBizContent = Message<"webcast.chatroom.model.multiguestv3.PermitBizContent"> & {
    /**
     * @generated from field: webcast.chatroom.model.multilive.MultiLiveAnchorPanelSettings anchor_setting_info = 1;
     */
    anchorSettingInfo?: MultiLiveAnchorPanelSettings | undefined;
    /**
     * @generated from field: int64 expire_timestamp = 2;
     */
    expireTimestamp: bigint;
    /**
     * @generated from field: webcast.model.base.user.User operator_user_info = 3;
     */
    operatorUserInfo?: User | undefined;
    /**
     * @generated from field: webcast.linkmic.common.LinkMicUserAdminType operator_link_admin_type = 4;
     */
    operatorLinkAdminType: LinkMicUserAdminType;
    /**
     * @generated from field: webcast.model.data.LinkUserType link_user_type = 5;
     */
    linkUserType: LinkUserType;
    /**
     * @generated from field: bool is_apply_auto_approved = 6;
     */
    isApplyAutoApproved: boolean;
    /**
     * @generated from field: int64 link_type_permission = 7;
     */
    linkTypePermission: bigint;
    /**
     * @generated from field: bool is_full_position_pre_approved = 8;
     */
    isFullPositionPreApproved: boolean;
    /**
     * @generated from field: bool is_quick_call_auto_approved = 9;
     */
    isQuickCallAutoApproved: boolean;
};
/**
 * Describes the message webcast.chatroom.model.multiguestv3.PermitBizContent.
 * Use `create(PermitBizContentSchema)` to create a new message.
 */
export declare const PermitBizContentSchema: GenMessage<PermitBizContent>;
/**
 * @generated from message webcast.chatroom.model.multiguestv3.ReplyBizContent
 */
export type ReplyBizContent = Message<"webcast.chatroom.model.multiguestv3.ReplyBizContent"> & {
    /**
     * @generated from field: int32 link_type = 1;
     */
    linkType: number;
    /**
     * @generated from field: int32 is_turn_off_invitation = 2;
     */
    isTurnOffInvitation: number;
    /**
     * @generated from field: webcast.model.base.user.User reply_user_info = 3;
     */
    replyUserInfo?: User | undefined;
    /**
     * @generated from field: bool is_full_position_pre_approved = 4;
     */
    isFullPositionPreApproved: boolean;
};
/**
 * Describes the message webcast.chatroom.model.multiguestv3.ReplyBizContent.
 * Use `create(ReplyBizContentSchema)` to create a new message.
 */
export declare const ReplyBizContentSchema: GenMessage<ReplyBizContent>;
//# sourceMappingURL=multiguestv3_pb.d.ts.map