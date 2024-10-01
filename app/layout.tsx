import React from "react";

import Nav from "@components/Nav";
import "@styles/global.css";

export const metadata = {
  title: "PrompHelper",
  description: "Learn new prompt to enhance your ai command skill",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="root-background">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
