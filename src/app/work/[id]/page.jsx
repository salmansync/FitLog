
import React, { Suspense } from 'react';
import { getWorks } from '../page';
import Image from 'next/image';
import PlanButton from '@/components/PlanButton';
import SaveButton from '@/components/SaveButton';



const WorkList = async ({ params }) => {
    const { id } = await params;

    const works = await getWorks();

    const work = works.find(
        (item) => String(item.id) === String(id)
    );

    if (!work) {
        return <p>Workout not found!</p>;
    }

    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-[#252932] bg-[#15171D] text-white md:flex-row">

            <div className="relative h-64 w-full shrink-0 md:h-auto md:w-2/5">
                <Image
                    src={work.image}
                    alt={work.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                />
            </div>

            <div className="min-w-0 flex-1 p-6">

                <h2 className="text-xl font-extrabold uppercase tracking-wide">
                    {work.name}
                </h2>
                <p className="text-gray-400 my-3">
                    {work.description}
                </p>

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

                <div className='bg-gray-800 p-4 rounded-2xl'>
                    <div className="flex justify-between py-3">

                        <p className='font-medium'>
                            Equipment
                        </p>
                        <p className="text-sm text-gray-400">
                            {work.equipment}
                        </p>
                    </div> <hr className='text-gray-500' />
                    <div className="flex justify-between py-3">

                        <p className='font-medium'>
                            Difficulty
                        </p>
                        <p className="text-sm text-gray-400">
                            {work.difficulty}
                        </p>
                    </div> <hr className='text-gray-500' />
                    <div className="flex justify-between py-3">

                        <p className='font-medium'>
                            Sets
                        </p>
                        <p className="text-sm text-gray-400">
                            {work.sets}
                        </p>
                    </div> <hr className='text-gray-500' />
                    <div className="flex justify-between py-3">

                        <p className='font-medium'>
                            Reps
                        </p>
                        <p className="text-sm text-gray-400">
                            {work.reps}
                        </p>
                    </div> <hr className='text-gray-500' />
                    <div className="flex justify-between py-3">

                        <p className='font-medium'>
                            Duration
                        </p>
                        <p className="text-sm text-gray-400">
                            {work.duration} min
                        </p>
                    </div> <hr className='text-gray-500' />
                    <div className="flex justify-between py-3">

                        <p className='font-medium'>
                            Calories
                        </p>
                        <p className="text-sm text-gray-400">
                            {work.caloriesBurned} kcal
                        </p>
                    </div> <hr className='text-gray-500' />
                    <div className="flex justify-between py-3">

                        <p className='font-medium'>
                            Rating
                        </p>
                        <p className="text-sm text-gray-400">
                            {work.rating}
                        </p>
                    </div> <hr className='text-gray-500 mb-4' />
                </div>

                <div className="mt-5 space-y-3 border-t border-[#252932] pt-4 text-sm">


                    <div>
                        <h3 className="mb-2 font-bold text-[#C6FF00]">
                            Instructions
                        </h3>

                        <ol className="list-inside list-decimal space-y-2 text-gray-300">
                            {work.instructions?.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <PlanButton work={work} />
                        <SaveButton work={work} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const WorkDetailPage = ({ params }) => {
    return (
        <Suspense fallback={<p>Loading workout details...</p>}>
            <WorkList params={params} />
        </Suspense>
    );
};

export default WorkDetailPage;
