import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "./base/messages_pb.js";
import type { GiftColorInfo, GiftPanelBeaconBubble, GiftResource } from "./gift/model_pb.js";
import type { Text } from "./message/common_pb.js";
import type { BatchGiftInfo, ColorPickerInfo, CrossScreenEffectInfo, GiftBoxInfo, GiftLockInfo, GiftRandomEffectInfo, GiftSeriesInfo, GiftSkin, GiftSkinToGiftTextsInfo, GiftSponsorInfo, GiftText, LynxCrossScreenEffectInfo, MusicGiftInfo, SchemeInfo, UGGiftStructInfo } from "./messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/color_group.proto.
 */
export declare const file_webcast_model_color_group: GenFile;
/**
 * @generated from message webcast.model.Gift
 */
export type Gift = Message<"webcast.model.Gift"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel image = 1;
     */
    image?: ImageModel | undefined;
    /**
     * @generated from field: string describe = 2;
     */
    describe: string;
    /**
     * @generated from field: int32 duration = 4;
     */
    duration: number;
    /**
     * @generated from field: int64 id = 5;
     */
    id: bigint;
    /**
     * @generated from field: bool for_linkmic = 7;
     */
    forLinkmic: boolean;
    /**
     * @generated from field: bool combo = 10;
     */
    combo: boolean;
    /**
     * @generated from field: int32 type = 11;
     */
    type: number;
    /**
     * @generated from field: int32 diamond_count = 12;
     */
    diamondCount: number;
    /**
     * @generated from field: bool is_displayed_on_panel = 13;
     */
    isDisplayedOnPanel: boolean;
    /**
     * @generated from field: int64 primary_effect_id = 14;
     */
    primaryEffectId: bigint;
    /**
     * @generated from field: webcast.model.base.ImageModel gift_label_icon = 15;
     */
    giftLabelIcon?: ImageModel | undefined;
    /**
     * @generated from field: string name = 16;
     */
    name: string;
    /**
     * @generated from field: webcast.model.base.ImageModel icon = 21;
     */
    icon?: ImageModel | undefined;
    /**
     * @generated from field: string gold_effect = 24;
     */
    goldEffect: string;
    /**
     * @generated from field: webcast.model.base.ImageModel preview_image = 47;
     */
    previewImage?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.GiftPanelBanner gift_panel_banner = 48;
     */
    giftPanelBanner?: GiftPanelBanner | undefined;
    /**
     * @generated from field: bool is_broadcast_gift = 49;
     */
    isBroadcastGift: boolean;
    /**
     * @generated from field: bool is_effect_befview = 50;
     */
    isEffectBefview: boolean;
    /**
     * @generated from field: bool is_random_gift = 51;
     */
    isRandomGift: boolean;
    /**
     * @generated from field: bool is_box_gift = 52;
     */
    isBoxGift: boolean;
    /**
     * @generated from field: bool can_put_in_gift_box = 53;
     */
    canPutInGiftBox: boolean;
    /**
     * @generated from field: webcast.model.GiftBoxInfo gift_box_info = 54;
     */
    giftBoxInfo?: GiftBoxInfo | undefined;
    /**
     * @generated from field: map<string, string> tracker_params = 100;
     */
    trackerParams: {
        [key: string]: string;
    };
    /**
     * @generated from field: webcast.model.GiftLockInfo lock_info = 101;
     */
    lockInfo?: GiftLockInfo | undefined;
    /**
     * @generated from field: repeated webcast.model.gift.model.GiftColorInfo color_infos = 102;
     */
    colorInfos: GiftColorInfo[];
    /**
     * @generated from field: string gift_rank_recommend_info = 103;
     */
    giftRankRecommendInfo: string;
    /**
     * @generated from field: webcast.model.GiftRandomEffectInfo random_effect_info = 104;
     */
    randomEffectInfo?: GiftRandomEffectInfo | undefined;
    /**
     * @generated from field: int32 gift_sub_type = 105;
     */
    giftSubType: number;
    /**
     * @generated from field: repeated int32 gift_vertical_scenarios = 106;
     */
    giftVerticalScenarios: number[];
    /**
     * @generated from field: int32 group_in_tab = 107;
     */
    groupInTab: number;
    /**
     * @generated from field: bool is_gallery_gift = 108;
     */
    isGalleryGift: boolean;
    /**
     * @generated from field: webcast.model.GiftSponsorInfo gift_sponsor_info = 109;
     */
    giftSponsorInfo?: GiftSponsorInfo | undefined;
    /**
     * @generated from field: repeated webcast.model.GiftSkin gift_skins = 110;
     */
    giftSkins: GiftSkin[];
    /**
     * @generated from field: int32 gift_label_type = 111;
     */
    giftLabelType: number;
    /**
     * @generated from field: repeated webcast.model.GiftText gift_texts = 112;
     */
    giftTexts: GiftText[];
    /**
     * @generated from field: repeated webcast.model.GiftSkinToGiftTextsInfo gift_skin_to_gift_texts_infos = 113;
     */
    giftSkinToGiftTextsInfos: GiftSkinToGiftTextsInfo[];
    /**
     * @generated from field: int64 expiration_timestamp = 114;
     */
    expirationTimestamp: bigint;
    /**
     * @generated from field: webcast.model.BatchGiftInfo batch_gift_info = 115;
     */
    batchGiftInfo?: BatchGiftInfo | undefined;
    /**
     * @generated from field: bool is_global_gift = 116;
     */
    isGlobalGift: boolean;
    /**
     * @generated from field: bool disable_gallery_banner = 117;
     */
    disableGalleryBanner: boolean;
    /**
     * @generated from field: webcast.model.UGGiftStructInfo ug_gift_info = 118;
     */
    ugGiftInfo?: UGGiftStructInfo | undefined;
    /**
     * @generated from field: webcast.model.CrossScreenEffectInfo cross_screen_effect_info = 119;
     */
    crossScreenEffectInfo?: CrossScreenEffectInfo | undefined;
    /**
     * @generated from field: webcast.model.gift.model.GiftPanelBeaconBubble beacon_bubble = 120;
     */
    beaconBubble?: GiftPanelBeaconBubble | undefined;
    /**
     * @generated from field: map<string, webcast.model.gift.model.GiftResource> gift_resources = 121;
     */
    giftResources: {
        [key: string]: GiftResource;
    };
    /**
     * @generated from field: int64 resource_id = 122;
     */
    resourceId: bigint;
    /**
     * @generated from field: map<int64, string> biz_extra = 123;
     */
    bizExtra: {
        [key: string]: string;
    };
    /**
     * @generated from field: webcast.model.LynxCrossScreenEffectInfo lynx_cross_screen_effect_info = 124;
     */
    lynxCrossScreenEffectInfo?: LynxCrossScreenEffectInfo | undefined;
    /**
     * @generated from field: string gift_struct_hash = 125;
     */
    giftStructHash: string;
    /**
     * @generated from field: webcast.model.SchemeInfo scheme_info = 126;
     */
    schemeInfo?: SchemeInfo | undefined;
    /**
     * @generated from field: webcast.model.GiftSeriesInfo series_info = 127;
     */
    seriesInfo?: GiftSeriesInfo | undefined;
    /**
     * @generated from field: webcast.model.ColorPickerInfo color_picker_info = 128;
     */
    colorPickerInfo?: ColorPickerInfo | undefined;
    /**
     * @generated from field: webcast.model.MusicGiftInfo music_info = 140;
     */
    musicInfo?: MusicGiftInfo | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel gift_bottom_right_label_icon = 141;
     */
    giftBottomRightLabelIcon?: ImageModel | undefined;
    /**
     * @generated from field: string strategy_event = 201;
     */
    strategyEvent: string;
};
/**
 * Describes the message webcast.model.Gift.
 * Use `create(GiftSchema)` to create a new message.
 */
