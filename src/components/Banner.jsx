import Image from 'next/image';
import React from 'react';
import banner from '../assets/banner.png'
import Link from 'next/link';
const Banner = () => {
    return (
        <div className="w-full bg-[#12141d] border border-gray-800 rounded-3xl p-12 text-white flex items-center justify-between gap-8 shadow-2xl my-10">
            <div className="flex-1 space-y-6 max-w-xl">
                <p className="text-lime-400 font-extrabold text-xs tracking-widest uppercase">
                    WORKOUT LIBRARY
                </p>
                <h1 className="text-6xl font-black tracking-tight leading-none uppercase font-sans">
                    TRAIN WITH INTENT. LOG EVERY SET.
                </h1>
                <p className="text-gray-400 text-base leading-relaxed">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                </p>
                <div className="pt-2">
                    <Link href={'/work'} className="bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md">
                        BROWSE WORKOUTS
                    </Link>
                </div>
            </div>
            <div className="relative flex-1 flex justify-end items-center w-full max-w-md h-87">
                <Image
                    src={banner}
                    alt="Workout Illustration"
                    fill
                    priority
                    className="object-contain object-right"
                />
            </div>
        </div>
    );
};

export default Banner;