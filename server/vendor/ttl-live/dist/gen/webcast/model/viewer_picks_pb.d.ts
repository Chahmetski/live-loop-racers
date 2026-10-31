import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ImageModel } from "./base/messages_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file webcast/model/viewer_picks.proto.
 */
export declare const file_webcast_model_viewer_picks: GenFile;
/**
 * @generated from message webcast.model.viewer_picks.ControlChaosInfo
 */
export type ControlChaosInfo = Message<"webcast.model.viewer_picks.ControlChaosInfo"> & {
    /**
     * @generated from field: int32 command_type = 1;
     */
    commandType: number;
    /**
     * @generated from field: repeated webcast.model.viewer_picks.HotKey hot_keys = 2;
     */
    hotKeys: HotKey[];
    /**
     * @generated from field: int32 action_type = 3;
     */
    actionType: number;
};
/**
 * Describes the message webcast.model.viewer_picks.ControlChaosInfo.
 * Use `create(ControlChaosInfoSchema)` to create a new message.
 */
export declare const ControlChaosInfoSchema: GenMessage<ControlChaosInfo>;
/**
 * @generated from message webcast.model.viewer_picks.GameTricksShortcut
 */
export type GameTricksShortcut = Message<"webcast.model.viewer_picks.GameTricksShortcut"> & {
    /**
     * @generated from field: repeated webcast.model.viewer_picks.HotKey hot_keys = 1;
     */
    hotKeys: HotKey[];
};
/**
 * Describes the message webcast.model.viewer_picks.GameTricksShortcut.
 * Use `create(GameTricksShortcutSchema)` to create a new message.
 */
export declare const GameTricksShortcutSchema: GenMessage<GameTricksShortcut>;
/**
 * @generated from message webcast.model.viewer_picks.GiftPick
 */
export type GiftPick = Message<"webcast.model.viewer_picks.GiftPick"> & {
    /**
     * @generated from field: int64 gift_id = 1;
     */
    giftId: bigint;
    /**
     * @generated from field: string customized_desc = 2;
     */
    customizedDesc: string;
    /**
     * @generated from field: webcast.model.base.ImageModel gift_icon = 3;
     */
    giftIcon?: ImageModel | undefined;
    /**
     * @generated from field: int64 gift_price = 4;
     */
    giftPrice: bigint;
    /**
     * @generated from field: int64 gift_pick_id = 5;
     */
    giftPickId: bigint;
    /**
     * @generated from field: string gift_pick_id_str = 6;
     */
    giftPickIdStr: string;
    /**
     * @generated from field: bool is_priority_request = 7;
     */
    isPriorityRequest: boolean;
    /**
     * @generated from field: int32 desc_source = 8;
     */
    descSource: number;
    /**
     * @generated from field: webcast.model.viewer_picks.GiftPickExtra extra = 9;
     */
    extra?: GiftPickExtra | undefined;
};
/**
 * Describes the message webcast.model.viewer_picks.GiftPick.
 * Use `create(GiftPickSchema)` to create a new message.
 */
export declare const GiftPickSchema: GenMessage<GiftPick>;
/**
 * @generated from message webcast.model.viewer_picks.GiftPickExtra
 */
export type GiftPickExtra = Message<"webcast.model.viewer_picks.GiftPickExtra"> & {
    /**
     * @generated from field: webcast.model.viewer_picks.GiftPickExtraGameTricks game_tricks = 1;
     */
    gameTricks?: GiftPickExtraGameTricks | undefined;
    /**
     * @generated from field: webcast.model.viewer_picks.GiftPickExtraGameInteraction game_interaction = 2;
     */
    gameInteraction?: GiftPickExtraGameInteraction | undefined;
};
/**
 * Describes the message webcast.model.viewer_picks.GiftPickExtra.
 * Use `create(GiftPickExtraSchema)` to create a new message.
 */
export declare const GiftPickExtraSchema: GenMessage<GiftPickExtra>;
/**
 * @generated from message webcast.model.viewer_picks.GiftPickExtraGameInteraction
 */
