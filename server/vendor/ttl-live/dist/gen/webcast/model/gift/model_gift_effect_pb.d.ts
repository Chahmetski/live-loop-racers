import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { AssetsModel } from "./assets_pb.js";
import type { GiftEffectSpecs } from "./model_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/gift/model_gift_effect.proto.
 */
export declare const file_webcast_model_gift_model_gift_effect: GenFile;
/**
 * @generated from message webcast.model.gift.model.GiftEffect
 */
export type GiftEffect = Message<"webcast.model.gift.model.GiftEffect"> & {
    /**
     * @generated from field: repeated webcast.model.gift.assets.AssetsModel assets = 1;
     */
    assets: AssetsModel[];
    /**
     * @generated from field: webcast.model.gift.model.GiftEffectSpecs specs = 2;
     */
    specs?: GiftEffectSpecs | undefined;
    /**
     * @generated from field: map<string, string> event_tracking_params = 5;
     */
    eventTrackingParams: {
        [key: string]: string;
    };
};
/**
 * Describes the message webcast.model.gift.model.GiftEffect.
 * Use `create(GiftEffectSchema)` to create a new message.
 */
export declare const GiftEffectSchema: GenMessage<GiftEffect>;
//# sourceMappingURL=model_gift_effect_pb.d.ts.map