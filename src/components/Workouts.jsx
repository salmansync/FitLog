import React, { Suspense } from 'react';
import Workout from './Workout';

const getWorks = async () => {
    const response = await fetch(
        'https://api.abcz.workers.dev/api/fitlog'
    );

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    return data;
};
const WorkoutList = async () => {
    const works = await getWorks();

    console.log(works);

    return <div>
        <div className="my-10">
            <h1 className='text-white font-extrabold text-3xl'>
                The Library
            </h1>
            <p className='text-gray-400'>
                Twelve lifts covering every major muscle group.
            </p>
        </div>
        <div className='grid grid-cols-3 gap-4'>
            {
                works.map(work => <Workout
                    work={work}
                    key={work.id}></Workout>)
            }
        </div>
    </div>;
};

const Workouts = () => {
    return (
        <Suspense fallback={<p>Loading workouts...</p>}>
            <WorkoutList />
        </Suspense>
    );
};

export default Workouts;