export type GiftPickExtraGameInteraction = Message<"webcast.model.viewer_picks.GiftPickExtraGameInteraction"> & {
    /**
     * @generated from field: webcast.model.viewer_picks.GiftPickExtraGameInteractionStorage storage = 1;
     */
    storage?: GiftPickExtraGameInteractionStorage | undefined;
    /**
     * @generated from field: webcast.model.viewer_picks.GiftPickExtraGameInteractionExternal external = 2;
     */
    external?: GiftPickExtraGameInteractionExternal | undefined;
};
/**
 * Describes the message webcast.model.viewer_picks.GiftPickExtraGameInteraction.
 * Use `create(GiftPickExtraGameInteractionSchema)` to create a new message.
 */
export declare const GiftPickExtraGameInteractionSchema: GenMessage<GiftPickExtraGameInteraction>;
/**
 * @generated from message webcast.model.viewer_picks.GiftPickExtraGameInteractionExternal
 */
export type GiftPickExtraGameInteractionExternal = Message<"webcast.model.viewer_picks.GiftPickExtraGameInteractionExternal"> & {};
/**
 * Describes the message webcast.model.viewer_picks.GiftPickExtraGameInteractionExternal.
 * Use `create(GiftPickExtraGameInteractionExternalSchema)` to create a new message.
 */
export declare const GiftPickExtraGameInteractionExternalSchema: GenMessage<GiftPickExtraGameInteractionExternal>;
/**
 * @generated from message webcast.model.viewer_picks.GiftPickExtraGameInteractionStorage
 */
export type GiftPickExtraGameInteractionStorage = Message<"webcast.model.viewer_picks.GiftPickExtraGameInteractionStorage"> & {
    /**
     * @generated from field: string instruction = 1;
     */
    instruction: string;
    /**
     * @generated from field: string instruction_desc_key = 2;
     */
    instructionDescKey: string;
};
/**
 * Describes the message webcast.model.viewer_picks.GiftPickExtraGameInteractionStorage.
 * Use `create(GiftPickExtraGameInteractionStorageSchema)` to create a new message.
 */
export declare const GiftPickExtraGameInteractionStorageSchema: GenMessage<GiftPickExtraGameInteractionStorage>;
/**
 * @generated from message webcast.model.viewer_picks.GiftPickExtraGameTricks
 */
export type GiftPickExtraGameTricks = Message<"webcast.model.viewer_picks.GiftPickExtraGameTricks"> & {
    /**
     * @generated from field: webcast.model.viewer_picks.GiftPickExtraGameTricksStorage storage = 1;
     */
    storage?: GiftPickExtraGameTricksStorage | undefined;
    /**
     * @generated from field: webcast.model.viewer_picks.GiftPickExtraGameTricksExternal external = 2;
     */
    external?: GiftPickExtraGameTricksExternal | undefined;
};
/**
 * Describes the message webcast.model.viewer_picks.GiftPickExtraGameTricks.
 * Use `create(GiftPickExtraGameTricksSchema)` to create a new message.
 */
export declare const GiftPickExtraGameTricksSchema: GenMessage<GiftPickExtraGameTricks>;
/**
 * @generated from message webcast.model.viewer_picks.GiftPickExtraGameTricksExternal
 */
export type GiftPickExtraGameTricksExternal = Message<"webcast.model.viewer_picks.GiftPickExtraGameTricksExternal"> & {};
/**
 * Describes the message webcast.model.viewer_picks.GiftPickExtraGameTricksExternal.
 * Use `create(GiftPickExtraGameTricksExternalSchema)` to create a new message.
 */
export declare const GiftPickExtraGameTricksExternalSchema: GenMessage<GiftPickExtraGameTricksExternal>;
/**
 * @generated from message webcast.model.viewer_picks.GiftPickExtraGameTricksStorage
 */
export type GiftPickExtraGameTricksStorage = Message<"webcast.model.viewer_picks.GiftPickExtraGameTricksStorage"> & {
    /**
     * @generated from field: int32 game_tricks_type = 1;
     */
    gameTricksType: number;
    /**
     * @generated from field: webcast.model.viewer_picks.ControlChaosInfo control_chaos_info = 2;
     */
    controlChaosInfo?: ControlChaosInfo | undefined;
};
/**
 * Describes the message webcast.model.viewer_picks.GiftPickExtraGameTricksStorage.
 * Use `create(GiftPickExtraGameTricksStorageSchema)` to create a new message.
 */
export declare const GiftPickExtraGameTricksStorageSchema: GenMessage<GiftPickExtraGameTricksStorage>;
/**
 * @generated from message webcast.model.viewer_picks.GiftPickWithScore
 */
