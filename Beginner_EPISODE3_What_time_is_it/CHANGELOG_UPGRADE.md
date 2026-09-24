# CHANGELOG_UPGRADE.md

## Добавлено / исправлено

- Добавлен / обновлён текущий стандарт доступа WOW SCHOOL: `PIN_CODE.js` → `pin-gate.js` → `app.js`, PIN `1020`.
- Добавлены `favicon.png` и `favicon.ico`; favicon подключён в основной и standalone-версии.
- Добавлен отдельный безопасный слой `upgrade-v4.js`: исходный `app.js` не переписывался.
- Добавлены уместные student-facing helpers под левую визуальную область.
- Существующая transcript / dialogue-support механика сохранена и не дублировалась.
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
- Текущий folder / GitHub path `Beginner_EPISODE3_What_time_is_it`.

### Safe visual polish

Только локальный Level B: состояния существующих интерактивных элементов, клавиатурный focus, короткая реакция на правильный ответ, мягкий entrance и аккуратное раскрытие новых helpers. Structural redesign не выполнялся.


## Full QA correction · v5

- Исправлен критический answer-key bug в Clock Challenge: `It's eleven o'clock.` теперь проверяется как **11:00 / 660 minutes**, а не как 5:30.
- Проверены все значения времени в Clock Setter и Clock Challenge.
- Приведены к единому учебному варианту формулировки `a quarter past / a quarter to` в listening/options/support.
- Исправлены неестественные/неточные вопросы в Rob's Story и reading comprehension.
- Time Match TTS теперь читает только English, а не русский перевод голосом en-GB.
- Имена говорящих больше не произносятся в TTS диалогов.
- Planner audio переписан в естественные английские фразы.
- Sentence Builder shuffle теперь гарантированно не оставляет карточки в исходном порядке.
- Убраны shake/success-pulse/screen-entry animations, которые могли давать эффект дрожания или мерцания.
- Сброшен storage key на `v2`, чтобы некорректные результаты старой версии не переносились в исправленную.
- Выполнено 97 автоматических consistency-checks: **97 passed / 0 failed**.
