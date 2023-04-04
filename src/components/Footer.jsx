import React, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
function Footer(props) {
  useEffect (()=>{
    Aos.init({duration: 1000});
  },[]);

  const linkClass = `cursor-pointer font-semibold block pb-2 text-sm  ${props.mode==="black"? "hover:text-[#E0B0FF]":"hover:text-[#FFBFBF]"}`
  
  return (
    <>
      <footer data-aos="fade-up" className="text-center text-white relative pt-8 pb-6"
      style={props.mode==="black"?{background : "rgba(152, 86, 141, 0.4)"}:{background : "rgba(130, 7, 71,1)"}}>
        <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div data-aos="fade-left" className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2">
          We'd love to hear from you
        </h5>
        <div className="flex mt-6 lg:mb-0 mb-6">
          <a href="https://www.linkedin.com/in/samriddha-sil" target="_blank">
          <button className="flex flex-initial bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <img src="/assets/linkedin.png" className="align-center justify-center w-[50%] h-[50%]" alt="" />
            </button>
          </a>
          <a href="https://github.com/sil-samriddha" target="_blank">
            <button className="flex flex-initial bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <img src="/assets/github.png" className="align-center justify-center w-[50%] h-[50%]" alt="" />
            </button>
          </a>
          <a href="mailto: samriddha.sil297@gmail.com" target="_blank">
            <button className="flex flex-initial bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <img src="/assets/gmail.png" className="align-center justify-center w-[50%] h-[50%]" alt="" />
            </button>
          </a>
        </div>
      </div>
      <div data-aos="fade-right" className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto text-2xl">
            Thank you for visiting
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase mt-5 sm:mt-0 text-sm font-semibold mb-2">Navigation Links</span>
            <ul className={`list-unstyled hover:font-bold`}>
              <li>
                <Scroll className={linkClass} to="home">Home</Scroll>
              </li>
              <li>
                <Link className={linkClass} to="/app">Get Started</Link>
              </li>
              <li>
                <Scroll className={linkClass} to="features">Features</Scroll>
              </li>
              <li>
                <Scroll className={linkClass} to="feedback" offset={-200}>Feedback</Scroll>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-white"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">

        <div className=" font-light py-1">
          Copyright © 2023 - OpenQuery | by Samriddha Sil
        </div>
      </div>
    </div>
  </div>
      </footer>
    </>
  );
}

export default Footer;
