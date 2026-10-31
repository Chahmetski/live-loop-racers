import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { PerceptionFeedbackOption } from "../../message_proto_pb.js";
import type { PerceptionDialogIconType, PunishTypeId } from "../data/messages_pb.js";
import type { Text } from "./common_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/invite_top_host_info.proto.
 */
export declare const file_webcast_model_message_invite_top_host_info: GenFile;
/**
 * @generated from message webcast.model.message.InviteTopHostInfo
 */
export type InviteTopHostInfo = Message<"webcast.model.message.InviteTopHostInfo"> & {
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
 * Describes the message webcast.model.message.InviteTopHostInfo.
 * Use `create(InviteTopHostInfoSchema)` to create a new message.
 */
export declare const InviteTopHostInfoSchema: GenMessage<InviteTopHostInfo>;
/**
 * @generated from message webcast.model.message.LinkmicUserInfo
 */
export type LinkmicUserInfo = Message<"webcast.model.message.LinkmicUserInfo"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: string linkmic_id_str = 2;
     */
    linkmicIdStr: string;
    /**
     * @generated from field: int64 room_id = 3;
     */
    roomId: bigint;
    /**
     * @generated from field: int64 linked_time = 4;
     */
    linkedTime: bigint;
};
/**
 * Describes the message webcast.model.message.LinkmicUserInfo.
 * Use `create(LinkmicUserInfoSchema)` to create a new message.
 */
export declare const LinkmicUserInfoSchema: GenMessage<LinkmicUserInfo>;
/**
 * @generated from message webcast.model.message.PerceptionDialogInfo
 */
export type PerceptionDialogInfo = Message<"webcast.model.message.PerceptionDialogInfo"> & {
    /**
     * @generated from field: webcast.model.data.PerceptionDialogIconType icon_type = 1;
     */
    iconType: PerceptionDialogIconType;
    /**
     * @generated from field: webcast.model.message.common.Text title = 2;
     */
    title?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text sub_title = 3;
     */
    subTitle?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text advice_action_text = 4;
     */
    adviceActionText?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text default_action_text = 5;
     */
    defaultActionText?: Text | undefined;
    /**
     * @generated from field: string violation_detail_url = 6;
     */
    violationDetailUrl: string;
    /**
     * @generated from field: int32 scene = 7;
     */
    scene: number;
    /**
     * @generated from field: int64 target_user_id = 8;
     */
    targetUserId: bigint;
    /**
     * @generated from field: int64 target_room_id = 9;
     */
    targetRoomId: bigint;
    /**
     * @generated from field: int64 count_down_time = 10;
     */
    countDownTime: bigint;
    /**
     * @generated from field: bool show_feedback = 11;
     */
    showFeedback: boolean;
    /**
     * @generated from field: repeated webcast.message.proto.PerceptionFeedbackOption feedback_options = 12;
     */
    feedbackOptions: PerceptionFeedbackOption[];
    /**
     * @generated from field: int64 policy_tip = 13;
     */
    policyTip: bigint;
    /**
     * @generated from field: int32 appeal_popup = 14;
     */
    appealPopup: number;
    /**
     * @generated from field: webcast.model.message.common.Text close_action_text = 15;
     */
    closeActionText?: Text | undefined;
};
/**
 * Describes the message webcast.model.message.PerceptionDialogInfo.
 * Use `create(PerceptionDialogInfoSchema)` to create a new message.
 */
export declare const PerceptionDialogInfoSchema: GenMessage<PerceptionDialogInfo>;
/**
 * @generated from message webcast.model.message.PunishEventInfo
 */
export type PunishEventInfo = Message<"webcast.model.message.PunishEventInfo"> & {
    /**
     * @generated from field: string punish_type = 1;
     */
    punishType: string;
    /**
     * @generated from field: string punish_reason = 2;
     */
    punishReason: string;
    /**
     * @generated from field: string punish_id = 3;
     */
    punishId: string;
    /**
     * @generated from field: int64 violation_uid = 4;
     */
    violationUid: bigint;
    /**
     * @generated from field: webcast.model.data.PunishTypeId punish_type_id = 5;
     */
    punishTypeId: PunishTypeId;
    /**
     * @generated from field: int64 duration = 6;
     */
    duration: bigint;
    /**
     * @generated from field: string punish_perception_code = 7;
     */
    punishPerceptionCode: string;
    /**
     * @generated from field: int64 end_time = 8;
     */
    endTime: bigint;
    /**
     * @generated from field: string violation_uid_str = 9;
     */
    violationUidStr: string;
    /**
     * @generated from field: string show_reason = 10;
     */
    showReason: string;
};
/**
 * Describes the message webcast.model.message.PunishEventInfo.
 * Use `create(PunishEventInfoSchema)` to create a new message.
 */
export declare const PunishEventInfoSchema: GenMessage<PunishEventInfo>;
//# sourceMappingURL=invite_top_host_info_pb.d.ts.map