export type GiftPickWithScore = Message<"webcast.model.viewer_picks.GiftPickWithScore"> & {
    /**
     * @generated from field: webcast.model.viewer_picks.GiftPick gift_pick = 1;
     */
    giftPick?: GiftPick | undefined;
    /**
     * @generated from field: int64 score = 2;
     */
    score: bigint;
};
/**
 * Describes the message webcast.model.viewer_picks.GiftPickWithScore.
 * Use `create(GiftPickWithScoreSchema)` to create a new message.
 */
export declare const GiftPickWithScoreSchema: GenMessage<GiftPickWithScore>;
/**
 * @generated from message webcast.model.viewer_picks.HotKey
 */
export type HotKey = Message<"webcast.model.viewer_picks.HotKey"> & {
    /**
     * @generated from field: int32 key_type = 1;
     */
    keyType: number;
    /**
     * @generated from field: repeated webcast.model.viewer_picks.KeyBoardHotKey keyboard_keys = 2;
     */
    keyboardKeys: KeyBoardHotKey[];
    /**
     * @generated from field: repeated webcast.model.viewer_picks.MouseHotKey mouse_keys = 3;
     */
    mouseKeys: MouseHotKey[];
};
/**
 * Describes the message webcast.model.viewer_picks.HotKey.
 * Use `create(HotKeySchema)` to create a new message.
 */
export declare const HotKeySchema: GenMessage<HotKey>;
/**
 * @generated from message webcast.model.viewer_picks.KeyBoardHotKey
 */
export type KeyBoardHotKey = Message<"webcast.model.viewer_picks.KeyBoardHotKey"> & {
    /**
     * @generated from field: int32 key_code = 1;
     */
    keyCode: number;
    /**
     * @generated from field: string key_name = 2;
     */
    keyName: string;
};
/**
 * Describes the message webcast.model.viewer_picks.KeyBoardHotKey.
 * Use `create(KeyBoardHotKeySchema)` to create a new message.
 */
export declare const KeyBoardHotKeySchema: GenMessage<KeyBoardHotKey>;
/**
 * @generated from message webcast.model.viewer_picks.MouseHotKey
 */
export type MouseHotKey = Message<"webcast.model.viewer_picks.MouseHotKey"> & {
    /**
     * @generated from field: int32 mouse_type = 1;
     */
    mouseType: number;
};
/**
 * Describes the message webcast.model.viewer_picks.MouseHotKey.
 * Use `create(MouseHotKeySchema)` to create a new message.
 */
export declare const MouseHotKeySchema: GenMessage<MouseHotKey>;
/**
 * @generated from message webcast.model.viewer_picks.ProfileExtra
 */
export type ProfileExtra = Message<"webcast.model.viewer_picks.ProfileExtra"> & {
    /**
     * @generated from field: webcast.model.viewer_picks.ProfileExtraGameTricks game_tricks = 1;
     */
    gameTricks?: ProfileExtraGameTricks | undefined;
    /**
     * @generated from field: webcast.model.viewer_picks.ProfileExtraGameInteraction game_interaction = 2;
     */
    gameInteraction?: ProfileExtraGameInteraction | undefined;
};
/**
 * Describes the message webcast.model.viewer_picks.ProfileExtra.
 * Use `create(ProfileExtraSchema)` to create a new message.
 */
export declare const ProfileExtraSchema: GenMessage<ProfileExtra>;
/**
 * @generated from message webcast.model.viewer_picks.ProfileExtraGameInteraction
 */
export type ProfileExtraGameInteraction = Message<"webcast.model.viewer_picks.ProfileExtraGameInteraction"> & {
    /**
     * @generated from field: webcast.model.viewer_picks.ProfileExtraGameInteractionStorage storage = 1;
     */
    storage?: ProfileExtraGameInteractionStorage | undefined;
    /**
     * @generated from field: webcast.model.viewer_picks.ProfileExtraGameInteractionExternal external = 2;
     */
    external?: ProfileExtraGameInteractionExternal | undefined;
};
/**
 * Describes the message webcast.model.viewer_picks.ProfileExtraGameInteraction.
 * Use `create(ProfileExtraGameInteractionSchema)` to create a new message.
 */
export declare const ProfileExtraGameInteractionSchema: GenMessage<ProfileExtraGameInteraction>;
/**
 * @generated from message webcast.model.viewer_picks.ProfileExtraGameInteractionExternal
 */
