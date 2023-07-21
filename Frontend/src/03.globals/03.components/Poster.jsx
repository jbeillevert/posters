import React, { useState, useEffect, useContext } from 'react';
import axios from "axios"
import PosterContext from '../00.contextes/PosterContext';
import RemovePoster from './RemovePoster';
import questions from '../../04.algo/question';
import reponses from '../../04.algo/reponse';

const Poster = ({ posterID, posterTEXT, posterDATE,colorID, colorCODE }) => {
    const [text, setText] = useState(posterTEXT); 
    const {create: onPosterCreated, delete:onPosterDeleted, newPosterAnimation} = useContext(PosterContext);
    const [animation, setAnimation] = useState(false);
    const [placeholder, setPlaceholder] = useState('');


    // formate la date au format français
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleString('fr-FR', options);  
    }
    const formattedDate = formatDate(posterDATE)

    // update les données du poster
    const handleBlur = async () => { 
        const url = `http://localhost:3000/posters/${posterID}`;
        try {
            await axios.put(url, {poster_text: text, id_color: colorID });
        } catch (error) {
            console.error(error);
        }
    }

    // detecte le changement de données quand l utilisateur clique en dehors du poster
    const handleChange = (e) => { 
        setText(e.target.value);
    }

    // animation à la création du poster
    useEffect(() => {
        if (newPosterAnimation) {
            setAnimation(true);
            setTimeout(() => setAnimation(false), 800);
        }
    }, [newPosterAnimation]);



    useEffect(() => {
        if (!placeholder) {
            setPlaceholder(`${getRandomQuestion()}\n \n${getRandomAnswer()}`);
        }
    }, [placeholder]);


    const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex].text;
    }
    const getRandomAnswer = () => {
        const randomIndex = Math.floor(Math.random() * reponses.length);
        return reponses[randomIndex].text;
    }

    useEffect(() => {
        if (!placeholder) {
            setPlaceholder(`${getRandomQuestion()}\n \n${getRandomAnswer()}`);
        }
    }, [placeholder]);



    return (
        <div className={`w-[175px] sm:w-72 h-64 rounded-[35px] relative flex flex-col ${animation ? 'sukui-poster-entry' : ''}`} style={{ backgroundColor: colorCODE }}>
            <RemovePoster posterID={posterID} />
            <textarea 
                name="" 
                id="" 
                className='font-fontWSP box-border w-full h-[170px] rounded-t-[35px] bg-transparent resize-none px-4 pt-8 overflow-y-hidden text-lightblack text-[20px] tracking-[-0.3px] outline-none mb-8'
                onBlur={handleBlur}
                onChange={handleChange}
                value={text}
                placeholder={placeholder}
                ></textarea>
            <p className='text-sm font-fontWSPL tracking-[-0.3px] pl-4 text-lightblack'>{formattedDate}</p>
        </div>
    );
};

export default Poster;