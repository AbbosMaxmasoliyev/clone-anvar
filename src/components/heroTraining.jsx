import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroTraining = () => {
    return (
        <div className='hero-training min-h-[1000px] flex flex-col items-center py-7 relative'>
            <div className="bg-red-650 p-[3px]  bg-red-600 rounded-md w-max">
                <div className="border border-1 border-white rounded-md px-7">
                    <p className='font-os text-white'>Marketing va Soha mutaxassislari diqqatiga!</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-10/12 items-center justify-center md:h-[80vh] h-[800px]  gap-8 mt-10 md:mt-0">,
                <div className="flex flex-col md:w-5/12 gap-8 text-center md:text-start">
                    <h1 className='text-white font-os md:text-4xl text-4xl font-bold tracking-wider leading-[3rem] md:leading-[4rem]'>Qanday qilib 7 qadamda xizmatingizni qimmat sotib oladigan mijozlarni jalb qilish mumkin?</h1>

                    <p className='font-os text-xl text-white'>(Sizdan doimiy qimmat sotib olishga tayyor mijozlar oqimiga ega bo’lish uchun oxirgacha o’qing)</p>
                    <Link href="#tarif" className='border h-14 flex justify-center items-center text-xl text-white rounded-[45px] bg-blue-600 w-10/12  absolute md:static bottom-[20px] md:bottom-[-14px]  z-10 font-os'>Joy band qilish</Link>

                </div>
                <div className="relative flex justify-center items-center">
                    <div className='hero-image' ></div>
                    <div className="px-[15px] absolute bottom-[0] w-full  rounded-3xl py-[10px] verify font-os max-h-[60px] bg-slate-600 bg-opacity-100 ">
                        <p className=' font-os  text-white text-center'>Abdulla Bahromov Baxtiyorov</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroTraining