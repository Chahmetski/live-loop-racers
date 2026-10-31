import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "../base/messages_pb.js";
import type { EnhancementTextInfo } from "../../shared/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/data/oec_msg.proto.
 */
export declare const file_webcast_model_data_oec_msg: GenFile;
/**
 * @generated from message webcast.model.data.oec_msg.AtmosphereInfo
 */
export type AtmosphereInfo = Message<"webcast.model.data.oec_msg.AtmosphereInfo"> & {
    /**
     * @generated from field: repeated webcast.model.data.oec_msg.Tag tags = 1;
     */
    tags: Tag[];
};
/**
 * Describes the message webcast.model.data.oec_msg.AtmosphereInfo.
 * Use `create(AtmosphereInfoSchema)` to create a new message.
 */
export declare const AtmosphereInfoSchema: GenMessage<AtmosphereInfo>;
/**
 * @generated from message webcast.model.data.oec_msg.AtomAction
 */
export type AtomAction = Message<"webcast.model.data.oec_msg.AtomAction"> & {
    /**
     * @generated from field: int32 type = 1;
     */
    type: number;
    /**
     * @generated from field: webcast.model.data.oec_msg.ReqItem request_item = 2;
     */
    requestItem?: ReqItem | undefined;
};
/**
 * Describes the message webcast.model.data.oec_msg.AtomAction.
 * Use `create(AtomActionSchema)` to create a new message.
 */
export declare const AtomActionSchema: GenMessage<AtomAction>;
/**
 * @generated from message webcast.model.data.oec_msg.AuctionInfo
 */
export type AuctionInfo = Message<"webcast.model.data.oec_msg.AuctionInfo"> & {
    /**
     * @generated from field: int64 auction_id = 1;
     */
    auctionId: bigint;
    /**
     * @generated from field: int64 product_id = 2;
     */
    productId: bigint;
    /**
     * @generated from field: int64 version_time = 3;
     */
    versionTime: bigint;
    /**
     * @generated from field: int64 start_time = 4;
     */
    startTime: bigint;
    /**
     * @generated from field: int64 end_time = 5;
     */
    endTime: bigint;
    /**
     * @generated from field: webcast.model.data.oec_msg.UserInfo auction_winner = 6;
     */
    auctionWinner?: UserInfo | undefined;
    /**
     * @generated from field: webcast.model.data.oec_msg.PriceItem winner_bid_price = 7;
     */
    winnerBidPrice?: PriceItem | undefined;
    /**
     * @generated from field: webcast.model.data.oec_msg.PriceItem next_bid_price = 8;
     */
    nextBidPrice?: PriceItem | undefined;
    /**
     * @generated from field: string suffix = 9;
     */
    suffix: string;
    /**
     * @generated from field: webcast.model.data.oec_msg.ExtendAuctionCfg extend_auction_cfg = 10;
     */
    extendAuctionCfg?: ExtendAuctionCfg | undefined;
    /**
     * @generated from field: int32 auction_text_type = 11;
     */
    auctionTextType: number;
    /**
     * @generated from field: repeated webcast.model.data.oec_msg.ScrollElement scroll_element_list = 12;
     */
    scrollElementList: ScrollElement[];
    /**
     * @generated from field: webcast.model.data.oec_msg.ScrollElement reward_item = 13;
     */
    rewardItem?: ScrollElement | undefined;
    /**
     * @generated from field: int32 drawing_state_text_type = 14;
     */
    drawingStateTextType: number;
    /**
     * @generated from field: int64 auction_config_id = 15;
     */
    auctionConfigId: bigint;
    /**
     * @generated from field: int32 auction_type = 16;
     */
    auctionType: number;
    /**
     * @generated from field: int32 auction_status = 17;
     */
    auctionStatus: number;
    /**
     * @generated from field: bool is_carousel = 18;
     */
    isCarousel: boolean;
    /**
     * @generated from field: webcast.model.data.oec_msg.CarouselCfg carousel_cfg = 19;
     */
    carouselCfg?: CarouselCfg | undefined;
    /**
     * @generated from field: int32 auction_text_type_int = 20;
     */
    auctionTextTypeInt: number;
    /**
     * @generated from field: int32 drawing_state_text_type_int = 21;
     */
    drawingStateTextTypeInt: number;
    /**
     * @generated from field: string version_time_str = 22;
     */
    versionTimeStr: string;
    /**
     * @generated from field: map<string, string> trace_time_map = 23;
     */
    traceTimeMap: {
        [key: string]: string;
    };
    /**
     * @generated from field: webcast.model.data.oec_msg.EasterEgg easter_egg = 24;
     */
    easterEgg?: EasterEgg | undefined;
    /**
     * @generated from field: int32 auction_knock_perform_middle_text_type = 25;
     */
    auctionKnockPerformMiddleTextType: number;
    /**
     * @generated from field: int32 auction_knock_perform_bottom_right_text_type = 26;
     */
    auctionKnockPerformBottomRightTextType: number;
    /**
     * @generated from field: string auction_id_str = 27;
     */
    auctionIdStr: string;
    /**
     * @generated from field: string auction_config_id_str = 28;
     */
    auctionConfigIdStr: string;
    /**
     * @generated from field: int32 auction_card_bottom_text_type = 29;
     */
    auctionCardBottomTextType: number;
    /**
     * @generated from field: int32 auction_card_title_text_type = 30;
     */
    auctionCardTitleTextType: number;
    /**
     * @generated from field: int32 surprise_set_remain_item_count = 31;
     */
    surpriseSetRemainItemCount: number;
    /**
     * @generated from field: int32 auction_event_type_int = 32;
     */
    auctionEventTypeInt: number;
    /**
     * @generated from field: webcast.model.data.oec_msg.BidPanel bid_panel = 33;
     */
    bidPanel?: BidPanel | undefined;
    /**
     * @generated from field: string lynx_card_info = 100;
     */
    lynxCardInfo: string;
};
/**
 * Describes the message webcast.model.data.oec_msg.AuctionInfo.
 * Use `create(AuctionInfoSchema)` to create a new message.
 */
