
import Link from 'next/link';

const SaveHead = () => {

    return (
        <Link
            href={'/my-plan'}
            className='bg-[#C6FF00] py-1 px-5 rounded-md text-black'
        >
            Save
        </Link>
    );
};

export default SaveHead;