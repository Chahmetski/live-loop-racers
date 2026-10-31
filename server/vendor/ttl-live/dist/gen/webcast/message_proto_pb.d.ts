import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { CreatorScoreProfile } from "./model/base/user_pb.js";
import type { DisplayControl_HorizontalOnclickTriggerType, User_EcommerceEntrance_CreatorType, User_EcommerceEntrance_EntranceType, User_EcommerceEntrance_SellingPoint_LiveSellingPointType, User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_ShopIdentityLabelType, User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreBrandLabelType, User_EcommerceEntrance_ViewVersion } from "./model/data/messages_pb.js";
import type { ShopLabelImage } from "./shared/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/message_proto.proto.
 */
export declare const file_webcast_message_proto: GenFile;
/**
 * @generated from message webcast.message.proto.DisplayControl
 */
export type DisplayControl = Message<"webcast.message.proto.DisplayControl"> & {
    /**
     * @generated from field: int32 priority = 1;
     */
    priority: number;
    /**
     * @generated from field: int64 duration = 2;
     */
    duration: bigint;
    /**
     * @generated from field: map<int32, webcast.message.proto.ShowResult> target_group_show_rst = 3;
     */
    targetGroupShowRst: {
        [key: number]: ShowResult;
    };
    /**
     * @generated from field: webcast.model.data.DisplayControl_HorizontalOnclickTriggerType horizontal_trigger_type = 4;
     */
    horizontalTriggerType: DisplayControl_HorizontalOnclickTriggerType;
};
/**
 * Describes the message webcast.message.proto.DisplayControl.
 * Use `create(DisplayControlSchema)` to create a new message.
 */
export declare const DisplayControlSchema: GenMessage<DisplayControl>;
/**
 * @generated from message webcast.message.proto.EcommerceEntrance
 */
export type EcommerceEntrance = Message<"webcast.message.proto.EcommerceEntrance"> & {
    /**
     * @generated from field: webcast.model.data.User_EcommerceEntrance_EntranceType entrance_type = 1;
     */
    entranceType: User_EcommerceEntrance_EntranceType;
    /**
     * @generated from field: webcast.model.data.User_EcommerceEntrance_CreatorType creator_type = 2;
     */
    creatorType: User_EcommerceEntrance_CreatorType;
    /**
     * @generated from field: string schema = 3;
     */
    schema: string;
    /**
     * @generated from field: webcast.message.proto.ShopEntranceInfo shop_entrance_info = 4;
     */
    shopEntranceInfo?: ShopEntranceInfo | undefined;
    /**
     * @generated from field: webcast.message.proto.ShowcaseEntranceInfo showcase_entrance_info = 5;
     */
    showcaseEntranceInfo?: ShowcaseEntranceInfo | undefined;
    /**
     * @generated from field: webcast.model.data.User_EcommerceEntrance_ViewVersion view_version = 6;
     */
    viewVersion: User_EcommerceEntrance_ViewVersion;
};
/**
 * Describes the message webcast.message.proto.EcommerceEntrance.
 * Use `create(EcommerceEntranceSchema)` to create a new message.
 */
export declare const EcommerceEntranceSchema: GenMessage<EcommerceEntrance>;
/**
 * @generated from message webcast.message.proto.PerceptionFeedbackOption
 */
export type PerceptionFeedbackOption = Message<"webcast.message.proto.PerceptionFeedbackOption"> & {
    /**
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * @generated from field: string content_key = 2;
     */
    contentKey: string;
};
/**
 * Describes the message webcast.message.proto.PerceptionFeedbackOption.
 * Use `create(PerceptionFeedbackOptionSchema)` to create a new message.
 */
export declare const PerceptionFeedbackOptionSchema: GenMessage<PerceptionFeedbackOption>;
/**
 * @generated from message webcast.message.proto.RankUserEnigmaInfo
 */
