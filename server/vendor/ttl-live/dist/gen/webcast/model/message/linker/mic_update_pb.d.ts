import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { MicIdxOperation } from "../../../im_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/linker/mic_update.proto.
 */
export declare const file_webcast_model_message_linker_mic_update: GenFile;
/**
 * @generated from message webcast.model.message.linker.mic_update.LinkerMicIdxUpdateContent
 */
export type LinkerMicIdxUpdateContent = Message<"webcast.model.message.linker.mic_update.LinkerMicIdxUpdateContent"> & {
    /**
     * @generated from field: webcast.model.message.linker.mic_update.LinkerMicIdxUpdateInfo mic_idx_update_info = 1;
     */
    micIdxUpdateInfo?: LinkerMicIdxUpdateInfo | undefined;
};
/**
 * Describes the message webcast.model.message.linker.mic_update.LinkerMicIdxUpdateContent.
 * Use `create(LinkerMicIdxUpdateContentSchema)` to create a new message.
 */
export declare const LinkerMicIdxUpdateContentSchema: GenMessage<LinkerMicIdxUpdateContent>;
/**
 * @generated from message webcast.model.message.linker.mic_update.LinkerMicIdxUpdateInfo
 */
export type LinkerMicIdxUpdateInfo = Message<"webcast.model.message.linker.mic_update.LinkerMicIdxUpdateInfo"> & {
    /**
     * @generated from field: webcast.im.MicIdxOperation op = 1;
     */
    op: MicIdxOperation;
    /**
     * @generated from field: int64 user_id = 2;
     */
    userId: bigint;
    /**
     * @generated from field: int64 mic_idx = 3;
     */
    micIdx: bigint;
};
/**
 * Describes the message webcast.model.message.linker.mic_update.LinkerMicIdxUpdateInfo.
 * Use `create(LinkerMicIdxUpdateInfoSchema)` to create a new message.
 */
export declare const LinkerMicIdxUpdateInfoSchema: GenMessage<LinkerMicIdxUpdateInfo>;
//# sourceMappingURL=mic_update_pb.d.ts.map