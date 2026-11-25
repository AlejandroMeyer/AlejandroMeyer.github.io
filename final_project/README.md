# My AI Second Brain

Final project for *New Frontiers of AI* (Master DBM, Business School Pforzheim) by Alejandro Meyer.

A personal knowledge system based on two books by Tiago Forte, *Building a Second Brain* and *The PARA Method*, prepared so an AI agent (Claude, ChatGPT, Codex…) can work inside it.

**Live demo:** open `index.html` (3D floating islands, controllable with your hands through MediaPipe).

## Structure

```
final_project/
├── 0_inbox/        capture everything here first
├── 1_projects/     short-term goals with a deadline
├── 2_areas/        ongoing responsibilities
├── 3_resources/    topics and reference material
├── 4_archive/      inactive items
├── skills/         reusable agent instructions
├── style/          how notes are written
├── AGENTS.md       rules for any AI agent
├── CLAUDE.md       rules for Claude Code
└── README.md       this file
```

## The method

- **PARA** organizes information by *actionability*, not by topic: Projects → Areas → Resources → Archive.
- **CODE** is the workflow: **C**apture → **O**rganize → **D**istill → **E**xpress.

## Status

This is the initial version: the folder structure and the agent files are in place, the folders are empty.

## Future ideas

1. Fill the `skills/` folder (capture, weekly review, distill, express).
2. Connect the vault to an agent with scheduled tasks (for example, a weekly inbox review every Sunday).
3. Sync with Obsidian so the notes can be read on phone and laptop.
4. Add a search layer (embeddings) so the agent can answer questions from my own notes.
5. Feed the 3D islands with the real number of notes per folder.
