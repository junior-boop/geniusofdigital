'use client'

import { useState } from "react"
import { SvgSpinners8DotsRotate } from "./icons"

export default function Submit() {
    const [isSubmit, setSubmit] = useState(false)

    const handleclick = () => {
        setTimeout(() => {
            setSubmit(true)

            setTimeout(() => {
                setSubmit(false)
            }, 4500)
        }, 5000)

    }
    return (
        <button onClick={handleclick} type="submit" className="font-semibold bg-[#483F04] text-white w-full lg:w-[200px] px-7 h-[50px] rounded-full flex items-center justify-center">
            {
                isSubmit
                    ? <><span><SvgSpinners8DotsRotate className="h-6 w-6 text-white" /></span><span>Sending...</span></>
                    : <><span>Submit</span></>
            }
        </button>
    )
}