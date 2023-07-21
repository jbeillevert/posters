import React, { useEffect, useState, useCallback } from 'react';
import PosterContext from '../00.contextes/PosterContext';
import Sidebar from '../03.components/Sidebar';
import MainContent from '../02.sections/MainContent';

const HomePage = () => {
    const [refreshSignal, setRefreshSignal] = useState(0)
    const [newPosterAnimation, setNewPosterAnimation] = useState(false)

    const onPosterCreated = () => {
        setRefreshSignal(refreshSignal + 1);
        setNewPosterAnimation(true);
    }

    const onPosterDeleted = () => {
        setRefreshSignal(refreshSignal - 1)
    }



    return (
        <PosterContext.Provider value={{"create": onPosterCreated, "delete":onPosterDeleted, "newPosterAnimation": newPosterAnimation}}>
            <div className='h-screen flex'>
                <Sidebar />
                <MainContent />
            </div>
        </PosterContext.Provider>
    );
};

export default HomePage;