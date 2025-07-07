import React from "react";
import { useState } from "react";

function App() {


  return (
  <div className="bg-gradient-to-t from-violet-200 to-fuchsia-500 h-screen xl:text-xl">
    <div className="flex justify-around items-center">
     <img src="/Sang.png" className="h-20 w-20"/>
     <div className="flex items-center">
     <a className="text-blue-300 mr-2"> Contact </a>
     <a className="text-blue-200"> About me </a>
     </div>
    </div>

    <div className="flex flex-col items-center mt-36 justify-center text-center xl:mt-50">
  <h1 className="text-2xl text-black-400"> I'm Sang</h1>
  <p className="mt-2">A web developer or freelancer that make your site go to online and public </p>
     <div className="flex gap-2 mt-4">
     <a className="px-5 py-2 bg-green-500 text-white inline rounded-md"> Contact </a>
     <a className="px-5 py-2 bg-green-500 text-white inline rounded-md"> Info </a>
     </div>

         <div className="text-white text-left mt-10 italic xl:text-lg">
      <p> email: sorayku42@gmail.com </p>
      <p> phone: +04 0907035042 </p>
      <div class="flex gap-2 justify-center mr-2">
      <a href="https://www.facebook.com/hika.love.282669/">
        <img src="/messenger.png" className="h-9 w-9 t-4 cursor-pointer xl:h-12 xl:w-12"/>
      </a>
      <a href="https://www.linkedin.com/in/sang-nguyen-37071736b/">
        <img src="/linkedin.png" className="h-9 w-9 mt-4 cursor-pointer xl:h-12 xl:w-12"/>
      </a>
      </div>
    </div>
    </div>

  </div>

  );
}

export default App;



