import React, { useEffect, useState } from 'react';
import Sidebar from '../03.components/Sidebar';
import MainContent from '../02.sections/MainContent';

const HomePage = () => {
    const [posterColor, setPosterColor] = useState('');

    useEffect(() => {
        console.log(posterColor);
    }, [posterColor])



    return (
        <div className='h-screen flex'>
            <Sidebar setPosterColor={setPosterColor} />
            <MainContent posterColor={posterColor} />


            
        </div>
    );
};

export default HomePage;