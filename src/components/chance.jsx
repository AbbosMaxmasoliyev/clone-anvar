import React from 'react'

const Chance = ({ submit }) => {
    return (
        <div className='bg-black py-10 flex flex-col items-center'>
            <h2 className='text-4xl text-white font-os font-bold text-center'>USHBU IMKONIYATNI QO&apos;LDAN BOY BERMANG</h2>
            <p className='text-xl font-os text-center text-white my-5'>Hoziroq quyidagi havola orqali ma&apos;lumotlaringizni kiriting va o&apos;z joyingizni band qiling!</p>
            <button className="h-14 flex justify-center items-center text-xl text-white rounded-[20px] bg-blue-600 w-[244px] font-os max-w-[80%]" onClick={submit ? submit : null}>
                <span>JOY BAND QILISH</span>
            </button>
            <p className='font-os w-[70%] max-w-[340px] text-center text-[#ff8562]  my-5'>Yo&apos;q, raxmat. qimmat sotib oladigan mijozlarni jalb sirlarini o&apos;rganishni xohlamayman, faqatgina videodarslikni olmoqchiman.</p>
        </div>
    )
}

export default Chance