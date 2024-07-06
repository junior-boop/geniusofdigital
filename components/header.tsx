import Link from "next/link";
import Container from "./container";
import Image from "next/image";
import { RiCloseLargeLine, RiMenu3Fill } from "./icons";
import anime from '@/lib/anime.es'
import { useEffect, useRef, useState } from "react";

interface Header {
    position?: number
}

export default function Header({ position }: Header) {
    const [menuToggle, setMenuToggle] = useState<boolean>(false)
    const menuref = useRef<any>()

    useEffect(() => {
        if (menuToggle) {
            anime({
                targets: menuref.current,
                opacity: [0, 1],
                translateY: [-100, 0],
                duration: 500,
                easing: 'easeInOutQuart'
            })
        }
    }, [menuToggle])
    return (
        <header className="lg:h-[92px] bg-transparent flex fixed w-full text-white z-50" style={{ backdropFilter: 'blur(10px)' }}>
            <Container>
                <div className="flex h-full items-center justify-between px-4 lg:px-0 py-4 lg:py-0">
                    <div className="hidden lg:block font-robotoSerif font-semibold text-2xl text-white">#geniusOfDigital</div>
                    <div className="lg:hidden w-[48px] aspect-square relative">
                        <Image src={'/logo.png'} fill alt="logo #geniusofdidital" />
                    </div>
                    <div className="hidden lg:flex gap-9 items-center">
                        <ul className="flex gap-9">
                            <NavItem title="service" url="/services" />
                            <NavItem title="our work" url="/works" />
                            <NavItem title="about-us" url="/about-us" />
                        </ul>
                        <Link href={'/contact'} >
                            <div className="px-[18px] py-[10px] flex items-center text-white rounded-full font-semibold text-[20px] bg-[#fff2]">
                                contact
                            </div>
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setMenuToggle(true)}>
                            <RiMenu3Fill className="h-9 w-9 text-white" />
                        </button>
                    </div>
                    {
                        menuToggle
                        && (<div ref={menuref} className="flex lg:hidden fixed h-[100dvh] w-full bg-[#fffd] top-0 left-0 flex-col">
                            <div className="px-4 pt-4 flex items-center justify-end h-fit w-full">
                                <div>
                                    <button onClick={() => setMenuToggle(false)} className="text-gray-800 w-9 aspect-square rounded-full flex items-center justify-center">
                                        <RiCloseLargeLine className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <ul className="flex flex-col items-center text-gray-800 gap-4">
                                    <NavItem title="service" url="/services" />
                                    <NavItem title="our work" url="/works" />
                                    <NavItem title="about-us" url="/about-us" />
                                </ul>
                            </div>
                        </div>)
                    }
                </div>
            </Container>
        </header>
    )
}

interface NavItem {
    url?: string;
    title: string
}

function NavItem({ url = '/', title }: NavItem) {
    return (
        <Link href={url}>
            <li className="text-[20px] font-semibold text-white">{title}</li>
        </Link>
    )
}