import React from 'react'

const DreamCrusher = () => {
    const information = [
        "Maqsad qilgan avtomobil va uyingizni sotib ololmaysiz",
        "Ota-onangizga eng yaxshi hayotni bera olmaysiz",
        "Yillab vaqtingiz va millionlab topishingiz mumkin bo’lgan pulllarni yo’qotasiz",
        "Doimo yangi mijozlarni qayerdan topish haqida o’ylab yurasiz",
        "Va hamisha mijozni hamkori emas, ishchisi bo’lishga majbur bo'lasiz"
    ]
    return (
        <div className='bg-black py-7 flex flex-col items-center'>
            <h2 className='text-white text-3xl md:max-w-[852px] font-os text-center'>Bu esa sizning barcha o’zingiz va oilangiz uchun qo’ygan moliyaviy maqsadlaringizni armonga aylantiradi.</h2>
            <div className="flex flex-row flex-wrap justify-center md:w-8/12 w-full gap-5 my-7">
                {
                    information.map((info, index) => (
                        <div className="p-[7px] rounded-3xl bg-cyan-50 max-w-[397px] h-[170px]" key={index}>
                            <div className="border-1 border rounded-3xl border-black w-full h-full p-3">
                                <p className='font-os text-[30px]'>{info}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DreamCrusher