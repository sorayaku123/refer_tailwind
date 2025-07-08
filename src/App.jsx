import React from "react";
import { useState } from "react";

function App() {


  return (
  <div className="h-screen xl:text-xl font-serif bg-[url(/rrct.jpg)] bg-center">
    <div className="flex items-center justify-beetween px-4 pt-2">
     <img src="/Sang.png" className="rounded-full w-14 h-14 mx-auto border-2 border-sky-200 shadow-xl ml-2 md:w-16 md:h-16"/>
     <div className="flex items-center">
     <a className="text-yellow-50 font-bold mr-2"> Contact </a>
     <a className="text-yellow-50 font-bold"> About me </a>
     </div>
    </div>

    <div className="flex flex-col items-center mt-20 justify-center text-center xl:mt-50 text-white text-sm md:text-lg">
  <h1 className="text-2xl text-slate-100 text-[#dab35d] font-semibold"> I'm Sang</h1>
  <div className="fade sm:w[90%]">
  <p className="mt-2 max-w-xl">I'm a frontend Developer about modern UI/UX with React & Taildwind </p>
  <p className="text-sm"> My stack, I can learn more quickly to fit with your if you need: HTML, CSS, Javascript, Vercel, Github</p>
  </div>
    <p className="mt-2 font-thin hover:scale-105, transition">Contact me rightnow! </p>


         <div className="text-white text-left mt-10 italic xl:text-lg text-sm">
      <p> email: sorayku42@gmail.com </p>
      <p classname="mb-2"> phone: +04 0907035042 </p>
      <a href="https://github.com/sorayaku123?tab=repositories" target="_blank" className="text-blue-400 font-semibold hover:text-blue-800 mt-4 block">
             My GitHub Projects
      </a>
       <a href="https://ref-inky.vercel.app/" target="_blank" className="text-blue-300 font-semibold hover:text-blue-800 block">
             Refer Landing Page
      </a>
       <a href="https://mamspa-olive.vercel.app/" target="_blank" className="text-blue-300 font-semibold hover:text-blue-800">
             Mamspa Business Page
      </a>

      <p className="font-extralight mt-2 normal text-yellow-50"> I build with care and clarity</p>

      <div className="flex gap-2 justify-center">
      <a href="https://www.facebook.com/hika.love.282669/">
        <img src="/messenger.png" className="h-7 w-7 cursor-pointer mt-4 xl:h-12 xl:w-12"/>
      </a>
      <a href="https://www.linkedin.com/in/sang-nguyen-37071736b/">
        <img src="/linkedin.png" className="h-7 w-7 cursor-pointer mt-4 xl:h-12 xl:w-12"/>
      </a>
      </div>
    </div>
    </div>

  </div>

  );
}

export default App;



