'use client'
import { workContextProvider } from '@/context/WorkContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const PlanHead = () => {
    const { plan } = useContext(workContextProvider);
    return (
        <Link
            href={'/my-plan'}
            className='flex items-center gap-2.5 text-gray-200 hover:text-white font-medium text-sm transition-colors'
        >
            <span>Plan</span>
            <span className='w-6 h-6 flex items-center justify-center rounded-full bg-[#C6FF00] text-black font-bold text-xs'>
                {plan.length}
            </span>
        </Link>
    );
};

export default PlanHead;