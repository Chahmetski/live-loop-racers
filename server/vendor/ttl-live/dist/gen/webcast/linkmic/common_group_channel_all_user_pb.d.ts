import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { GroupChannelUser } from "./common_group_channel_user_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/linkmic/common_group_channel_all_user.proto.
 */
export declare const file_webcast_linkmic_common_group_channel_all_user: GenFile;
/**
 * @generated from message webcast.linkmic.common.GroupChannelAllUser
 */
export type GroupChannelAllUser = Message<"webcast.linkmic.common.GroupChannelAllUser"> & {
    /**
     * @generated from field: int64 group_channel_id = 1;
     */
    groupChannelId: bigint;
    /**
     * @generated from field: repeated webcast.linkmic.common.GroupChannelUser user = 2;
     */
    user: GroupChannelUser[];
    /**
     * @generated from field: int64 content_version = 3;
     */
    contentVersion: bigint;
};
/**
 * Describes the message webcast.linkmic.common.GroupChannelAllUser.
 * Use `create(GroupChannelAllUserSchema)` to create a new message.
 */
export declare const GroupChannelAllUserSchema: GenMessage<GroupChannelAllUser>;
//# sourceMappingURL=common_group_channel_all_user_pb.d.ts.map