export declare const GiftSchema: GenMessage<Gift>;
/**
 * @generated from message webcast.model.GiftPanelBanner
 */
export type GiftPanelBanner = Message<"webcast.model.GiftPanelBanner"> & {
    /**
     * @generated from field: webcast.model.message.common.Text display_text = 1;
     */
    displayText?: Text | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel left_icon = 2;
     */
    leftIcon?: ImageModel | undefined;
    /**
     * @generated from field: string schema_url = 3;
     */
    schemaUrl: string;
    /**
     * @generated from field: repeated string bg_color_values = 5;
     */
    bgColorValues: string[];
    /**
     * @generated from field: string banner_lynx_url = 6;
     */
    bannerLynxUrl: string;
    /**
     * @generated from field: int32 banner_priority = 7;
     */
    bannerPriority: number;
    /**
     * @generated from field: string banner_lynx_extra = 8;
     */
    bannerLynxExtra: string;
    /**
     * @generated from field: webcast.model.base.ImageModel bg_image = 9;
     */
    bgImage?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.GiftPanelBanner.
 * Use `create(GiftPanelBannerSchema)` to create a new message.
 */
export declare const GiftPanelBannerSchema: GenMessage<GiftPanelBanner>;
/**
 * @generated from message webcast.model.GiftTrayInfo
 */
export type GiftTrayInfo = Message<"webcast.model.GiftTrayInfo"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel tray_dynamic_img = 1;
     */
    trayDynamicImg?: ImageModel | undefined;
    /**
     * @generated from field: bool can_mirror = 2;
     */
    canMirror: boolean;
    /**
     * @generated from field: webcast.model.base.ImageModel tray_normal_bg_img = 3;
     */
    trayNormalBgImg?: ImageModel | undefined;
    /**
     * @generated from field: repeated string tray_normal_bg_color = 4;
     */
    trayNormalBgColor: string[];
    /**
     * @generated from field: webcast.model.base.ImageModel tray_small_bg_img = 5;
     */
    traySmallBgImg?: ImageModel | undefined;
    /**
     * @generated from field: repeated string tray_small_bg_color = 6;
     */
    traySmallBgColor: string[];
    /**
     * @generated from field: webcast.model.message.common.Text right_tag_text = 7;
     */
    rightTagText?: Text | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel right_tag_bg_img = 8;
     */
    rightTagBgImg?: ImageModel | undefined;
    /**
     * @generated from field: repeated string right_tag_bg_color = 9;
     */
    rightTagBgColor: string[];
    /**
     * @generated from field: string tray_name_text_color = 10;
     */
    trayNameTextColor: string;
    /**
     * @generated from field: string tray_desc_text_color = 11;
     */
    trayDescTextColor: string;
    /**
     * @generated from field: string right_tag_jump_schema = 12;
     */
    rightTagJumpSchema: string;
    /**
     * @generated from field: string gift_tray_jump_schema = 13;
     */
    giftTrayJumpSchema: string;
};
/**
 * Describes the message webcast.model.GiftTrayInfo.
 * Use `create(GiftTrayInfoSchema)` to create a new message.
 */
export declare const GiftTrayInfoSchema: GenMessage<GiftTrayInfo>;
//# sourceMappingURL=color_group_pb.d.ts.map