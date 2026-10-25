// Receives Verse webhooks and verifies the signature. No dependencies.
//   VERSE_WEBHOOK_SECRET=YOUR_SECRET_HERE node server.mjs
// Expose it with a tunnel while testing, then register the public URL:
//   POST https://verse.ctruh.com/v1/account/webhooks  {"url":"https://.../verse","events":["scene.ready","scene.failed"]}
import { createServer } from "node:http";
import { createHmac, timingSafeEqual } from "node:crypto";

const SECRET = process.env.VERSE_WEBHOOK_SECRET;
if (!SECRET) throw new Error("Set VERSE_WEBHOOK_SECRET (shown once when you create the webhook).");
const MAX_AGE_S = 5 * 60;

function verify(headers, rawBody) {
  const ts = Number(headers["x-verse-timestamp"]);
  if (!Number.isFinite(ts) || Math.abs(Date.now() / 1000 - ts) > MAX_AGE_S) return false;
  const expected = "sha256=" + createHmac("sha256", SECRET).update(`${ts}.${rawBody}`).digest("hex");
  const got = String(headers["x-verse-signature"] ?? "");
  return got.length === expected.length && timingSafeEqual(Buffer.from(got), Buffer.from(expected));
}

createServer(async (req, res) => {
  if (req.method !== "POST" || req.url !== "/verse") return res.writeHead(404).end();
  const chunks = [];
  for await (const c of req.on("error", () => {})) chunks.push(c);
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!verify(req.headers, raw)) return res.writeHead(401).end("bad signature");
  const event = JSON.parse(raw);
  if (event.event === "scene.ready") console.log("ready:", event.data.scene, event.data.url);
  else if (event.event === "scene.failed") console.log("failed:", event.data.scene, event.data.error);
  else console.log("event:", event.event);
  res.writeHead(200).end("ok"); // answer fast; do slow work after
}).listen(Number(process.env.PORT) || 3000, () => console.log("listening on /verse"));
