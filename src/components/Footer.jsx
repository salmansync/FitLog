import Image from 'next/image';
import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#090A0D]">
            <div className="mx-auto max-w-400 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">


                    <div className="flex items-center gap-2">
                        <Image
                            className="h-8 w-8 object-contain"
                            src={logo}
                            alt="FitLog logo"
                        />

                        <h1 className="text-lg font-bold text-white">
                            Fit<span className="text-[#C6FF00]">Log</span>
                        </h1>
                    </div>


                    <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                        © 2026 FitLog — Workout Library.
                        <span className="block sm:inline sm:ml-1">
                            Train hard, log honest.
                        </span>
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;