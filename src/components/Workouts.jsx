
import React, { Suspense } from "react";
import Workout from "./Workout";

const getWorks = async () => {
    const response = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return data;
};

const WorkoutList = async () => {
    const works = await getWorks();

    return (
        <div>
            {/* Heading */}
            <div className="my-8 sm:my-10">
                <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                    The Library
                </h1>

                <p className="mt-2 text-sm text-gray-400 sm:text-base">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Workout Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {works.map((work) => (
                    <Workout
                        work={work}
                        key={work.id}
                    />
                ))}
            </div>
        </div>
    );
};

const Workouts = () => {
    return (
        <Suspense
            fallback={
                <p className="my-10 text-center text-gray-400">
                    Loading workouts...
                </p>
            }
        >
            <WorkoutList />
        </Suspense>
    );
};

export default Workouts;
