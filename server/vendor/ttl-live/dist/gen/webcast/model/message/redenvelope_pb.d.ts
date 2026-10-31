import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { EnvelopeEnigmaInfo } from "../../envelope_pb.js";
import type { ImageModel } from "../base/messages_pb.js";
import type { EnvelopeBusinessType, EnvelopeDisplay, EnvelopeFollowShowStatus } from "../data/messages_pb.js";
import type { PublicAreaMessageCommon } from "./messages_pb.js";
import type { CommonMessageData } from "../../shared/message_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/message/redenvelope.proto.
 */
export declare const file_webcast_model_message_redenvelope: GenFile;
/**
 * @generated from message webcast.model.message.redenvelope.MessageRedEnvelopInfo
 */
export type MessageRedEnvelopInfo = Message<"webcast.model.message.redenvelope.MessageRedEnvelopInfo"> & {
    /**
     * @generated from field: string envelope_id = 1;
     */
    envelopeId: string;
    /**
     * @generated from field: webcast.model.data.EnvelopeBusinessType business_type = 2;
     */
    businessType: EnvelopeBusinessType;
    /**
     * @generated from field: string envelope_idc = 3;
     */
    envelopeIdc: string;
    /**
     * @generated from field: string send_user_name = 4;
     */
    sendUserName: string;
    /**
     * @generated from field: int32 diamond_count = 5;
     */
    diamondCount: number;
    /**
     * @generated from field: int32 people_count = 6;
     */
    peopleCount: number;
    /**
     * @generated from field: int32 unpack_at = 7;
     */
    unpackAt: number;
    /**
     * @generated from field: string send_user_id = 8;
     */
    sendUserId: string;
    /**
     * @generated from field: webcast.model.base.ImageModel send_user_avatar = 9;
     */
    sendUserAvatar?: ImageModel | undefined;
    /**
     * @generated from field: string create_at = 10;
     */
    createAt: string;
    /**
     * @generated from field: string room_id = 11;
     */
    roomId: string;
    /**
     * @generated from field: webcast.model.data.EnvelopeFollowShowStatus follow_show_status = 12;
     */
    followShowStatus: EnvelopeFollowShowStatus;
    /**
     * @generated from field: int32 skin_id = 13;
     */
    skinId: number;
    /**
     * @generated from field: int32 vote_count = 14;
     */
    voteCount: number;
    /**
     * @generated from field: webcast.envelope.EnvelopeEnigmaInfo sender_enigma_info = 15;
     */
    senderEnigmaInfo?: EnvelopeEnigmaInfo | undefined;
    /**
     * @generated from field: int32 super_fan_count = 16;
     */
    superFanCount: number;
};
/**
 * Describes the message webcast.model.message.redenvelope.MessageRedEnvelopInfo.
 * Use `create(MessageRedEnvelopInfoSchema)` to create a new message.
 */
export declare const MessageRedEnvelopInfoSchema: GenMessage<MessageRedEnvelopInfo>;
/**
 * @generated from message webcast.model.message.redenvelope.WebcastEnvelopeMessage
 */
export type WebcastEnvelopeMessage = Message<"webcast.model.message.redenvelope.WebcastEnvelopeMessage"> & {
    /**
     * @generated from field: webcast.shared.message.CommonMessageData common = 1;
     */
    common?: CommonMessageData | undefined;
    /**
     * @generated from field: webcast.model.message.redenvelope.MessageRedEnvelopInfo envelope_info = 2;
     */
    envelopeInfo?: MessageRedEnvelopInfo | undefined;
    /**
     * @generated from field: webcast.model.data.EnvelopeDisplay display = 3;
     */
    display: EnvelopeDisplay;
    /**
     * @generated from field: webcast.model.message.PublicAreaMessageCommon public_area_msg_common = 4;
     */
    publicAreaMsgCommon?: PublicAreaMessageCommon | undefined;
};
/**
 * Describes the message webcast.model.message.redenvelope.WebcastEnvelopeMessage.
 * Use `create(WebcastEnvelopeMessageSchema)` to create a new message.
 */
export declare const WebcastEnvelopeMessageSchema: GenMessage<WebcastEnvelopeMessage>;
//# sourceMappingURL=redenvelope_pb.d.ts.map