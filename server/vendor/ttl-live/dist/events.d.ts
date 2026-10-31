import type { ChatEvent, EventUser, GiftEvent, LikeEvent, LiveEvent, MemberEvent, RoomUserEvent, SocialEvent, UnknownEvent } from './types.js';
export declare const METHOD: Readonly<{
    chat: "model.message.WebcastChatMessage";
    gift: "model.message.WebcastGiftMessage";
    like: "model.message.WebcastLikeMessage";
    member: "model.message.WebcastMemberMessage";
    social: "model.message.WebcastSocialMessage";
    roomUser: "model.message.WebcastRoomUserSeqMessage";
}>;
export declare const EVENT: Readonly<{
    chat: "chat";
    gift: "gift";
    like: "like";
    member: "member";
    social: "social";
    roomUser: "roomUser";
    unknown: "unknown";
}>;
export declare function safeCount(value: bigint | number): number;
export declare function decodeUser(payload?: Uint8Array): EventUser;
export declare const label: (user: EventUser) => string;
export declare const SOCIAL_ACTION: Readonly<{
    follow: 1;
    share: 3;
}>;
export declare function decodeEvent(method: typeof METHOD.chat, payload: Uint8Array): ChatEvent | UnknownEvent;
export declare function decodeEvent(method: typeof METHOD.gift, payload: Uint8Array): GiftEvent | UnknownEvent;
export declare function decodeEvent(method: typeof METHOD.like, payload: Uint8Array): LikeEvent | UnknownEvent;
export declare function decodeEvent(method: typeof METHOD.member, payload: Uint8Array): MemberEvent | UnknownEvent;
export declare function decodeEvent(method: typeof METHOD.social, payload: Uint8Array): SocialEvent | UnknownEvent;
export declare function decodeEvent(method: typeof METHOD.roomUser, payload: Uint8Array): RoomUserEvent | UnknownEvent;
export declare function decodeEvent(method: string, payload: Uint8Array): LiveEvent;
//# sourceMappingURL=events.d.ts.map