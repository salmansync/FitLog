'use client'
import { workContextProvider } from '@/context/WorkContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const SaveHead = () => {
    const { save } = useContext(workContextProvider);
    return (
        <Link
            href={'/my-plan'}
            className='flex items-center gap-2.5 text-gray-400 hover:text-white font-medium text-sm transition-colors'
        >
            <span>Saved</span>
            <span className='w-6 h-6 flex items-center justify-center rounded-full border border-gray-700 bg-transparent text-gray-300 font-bold text-xs'>
                {save.length}
            </span>
        </Link>
    );
};

export default SaveHead;