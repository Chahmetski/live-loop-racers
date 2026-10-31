import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "../base/messages_pb.js";
import type { User } from "../base/user_2_pb.js";
import type { GiftShowType } from "../data/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/common.proto.
 */
export declare const file_webcast_model_message_common: GenFile;
/**
 * @generated from message webcast.model.message.common.PatternRef
 */
export type PatternRef = Message<"webcast.model.message.common.PatternRef"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string default_pattern = 2;
     */
    defaultPattern: string;
    /**
     * @generated from field: map<string, string> key_groups = 3;
     */
    keyGroups: {
        [key: string]: string;
    };
};
/**
 * Describes the message webcast.model.message.common.PatternRef.
 * Use `create(PatternRefSchema)` to create a new message.
 */
export declare const PatternRefSchema: GenMessage<PatternRef>;
/**
 * @generated from message webcast.model.message.common.Text
 */
export type Text = Message<"webcast.model.message.common.Text"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string default_pattern = 2;
     */
    defaultPattern: string;
    /**
     * @generated from field: webcast.model.message.common.TextFormat default_format = 3;
     */
    defaultFormat?: TextFormat | undefined;
    /**
     * @generated from field: repeated webcast.model.message.common.TextPiece pieces = 4;
     */
    pieces: TextPiece[];
};
/**
 * Describes the message webcast.model.message.common.Text.
 * Use `create(TextSchema)` to create a new message.
 */
export declare const TextSchema: GenMessage<Text>;
/**
 * @generated from message webcast.model.message.common.TextFormat
 */
export type TextFormat = Message<"webcast.model.message.common.TextFormat"> & {
    /**
     * @generated from field: string color = 1;
     */
    color: string;
    /**
     * @generated from field: bool bold = 2;
     */
    bold: boolean;
    /**
     * @generated from field: bool italic = 3;
     */
    italic: boolean;
    /**
     * @generated from field: int32 weight = 4;
     */
    weight: number;
    /**
     * @generated from field: int32 italic_angle = 5;
     */
    italicAngle: number;
    /**
     * @generated from field: int32 font_size = 6;
     */
    fontSize: number;
    /**
     * @generated from field: bool use_heigh_light_color = 7;
     */
    useHeighLightColor: boolean;
    /**
     * @generated from field: bool use_remote_clor = 8;
     */
    useRemoteClor: boolean;
};
/**
 * Describes the message webcast.model.message.common.TextFormat.
 * Use `create(TextFormatSchema)` to create a new message.
 */
export declare const TextFormatSchema: GenMessage<TextFormat>;
/**
 * @generated from message webcast.model.message.common.TextPiece
 */
export type TextPiece = Message<"webcast.model.message.common.TextPiece"> & {
    /**
     * @generated from field: int32 type = 1;
     */
    type: number;
    /**
     * @generated from field: webcast.model.message.common.TextFormat format = 2;
     */
    format?: TextFormat | undefined;
    /**
     * @generated from field: string string_value = 11;
     */
    stringValue: string;
    /**
     * @generated from field: webcast.model.message.common.TextPieceUser user_value = 21;
     */
    userValue?: TextPieceUser | undefined;
    /**
     * @generated from field: webcast.model.message.common.TextPieceGift gift_value = 22;
     */
    giftValue?: TextPieceGift | undefined;
    /**
     * @generated from field: webcast.model.message.common.TextPieceHeart heart_value = 23;
     */
    heartValue?: TextPieceHeart | undefined;
    /**
     * @generated from field: webcast.model.message.common.TextPiecePatternRef pattern_ref_value = 24;
     */
    patternRefValue?: TextPiecePatternRef | undefined;
    /**
     * @generated from field: webcast.model.message.common.TextPieceImage image_value = 25;
     */
    imageValue?: TextPieceImage | undefined;
};
/**
 * Describes the message webcast.model.message.common.TextPiece.
 * Use `create(TextPieceSchema)` to create a new message.
 */
export declare const TextPieceSchema: GenMessage<TextPiece>;
/**
 * @generated from message webcast.model.message.common.TextPieceGift
 */
export type TextPieceGift = Message<"webcast.model.message.common.TextPieceGift"> & {
    /**
     * @generated from field: int64 gift_id = 1;
     */
    giftId: bigint;
    /**
     * @generated from field: webcast.model.message.common.PatternRef name_ref = 2;
     */
    nameRef?: PatternRef | undefined;
    /**
     * @generated from field: webcast.model.data.GiftShowType show_type = 3;
     */
    showType: GiftShowType;
    /**
     * @generated from field: int64 color_id = 4;
     */
    colorId: bigint;
};
/**
 * Describes the message webcast.model.message.common.TextPieceGift.
 * Use `create(TextPieceGiftSchema)` to create a new message.
 */
export declare const TextPieceGiftSchema: GenMessage<TextPieceGift>;
/**
 * @generated from message webcast.model.message.common.TextPieceHeart
 */
export type TextPieceHeart = Message<"webcast.model.message.common.TextPieceHeart"> & {
    /**
     * @generated from field: string color = 1;
     */
    color: string;
};
/**
 * Describes the message webcast.model.message.common.TextPieceHeart.
 * Use `create(TextPieceHeartSchema)` to create a new message.
 */
export declare const TextPieceHeartSchema: GenMessage<TextPieceHeart>;
/**
 * @generated from message webcast.model.message.common.TextPieceImage
 */
export type TextPieceImage = Message<"webcast.model.message.common.TextPieceImage"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel image = 1;
     */
    image?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.message.common.TextPieceImage.
 * Use `create(TextPieceImageSchema)` to create a new message.
 */
export declare const TextPieceImageSchema: GenMessage<TextPieceImage>;
/**
 * @generated from message webcast.model.message.common.TextPiecePatternRef
 */
export type TextPiecePatternRef = Message<"webcast.model.message.common.TextPiecePatternRef"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string default_pattern = 2;
     */
    defaultPattern: string;
};
/**
 * Describes the message webcast.model.message.common.TextPiecePatternRef.
 * Use `create(TextPiecePatternRefSchema)` to create a new message.
 */
export declare const TextPiecePatternRefSchema: GenMessage<TextPiecePatternRef>;
/**
 * @generated from message webcast.model.message.common.TextPieceUser
 */
export type TextPieceUser = Message<"webcast.model.message.common.TextPieceUser"> & {
    /**
     * @generated from field: webcast.model.base.user.User user = 1;
     */
    user?: User | undefined;
    /**
     * @generated from field: bool with_colon = 2;
     */
    withColon: boolean;
};
/**
 * Describes the message webcast.model.message.common.TextPieceUser.
 * Use `create(TextPieceUserSchema)` to create a new message.
 */
export declare const TextPieceUserSchema: GenMessage<TextPieceUser>;
//# sourceMappingURL=common_pb.d.ts.map