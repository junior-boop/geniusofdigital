'use client'
import Container from "@/components/container";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { scroll } from "framer-motion";

import anime from "@/lib/anime.es";
import { useEffect, useRef } from "react";
import MostReadField from "@/components/mostreadfeld";
import MostRead from "@/components/most_read";

export default function Home() {
  const displayRef_1 = useRef<any>()
  const displayRef_2 = useRef<any>()
  const displayRef_3 = useRef<any>()
  const displayRef_4 = useRef<any>()
  const headerRef = useRef<any>()

  const lineHeight = 0.92
  const styleDisplay = "font-display text-[36px] lg:text-[96px] italic relative"

  const AnimeLine = (ref: any, delay: number, opacity = 0.7) => {
    const characters = ref.current.innerText.split('')
    anime({
      targets: ref.current,
      translateX: [-200, 0],
      opacity: [0, opacity],
      duration: 1000,
      easing: 'easeOutCubic',
      delay: delay
    })

    ref.current.innerHTML = characters
      .map((char: string) => `<span class = "font-display text-white">${char}</span>`)
      .join('');

    anime({
      targets: ref.current.querySelectorAll('span'),
      opacity: [0, 1],
      translateY: [20, 0],
      translateZ: 0,
      duration: 1000,
      delay: (el: any, i: number) => 50 * i,
      easing: 'easeOutExpo'
    });
  }

  useEffect(() => {
    AnimeLine(displayRef_1, 500)
    AnimeLine(displayRef_2, 800)
    AnimeLine(displayRef_3, 900, 1)

    anime({
      targets: displayRef_4.current,
      translateX: [-200, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutCubic',
      delay: 1000
    })

  }, [])


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const head = headerRef.current.offsetHeight
      const doc = document.body.offsetHeight

      const headerEndPorcent = head / doc
      console.log(headerEndPorcent)
    }
  }, [])

  // scroll((value) => {
  //   console.log(value)
  // })

  return (
    <>
      <main>
        <Header />
        <div ref={headerRef} className="bg-radius text-white">
          <Container>
            <div className="h-[100dvh] flex items-center justify-center ">
              <div className="w-full px-4 relative flex flex-col items-center lg:block">
                <div ref={displayRef_1} className={`${styleDisplay}  opacity-70`} style={{ lineHeight: lineHeight }}>we design and build</div>
                <div ref={displayRef_2} className={`${styleDisplay} opacity-70 lg:left-[15%]`} style={{ lineHeight: lineHeight }}>applications for your</div>
                <div ref={displayRef_3} className={`${styleDisplay}`} style={{ lineHeight: lineHeight }}>business</div>
                <Link ref={displayRef_4} href={'/'} className="absolute bottom-[-60px] lg:bottom-[-12%] lg:left-[32%] text-white ">
                  <button className="lg:text-[32px] px-5 py-3 lg:px-[49px] lg:py-[30px] bg-[#71FFDA32] rounded-full font-semibold lg:ml-[40px]">
                    Contact-us for your website
                  </button></Link>
              </div>
            </div>
            <div className="px-4 lg:px-0 pb-[190px]">
              <h1 className="font-display italic text-[40px] text-white">
                what we do.
              </h1>
              <div className="lg:w-[50%] text-white mb-[79px]">
                <p>Create, develop, deploy, and maintain websites. We are dedicated to creating online environments that provide the greatest possible digital experience, balancing beauty and functionality.</p>
              </div>
              <div className="flex gap-4 lg:gap-[30px] flex-col lg:flex-row ">
                <DescBlock
                  title="Web Design"
                  desc="We design and construct functional websites. Each company as well as every individual client. Lovely in terms of design. Effortless in their application. Made to leave the kind of impressions you want"
                />
                <DescBlock
                  title="Your branding"
                  desc="In order for your company's graphic communication to flow together as a whole, we also assist you with the process of developing your own graphic identity."
                />
                <DescBlock
                  title="Maintain"
                  desc="Don't worry; we never just design and run. Every website requires frequent maintenance. So we'll examine, maintain, and upgrade yours for as long as your business requires them."
                />
              </div>
            </div>
          </Container>
        </div>
        <div className="py-[150px]">
          <Container>
            <div className="">
              <h1 className="font-display italic text-[40px] px-4 lg:px-0">
                selected work.
              </h1>
              <div className="lg:w-[50%] mb-[79px] px-4 lg:px-0">
                <p>As a new firm, they trusted us to design and develop their website. As always, we committed to producing high-quality work.</p>
              </div>
              <div>
                <MostReadField>
                  <MostRead image="/principe.jpg" logo="/logo_black.png" name="Konji Farm" />
                  <MostRead image="/leo_energy.png" logo="/logo_leo_white.png" name="Leo Energy" />
                  <Link href={"/order"} >
                    <div className="w-[350px] lg:w-[500px] aspect-square   border border-[#5EF6CE] p-8 bg-[#ECFFFA] flex flex-col justify-between">
                      <div>
                        <h1 className="text-[#483F04] text-[32px] lg:text-[48px] font-bold mb-5" style={{ lineHeight: 1 }}>
                          Contact-us for your website
                        </h1>
                        <p>
                          Please provide us with all of the features of your website or application, and we will make suggestions.
                        </p>
                      </div>
                      <div>
                        <Link href={'/order'} className="block">
                          <button className="w-full text-center font-bold h-[50px] flex items-center bg-[#483F04] rounded-full justify-center text-white">CLICK ME</button>
                        </Link>
                      </div>
                    </div>
                  </Link>
                </MostReadField>
              </div>
            </div>
          </Container>
        </div>
        <div className="pb-[150px]">
          <Container>
            <div className="">
              <h1 className="font-display italic text-[40px] px-4 lg:px-0 mb-3" style={{ lineHeight: 1 }}>
                some of our template.
              </h1>
              <div className="lg:w-[50%] mb-[79px] px-4 lg:px-0 text-white">
                <p>These templates are websites or applications that are either completed or in progress that you may request for usage in your project.</p>
              </div>
              <div>
                <MostReadField>
                  <Projets title="Global Opportunities" theme="prensentation" image="" />
                </MostReadField>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

interface DescBlock {
  title: string;
  desc: string;
}

function DescBlock({ title, desc }: DescBlock) {
  return (
    <div className="flex-1 p-8 bg-[#fff2] text-white h-auto">
      <h3 className="text-[20px] font-medium mb-5 text-white">{title}</h3>
      <div>
        <p className="text-white">{desc}</p>
      </div>
    </div>
  )
}


interface Projets {
  theme: 'prensentation' | 'magazin' | 'e-commerce' | 'social network',
  title: string,
  image: string,
}
function Projets({ image, theme, title }: Projets) {
  return (
    <Link href={'/'}>
      <div>
        <div className="w-[350px] lg:w-[500px] aspect-[4/3] bg-slate-400 relative">
          <Image src={'/globalopportunities.png'} alt="" fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-[20px] font-semibold my-2">{title}</h3>
          <div className="px-4 py-2 font-semibold bg-[#71FFDA33] w-fit">
            {theme}
          </div>
        </div>
      </div>
    </Link>
  )
}