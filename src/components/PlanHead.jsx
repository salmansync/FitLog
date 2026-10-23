

import Link from 'next/link';


const PlanHead = () => {

    return (
        <Link
            href={'/my-plan'}
            className='bg-[#C6FF00] py-1 px-5 rounded-md text-black'
        >
            Plan
        </Link>
    );
};

export default PlanHead;