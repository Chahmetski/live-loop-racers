import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/goal.proto.
 */
export declare const file_webcast_model_goal: GenFile;
/**
 * @generated from message webcast.model.goal.GoalComparison
 */
export type GoalComparison = Message<"webcast.model.goal.GoalComparison"> & {
    /**
     * @generated from field: int64 coins_incr = 1;
     */
    coinsIncr: bigint;
    /**
     * @generated from field: int64 contributor_incr = 2;
     */
    contributorIncr: bigint;
};
/**
 * Describes the message webcast.model.goal.GoalComparison.
 * Use `create(GoalComparisonSchema)` to create a new message.
 */
export declare const GoalComparisonSchema: GenMessage<GoalComparison>;
/**
 * @generated from message webcast.model.goal.GoalPinInfo
 */
export type GoalPinInfo = Message<"webcast.model.goal.GoalPinInfo"> & {
    /**
     * @generated from field: bool pin = 1;
     */
    pin: boolean;
    /**
     * @generated from field: bool unpin = 2;
     */
    unpin: boolean;
    /**
     * @generated from field: int64 pin_end_time = 3;
     */
    pinEndTime: bigint;
    /**
     * @generated from field: int64 sub_goal_id = 4;
     */
    subGoalId: bigint;
    /**
     * @generated from field: string sub_goal_id_str = 5;
     */
    subGoalIdStr: string;
};
/**
 * Describes the message webcast.model.goal.GoalPinInfo.
 * Use `create(GoalPinInfoSchema)` to create a new message.
 */
export declare const GoalPinInfoSchema: GenMessage<GoalPinInfo>;
/**
 * @generated from message webcast.model.goal.GoalReward
 */
export type GoalReward = Message<"webcast.model.goal.GoalReward"> & {
    /**
     * @generated from field: string reward_content = 1;
     */
    rewardContent: string;
    /**
     * @generated from field: int32 top_n = 2;
     */
    topN: number;
    /**
     * @generated from field: bool has_sticker = 3;
     */
    hasSticker: boolean;
    /**
     * @generated from field: int32 audit_status = 4;
     */
    auditStatus: number;
};
/**
 * Describes the message webcast.model.goal.GoalReward.
 * Use `create(GoalRewardSchema)` to create a new message.
 */
export declare const GoalRewardSchema: GenMessage<GoalReward>;
/**
 * @generated from message webcast.model.goal.GoalStats
 */
export type GoalStats = Message<"webcast.model.goal.GoalStats"> & {
    /**
     * @generated from field: int64 total_coins = 1;
     */
    totalCoins: bigint;
    /**
     * @generated from field: int64 total_contributor = 2;
     */
    totalContributor: bigint;
    /**
     * @generated from field: webcast.model.goal.GoalComparison comparison = 3;
     */
    comparison?: GoalComparison | undefined;
    /**
     * @generated from field: int64 total_new_fans = 4;
     */
    totalNewFans: bigint;
};
/**
 * Describes the message webcast.model.goal.GoalStats.
 * Use `create(GoalStatsSchema)` to create a new message.
 */
export declare const GoalStatsSchema: GenMessage<GoalStats>;
/**
 * @generated from message webcast.model.goal.SubGoalContribution
 */
export type SubGoalContribution = Message<"webcast.model.goal.SubGoalContribution"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: int64 contribution_count = 2;
     */
    contributionCount: bigint;
};
/**
 * Describes the message webcast.model.goal.SubGoalContribution.
 * Use `create(SubGoalContributionSchema)` to create a new message.
 */
export declare const SubGoalContributionSchema: GenMessage<SubGoalContribution>;
/**
 * @generated from message webcast.model.goal.SubGoalPinInfo
 */
export type SubGoalPinInfo = Message<"webcast.model.goal.SubGoalPinInfo"> & {
    /**
     * @generated from field: int64 pin_start_time = 1;
     */
    pinStartTime: bigint;
    /**
     * @generated from field: int64 pin_end_time = 2;
     */
    pinEndTime: bigint;
    /**
     * @generated from field: int64 pin_ready_time = 3;
     */
    pinReadyTime: bigint;
};
/**
 * Describes the message webcast.model.goal.SubGoalPinInfo.
 * Use `create(SubGoalPinInfoSchema)` to create a new message.
 */
export declare const SubGoalPinInfoSchema: GenMessage<SubGoalPinInfo>;
//# sourceMappingURL=goal_pb.d.ts.map