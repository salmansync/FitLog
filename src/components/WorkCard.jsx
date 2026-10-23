'use client'
import React, { useContext } from 'react';
// import { Bookmark } from 'lucide-react';
import { toast } from "react-toastify";


const SaveButton = ({work}) => {
      const { save, setSave } = useContext(workContextProvider)
        const handleSave = () => {

            const alreadyAdded = save.find(item => item.id === work.id)
            if (!alreadyAdded) {
                setSave([...save, work]);
                toast.success("Save Done!");
            } else {
                toast.warning("This workout is already saved!");
            }
        }
    return (

        <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-xl border border-[#30343D] px-5 py-3 text-sm font-medium text-white hover:bg-[#C6FF00] hover:text-black transition-all"
        >
            <Bookmark size={16} />
            Save for later
        </button>
    );
};

export default SaveButton;