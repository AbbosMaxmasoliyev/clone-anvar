import Image from 'next/image'
import React from 'react'

const Card = () => {
    return (
        <div className="flex flex-col items-center w-[358px] bg-[#1A1A1A]">
            <Image
                src={require("../assets/images/work.png")}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <div className="flex flex-col p-[17px] w-full">
                <p className="text-white text-[20px] font-syn">Milky way Locator</p>
                <p className="text-[#FFFFFF7A] font-syn">Mobile App</p>
            </div>
        </div>
    )
}

export default Card