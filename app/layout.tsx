import "@styles/global.css";
import React from "react";

export const metadata = {
  title: "prompHelper",
  description: "Learn new prompt to enhance your ai command skilll",
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

        <main className="app">{children}</main>
      </body>
    </html>
  );
}
