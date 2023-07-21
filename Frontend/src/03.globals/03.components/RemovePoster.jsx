import React, { useContext } from 'react';
import axios from "axios"
import PosterContext from '../00.contextes/PosterContext';
import { FiTrash } from "react-icons/fi";

const RemovePoster = ({ posterID }) => {
    const {create: onPosterCreated, delete:onPosterDeleted} = useContext(PosterContext);


    const handleClickDeletePoster = async () => {
        const id = posterID
        const url = `http://localhost:3000/posters/${id}`;
    
        await axios
          .delete(url)
          .then(() => {
            onPosterDeleted();
          })
          .catch((err) => {
            console.error("erreur suppression : ", err);
          });
      };




    return (
        <button className='absolute bg-blaaack rounded-full w-10 h-10 -top-3 -right-3 flex justify-center items-center' onClick={handleClickDeletePoster}>
            <FiTrash className='z-10 text-white w-5 h-5 hover:text-reed duration-150 ' />
            
        </button>
    );
};

export default RemovePoster;