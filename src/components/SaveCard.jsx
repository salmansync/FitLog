
'use client'
import { workContextProvider } from '@/context/WorkContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Clock, Flame, Star, Check, X } from 'lucide-react';
import Link from 'next/link';

const SaveCard = ({ work }) => {
    const { save, setSave } = useContext(workContextProvider)
    const {
        name,
        equipment,
        image,
        duration,
        caloriesBurned,
        rating,
    } = work;

    const handleRemove = () => {
        const remove = save.filter(ply => ply.id !== work.id);
        setSave(remove)
        toast.success("Remove From Your Save List!")

    }
    return (
        <div className="flex items-center justify-between w-full bg-[#12141d] border border-gray-800 rounded-2xl p-4 text-white gap-4 shadow-lg">
            {/* Left section: Image & Info */}
            <div className="flex items-center gap-4">
                {/* Exercise Thumbnail */}
                <div className="w-36 h-20 rounded-xl overflow-hidden bg-gray-800 shrink-0">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center gap-1">
                    <h3 className="font-extrabold text-lg uppercase tracking-wide text-white">
                        {name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                        {equipment}
                    </p>

                    {/* Stats Bar */}
                    <div className="flex items-center gap-4 text-xs text-gray-300 mt-1">
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-lime-400" />
                            <span>{duration} min</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Flame className="w-4 h-4 text-lime-400" />
                            <span>{caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-lime-400 fill-lime-400" />
                            <span>{rating}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right section: Action Buttons */}
            <div className="flex items-center gap-3">
                {/* View Details Button */}
                <Link href={`/work/${work.id}`} className="px-5 py-2.5 rounded-full border border-gray-700 hover:border-gray-500 text-sm font-medium text-gray-200 transition-colors">
                    View Details
                </Link>

                {/* Mark as Done Button */}
                <button className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-lime-400 hover:bg-lime-300 text-black font-semibold text-sm transition-colors">
                    <Check className="w-4 h-4 stroke-3" />
                    Mark as Done
                </button>

                {/* Close/Remove Button */}
                <button
                    onClick={handleRemove}
                    className="p-1 text-gray-500 hover:text-gray-300 transition-colors ml-1">
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default SaveCard;