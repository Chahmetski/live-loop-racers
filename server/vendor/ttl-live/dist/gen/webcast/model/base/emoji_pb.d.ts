import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { EmoteModel_AuditInfo } from "../../chatroom/api_pb.js";
import type { EmoteUploadInfo } from "../../chatroom/api_emote_upload_info_pb.js";
import type { ImageModel } from "./messages_pb.js";
import type { AuditStatus, ContentSource, EmotePrivateType, EmoteScene, EmoteType, RewardCondition } from "../data/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/base/emoji.proto.
 */
export declare const file_webcast_model_base_emoji: GenFile;
/**
 * @generated from message webcast.model.base.emoji.EmoteModel
 */
export type EmoteModel = Message<"webcast.model.base.emoji.EmoteModel"> & {
    /**
     * @generated from field: string emote_id = 1;
     */
    emoteId: string;
    /**
     * @generated from field: webcast.model.base.ImageModel image = 2;
     */
    image?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.data.AuditStatus audit_status = 3;
     */
    auditStatus: AuditStatus;
    /**
     * @generated from field: string uuid = 4;
     */
    uuid: string;
    /**
     * @generated from field: webcast.model.data.EmoteType emote_type = 5;
     */
    emoteType: EmoteType;
    /**
     * @generated from field: webcast.model.data.ContentSource content_source = 6;
     */
    contentSource: ContentSource;
    /**
     * @generated from field: webcast.model.data.EmotePrivateType emote_private_type = 7;
     */
    emotePrivateType: EmotePrivateType;
    /**
     * @generated from field: string package_id = 8;
     */
    packageId: string;
    /**
     * @generated from field: webcast.chatroom.api.EmoteModel_AuditInfo audit_info = 9;
     */
    auditInfo?: EmoteModel_AuditInfo | undefined;
    /**
     * @generated from field: webcast.model.data.RewardCondition reward_condition = 10;
     */
    rewardCondition: RewardCondition;
    /**
     * @generated from field: webcast.chatroom.api.EmoteUploadInfo emote_upload_info = 11;
     */
    emoteUploadInfo?: EmoteUploadInfo | undefined;
    /**
     * @generated from field: int64 create_time = 12;
     */
    createTime: bigint;
    /**
     * @generated from field: webcast.model.data.EmoteScene emote_scene = 13;
     */
    emoteScene: EmoteScene;
};
/**
 * Describes the message webcast.model.base.emoji.EmoteModel.
 * Use `create(EmoteModelSchema)` to create a new message.
 */
export declare const EmoteModelSchema: GenMessage<EmoteModel>;
/**
 * @generated from message webcast.model.base.emoji.EmoteWithIndex
 */
export type EmoteWithIndex = Message<"webcast.model.base.emoji.EmoteWithIndex"> & {
    /**
     * @generated from field: int32 index = 1;
     */
    index: number;
    /**
     * @generated from field: webcast.model.base.emoji.EmoteModel emote = 2;
     */
    emote?: EmoteModel | undefined;
};
/**
 * Describes the message webcast.model.base.emoji.EmoteWithIndex.
 * Use `create(EmoteWithIndexSchema)` to create a new message.
 */
export declare const EmoteWithIndexSchema: GenMessage<EmoteWithIndex>;
//# sourceMappingURL=emoji_pb.d.ts.map