import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkCard = ({ work }) => {
    return (
        <Link href={`/work/${work.id}`} className="group block h-full">
            <div className="h-full overflow-hidden rounded-2xl border border-[#252932] bg-[#15171D] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C6FF00] hover:shadow-lg hover:shadow-[#C6FF00]/5">


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

                    <h2 className="mb-1 text-xl font-extrabold uppercase tracking-wide transition-colors duration-300 group-hover:text-[#C6FF00]">
                        {work.name}
                    </h2>


                    <p className="text-sm text-gray-400">
                        {work.equipment}
                    </p>


                    <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-[#252932] pt-4 text-sm text-[#C6FF00]">
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