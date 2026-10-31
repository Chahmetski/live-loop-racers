import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "../model/base/messages_pb.js";
import type { AuditTaskType, PinCardType, SOVLockInfoType, SOVMaskInfoType, SOVStatus, SubPinCard_Text_TextType, SubPinCardText_TextType, TimerDetail_AntidirtStatus, TimerDetail_AuditStatus, TimerDetail_AuditTaskType, TimerStatus } from "../model/data/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/chatroom/api.proto.
 */
export declare const file_webcast_chatroom_api: GenFile;
/**
 * @generated from message webcast.chatroom.api.EmoteModel_AuditInfo
 */
export type EmoteModel_AuditInfo = Message<"webcast.chatroom.api.EmoteModel_AuditInfo"> & {
    /**
     * @generated from field: int64 violation_id = 1;
     */
    violationId: bigint;
    /**
     * @generated from field: webcast.model.data.AuditTaskType task_type = 2;
     */
    taskType: AuditTaskType;
};
/**
 * Describes the message webcast.chatroom.api.EmoteModel_AuditInfo.
 * Use `create(EmoteModel_AuditInfoSchema)` to create a new message.
 */
export declare const EmoteModel_AuditInfoSchema: GenMessage<EmoteModel_AuditInfo>;
/**
 * @generated from message webcast.chatroom.api.SOVBriefInfo
 */
export type SOVBriefInfo = Message<"webcast.chatroom.api.SOVBriefInfo"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel cover = 1;
     */
    cover?: ImageModel | undefined;
    /**
     * @generated from field: webcast.chatroom.api.SOVMaskInfo mask_info = 2;
     */
    maskInfo?: SOVMaskInfo | undefined;
    /**
     * @generated from field: webcast.model.data.SOVLockInfoType lock_info = 3;
     */
    lockInfo: SOVLockInfoType;
    /**
     * @generated from field: int64 create_time = 4;
     */
    createTime: bigint;
    /**
     * @generated from field: string aweme_id = 5;
     */
    awemeId: string;
};
/**
 * Describes the message webcast.chatroom.api.SOVBriefInfo.
 * Use `create(SOVBriefInfoSchema)` to create a new message.
 */
export declare const SOVBriefInfoSchema: GenMessage<SOVBriefInfo>;
/**
 * @generated from message webcast.chatroom.api.SOVMaskInfo
 */
export type SOVMaskInfo = Message<"webcast.chatroom.api.SOVMaskInfo"> & {
    /**
     * @generated from field: webcast.model.data.SOVMaskInfoType type = 1;
     */
    type: SOVMaskInfoType;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
};
/**
 * Describes the message webcast.chatroom.api.SOVMaskInfo.
 * Use `create(SOVMaskInfoSchema)` to create a new message.
 */
export declare const SOVMaskInfoSchema: GenMessage<SOVMaskInfo>;
/**
 * @generated from message webcast.chatroom.api.SOVPinCardInfo
 */
export type SOVPinCardInfo = Message<"webcast.chatroom.api.SOVPinCardInfo"> & {
    /**
     * @generated from field: bool recently_updated = 1;
     */
    recentlyUpdated: boolean;
    /**
     * @generated from field: webcast.chatroom.api.SubOnlyVideosBriefInfo sov_info = 2;
     */
    sovInfo?: SubOnlyVideosBriefInfo | undefined;
};
/**
 * Describes the message webcast.chatroom.api.SOVPinCardInfo.
 * Use `create(SOVPinCardInfoSchema)` to create a new message.
 */
export declare const SOVPinCardInfoSchema: GenMessage<SOVPinCardInfo>;
/**
 * @generated from message webcast.chatroom.api.SubGoalPinCard
 */
export type SubGoalPinCard = Message<"webcast.chatroom.api.SubGoalPinCard"> & {
    /**
     * @generated from field: int64 goal_id = 1;
     */
    goalId: bigint;
    /**
     * @generated from field: int64 time_to_live = 2;
     */
    timeToLive: bigint;
    /**
     * @generated from field: webcast.chatroom.api.SubPinCardText desc = 3;
     */
    desc?: SubPinCardText | undefined;
    /**
     * @generated from field: int64 target = 4;
     */
    target: bigint;
    /**
     * @generated from field: int64 progress = 5;
     */
    progress: bigint;
};
/**
 * Describes the message webcast.chatroom.api.SubGoalPinCard.
 * Use `create(SubGoalPinCardSchema)` to create a new message.
 */
