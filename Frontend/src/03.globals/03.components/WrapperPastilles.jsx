import React, { useState, useEffect } from 'react';
import axios from "axios"
import Pastilles from './Pastilles';



const WrapperPastilles = ({ setPosterColor }) => {
    const [colors, setColors] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3000/colors")
            .then((response) => setColors(response.data))
            .catch((err) => console.error(err))
    }, []);


    return (
        <div className='h-fit w-7 flex flex-col gap-4'> 

            {
            
                colors.map((color) => (
                <Pastilles 
                    key={color.color_id} 
                    colorPastille={color.color_code}
                    setPosterColor={setPosterColor}
                    colorId={color.color_id} 
                />))
            }
        </div>
    );
};

export default WrapperPastilles;