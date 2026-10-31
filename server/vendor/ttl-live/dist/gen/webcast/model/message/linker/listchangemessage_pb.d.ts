import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "../../base/messages_pb.js";
import type { User } from "../../base/user_2_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/linker/listchangemessage.proto.
 */
export declare const file_webcast_model_message_linker_listchangemessage: GenFile;
/**
 * @generated from message webcast.model.message.linker.listchangemessage.LinkListUser
 */
export type LinkListUser = Message<"webcast.model.message.linker.listchangemessage.LinkListUser"> & {
    /**
     * @generated from field: webcast.model.base.user.User user = 1;
     */
    user?: User | undefined;
    /**
     * @generated from field: int64 modify_time = 2;
     */
    modifyTime: bigint;
    /**
     * @generated from field: int32 link_type = 3;
     */
    linkType: number;
    /**
     * @generated from field: int32 role_type = 4;
     */
    roleType: number;
    /**
     * @generated from field: string linkmic_id_str = 5;
     */
    linkmicIdStr: string;
    /**
     * @generated from field: int64 payed_money = 6;
     */
    payedMoney: bigint;
    /**
     * @generated from field: int64 fan_ticket = 7;
     */
    fanTicket: bigint;
    /**
     * @generated from field: int32 fan_ticket_icon_type = 8;
     */
    fanTicketIconType: number;
    /**
     * @generated from field: int32 link_user_type = 9;
     */
    linkUserType: number;
    /**
     * @generated from field: webcast.model.base.ImageModel blurred_avatar = 10;
     */
    blurredAvatar?: ImageModel | undefined;
};
/**
 * Describes the message webcast.model.message.linker.listchangemessage.LinkListUser.
 * Use `create(LinkListUserSchema)` to create a new message.
 */
export declare const LinkListUserSchema: GenMessage<LinkListUser>;
/**
 * @generated from message webcast.model.message.linker.listchangemessage.LinkerListChangeContent
 */
export type LinkerListChangeContent = Message<"webcast.model.message.linker.listchangemessage.LinkerListChangeContent"> & {
    /**
     * @generated from field: repeated webcast.model.message.linker.listchangemessage.LinkListUser linked_users = 1;
     */
    linkedUsers: LinkListUser[];
    /**
     * @generated from field: repeated webcast.model.message.linker.listchangemessage.LinkListUser applied_users = 2;
     */
    appliedUsers: LinkListUser[];
    /**
     * @generated from field: repeated webcast.model.message.linker.listchangemessage.LinkListUser connecting_users = 3;
     */
    connectingUsers: LinkListUser[];
};
/**
 * Describes the message webcast.model.message.linker.listchangemessage.LinkerListChangeContent.
 * Use `create(LinkerListChangeContentSchema)` to create a new message.
 */
export declare const LinkerListChangeContentSchema: GenMessage<LinkerListChangeContent>;
//# sourceMappingURL=listchangemessage_pb.d.ts.map