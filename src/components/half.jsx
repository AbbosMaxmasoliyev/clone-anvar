"use client"
import Link from 'next/link'
import React from 'react'
import Footer from './footer'
import CountdownTimer from './timer'


const Half = ({ percentage }) => {


    return (
        <div className="flex flex-col items-center w-full min-h-screen justify-center font-os pt-16 h-auto pb-5 bg-black text-white">
            <div className="flex flex-row bg-[#d1d1d1] relative h-5 rounded-md w-[450px] max-w-[90%]">
                <span className="absolute top-[-25px] right-[46%]">{percentage}%</span>
                <div className={`flex flex-row bg-[#a9231a]  w-[${percentage}%]  h-5 rounded-md relative`}>
                </div>
            </div>

            <p className="text-[20px] mt-5 w-10/12 max-w-[876px] text-center">To&apos;xtang! Hali jarayon yakunlangani yo&apos;q…</p>
            <p className="text-[20px] w-10/12 max-w-[876px] text-center">Cheklist sizga 5 daqiqa ichida SMS orqali yetib boradi.</p>
            <h1 className="text-2xl w-10/12 max-w-[876px] text-center mt-5">Endi ikki qadamli qimmat sotish videodarsligini oling va e&apos;tirozlarni yechish darsligiga BEPUL ega bo&apos;ling!</h1>
            <div className={"max-w-[90%] w-[760px] h-[428px] mt-5"}><iframe src="https://kinescope.io/embed/ih9kbTgr6UNRnz3Pe3qKaH" allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;" className="w-full h-full" frameborder="0" allowfullscreen autoplay></iframe></div>
            <Link href="/payment" className="flex flex-col py-3  max-w-64 mt-8 border text-center rounded-2xl w-[90%] bg bg-gradient-to-r  from-[#D6A668] via-[#FECD8E] to-[#D6A668] font-os font-semibold shadow-btn">
                <span>BEPUL TAKLIFNI OLISH</span>
                <span className='font-light'>Ha 8-sentyabrda qatnashaman</span>
            </Link>
            <Link href="https://t.me/launch_pro_bot" className="underline text-blue-600  text-center mt-5 max-w-64">Yo&apos;q, rahmat. Men bu ajoyib taklifni hozir olishni xohlamayman, faqatgina bepul cheklistni olaman.</Link>
            <p className="text-2xl font-bold my-5"><span className="line-through">197,000 so&apos;m</span> atigi <span className="text-green-600">47,000 so&apos;m</span></p>
            <p className="text-3xl font-bold my-5 text-center">MAXSUS TAKLIF TUGASHIGA QOLGAN VAQT:</p>
            <CountdownTimer targetDate={new Date().getTime() + 900000} />
        </div>
    )
}

export default Half