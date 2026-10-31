import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { FaceRecognitionMeta } from "./assets_face_recognition_meta_pb.js";
import type { AssetExtra, DistributionStrategy, LokiExtraContent } from "./model_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/gift/assets.proto.
 */
export declare const file_webcast_model_gift_assets: GenFile;
/**
 * @generated from message webcast.model.gift.assets.AssetsModel
 */
export type AssetsModel = Message<"webcast.model.gift.assets.AssetsModel"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string resource_uri = 2;
     */
    resourceUri: string;
    /**
     * @generated from field: webcast.model.gift.assets.ResourceModel resource_url = 4;
     */
    resourceUrl?: ResourceModel | undefined;
    /**
     * @generated from field: string describe = 5;
     */
    describe: string;
    /**
     * @generated from field: int64 id = 6;
     */
    id: bigint;
    /**
     * @generated from field: int32 resource_type = 7;
     */
    resourceType: number;
    /**
     * @generated from field: string md5 = 8;
     */
    md5: string;
    /**
     * @generated from field: int64 size = 9;
     */
    size: bigint;
    /**
     * @generated from field: webcast.model.gift.model.LokiExtraContent loki_content = 10;
     */
    lokiContent?: LokiExtraContent | undefined;
    /**
     * @generated from field: int32 download_type = 26;
     */
    downloadType: number;
    /**
     * @generated from field: webcast.model.gift.assets.ResourceModel resource_bytevc1_url = 28;
     */
    resourceBytevc1Url?: ResourceModel | undefined;
    /**
     * @generated from field: string bytevc1_md5 = 29;
     */
    bytevc1Md5: string;
    /**
     * @generated from field: repeated webcast.model.gift.assets.VideoResource video_resource_list = 30;
     */
    videoResourceList: VideoResource[];
    /**
     * @generated from field: webcast.model.gift.assets.FaceRecognitionMeta face_recognition_archive_meta = 31;
     */
    faceRecognitionArchiveMeta?: FaceRecognitionMeta | undefined;
    /**
     * @generated from field: string lynx_url_settings_key = 32;
     */
    lynxUrlSettingsKey: string;
    /**
     * @generated from field: int32 downgrade_resource_type = 33;
     */
    downgradeResourceType: number;
    /**
     * @generated from field: webcast.model.gift.model.AssetExtra asset_extra = 34;
     */
    assetExtra?: AssetExtra | undefined;
    /**
     * @generated from field: int32 sticker_asset_variant = 35;
     */
    stickerAssetVariant: number;
    /**
     * @generated from field: bool immediate_download = 36;
     */
    immediateDownload: boolean;
    /**
     * @generated from field: int32 sticker_asset_variant_reason = 37;
     */
    stickerAssetVariantReason: number;
    /**
     * @generated from field: bool force_use_im_or_resp_asset = 38;
     */
    forceUseImOrRespAsset: boolean;
    /**
     * @generated from field: repeated webcast.model.gift.model.DistributionStrategy distribution_strategy = 39;
     */
    distributionStrategy: DistributionStrategy[];
};
/**
 * Describes the message webcast.model.gift.assets.AssetsModel.
 * Use `create(AssetsModelSchema)` to create a new message.
 */
export declare const AssetsModelSchema: GenMessage<AssetsModel>;
/**
 * @generated from message webcast.model.gift.assets.ResourceModel
 */
export type ResourceModel = Message<"webcast.model.gift.assets.ResourceModel"> & {
    /**
     * @generated from field: repeated string url_list = 1;
     */
    urlList: string[];
    /**
     * @generated from field: string uri = 2;
     */
    uri: string;
};
/**
 * Describes the message webcast.model.gift.assets.ResourceModel.
 * Use `create(ResourceModelSchema)` to create a new message.
 */
export declare const ResourceModelSchema: GenMessage<ResourceModel>;
/**
 * @generated from message webcast.model.gift.assets.VideoResource
 */
export type VideoResource = Message<"webcast.model.gift.assets.VideoResource"> & {
    /**
     * @generated from field: string video_type_name = 1;
     */
    videoTypeName: string;
    /**
     * @generated from field: webcast.model.gift.assets.ResourceModel video_url = 2;
     */
    videoUrl?: ResourceModel | undefined;
    /**
     * @generated from field: string video_md5 = 3;
     */
    videoMd5: string;
};
/**
 * Describes the message webcast.model.gift.assets.VideoResource.
 * Use `create(VideoResourceSchema)` to create a new message.
 */
export declare const VideoResourceSchema: GenMessage<VideoResource>;
//# sourceMappingURL=assets_pb.d.ts.map