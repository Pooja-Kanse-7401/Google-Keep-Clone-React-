import React, { useState } from 'react'
import { SiGooglekeep } from "react-icons/si";
import { FaBars, FaMagnifyingGlass, FaArrowRotateRight, FaUserLarge, FaXmark } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
import { TbLayoutList } from "react-icons/tb";
import { TbGridDots } from "react-icons/tb";

import { FaRegLightbulb, FaRegBell, FaTrashCan } from "react-icons/fa6";
import { MdOutlineModeEdit, MdOutlineArchive } from "react-icons/md";
import { NavLink } from 'react-router-dom';


function NavBar() {

    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen(!navOpen)
    }

    return (
        <>
            <div className='w-[100%] h-[9vh] border-2 flex justify-around items-center text-zinc-500'>
                <div className='flex justify-start items-center md:w-[15%] w-[60%] text-xl gap-2'>
                    <span className='hover:bg-gray-100 w-[7vh] h-[7vh] p-3 rounded-full flex justify-center items-center hover:text-black'>
                        <button onClick={toggleNav} className=''>
                            {navOpen ? <FaXmark /> : <FaBars />}
                        </button>
                    </span>
                    <SiGooglekeep className='font-bold text-4xl text-orange-300' />
                    <h1 className='text-2xl hover:underline '>Keep</h1>
                </div>
                <div className='relative w-[10%] md:w-[65%] flex justify-start items-center'>
                    <label htmlFor="search" className='absolute left-4 text-lg'><FaMagnifyingGlass /></label>
                    <input type="text" name="search" id="search" placeholder='Search' className='bg-transparent md:bg-gray-100 w-[70%] p-3 pl-12 rounded-lg outline-none hover:bg-white md:hover:border-2 md:hover:shadow-sm' />
                </div>
                <div className='md:flex hidden justify-around items-center text-xl'>
                    <span className='hover:bg-gray-100 w-[7vh] h-[7vh] p-3 rounded-full flex justify-center items-center hover:text-black'>
                        <FaArrowRotateRight />
                    </span><span className='hover:bg-gray-100 w-[7vh] h-[7vh] p-3 rounded-full flex justify-center items-center hover:text-black'>
                        <TbLayoutList />
                    </span><span className='hover:bg-gray-100 w-[7vh] h-[7vh] p-3 rounded-full flex justify-center items-center hover:text-black'>
                        <LuSettings />
                    </span>
                </div>
                <div className='flex justify-around items-center text-xl'>
                    <span className='hover:bg-gray-100 w-[7vh] h-[7vh] p-3 rounded-full flex justify-center items-center hover:text-black'>
                        <TbGridDots className='text-2xl' />
                    </span><span className='hover:bg-gray-100 bg-orange-400 w-[6vh] h-[6vh] p-3 rounded-full flex justify-center items-center hover:text-black'>
                        <FaUserLarge />
                    </span>
                </div>
            </div>

            <div className={`${navOpen ? "hidden " : "block"} w-[20%] h-[100%]`} >

                <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-500" : " text-zinc-700"}`}>
                    <ul className='flex justify-start py-3 rounded-r-full hover:bg-zinc-200 mt-2'>
                        <li className='mx-7 text-xl'><FaRegLightbulb /></li>
                        <li>Notes</li>
                    </ul>
                </NavLink>
                <NavLink to="/reminders" className={({ isActive }) => `${isActive ? "text-orange-500" : " text-zinc-700"}`}>
                    <ul className='flex justify-start py-3 rounded-r-full hover:bg-zinc-200'>
                        <li className='mx-7 text-xl'><FaRegBell /></li>
                        <li>Reminders</li>
                    </ul>
                </NavLink>
                <NavLink to="/editLabels" className={({ isActive }) => `${isActive ? "text-orange-500" : " text-zinc-700"}`}>
                    <ul className='flex justify-start py-3 rounded-r-full hover:bg-zinc-200'>
                        <li className='mx-7 text-xl'><MdOutlineModeEdit /></li>
                        <li>Edit Labels</li>
                    </ul>
                </NavLink>
                <NavLink to="/archive" className={({ isActive }) => `${isActive ? "text-orange-500" : " text-zinc-700"}`}>
                    <ul className='flex justify-start py-3 rounded-r-full hover:bg-zinc-200'>
                        <li className='mx-7 text-xl'><MdOutlineArchive /></li>
                        <li>Archive</li>
                    </ul>
                </NavLink>
                <NavLink to="/bin" className={({ isActive }) => `${isActive ? "text-orange-500" : " text-zinc-700"}`}>
                    <ul className='flex justify-start py-3 rounded-r-full hover:bg-zinc-200'>
                        <li className='mx-7 text-xl'><FaTrashCan /></li>
                        <li>Bin</li>
                    </ul>
                </NavLink>
            </div>
            <div className={`${navOpen ? "block" : "hidden"} w-[5%] h-[100%]`}>
                <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-500" : " text-zinc-700"}`}>
                    <ul className='flex justify-start py-3 rounded-r-full hover:bg-zinc-200 mt-2'>
                        <li className='mx-7 text-xl'><FaRegLightbulb /></li>        
                    </ul>
                </NavLink>
                <NavLink to="/reminders" className={({ isActive }) => `${isActive ? "text-orange-500" : " text-zinc-700"}`}>
                    <ul className='flex justify-start py-3 rounded-r-full hover:bg-zinc-200'>
                        <li className='mx-7 text-xl'><FaRegBell /></li>                        
                    </ul>
                </NavLink>
                <NavLink to="/editLabels" className={({ isActive }) => `${isActive ? "text-orange-500" : " text-zinc-700"}`}>
                    <ul className='flex justify-start py-3 rounded-r-full hover:bg-zinc-200'>
                        <li className='mx-7 text-xl'><MdOutlineModeEdit /></li>                        
                    </ul>
                </NavLink>
                <NavLink to="/archive" className={({ isActive }) => `${isActive ? "text-orange-500" : " text-zinc-700"}`}>
                    <ul className='flex justify-start py-3 rounded-r-full hover:bg-zinc-200'>
                        <li className='mx-7 text-xl'><MdOutlineArchive /></li>                
                    </ul>
                </NavLink>
                <NavLink to="/bin" className={({ isActive }) => `${isActive ? "text-orange-500" : " text-zinc-700"}`}>
                    <ul className='flex justify-start py-3 rounded-r-full hover:bg-zinc-200'>
                        <li className='mx-7 text-xl'><FaTrashCan /></li>
                    </ul>
                </NavLink>
            </div>
        </>
    )
}

export default NavBar