export declare const SubGoalPinCardSchema: GenMessage<SubGoalPinCard>;
/**
 * @generated from message webcast.chatroom.api.SubOnlyVideosBriefInfo
 */
export type SubOnlyVideosBriefInfo = Message<"webcast.chatroom.api.SubOnlyVideosBriefInfo"> & {
    /**
     * @generated from field: string total_count_str = 1;
     */
    totalCountStr: string;
    /**
     * @generated from field: int32 total_count = 2;
     */
    totalCount: number;
    /**
     * @generated from field: repeated webcast.chatroom.api.SOVBriefInfo sov_brief_info = 3;
     */
    sovBriefInfo: SOVBriefInfo[];
    /**
     * @generated from field: webcast.model.data.SOVStatus creator_status = 4;
     */
    creatorStatus: SOVStatus;
    /**
     * @generated from field: string schema = 5;
     */
    schema: string;
    /**
     * @generated from field: bool is_sov_adjustments_enabled_for_consumer = 6;
     */
    isSovAdjustmentsEnabledForConsumer: boolean;
    /**
     * @generated from field: int32 new_sov_count = 7;
     */
    newSovCount: number;
};
/**
 * Describes the message webcast.chatroom.api.SubOnlyVideosBriefInfo.
 * Use `create(SubOnlyVideosBriefInfoSchema)` to create a new message.
 */
export declare const SubOnlyVideosBriefInfoSchema: GenMessage<SubOnlyVideosBriefInfo>;
/**
 * @generated from message webcast.chatroom.api.SubPinCard
 */
export type SubPinCard = Message<"webcast.chatroom.api.SubPinCard"> & {
    /**
     * @generated from field: int64 time_to_live = 1;
     */
    timeToLive: bigint;
    /**
     * @generated from field: webcast.chatroom.api.Text title = 2;
     */
    title?: Text | undefined;
    /**
     * @generated from field: webcast.chatroom.api.Text desc = 3;
     */
    desc?: Text | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel image = 4;
     */
    image?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.data.PinCardType type = 5;
     */
    type: PinCardType;
    /**
     * @generated from field: int64 id = 6;
     */
    id: bigint;
    /**
     * @generated from field: int64 template_id = 7;
     */
    templateId: bigint;
    /**
     * @generated from field: webcast.chatroom.api.SubGoalPinCard goal_pin_card = 8;
     */
    goalPinCard?: SubGoalPinCard | undefined;
    /**
     * @generated from field: string action_schema = 9;
     */
    actionSchema: string;
    /**
     * @generated from field: int64 last_pin_timestamp = 10;
     */
    lastPinTimestamp: bigint;
    /**
     * @generated from field: webcast.chatroom.api.SubPinCardExtra extra_info = 11;
     */
    extraInfo?: SubPinCardExtra | undefined;
    /**
     * @generated from field: int64 highlight_text_num = 12;
     */
    highlightTextNum: bigint;
    /**
     * @generated from field: repeated webcast.model.base.ImageModel icons = 13;
     */
    icons: ImageModel[];
    /**
     * @generated from field: int32 pin_source = 14;
     */
    pinSource: number;
};
/**
 * Describes the message webcast.chatroom.api.SubPinCard.
 * Use `create(SubPinCardSchema)` to create a new message.
 */
export declare const SubPinCardSchema: GenMessage<SubPinCard>;
/**
 * @generated from message webcast.chatroom.api.SubPinCardExtra
 */
export type SubPinCardExtra = Message<"webcast.chatroom.api.SubPinCardExtra"> & {
    /**
     * @generated from field: webcast.chatroom.api.SOVPinCardInfo sov_info = 1;
     */
    sovInfo?: SOVPinCardInfo | undefined;
};
/**
 * Describes the message webcast.chatroom.api.SubPinCardExtra.
 * Use `create(SubPinCardExtraSchema)` to create a new message.
 */
export declare const SubPinCardExtraSchema: GenMessage<SubPinCardExtra>;
/**
 * @generated from message webcast.chatroom.api.SubPinCardText
 */
export type SubPinCardText = Message<"webcast.chatroom.api.SubPinCardText"> & {
    /**
     * @generated from field: webcast.model.data.SubPinCardText_TextType type = 1;
     */
    type: SubPinCardText_TextType;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
};
/**
 * Describes the message webcast.chatroom.api.SubPinCardText.
 * Use `create(SubPinCardTextSchema)` to create a new message.
 */
