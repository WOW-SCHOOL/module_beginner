# WOW SCHOOL · Beginner · Unit 6B · Good morning, goodnight

Полноценный интерактивный модуль для репозитория `module_beginner`.

## Что сделано в этой версии
- облегчён вход в тему: **Block 1 = very easy warm-up**;
- в listening-блоках добавлены **скрытые текстовые блоки** (`<details>`), которые можно открыть при необходимости;
- в сложных местах добавлены **лёгкие подсказки / mini rules**;
- **8-й блок продолжает экспериментальную линию** и развивает механику точечной правки предложения;
- добавлен **скрытый режим разработчика** для быстрой навигации по заданиям и блокам;
- добавлен файл **`ANSWER_KEY.md`** с правильными ответами.

## Блоки
1. **Morning Warm-up** — лёгкий разогрев по фразам daily routine
2. **Morning Person** — интервью + скрытый transcript
3. **Day Sort** — сортировка morning / daytime / evening
4. **Adverbs Builder** — сборка предложений с adverbs of frequency
5. **Reading Mission** — текст + вопросы + audio
6. **Pronunciation** — /j/ и /juː/
7. **Mini Dialogues** — короткие everyday dialogues + transcript support
8. **Routine Repair** — experimental fix-it block

## Скрытый dev-режим
### Включение
- **двойной клик** по бейджу `Unit 6B`, или
- **Ctrl + Alt + D**

### Горячие клавиши
- **Alt + Shift + →** — следующее задание внутри текущего блока
- **Alt + Shift + ←** — предыдущее задание внутри текущего блока
- **Alt + Ctrl + →** — следующий блок
- **Alt + Ctrl + ←** — предыдущий блок

## Важное
- Синтез British English сохранён.
- Изображения в архиве сейчас играют роль **рабочих плейсхолдеров**.
- Финальные промпты для отдельной генерации изображений лежат в `IMAGE_PROMPTS.md`.
- Правило **no clipped text** учтено: все длинные слова и варианты должны переноситься и помещаться в правый блок.

## Репозиторий
Загрузить папку `Beginner_Unit6B_Good_morning_goodnight/` в корень `WOW-SCHOOL/module_beginner`.

Ожидаемый URL:
`https://wow-school.github.io/module_beginner/Beginner_Unit6B_Good_morning_goodnight/`

## Upgrade v4 retrofit

- Подключён текущий PIN-экран WOW SCHOOL (`PIN_CODE.js` → `pin-gate.js` → `app.js`), PIN `1020`.
- Добавлены favicon WS и отдельный безопасный слой `upgrade-v4.js`.
- Исходный `app.js`, учебный контент, answers, scoring, изображения и TTS не переписывались.
- 8 blocks; existing helpers/transcripts/QA preserved.
