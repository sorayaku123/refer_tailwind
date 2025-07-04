import React from "react";
import { useState } from "react";

function App() {

  const [isOpen, setIsOpen] = useState(false);

const toggleSidebar = () => {
  setIsOpen(!isOpen);
};
  return (
    <div> 
      {
        isOpen ? <div className={`fixed top-0 bg-black h-32 w-[250px] transition-all duration-200 ease-in-out ${isOpen ? 'left-0' : '-left-[350px]'}`}>
         <p class="text-white" onClick={toggleSidebar}> close </p>
</div> : 
           <button onClick={toggleSidebar} class="text-black mt-10">Toggle</button>
      }
      <div class="flex items-center justify-end pr-2 text-base sm:text-sm xl:text-base">
        <p class="mr-2"> gmail </p>
        <p> hình ảnh </p>
        <img src="/info.png" class="w-4 mx-2"/>
        <span class="rounded-full bg-pink-400 w-6 h-6 mt-1"> </span>
      </div>
 <div class="flex flex-col items-center">
      <img class="sm:w-[120px] sm:h-[120px] size-16 object-cover mb-5 mt-20 sm:w-30" src="/google.webp"/>
      <div class="border border-solid border-gray-500 rounded-3xl flex items-center w-full py-2 shrink">
        <img src="/search.png" class="w-3 h-3 mr-4 ml-2 object-cover"/>
        <p class="text-pink-400 text-xs"> Tìm kiếm google hoặc nhập một url</p>
        <div class="flex flex-row items-cente justify-end flex-1">
          <img src="/voice.png" class="w-4 ml-15"/>
           <img src="/camera.jpg" class="w-5 mr-5"/>
        </div>
      </div>

    <div class="sm:flex items-center justify-centergap-x-2 md:block">
      <div class="bg-red-100 h-40 w-40 border border-solid border-black mt-8 md:bg-sky-400">

      </div>
       <div class="bg-red-100 h-40 w-40 border border-solid border-black rounded-xl mt-8 ml-2">

      </div>
    </div>

    </div>

   

    </div>

  );
}

export default App;
