import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-7xl text-rose-600 dark:text-white mb-1 md:mb-3 font-bold">! This page is under construction !</h1>
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Marcell Gudmon</h1>
        <p className="text-base md:text-xl mb-3 font-medium">Junior Developer</p>
        <p className="text-sm max-w-xl mb-6 font-bold">
        I consider myself as a highly
        motivated and commited
        person with a strong passion for
        coding and solution-oriented mindset.
        This has led me to
        develop my skills mainly in C#
        and Javascript. I started
        coding with Python first, besides
        I am always happy and open to learn
        new technologies and
        techniques to improve and deepen my knowledge.        
        </p>
      </div>
   )
}

export default Intro;