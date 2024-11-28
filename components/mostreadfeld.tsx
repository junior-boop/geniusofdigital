'use client'

import MostRead from "./most_read";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "./icons";
import Link from "next/link";

interface MostReadField {
    children: React.ReactNode | JSX.Element | JSX.Element[]
}

export default function MostReadField({ children }: MostReadField) {
    const [margin, setMargin] = useState<number>(0)
    const [rightBtn, setRightBtn] = useState(true)
    const [leftBtn, setLeftBtn] = useState(false)
    const [onPhone, setOnPhone] = useState(false)

    const containerRef = useRef<React.HTMLAttributes<HTMLDivElement>>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const scrollPosition = contentRef.current
    const step = (500 + 24) * 2


    useEffect(() => {
        if (typeof window !== "undefined") {
            const screenWidth = window.innerWidth
            //@ts-ignore
            const container = containerRef.current?.offsetWidth
            const diff = screenWidth - container
            const diffMarg = diff / 2
            setMargin(diffMarg)
        }
    }, [])



    const handleRightClick = () => {
        const value = scrollPosition !== null && scrollPosition.scrollLeft + step
        scrollPosition?.scrollTo(value as number, 0)
    }
    const handleLeftClick = () => {
        const value = scrollPosition !== null && scrollPosition.scrollLeft - step
        scrollPosition?.scrollTo(value as number, 0)

    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            contentRef.current?.addEventListener('scroll', () => {
                const value = scrollPosition !== null && scrollPosition.scrollLeft
                const max = scrollPosition !== null ? scrollPosition?.scrollWidth - window.innerWidth : 0

                if (value as number >= max) {
                    setRightBtn(false)
                    setLeftBtn(true)
                } else if (value as number <= 0) {
                    setRightBtn(true)
                    setLeftBtn(false)
                } else {
                    setRightBtn(true)
                    setLeftBtn(true)
                }
            })
        }
    }, [rightBtn, leftBtn, scrollPosition])


    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 720) {
                console.log(' je suis dans un telephone')
                setOnPhone(false)
            } else {
                console.log(' nous sommes dans un machine, un ordinateur')
                setOnPhone(true)
            }

            window.addEventListener('resize', () => {

                const screenWidth = window.innerWidth
                //@ts-ignore
                const container = containerRef.current?.offsetWidth
                const diff = screenWidth - container
                const diffMarg = diff / 2
                setMargin(diffMarg)

                if (window.innerWidth < 720) {
                    console.log(' je suis dans un telephone')
                    setOnPhone(false)
                } else {
                    console.log(' nous sommes dans un machine, un ordinateur')
                    setOnPhone(true)
                }
            })
        }
    }, [])
    return (
        <div>
            {/* @ts-ignore */}
            <CarouselContainer ref={containerRef} className={'lg:max-w-[1080px] w-[100%] mx-auto relative'}>
                <CarouselContent ref={contentRef} style={onPhone ? { marginLeft: -margin, paddingInline: margin } : {}} >
                    {children}
                </CarouselContent>
                <div className="absolute left-0 top-0 w-fit h-full hidden lg:flex items-center justify-center">
                    {leftBtn && <button onClick={handleLeftClick} className="w-[72px] aspect-square bg-white rounded-full flex items-center justify-center opacity-50 hover:opacity-100 transition-all ease-in-out duration-300">
                        <RiArrowLeftLine className="w-8 h-8" />
                    </button>}
                </div>
                <div className="absolute right-0 top-0 w-fit h-full hidden lg:flex items-center justify-center">
                    {rightBtn && (<button onClick={handleRightClick} className="w-[72px] aspect-square bg-white rounded-full flex items-center justify-center opacity-50 hover:opacity-100 transition-all ease-in-out duration-300">
                        <RiArrowRightLine className="w-8 h-8" />
                    </button>)}
                </div>
            </CarouselContainer>
        </div>
    )
}


const CarouselContainer = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    return (
        <div ref={ref} className={className}>
            {props.children}
        </div>
    )
})
CarouselContainer.displayName = "CarouselContainer"

const CarouselContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    return (
        <div ref={ref} className={`px-4 lg:px-0 CarouselContent flex items-center gap-4 lg:gap-6 max-w-[100vw] lg:max-w-[99.5svw] w-[100dvw] overflow-x-auto`} {...props}>
            {props.children}
        </div>
    )
})
CarouselContent.displayName = "CarouselContent"