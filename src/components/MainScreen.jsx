import React from 'react'
import styles from '../styles/HomeStyle'

function MainScreen(props) {
  return (
    <div>
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                 <div className='flex flex-row items-center py-[6px] px-4  rounded-[10px] mb-2'>
                  <p>
                    <span style={props.mode==="black"?{color: "#e6bcfe", fontWeight: "bolder"}:{color: "#763261", fontWeight: "bolder"}}>Free</span> &nbsp;
                    <span style={props.mode==="black"?{color: "rgba(255,255,255,0.7)"}:{color: "rgba(171, 73, 141, 0.7)"}}>&</span> &nbsp; 
                    <span style={props.mode==="black"?{color: "#e6bcfe", fontWeight: "bolder"}:{color: "#763261", fontWeight: "bolder"}}>Open Source</span> &nbsp; 
                    <span style={props.mode==="black"?{color: "rgba(255,255,255,0.7)"}:{color: "rgba(171, 73, 141, 0.7)"}}>tool to</span> 
                  </p>
                 </div>
                 <div className='flex flex-row justify-between items-center w-full'>
                  <h1 className='flex-1 font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
                    <h1
                    style={props.mode==="black"?{backgroundImage: "linear-gradient(to right,  #a957d9, #d998a0, #e6bcfe, #7e2a64)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}:
                    {backgroundImage: "linear-gradient(to right, #861657 0%, #ffa69e 74%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Solve Queries</h1>
                    
                    <span className="ss:text-[50px] text-[42px]" style={props.mode==="black"?{color: "rgba(255,255,255,1)"}:{color: "rgba(176, 74, 144, 0.5)"}}>through Holistic Intelligence</span>
                  </h1>

                 </div>
        
                
            </div>
            
        </section>
        <br />
        The ultimate AI-powered virtual assistant that revolutionizes the way you communicate!
    </div>
  )
}

export default MainScreen