import React, { useState, useEffect } from 'react';
import Poster from '../03.components/Poster';
import axios from "axios"

const MainContent = () => {
    const [posters, setPosters] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/posters")
            .then((response) => setPosters(response.data))
            .catch((err) => console.error(err))
    }, []);

    return (
        <div className='sukui-contentDashboard h-fit w-full'>
            <div id='contentContainer' className='h-full w-full my-24'>
                <h2 className='sukui-h2 mb-[30px]'>Notes</h2>
                <div id='posterContainer' className='w-full h-full flex flex-row flex-wrap gap-[30px]'>
                {posters.map((poster) => {
                    const matchingColor = colors.find(color => color.color_id === poster.id_color);
                    return (
                        <Poster key={poster.poster_id} color={poster.id_color} />
                    )
                })}
                </div>
            </div>
        </div>
    );
};

export default MainContent;
