import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { PerceptionDialogIconType } from "./model/data/messages_pb.js";
import type { Text } from "./model/message/common_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/message_proto_perception_sheet_info.proto.
 */
export declare const file_webcast_message_proto_perception_sheet_info: GenFile;
/**
 * @generated from message webcast.message.proto.PerceptionSheetInfo
 */
export type PerceptionSheetInfo = Message<"webcast.message.proto.PerceptionSheetInfo"> & {
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
     * @generated from field: webcast.model.message.common.Text reason_title = 4;
     */
    reasonTitle?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text reason_info = 5;
     */
    reasonInfo?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text not_allowed_title = 6;
     */
    notAllowedTitle?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text not_allowed_text = 7;
     */
    notAllowedText?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text default_action_text = 8;
     */
    defaultActionText?: Text | undefined;
    /**
     * @generated from field: int32 scene = 9;
     */
    scene: number;
    /**
     * @generated from field: int64 target_user_id = 10;
     */
    targetUserId: bigint;
    /**
     * @generated from field: int64 target_room_id = 11;
     */
    targetRoomId: bigint;
    /**
     * @generated from field: int64 count_down_time = 12;
     */
    countDownTime: bigint;
};
/**
 * Describes the message webcast.message.proto.PerceptionSheetInfo.
 * Use `create(PerceptionSheetInfoSchema)` to create a new message.
 */
export declare const PerceptionSheetInfoSchema: GenMessage<PerceptionSheetInfo>;
//# sourceMappingURL=message_proto_perception_sheet_info_pb.d.ts.map