export type ProfileExtraGameInteractionExternal = Message<"webcast.model.viewer_picks.ProfileExtraGameInteractionExternal"> & {
    /**
     * @generated from field: string game_name = 1;
     */
    gameName: string;
    /**
     * @generated from field: string game_name_key = 2;
     */
    gameNameKey: string;
    /**
     * @generated from field: string game_icon_url = 3;
     */
    gameIconUrl: string;
    /**
     * @generated from field: string game_tag_id = 4;
     */
    gameTagId: string;
};
/**
 * Describes the message webcast.model.viewer_picks.ProfileExtraGameInteractionExternal.
 * Use `create(ProfileExtraGameInteractionExternalSchema)` to create a new message.
 */
export declare const ProfileExtraGameInteractionExternalSchema: GenMessage<ProfileExtraGameInteractionExternal>;
/**
 * @generated from message webcast.model.viewer_picks.ProfileExtraGameInteractionStorage
 */
export type ProfileExtraGameInteractionStorage = Message<"webcast.model.viewer_picks.ProfileExtraGameInteractionStorage"> & {
    /**
     * @generated from field: string game_id = 1;
     */
    gameId: string;
    /**
     * @generated from field: string template_id = 2;
     */
    templateId: string;
};
/**
 * Describes the message webcast.model.viewer_picks.ProfileExtraGameInteractionStorage.
 * Use `create(ProfileExtraGameInteractionStorageSchema)` to create a new message.
 */
export declare const ProfileExtraGameInteractionStorageSchema: GenMessage<ProfileExtraGameInteractionStorage>;
/**
 * @generated from message webcast.model.viewer_picks.ProfileExtraGameTricks
 */
export type ProfileExtraGameTricks = Message<"webcast.model.viewer_picks.ProfileExtraGameTricks"> & {
    /**
     * @generated from field: webcast.model.viewer_picks.ProfileExtraGameTricksStorage storage = 1;
     */
    storage?: ProfileExtraGameTricksStorage | undefined;
    /**
     * @generated from field: webcast.model.viewer_picks.ProfileExtraGameTricksExternal external = 2;
     */
    external?: ProfileExtraGameTricksExternal | undefined;
};
/**
 * Describes the message webcast.model.viewer_picks.ProfileExtraGameTricks.
 * Use `create(ProfileExtraGameTricksSchema)` to create a new message.
 */
export declare const ProfileExtraGameTricksSchema: GenMessage<ProfileExtraGameTricks>;
/**
 * @generated from message webcast.model.viewer_picks.ProfileExtraGameTricksExternal
 */
export type ProfileExtraGameTricksExternal = Message<"webcast.model.viewer_picks.ProfileExtraGameTricksExternal"> & {
    /**
     * @generated from field: string game_name = 1;
     */
    gameName: string;
    /**
     * @generated from field: string game_name_key = 2;
     */
    gameNameKey: string;
    /**
     * @generated from field: string game_icon_url = 3;
     */
    gameIconUrl: string;
};
/**
 * Describes the message webcast.model.viewer_picks.ProfileExtraGameTricksExternal.
 * Use `create(ProfileExtraGameTricksExternalSchema)` to create a new message.
 */
export declare const ProfileExtraGameTricksExternalSchema: GenMessage<ProfileExtraGameTricksExternal>;
/**
 * @generated from message webcast.model.viewer_picks.ProfileExtraGameTricksStorage
 */
export type ProfileExtraGameTricksStorage = Message<"webcast.model.viewer_picks.ProfileExtraGameTricksStorage"> & {
    /**
     * @generated from field: int32 game_tricks_type = 1;
     */
    gameTricksType: number;
    /**
     * @generated from field: int64 game_tag_id = 2;
     */
    gameTagId: bigint;
    /**
     * @generated from field: webcast.model.viewer_picks.GameTricksShortcut game_tricks_shortcut = 3;
     */
    gameTricksShortcut?: GameTricksShortcut | undefined;
};
/**
 * Describes the message webcast.model.viewer_picks.ProfileExtraGameTricksStorage.
 * Use `create(ProfileExtraGameTricksStorageSchema)` to create a new message.
 */
export declare const ProfileExtraGameTricksStorageSchema: GenMessage<ProfileExtraGameTricksStorage>;
/**
 * @generated from message webcast.model.viewer_picks.ViewerPickAnchorParam
 */
