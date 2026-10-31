# Architecture

## Event flow

```text
TikTok LIVE                     Offline simulator / streamer commands
    |                                         |
    v                                         v
server/tiktok.js --------------------> server/engine.js
  normalize, reconnect                simulation, rules, deduplication
                                             |
                      +----------------------+-------------------+
                      v                      v                   v
               server/store.js        shared/wire.js       panel snapshots
               JSON + backup          compact snapshots          |
                                             |                   v
                                             v             public/panel.js
                                      WebSocket /ws/game
                                             |
                                             v
                                   shared/presentation.js
                                   interpolation + director
                                             |
                                             v
                                      public/game.js
                                      Three.js renderer
```

## Module map

| Location | Responsibility |
| --- | --- |
| `server/index.js` | Loopback HTTP server, WebSocket routing, command dispatch and simulation clock |
| `server/engine.js` | Participant lifecycle, race phases, movement, collisions, effects and ratings |
| `server/gift-effects.js` | Gift effect behavior |
| `server/tiktok.js` | Adapt upstream events, reconnect and refresh the room gift catalogue |
| `server/simulator.js` | Synthetic audience events for offline verification |
| `server/store.js` | Save and restore local JSON data with backup fallback |
| `server/avatars.js` | Retrieve and process participant avatars |
| `shared/config.js` | Defaults and settings/gift validation |
| `shared/track.js` | Track layout, lanes and surface coordinates |
| `shared/wire.js` | Compact game state encoding and decoding |
| `shared/presentation.js` | Snapshot buffering, motion interpolation and automatic shot selection |
| `public/game.js` | Coordinate scene rendering, HUD, animation and sound |
| `public/full-fleet.js` | Batch repeated full-detail vehicle geometry |
| `public/models.js`, `public/world.js` | Procedural models and track environment |
| `public/site.js`, `public/panel.js` | Browser shell and streamer controls |
| `desktop/` | Electron windows and visual verification scripts |
| `server/vendor/ttl-live/` | Upstream transport source, runtime build, schemas and notices |

## Timing and rendering

The simulation advances in fixed 1/30-second steps. State is sent at approximately 20 Hz for smaller races and 10 Hz above 100 participants; the full panel updates less frequently. These are implementation settings, not measured frame-rate guarantees.

The browser maintains a delayed presentation clock and interpolates received poses. The camera director prioritises leading racers, important gifts and finishes. Visible vehicles use batched repeated geometry while preserving individual identity and effect state.

## Verification boundaries

`tests/` covers game mechanics, participant entry/removal, gift repeats, persistence, presentation and local HTTP/WebSocket behavior. Visual checks in `desktop/` render the actual browser game and inspect scenes, UI bounds and effect state.

Neither suite proves availability of the external TikTok service or sustained performance while broadcasting. Test those separately on the target machine.
