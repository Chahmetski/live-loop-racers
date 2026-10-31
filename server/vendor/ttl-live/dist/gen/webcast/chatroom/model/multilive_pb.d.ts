import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { LinkmicApplierSortSetting, LinkmicUserSettingDisableVideoLinkmic, LinkmicUserSettingLayout, LinkmicUserSettingMultiGuestApplyAutoApprove, LinkmicUserSettingShowAction } from "../../model/data/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/chatroom/model/multilive.proto.
 */
export declare const file_webcast_chatroom_model_multilive: GenFile;
/**
 * @generated from message webcast.chatroom.model.multilive.MultiLiveAnchorPanelSettings
 */
export type MultiLiveAnchorPanelSettings = Message<"webcast.chatroom.model.multilive.MultiLiveAnchorPanelSettings"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: webcast.model.data.LinkmicUserSettingLayout layout = 2;
     */
    layout: LinkmicUserSettingLayout;
    /**
     * @generated from field: webcast.model.data.LinkmicUserSettingShowAction fix_mic_num = 3;
     */
    fixMicNum: LinkmicUserSettingShowAction;
    /**
     * @generated from field: webcast.model.data.LinkmicUserSettingShowAction allow_request_from_user = 4;
     */
    allowRequestFromUser: LinkmicUserSettingShowAction;
    /**
     * @generated from field: webcast.model.data.LinkmicUserSettingShowAction allow_request_from_follower_only = 5;
     */
    allowRequestFromFollowerOnly: LinkmicUserSettingShowAction;
    /**
     * @generated from field: webcast.model.data.LinkmicApplierSortSetting applier_sort_setting = 7;
     */
    applierSortSetting: LinkmicApplierSortSetting;
    /**
     * @generated from field: int64 applier_sort_gift_score_threshold = 8;
     */
    applierSortGiftScoreThreshold: bigint;
    /**
     * @generated from field: webcast.model.data.LinkmicUserSettingShowAction allow_request_from_friends = 9;
     */
    allowRequestFromFriends: LinkmicUserSettingShowAction;
    /**
     * @generated from field: webcast.model.data.LinkmicUserSettingShowAction allow_request_from_followers = 10;
     */
    allowRequestFromFollowers: LinkmicUserSettingShowAction;
    /**
     * @generated from field: webcast.model.data.LinkmicUserSettingShowAction allow_request_from_others = 11;
     */
    allowRequestFromOthers: LinkmicUserSettingShowAction;
    /**
     * @generated from field: webcast.model.data.LinkmicUserSettingShowAction enable_show_multi_guest_layout = 12;
     */
    enableShowMultiGuestLayout: LinkmicUserSettingShowAction;
    /**
     * @generated from field: webcast.model.data.LinkmicUserSettingDisableVideoLinkmic disable_video_linkmic = 13;
     */
    disableVideoLinkmic: LinkmicUserSettingDisableVideoLinkmic;
    /**
     * @generated from field: webcast.model.data.LinkmicUserSettingMultiGuestApplyAutoApprove multi_guest_apply_auto_approve = 14;
     */
    multiGuestApplyAutoApprove: LinkmicUserSettingMultiGuestApplyAutoApprove;
    /**
     * @generated from field: int64 multi_guest_share_revenue_info_version = 15;
     */
    multiGuestShareRevenueInfoVersion: bigint;
    /**
     * @generated from field: int32 show_available_spot = 16;
     */
    showAvailableSpot: number;
    /**
     * @generated from field: int32 save_as_default_layout = 17;
     */
    saveAsDefaultLayout: number;
    /**
     * @generated from field: int32 multi_guest_allow_cohost_invitation = 18;
     */
    multiGuestAllowCohostInvitation: number;
    /**
     * @generated from field: int32 multi_guest_allow_cohost_invitation_once = 19;
     */
    multiGuestAllowCohostInvitationOnce: number;
    /**
     * @generated from field: int32 disable_guest_open_camera = 20;
     */
    disableGuestOpenCamera: number;
};
/**
 * Describes the message webcast.chatroom.model.multilive.MultiLiveAnchorPanelSettings.
 * Use `create(MultiLiveAnchorPanelSettingsSchema)` to create a new message.
 */
export declare const MultiLiveAnchorPanelSettingsSchema: GenMessage<MultiLiveAnchorPanelSettings>;
//# sourceMappingURL=multilive_pb.d.ts.map