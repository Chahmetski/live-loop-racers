import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { BattleTeamUser } from "./live_match_pb.js";
import type { BattleUserArmies } from "./message/battle_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/live_match_battle_team_user_armies.proto.
 */
export declare const file_webcast_model_live_match_battle_team_user_armies: GenFile;
/**
 * @generated from message webcast.model.live.match.BattleTeamUserArmies
 */
export type BattleTeamUserArmies = Message<"webcast.model.live.match.BattleTeamUserArmies"> & {
    /**
     * @generated from field: int64 team_id = 1;
     */
    teamId: bigint;
    /**
     * @generated from field: repeated webcast.model.live.match.BattleTeamUser team_user = 2;
     */
    teamUser: BattleTeamUser[];
    /**
     * @generated from field: int64 team_total_score = 3;
     */
    teamTotalScore: bigint;
    /**
     * @generated from field: webcast.model.message.battle.BattleUserArmies user_armies = 4;
     */
    userArmies?: BattleUserArmies | undefined;
    /**
     * @generated from field: int64 host_rank = 5;
     */
    hostRank: bigint;
    /**
     * @generated from field: int64 team_total_enigma_score = 6;
     */
    teamTotalEnigmaScore: bigint;
    /**
     * @generated from field: int64 team_total_enigma_uv = 7;
     */
    teamTotalEnigmaUv: bigint;
    /**
     * @generated from field: map<int64, int64> host_visible_rank_from_team_id = 8;
     */
    hostVisibleRankFromTeamId: {
        [key: string]: bigint;
    };
};
/**
 * Describes the message webcast.model.live.match.BattleTeamUserArmies.
 * Use `create(BattleTeamUserArmiesSchema)` to create a new message.
 */
export declare const BattleTeamUserArmiesSchema: GenMessage<BattleTeamUserArmies>;
//# sourceMappingURL=live_match_battle_team_user_armies_pb.d.ts.map