import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { User } from "../model/base/user_2_pb.js";
import type { UserEmoteUploadSource } from "../model/data/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/chatroom/api_emote_upload_info.proto.
 */
export declare const file_webcast_chatroom_api_emote_upload_info: GenFile;
/**
 * @generated from message webcast.chatroom.api.EmoteUploadInfo
 */
export type EmoteUploadInfo = Message<"webcast.chatroom.api.EmoteUploadInfo"> & {
    /**
     * @generated from field: int64 user_id = 1;
     */
    userId: bigint;
    /**
     * @generated from field: webcast.model.data.UserEmoteUploadSource emote_upload_source = 2;
     */
    emoteUploadSource: UserEmoteUploadSource;
    /**
     * @generated from field: webcast.model.base.user.User user_info = 3;
     */
    userInfo?: User | undefined;
    /**
     * @generated from field: string user_id_str = 4;
     */
    userIdStr: string;
};
/**
 * Describes the message webcast.chatroom.api.EmoteUploadInfo.
 * Use `create(EmoteUploadInfoSchema)` to create a new message.
 */
export declare const EmoteUploadInfoSchema: GenMessage<EmoteUploadInfo>;
//# sourceMappingURL=api_emote_upload_info_pb.d.ts.map