export type RankUserEnigmaInfo = Message<"webcast.message.proto.RankUserEnigmaInfo"> & {
    /**
     * @generated from field: bool is_enigma_mask_on = 1;
     */
    isEnigmaMaskOn: boolean;
};
/**
 * Describes the message webcast.message.proto.RankUserEnigmaInfo.
 * Use `create(RankUserEnigmaInfoSchema)` to create a new message.
 */
export declare const RankUserEnigmaInfoSchema: GenMessage<RankUserEnigmaInfo>;
/**
 * @generated from message webcast.message.proto.SellingPoint
 */
export type SellingPoint = Message<"webcast.message.proto.SellingPoint"> & {
    /**
     * @generated from field: string show_text = 1;
     */
    showText: string;
    /**
     * @generated from field: webcast.model.data.User_EcommerceEntrance_SellingPoint_LiveSellingPointType selling_point_type = 2;
     */
    sellingPointType: User_EcommerceEntrance_SellingPoint_LiveSellingPointType;
};
/**
 * Describes the message webcast.message.proto.SellingPoint.
 * Use `create(SellingPointSchema)` to create a new message.
 */
export declare const SellingPointSchema: GenMessage<SellingPoint>;
/**
 * @generated from message webcast.message.proto.ShopEntranceInfo
 */
export type ShopEntranceInfo = Message<"webcast.message.proto.ShopEntranceInfo"> & {
    /**
     * @generated from field: string shop_id = 1;
     */
    shopId: string;
    /**
     * @generated from field: string shop_name = 2;
     */
    shopName: string;
    /**
     * @generated from field: string shop_rating = 3;
     */
    shopRating: string;
    /**
     * @generated from field: webcast.message.proto.StoreLabel store_label = 4;
     */
    storeLabel?: StoreLabel | undefined;
    /**
     * @generated from field: string format_sold_count = 5;
     */
    formatSoldCount: string;
    /**
     * @generated from field: int64 sold_count = 6;
     */
    soldCount: bigint;
    /**
     * @generated from field: int32 exp_rate_percentile = 7;
     */
    expRatePercentile: number;
    /**
     * @generated from field: string exp_rate_top_display = 8;
     */
    expRateTopDisplay: string;
    /**
     * @generated from field: int32 rate_display_style = 9;
     */
    rateDisplayStyle: number;
    /**
     * @generated from field: bool show_rate_not_applicable = 10;
     */
    showRateNotApplicable: boolean;
    /**
     * @generated from field: repeated webcast.message.proto.SellingPoint selling_point = 11;
     */
    sellingPoint: SellingPoint[];
};
/**
 * Describes the message webcast.message.proto.ShopEntranceInfo.
 * Use `create(ShopEntranceInfoSchema)` to create a new message.
 */
export declare const ShopEntranceInfoSchema: GenMessage<ShopEntranceInfo>;
/**
 * @generated from message webcast.message.proto.ShowResult
 */
export type ShowResult = Message<"webcast.message.proto.ShowResult"> & {
    /**
     * @generated from field: bool banned = 1;
     */
    banned: boolean;
};
/**
 * Describes the message webcast.message.proto.ShowResult.
 * Use `create(ShowResultSchema)` to create a new message.
 */
export declare const ShowResultSchema: GenMessage<ShowResult>;
/**
 * @generated from message webcast.message.proto.ShowcaseEntranceInfo
 */
export type ShowcaseEntranceInfo = Message<"webcast.message.proto.ShowcaseEntranceInfo"> & {
    /**
     * @generated from field: string format_sold_count = 1;
     */
    formatSoldCount: string;
    /**
     * @generated from field: int64 sold_count = 2;
     */
    soldCount: bigint;
    /**
     * @generated from field: string showcase_name = 3;
     */
    showcaseName: string;
    /**
     * @generated from field: repeated webcast.message.proto.SellingPoint selling_point = 11;
     */
    sellingPoint: SellingPoint[];
    /**
     * @generated from field: webcast.model.base.user.CreatorScoreProfile creator_score_profile = 12;
     */
    creatorScoreProfile?: CreatorScoreProfile | undefined;
};
/**
 * Describes the message webcast.message.proto.ShowcaseEntranceInfo.
 * Use `create(ShowcaseEntranceInfoSchema)` to create a new message.
 */
