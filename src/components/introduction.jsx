import Image from 'next/image'
import React from 'react'
import { FaUsers } from "react-icons/fa";
import { TbMapPin } from "react-icons/tb";
import { FaCalendarDays } from "react-icons/fa6";


const Introduction = ({ children }) => {
    const info = [
        {
            title: "1-mavzu:",
            information: "Qanday qilib maqsadli auditoriyani 100% ga aniqlash"
        },
        {
            title: "2-mavzu:",
            information: "Mijoz rad eta olmaydigan taklif yaratish"
        },
        {
            title: "3-mavzu:",
            information: "Shaxsiy brendni boshlash va mijozlar ishonchini uygotish"
        },
        {
            title: "4-mavzu:",
            information: "Sotuv voronkasini ishlab chiqish"
        },
        {
            title: "5-mavzu:",
            information: "Traffik jalb qilish"
        },
        {
            title: "6-mavzu:",
            information: "Sifatli mijozlarni saralab olish va ularni uchrashuvga olib kelish"
        },
        {
            title: "7-mavzu:",
            information: "Ikki qadamli qimmat sotish konsultatsiyasi"
        },

    ]
    return (
        <div className="flex flex-col font-os text-center my-5 items-center">
            <p className='text-2xl font-bold'>Keling sizga o&apos;zimni tanishtirsam…</p>
            <div className="flex flex-row items-center justify-center my-5">
                <Image src={"/image_9_1.png"} width={150} height={100} />
                <Image src={"/image_5_1.png.webp"} width={150} height={100} />
            </div>
            <p className='text-4xl font-bold md:max-w-[50%]  text-center'>Qanday qilib 7 qadamda qimmat sotib oladigan mijozlarni jalb qilish</p>
            <div className="flex flex-row gap-5 my-5 flex-wrap justify-center">
                <div className="flex flex-row justify-center bg-[#2f2f2f] p-1 rounded-md">
                    <div className="border flex flex-row gap-3 items-center text-xl text-white  px-5 border-white border-solid rounded-md"><FaUsers /> Offline</div>
                </div>
                <div className="flex flex-row justify-center bg-[#2d6dda] p-1 rounded-md">
                    <div className="border flex flex-row gap-3 items-center text-xl text-white  px-5 border-white border-solid rounded-md"><TbMapPin /> Toshkent shahrida</div>
                </div>
                <div className="flex flex-row justify-center bg-[#ed1313] p-1 rounded-md">
                    <div className="border flex flex-row gap-3 items-center text-xl text-white  px-5 border-white border-solid rounded-md"><FaCalendarDays /> 8-Sentabr kuni</div>
                </div>
            </div>
            {
                children
            }
            <div className="flex flex-row flex-wrap justify-center w-8/12 gap-5 ">
                {
                    info.map((value, index) => {


                        if (index % 3 == 0 || (index + 1) % 3 == 1) {

                            return (<div className="flex flex-row justify-center  bg-[#dbaa6c] p-2 rounded-md w-[434px] h-[194px]" key={index}>
                                <div className="border flex flex-col gap-3 items-start text-xl text-white  px-5 border-white border-solid rounded-md w-full h-full py-5">
                                    <p className='text-start text-4xl self-start'>{value.title}</p>
                                    <p className='text-start  self-start'>{value.information}</p>
                                </div>
                            </div>)
                        } else {
                            return (<div className="flex flex-row justify-center bg-[#2f2f2f] p-2 rounded-md w-[434px] h-[194px]" key={index}>
                                <div className="border flex flex-col gap-3 items-start text-xl text-white  px-5 border-white border-solid rounded-md w-full h-full py-5">
                                    <p className='text-start text-4xl self-start'>{value.title}</p>
                                    <p className='text-start  self-start'>{value.information}</p>
                                </div>
                            </div>)
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Introduction