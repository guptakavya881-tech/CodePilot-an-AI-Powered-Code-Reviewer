import React from 'react'
import { BrainCog,SunDim } from 'lucide-react';
const Navbar = () => {
  return (
    <>
      <div className="nav flex items-centre justify-between h-[90px] bg-zinc-900" style={{padding:"10px 150px"}}>
      <div className="logo flex items-centre gap-[10px]">
        <BrainCog size={40}color='#9333ea'/>
        <span className="text-2xl font-bold text-white ml-2">CodePilot</span>
        </div>
        <div className="icons flex items-centre gap-[20px]"></div>
        <i className='cursor-pointer transition-all hover:text-[#9333ea]'><SunDim/></i>
      </div>
    </>
  )
}

export default Navbar