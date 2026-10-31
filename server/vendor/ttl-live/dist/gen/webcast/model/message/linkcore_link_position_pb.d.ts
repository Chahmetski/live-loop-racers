import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/linkcore_link_position.proto.
 */
export declare const file_webcast_model_message_linkcore_link_position: GenFile;
/**
 * @generated from message webcast.model.message.linkcore.LinkPosition
 */
export type LinkPosition = Message<"webcast.model.message.linkcore.LinkPosition"> & {
    /**
     * @generated from field: int32 position = 1;
     */
    position: number;
    /**
     * @generated from field: int32 opt = 2;
     */
    opt: number;
};
/**
 * Describes the message webcast.model.message.linkcore.LinkPosition.
 * Use `create(LinkPositionSchema)` to create a new message.
 */
export declare const LinkPositionSchema: GenMessage<LinkPosition>;
//# sourceMappingURL=linkcore_link_position_pb.d.ts.map