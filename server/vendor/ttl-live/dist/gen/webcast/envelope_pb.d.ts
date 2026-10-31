import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/envelope.proto.
 */
export declare const file_webcast_envelope: GenFile;
/**
 * @generated from message webcast.envelope.EnvelopeEnigmaInfo
 */
export type EnvelopeEnigmaInfo = Message<"webcast.envelope.EnvelopeEnigmaInfo"> & {
    /**
     * @generated from field: bool is_enigma_mask_on = 1;
     */
    isEnigmaMaskOn: boolean;
};
/**
 * Describes the message webcast.envelope.EnvelopeEnigmaInfo.
 * Use `create(EnvelopeEnigmaInfoSchema)` to create a new message.
 */
export declare const EnvelopeEnigmaInfoSchema: GenMessage<EnvelopeEnigmaInfo>;
//# sourceMappingURL=envelope_pb.d.ts.map