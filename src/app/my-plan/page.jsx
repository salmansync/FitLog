
"use client";

import React, { useContext, useState } from "react";
import { workContextProvider } from "@/context/WorkContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { CalendarDays, Bookmark } from "lucide-react";
import Link from "next/link";
import PlanCard from "@/components/PlanCard";
import SaveCard from "@/components/SaveCard";

const MyPlanePage = () => {
    const { plan, save } = useContext(workContextProvider);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [sortBy, setSortBy] = useState("default");

    const currentWorks = selectedIndex === 0 ? plan : save;

    const sortedWorks = [...currentWorks].sort((a, b) => {
        if (sortBy === "rating-high") {
            return Number(b.rating || 0) - Number(a.rating || 0);
        }

        if (sortBy === "rating-low") {
            return Number(a.rating || 0) - Number(b.rating || 0);
        }

        if (sortBy === "duration-short") {
            return Number(a.duration || 0) - Number(b.duration || 0);
        }

        if (sortBy === "duration-long") {
            return Number(b.duration || 0) - Number(a.duration || 0);
        }

        return 0;
    });

    const totalMinutes = currentWorks.reduce(
        (total, work) => total + Number(work.duration || 0),
        0
    );

    const totalCalories = currentWorks.reduce(
        (total, work) => total + Number(work.caloriesBurned || 0),
        0
    );

    return (
        <div className="min-h-screen bg-[#0B0C10] px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8 lg:py-10">

            {/* Page Heading */}
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl font-bold sm:text-3xl">
                    My Workouts
                </h1>

                <p className="mt-2 text-sm leading-relaxed text-gray-400 sm:text-base">
                    Manage your workout plan and saved exercises.
                </p>
            </div>

            {/* Stats Card */}
            <div className="mb-6 grid grid-cols-3 divide-x divide-[#252932] rounded-xl border border-[#252932] bg-[#15171D] px-2 py-4 sm:mb-8 sm:px-4 sm:py-5">

                <div className="min-w-0 px-2 sm:px-4">
                    <p className="text-[10px] leading-tight text-gray-500 sm:text-xs">
                        Exercises
                    </p>

                    <h3 className="mt-2 break-words text-xl font-extrabold text-[#C6FF00] sm:text-2xl">
                        {currentWorks.length}
                    </h3>
                </div>

                <div className="min-w-0 px-2 sm:px-6">
                    <p className="text-[10px] leading-tight text-gray-500 sm:text-xs">
                        Total Minutes
                    </p>

                    <h3 className="mt-2 break-words text-xl font-extrabold sm:text-2xl">
                        {totalMinutes}
                    </h3>
                </div>

                <div className="min-w-0 px-2 sm:px-6">
                    <p className="text-[10px] leading-tight text-gray-500 sm:text-xs">
                        Total Calories
                    </p>

                    <h3 className="mt-2 break-words text-xl font-extrabold sm:text-2xl">
                        {totalCalories}
                    </h3>
                </div>

            </div>

            {/* Tabs */}
            <Tabs
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
            >
                {/* Tabs and Sort */}
                <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    <TabList className="mb-0 flex w-full gap-2 overflow-x-auto border-b border-[#252932] sm:gap-4">

                        <Tab
                            className="flex shrink-0 cursor-pointer items-center gap-2 border-b-2 border-transparent px-3 py-3 text-xs text-gray-400 outline-none sm:px-4 sm:text-sm"
                            selectedClassName="!border-[#C6FF00] !text-[#C6FF00]"
                        >
                            <CalendarDays size={17} />
                            <span>Today's Plan ({plan.length})</span>
                        </Tab>

                        <Tab
                            className="flex shrink-0 cursor-pointer items-center gap-2 border-b-2 border-transparent px-3 py-3 text-xs text-gray-400 outline-none sm:px-4 sm:text-sm"
                            selectedClassName="!border-[#C6FF00] !text-[#C6FF00]"
                        >
                            <Bookmark size={17} />
                            <span>Saved Exercises ({save.length})</span>
                        </Tab>

                    </TabList>

                    {/* Sorting */}
                    <div className="flex w-full items-center gap-3 lg:w-auto lg:shrink-0">
                        <label
                            htmlFor="workout-sort"
                            className="shrink-0 text-sm font-semibold tracking-wide text-gray-400"
                        >
                            Sort by
                        </label>

                        <select
                            id="workout-sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="min-w-0 flex-1 cursor-pointer rounded-xl border border-[#30343D] bg-[#15171D] px-3 py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:border-[#C6FF00]/60 focus:border-[#C6FF00] focus:ring-2 focus:ring-[#C6FF00]/20 sm:px-4 lg:w-56 lg:flex-none"
                        >
                            <option value="default">Default Order</option>
                            <option value="rating-high">⭐ Rating: High to Low</option>
                            <option value="rating-low">⭐ Rating: Low to High</option>
                            <option value="duration-short">Duration: Short to Long</option>
                            <option value="duration-long">Duration: Long to Short</option>
                        </select>
                    </div>

                </div>

                {/* Today's Plan */}
                <TabPanel>

                    {plan.length === 0 ? (
                        <div className="flex flex-col items-center justify-center rounded-xl border border-[#252932] bg-[#15171D] px-4 py-12 text-center sm:py-16">

                            <CalendarDays
                                size={44}
                                className="mb-4 text-gray-500 sm:h-12 sm:w-12"
                            />

                            <h2 className="text-lg font-bold sm:text-xl">
                                No Workouts Planned Yet
                            </h2>

                            <p className="mt-2 text-sm text-gray-400 sm:text-base">
                                Add some workouts to your plan.
                            </p>

                            <Link
                                href="/"
                                className="mt-5 rounded-lg bg-[#C6FF00] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#b2e600] sm:text-base"
                            >
                                Explore Workouts
                            </Link>

                        </div>
                    ) : (
                        <div className="space-y-3">
                            {sortedWorks.map((work) => (
                                <PlanCard
                                    key={work.id}
                                    work={work}
                                />
                            ))}
                        </div>
                    )}

                </TabPanel>

                {/* Saved Exercises */}
                <TabPanel>

                    {save.length === 0 ? (
                        <div className="flex flex-col items-center justify-center rounded-xl border border-[#252932] bg-[#15171D] px-4 py-12 text-center sm:py-16">

                            <Bookmark
                                size={44}
                                className="mb-4 text-gray-500 sm:h-12 sm:w-12"
                            />

                            <h2 className="text-lg font-bold sm:text-xl">
                                No Saved Exercises Yet
                            </h2>

                            <p className="mt-2 text-sm text-gray-400 sm:text-base">
                                Save workouts to find them here later.
                            </p>

                            <Link
                                href="/"
                                className="mt-5 rounded-lg bg-[#C6FF00] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#b2e600] sm:text-base"
                            >
                                Explore Workouts
                            </Link>

                        </div>
                    ) : (
                        <div className="space-y-3">
                            {sortedWorks.map((work) => (
                                <SaveCard
                                    key={work.id}
                                    work={work}
                                />
                            ))}
                        </div>
                    )}

                </TabPanel>

            </Tabs>

        </div>
    );
};

export default MyPlanePage;
