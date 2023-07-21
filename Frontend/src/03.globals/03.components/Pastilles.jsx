import React, { useContext } from "react";
import axios from "axios"
import PosterContext from '../00.contextes/PosterContext';


const Pastilles = ({ colorId, colorCode }) => {
  const {create: onPosterCreated, delete:onPosterDeleted} = useContext(PosterContext);

    const createPoster = async  () => {
      const addColor = { id_color: colorId };
        try {
          await  axios.post("http://localhost:3000/posters", addColor);
          if (onPosterCreated) {
            onPosterCreated()
          }
        } catch (error) {
          console.error(error);
        }
      };


    return (
        <button className="w-7 h-7 rounded-full duration-150 hover:scale-150 cursor-pointer" style={{backgroundColor: colorCode}} onClick={createPoster}>      
        </button>
    );
};

export default Pastilles;