export declare const AuctionInfoSchema: GenMessage<AuctionInfo>;
/**
 * @generated from message webcast.model.data.oec_msg.AuctionWinnerPopup
 */
export type AuctionWinnerPopup = Message<"webcast.model.data.oec_msg.AuctionWinnerPopup"> & {
    /**
     * @generated from field: string auction_id = 1;
     */
    auctionId: string;
    /**
     * @generated from field: string winner_user_id = 2;
     */
    winnerUserId: string;
    /**
     * @generated from field: string product_id = 3;
     */
    productId: string;
    /**
     * @generated from field: int32 notify_type = 4;
     */
    notifyType: number;
    /**
     * @generated from field: string payment_expire_timestamp = 5;
     */
    paymentExpireTimestamp: string;
    /**
     * @generated from field: webcast.model.base.ImageModel product_img = 6;
     */
    productImg?: ImageModel | undefined;
    /**
     * @generated from field: string schema = 7;
     */
    schema: string;
};
/**
 * Describes the message webcast.model.data.oec_msg.AuctionWinnerPopup.
 * Use `create(AuctionWinnerPopupSchema)` to create a new message.
 */
export declare const AuctionWinnerPopupSchema: GenMessage<AuctionWinnerPopup>;
/**
 * @generated from message webcast.model.data.oec_msg.BagIndex
 */
export type BagIndex = Message<"webcast.model.data.oec_msg.BagIndex"> & {
    /**
     * @generated from field: int32 value = 1;
     */
    value: number;
};
/**
 * Describes the message webcast.model.data.oec_msg.BagIndex.
 * Use `create(BagIndexSchema)` to create a new message.
 */
export declare const BagIndexSchema: GenMessage<BagIndex>;
/**
 * @generated from message webcast.model.data.oec_msg.BidPanel
 */