export declare const SubPinCardTextSchema: GenMessage<SubPinCardText>;
/**
 * @generated from message webcast.chatroom.api.Text
 */
export type Text = Message<"webcast.chatroom.api.Text"> & {
    /**
     * @generated from field: webcast.model.data.SubPinCard_Text_TextType type = 1;
     */
    type: SubPinCard_Text_TextType;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
};
/**
 * Describes the message webcast.chatroom.api.Text.
 * Use `create(TextSchema)` to create a new message.
 */
export declare const TextSchema: GenMessage<Text>;
/**
 * @generated from message webcast.chatroom.api.TimerDetail
 */
export type TimerDetail = Message<"webcast.chatroom.api.TimerDetail"> & {
    /**
     * @generated from field: int64 timer_id = 1;
     */
    timerId: bigint;
    /**
     * @generated from field: int64 anchor_id = 2;
     */
    anchorId: bigint;
    /**
     * @generated from field: int64 start_timestamp_s = 3;
     */
    startTimestampS: bigint;
    /**
     * @generated from field: int64 start_countdown_time_s = 4;
     */
    startCountdownTimeS: bigint;
    /**
     * @generated from field: string anchor_side_title = 5;
     */
    anchorSideTitle: string;
    /**
     * @generated from field: string user_side_title = 6;
     */
    userSideTitle: string;
    /**
     * @generated from field: int64 time_increase_per_sub_s = 7;
     */
    timeIncreasePerSubS: bigint;
    /**
     * @generated from field: int64 time_increase_cap_s = 8;
     */
    timeIncreaseCapS: bigint;
    /**
     * @generated from field: int32 sub_count = 9;
     */
    subCount: number;
    /**
     * @generated from field: bool time_increase_reach_cap = 10;
     */
    timeIncreaseReachCap: boolean;
    /**
     * @generated from field: int64 total_pause_time_s = 11;
     */
    totalPauseTimeS: bigint;
    /**
     * @generated from field: int64 last_pause_timestamp_s = 12;
     */
    lastPauseTimestampS: bigint;
    /**
     * @generated from field: int64 total_time_s = 13;
     */
    totalTimeS: bigint;
    /**
     * @generated from field: int64 remaining_time_s = 14;
     */
    remainingTimeS: bigint;
    /**
     * @generated from field: int64 timestamp_s = 15;
     */
    timestampS: bigint;
    /**
     * @generated from field: int64 sticker_x = 16;
     */
    stickerX: bigint;
    /**
     * @generated from field: int64 sticker_y = 17;
     */
    stickerY: bigint;
    /**
     * @generated from field: int64 screen_w = 18;
     */
    screenW: bigint;
    /**
     * @generated from field: int64 screen_h = 19;
     */
    screenH: bigint;
    /**
     * @generated from field: webcast.model.data.TimerStatus timer_status = 20;
     */
    timerStatus: TimerStatus;
    /**
     * @generated from field: webcast.model.data.TimerDetail_AntidirtStatus antidirt_status = 21;
     */
    antidirtStatus: TimerDetail_AntidirtStatus;
    /**
     * @generated from field: webcast.model.data.TimerDetail_AuditStatus audit_status = 22;
     */
    auditStatus: TimerDetail_AuditStatus;
    /**
     * @generated from field: webcast.chatroom.api.TimerDetail_AuditInfo audit_info = 23;
     */
    auditInfo?: TimerDetail_AuditInfo | undefined;
};
/**
 * Describes the message webcast.chatroom.api.TimerDetail.
 * Use `create(TimerDetailSchema)` to create a new message.
 */
export declare const TimerDetailSchema: GenMessage<TimerDetail>;
/**
 * @generated from message webcast.chatroom.api.TimerDetail_AuditInfo
 */
export type TimerDetail_AuditInfo = Message<"webcast.chatroom.api.TimerDetail_AuditInfo"> & {
    /**
     * @generated from field: int64 violation_id = 1;
     */
    violationId: bigint;
    /**
     * @generated from field: webcast.model.data.TimerDetail_AuditTaskType task_type = 2;
     */
    taskType: TimerDetail_AuditTaskType;
};
/**
 * Describes the message webcast.chatroom.api.TimerDetail_AuditInfo.
 * Use `create(TimerDetail_AuditInfoSchema)` to create a new message.
 */
export declare const TimerDetail_AuditInfoSchema: GenMessage<TimerDetail_AuditInfo>;
//# sourceMappingURL=api_pb.d.ts.map