import React from 'react'
import Card from './card'

const Works = () => {
    return (
        <div className="w-full bg-[#000000] min-h-[500px] flex flex-col items-center xl:py-[132px] py-[40px]">
            <div className="w-11/12">
                <p className="text-[#FFFFFF7A] font-syn mb-[42px]">My works</p>

                <div className="flex flex-col gap-[146px]">
                    <div className="flex flex-row lg:justify-start justify-center lg:gap-[146px] gap-[30px] flex-wrap md:flex-nowrap ">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="flex flex-row lg:justify-end justify-center lg:gap-[146px] gap-[30px] flex-wrap md:flex-nowrap ">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="flex flex-row lg:justify-start justify-center lg:gap-[146px] gap-[30px] flex-wrap md:flex-nowrap ">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works