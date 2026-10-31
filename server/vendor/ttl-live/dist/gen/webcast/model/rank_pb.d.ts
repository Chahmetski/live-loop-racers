import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ClassType, ProfitRankType } from "./data/messages_pb.js";
import type { Text } from "./message/common_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/rank.proto.
 */
export declare const file_webcast_model_rank: GenFile;
/**
 * @generated from message webcast.model.rank.ClassInfo
 */
export type ClassInfo = Message<"webcast.model.rank.ClassInfo"> & {
    /**
     * @generated from field: webcast.model.data.ClassType class_type = 1;
     */
    classType: ClassType;
    /**
     * @generated from field: int64 star_count = 2;
     */
    starCount: bigint;
};
/**
 * Describes the message webcast.model.rank.ClassInfo.
 * Use `create(ClassInfoSchema)` to create a new message.
 */
export declare const ClassInfoSchema: GenMessage<ClassInfo>;
/**
 * @generated from message webcast.model.rank.RankTabInfo
 */
export type RankTabInfo = Message<"webcast.model.rank.RankTabInfo"> & {
    /**
     * @generated from field: webcast.model.data.ProfitRankType rank_type = 1;
     */
    rankType: ProfitRankType;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * @generated from field: webcast.model.message.common.Text title_text = 3;
     */
    titleText?: Text | undefined;
    /**
     * @generated from field: int64 list_lynx_type = 4;
     */
    listLynxType: bigint;
};
/**
 * Describes the message webcast.model.rank.RankTabInfo.
 * Use `create(RankTabInfoSchema)` to create a new message.
 */
export declare const RankTabInfoSchema: GenMessage<RankTabInfo>;
/**
 * @generated from message webcast.model.rank.SettleInfo
 */
export type SettleInfo = Message<"webcast.model.rank.SettleInfo"> & {
    /**
     * @generated from field: int64 owner_settle_rank = 1;
     */
    ownerSettleRank: bigint;
    /**
     * @generated from field: webcast.model.rank.ClassInfo new_class_info = 2;
     */
    newClassInfo?: ClassInfo | undefined;
    /**
     * @generated from field: webcast.model.rank.ClassInfo old_class_info = 3;
     */
    oldClassInfo?: ClassInfo | undefined;
    /**
     * @generated from field: int64 rank_settle_timestamp = 4;
     */
    rankSettleTimestamp: bigint;
};
/**
 * Describes the message webcast.model.rank.SettleInfo.
 * Use `create(SettleInfoSchema)` to create a new message.
 */
export declare const SettleInfoSchema: GenMessage<SettleInfo>;
/**
 * @generated from message webcast.model.rank.TeamRankBonusTime
 */
export type TeamRankBonusTime = Message<"webcast.model.rank.TeamRankBonusTime"> & {
    /**
     * @generated from field: bool switch = 1;
     */
    switch: boolean;
    /**
     * @generated from field: int64 start_timestamp = 2;
     */
    startTimestamp: bigint;
    /**
     * @generated from field: int64 end_timestamp = 3;
     */
    endTimestamp: bigint;
    /**
     * @generated from field: bool show_animation = 4;
     */
    showAnimation: boolean;
    /**
     * @generated from field: int64 bonus_rate = 5;
     */
    bonusRate: bigint;
    /**
     * @generated from field: int64 bonus_time_gift_id = 6;
     */
    bonusTimeGiftId: bigint;
};
/**
 * Describes the message webcast.model.rank.TeamRankBonusTime.
 * Use `create(TeamRankBonusTimeSchema)` to create a new message.
 */
export declare const TeamRankBonusTimeSchema: GenMessage<TeamRankBonusTime>;
//# sourceMappingURL=rank_pb.d.ts.map