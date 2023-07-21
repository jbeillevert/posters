import React, { useState } from 'react';
import PlusButton from './PlusButton';
import WrapperPastilles from './WrapperPastilles';

const Sidebar = () => {
    const [wrapperVisibility, setWrapperVisibility] = useState(false)
    const [exitAnimation, setExitAnimation] = useState(false);




    return (
        <div className='sukui-sidebar border-r border-grey flex flex-col items-center py-12 gap-12'>
            <h3 className='font-fontWSH2  text-[25px] text-black tracking-[-1px] opacity-0 sm:opacity-100'>Posters</h3>
            <PlusButton wrapperVisibility={wrapperVisibility} setWrapperVisibility={setWrapperVisibility} setExitAnimation={setExitAnimation}  />

            {
                wrapperVisibility ? <WrapperPastilles wrapperVisibility={wrapperVisibility} exitAnimation={exitAnimation} /> : null
            }


            

            
            
        </div>
    );
};

export default Sidebar;