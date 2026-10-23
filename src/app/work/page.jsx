import React, { Suspense } from 'react';
import WorkCard from '@/components/WorkCard';

export const getWorks = async () => {
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

    return <div className='grid grid-cols-3 gap-4'>
        {
            works.map(work => <WorkCard
                work={work}
                key={work.id}></WorkCard>)
        }
    </div>;
};

const WorkPage = () => {
    return (
        <Suspense fallback={<p>Loading workouts...</p>}>
            <WorkoutList />
        </Suspense>
    );
};

export default WorkPage;