export type BidPanel = Message<"webcast.model.data.oec_msg.BidPanel"> & {
    /**
     * @generated from field: int32 bid_btn_text_type_int = 1;
     */
    bidBtnTextTypeInt: number;
};
/**
 * Describes the message webcast.model.data.oec_msg.BidPanel.
 * Use `create(BidPanelSchema)` to create a new message.
 */
export declare const BidPanelSchema: GenMessage<BidPanel>;
/**
 * @generated from message webcast.model.data.oec_msg.CarouselCfg
 */
export type CarouselCfg = Message<"webcast.model.data.oec_msg.CarouselCfg"> & {
    /**
     * @generated from field: int64 interval_ms = 1;
     */
    intervalMs: bigint;
    /**
     * @generated from field: repeated int32 text_status_list = 2;
     */
    textStatusList: number[];
    /**
     * @generated from field: int32 times = 3;
     */
    times: number;
};
/**
 * Describes the message webcast.model.data.oec_msg.CarouselCfg.
 * Use `create(CarouselCfgSchema)` to create a new message.
 */
export declare const CarouselCfgSchema: GenMessage<CarouselCfg>;
/**
 * @generated from message webcast.model.data.oec_msg.CommerceInfo
 */
export type CommerceInfo = Message<"webcast.model.data.oec_msg.CommerceInfo"> & {
    /**
     * @generated from field: map<int64, webcast.model.data.oec_msg.ProductItem> product_info = 1;
     */
    productInfo: {
        [key: string]: ProductItem;
    };
    /**
     * @generated from field: webcast.model.data.oec_msg.PopCardInfo pop_card_info = 2;
     */
    popCardInfo?: PopCardInfo | undefined;
    /**
     * @generated from field: webcast.model.data.oec_msg.PopupWindowInfo popup_window_info = 3;
     */
    popupWindowInfo?: PopupWindowInfo | undefined;
    /**
     * @generated from field: map<int64, webcast.model.data.oec_msg.VoucherItem> voucher_info = 4;
     */
    voucherInfo: {
        [key: string]: VoucherItem;
    };
    /**
     * @generated from field: webcast.model.data.oec_msg.AuctionInfo auction_info = 5;
     */
    auctionInfo?: AuctionInfo | undefined;
};
/**
 * Describes the message webcast.model.data.oec_msg.CommerceInfo.
 * Use `create(CommerceInfoSchema)` to create a new message.
 */
export declare const CommerceInfoSchema: GenMessage<CommerceInfo>;
/**
 * @generated from message webcast.model.data.oec_msg.DispersionParam
 */
export type DispersionParam = Message<"webcast.model.data.oec_msg.DispersionParam"> & {
    /**
     * @generated from field: int64 max_delay_ms = 1;
     */
    maxDelayMs: bigint;
    /**
     * @generated from field: int64 min_delay_ms = 2;
     */
    minDelayMs: bigint;
};
/**
 * Describes the message webcast.model.data.oec_msg.DispersionParam.
 * Use `create(DispersionParamSchema)` to create a new message.
 */
export declare const DispersionParamSchema: GenMessage<DispersionParam>;
/**
 * @generated from message webcast.model.data.oec_msg.EasterEgg
 */
export type EasterEgg = Message<"webcast.model.data.oec_msg.EasterEgg"> & {
    /**
     * @generated from field: int64 winner_rank = 1;
     */
    winnerRank: bigint;
    /**
     * @generated from field: int32 winner_rank_text_type = 2;
     */
    winnerRankTextType: number;
    /**
     * @generated from field: int64 winner_room_win_cnt = 3;
     */
    winnerRoomWinCnt: bigint;
    /**
     * @generated from field: int32 winner_room_win_cnt_text_type = 4;
     */
    winnerRoomWinCntTextType: number;
    /**
     * @generated from field: int32 winner_rank_text_type_tail = 5;
     */
    winnerRankTextTypeTail: number;
    /**
     * @generated from field: int32 winner_room_win_cnt_text_type_tail = 6;
     */
    winnerRoomWinCntTextTypeTail: number;
};
/**
 * Describes the message webcast.model.data.oec_msg.EasterEgg.
 * Use `create(EasterEggSchema)` to create a new message.
 */
