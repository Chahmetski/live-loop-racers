import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Text } from "./message/common_pb.js";
import type { PunishEventInfo } from "./message/invite_top_host_info_pb.js";
import type { CommonMessageData } from "../shared/message_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/game.proto.
 */
export declare const file_webcast_model_game: GenFile;
/**
 * @generated from message webcast.model.game.WebcastAccessRecallMessage
 */
export type WebcastAccessRecallMessage = Message<"webcast.model.game.WebcastAccessRecallMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int32 status = 2;
     */
    status: number;
    /**
     * @generated from field: int64 duration = 3;
     */
    duration: bigint;
    /**
     * @generated from field: int64 end_time = 4;
     */
    endTime: bigint;
    /**
     * @generated from field: string scene = 5;
     */
    scene: string;
    /**
     * @generated from field: webcast.model.message.common.Text notice = 6;
     */
    notice?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.common.Text content = 7;
     */
    content?: Text | undefined;
    /**
     * @generated from field: webcast.model.message.PunishEventInfo punish_info = 8;
     */
    punishInfo?: PunishEventInfo | undefined;
};
/**
 * Describes the message webcast.model.game.WebcastAccessRecallMessage.
 * Use `create(WebcastAccessRecallMessageSchema)` to create a new message.
 */
export declare const WebcastAccessRecallMessageSchema: GenMessage<WebcastAccessRecallMessage>;
//# sourceMappingURL=game_pb.d.ts.map