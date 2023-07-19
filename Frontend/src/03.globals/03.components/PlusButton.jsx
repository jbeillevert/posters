import React from 'react';
import { GoPlus } from "react-icons/go";

const PlusButton = () => {
    return (
        <div className='w-12 h-12 bg-blaaack rounded-full flex justify-center items-center'>
            <GoPlus className='z-10 text-white w-7 h-7' />
        </div>
    );
};

export default PlusButton;