export declare const EasterEggSchema: GenMessage<EasterEgg>;
/**
 * @generated from message webcast.model.data.oec_msg.EcomLiveElementActions
 */
export type EcomLiveElementActions = Message<"webcast.model.data.oec_msg.EcomLiveElementActions"> & {
    /**
     * @generated from field: repeated webcast.model.data.oec_msg.AtomAction atom_actions = 1;
     */
    atomActions: AtomAction[];
    /**
     * @generated from field: int64 version = 2;
     */
    version: bigint;
};
/**
 * Describes the message webcast.model.data.oec_msg.EcomLiveElementActions.
 * Use `create(EcomLiveElementActionsSchema)` to create a new message.
 */
export declare const EcomLiveElementActionsSchema: GenMessage<EcomLiveElementActions>;
/**
 * @generated from message webcast.model.data.oec_msg.ExtendAuctionCfg
 */
export type ExtendAuctionCfg = Message<"webcast.model.data.oec_msg.ExtendAuctionCfg"> & {
    /**
     * @generated from field: bool is_extend_auction_supported = 1;
     */
    isExtendAuctionSupported: boolean;
    /**
     * @generated from field: bool should_extend = 2;
     */
    shouldExtend: boolean;
    /**
     * @generated from field: int64 extend_auction_time = 3;
     */
    extendAuctionTime: bigint;
};
/**
 * Describes the message webcast.model.data.oec_msg.ExtendAuctionCfg.
 * Use `create(ExtendAuctionCfgSchema)` to create a new message.
 */
export declare const ExtendAuctionCfgSchema: GenMessage<ExtendAuctionCfg>;
/**
 * @generated from message webcast.model.data.oec_msg.FlashSaleEnhancementInfo
 */
export type FlashSaleEnhancementInfo = Message<"webcast.model.data.oec_msg.FlashSaleEnhancementInfo"> & {
    /**
     * @generated from field: int32 stock_show_status = 1;
     */
    stockShowStatus: number;
    /**
     * @generated from field: repeated webcast.model.data.oec_msg.UserInfo buyer_infos = 2;
     */
    buyerInfos: UserInfo[];
    /**
     * @generated from field: webcast.shared.EnhancementTextInfo enhancement_text_info = 3;
     */
    enhancementTextInfo?: EnhancementTextInfo | undefined;
};
/**
 * Describes the message webcast.model.data.oec_msg.FlashSaleEnhancementInfo.
 * Use `create(FlashSaleEnhancementInfoSchema)` to create a new message.
 */
export declare const FlashSaleEnhancementInfoSchema: GenMessage<FlashSaleEnhancementInfo>;
/**
 * @generated from message webcast.model.data.oec_msg.LiveFlashSaleInfo
 */
export type LiveFlashSaleInfo = Message<"webcast.model.data.oec_msg.LiveFlashSaleInfo"> & {
    /**
     * @generated from field: int64 activity_id = 1;
     */
    activityId: bigint;
    /**
     * @generated from field: int32 type = 2;
     */
    type: number;
    /**
     * @generated from field: int32 status = 3;
     */
    status: number;
    /**
     * @generated from field: int32 stock_status = 4;
     */
    stockStatus: number;
    /**
     * @generated from field: int32 available_stock = 5;
     */
    availableStock: number;
    /**
     * @generated from field: int32 total_stock = 6;
     */
    totalStock: number;
    /**
     * @generated from field: webcast.model.data.oec_msg.FlashSaleEnhancementInfo enhancement_info = 7;
     */
    enhancementInfo?: FlashSaleEnhancementInfo | undefined;
    /**
     * @generated from field: int32 pdp_viewer_count = 8;
     */
    pdpViewerCount: number;
};
/**
 * Describes the message webcast.model.data.oec_msg.LiveFlashSaleInfo.
 * Use `create(LiveFlashSaleInfoSchema)` to create a new message.
 */
