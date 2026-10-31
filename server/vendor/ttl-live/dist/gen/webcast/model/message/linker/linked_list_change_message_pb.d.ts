import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { User } from "../../base/user_2_pb.js";
import type { LinkListStatus, LinkRoleType, LinkSilenceStatus, LinkType } from "../../data/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/linker/linked_list_change_message.proto.
 */
export declare const file_webcast_model_message_linker_linked_list_change_message: GenFile;
/**
 * @generated from message webcast.model.message.linker.linked_list_change_message.LinkedListChangeContent
 */
export type LinkedListChangeContent = Message<"webcast.model.message.linker.linked_list_change_message.LinkedListChangeContent"> & {
    /**
     * @generated from field: repeated webcast.model.message.linker.linked_list_change_message.ListUser linked_users = 1;
     */
    linkedUsers: ListUser[];
};
/**
 * Describes the message webcast.model.message.linker.linked_list_change_message.LinkedListChangeContent.
 * Use `create(LinkedListChangeContentSchema)` to create a new message.
 */
export declare const LinkedListChangeContentSchema: GenMessage<LinkedListChangeContent>;
/**
 * @generated from message webcast.model.message.linker.linked_list_change_message.ListUser
 */
export type ListUser = Message<"webcast.model.message.linker.linked_list_change_message.ListUser"> & {
    /**
     * @generated from field: webcast.model.base.user.User user = 1;
     */
    user?: User | undefined;
    /**
     * @generated from field: int64 linkmic_id = 2;
     */
    linkmicId: bigint;
    /**
     * @generated from field: string linkmic_id_str = 3;
     */
    linkmicIdStr: string;
    /**
     * @generated from field: webcast.model.data.LinkListStatus link_status = 4;
     */
    linkStatus: LinkListStatus;
    /**
     * @generated from field: webcast.model.data.LinkType link_type = 5;
     */
    linkType: LinkType;
    /**
     * @generated from field: int32 user_position = 6;
     */
    userPosition: number;
    /**
     * @generated from field: webcast.model.data.LinkSilenceStatus silence_status = 7;
     */
    silenceStatus: LinkSilenceStatus;
    /**
     * @generated from field: int64 modify_time = 8;
     */
    modifyTime: bigint;
    /**
     * @generated from field: int64 linker_id = 9;
     */
    linkerId: bigint;
    /**
     * @generated from field: webcast.model.data.LinkRoleType role_type = 10;
     */
    roleType: LinkRoleType;
};
/**
 * Describes the message webcast.model.message.linker.linked_list_change_message.ListUser.
 * Use `create(ListUserSchema)` to create a new message.
 */
export declare const ListUserSchema: GenMessage<ListUser>;
//# sourceMappingURL=linked_list_change_message_pb.d.ts.map