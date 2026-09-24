# CHANGELOG_UPGRADE.md

## Добавлено / исправлено

- Добавлен / обновлён текущий стандарт доступа WOW SCHOOL: `PIN_CODE.js` → `pin-gate.js` → `app.js`, PIN `1020`.
- Добавлены `favicon.png` и `favicon.ico`; favicon подключён в основной и standalone-версии.
- Добавлен отдельный безопасный слой `upgrade-v4.js`: исходный `app.js` не переписывался.
- Добавлены уместные student-facing helpers под левую визуальную область.
- Добавлен раскрываемый **«Открыть текст диалога»** из уже существующего dialogue data; текст не выдумывался.
- Existing British English TTS не менялся: новые helper labels не добавляются в аудио.
- Добавлены скрытые QA-shortcuts: `Alt + Shift + ←/→` для задания и `Alt + Ctrl + ←/→` для блока.
- Добавлены / унифицированы `focus-visible`, мягкие hover / active states, короткий success pulse и лёгкое появление screen content.
- Сохранён reduced-motion режим; новый длинный helper прокручивается внутри собственной области.
- Standalone: создана standalone-версия на базе исходного app.js / styles.css.

## Сознательно не менялось

- Тема и порядок 7 учебных блоков.
- Типы упражнений и их working mechanics.
- Educational data, correct answers и scoring.
- Исходный `app.js` — сохранён byte-for-byte.
- Существующие изображения, их filenames и содержимое.
- Working British English TTS / voice provider logic.
- Progress, results, localStorage и reset logic.
- Canvas `1600×900` и существующий fit logic.
- Глобальная палитра, WOW SCHOOL shell и визуальная идентичность модуля.
- Текущий folder / GitHub path `Beginner_Unit3A_Where_are_my_keys`.

### Safe visual polish

Только локальный Level B: состояния существующих интерактивных элементов, клавиатурный focus, короткая реакция на правильный ответ, мягкий entrance и аккуратное раскрытие новых helpers. Structural redesign не выполнялся.

## Local fix · 2026-09-24
- corrected `preview.png` so the module card shows the branded intro preview instead of a mismatched image;
- forced the module to open from the intro / welcome slide on load;
- removed the success-pulse / screen-in animations that caused slight shaking / flicker after a correct answer;
- kept existing content, visuals, and task logic unchanged.

## Targeted repair · preview / welcome / stability
- Module now always opens on the welcome slide, while saved answers remain stored.
- Added a new unique preview filename (`preview-unit3a-v2.png`) and updated OG/Twitter/oEmbed references to bypass cached wrong thumbnails.
- Removed shake/scale feedback and transform-based interaction movement that could make the whole module look like it was trembling after an answer.

## Final preview correction
- Replaced the module social/embed preview with the approved branded Unit 3A cover.
- Updated Open Graph, Twitter card, and oEmbed thumbnail references to `preview-unit3a-final.png?v=4`.
- `preview.png` now contains the same approved artwork for compatibility with platforms that still request the legacy filename.
