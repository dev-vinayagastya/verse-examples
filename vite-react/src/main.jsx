import React from "react";
import { createRoot } from "react-dom/client";
import { VerseViewer } from "@ctruhtech/verse-react";

function App() {
  return (
    <main style={{ maxWidth: 720, margin: "3rem auto", padding: "0 1rem", font: "16px system-ui" }}>
      <h1>My product</h1>
      <VerseViewer
        host="https://verse.ctruh.com"
        src="demo-chess-set"
        aspect="16:9"
        onLoad={(d) => console.log("loaded", d)}
      />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
