import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { RiFacebookCircleFill, RiLinkedinBoxFill, RiTwitterXFill } from "@/components/icons";


export const metadata: Metadata = {
  title: "geniusOfDgital",
  description: "We design and construct functional websites. Each company as well as every individual client. Lovely in terms of design. Effortless in their application. Made to leave the kind of impressions you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const today = new Date()
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <div className="bg-black px-4 lg:px-0 py-[50px] lg:py-10">
          <Container>
            <div className="flex items-center flex-col lg:flex-row gap-8">
              <section className="flex-1 flex items-center gap-4">
                <div className="w-[56px] aspect-square relative">
                  <Image src={'/logo.png'} alt="logo geniusofdigital" fill />
                </div>
                <div className="font-bold text-[20px] text-white">
                  #geniusOfDigital
                </div>
              </section>
              <section className="flex-1 flex justify-center gap-4">
                <Link href={'https://web.facebook.com/geniusofdigital'}>
                  <RiFacebookCircleFill className="w-9 h-9 text-white" color="white" />
                </Link>
                <Link href={'https://www.linkedin.com/company/geniusofdigital/'}>
                  <RiLinkedinBoxFill className="w-9 h-9 text-white" color="white" />
                </Link>
                <Link href={'https://x.com/Danjun4'}>
                  <RiTwitterXFill className="w-9 h-9 text-white" color="white" />
                </Link>
              </section>
              <section className="flex-1 flex justify-end">
                <span className="text-white"><strong>&copy; {today.getFullYear()}</strong>. All rights reserved</span>
              </section>
            </div>
          </Container>
        </div>
      </body>
    </html>
  );
}
