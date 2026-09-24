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
- Текущий folder / GitHub path `Beginner_Unit5A_A_big_breakfast`.

### Safe visual polish

Только локальный Level B: состояния существующих интерактивных элементов, клавиатурный focus, короткая реакция на правильный ответ, мягкий entrance и аккуратное раскрытие новых helpers. Structural redesign не выполнялся.


## Исправление размещения helpers · Unit 5A
- Подсказки и transcript больше не вставляются после render поверх готового layout.
- Helpers встроены в левую `visualColumn` непосредственно в `app.js`, как в ранее обновлённых модулях.
- Раскрытая подсказка имеет ограниченную внутреннюю высоту и собственный scroll; она не пересекает аудиокнопку и footer.
- Для Listening Mission transcript остаётся привязанным к текущему Dialogue 1 / 2.
- Добавлен cache-busting для `styles.css`, `app.js` и `upgrade-v4.js`, чтобы iframe / GitHub Pages не смешивал старый CSS с новым JS.
