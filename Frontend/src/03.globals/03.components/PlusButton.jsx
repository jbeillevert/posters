import React from 'react';
import { FiPlus, FiMinus } from "react-icons/fi";

const PlusButton = ({ wrapperVisibility, setWrapperVisibility, setExitAnimation  }) => {


    const handleClickVisibilityWrapper = () => {
        const displayWrapper = document.querySelector('#plusButton')
        displayWrapper.classList.add("sukui-spin-button")
        
        if (wrapperVisibility) {
            setExitAnimation(true);
            setTimeout(() => {
                setWrapperVisibility(false)
                setExitAnimation(false)
            }, 800); 
        } else {
            setWrapperVisibility(true)
        }
        
 
        
        setTimeout(() => {
            displayWrapper.classList.remove("sukui-spin-button")

        }, 800)
    }


    return (
        <button className='z-20 w-12 h-12 bg-blaaack rounded-full flex justify-center items-center' id='plusButton' onClick={handleClickVisibilityWrapper}>

            {
                wrapperVisibility ? 
                <FiMinus id="iconMinus" className={`z-10 text-white duration-150 w-7 h-7`} /> :
                <FiPlus id="iconPlus" className={`z-10 text-white duration-150 w-7 h-7`} />
            }

        </button>
    );
};

export default PlusButton;