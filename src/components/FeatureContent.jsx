import React, { useEffect } from 'react'
import Btn from './Btn'
import Aos from 'aos'
import 'aos/dist/aos.css'

function FeatureContent(props) {
  useEffect (()=>{
    Aos.init({duration: 700});
  },[]);
  return (
    <><div className='flex justify-center'>

        <img data-aos="zoom-in"
            className="w-[80%]"
            src={props.imgLink}
            alt=""
          />
    </div>
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold"
            style={props.mode==="black"?{backgroundImage: "linear-gradient(to right,  #a957d9, #7e2a64)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}:{backgroundImage: "linear-gradient(to right, #861550 0%, #de5b9f 74%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
            {props.heading}
            </h2>
            <p className="mb-6 font-light md:text-lg opacity-70">
            {props.define}
            </p>
            <a
              href={props.link} target='_blank'
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm text-center"
            >
                <Btn mode={props.mode} text="Learn more"/>
            </a>
          </div>
    </>
  )
}

export default FeatureContent