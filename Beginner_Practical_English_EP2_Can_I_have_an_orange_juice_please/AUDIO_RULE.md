# Audio rule — locked

Audio implementation is copied from the working WOW SCHOOL Beginner Unit 4A module.

- British English web TTS via the same four Google Translate TTS endpoints.
- `meta referrer=no-referrer`, `audio.referrerPolicy=no-referrer`, `playsinline` and `webkit-playsinline`.
- Long texts are split into short chunks before playback.
- Do not replace this implementation with browser `speechSynthesis`, a different voice engine, or local audio unless explicitly requested.
