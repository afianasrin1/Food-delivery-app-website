import React from 'react';
import logo from '../Assets/logo.png'
import { BsTwitter } from 'react-icons/bs';
import {AiFillFacebook   } from 'react-icons/ai'; 
import { FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <div className='lg:w-[1210px] mx-auto lg:flex-row flex-col flex justify-between items-center py-[50px]'>
            <div className='hidden lg:block '>
                <a href="/"> <img src={logo} alt="" /></a>
            </div>
            <div className='flex gap-3 text-[40px] text-[#FA4A0C] lg:pb-0 pb-4'>
                <a href=""><BsTwitter /></a>
                <a href=""><AiFillFacebook /></a>
                <a href=""><FaLinkedin/></a>
            </div>
            <div>
                <p className='text-[#5C5C5C] hidden lg:block font-bold'>Copywright 2023 Bella Onojie.com</p>
                <p className=' lg:hidden font-bold text-[#5C5C5C]'>Just type what's on your mind and we'll </p>
            </div>
        </div>
    );
};

export default Footer;