# Image assignment for Episode 4

This module now contains the user-provided visuals inserted into the correct blocks:

- `preview-episode4.jpg` → module preview cover
- `block1-month-flip.jpg` → Month Flip
- `block2-ordinal-lift.jpg` → Ordinal Lift
- `block3-date-match.jpg` → Date Match
- `block4-calendar-tap.jpg` → Calendar Tap
- `block5-builder.jpg` → Sentence Builder
- `block6-phone.jpg` → Phone English
- `block7-date-stamp.jpg` → Date Stamp
- `block8-save-date.jpg` → Save the Date

## PIN
The access code is controlled in one file only:

- `PIN_CODE.js`

Change only the value in this file, for example:

```js
window.WOW_MODULE_PIN = "1020";
```

The PIN gate is loaded both in `index.html` and `index-standalone.html`, so the password prompt will also appear when the module is opened through Holst / iframe if the external script loading is preserved.
