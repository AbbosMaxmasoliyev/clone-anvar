"use client"
import Link from 'next/link'
import React from 'react'
import Footer from './footer'
import CountdownTimer from './timer'


const Half = ({ children }) => {


    return (
        <div className="flex flex-col items-center w-full min-h-screen justify-center font-os pt-16 h-auto pb-5">
            {
                children
            }

        </div>
    )
}

export default Half