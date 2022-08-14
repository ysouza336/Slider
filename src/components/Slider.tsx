import React, { useState } from "react";
import Arrows from './Arrows'
import Dots from './Dots'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

interface SliderProps{
  arrows: {}
  dots: {}
}

let count = 0;
const imgs = [
  "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
];

export default function Slider(props:SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  /** função para efetuar o avanço da imagem atraves do click usando contador*/
  const handleOnNextClick = () => {
    count = (count + 1) % imgs.length;
    setCurrentIndex(count);
  };
  /** função para efetuar retroceder a imagem atraves do click e adicionando a animação via css* */
  const handleOnPrevClick = () => {
    const img = imgs.length;
    count = (currentIndex + img - 1) % img;
    setCurrentIndex(count);
  };
  const moveDot = () => {
    count = (count + 1) % imgs.length;
    setCurrentIndex(count);
  }
  return (
    <div className="relative" >
        <div className="">
          <img className="w-full" src={imgs[currentIndex]} alt="" />
        </div>
            {/**Reservado para receber os dots */}
            <Dots onClick={moveDot} className={props.dots} />
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
              {/**Botoes de direçao Arrows*/}
        <Arrows onClick={handleOnNextClick} className={props.arrows}><AiOutlineVerticalRight size={30}/></Arrows>   

        <Arrows onClick={handleOnPrevClick} className={props.arrows}><AiOutlineVerticalLeft size={30}/></Arrows>
      </div>
    </div>
  );
}