import React from "react";
import {useEffect} from 'react';
export default function Intro() {

  useEffect(()=>{
    const intro = document.querySelector('#intro');
    const introTitle = document.querySelector('#intro__title');
    const introContent = document.querySelector('#intro__content');

    document.addEventListener('scroll',()=>{
      const pos = window.scrollY;
  
      if(pos > 550){
        introTitle.classList.add('intro__display__title')
        introContent.classList.add('intro__display__content')
        intro.classList.add('intro__display')
      }       
    },[])  

  })

  return (
    <div className="intro fluid" id="intro">
      <p className="intro__title" id="intro__title">what happened!</p>
      <p className="intro__content" id="intro__content">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first step to your
        brand's success. How to create mobile-optimized videos in minutes.
      </p>
    </div>
  );
}
