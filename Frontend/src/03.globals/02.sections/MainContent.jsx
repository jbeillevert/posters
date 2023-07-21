import React, { useState, useEffect, useContext } from 'react';
import Poster from '../03.components/Poster';
import axios from "axios"
import PosterContext from '../00.contextes/PosterContext';

const MainContent = () => {
    const [posters, setPosters] = useState([])
    const refreshSignal = useContext(PosterContext);

    useEffect(() => {
        axios.get("http://localhost:3000/posters")
            .then((response) => setPosters(response.data))
            .catch((err) => console.error(err))
    }, [refreshSignal]);


    return (
        <div className='sukui-contentDashboard h-fit w-full'>
            <div id='contentContainer' className='h-full w-full my-24'>
                <h2 className='text-black font-bold text-[45px] mb-[30px] tracking-[-1px]'>Notes</h2>
                <div id='posterContainer' className='w-full h-full flex flex-row flex-wrap gap-[30px]'>
                {
                    posters.map((poster) => (
                        <Poster 
                            key={poster.poster_id} 
                            posterID={poster.poster_id} 
                            posterTEXT={poster.poster_text}
                            posterDATE={poster.poster_date}
                            colorID={poster.id_color}
                            colorCODE={poster.color_code} 
                            
                    />))
                }
                </div>
            </div>
        </div>
    );
};

export default MainContent;
