import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col w-full  items-center bg-sky-500 border-t-[1px] border-white py-12'>
        <p>&copy; Copyright A Fihr Site</p>
        <p>Made With <span className='text-red-500'>♥</span> and Next.js</p>
    </footer>
  )
}

export default Footer