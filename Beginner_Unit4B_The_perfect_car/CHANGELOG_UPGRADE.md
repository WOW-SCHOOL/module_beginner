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
- Standalone: patched existing external standalone.

## Сознательно не менялось

- Тема и порядок 8 учебных блоков.
- Типы упражнений и их working mechanics.
- Educational data, correct answers и scoring.
- Исходный `app.js` — сохранён byte-for-byte.
- Существующие изображения, их filenames и содержимое.
- Working British English TTS / voice provider logic.
- Progress, results, localStorage и reset logic.
- Canvas `1600×900` и существующий fit logic.
- Глобальная палитра, WOW SCHOOL shell и визуальная идентичность модуля.
- Текущий folder / GitHub path `Beginner_Unit4B_The_perfect_car`.

### Safe visual polish

Только локальный Level B: состояния существующих интерактивных элементов, клавиатурный focus, короткая реакция на правильный ответ, мягкий entrance и аккуратное раскрытие новых helpers. Structural redesign не выполнялся.

## Targeted repair · Garage Sort + Test Drive
- Block 3 rebuilt as a readable vertical sorting workspace with three tall category columns.
- Word cards now start in a deliberately mixed order instead of grouped by category.
- Selected-card and drop-target states made explicit; wrong category keeps the card selected for another try.
- Block 8 rebuilt as a full two-panel game: route + dice on the left, checkpoint sentence builder on the right.
- Added explicit Clear / Check controls; removed auto-check jump and overlapping compact layout.
- Removed shake/scale feedback from answer states so the 1600×900 module remains visually stable.
