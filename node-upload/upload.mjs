// Upload a GLB, wait for it, print the share link and the embed code.
//   VERSE_TOKEN=YOUR_TOKEN_HERE node upload.mjs path/to/model.glb [name]
import { readFile } from "node:fs/promises";
import { VerseClient } from "@ctruhtech/verse-sdk";

const [file, name = "my-model"] = process.argv.slice(2);
if (!file) {
  console.error("usage: node upload.mjs path/to/model.glb [name]");
  process.exit(2);
}
const token = process.env.VERSE_TOKEN;
if (!token) {
  console.error("Set VERSE_TOKEN (create one at https://verse.ctruh.com/studio).");
  process.exit(2);
}

const verse = new VerseClient({ baseUrl: "https://verse.ctruh.com", token });
const done = await verse.publish(await readFile(file), {
  name,
  onStage: (stage) => console.log("stage:", stage),
});

console.log("share link:", verse.shareLink(done));
console.log(verse.embedCode(done).element);
