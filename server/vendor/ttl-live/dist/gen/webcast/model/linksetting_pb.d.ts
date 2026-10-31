import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { MultiLiveAnchorPanelSettings } from "../chatroom/model/multilive_pb.js";
import type { AnchorLayoutSetting } from "../linkmic/common_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/linksetting.proto.
 */
export declare const file_webcast_model_linksetting: GenFile;
/**
 * @generated from message webcast.model.linksetting.MultiLiveUpdateUserSettingContent
 */
export type MultiLiveUpdateUserSettingContent = Message<"webcast.model.linksetting.MultiLiveUpdateUserSettingContent"> & {
    /**
     * @generated from field: webcast.chatroom.model.multilive.MultiLiveAnchorPanelSettings update_user_setting_info = 1;
     */
    updateUserSettingInfo?: MultiLiveAnchorPanelSettings | undefined;
    /**
     * @generated from field: webcast.linkmic.common.AnchorLayoutSetting anchor_layout_setting = 2;
     */
    anchorLayoutSetting?: AnchorLayoutSetting | undefined;
    /**
     * @generated from field: int32 reset_point_after_leave = 3;
     */
    resetPointAfterLeave: number;
};
/**
 * Describes the message webcast.model.linksetting.MultiLiveUpdateUserSettingContent.
 * Use `create(MultiLiveUpdateUserSettingContentSchema)` to create a new message.
 */
export declare const MultiLiveUpdateUserSettingContentSchema: GenMessage<MultiLiveUpdateUserSettingContent>;
//# sourceMappingURL=linksetting_pb.d.ts.map