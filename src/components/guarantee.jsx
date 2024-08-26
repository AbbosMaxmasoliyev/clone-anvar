import Image from 'next/image'
import React from 'react'

const Guarantee = () => {
    return (
        <div className='font-os flex flex-col items-center my-5'>
            <h1 className='text-4xl font-bold text-center my-5'>TO’LOVNI 100% QAYTARISH KAFOLATI</h1>
            <Image src={"/payed.png"} width={200} height={200} className='my-5' />
            <p className='w-full text-2xl max-w-[420px] text-center'>Treningdan so’ng hech qanday yangi bilim olmasangiz, to’lovingizni <span className='text-[#dbaa6c]'>bir og’iz so’zsiz 100% to’liq holda qaytariladi.</span></p>
            <p className='w-full text-2xl max-w-[420px] text-center my-5'>Va barcha bonuslar siz bilan qoladi.</p>
            <p className='w-full text-2xl max-w-[420px] text-center my-5'>Undan tashqari, do’stligimiz ham saqlanib qoladi.</p>
        </div>
    )
}

export default Guarantee