# Product Mission

## Pitch
Stock Market 1963 Digital is a turn-based board game adaptation that helps casual board game groups and nostalgic fans play the original Whitman Stock Market Game on a single device by providing automated rules enforcement, stateful turn tracking, and one-click saves/resumes.

## Users

### Primary Customers
- Local game-night groups: Friends or families gathered around one laptop/tablet who want fast setup and shared play.
- Nostalgic strategy players: Fans of classic finance/strategy titles looking for an authentic but streamlined 1963 experience.

### User Personas
**Game Night Organizer** (25-45)  
- **Role:** Hosts friends/family game sessions.  
- **Context:** Uses a shared laptop/tablet; limited time to teach rules.  
- **Pain Points:** Long setup, rule lookups, tracking cash/positions manually.  
- **Goals:** Start play in minutes, keep turns moving, avoid disputes on prices/rules.

**Nostalgic Collector** (30-60)  
- **Role:** Owns or remembers the 1963 board game; wants a faithful digital version.  
- **Context:** Plays locally with a small group; values authenticity.  
- **Pain Points:** Physical components wear/lose pieces; no easy save/resume; price table math slows play.  
- **Goals:** Accurate board + price ladder, automated calculations, ability to pause and resume any time.

## The Problem

### Slow, error-prone physical play
Manual rule lookups, price-table math, and handwritten tracking slow turns and cause disputes, stretching games by 20-30 minutes and creating friction for new players.  
**Our Solution:** A faithful digital board with automated dice, movement, price updates, dividends/splits, and instant state validation to keep turns fast and dispute-free.

## Differentiators

### Faithful automation of the 1963 board
Unlike generic stock simulators, we mirror the original board layout and price ladder while automating every square’s effect. This keeps the nostalgic feel but removes rule lookup and math overhead.

### Engine-first architecture
Unlike UI-bound hobby projects, all game logic lives in pure TypeScript functions decoupled from React. This ensures consistency across web, future mobile, and upcoming online multiplayer, and makes testing straightforward.

## Key Features

### Core Features
- **Playable stock market engine:** Pure TypeScript turn system covering dice, board movement, square effects (price changes, dividends, splits, penalties), and win conditions.
- **Interactive board UI:** Visual board with player positions and square highlights; landing triggers show applied rules without manual lookup.
- **Persistent hot-seat play:** Local multiplayer on one device with auto-save/resume (localStorage) after every action to prevent progress loss.

### Collaboration Features
- **Pass-and-play turn flow:** Clear prompts for whose turn it is, with on-screen activity log to reduce disputes. 
- **Inline rule helper:** Tap/click any square to view its effect and related price ladder entries for quick teaching and mid-game reminders.

### Advanced Features
- **Portfolio and market dashboard:** Live cash/holdings view plus current prices keyed to the 1963 ladder for quick buy/sell decisions.
- **Join-code online play (v2):** Supabase-powered rooms for remote multiplayer with shared state sync and turn order enforcement.
