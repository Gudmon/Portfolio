import React from 'react';
import { Button } from "@material-tailwind/react";

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold">Marcell Gudmon</h1>
        <h2 className="text-2xl md:text-3xl mb-3 my-3 font-medium">Junior Developer</h2>
        <p className="text-2sm md:text-xl mb-1 max-w-2xl mb-5 my-5 font-bold">
         Hello, my name is Marcell Gudmon and I am a junior full-stack developer with a passion for learning new technologies.<br/>
         I have been honing my skills for over a year now.<br/>
         I am enthusiastic about my work and always looking for new challenges to improve my craft.<br/>
         I hope you enjoy exploring my portfolio and feel free to reach out with any opportunities or questions.<br/>      
        </p>
        <a href="/assets/CV_GM_2.pdf" download="CV_GM.pdf">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
               <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
               <span>Download CV</span>
         </button> 
        </a>
      </div>
   )
}

export default Intro;