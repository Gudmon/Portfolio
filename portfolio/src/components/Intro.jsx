import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold">Marcell Gudmon</h1>
        <h2 className="text-2xl md:text-3xl mb-3 my-3 font-medium">Junior Developer</h2>
        <p className="text-xl max-w-2xl mb-5 my-5 font-bold">
         Hello, my name is Marcell Gudmon and I am a junior full-stack developer with a passion for learning new technologies.<br/>
         I have been honing my skills for over a year now.<br/>
         I am enthusiastic about my work and always looking for new challenges to improve my craft.<br/>
         I hope you enjoy exploring my portfolio and feel free to reach out with any opportunities or questions.<br/>      
        </p>
      </div>
   )
}

export default Intro;