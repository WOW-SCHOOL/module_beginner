# WOW SCHOOL · MODULE RULES (from Unit 4B onward)

These rules are mandatory for all future Beginner modules.

1. **Keep the existing speech synthesis.** Do not replace the British-English TTS logic. Long text / dialogue is split into short phrases or sentences for stable playback.
2. **Use more audio where it helps.** Not every task needs audio, but vocabulary, pronunciation, listening, model phrases, and suitable grammar examples should include it.
3. **Bottom progress is sacred.** Task dots / “Задание X из Y” must always remain visible. Long prompts or answer lists may shrink or scroll inside their own area, but must never push the progress off the slide.
4. **Images are never cropped.** Always use `object-fit: contain`. If an image feels too large, reduce the image frame instead of cropping faces, hands, objects, or important details.
5. **Reading layout is flexible.** Text may sit beside the image. For the main reading block (typically Block 5), prefer a **portrait selfie image, 9:16**, so the text has enough horizontal space.
6. **Do not overuse multiple choice.** Keep the core exercise types, but mix mechanics: drag-and-drop columns, sentence building, matching, sorting, audio recognition, etc.
7. **Keep the classic columns interaction.** At least some modules may include a drag / tap-to-place word sorting block.
8. **One new experimental block per module.** The last learning block should introduce a mechanic not used before, while still practising the unit language.
9. **Repository structure:** every Beginner unit lives as its own folder in `WOW-SCHOOL/module_beginner`.
10. **Visual workflow:** first build and test the module without photos, then generate images to exact filenames / ratios, then merge images into the finished archive.

## Iron rule: no clipped text
- No word, answer, status, button label, or instruction may be visually cropped in any block.
- Prefer wrapping and a small responsive font reduction before allowing overflow or clipping.
- Right-side task panels must keep all answer text readable at the fixed 1600×900 module size.
- Replacement choices in Error Hunter must always show the full replacement word/phrase.
- Before release, visually inspect every block and the longest-content state of each interactive mechanic.

## Student-facing product rule (added after Unit 6B review)
- Every visible sentence must address the student, not the developer, teacher, or module author.
- Never expose internal notes such as “experimental block”, developer shortcuts, implementation notes, archive filenames, or QA comments in the student UI.
- Hints/transcripts belong beside the visual or in a non-obstructive footer area when possible, not in the already crowded answer panel.
- The right answer panel is reserved for the task, answer choices, feedback, and progress.
- Hard layout rule: no text, buttons, images, feedback, helper panels, or controls may overlap or escape their containers at 1600×900.
- If content becomes tight, reduce font/padding/gaps before allowing collision. Long labels wrap; they are never clipped horizontally.
- Before packaging, review the longest content state for every block, including opened hints/transcripts and the last/longest exercise.