export type ViewerPickAnchorParam = Message<"webcast.model.viewer_picks.ViewerPickAnchorParam"> & {
    /**
     * @generated from field: bool viewer_wishes_use_new_setup_process = 1;
     */
    viewerWishesUseNewSetupProcess: boolean;
    /**
     * @generated from field: bool viewer_wishes_queue_mode_enable = 2;
     */
    viewerWishesQueueModeEnable: boolean;
    /**
     * @generated from field: bool viewer_wishes_priority_request_enable = 3;
     */
    viewerWishesPriorityRequestEnable: boolean;
    /**
     * @generated from field: bool integrate_vw_into_liveboard = 4;
     */
    integrateVwIntoLiveboard: boolean;
};
/**
 * Describes the message webcast.model.viewer_picks.ViewerPickAnchorParam.
 * Use `create(ViewerPickAnchorParamSchema)` to create a new message.
 */
export declare const ViewerPickAnchorParamSchema: GenMessage<ViewerPickAnchorParam>;
/**
 * @generated from message webcast.model.viewer_picks.ViewerPicksHeaderImage
 */
export type ViewerPicksHeaderImage = Message<"webcast.model.viewer_picks.ViewerPicksHeaderImage"> & {
    /**
     * @generated from field: webcast.model.base.ImageModel image = 1;
     */
    image?: ImageModel | undefined;
    /**
     * @generated from field: string schema_url = 2;
     */
    schemaUrl: string;
};
/**
 * Describes the message webcast.model.viewer_picks.ViewerPicksHeaderImage.
 * Use `create(ViewerPicksHeaderImageSchema)` to create a new message.
 */
export declare const ViewerPicksHeaderImageSchema: GenMessage<ViewerPicksHeaderImage>;
/**
 * @generated from message webcast.model.viewer_picks.ViewerPicksInfo
 */
export type ViewerPicksInfo = Message<"webcast.model.viewer_picks.ViewerPicksInfo"> & {
    /**
     * @generated from field: int64 viewer_picks_id = 1;
     */
    viewerPicksId: bigint;
    /**
     * @generated from field: repeated webcast.model.viewer_picks.GiftPickWithScore gift_pick_list = 2;
     */
    giftPickList: GiftPickWithScore[];
    /**
     * @generated from field: int32 status = 3;
     */
    status: number;
    /**
     * @generated from field: int64 round_duration_sec = 4;
     */
    roundDurationSec: bigint;
    /**
     * @generated from field: int64 start_time_ms = 5;
     */
    startTimeMs: bigint;
    /**
     * @generated from field: int64 end_time_ms = 6;
     */
    endTimeMs: bigint;
    /**
     * @generated from field: bool has_duration = 7;
     */
    hasDuration: boolean;
    /**
     * @generated from field: bool has_score = 8;
     */
    hasScore: boolean;
    /**
     * @generated from field: bool enable_auto_restart = 9;
     */
    enableAutoRestart: boolean;
    /**
     * @generated from field: bool started_from_auto_restart = 10;
     */
    startedFromAutoRestart: boolean;
    /**
     * @generated from field: string viewer_picks_id_str = 11;
     */
    viewerPicksIdStr: string;
    /**
     * @generated from field: int32 display_mode = 12;
     */
    displayMode: number;
    /**
     * @generated from field: int32 scene = 13;
     */
    scene: number;
    /**
     * @generated from field: webcast.model.viewer_picks.ViewerPicksHeaderImage header_image = 14;
     */
    headerImage?: ViewerPicksHeaderImage | undefined;
    /**
     * @generated from field: webcast.model.viewer_picks.ViewerPickAnchorParam anchor_param = 15;
     */
    anchorParam?: ViewerPickAnchorParam | undefined;
    /**
     * @generated from field: webcast.model.viewer_picks.ProfileExtra extra = 16;
     */
    extra?: ProfileExtra | undefined;
    /**
     * @generated from field: bool started_from_auto_start = 17;
     */
    startedFromAutoStart: boolean;
};
/**
 * Describes the message webcast.model.viewer_picks.ViewerPicksInfo.
 * Use `create(ViewerPicksInfoSchema)` to create a new message.
 */
export declare const ViewerPicksInfoSchema: GenMessage<ViewerPicksInfo>;
//# sourceMappingURL=viewer_picks_pb.d.ts.map