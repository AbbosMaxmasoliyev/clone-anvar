"use client"
import Chance from '@/components/chance'
import Guarantee from '@/components/guarantee'
import Half from '@/components/half'
import Introduction from '@/components/introduction'
import List from '@/components/list'
import Popup from '@/components/popup'
import Tarifs from '@/components/tarifs'
import CountdownTimer from '@/components/timer'
import Link from 'next/link'
import React, { useState } from 'react'

const Index = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handlePop = () => {
        setIsOpen(prev => !prev)
    }
    return (
        <div>
            <Half>
                <div className="flex flex-row bg-[#d1d1d1] relative h-5 rounded-md w-[450px] max-w-[90%]">
                    <span className="absolute top-[-25px] right-[46%]">90%</span>
                    <div className={`flex flex-row bg-[#a9231a]  w-[90%]  h-5 rounded-md relative`}>
                    </div>
                </div>

                <p className="text-[20px] mt-5 w-10/12 max-w-[876px] text-center">To&apos;xtang! Hali jarayon yakunlangani yo&apos;q…</p>
                <p className="text-[20px] w-10/12 max-w-[876px] text-center">Cheklist sizga 5 daqiqa ichida SMS orqali yetib boradi.</p>
                <h1 className="text-2xl w-10/12 max-w-[876px] text-center mt-5">Endi ikki qadamli qimmat sotish videodarsligini oling va e&apos;tirozlarni yechish darsligiga BEPUL ega bo&apos;ling!</h1>
                <div className={"max-w-[90%] w-[760px] h-[428px] mt-5"}><iframe src="https://kinescope.io/embed/ih9kbTgr6UNRnz3Pe3qKaH" allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;" className="w-full h-full" frameborder="0" allowfullscreen autoplay></iframe></div>
                <button onClick={handlePop} className="flex flex-col py-3  max-w-64 mt-8 border text-center rounded-2xl w-[90%] bg bg-gradient-to-r  from-[#D6A668] via-[#FECD8E] to-[#D6A668] font-os font-semibold shadow-btn">
                    <span className='w-full text-center'>BEPUL TAKLIFNI OLISH</span>
                    <span className='font-light w-full text-center'>Ha 8-sentyabrda qatnashaman</span>
                </button>
                <Link href="https://t.me/launch_pro_bot" className="underline text-blue-600  text-center mt-5 max-w-64">Yo&apos;q, rahmat. Men bu ajoyib taklifni hozir olishni xohlamayman, faqatgina bepul cheklistni olaman.</Link>
                <p className="text-2xl font-bold my-5"><span className="line-through">197,000 so&apos;m</span> atigi <span className="text-green-600">47,000 so&apos;m</span></p>
                <p className="text-3xl font-bold my-5 text-center">MAXSUS TAKLIF TUGASHIGA QOLGAN VAQT:</p>
                <CountdownTimer targetDate={new Date().getTime() + 900000} />
            </Half>
            <List />
            <Introduction />
            <Tarifs />
            <Guarantee />
            <Chance />
            <Popup isOpen={isOpen} onClose={handlePop} />
        </div>
    )
}

export default Index