import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { LinkPosition } from "./linkcore_link_position_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/linkcore_mic_position_data.proto.
 */
export declare const file_webcast_model_message_linkcore_mic_position_data: GenFile;
/**
 * @generated from message webcast.model.message.linkcore.MicPositionData
 */
export type MicPositionData = Message<"webcast.model.message.linkcore.MicPositionData"> & {
    /**
     * @generated from field: int32 type = 1;
     */
    type: number;
    /**
     * @generated from field: webcast.model.message.linkcore.LinkPosition link = 2;
     */
    link?: LinkPosition | undefined;
};
/**
 * Describes the message webcast.model.message.linkcore.MicPositionData.
 * Use `create(MicPositionDataSchema)` to create a new message.
 */
export declare const MicPositionDataSchema: GenMessage<MicPositionData>;
//# sourceMappingURL=linkcore_mic_position_data_pb.d.ts.map