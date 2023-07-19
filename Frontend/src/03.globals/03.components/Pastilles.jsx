const Pastilles = ({ colorPastille, setPosterColor, colorId }) => {

    const createPoster = async () => {
        try {
          const newPoster = {
            color_id: colorId, 
          };
          await axios.post("http://localhost:3000/posters", newPoster);
        } catch (error) {
          console.error(error);
        }
      };


    return (
        <button className="w-7 h-7 rounded-full duration-150 hover:scale-150 cursor-pointer" style={{backgroundColor: colorPastille}} onClick={() => onClick={createPoster}}>      
        </button>
    );
};

export default Pastilles;
