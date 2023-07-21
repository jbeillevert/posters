import React, { useState, useEffect } from 'react';
import axios from "axios"
import Pastilles from './Pastilles';



const WrapperPastilles = ({ wrapperVisibility, exitAnimation }) => {
    const [colors, setColors] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3000/colors")
            .then((response) => setColors(response.data))
            .catch((err) => console.error(err))
    }, []);


    useEffect(() => {
        const wrapper = document.querySelector('#wrapperPastilles')

        if (wrapperVisibility) {
            wrapper.classList.add('sukui-wrapper-translate-entry')

            setTimeout(() => {
                wrapper.classList.remove('sukui-wrapper-translate-entry')
            }, 800)
        }

        if (exitAnimation) {
            wrapper.classList.add('sukui-wrapper-translate-exit')

            setTimeout(() => {
                wrapper.classList.remove('sukui-wrapper-translate-exit')
            }, 800)
        }
    }, [wrapperVisibility, exitAnimation])



    return (
        <div id='wrapperPastilles' className='h-fit w-7 flex flex-col gap-4'> 

            {
                colors.map((color) => (
                <Pastilles 
                    key={color.color_id} 
                    colorId={color.color_id} 
                    colorCode={color.color_code}
                />))
            }
        </div>
    );
};

export default WrapperPastilles;