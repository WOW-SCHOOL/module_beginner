# WOW SCHOOL · Beginner · Unit 3B · Souvenirs

Interactive review module based on English File 4th Edition Beginner, Unit 3B.

## GitHub repository structure
This archive contains **one module folder** only. Upload the whole folder `Beginner_Unit3B_Souvenirs/` into the root of the repository `WOW-SCHOOL/module_beginner`.

The repository can contain many Beginner modules side by side, for example:

- `Beginner_Unit1A_A_cappuccino_please/`
- `Beginner_Unit2A_Are_you_on_holiday/`
- `Beginner_Revise_and_Check_1_2/`
- `Beginner_Unit3B_Souvenirs/`

When GitHub Pages is enabled for the repository root, this module URL is expected to be:
`https://wow-school.github.io/module_beginner/Beginner_Unit3B_Souvenirs/`

## Module structure
7 blocks + Results:
1. Souvenir Vocabulary — 8 tasks
2. This, That, These, Those — 10 tasks
3. Price Detective — 10 listening tasks
4. Souvenir Shop Challenge — 8 tasks
5. Reading Mission — 6 tasks
6. Pronunciation & Rhythm — 10 tasks
7. Listening Mission — 8 tasks across two new dialogues

Total: **60 scored elements**.

## Audio
The established WOW SCHOOL online British English synthesis is used. Listening dialogues are played **line by line / in short chunks** for stable playback. The module does not use local WAV files and does not switch to a browser robot voice.

## Images
This is the exercise-first build requested by the user. Final images are intentionally not included yet. The expected filenames and generation prompts are in `VISUAL_MANIFEST.json` and `IMAGE_PROMPTS.md`.

Important layout rule for future images: every image must fit **fully inside its internal container** without cropping, stretching, overlap, or hidden faces/hands/objects. Use `object-fit: contain`.

## Upgrade v4 retrofit

- Подключён текущий PIN-экран WOW SCHOOL (`PIN_CODE.js` → `pin-gate.js` → `app.js`), PIN `1020`.
- Добавлены favicon WS и отдельный безопасный слой `upgrade-v4.js`.
- Исходный `app.js`, учебный контент, answers, scoring, изображения и TTS не переписывались.
- 7 blocks; shop transcript added from existing script lines.
