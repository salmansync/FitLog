'use client'
import { ChartLine } from 'lucide-react';
import React, { createContext, useState } from 'react';

export const workContextProvider = createContext({})
const WorkContext = ({ children }) => {
    const [plan, setPlan] = useState([])
    const [save, setSave] = useState([])
    const data = {
        plan,
        setPlan,
        save,
        setSave
    }
    return (
        <div>
            <workContextProvider.Provider value={data}>
                {children}
            </workContextProvider.Provider>
        </div>
    );
};

export default WorkContext;