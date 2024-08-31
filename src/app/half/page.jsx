"use client"
import Chance from '../../components/chance'
import Guarantee from '../../components/guarantee'
import Half from '../../components/half'
import Popup from '../../components/popup'
import CountdownTimer from '../../components/timer'
import Image from 'next/image'
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
                <p className='mb-8 text-center'><span className='text-[#FECD8E]'>Qimmat</span> <br /> sotish</p>
                <div className="flex flex-row bg-[#d1d1d1] relative h-5 rounded-md w-[450px] max-w-[90%]">
                    <div className={`flex flex-row bg-[#a9231a]  w-[50%]  h-5 rounded-md relative`}>
                        <span className="text-center w-full text-sm">Oxirgi qadam qoldi…</span>
                    </div>
                </div>

                <p className='text-[#EFCD8E] text-4xl mt-5'>Tabriklayman!</p>
                <p className="text-[20px] mt-5 w-10/12 max-w-[876px] text-center">Bu sahifadan chiqib ketmang chunki hali jarayon to&apos;liq yakunlangani yo&apos;q…                </p>
                <p className="text-[20px] w-10/12 max-w-[876px] text-center">Cheklist sizga 5 daqiqa ichida SMS orqali yetib boradi.</p>
                <h1 className="text-2xl w-10/12 max-w-[876px] text-center mt-5">Endi ikki qadamli qimmat sotish videodarsligini oling va e&apos;tirozlarni yechish darsligiga BEPUL ega bo&apos;ling!</h1>
                <div className={"max-w-[90%] w-[760px] h-[428px] mt-5"}><iframe src="https://kinescope.io/embed/ih9kbTgr6UNRnz3Pe3qKaH" allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;" className="w-full h-full" frameborder="0" allowfullscreen autoplay></iframe></div>
                <button onClick={handlePop} className="flex flex-col py-3   max-w-64 mt-8 border text-center rounded-2xl w-[90%] bg bg-gradient-to-r  from-[#D6A668] via-[#FECD8E] to-[#D6A668] font-os font-semibold shadow-btn">
                    <span className='w-full text-center'>BEPUL TAKLIFNI OLISH</span>
                </button>

                <p className="text-2xl font-bold my-5"><span className="line-through">197,000 so&apos;m</span> atigi <span className="text-green-600">47,000 so&apos;m</span></p>
                <p className='text-2xl text-[#fff]'>Ikki qadamli qimmat sotish video darsligi</p>
                <Image src={"/tablet.png"} width={319} height={247} className='my-5' />
                <p className='text-4xl text-[#fff] font-bold'>Bu darslik orqali siz:</p>
                <ol className='custom-list md:w-[45%] w-8/12'>
                    <li className='text-2xl'>Mijoz bilan suhbatni nimadan boshlashni</li>
                    <li className='text-2xl'>Qanday qilib ehtiyojlarni aniqlashni</li>
                    <li className='text-2xl'>Qachon narxni aytishni va e&apos;tirozlarni to&apos;gri yechishni</li>
                    <li className='text-2xl'>Va mijoz bilan uchrashuvda qanday qilib qadamba-qadam sotuvni yopish kerakligini o&apos;rganasiz</li>
                </ol>
                <p className="text-4xl mt-10 mb-5">BONUS</p>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-center  bg-[#dbaa6c] p-2  rounded-[45px] w-[354px]  md:w-[604px] max-w-[90%] md:h-[157px] relative z-10" >
                        <div className="border flex flex-row justify-around gap-3 md:p-2 p-5 items-center text-xl text-white  px-5 border-white border-solid rounded-[45px] w-full h-full relative ">
                            <div>
                                <p className='text-start text-2xl md:text-4xl self-center'>Video darslik:</p>
                                <p className='text-start  self-start text-sm'>E&apos;tirozlarni to&apos;g&apos;ri yechish video darsligi</p>
                            </div>
                            <Image src={"/noroot.png"} className={`md:left-[-70px] z-0`} width={130} height={100} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center  bg-[#dbaa6c] p-2  rounded-[45px] w-[354px]  md:w-[604px] max-w-[90%] md:h-[157px] relative z-10" >
                        <div className="border flex flex-row gap-3 md:p-2 p-5 items-center text-xl text-white  px-5 border-white border-solid rounded-[45px] w-full h-full relative ">
                            <p className='text-start text-2xl md:text-4xl self-center'>Eslatma: Bu bepul darslikni birinchi xarid qilgan 300 ta kishiga beraman.</p>
                        </div>
                    </div>
                </div>
                <p className="text-3xl font-bold my-5 text-center">MAXSUS TAKLIF TUGASHIGA QOLGAN VAQT:</p>
                <CountdownTimer targetDate={new Date().getTime() + 900000} />


                <Link href="https://t.me/launch_pro_bot" className="underline text-blue-600  text-center mt-5 max-w-64">Yo&apos;q, rahmat. Men bu ajoyib taklifni hozir olishni xohlamayman, faqatgina bepul cheklistni olaman.</Link>
            </Half>
            <Guarantee />
            <Chance />
            <Popup isOpen={isOpen} onClose={handlePop} />
        </div>
    )
}

export default Index