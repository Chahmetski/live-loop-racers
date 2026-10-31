import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { EcommerceEntrance } from "../../message_proto_pb.js";
import type { ImageModel } from "./messages_pb.js";
import type { BadgeStruct, ComboBadgeInfo, EnigmaInfo, FansClubInfo, FollowInfo, OwnRoom, SubscribeInfo } from "./user_pb.js";
import type { LinkmicStatus } from "../data/messages_pb.js";
import type { ActivityRewardInfo, AnchorInfo, AnchorLevel, AuthenticationInfo, Author, BorderInfo, FansClubMember, LiveEventInfo, UserAttr, UserHonor } from "../messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/base/user_2.proto.
 */
export declare const file_webcast_model_base_user_2: GenFile;
/**
 * @generated from message webcast.model.base.user.User
 */
export type User = Message<"webcast.model.base.user.User"> & {
    /**
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * @generated from field: int64 deprecated1 = 2;
     */
    deprecated1: bigint;
    /**
     * @generated from field: string nickname = 3;
     */
    nickname: string;
    /**
     * @generated from field: int32 deprecated2 = 4;
     */
    deprecated2: number;
    /**
     * @generated from field: string bio_description = 5;
     */
    bioDescription: string;
    /**
     * @generated from field: int32 deprecated3 = 6;
     */
    deprecated3: number;
    /**
     * @generated from field: int64 deprecated4 = 7;
     */
    deprecated4: bigint;
    /**
     * @generated from field: string deprecated5 = 8;
     */
    deprecated5: string;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_thumb = 9;
     */
    avatarThumb?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_medium = 10;
     */
    avatarMedium?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_large = 11;
     */
    avatarLarge?: ImageModel | undefined;
    /**
     * @generated from field: bool verified = 12;
     */
    verified: boolean;
    /**
     * @generated from field: int32 deprecated6 = 13;
     */
    deprecated6: number;
    /**
     * @generated from field: string deprecated7 = 14;
     */
    deprecated7: string;
    /**
     * @generated from field: int32 status = 15;
     */
    status: number;
    /**
     * @generated from field: int64 create_time = 16;
     */
    createTime: bigint;
    /**
     * @generated from field: int64 modify_time = 17;
     */
    modifyTime: bigint;
    /**
     * @generated from field: int32 secret = 18;
     */
    secret: number;
    /**
     * @generated from field: string share_qrcode_uri = 19;
     */
    shareQrcodeUri: string;
    /**
     * @generated from field: int32 deprecated8 = 20;
     */
    deprecated8: number;
    /**
     * @generated from field: repeated webcast.model.base.ImageModel badge_image_list = 21;
     */
    badgeImageList: ImageModel[];
    /**
     * @generated from field: webcast.model.base.user.FollowInfo follow_info = 22;
     */
    followInfo?: FollowInfo | undefined;
    /**
     * @generated from field: webcast.model.UserHonor pay_grade = 23;
     */
    payGrade?: UserHonor | undefined;
    /**
     * @generated from field: webcast.model.FansClubMember fans_club = 24;
     */
    fansClub?: FansClubMember | undefined;
    /**
     * @generated from field: webcast.model.BorderInfo border = 25;
     */
    border?: BorderInfo | undefined;
    /**
     * @generated from field: string special_id = 26;
     */
    specialId: string;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_border = 27;
     */
    avatarBorder?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel medal = 28;
     */
    medal?: ImageModel | undefined;
    /**
     * @generated from field: repeated webcast.model.base.ImageModel real_time_icons = 29;
     */
    realTimeIcons: ImageModel[];
    /**
     * @generated from field: repeated webcast.model.base.ImageModel new_real_time_icons = 30;
     */
    newRealTimeIcons: ImageModel[];
    /**
     * @generated from field: int32 top_vip_no = 31;
     */
    topVipNo: number;
    /**
     * @generated from field: webcast.model.UserAttr user_attr = 32;
     */
    userAttr?: UserAttr | undefined;
    /**
     * @generated from field: webcast.model.base.user.OwnRoom own_room = 33;
     */
    ownRoom?: OwnRoom | undefined;
    /**
     * @generated from field: int64 pay_score = 34;
     */
    payScore: bigint;
    /**
     * @generated from field: int64 ticket_count = 35;
     */
    ticketCount: bigint;
    /**
     * @generated from field: webcast.model.AnchorInfo anchor_info = 36;
     */
    anchorInfo?: AnchorInfo | undefined;
    /**
     * @generated from field: webcast.model.data.LinkmicStatus link_mic_stats = 37;
     */
    linkMicStats: LinkmicStatus;
    /**
     * @generated from field: string display_id = 38;
     */
    displayId: string;
    /**
     * @generated from field: bool with_commerce_permission = 39;
     */
    withCommercePermission: boolean;
    /**
     * @generated from field: bool with_fusion_shop_entry = 40;
     */
    withFusionShopEntry: boolean;
    /**
     * @generated from field: int64 deprecated21 = 41;
     */
    deprecated21: bigint;
    /**
     * @generated from field: webcast.model.AnchorLevel webcast_anchor_level = 42;
     */
    webcastAnchorLevel?: AnchorLevel | undefined;
    /**
     * @generated from field: string verified_content = 43;
     */
    verifiedContent: string;
    /**
     * @generated from field: webcast.model.Author author_stats = 44;
     */
    authorStats?: Author | undefined;
    /**
     * @generated from field: repeated webcast.model.base.user.User top_fans = 45;
     */
    topFans: User[];
    /**
     * @generated from field: string sec_uid = 46;
     */
    secUid: string;
    /**
     * @generated from field: int32 user_role = 47;
     */
    userRole: number;
    /**
     * @generated from field: bytes deprecated9 = 48;
     */
    deprecated9: Uint8Array;
    /**
     * @generated from field: webcast.model.ActivityRewardInfo activity_reward = 49;
     */
    activityReward?: ActivityRewardInfo | undefined;
    /**
     * @generated from field: bytes deprecated10 = 50;
     */
    deprecated10: Uint8Array;
    /**
     * @generated from field: bytes deprecated11 = 51;
     */
    deprecated11: Uint8Array;
    /**
     * @generated from field: webcast.model.base.ImageModel personal_card = 52;
     */
    personalCard?: ImageModel | undefined;
    /**
     * @generated from field: webcast.model.AuthenticationInfo authentication_info = 53;
     */
    authenticationInfo?: AuthenticationInfo | undefined;
    /**
     * @generated from field: int32 deprecated12 = 54;
     */
    deprecated12: number;
    /**
     * @generated from field: int32 deprecated13 = 55;
     */
    deprecated13: number;
    /**
     * @generated from field: bytes deprecated14 = 56;
     */
    deprecated14: Uint8Array;
    /**
     * @generated from field: repeated webcast.model.base.ImageModel media_badge_image_list = 57;
     */
    mediaBadgeImageList: ImageModel[];
    /**
     * @generated from field: int32 deprecated15 = 58;
     */
    deprecated15: number;
    /**
     * @generated from field: bytes user_vip_info = 59;
     */
    userVipInfo: Uint8Array;
    /**
     * @generated from field: repeated int64 commerce_webcast_config_ids = 60;
     */
    commerceWebcastConfigIds: bigint[];
    /**
     * @generated from field: repeated webcast.model.BorderInfo border_list = 61;
     */
    borderList: BorderInfo[];
    /**
     * @generated from field: webcast.model.base.user.ComboBadgeInfo combo_badge_info = 62;
     */
    comboBadgeInfo?: ComboBadgeInfo | undefined;
    /**
     * @generated from field: webcast.model.base.user.SubscribeInfo subscribe_info = 63;
     */
    subscribeInfo?: SubscribeInfo | undefined;
    /**
     * @generated from field: repeated webcast.model.base.user.BadgeStruct badge_list = 64;
     */
    badgeList: BadgeStruct[];
    /**
     * @generated from field: repeated int64 mint_type_label = 65;
     */
    mintTypeLabel: bigint[];
    /**
     * @generated from field: webcast.model.base.user.FansClubInfo fans_club_info = 66;
     */
    fansClubInfo?: FansClubInfo | undefined;
    /**
     * @generated from field: bool deprecated19 = 1001;
     */
    deprecated19: boolean;
    /**
     * @generated from field: bool allow_find_by_contacts = 1002;
     */
    allowFindByContacts: boolean;
    /**
     * @generated from field: bool allow_others_download_video = 1003;
     */
    allowOthersDownloadVideo: boolean;
    /**
     * @generated from field: bool allow_others_download_when_sharing_video = 1004;
     */
    allowOthersDownloadWhenSharingVideo: boolean;
    /**
     * @generated from field: bool allow_share_show_profile = 1005;
     */
    allowShareShowProfile: boolean;
    /**
     * @generated from field: bool allow_show_in_gossip = 1006;
     */
    allowShowInGossip: boolean;
    /**
     * @generated from field: bool allow_show_my_action = 1007;
     */
    allowShowMyAction: boolean;
    /**
     * @generated from field: bool allow_strange_comment = 1008;
     */
    allowStrangeComment: boolean;
    /**
     * @generated from field: bool allow_unfollower_comment = 1009;
     */
    allowUnfollowerComment: boolean;
    /**
     * @generated from field: bool allow_use_linkmic = 1010;
     */
    allowUseLinkmic: boolean;
    /**
     * @generated from field: webcast.model.AnchorLevel anchor_level = 1011;
     */
    anchorLevel?: AnchorLevel | undefined;
    /**
     * @generated from field: webcast.model.base.ImageModel avatar_jpg = 1012;
     */
    avatarJpg?: ImageModel | undefined;
    /**
     * @generated from field: string bg_img_url = 1013;
     */
    bgImgUrl: string;
    /**
     * @generated from field: string deprecated18 = 1014;
     */
    deprecated18: string;
    /**
     * @generated from field: bool deprecated16 = 1015;
     */
    deprecated16: boolean;
    /**
     * @generated from field: int32 block_status = 1016;
     */
    blockStatus: number;
    /**
     * @generated from field: int32 comment_restrict = 1017;
     */
    commentRestrict: number;
    /**
     * @generated from field: string constellation = 1018;
     */
    constellation: string;
    /**
     * @generated from field: int32 disable_ichat = 1019;
     */
    disableIchat: number;
    /**
     * @generated from field: int64 enable_ichat_img = 1020;
     */
    enableIchatImg: bigint;
    /**
     * @generated from field: int32 exp = 1021;
     */
    exp: number;
    /**
     * @generated from field: int64 fan_ticket_count = 1022;
     */
    fanTicketCount: bigint;
    /**
     * @generated from field: bool fold_stranger_chat = 1023;
     */
    foldStrangerChat: boolean;
    /**
     * @generated from field: int64 follow_status = 1024;
     */
    followStatus: bigint;
    /**
     * @generated from field: bool deprecated28 = 1025;
     */
    deprecated28: boolean;
    /**
     * @generated from field: string deprecated29 = 1026;
     */
    deprecated29: string;
    /**
     * @generated from field: int32 ichat_restrict_type = 1027;
     */
    ichatRestrictType: number;
    /**
     * @generated from field: string id_str = 1028;
     */
    idStr: string;
    /**
     * @generated from field: bool is_follower = 1029;
     */
    isFollower: boolean;
    /**
     * @generated from field: bool is_following = 1030;
     */
    isFollowing: boolean;
    /**
     * @generated from field: bool need_profile_guide = 1031;
     */
    needProfileGuide: boolean;
    /**
     * @generated from field: int64 pay_scores = 1032;
     */
    payScores: bigint;
    /**
     * @generated from field: bool push_comment_status = 1033;
     */
    pushCommentStatus: boolean;
    /**
     * @generated from field: bool push_digg = 1034;
     */
    pushDigg: boolean;
    /**
     * @generated from field: bool push_follow = 1035;
     */
    pushFollow: boolean;
    /**
     * @generated from field: bool push_friend_action = 1036;
     */
    pushFriendAction: boolean;
    /**
     * @generated from field: bool push_ichat = 1037;
     */
    pushIchat: boolean;
    /**
     * @generated from field: bool push_status = 1038;
     */
    pushStatus: boolean;
    /**
     * @generated from field: bool push_video_post = 1039;
     */
    pushVideoPost: boolean;
    /**
     * @generated from field: bool push_video_recommend = 1040;
     */
    pushVideoRecommend: boolean;
    /**
     * @generated from field: bytes stats = 1041;
     */
    stats: Uint8Array;
    /**
     * @generated from field: bool deprecated17 = 1042;
     */
    deprecated17: boolean;
    /**
     * @generated from field: string verified_reason = 1043;
     */
    verifiedReason: string;
    /**
     * @generated from field: bool with_car_management_permission = 1044;
     */
    withCarManagementPermission: boolean;
    /**
     * @generated from field: repeated webcast.model.LiveEventInfo upcoming_event_list = 1045;
     */
    upcomingEventList: LiveEventInfo[];
    /**
     * @generated from field: string scm_label = 1046;
     */
    scmLabel: string;
    /**
     * @generated from field: webcast.message.proto.EcommerceEntrance ecommerce_entrance = 1047;
     */
    ecommerceEntrance?: EcommerceEntrance | undefined;
    /**
     * @generated from field: bool is_block = 1048;
     */
    isBlock: boolean;
    /**
     * @generated from field: bool is_subscribe = 1090;
     */
    isSubscribe: boolean;
    /**
     * @generated from field: bool is_anchor_marked = 1091;
     */
    isAnchorMarked: boolean;
    /**
     * @generated from field: webcast.model.base.user.EnigmaInfo enigma_info = 1092;
     */
    enigmaInfo?: EnigmaInfo | undefined;
};
/**
 * Describes the message webcast.model.base.user.User.
 * Use `create(UserSchema)` to create a new message.
 */
export declare const UserSchema: GenMessage<User>;
//# sourceMappingURL=user_2_pb.d.ts.map