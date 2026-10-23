import Image from 'next/image';
import React from 'react';
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div className='bg-[#090A0D]'>
            <div className="max-w-400 mx-auto p-8">
                <div className='flex justify-between'>
                    <div className="flex gap-2">
                        <Image className='' src={logo} alt='logo' />
                        <h1 className='font-bold'>
                            FitLog
                        </h1>
                    </div>
                    <p className='font'>
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;