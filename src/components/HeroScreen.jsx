import React, { useEffect } from "react";
import Btn from "./Btn";
import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'

function HeroScreen(props) {
    useEffect (()=>{
        Aos.init({duration: 700});
      },[]);
  return (
    <div>
        <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="mt-12 lg:mt-0">
                <h1 data-aos="fade-right" className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  <span
                  style={props.mode==="black"?{backgroundImage: "linear-gradient(to right,  #a957d9, #d998a0, #e6bcfe, #7e2a64)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}:
                  {backgroundImage: "linear-gradient(to right, #861657 0%, #de5b9f 74%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}
                  >Solve Queries</span> <br />
                  <span
                  style={props.mode==="black"?{color: "rgba(255,255,255,1)"}:{color: "rgba(176, 74, 144, 0.5)"}}
                   className="sm:text-5xl text-2xl tracking-wide">through Holistic Intelligence</span>
                </h1>
                <div data-aos='fade-up'>
                <Link to="/app"
                >
                    <Btn data-aos="fade-in" text='Get Started' addClass='sm:w-[30%] w-[60%]' mode={props.mode}/>
                </Link>
                </div>                
              </div>
              <div className="relative z-[0]">
              <img data-aos="fade-left" src="/assets/Main_page.png" alt="" className=' w-[100%] h-[100%] relative z-[5]' />
                <div data-aos="fade-in" className='absolute z-[0] w-[50%] h-[45%] top-[75px] right-[30%] rounded-full'
              style={{background: "#ff00ea", filter: props.mode==="black"?"blur(160px)":"blur(260px)", pointerEvents: "none"}}/>
              <div data-aos="fade-in" className='absolute z-[0] w-[50%] h-[45%] bottom-[10px] right-[30%] rounded-full'
              style={{background: "#7aebfb", filter: props.mode==="black"?"blur(150px)":"blur(250px)" , pointerEvents: "none"}}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default HeroScreen;
