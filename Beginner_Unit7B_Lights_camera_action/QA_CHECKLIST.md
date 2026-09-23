# Unit 7B · QA checklist

## Fixed shell / layout
- 1600×900 base canvas.
- No page scroll inside the module.
- No text, answer, helper, progress, or navigation overlap.
- Long labels wrap or reduce naturally; nothing is clipped.
- Right task card always keeps feedback + task progress visible.
- Images use `object-fit: contain`; important content is never cropped.

## Student-facing copy
- No developer notes in the normal interface.
- Hints, rules and transcripts speak directly to the student.
- Hidden developer navigation appears only via the documented shortcut.

## Audio
- British English TTS logic is preserved.
- Stop works by pressing the active audio button again.
- Dialogue text uses names, not A/B.
- TTS reads only the spoken line; speaker names are never spoken.

## Interaction invariants
- Hover uses highlight, not shaking.
- Wrong choice does not lock the task.
- Correct choice locks alternatives and enables Next.
- Progress is visible for every task.
- Results screen follows the standard WOW SCHOOL structure.

## Unit 7B thematic QA
- Cinema styling supports the task without reducing readability.
- Film-strip / clapper / camera-flash animations are short and non-blocking.
- Block 1 stays easy for Beginner.
- Block 4 is the required Sentence Builder.
- Block 8 Action Challenge is the signature mechanic and can always be completed.
