
import Image from "next/image";
import React from "react";
import banner from "../assets/banner.png";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="my-6 flex w-full flex-col items-center justify-between gap-8 rounded-3xl border border-gray-800 bg-[#12141d] p-6 text-white shadow-2xl sm:my-8 sm:p-8 lg:my-10 lg:flex-row lg:gap-8 lg:p-12">


            <div className="w-full flex-1 space-y-5 sm:space-y-6 lg:max-w-xl">

                <p className="text-xs font-extrabold tracking-widest text-lime-400 uppercase">
                    WORKOUT LIBRARY
                </p>

                <h1 className="font-sans text-4xl leading-tight font-black tracking-tight uppercase sm:text-5xl sm:leading-none lg:text-6xl">
                    TRAIN WITH INTENT. LOG EVERY SET.
                </h1>

                <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                    FitLog is a dark, no-nonsense gym companion: pick a
                    lift, lock it into today&apos;s plan, and watch the
                    week&apos;s work add up.
                </p>

                <div className="pt-2">
                    <Link
                        href="/work"
                        className="inline-block rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-extrabold tracking-wider text-black uppercase shadow-md transition-all duration-200 hover:bg-lime-300"
                    >
                        BROWSE WORKOUTS
                    </Link>
                </div>
            </div>


     <div className="relative mt-4 h-64 w-full shrink-0 sm:h-80 lg:mt-0 lg:h-87 lg:w-full lg:max-w-md lg:flex-1">
    <Image
        src={banner}
        alt="Workout Illustration"
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 450px"
        className="object-contain object-center lg:object-right"
    />
</div>

        </div>
    );
};

export default Banner;
