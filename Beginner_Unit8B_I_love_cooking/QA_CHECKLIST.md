# Unit 8B · QA checklist

## Fixed shell / layout
- Base canvas 1600×900.
- Нет page-scroll внутри модуля.
- Нет наложений текста, вариантов, helpers, progress или навигации.
- Feedback + task progress остаются видимыми в правой карточке.
- Изображения используют `object-fit: contain`; важный контент не кропится.
- Reading visual поддерживает portrait 9:16.

## Student-facing copy
- Нет внутренних пометок developer / QA / experimental.
- Все видимые инструкции обращены непосредственно к ученику.
- Rule / hint расположены под visual слева.

## Audio
- British English TTS (`en-GB`) сохраняет стандартную WOW SCHOOL логику.
- Активную озвучку можно остановить повторным нажатием на активную audio-кнопку.
- Короткий текст в Block 7 можно читать без аудио; TTS — только поддержка.

## Interaction
- Неверный ответ не блокирует следующую попытку и не раскрывает правильный автоматически.
- Верный ответ блокирует варианты и включает Next.
- Progress есть в каждом задании.
- Drag в Sound Kitchen продублирован click / tap.
- Sentence Builder используется только в одном блоке.
- Results screen показывает first-attempt score.

## Unit 8B thematic QA
- Cooking-стилизация не ухудшает читаемость.
- Kitchen doodles не перекрывают контент.
- Pan / bowl / mixer animations короткие и не мешают кликам.
- Визуальные food-метафоры не выдают правильный ответ заранее.
- Block 8 всегда можно завершить без скроллинга.

## Access / release
- PIN gate работает и в `index.html`, и в `index-standalone.html`.
- PIN меняется только в `PIN_CODE.js`.
- Favicon загружается из `assets/images/favicon.png`.
- `ANSWER_KEY.md`, `IMAGE_PROMPTS.md`, `VISUAL_MANIFEST.json`, iframe и oEmbed включены в архив.
