'use client'
import { workContextProvider } from '@/context/WorkContext';
import Link from 'next/link';
import React, { useContext } from 'react';
const SaveHead = () => {
    const { save } = useContext(workContextProvider)
    return (
        <Link
            href={'/my-plan'}
            className='bg-[#C6FF00] py-1 px-5 rounded-md text-black'
        >
            Save {save.length}
        </Link>
    );
};

export default SaveHead;