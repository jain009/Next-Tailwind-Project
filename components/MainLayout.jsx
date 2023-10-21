"use client";

import React from 'react'; 
import Link from 'next/link';
import MainHeader from './MainHeader';

import {AiOutLineHome} from "react-icons/ai";
import {GrProject} from "react-icons/gr";
import { FaAngleRight, FaCheck,FacheckDouble} from "react-icons/fs";
import { FiPhoneCall} from "react-icons/fi";
import { SiHelpscout } from "react-icons/si";
import { MenuContext } from '@/context/MenuContext';

const MainLayout = ({children}) => {
  const {open} = useContext(MenuContext);
  return (
    <div className='bg-gray-100 w-full min-h-screen '>
          <MainHeader />
      <div className='flex justify-start items-start'>
        <aside className={'bg-white rounded-lg overflow-hidden transition-all duration-200 ${open?"w-60 p-4":"w-0"} md:w-60 md:p-4'}>L
         <ul>
              <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl-2'>
                <AiOutLineHome className="mr-2"/>
                <Link href="/"></Link>
              </li>
              <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl-2'>
                <GrProject className="mr-2"/>
                <h3 className='flex-1'>Projects</h3>
                <FaAngleRight />
              </li>
              <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl-2'>
                <FaCheck className="mr-2"/>
                <h3 className='flex-1'>Singule</h3>
                <FaAngleRight />
              </li>
              <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl-2'>
                <FacheckDouble  className="mr-2"/>
                <h3 className='flex-1'>Complex</h3>
                <FaAngleRight/>
              </li>
              <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl-2'>
                < SiHelpscout className="mr-2"/>
                <Link href="/about-us">About Us</Link>
              </li>
              <li className='flex justify-start items-center hover:bg-orange-200 hover:text-blue-800 rounded-xl-2'>
                < FiPhoneCall className="mr-2"/>
                <Link href="/contact-us">Contact us</Link>
              </li>
         </ul>
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout;