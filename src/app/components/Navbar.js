"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { menuLinks } from '../helper/helper'

import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

const Navbar = () => {
    const [color,setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    typeof window !== "undefined" && window.addEventListener('scroll', changeColor)//using typeof to avoid err



    return (
        <nav className={color ? 
        'fixed text-white px-[5%] py-6 flex w-full justify-between items-center bg-sky-500 duration-300 shadow-2xl z-[99]'
        :
        'fixed text-white px-[5%] py-6 flex w-full justify-between items-center duration-300 z-[99]'}>
            <div className='flex items-center'>
                <DirectionsBusIcon fontSize='large' />
                <h3 className='text-3xl font-semibold mb-1'>DreamBus</h3>
            </div>
            <div className='flex gap-4 items-center '>
                {menuLinks.map((link, index) => {
                    return (
                        <div key={index}>
                            <a  className='hover:text-ftHover duration-300 text-[1.2rem]' href={link.href}>{link.name}</a>
                        </div>
                    )
                })}
                <a href='#' className='border-2 border-white p-2 text-[1.2rem] hover:text-ftHover duration-300 hover:border-ftHover'>Contato</a>
            </div>

        </nav>
    )
}

export default Navbar