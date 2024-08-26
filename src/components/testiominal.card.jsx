import React from 'react'
import Quote from "@/assets/images/quote.svg"
import Image from 'next/image'
import { MdOutlineStarPurple500 } from "react-icons/md";

const TestiominalCard = () => {
    return (
        <div className="p-[24px] bg-[#101010] max-w-[318px]">
            <div className="quote"></div>
            <p className="font-syn text-white mt-[12px] min-h-[140px]">
                Pharetra urna sapien ultrices vel consequat ultrices orci praesent risus. Lorem porttitor libero facilisis non pharetra mattis odio in.
            </p>
            <div className="flex justify-end mt-[24px]">
                <Image src="/expert.png" width={60} height={60} alt="" />
            </div>
            <div className="flex flex-col mt-[12px]">
                <p className="text-white font-syn">Courtney Henry</p>
                <p className="text-[#FFFFFF7A] text-[14px] font-syn">CEO, Gillette</p>
            </div>
            <div className="flex flex-row ">
                {
                    [1, 2, 3, 4, 5].map((value) => {
                        return <MdOutlineStarPurple500 color='#EBC500' key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default TestiominalCard