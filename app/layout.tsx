import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "geniusOfDgital",
  description: "We design and construct functional websites. Each company as well as every individual client. Lovely in terms of design. Effortless in their application. Made to leave the kind of impressions you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
