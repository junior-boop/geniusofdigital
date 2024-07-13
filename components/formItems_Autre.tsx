'use client'
import { DynamicInput } from "@/app/order/page"
import React, { useEffect, useRef, useState } from "react"

export default function FormItems_Autre({ label, name, placeholder }: DynamicInput) {
    const [ischecked, setchecker] = useState(false)
    const inputRef = useRef<any>()

    const handleCheck = (evt: React.FormEvent<HTMLInputElement>): void => {
        setchecker(inputRef.current.checked)
    }

    return (
        <div className=" my-4">
            <div className="flex items-center relative px-[34px] lg:px-[55px] my-4">
                <input ref={inputRef} onChange={handleCheck} type="checkbox" className=" w-[16px] lg:w-[20px] aspect-square absolute left-0 lg:left-[7px] border bg-slate-300" />
                <label htmlFor={name} className="text-base lg:text-xl">{label}</label>
            </div>
            {ischecked && <input name={name} type="text" className="flex-1 border px-4 font-medium text-base lg:text-xl h-[50px] focus:bg-slate-100 outline-none ml-0 lg:ml-[55px] w-full lg:w-[90%]" placeholder={placeholder} />}
        </div>
    )
}