import type { Metadata } from "next";
import "./globals.css";
import { nextMetadata } from "@/lib/config"
import { Providers } from "@/components/Providers"

export const metadata: Metadata = nextMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