export declare const LiveFlashSaleInfoSchema: GenMessage<LiveFlashSaleInfo>;
/**
 * @generated from message webcast.model.data.oec_msg.MsgMeta
 */
export type MsgMeta = Message<"webcast.model.data.oec_msg.MsgMeta"> & {
    /**
     * @generated from field: int64 source_operate_ms = 1;
     */
    sourceOperateMs: bigint;
    /**
     * @generated from field: int64 server_send_ms = 2;
     */
    serverSendMs: bigint;
    /**
     * @generated from field: repeated string reasons = 3;
     */
    reasons: string[];
};
/**
 * Describes the message webcast.model.data.oec_msg.MsgMeta.
 * Use `create(MsgMetaSchema)` to create a new message.
 */
export declare const MsgMetaSchema: GenMessage<MsgMeta>;
/**
 * @generated from message webcast.model.data.oec_msg.OecLiveShoppingMessageV2
 */
export type OecLiveShoppingMessageV2 = Message<"webcast.model.data.oec_msg.OecLiveShoppingMessageV2"> & {
    /**
     * @generated from field: map<int64, webcast.model.data.oec_msg.EcomLiveElementActions> actions = 1;
     */
    actions: {
        [key: string]: EcomLiveElementActions;
    };
    /**
     * @generated from field: webcast.model.data.oec_msg.CommerceInfo commerce_info = 2;
     */
    commerceInfo?: CommerceInfo | undefined;
    /**
     * @generated from field: webcast.model.data.oec_msg.MsgMeta msg_meta = 10;
     */
    msgMeta?: MsgMeta | undefined;
};
/**
 * Describes the message webcast.model.data.oec_msg.OecLiveShoppingMessageV2.
 * Use `create(OecLiveShoppingMessageV2Schema)` to create a new message.
 */
export declare const OecLiveShoppingMessageV2Schema: GenMessage<OecLiveShoppingMessageV2>;
/**
 * @generated from message webcast.model.data.oec_msg.PopCardInfo
 */
export type PopCardInfo = Message<"webcast.model.data.oec_msg.PopCardInfo"> & {
    /**
     * @generated from field: int64 pop_product_id = 1;
     */
    popProductId: bigint;
    /**
     * @generated from field: int32 pop_card_type = 2;
     */
    popCardType: number;
    /**
     * @generated from field: int64 pop_card_id = 3;
     */
    popCardId: bigint;
};
/**
 * Describes the message webcast.model.data.oec_msg.PopCardInfo.
 * Use `create(PopCardInfoSchema)` to create a new message.
 */
export declare const PopCardInfoSchema: GenMessage<PopCardInfo>;
/**
 * @generated from message webcast.model.data.oec_msg.PopupWindowInfo
 */
export type PopupWindowInfo = Message<"webcast.model.data.oec_msg.PopupWindowInfo"> & {
    /**
     * @generated from field: webcast.model.data.oec_msg.AuctionWinnerPopup auction_winner_popup = 1;
     */
    auctionWinnerPopup?: AuctionWinnerPopup | undefined;
};
/**
 * Describes the message webcast.model.data.oec_msg.PopupWindowInfo.
 * Use `create(PopupWindowInfoSchema)` to create a new message.
 */
export declare const PopupWindowInfoSchema: GenMessage<PopupWindowInfo>;
/**
 * @generated from message webcast.model.data.oec_msg.PriceHideInfo
 */
export type PriceHideInfo = Message<"webcast.model.data.oec_msg.PriceHideInfo"> & {
    /**
     * @generated from field: string display_text = 1;
     */
    displayText: string;
};
/**
 * Describes the message webcast.model.data.oec_msg.PriceHideInfo.
 * Use `create(PriceHideInfoSchema)` to create a new message.
 */
export declare const PriceHideInfoSchema: GenMessage<PriceHideInfo>;
/**
 * @generated from message webcast.model.data.oec_msg.PriceItem
 */
