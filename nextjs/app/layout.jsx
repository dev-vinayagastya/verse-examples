export const metadata = { title: "Verse + Next.js" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ font: "16px system-ui", maxWidth: 720, margin: "3rem auto", padding: "0 1rem" }}>{children}</body>
    </html>
  );
}
