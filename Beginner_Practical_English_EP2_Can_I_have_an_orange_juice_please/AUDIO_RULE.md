# Audio rule

1. Primary voice: Google TTS, en-GB, short chunks.
2. If Google TTS is blocked inside an iframe/browser, automatically fall back to the best available British English system voice.
3. Never show “Audio unavailable” after a Google-only failure while a browser voice exists.
4. Keep audio text split into short phrases/sentences.
5. Cache-bust app.js/styles.css whenever audio code changes.