export type PriceItem = Message<"webcast.model.data.oec_msg.PriceItem"> & {
    /**
     * @generated from field: string currency_name = 2;
     */
    currencyName: string;
    /**
     * @generated from field: string currency_symbol = 3;
     */
    currencySymbol: string;
    /**
     * @generated from field: int32 symbol_position = 4;
     */
    symbolPosition: number;
    /**
     * @generated from field: string sale_price_decimal = 5;
     */
    salePriceDecimal: string;
    /**
     * @generated from field: string origin_price_decimal = 6;
     */
    originPriceDecimal: string;
    /**
     * @generated from field: string sale_price_format = 7;
     */
    salePriceFormat: string;
    /**
     * @generated from field: string origin_price_format = 8;
     */
    originPriceFormat: string;
    /**
     * @generated from field: string discount_format = 9;
     */
    discountFormat: string;
    /**
     * @generated from field: string discount_decimal = 10;
     */
    discountDecimal: string;
    /**
     * @generated from field: string price_prefix = 11;
     */
    pricePrefix: string;
    /**
     * @generated from field: string reduce_price_format = 12;
     */
    reducePriceFormat: string;
    /**
     * @generated from field: string single_product_price_format = 13;
     */
    singleProductPriceFormat: string;
    /**
     * @generated from field: bool show_currency_space = 14;
     */
    showCurrencySpace: boolean;
    /**
     * @generated from field: int32 currency_show_mode = 15;
     */
    currencyShowMode: number;
    /**
     * @generated from field: int32 price_display_mode = 16;
     */
    priceDisplayMode: number;
    /**
     * @generated from field: webcast.model.data.oec_msg.PriceHideInfo price_hide_info = 17;
     */
    priceHideInfo?: PriceHideInfo | undefined;
};
/**
 * Describes the message webcast.model.data.oec_msg.PriceItem.
 * Use `create(PriceItemSchema)` to create a new message.
 */
export declare const PriceItemSchema: GenMessage<PriceItem>;
/**
 * @generated from message webcast.model.data.oec_msg.ProductItem
 */
export type ProductItem = Message<"webcast.model.data.oec_msg.ProductItem"> & {
    /**
     * @generated from field: int64 product_id = 1;
     */
    productId: bigint;
    /**
     * @generated from field: webcast.model.data.oec_msg.BagIndex bag_index = 2;
     */
    bagIndex?: BagIndex | undefined;
    /**
     * @generated from field: webcast.model.data.oec_msg.Title title = 3;
     */
    title?: Title | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel cover = 4;
     */
    cover?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.data.oec_msg.AtmosphereInfo atmosphere_info = 5;
     */
    atmosphereInfo?: AtmosphereInfo | undefined;
    /**
     * @generated from field: webcast.model.data.oec_msg.ShopBrandLogo shop_brand_logo = 6;
     */
    shopBrandLogo?: ShopBrandLogo | undefined;
    /**
     * @generated from field: webcast.model.data.oec_msg.LiveFlashSaleInfo live_flash_sale_info = 7;
     */
    liveFlashSaleInfo?: LiveFlashSaleInfo | undefined;
    /**
     * @generated from field: webcast.model.data.oec_msg.AuctionInfo auction_info = 8;
     */
    auctionInfo?: AuctionInfo | undefined;
};
/**
 * Describes the message webcast.model.data.oec_msg.ProductItem.
 * Use `create(ProductItemSchema)` to create a new message.
 */
export declare const ProductItemSchema: GenMessage<ProductItem>;
/**
 * @generated from message webcast.model.data.oec_msg.ReqItem
 */
export type ReqItem = Message<"webcast.model.data.oec_msg.ReqItem"> & {
    /**
     * @generated from field: int32 scene = 1;
     */
    scene: number;
    /**
     * @generated from field: webcast.model.data.oec_msg.DispersionParam dispersion_param = 2;
     */
    dispersionParam?: DispersionParam | undefined;
};
/**
 * Describes the message webcast.model.data.oec_msg.ReqItem.
 * Use `create(ReqItemSchema)` to create a new message.
 */
export declare const ReqItemSchema: GenMessage<ReqItem>;
/**
 * @generated from message webcast.model.data.oec_msg.ScrollElement
 */
