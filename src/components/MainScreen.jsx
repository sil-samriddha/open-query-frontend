import React, { useEffect } from 'react'
import styles from '../styles/HomeStyle'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

function MainScreen(props) {
  useEffect (()=>{
    Aos.init({duration: 1000});
  },[]);
  return (
    <div>
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div data-aos="fade-up" className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                 <div className='flex flex-row items-center py-[6px] px-1 rounded-[10px] mb-2'>
                  <p>
                    <span style={props.mode==="black"?{color: "#e6bcfe", fontWeight: "bolder"}:{color: "#763261", fontWeight: "bolder"}}>Free</span> &nbsp;
                    <span style={props.mode==="black"?{color: "rgba(255,255,255,0.7)"}:{color: "rgba(171, 73, 141, 0.7)"}}>&</span> &nbsp; 
                    <span style={props.mode==="black"?{color: "#e6bcfe", fontWeight: "bolder"}:{color: "#763261", fontWeight: "bolder"}}>Open Source</span> &nbsp; 
                    <span style={props.mode==="black"?{color: "rgba(255,255,255,0.7)"}:{color: "rgba(171, 73, 141, 0.7)"}}>tool to</span> 
                  </p>
                 </div>
                 <div className='flex flex-row justify-between items-center w-full'>
                  <h1 data-aos="fade-right" className='flex-1 font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
                    <h1
                    style={props.mode==="black"?{backgroundImage: "linear-gradient(to right,  #a957d9, #d998a0, #e6bcfe, #7e2a64)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}:
                    {backgroundImage: "linear-gradient(to right, #861657 0%, #de5b9f 74%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Solve Queries</h1>
                    
                    <span className="ss:text-[50px] text-[42px]" style={props.mode==="black"?{color: "rgba(255,255,255,1)"}:{color: "rgba(176, 74, 144, 0.5)"}}>through</span>
                  </h1>
                  <div className='ss:flex md:mr-4 m-0'>
                    <div className={`${styles.flexCenter} w-[160px] h-[160px] rounded-full`}>
                      <div data-aos="zoom-in" className={`${styles.flexCenter} flex-col rounded-full`}>
                      <Link to="/app">
                        <img className='w-[160px] h-[160px]' src={props.mode==="black"?"/assets/getstarted_black2.png":"/assets/getstarted_pink2.png"} alt="get started" />
                      </Link>
                      </div>
                    </div>
                  </div>
                 </div>
                 <h1 data-aos="fade-right" className='font-semibold ss:text-[68px] text-[45px] ss:leading-[100px] leading-[75px] w-full'>
                 Holistic Intelligence
                 </h1>
                 <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                 The ultimate AI-powered virtual assistant that revolutionizes the way you communicate! <br/>
                 It's designed to provide human-like interactions, answer questions, and assist with tasks such as language translation and text summarization, all at lightning-fast speeds!
                 </p>
            </div>
            <div>
              <img data-aos="fade-left" src="/assets/Main_page.png" alt="" className=' w-[100%] h-[100%] relative z-[5]' />
              <div className='absolute z-[0] w-[40%] h-[35%] top-[180px] rounded-full'
              style={{background: "#ff00ea", filter: props.mode==="black"?"blur(160px)":"blur(360px)", pointerEvents: "none"}}/>
              <div className='absolute z-[0] w-[40%] h-[35%] bottom-[10px] rounded-full'
              style={{background: "#7aebfb", filter: props.mode==="black"?"blur(150px)":"blur(250px)" , pointerEvents: "none"}}/>
            
            </div>
            
        </section>
        <br />
        
    </div>
  )
}

export default MainScreen