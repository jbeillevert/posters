import React from 'react';
import PlusButton from './PlusButton';
import WrapperPastilles from './WrapperPastilles';

const Sidebar = ({ setPosterColor }) => {
    return (
        <div className='sukui-sidebar border-r border-grey flex flex-col items-center py-12 gap-12'>
            <h3 className='font-font1 font-semibold text-2xl text-black -tracking-wider'>Posters</h3>
            <PlusButton  />
            <WrapperPastilles setPosterColor={setPosterColor}  />
            
        </div>
    );
};

export default Sidebar;