export type ScrollElement = Message<"webcast.model.data.oec_msg.ScrollElement"> & {
    /**
     * @generated from field: string product_title = 1;
     */
    productTitle: string;
};
/**
 * Describes the message webcast.model.data.oec_msg.ScrollElement.
 * Use `create(ScrollElementSchema)` to create a new message.
 */
export declare const ScrollElementSchema: GenMessage<ScrollElement>;
/**
 * @generated from message webcast.model.data.oec_msg.ShopBrandLogo
 */
export type ShopBrandLogo = Message<"webcast.model.data.oec_msg.ShopBrandLogo"> & {
    /**
     * @generated from field: string seller_name = 1;
     */
    sellerName: string;
    /**
     * @generated from field: webcast.model.base.ImageModel seller_logo = 2;
     */
    sellerLogo?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel blue_v_image = 3;
     */
    blueVImage?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel dark_blue_v_image = 4;
     */
    darkBlueVImage?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel top_brand_image = 5;
     */
    topBrandImage?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel dark_top_brand_image = 6;
     */
    darkTopBrandImage?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.data.oec_msg.ShopBrandLogo.
 * Use `create(ShopBrandLogoSchema)` to create a new message.
 */
export declare const ShopBrandLogoSchema: GenMessage<ShopBrandLogo>;
/**
 * @generated from message webcast.model.data.oec_msg.Tag
 */
export type Tag = Message<"webcast.model.data.oec_msg.Tag"> & {
    /**
     * @generated from field: int32 type = 1;
     */
    type: number;
    /**
     * @generated from field: string desc = 2;
     */
    desc: string;
    /**
     * @generated from field: int64 count = 3;
     */
    count: bigint;
    /**
     * @generated from field: int32 status = 4;
     */
    status: number;
};
/**
 * Describes the message webcast.model.data.oec_msg.Tag.
 * Use `create(TagSchema)` to create a new message.
 */
export declare const TagSchema: GenMessage<Tag>;
/**
 * @generated from message webcast.model.data.oec_msg.Title
 */
export type Title = Message<"webcast.model.data.oec_msg.Title"> & {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
};
/**
 * Describes the message webcast.model.data.oec_msg.Title.
 * Use `create(TitleSchema)` to create a new message.
 */
export declare const TitleSchema: GenMessage<Title>;
/**
 * @generated from message webcast.model.data.oec_msg.UserInfo
 */
export type UserInfo = Message<"webcast.model.data.oec_msg.UserInfo"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: string nick_name = 2;
     */
    nickName: string;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar = 3;
     */
    avatar?: ImageModel | undefined;
    /**
     * @generated from field: bool is_winner = 4;
     */
    isWinner: boolean;
};
/**
 * Describes the message webcast.model.data.oec_msg.UserInfo.
 * Use `create(UserInfoSchema)` to create a new message.
 */
export declare const UserInfoSchema: GenMessage<UserInfo>;
/**
 * @generated from message webcast.model.data.oec_msg.VoucherItem
 */
export type VoucherItem = Message<"webcast.model.data.oec_msg.VoucherItem"> & {
    /**
     * @generated from field: int64 voucher_type_id = 1;
     */
    voucherTypeId: bigint;
    /**
     * @generated from field: int64 task_id = 2;
     */
    taskId: bigint;
    /**
     * @generated from field: int32 task_type = 3;
     */
    taskType: number;
    /**
     * @generated from field: int32 live_voucher_type = 4;
     */
    liveVoucherType: number;
    /**
     * @generated from field: string creator_operation_unique_id = 5;
     */
    creatorOperationUniqueId: string;
    /**
     * @generated from field: string voucher_max_face_value = 6;
     */
    voucherMaxFaceValue: string;
};
/**
 * Describes the message webcast.model.data.oec_msg.VoucherItem.
 * Use `create(VoucherItemSchema)` to create a new message.
 */
export declare const VoucherItemSchema: GenMessage<VoucherItem>;
//# sourceMappingURL=oec_msg_pb.d.ts.map