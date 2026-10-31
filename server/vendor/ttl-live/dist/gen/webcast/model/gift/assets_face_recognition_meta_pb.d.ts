import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/gift/assets_face_recognition_meta.proto.
 */
export declare const file_webcast_model_gift_assets_face_recognition_meta: GenFile;
/**
 * @generated from message webcast.model.gift.assets.FaceRecognitionMeta
 */
export type FaceRecognitionMeta = Message<"webcast.model.gift.assets.FaceRecognitionMeta"> & {
    /**
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * @generated from field: repeated string requirement = 2;
     */
    requirement: string[];
    /**
     * @generated from field: string model_names = 3;
     */
    modelNames: string;
    /**
     * @generated from field: string sdk_extra = 4;
     */
    sdkExtra: string;
};
/**
 * Describes the message webcast.model.gift.assets.FaceRecognitionMeta.
 * Use `create(FaceRecognitionMetaSchema)` to create a new message.
 */
export declare const FaceRecognitionMetaSchema: GenMessage<FaceRecognitionMeta>;
//# sourceMappingURL=assets_face_recognition_meta_pb.d.ts.map