import { useState } from "react";
import './output.css';
import { Transition } from '@headlessui/react'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Menu() {
  const [show, setShow] = useState(false);
  const [contacts, setContacts] = useState(false);


  return (
    <div>

      <Transition
        show={show}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Transition show={!contacts} enter="transition-opacity duration-2000" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="absolute max-h-screen z-10 tracking-wider leading-2 top-32 md:top-10 xl:top-10 xl:right-7 right-3 xl:left-[55rem] md:left-[42rem] left-2 max-w-full text-base md:text-lg xl:text-xl text-right font-semibold text-white">
            <p>
              <a target="_blank" className="hover:underline font-bold underline-offset-2" href="https://www.facebook.com/InsomniaPageOfficial/photos/?ref=page_internal">photos</a> <br />
              <a target="_blank" className="hover:underline font-bold underline-offset-2" href="https://www.instagram.com/insomnia.01">aftermovie</a> <br />
              <button className="text-left mt-0 font-semibold hover:underline underline-offset-2" onClick={() => setContacts(!contacts)}>contacts</button> <br />
              <br />
              <span className="relative z-10 w-[32rem] font-light tracking-wide overflow-scrollable">
                IN$0MN1A nasce come un modo per esprimersi artisticamente attraverso eventi e progetti musicali.
                Il suono di IN$0MN1A è basato sull’Hip-Hop, la Trap e la Bass Music con una curatissima selezione musicale.
                La nostra comunicazione cerca di unire due scene, quella hip-hop e quella elettronica, utilizzando grafiche scure
                ma accattivanti e rivisitando l’arte classica con la modernità dell’estetica informatica.
              </span>
            </p> 
          </div>
        </Transition>
        <Transition show={contacts} enter="transition-opacity duration-2000" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="absolute max-h-screen z-10 tracking-wider leading-2 top-32 md:top-10 xl:top-10 xl:right-7 right-3 xl:left-[55rem] md:left-[42rem] left-2 max-w-full text-base md:text-lg xl:text-xl text-right font-semibold text-white">
              <p>
                <br />
                <span className="relative z-10 w-[32rem] font-light tracking-wide overflow-scrollable">
                  email: <a href="mailto:fightforyourinsomnia@gmail.com">fightforyourinsomnia@gmail.com</a><br />
                  instagram: <a href="https://instagram.com/insomnia.01">@insomnia.01</a><br />
                  facebook: <a href="https://facebook.com/InsomniaPageOfficial">InsomniaPageOfficial</a><br /><br />
                  <button className="text-left mt-0 font-semibold hover:underline underline-offset-2" onClick={() => setContacts(!contacts)}>go back</button> <br />
                </span>
              </p> 
            </div>
        </Transition>
        <div className="absolute z-10 bottom-12 xl:block hidden tracking-widest leading-6 right-48 max-w-full text-sm text-right font-thin text-white">
          <p className="text-white text-left mt-32 mr-[16rem]">
            return &#123; <br />
            &nbsp;&nbsp;&nbsp;&nbsp; const <span className="font-extrabold">sounds</span> = [ <br /> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a className="hover:underline" href="https://instagram.com/lucafontana.mp3">lucafontana</a><br /> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a className="hover:underline" href="https://instagram.com/alessio.dali">dali</a><br /> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a className="hover:underline" href="https://instagram.com/rbxy71">xy71</a><br /> 
            &nbsp;&nbsp;&nbsp;&nbsp; ], <br />
            &nbsp;&nbsp;&nbsp;&nbsp; const <span className="font-extrabold">visuals</span> = [ <br /> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a className="hover:underline" href="https://instagram.com/elig.ace">elig.ace</a><br /> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a className="hover:underline" href="https://instagram.com/elig.graphics">elig.graphics</a><br /> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a className="hover:underline" href="https://instagram.com/kristoffer.castroo">kristoffer.castro</a><br /> 
            &nbsp;&nbsp;&nbsp;&nbsp; ], <br />  
            &#125; 
          </p> 
        </div>
      </Transition>

      {
      show ? 
          <video className='absolute z-0 transition ease-in-out transform duration-2000 top-0 opacity-0 xl:opacity-100 left-1/2 -translate-x-full mx-auto min-h-screen max-h-screen' src="https://file.garden/Z9sYHRgsSlYoORrC/bot2.mp4" autoplay="true" loop="true" playsinline="true" muted="true"/>
        : 
          <video className='absolute z-0 transition ease-in-out transform duration-2000 top-0 left-1/2 -translate-x-1/2 mx-auto min-h-screen max-h-screen' src="https://file.garden/Z9sYHRgsSlYoORrC/bot2.mp4" autoplay="true" loop="true" playsinline="true" muted="true"/>
      }

      {
      show ? 
        <button className="rotate-[270deg] z-10 absolute bottom-16 xl:bottom-12 right-6 xl:right-14 bg-black rounded-full font-semibold text-white border px-2 h-12 xl:h-16 w-12 xl:w-16 p-0 border-white flex max-w-xl hover:bg-white hover:text-black hover:border-black transition-colors duration-500" onClick={() => setShow(!show)}>
          <svg className="transition-transform ease-in-out -rotate-90 duration-2000" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16" width="100%" height="100%">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
          </svg>
        </button>
        : 
        <button className="rotate-[270deg] z-10 absolute bottom-16 xl:bottom-12 right-6 xl:right-14 bg-black rounded-full text-white text-center border px-2 h-12 xl:h-16 w-12 xl:w-16 p-0 border-white flex hover:bg-white hover:text-black hover:border-black transition-colors duration-500" onClick={() => setShow(!show)}>
          <svg className="transition-transform ease-in-out duration-2000" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16" width="100%" height="100%">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
          </svg>
        </button>
      }     

    </div>
  );
}

export default Menu;
