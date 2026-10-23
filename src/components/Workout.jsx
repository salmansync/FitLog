import Image from "next/image";
import Link from "next/link";
import React from "react";

const Workout = ({ work }) => {
    return (
        <Link href={`/work/${work.id}`} className="block h-full">
            <div className="h-full overflow-hidden rounded-2xl border border-[#252932] bg-[#15171D] text-white transition-all duration-300 hover:border-[#C6FF00]">


                <div className="relative h-52 w-full overflow-hidden">
                    <Image
                        src={work.image}
                        alt={work.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>


                <div className="p-6">


                    <div className="mb-4 flex flex-wrap gap-2">
                        {work.muscleGroups?.map((muscle, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-[#C6FF00] px-3 py-1 text-xs font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <h2 className="mb-1 text-xl font-extrabold uppercase tracking-wide">
                        {work.name}
                    </h2>


                    <p className="text-sm text-gray-400">
                        {work.equipment}
                    </p>


                    <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-[#252932] pt-4 text-sm">
                        <span className="flex items-center gap-1 text-[#C6FF00]">
                            <span>◷</span>
                            {work.duration} min
                        </span>

                        <span className="flex items-center gap-1 text-[#C6FF00]">
                            <span>♥</span>
                            {work.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1 text-[#C6FF00]">
                            <span>☆</span>
                            {work.rating}
                        </span>
                    </div>


                </div>
            </div>
        </Link>
    );
};

export default Workout;