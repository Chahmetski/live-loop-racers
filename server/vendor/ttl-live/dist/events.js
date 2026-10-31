// Stable event normalisation over the generated v3 protobuf schemas.
//
// The generated messages are the wire/schema source of truth. This file is deliberately still a
// separate adapter: the package's listener API uses compact, stable names and number/string
// conventions that should not change whenever TikTok adds a protobuf field.
import { fromBinary } from '@bufbuild/protobuf';
import { WebcastChatMessageSchema, WebcastGiftMessageSchema, WebcastLikeMessageSchema, WebcastMemberMessageSchema, WebcastRoomUserSeqMessageSchema, WebcastSocialMessageSchema, } from './gen/webcast/model/message/messages_pb.js';
import { UserSchema } from './gen/webcast/model/base/user_2_pb.js';
function methodName(schema) {
    return schema.typeName.slice(schema.typeName.lastIndexOf('.') + 1);
}
/// Schema method names for the events normalised here, derived from generated descriptors.
export const METHOD = Object.freeze({
    chat: methodName(WebcastChatMessageSchema),
    gift: methodName(WebcastGiftMessageSchema),
    like: methodName(WebcastLikeMessageSchema),
    member: methodName(WebcastMemberMessageSchema),
    social: methodName(WebcastSocialMessageSchema),
    roomUser: methodName(WebcastRoomUserSeqMessageSchema),
});
/// The event names a client emits, including the two that are not schema messages.
export const EVENT = Object.freeze({
    chat: 'chat',
    gift: 'gift',
    like: 'like',
    member: 'member',
    social: 'social',
    roomUser: 'roomUser',
    unknown: 'unknown',
});
// --- generated message adapters ----------------------------------------------------------------
/// Convert a generated protobuf count without silently losing precision.
///
/// Counts are exposed as numbers for compatibility with the listener API. Values outside the
/// safe integer range are intentionally clamped, while negative values normalize to zero.
export function safeCount(value) {
    if (typeof value === 'number' && !Number.isInteger(value)) {
        throw new RangeError('protobuf counts must be integers');
    }
    const integer = typeof value === 'bigint' ? value : BigInt(value);
    if (integer <= 0n)
        return 0;
    const maximum = BigInt(Number.MAX_SAFE_INTEGER);
    if (integer > maximum)
        return Number.MAX_SAFE_INTEGER;
    return Number(integer);
}
/// Generated int64 values remain bigint until this explicit public boundary.
const asId = (value) => value.toString();
function firstImageUrl(image) {
    return image?.urlList[0] ?? '';
}
/// Map one generated v3 user to the package's intentionally small stable user API.
function normalizeUser(user) {
    const avatarUrl = firstImageUrl(user?.avatarThumb) ||
        firstImageUrl(user?.avatarMedium) ||
        firstImageUrl(user?.avatarLarge) ||
        firstImageUrl(user?.avatarJpg) ||
        '';
    const normalized = {
        userId: user ? asId(user.id) : '0',
        nickname: user?.nickname ?? '',
        /// The `@handle`. `display_id` in the schema, `uniqueId` in the Node connector.
        uniqueId: user?.displayId ?? '',
        secUid: user?.secUid ?? '',
    };
    if (avatarUrl)
        normalized.avatarUrl = avatarUrl;
    if (user?.followInfo)
        normalized.followStatus = safeCount(user.followInfo.followStatus);
    return normalized;
}
/// Decode a generated v3 User message, or return the same blank user for no nested message.
export function decodeUser(payload) {
    return normalizeUser(fromBinary(UserSchema, payload ?? new Uint8Array()));
}
/// Best available label for a user, preferring the stable handle.
export const label = (user) => user.uniqueId || user.nickname || 'unknown';
function normalizeContributor(contributor) {
    return {
        rank: safeCount(contributor.rank),
        score: safeCount(contributor.score),
        delta: safeCount(contributor.delta),
        user: normalizeUser(contributor.user),
    };
}
/// `WebcastSocialMessage.action`, which is how a follow and a share arrive on the same message.
export const SOCIAL_ACTION = Object.freeze({ follow: 1, share: 3 });
const NORMALIZE = {
    [METHOD.chat]: (payload) => {
        const message = fromBinary(WebcastChatMessageSchema, payload);
        return {
            type: EVENT.chat,
            user: normalizeUser(message.user),
            comment: message.content,
        };
    },
    [METHOD.gift]: (payload) => {
        const message = fromBinary(WebcastGiftMessageSchema, payload);
        // The nested detail block is omitted on repeat messages of a streak, so the name and price
        // fall back rather than failing: a gift with no name is still a gift.
        return {
            type: EVENT.gift,
            user: normalizeUser(message.user),
            toUser: normalizeUser(message.toUser),
            giftId: asId(message.giftId),
            giftName: message.gift?.name ?? '',
            diamondCount: safeCount(message.gift?.diamondCount ?? 0),
            streakable: message.groupId > 0n || message.gift?.type === 1,
            repeatCount: safeCount(message.repeatCount),
            comboCount: safeCount(message.comboCount),
            groupId: asId(message.groupId),
            /// A streak sends one message per gift; only the last one is final. Counting the others
            /// double-counts diamonds, which is the classic bug in a gift tally.
            repeatEnd: message.repeatEnd > 0,
        };
    },
    [METHOD.like]: (payload) => {
        const message = fromBinary(WebcastLikeMessageSchema, payload);
        return {
            type: EVENT.like,
            user: normalizeUser(message.user),
            count: safeCount(message.count),
            total: safeCount(message.total),
        };
    },
    [METHOD.member]: (payload) => {
        const message = fromBinary(WebcastMemberMessageSchema, payload);
        return {
            type: EVENT.member,
            user: normalizeUser(message.user),
            memberCount: safeCount(message.memberCount),
            action: safeCount(message.action),
        };
    },
    [METHOD.social]: (payload) => {
        const message = fromBinary(WebcastSocialMessageSchema, payload);
        return {
            type: EVENT.social,
            user: normalizeUser(message.user),
            action: safeCount(message.action),
            followCount: safeCount(message.followCount),
            shareCount: safeCount(message.shareCount),
        };
    },
    [METHOD.roomUser]: (payload) => {
        const message = fromBinary(WebcastRoomUserSeqMessageSchema, payload);
        const ranks = message.ranks.map(normalizeContributor);
        return {
            type: EVENT.roomUser,
            viewers: safeCount(message.total),
            popularity: safeCount(message.popularity),
            totalUser: safeCount(message.totalUser),
            anonymous: safeCount(message.anonymous),
            // Preserve the existing public API, which exposes the ranking under both names.
            topViewers: ranks,
            rankedViewers: ranks,
        };
    },
};
export function decodeEvent(method, payload) {
    const normalize = NORMALIZE[method];
    if (!normalize)
        return { type: EVENT.unknown, method, payload };
    try {
        return { ...normalize(payload), method };
    }
    catch {
        return { type: EVENT.unknown, method, payload };
    }
}
//# sourceMappingURL=events.js.map