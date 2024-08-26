import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-end items-center gap-[25px] my-[30px] absolute top-0 w-11/12 ">
            <Link href="/" className="text-[20px] font-syn text-[#FFFFFF7A] hover:text-white transition-all duration-100">
                Home
            </Link>
            <Link href="/" className="text-[20px] font-syn text-[#FFFFFF7A] hover:text-white transition-all duration-100">
                Adversite
            </Link>
            <Link href="/" className="text-[20px] font-syn text-[#FFFFFF7A] hover:text-white transition-all duration-100">
                Supports
            </Link>
            <Link href="/" className="text-[20px] font-syn text-[#FFFFFF7A] hover:text-white transition-all duration-100">
                About
            </Link>
            <Link href="/" className="text-[20px] py-[8px] px-[28px] border border-1 border-[#B8EC4C] transition-all duration-150  font-syn text-[#FFFFFF] hover:bg-[#B8EC4C] hover:text-[#fff]">
                Hire me
            </Link>
        </div>
    )
}

export default Navbar