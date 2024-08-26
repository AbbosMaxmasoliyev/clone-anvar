import Image from 'next/image'
import React from 'react'

const Guarantee = () => {
    return (
        <div className='font-os flex flex-col items-center my-5'>
            <h1 className='text-4xl font-bold text-center my-5'>TO&apos;LOVNI 100% QAYTARISH KAFOLATI</h1>
            <Image src={"/payed.png"} width={200} height={200} className='my-5' />
            <p className='w-full text-2xl max-w-[420px] text-center'>Treningdan so&apos;ng hech qanday yangi bilim olmasangiz, to&apos;lovingizni <span className='text-[#dbaa6c]'>bir og&apos;iz so&apos;zsiz 100% to&apos;liq holda qaytariladi.</span></p>
            <p className='w-full text-2xl max-w-[420px] text-center my-5'>Va barcha bonuslar siz bilan qoladi.</p>
            <p className='w-full text-2xl max-w-[420px] text-center my-5'>Undan tashqari, do&apos;stligimiz ham saqlanib qoladi.</p>
        </div>
    )
}

export default Guarantee