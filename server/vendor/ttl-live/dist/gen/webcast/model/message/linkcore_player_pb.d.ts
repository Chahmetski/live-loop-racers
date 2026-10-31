import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/linkcore_player.proto.
 */
export declare const file_webcast_model_message_linkcore_player: GenFile;
/**
 * @generated from message webcast.model.message.linkcore.Player
 */
export type Player = Message<"webcast.model.message.linkcore.Player"> & {
    /**
     * @generated from field: int64 room_id = 1;
     */
    roomId: bigint;
    /**
     * @generated from field: int64 user_id = 2;
     */
    userId: bigint;
};
/**
 * Describes the message webcast.model.message.linkcore.Player.
 * Use `create(PlayerSchema)` to create a new message.
 */
export declare const PlayerSchema: GenMessage<Player>;
//# sourceMappingURL=linkcore_player_pb.d.ts.map