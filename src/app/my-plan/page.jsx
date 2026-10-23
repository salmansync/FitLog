
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

    const currentWorks = selectedIndex === 0 ? plan : save;
    const [sortBy, setSortBy] = useState("default");
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
        <div className="min-h-screen bg-[#0B0C10] px-8 py-10 text-white">

            {/* Page Heading */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    My Workouts
                </h1>

                <p className="mt-2 text-gray-400">
                    Manage your workout plan and saved exercises.
                </p>
            </div>

            {/* Stats Card */}
            <div className="mb-8 grid grid-cols-3 rounded-xl border border-[#252932] bg-[#15171D] px-4 py-5">

                <div className="border-r border-[#252932] px-4">
                    <p className="text-xs text-gray-500">
                        Exercises
                    </p>

                    <h3 className="mt-1 text-2xl font-extrabold text-[#C6FF00]">
                        {currentWorks.length}
                    </h3>
                </div>

                <div className="border-r border-[#252932] px-6">
                    <p className="text-xs text-gray-500">
                        Total Minutes
                    </p>

                    <h3 className="mt-1 text-2xl font-extrabold">
                        {totalMinutes}
                    </h3>
                </div>

                <div className="px-6">
                    <p className="text-xs text-gray-500">
                        Total Calories
                    </p>

                    <h3 className="mt-1 text-2xl font-extrabold">
                        {totalCalories}
                    </h3>
                </div>

            </div>

            {/* Tabs */}
            <Tabs
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
            >
                <div className="flex items-center justify-between">
                    <TabList className="mb-6 flex gap-6 border-b border-[#252932]">

                        <Tab
                            className="flex cursor-pointer items-center gap-2 border-b-2 border-transparent px-4 py-3 text-gray-400 outline-none"
                            selectedClassName="!border-[#C6FF00] !text-[#C6FF00]"
                        >
                            <CalendarDays size={18} />
                            Today's Plan ({plan.length})
                        </Tab>

                        <Tab
                            className="flex cursor-pointer items-center gap-2 border-b-2 border-transparent px-4 py-3 text-gray-400 outline-none"
                            selectedClassName="!border-[#C6FF00] !text-[#C6FF00]"
                        >
                            <Bookmark size={18} />
                            Saved Exercises ({save.length})
                        </Tab>

                    </TabList>

                    <div className="mb-6 flex items-center gap-3">
                        <div className="flex items-center gap-3">
                            <label
                                htmlFor="workout-sort"
                                className="text-sm font-semibold tracking-wide text-gray-400"
                            >
                                Sort by
                            </label>

                            <select
                                id="workout-sort"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-56 cursor-pointer appearance-none rounded-xl border border-[#30343D] bg-[#15171D] px-4 py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:border-[#C6FF00]/60 focus:border-[#C6FF00] focus:ring-2 focus:ring-[#C6FF00]/20"
                            >
                                <option value="default">Default Order</option>
                                <option value="rating-high">⭐ Rating: High to Low</option>
                                <option value="rating-low">⭐ Rating: Low to High</option>
                                <option value="duration-short">Duration: Short to Long</option>
                                <option value="duration-long">Duration: Long to Short</option>
                            </select>
                        </div>
                    </div>
                </div>

                <TabPanel>

                    {plan.length === 0 ? (
                        <div className="flex flex-col items-center justify-center rounded-xl border border-[#252932] bg-[#15171D] py-16">

                            <CalendarDays
                                size={48}
                                className="mb-4 text-gray-500"
                            />

                            <h2 className="text-xl font-bold">
                                No Workouts Planned Yet
                            </h2>

                            <p className="mt-2 text-gray-400">
                                Add some workouts to your plan.
                            </p>

                            <Link
                                href="/"
                                className="mt-5 rounded-lg bg-[#C6FF00] px-5 py-3 font-semibold text-black transition hover:bg-[#b2e600]"
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
                        <div className="flex flex-col items-center justify-center rounded-xl border border-[#252932] bg-[#15171D] py-16">

                            <Bookmark
                                size={48}
                                className="mb-4 text-gray-500"
                            />

                            <h2 className="text-xl font-bold">
                                No Saved Exercises Yet
                            </h2>

                            <p className="mt-2 text-gray-400">
                                Save workouts to find them here later.
                            </p>

                            <Link
                                href="/"
                                className="mt-5 rounded-lg bg-[#C6FF00] px-5 py-3 font-semibold text-black transition hover:bg-[#b2e600]"
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
