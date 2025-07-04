import React from "react";
import { useState } from "react";

function App() {

  const[isOpen, setisOpen] = useState(false)
  const toggle_side = () => {
    isOpen === true ? setisOpen(false): setisOpen(true);
  }
  return (
    <div> 
      {
        isOpen ? <div class="toogle fixed bg-black py-20 text-white transition left duration 200 ease-in w-40">
             toggle side bar show
             <p onClick={toggle_side}> 
              close
             </p>
      </div>  : 
            <div onClick={toggle_side}>
         sidebar
      </div>
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

    <div class="sm:flex items-center gap-x-2 md:block">
      <div class="bg-red-100 h-40 w-40 border border-solid border-black mt-8 md:bg-sky-400">

      </div>
       <div class="bg-red-100 h-40 w-40 border border-solid border-black rounded-xl mt-4">

      </div>
    </div>

    </div>

   

    </div>

  );
}

export default App;
