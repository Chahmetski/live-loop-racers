import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file webcast/model/data/multi_guest_play.proto.
 */
export declare const file_webcast_model_data_multi_guest_play: GenFile;
/**
 * @generated from enum webcast.model.data.multi_guest_play.PlayScene
 */
export declare enum PlayScene {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: COUNTDOWN_FOR_ALL = 1;
     */
    COUNTDOWN_FOR_ALL = 1,
    /**
     * @generated from enum value: COUNTDOWN_FOR_SINGLE = 2;
     */
    COUNTDOWN_FOR_SINGLE = 2,
    /**
     * @generated from enum value: LIVE_SHOW = 3;
     */
    LIVE_SHOW = 3,
    /**
     * @generated from enum value: AIGC = 4;
     */
    AIGC = 4,
    /**
     * @generated from enum value: KARAOKE = 5;
     */
    KARAOKE = 5,
    /**
     * @generated from enum value: DRAW_GUESS = 6;
     */
    DRAW_GUESS = 6,
    /**
     * @generated from enum value: ENLARGE_GRID = 7;
     */
    ENLARGE_GRID = 7,
    /**
     * @generated from enum value: GIFT_PRIORITY_LINK = 8;
     */
    GIFT_PRIORITY_LINK = 8,
    /**
     * @generated from enum value: GIFT_THRESHOLD_LINK = 9;
     */
    GIFT_THRESHOLD_LINK = 9,
    /**
     * @generated from enum value: NOTICE_BOARD = 10;
     */
    NOTICE_BOARD = 10,
    /**
     * @generated from enum value: PLAY_BOOK = 11;
     */
    PLAY_BOOK = 11,
    /**
     * @generated from enum value: GUEST_SHOWDOWN = 12;
     */
    GUEST_SHOWDOWN = 12
}
/**
 * Describes the enum webcast.model.data.multi_guest_play.PlayScene.
 */
export declare const PlaySceneSchema: GenEnum<PlayScene>;
/**
 * @generated from enum webcast.model.data.multi_guest_play.PlayUserTag
 */
export declare enum PlayUserTag {
    /**
     * @generated from enum value: PLAY_USER_TAG_UNKNOWN = 0;
     */
    PLAY_USER_TAG_UNKNOWN = 0,
    /**
     * @generated from enum value: GUEST_SHOWDOWN_NORMAL = 1;
     */
    GUEST_SHOWDOWN_NORMAL = 1,
    /**
     * @generated from enum value: GUEST_SHOWDOWN_WINNER = 2;
     */
    GUEST_SHOWDOWN_WINNER = 2,
    /**
     * @generated from enum value: GUEST_SHOWDOWN_LOSER = 3;
     */
    GUEST_SHOWDOWN_LOSER = 3
}
/**
 * Describes the enum webcast.model.data.multi_guest_play.PlayUserTag.
 */
export declare const PlayUserTagSchema: GenEnum<PlayUserTag>;
//# sourceMappingURL=multi_guest_play_pb.d.ts.map