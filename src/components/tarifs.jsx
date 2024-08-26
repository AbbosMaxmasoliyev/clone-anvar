import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaCircleCheck } from 'react-icons/fa6'

const Tarifs = () => {
    const information = [
        {
            title: "1-BONUS",
            decsription: "Qimmat sotib oladigan mijozlarni jalb qilishni 7 ta qadami qo’llanma. (Qiymati 997,000 so’m)",
            image: "/vol1.png"
        },
        {
            title: "2-BONUS",
            decsription: "Kim bilan ishlash kerak, va kim bilan ishlamaslik kerak cheklistini. (Qiymati 497,000 so’m)",
            image: "/qalam.png"
        },
        {
            title: "3-BONUS",
            decsription: "Kim bilan ishlash kerak, va kim bilan ishlamaslik kerak cheklistini. (Qiymati 497,000 so’m)",
            image: "/laptop.png"
        },
    ]

    return (
        <div className='bg-black py-5 text-white font-os'>
            <p className='text-4xl text-center font-bold'>TARIFLAR</p>
            <div className="flex flex-row justify-center  my-5 flex-wrap gap-10">
                <div className="flex flex-row justify-center  bg-[#dbaa6c] p-2 rounded-[45px] relative w-[357px]">
                    <div className="border flex flex-col   gap-3 items-center text-xl text-white rounded-[45px]  p-5 border-white border-solid w-full h-full">
                        <FaCircleCheck />
                        <p className='text-start text-4xl self-center'>PREMIUM</p>
                        <div className="border-t w-10/12"></div>
                        <ol className='list-decimal px-5'>
                            <li>Trenigda qatnashish imkoniyati</li>
                            <li>Ishtirokchilar bilan networking</li>
                            <li>Yopiq guruhga qo’shilish</li>
                            <li className='line-through'>Old qatorda o’tirish</li>
                            <li className='line-through'>Ertasi kuni 2 soatlik yopiq offline razbor</li>
                        </ol>
                        <p className='text-center w-full line-through font-bold text-2xl mt-5'>497,000 SO’M</p>
                        <p className='px-4 py-1 text-white text-4xl font-os border rounded-xl mt-5'>297.000 SO'M</p>
                        <button className="border h-14 flex justify-center items-center text-xl text-white rounded-[45px] bg-blue-600 w-10/12  absolute bottom-[-14px]">
                            <span>JOY BAND QILISH</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-row justify-center  bg-[#dbaa6c] p-2 rounded-[45px] relative w-[357px]">
                    <div className="border flex flex-col   gap-3 items-center text-xl text-white rounded-[45px]  p-5 border-white border-solid w-full h-full">
                        <FaCircleCheck />
                        <p className='text-start text-4xl self-center'>PREMIUM</p>
                        <div className="border-t w-10/12"></div>
                        <ol className='list-decimal px-5'>
                            <li>Trenigda qatnashish imkoniyati</li>
                            <li>Ishtirokchilar bilan networking</li>
                            <li>Yopiq guruhga qo’shilish</li>
                            <li className='line-through'>Old qatorda o’tirish</li>
                            <li className='line-through'>Ertasi kuni 2 soatlik yopiq offline razbor</li>
                        </ol>
                        <p className='text-center w-full line-through font-bold text-2xl mt-5'>497,000 SO’M</p>
                        <p className='px-4 py-1 text-white text-4xl font-os border rounded-xl mt-5 mb-5'>297.000 SO'M</p>
                        <button className="border h-14 flex justify-center items-center text-xl text-white rounded-[45px] bg-blue-600 w-10/12  absolute bottom-[-14px]">
                            <span>JOY BAND QILISH</span>
                        </button>
                    </div>
                </div>
            </div>
            <p className='text-4xl text-center font-bold mt-10 mb-5'>BONUS</p>
            <div className="flex justify-center flex-col items-center gap-5">
                <Image src={"/podarka.webp"} width={150} height={150} />
                <p className='font-os text-2xl w-[320px] max-w-[300px] text-center'>Trening ishtirokchilariga quyidagi Bepul bonuslarni beraman</p>
                <div className="flex flex-col gap-10 items-center w-full">
                    {
                        information.map((info, index) => {

                            return (
                                <div className="flex flex-row justify-center  bg-[#dbaa6c] p-2  rounded-[45px] w-[434px] max-w-[90%] md:h-[194px] relative z-10">
                                    <Image src={info.image} className={`absolute md:${index % 2 === 0 ? "top-[-40px] md:right-[-80px]" : "bottom-[-40px] md:left-[-70px]"} z-0`} width={100} height={100} />
                                    <div className="border grid grid-cols-1 grid-rows-2 gap-3 md:p-2 p-5 items-start text-xl text-white  px-5 border-white border-solid rounded-[45px] w-full h-full relative ">
                                        <p className='text-start text-2xl md:text-4xl self-center'>1-BONUS</p>
                                        <p className='text-start  self-start text-sm'>Qimmat sotib oladigan mijozlarni jalb qilishni 7 ta qadami qo’llanma. (Qiymati 997,000 so’m)</p>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Tarifs