export declare const ShowcaseEntranceInfoSchema: GenMessage<ShowcaseEntranceInfo>;
/**
 * @generated from message webcast.message.proto.StoreIdentityLabel
 */
export type StoreIdentityLabel = Message<"webcast.message.proto.StoreIdentityLabel"> & {
    /**
     * @generated from field: webcast.model.data.User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_ShopIdentityLabelType label_type = 1;
     */
    labelType: User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_ShopIdentityLabelType;
    /**
     * @generated from field: string identity_label_text = 2;
     */
    identityLabelText: string;
    /**
     * @generated from field: webcast.shared.ShopLabelImage identity_logo_light = 3;
     */
    identityLogoLight?: ShopLabelImage | undefined;
    /**
     * @generated from field: webcast.shared.ShopLabelImage identity_logo_dark = 4;
     */
    identityLogoDark?: ShopLabelImage | undefined;
    /**
     * @generated from field: string identity_label_bg_color_light = 5;
     */
    identityLabelBgColorLight: string;
    /**
     * @generated from field: string identity_label_bg_color_dark = 6;
     */
    identityLabelBgColorDark: string;
    /**
     * @generated from field: string identity_label_text_color_light = 7;
     */
    identityLabelTextColorLight: string;
    /**
     * @generated from field: string identity_label_text_color_dark = 8;
     */
    identityLabelTextColorDark: string;
    /**
     * @generated from field: string shop_explanation_page_schema = 9;
     */
    shopExplanationPageSchema: string;
    /**
     * @generated from field: string shop_identity_label_key = 10;
     */
    shopIdentityLabelKey: string;
};
/**
 * Describes the message webcast.message.proto.StoreIdentityLabel.
 * Use `create(StoreIdentityLabelSchema)` to create a new message.
 */
export declare const StoreIdentityLabelSchema: GenMessage<StoreIdentityLabel>;
/**
 * @generated from message webcast.message.proto.StoreLabel
 */
export type StoreLabel = Message<"webcast.message.proto.StoreLabel"> & {
    /**
     * @generated from field: webcast.message.proto.StoreOfficialLabel official_label = 1;
     */
    officialLabel?: StoreOfficialLabel | undefined;
    /**
     * @generated from field: bool is_bytemall = 2;
     */
    isBytemall: boolean;
    /**
     * @generated from field: webcast.message.proto.StoreIdentityLabel shop_identity_label = 3;
     */
    shopIdentityLabel?: StoreIdentityLabel | undefined;
};
/**
 * Describes the message webcast.message.proto.StoreLabel.
 * Use `create(StoreLabelSchema)` to create a new message.
 */
export declare const StoreLabelSchema: GenMessage<StoreLabel>;
/**
 * @generated from message webcast.message.proto.StoreOfficialLabel
 */
export type StoreOfficialLabel = Message<"webcast.message.proto.StoreOfficialLabel"> & {
    /**
     * @generated from field: webcast.shared.ShopLabelImage label_image_light = 1;
     */
    labelImageLight?: ShopLabelImage | undefined;
    /**
     * @generated from field: webcast.shared.ShopLabelImage label_image_dark = 2;
     */
    labelImageDark?: ShopLabelImage | undefined;
    /**
     * @generated from field: webcast.model.data.User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreBrandLabelType label_type = 3;
     */
    labelType: User_EcommerceEntrance_ShopEntranceInfo_StoreLabel_StoreBrandLabelType;
    /**
     * @generated from field: string label_type_str = 4;
     */
    labelTypeStr: string;
};
/**
 * Describes the message webcast.message.proto.StoreOfficialLabel.
 * Use `create(StoreOfficialLabelSchema)` to create a new message.
 */
export declare const StoreOfficialLabelSchema: GenMessage<StoreOfficialLabel>;
//# sourceMappingURL=message_proto_pb.d.ts.map