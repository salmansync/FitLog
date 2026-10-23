
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkCard = ({ work }) => {
    return (
        <Link
            href={`/work/${work.id}`}
            className="block h-full"
        >
            <div className="h-full overflow-hidden rounded-2xl border border-[#252932] bg-[#15171D] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C6FF00]/50 hover:shadow-lg hover:shadow-[#C6FF00]/5">


                <div className="relative h-48 w-full overflow-hidden sm:h-52">
                    <Image
                        src={work.image}
                        alt={work.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>


                <div className="p-4 sm:p-6">


                    <div className="mb-4 flex flex-wrap gap-2">
                        {work.muscleGroups?.map((muscle, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-[#C6FF00] px-2.5 py-1 text-[10px] font-bold uppercase text-black sm:px-3 sm:text-xs"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <h2 className="mb-2 text-lg font-extrabold tracking-wide uppercase sm:text-xl">
                        {work.name}
                    </h2>


                    <p className="text-sm text-gray-400">
                        {work.equipment}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#252932] pt-4 text-xs text-gray-400 sm:gap-4 sm:text-sm">

                        <span>◷ {work.duration} min</span>

                        <span>♥ {work.caloriesBurned} kcal</span>

                        <span>☆ {work.rating}</span>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkCard;
