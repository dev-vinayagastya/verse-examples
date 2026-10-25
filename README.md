# Verse examples

Small, runnable examples for [Verse](https://verse.ctruh.com/developers) by Ctruh. Each one talks to `https://verse.ctruh.com`.

| Folder | What it shows |
| --- | --- |
| [`html`](html) | Plain HTML: one script tag, no build |
| [`vite-react`](vite-react) | Vite + React with `@ctruhtech/verse-react` |
| [`nextjs`](nextjs) | Next.js (app router), server-render safe |
| [`vue`](vue) | Vite + Vue 3 with `@ctruhtech/verse-vue` |
| [`shopify`](shopify) | A Shopify product-page snippet (Liquid) |
| [`node-upload`](node-upload) | Upload a GLB from Node and print the share link and embed code |
| [`webhook-receiver`](webhook-receiver) | Verify and handle `scene.ready` webhooks |

## Before you start

- The viewer examples use the public demo scene `demo-chess-set`. Replace it with your own scene id.
- The Node examples need a token. Sign in at <https://verse.ctruh.com/studio>, create an API token, then:

```sh
export VERSE_TOKEN=YOUR_TOKEN_HERE   # placeholder: never commit a real token
```

Each folder has its own README with the two commands to run it.

License: MIT (examples only, see [LICENSE](LICENSE)). Free scenes show a small "Made with Verse by Ctruh" mark; keep it.
