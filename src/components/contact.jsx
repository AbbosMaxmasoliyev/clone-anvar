import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (

        <div className="flex flex-row py-[140px] w-full justify-center">
            <div className="w-11/12  flex flex-col md:flex-row justify-center items-center">
                <div className="w-4/12">
                    <div className="overflow-hidden  h-[550px] ">
                        <Image src="/dream.png" width={350} height={450} className="block  z-10 " />
                    </div>
                </div>
                <div className="flex flex-col w-4/12">
                    <p className="text-[30px] font-syn mb-12">If you have any dream project in your mind, let's make it happen together</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="font-syn text-[#999999] font-semibold">Full name</label>
                            <input type="text" className=" border border-transparent border-b-[2px]  font-syn bg-transparent focus:outline-none px-4 py-1 border-b-[#444444]" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-syn text-[#999999] font-semibold">Email</label>
                            <input type="email" className=" border border-transparent border-b-[2px]  font-syn bg-transparent focus:outline-none px-4 py-1 border-b-[#444444]" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-syn text-[#999999] font-semibold">What's your mind</label>
                            <textarea className=" border border-transparent border-b-[2px] border-b-[#444444] font-syn bg-transparent focus:outline-none px-4 py-1" ></textarea>
                        </div>
                        <div className="flex flex-col">
                            <button className="py-3 px-5 bg-[#6666] font-syn hover:bg-white hover:text-[#000] transition-all duration-150">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact