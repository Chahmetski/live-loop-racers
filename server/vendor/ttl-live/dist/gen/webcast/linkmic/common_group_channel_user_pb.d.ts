import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { GroupPlayer, GroupStatus, JoinType } from "./common_pb.js";
import type { AllListUser } from "../model/message/linkcore_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/linkmic/common_group_channel_user.proto.
 */
export declare const file_webcast_linkmic_common_group_channel_user: GenFile;
/**
 * @generated from message webcast.linkmic.common.GroupChannelUser
 */
export type GroupChannelUser = Message<"webcast.linkmic.common.GroupChannelUser"> & {
    /**
     * @generated from field: int64 channel_id = 1;
     */
    channelId: bigint;
    /**
     * @generated from field: webcast.linkmic.common.GroupStatus status = 2;
     */
    status: GroupStatus;
    /**
     * @generated from field: webcast.linkmic.common.JoinType type = 3;
     */
    type: JoinType;
    /**
     * @generated from field: webcast.model.message.linkcore.AllListUser all_user = 4;
     */
    allUser?: AllListUser | undefined;
    /**
     * @generated from field: int64 join_time = 5;
     */
    joinTime: bigint;
    /**
     * @generated from field: int64 linked_time = 6;
     */
    linkedTime: bigint;
    /**
     * @generated from field: webcast.linkmic.common.GroupPlayer owner_user = 7;
     */
    ownerUser?: GroupPlayer | undefined;
    /**
     * @generated from field: string group_linkmic_id = 8;
     */
    groupLinkmicId: string;
};
/**
 * Describes the message webcast.linkmic.common.GroupChannelUser.
 * Use `create(GroupChannelUserSchema)` to create a new message.
 */
export declare const GroupChannelUserSchema: GenMessage<GroupChannelUser>;
//# sourceMappingURL=common_group_channel_user_pb.d.ts.map