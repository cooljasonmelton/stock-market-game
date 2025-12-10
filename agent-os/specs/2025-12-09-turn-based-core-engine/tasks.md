# Task Breakdown: Turn-based core engine (scoped reset)

## Overview
Total Tasks: 6

## Task List

### Tooling & Scaffolding

#### Task Group 1: Toolchain setup
**Dependencies:** None

- [x] 1.0 Add `package.json` with scripts for `test`, `test:watch`, and `typecheck`
- [x] 1.1 Add `tsconfig.json` with strict TS settings and Vitest globals
- [x] 1.2 Add `vitest.config.ts` for Node test environment
- [x] 1.3 Add `.gitignore` for node_modules, builds, env, editor files
- [x] 1.4 Include `package-lock.json` in version control

**Acceptance Criteria:**
- Tooling files exist and lint/typecheck/test scripts are available.
- Lockfile is tracked for deterministic installs.

### Backlog Rescope

#### Task Group 2: Backlog and placeholder hygiene
**Dependencies:** Task Group 1

- [x] 2.0 Create `docs/backlog.md` outlining smaller vertical slices (dice/movement, square mechanics, price tracker, win, persistence)
- [x] 2.1 Add placeholder source file to satisfy TS globs until new specs add code
- [x] 2.2 Move backlog into `docs/` folder for easy reference

**Acceptance Criteria:**
- Backlog reflects the new staged approach pairing logic + minimal UI.
- TS config has at least one source file to avoid “no inputs” warnings.

### Deferral of Engine Implementation

#### Task Group 3: Defer engine to new specs
**Dependencies:** Task Groups 1-2

- [x] 3.0 Remove placeholder engine implementation and tests
- [ ] 3.1 Capture a note in future specs that engine/board/price logic will be rebuilt in smaller slices

**Acceptance Criteria:**
- Repo is clean of the earlier engine stub.
- Future work will be initiated as new, smaller specs per backlog.

## Execution Order
Recommended sequence: Task Group 1 → 2 → 3.
