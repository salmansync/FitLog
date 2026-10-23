"use client";

import React, { useContext, useState } from "react";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import Link from "next/link";
import { workContextProvider } from "@/context/WorkContext";
import { toast } from "react-toastify";

const PlanCard = ({ work }) => {
    const { plan, setPlan } = useContext(workContextProvider);

    const [isCompleted, setIsCompleted] = useState(false);

    const {
        name,
        equipment,
        image,
        duration,
        caloriesBurned,
        rating,
    } = work;

    const handleRemove = () => {
        const remove = plan.filter((ply) => ply.id !== work.id);

        setPlan(remove);

        toast.success("Removed from your plan!");
    };


    const handleComplete = () => {
        const updatedPlan = plan.filter(
            (item) => item.id !== work.id
        );

        setPlan(updatedPlan);

        toast.success("Workout completed!");
    };

    return (
        <div className="flex w-full items-center justify-between gap-4 rounded-2xl border border-gray-800 bg-[#12141d] p-4 text-white shadow-lg">


            <div className="flex items-center gap-4">


                <div className="h-20 w-36 shrink-0 overflow-hidden rounded-xl bg-gray-800">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                </div>


                <div className="flex flex-col justify-center gap-1">

                    <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
                        {name}
                    </h3>

                    <p className="text-xs font-medium text-gray-400">
                        {equipment}
                    </p>


                    <div className="mt-1 flex items-center gap-4 text-xs text-gray-300">

                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-lime-400" />
                            <span>{duration} min</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Flame className="h-4 w-4 text-lime-400" />
                            <span>{caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-lime-400 text-lime-400" />
                            <span>{rating}</span>
                        </div>

                    </div>
                </div>
            </div>


            <div className="flex items-center gap-3">


                <Link
                    href={`/work/${work.id}`}
                    className="rounded-full border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:border-gray-500"
                >
                    View Details
                </Link>


                <button
                    onClick={handleComplete}
                    disabled={isCompleted}
                    className={`flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${isCompleted
                        ? "cursor-not-allowed bg-gray-700 text-gray-300"
                        : "bg-lime-400 text-black hover:bg-lime-300"
                        }`}
                >
                    <Check className="h-4 w-4" />
                    {isCompleted ? "Completed" : "Mark as Done"}
                </button>


                <button
                    onClick={handleRemove}
                    aria-label="Remove workout"
                    className="ml-1 p-1 text-gray-500 transition-colors hover:text-red-400"
                >
                    <X className="h-5 w-5" />
                </button>

            </div>
        </div>
    );
};

export default PlanCard;