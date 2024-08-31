import React from 'react'

const Problem = () => {
    return (
        <div className='flex flex-col items-center my-7'>
            <p className='text-4xl font-bold font-os w-[90%] text-center'>Muammo shundaki</p>
            <h2 className='font-os text-2xl font-bold w-[90%] text-center'>Xizmat yoki mahsulotingizni qimmat sotishingiz uchun:</h2>
            <ol className='custom-list md:w-[45%] w-8/12 font-os'>
                <li className='text-2xl'>Kuchli jamoa yig’ishim kerak</li>
                <li className='text-2xl'>Yanada kuchli mutaxassis bo’lishim kerak</li>
                <li className='text-2xl'>Va kuchli shaxsiy brend va yillab tajribaga ega bo’lishim kerak - deb o’ylaysiz</li>
            </ol>
            <div className="p-[5px] bg-[#efb982] rounded-3xl md:w-[55%] my-7 h-[193px] max-w-[90%]">
                <div className=" border border-white rounded-3xl h-full w-full flex justify-center items-center">
                    <p className='text-white font-os font-bold md:text-3xl text-2xl tracking-normal w-[90%] text-center'>Va bu fikrlashingiz sizni bir nuqtada qotib qolishingizga va keyingi 5-10 yil ichida daromadingizni oshira olmasligingizga sabab bo’ladi.</p>
                </div>
            </div>
        </div>
    )
}

export default Problem