import { useState } from 'react';
import uniqid from 'uniqid';

import abel from '../images/abel.jpg';
import caushy from '../images/caushy.jpg';
import euclid from '../images/euclid.jpg';
import euler from '../images/euler.jpg';
import galois from '../images/galois.jpg';
import gauss from '../images/gauss.jpg';
import hamilton from '../images/hamilton.jpg';
import hardy from '../images/hardy.jpg';
import poincare from '../images/poincare.jpg';
import ramanujan from '../images/ramanujan.jpg';
import riemann from '../images/riemann.jpg';
import rutherford from '../images/rutherford.jpg';
import turing from '../images/turing.jpg';

import '../styles/gameBoard-style.css';

function GameBoard({currentScore, setCurrentScore, 
                    bestScore, setBestScore}) {
    
    const initialImagesList = [
                                {imageSrc: abel, name: 'Niels Henrik Abel'}, 
                                { imageSrc: caushy, name: 'Augustin Louis Caushy'}, 
                                {imageSrc: euclid, name: 'Euclid'}, 
                                {imageSrc: euler, name: 'Leonhard Euler'}, 
                                {imageSrc: galois, name: 'Evariste Galois'}, 
                                {imageSrc: gauss, name: 'Carl Friedrich Gauss'}, 
                                {imageSrc: hamilton, name: 'William Rowan Hamilton'}, 
                                {imageSrc: hardy, name: 'Godfrey Harold Hardy'},
                                {imageSrc: poincare, name: 'Henri Poincare'}, 
                                {imageSrc: ramanujan, name: 'Srinivasa Ramanujan'}, 
                                {imageSrc: riemann, name: 'Bernhard Riemann'},
                                {imageSrc: rutherford, name: 'Rutherford Birchard Hayes'}, 
                                {imageSrc: turing, name: 'Alan Turing'}
                            ];
    const [images, setImages] = useState(initialImagesList);
    const [clickedImageNames, setClickedImageNames] = useState([]);
                                    
    function shuffle(array) {
        let newArray = [].concat(array);
        let currentIndex = newArray.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [newArray[currentIndex], newArray[randomIndex]] = [
            newArray[randomIndex], newArray[currentIndex]];
        }
      
        return newArray;
    }

    return (
        <div className="game-board">
            <span className="rules-text">
                Get points by clicking on an image but don't click on any more than once!
            </span>
            <div className="game-cards">
                {images.map(image => {
                    return(
                        <div className='image-card' key={uniqid()}
                        >
                            <img className='image' src={image.imageSrc}
                                id = {image.name} alt=':)' 
                                onClick = {
                                    e => {
                                        const imageName = e.target.id;
                                        if(clickedImageNames.includes(imageName)) {
                                            setClickedImageNames([]);
                                            setImages(initialImagesList);
                                            if(bestScore < currentScore) {
                                                setBestScore(currentScore);
                                            }
                                            setCurrentScore(0);
                                        } else {
                                            setClickedImageNames(prevClickedImageNames => prevClickedImageNames.concat([imageName]));
                                            setCurrentScore(prevCurrentScore => prevCurrentScore + 1);
                                            const newArr = shuffle(images);
                                            setImages(newArr);
                                        }
                                    }
                                }
                            />
                            <span className='image-name'>{image.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export {
    GameBoard
}