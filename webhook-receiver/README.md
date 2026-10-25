# Webhook receiver

```sh
VERSE_WEBHOOK_SECRET=YOUR_SECRET_HERE node server.mjs
```

Verifies `X-Verse-Signature` (HMAC-SHA256 over `timestamp.body`) and rejects stale timestamps. Create the webhook with the API (see the docs); the secret is shown once.
