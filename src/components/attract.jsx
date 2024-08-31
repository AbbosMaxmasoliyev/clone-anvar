import Image from 'next/image'
import React from 'react'

const Attract = () => {
    return (
        <div className='py-7 bg-black flex flex-col items-center'>
            <Image src={"/stars.png"} width={250} height={200} />
            <p className='text-center text-white font-os text-[40px] w-[90%] md:w-[60%] my-5 font-bold'>68% Marketing va soha mutaxassislarida mijoz jalb qilishda va katta narxda loyihalar olishda muammolar bor ekanligini bilarmidingiz?</p>
        </div>
    )
}

export default Attract