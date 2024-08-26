"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Popup from './popup'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="min-h-screen mt-0    flex flex-col justify-center items-center">
            <div className="w-10/12 h-auto mb-10 flex justify-center">
                <h1 className="flex w-10/12 flex-col items-center gap-0 text-[55px] text-center font-os text-black">
                    Qanday qilib mijoz bilan uchrashuvda qimmat sotish mumkin?
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly w-full">
                <Image src={"/ikki_qadamli_qimmat_.png"} width={250} height={350} />
                <div className="flex flex-col max-w-[30%]">
                    <p className="font-os text-[33px] font-bold">
                        Hoziroq quyidagi tugmachani bosing va man sizga <span className="text-[#c79a66]">&lsquo;2 qadamli qimmat sotish cheklisti&lsquo;</span>ni BEPUL yuboraman.
                    </p>
                    <button onClick={handleOpen} className="py-3 inline max-w-64 mt-8 border text-center rounded-2xl bg bg-gradient-to-r from-[#D6A668] via-[#FECD8E] to-[#D6A668] font-os font-semibold shadow-btn">BEPUL YUKLAB OLISH, 0 SO&apos;M</button>
                </div>
            </div>
            <Popup isOpen={isOpen} onClose={handleOpen} />
        </div>
    )
}

export default Hero