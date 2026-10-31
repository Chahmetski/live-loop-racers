import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "../base/messages_pb.js";
import type { GoalMessageSource } from "../data/messages_pb.js";
import type { LiveStreamGoal, LiveStreamGoalIndicator, LiveStreamSubGoal } from "./model_pb.js";
import type { GoalPinInfo } from "../goal_pb.js";
import type { CommonMessageData } from "../../shared/message_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/gift/model_webcast_goal_update_message.proto.
 */
export declare const file_webcast_model_gift_model_webcast_goal_update_message: GenFile;
/**
 * @generated from message webcast.model.gift.model.WebcastGoalUpdateMessage
 */
export type WebcastGoalUpdateMessage = Message<"webcast.model.gift.model.WebcastGoalUpdateMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.gift.model.LiveStreamGoalIndicator indicator = 2;
     */
    indicator?: LiveStreamGoalIndicator | undefined;
    /**
     * @generated from field: webcast.model.gift.model.LiveStreamGoal goal = 3;
     */
    goal?: LiveStreamGoal | undefined;
    /**
     * @generated from field: int64 contributor_id = 4;
     */
    contributorId: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel contributor_avatar = 5;
     */
    contributorAvatar?: ImageModel | undefined;
    /**
     * @generated from field: string contributor_display_id = 6;
     */
    contributorDisplayId: string;
    /**
     * @generated from field: webcast.model.gift.model.LiveStreamSubGoal contribute_subgoal = 7;
     */
    contributeSubgoal?: LiveStreamSubGoal | undefined;
    /**
     * @generated from field: int64 contribute_count = 9;
     */
    contributeCount: bigint;
    /**
     * @generated from field: int64 contribute_score = 10;
     */
    contributeScore: bigint;
    /**
     * @generated from field: int64 gift_repeat_count = 11;
     */
    giftRepeatCount: bigint;
    /**
     * @generated from field: string contributor_id_str = 12;
     */
    contributorIdStr: string;
    /**
     * @generated from field: webcast.model.goal.GoalPinInfo pin_info = 15;
     */
    pinInfo?: GoalPinInfo | undefined;
    /**
     * @generated from field: webcast.model.data.GoalMessageSource update_source = 16;
     */
    updateSource: GoalMessageSource;
    /**
     * @generated from field: string goal_extra = 17;
     */
    goalExtra: string;
};
/**
 * Describes the message webcast.model.gift.model.WebcastGoalUpdateMessage.
 * Use `create(WebcastGoalUpdateMessageSchema)` to create a new message.
 */
export declare const WebcastGoalUpdateMessageSchema: GenMessage<WebcastGoalUpdateMessage>;
//# sourceMappingURL=model_webcast_goal_update_message_pb.d.ts.map