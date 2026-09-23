# QA CHECKLIST · Episode 4 · What's the date?

## Global
- [ ] Canvas is 1600×900 and scales only through `fit()`.
- [ ] No page scroll.
- [ ] No text, button, feedback or progress is clipped.
- [ ] Right task status / mini progress remains visible in every task state.
- [ ] Images use `object-fit: contain`.
- [ ] Helpers appear under the left visual.
- [ ] Student UI contains no developer notes.
- [ ] PIN gate opens with `1020` and PIN can be changed only in `PIN_CODE.js`.

## Audio
- [ ] British English TTS works or falls back to browser `en-GB` speech synthesis.
- [ ] Pressing the playing audio button stops playback.
- [ ] Busy state uses only the compact `■` icon.
- [ ] Dialogue audio does not speak speaker names.

## Navigation
- [ ] Alt + Shift + → / ← changes tasks.
- [ ] Alt + Ctrl + → / ← changes blocks.
- [ ] Ctrl + Alt + D toggles dev navigation.
- [ ] Double-click Episode 4 badge toggles dev navigation.

## Block-specific
- [ ] Block 1 flip cards animate and wrong cards flip back.
- [ ] Block 2 lift animation does not overlap text.
- [ ] Block 3 right column is shuffled and lines connect correct pairs only.
- [ ] Block 4 calendar days fit without scrolling.
- [ ] Block 5 is the only sentence-builder block.
- [ ] Block 6 transcript is hidden by default and sits under the visual.
- [ ] Block 7 stamp animation appears only after the correct answer.
- [ ] Block 8 month/day controls remain in bounds and Save date unlocks only on the correct date.
- [ ] Results screen calculates all 8 sections.
