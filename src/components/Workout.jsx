
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Workout = ({ work }) => {
    return (
        <Link href={`/work/${work.id}`}>
            <div className="overflow-hidden rounded-2xl border border-[#252932] bg-[#15171D] text-white">
                {/* Workout Image */}
                <div className="relative h-52 w-full">
                    <Image
                        src={work.image}
                        alt={work.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* Workout Details */}
                <div className="p-6">
                    {/* Muscle Groups */}
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

                    {/* Workout Name */}
                    <h2 className="mb-1 text-xl font-extrabold uppercase tracking-wide">
                        {work.name}
                    </h2>

                    {/* Equipment */}
                    <p className="text-sm text-gray-400">
                        {work.equipment}
                    </p>

                    {/* Workout Stats */}
                    <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-[#252932] pt-4 text-sm text-gray-400">
                        <span>◷ {work.duration} min</span>
                        <span>♥ {work.caloriesBurned} kcal</span>
                        <span>☆ {work.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Workout;
