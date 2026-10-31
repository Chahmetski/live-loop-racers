import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "../model/base/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/shared/messages.proto.
 */
export declare const file_webcast_shared_messages: GenFile;
/**
 * @generated from message webcast.shared.AuthenticationInfo
 */
export type AuthenticationInfo = Message<"webcast.shared.AuthenticationInfo"> & {
    /**
     * @generated from field: string custom_verify = 1;
     */
    customVerify: string;
    /**
     * @generated from field: string enterprise_verify_reason = 2;
     */
    enterpriseVerifyReason: string;
    /**
     * @generated from field: webcast.model.base.ImageModel authentication_badge = 3;
     */
    authenticationBadge?: ImageModel | undefined;
};
/**
 * Describes the message webcast.shared.AuthenticationInfo.
 * Use `create(AuthenticationInfoSchema)` to create a new message.
 */
export declare const AuthenticationInfoSchema: GenMessage<AuthenticationInfo>;
/**
 * @generated from message webcast.shared.EnhancementText
 */
export type EnhancementText = Message<"webcast.shared.EnhancementText"> & {
    /**
     * @generated from field: int32 type = 1;
     */
    type: number;
    /**
     * @generated from field: repeated webcast.shared.PlaceholderInfo placeholder_info = 2;
     */
    placeholderInfo: PlaceholderInfo[];
};
/**
 * Describes the message webcast.shared.EnhancementText.
 * Use `create(EnhancementTextSchema)` to create a new message.
 */
export declare const EnhancementTextSchema: GenMessage<EnhancementText>;
/**
 * @generated from message webcast.shared.EnhancementTextInfo
 */
export type EnhancementTextInfo = Message<"webcast.shared.EnhancementTextInfo"> & {
    /**
     * @generated from field: repeated webcast.shared.EnhancementText enhancement_texts = 1;
     */
    enhancementTexts: EnhancementText[];
};
/**
 * Describes the message webcast.shared.EnhancementTextInfo.
 * Use `create(EnhancementTextInfoSchema)` to create a new message.
 */
export declare const EnhancementTextInfoSchema: GenMessage<EnhancementTextInfo>;
/**
 * @generated from message webcast.shared.PlaceholderInfo
 */
export type PlaceholderInfo = Message<"webcast.shared.PlaceholderInfo"> & {
    /**
     * @generated from field: string placeholder = 1;
     */
    placeholder: string;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
};
/**
 * Describes the message webcast.shared.PlaceholderInfo.
 * Use `create(PlaceholderInfoSchema)` to create a new message.
 */
export declare const PlaceholderInfoSchema: GenMessage<PlaceholderInfo>;
/**
 * @generated from message webcast.shared.ShopLabelImage
 */
export type ShopLabelImage = Message<"webcast.shared.ShopLabelImage"> & {
    /**
     * @generated from field: int32 height = 1;
     */
    height: number;
    /**
     * @generated from field: int32 width = 2;
     */
    width: number;
    /**
     * @generated from field: string minetype = 3;
     */
    minetype: string;
    /**
     * @generated from field: string thumb_uri = 4;
     */
    thumbUri: string;
    /**
     * @generated from field: repeated string thumb_uri_list = 5;
     */
    thumbUriList: string[];
    /**
     * @generated from field: string uri = 6;
     */
    uri: string;
    /**
     * @generated from field: repeated string url_list = 7;
     */
    urlList: string[];
    /**
     * @generated from field: string color = 8;
     */
    color: string;
};
/**
 * Describes the message webcast.shared.ShopLabelImage.
 * Use `create(ShopLabelImageSchema)` to create a new message.
 */
export declare const ShopLabelImageSchema: GenMessage<ShopLabelImage>;
/**
 * @generated from message webcast.shared.UserInfo
 */
export type UserInfo = Message<"webcast.shared.UserInfo"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: string nick_name = 2;
     */
    nickName: string;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_thumb = 3;
     */
    avatarThumb?: ImageModel | undefined;
};
/**
 * Describes the message webcast.shared.UserInfo.
 * Use `create(UserInfoSchema)` to create a new message.
 */
export declare const UserInfoSchema: GenMessage<UserInfo>;
//# sourceMappingURL=messages_pb.d.ts.map