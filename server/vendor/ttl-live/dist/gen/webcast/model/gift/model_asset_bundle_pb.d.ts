import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { AssetsModel } from "./assets_pb.js";
import type { GiftEffectStreamSpec, PrefabBundle } from "./model_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/gift/model_asset_bundle.proto.
 */
export declare const file_webcast_model_gift_model_asset_bundle: GenFile;
/**
 * @generated from message webcast.model.gift.model.AssetBundle
 */
export type AssetBundle = Message<"webcast.model.gift.model.AssetBundle"> & {
    /**
     * @generated from field: repeated webcast.model.gift.assets.AssetsModel assets = 1;
     */
    assets: AssetsModel[];
    /**
     * @generated from field: webcast.model.gift.model.PrefabBundle prefab_bundle = 2;
     */
    prefabBundle?: PrefabBundle | undefined;
    /**
     * @generated from field: webcast.model.gift.model.GiftEffectStreamSpec stream_effect_spec = 3;
     */
    streamEffectSpec?: GiftEffectStreamSpec | undefined;
};
/**
 * Describes the message webcast.model.gift.model.AssetBundle.
 * Use `create(AssetBundleSchema)` to create a new message.
 */
export declare const AssetBundleSchema: GenMessage<AssetBundle>;
//# sourceMappingURL=model_asset_bundle_pb.d.ts.map