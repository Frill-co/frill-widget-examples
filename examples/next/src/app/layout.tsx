import Script from "next/script";
import { FrillScript } from "@frillco/script/react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/*
          Loads your container before hydration. `as={Script}` lets Next control
          the load strategy. Optionally identify the current user, e.g.
          container={{ key: '...', user: { email, name } }}.
        */}
        <FrillScript
          as={Script}
          strategy="beforeInteractive"
          container={{
            // Put your Frill Script (container) key here
            key: "a809b4ac-5976-4444-8684-15f7a3a20b4c",
          }}
        />
      </body>
    </html>
  );
}
