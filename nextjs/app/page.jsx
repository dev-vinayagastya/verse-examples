"use client";
import { VerseViewer } from "@ctruhtech/verse-react";

// The component is safe to server-render: it emits the tag, and the viewer
// upgrades in the browser.
export default function Page() {
  return (
    <>
      <h1>My product</h1>
      <VerseViewer host="https://verse.ctruh.com" src="demo-chess-set" aspect="16:9" />
    </>
  );
}
