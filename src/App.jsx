import React from "react";
import { useState } from "react";

function App() {

  const [isOpen, setIsOpen] = useState(false);

const toggleSidebar = () => {
  setIsOpen(!isOpen);
};
  return (
    <div class="min-h-80"> 
      {
        isOpen ? <div className={`static top-0 bg-gray-100 h-48 w-[120px] duration-200 ease-in ${isOpen ? 'left-0' : '-left-[200px]'}`}>
         <p onClick={toggleSidebar} class="ml-4"> close </p>
    </div> : 
           <button onClick={toggleSidebar} class="text-black pl-2 pt-2">☰</button>
      }
      <div class="flex items-center justify-end pr-2 text-base sm:text-sm xl:text-base">
        <a class="mr-2 cursor-pointer" target="_blacnk" rel="noopener noreferrer" href="http://gmail.com/"> gmail </a>
         <a class="cursor-pointer" target="_blacnk" rel="noopener noreferrer" href="http://gmail.com/"> images </a>
        <img src="/info.png" class="w-4 mx-3"/>
        <span class="rounded-full bg-pink-400 w-6 h-6 mt-1 xl:mr-10 sm:mr-2"> </span>
      </div>
 <div class="flex flex-col items-center">
      <img class="sm:w-[140px] sm:h-[140px] size-16 object-cover mb-5 mt-20 sm:w-30 xl:w-48 xl:h-48" src="/google.webp"/>
      <div class="border border-solid border-gray-500 rounded-3xl flex items-center w-5/6 py-2 shrink sm:w-5/6 xl:w-3/5 xl:py-2">
        <img src="/search.png" class="w-3 h-3 mr-4 ml-2 object-cover"/>
        <p class="text-gray-400 text-[12px] max-w-96 w-72"> Tìm kiếm google hoặc nhập một url</p>
        <div class="flex flex-row items-cente justify-end flex-1 pr-2">
          <img src="/voice.png" class="w-3 ml-15 mr-3"/>
           <img src="/camera.jpg" class="w-5 mr-5"/>
        </div>
      </div>


    </div>

   

    </div>

  );
}

export default App;
