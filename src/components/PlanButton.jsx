'use client'
import React, { useContext } from 'react';
import { CalendarDays } from 'lucide-react';
import { workContextProvider } from '@/context/WorkContext';
import {  toast } from 'react-toastify';


const PlanButton = ({ work }) => {
    const { plan, setPlan } = useContext(workContextProvider)
    const handlePlan = () => {

        const alreadyAdded = plan.find(item => item.id === work.id)
        if (!alreadyAdded) {
            setPlan([...plan, work]);
            toast.success("Added to today's plan!");
        } else {
            toast.warning("This workout is already added!");
        }
    }
    return (
        <>
            <button
                onClick={handlePlan}
                className="flex items-center gap-2 rounded-xl bg-[#C6FF00] px-5 py-3 text-sm font-semibold text-black hover:border-[#30343D] hover:border hover:bg-transparent hover:text-white"
            >
                <CalendarDays size={16} />
                Add to today's plan
            </button>

        </>
    );
};

export default PlanButton;