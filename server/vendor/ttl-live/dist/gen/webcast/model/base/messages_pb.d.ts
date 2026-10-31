import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/base/messages.proto.
 */
export declare const file_webcast_model_base_messages: GenFile;
/**
 * @generated from message webcast.model.base.Content
 */
export type Content = Message<"webcast.model.base.Content"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string font_color = 2;
     */
    fontColor: string;
    /**
     * @generated from field: int64 level = 3;
     */
    level: bigint;
};
/**
 * Describes the message webcast.model.base.Content.
 * Use `create(ContentSchema)` to create a new message.
 */
export declare const ContentSchema: GenMessage<Content>;
/**
 * @generated from message webcast.model.base.ImageModel
 */
export type ImageModel = Message<"webcast.model.base.ImageModel"> & {
    /**
     * @generated from field: repeated string url_list = 1;
     */
    urlList: string[];
    /**
     * @generated from field: string uri = 2;
     */
    uri: string;
    /**
     * @generated from field: int32 height = 3;
     */
    height: number;
    /**
     * @generated from field: int32 width = 4;
     */
    width: number;
    /**
     * @generated from field: string avg_color = 5;
     */
    avgColor: string;
    /**
     * @generated from field: int32 image_type = 6;
     */
    imageType: number;
    /**
     * @generated from field: string open_web_url = 7;
     */
    openWebUrl: string;
    /**
     * @generated from field: webcast.model.base.Content content = 8;
     */
    content?: Content | undefined;
    /**
     * @generated from field: bool is_animated = 9;
     */
    isAnimated: boolean;
};
/**
 * Describes the message webcast.model.base.ImageModel.
 * Use `create(ImageModelSchema)` to create a new message.
 */
export declare const ImageModelSchema: GenMessage<ImageModel>;
//# sourceMappingURL=messages_pb.d.ts.map