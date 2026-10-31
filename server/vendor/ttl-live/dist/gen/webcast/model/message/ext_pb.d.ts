import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { OecLiveShoppingMessageV2 } from "../data/oec_msg_pb.js";
import type { AtmosphereTagInfo, BillboardDisplayResult, BillboardInfo, CampaignBannerDisplay, CampaignBannerDisplayResult, DispersionInfo, FlashSaleAtmosphereInfo, LivePermissionInfo, ProductSnapShot, PromotionInfo, RefreshLiveBagInfo, Voucher } from "./messages_pb.js";
import type { CommonMessageData } from "../../shared/message_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/ext.proto.
 */
export declare const file_webcast_model_message_ext: GenFile;
/**
 * @generated from message webcast.model.message.ext.HotTag
 */
export type HotTag = Message<"webcast.model.message.ext.HotTag"> & {
    /**
     * @generated from field: string product_id = 1;
     */
    productId: string;
    /**
     * @generated from field: int64 hot_count = 2;
     */
    hotCount: bigint;
};
/**
 * Describes the message webcast.model.message.ext.HotTag.
 * Use `create(HotTagSchema)` to create a new message.
 */
export declare const HotTagSchema: GenMessage<HotTag>;
/**
 * @generated from message webcast.model.message.ext.PopProduct
 */
export type PopProduct = Message<"webcast.model.message.ext.PopProduct"> & {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string price = 2;
     */
    price: string;
    /**
     * @generated from field: string image_url = 3;
     */
    imageUrl: string;
    /**
     * @generated from field: string open_url = 4;
     */
    openUrl: string;
    /**
     * @generated from field: string product_type = 5;
     */
    productType: string;
    /**
     * @generated from field: int64 product_id = 6;
     */
    productId: bigint;
    /**
     * @generated from field: string source = 7;
     */
    source: string;
    /**
     * @generated from field: int32 source_from = 8;
     */
    sourceFrom: number;
    /**
     * @generated from field: string schema = 9;
     */
    schema: string;
    /**
     * @generated from field: int32 platform = 10;
     */
    platform: number;
    /**
     * @generated from field: int32 product_status = 11;
     */
    productStatus: number;
};
/**
 * Describes the message webcast.model.message.ext.PopProduct.
 * Use `create(PopProductSchema)` to create a new message.
 */
export declare const PopProductSchema: GenMessage<PopProduct>;
/**
 * @generated from message webcast.model.message.ext.TraceInfo
 */
export type TraceInfo = Message<"webcast.model.message.ext.TraceInfo"> & {
    /**
     * @generated from field: int64 operate_time = 1;
     */
    operateTime: bigint;
    /**
     * @generated from field: int64 arrival_time = 2;
     */
    arrivalTime: bigint;
    /**
     * @generated from field: int64 send_time = 3;
     */
    sendTime: bigint;
};
/**
 * Describes the message webcast.model.message.ext.TraceInfo.
 * Use `create(TraceInfoSchema)` to create a new message.
 */
export declare const TraceInfoSchema: GenMessage<TraceInfo>;
/**
 * @generated from message webcast.model.message.ext.WebcastOecLiveShoppingMessage
 */
export type WebcastOecLiveShoppingMessage = Message<"webcast.model.message.ext.WebcastOecLiveShoppingMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: int32 action_type = 2;
     */
    actionType: number;
    /**
     * @generated from field: int32 live_product_number = 3;
     */
    liveProductNumber: number;
    /**
     * @generated from field: webcast.model.message.ext.PopProduct pop_product = 4;
     */
    popProduct?: PopProduct | undefined;
    /**
     * @generated from field: webcast.model.message.ext.TraceInfo trace_info = 5;
     */
    traceInfo?: TraceInfo | undefined;
    /**
     * @generated from field: repeated webcast.model.message.ext.HotTag hot_tags = 6;
     */
    hotTags: HotTag[];
    /**
     * @generated from field: webcast.model.message.AtmosphereTagInfo atmosphere_tag_info = 7;
     */
    atmosphereTagInfo?: AtmosphereTagInfo | undefined;
    /**
     * @generated from field: webcast.model.message.LivePermissionInfo live_permission_info = 8;
     */
    livePermissionInfo?: LivePermissionInfo | undefined;
    /**
     * @generated from field: webcast.model.message.ProductSnapShot product_snap_shot = 9;
     */
    productSnapShot?: ProductSnapShot | undefined;
    /**
     * @generated from field: int64 pin_card_delay_time = 10;
     */
    pinCardDelayTime: bigint;
    /**
     * @generated from field: repeated webcast.model.message.FlashSaleAtmosphereInfo flash_sale_atmosphere_info = 11;
     */
    flashSaleAtmosphereInfo: FlashSaleAtmosphereInfo[];
    /**
     * @generated from field: int32 card_type = 12;
     */
    cardType: number;
    /**
     * @generated from field: webcast.model.message.BillboardInfo billboard_info = 13;
     */
    billboardInfo?: BillboardInfo | undefined;
    /**
     * @generated from field: webcast.model.message.BillboardDisplayResult billboard_display_result = 14;
     */
    billboardDisplayResult?: BillboardDisplayResult | undefined;
    /**
     * @generated from field: repeated webcast.model.message.DispersionInfo dispersion_info = 15;
     */
    dispersionInfo: DispersionInfo[];
    /**
     * @generated from field: webcast.model.message.PromotionInfo promotion_info = 16;
     */
    promotionInfo?: PromotionInfo | undefined;
    /**
     * @generated from field: webcast.model.message.CampaignBannerDisplayResult campaign_banner_display_result = 17;
     */
    campaignBannerDisplayResult?: CampaignBannerDisplayResult | undefined;
    /**
     * @generated from field: webcast.model.message.CampaignBannerDisplay campaign_banner_display = 18;
     */
    campaignBannerDisplay?: CampaignBannerDisplay | undefined;
    /**
     * @generated from field: webcast.model.message.RefreshLiveBagInfo refresh_live_bag_info = 19;
     */
    refreshLiveBagInfo?: RefreshLiveBagInfo | undefined;
    /**
     * @generated from field: int32 anchor_pin_card_reset_type = 20;
     */
    anchorPinCardResetType: number;
    /**
     * @generated from field: webcast.model.message.Voucher voucher = 21;
     */
    voucher?: Voucher | undefined;
    /**
     * @generated from field: webcast.model.data.oec_msg.OecLiveShoppingMessageV2 oec_live_shopping_message_v2 = 100;
     */
    oecLiveShoppingMessageV2?: OecLiveShoppingMessageV2 | undefined;
};
/**
 * Describes the message webcast.model.message.ext.WebcastOecLiveShoppingMessage.
 * Use `create(WebcastOecLiveShoppingMessageSchema)` to create a new message.
 */
export declare const WebcastOecLiveShoppingMessageSchema: GenMessage<WebcastOecLiveShoppingMessage>;
//# sourceMappingURL=ext_pb.d.ts.map