import React, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Tech() {
    const linkClass='flex justify-center items-center'
    useEffect (()=>{
        Aos.init({duration: 1000});
      },[]);
  return (
    <div>
        <section>
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center md:text-4xl">Technologies & Dependencies</h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 align-center">
            <a href="https://react.dev/" target="_blank" className={linkClass}>
                <img data-aos="zoom-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React Js" />                        
            </a>
            <a href="https://expressjs.com/" target="_blank" className={linkClass}>
                <img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" alt="express Js" />                                             
            </a>
            <a href="https://openai.com/" target="_blank" className={linkClass}>
                <img data-aos="zoom-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/OpenAI_Logo_%282%29.svg/2560px-OpenAI_Logo_%282%29.svg.png" alt="openai" />                                                               
            </a>

            <a href="https://tailwindui.com/" target="_blank" className={linkClass}>
                <img data-aos="zoom-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" alt="tailwind" />                                                                                   
            </a>
            <a href="https://axios-http.com/" target="_blank" className={linkClass}>
                <img data-aos="zoom-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/1280px-Axios_%28computer_library%29_logo.svg.png" alt="axios" />                                                                                  
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" className={linkClass}>
                <img data-aos="zoom-in" src="https://dotnettrickscloud.blob.core.windows.net/uploads/CourseImages/becomeanaspnetwebapideveloper-mobile.png" alt="web api" />                                                                                   
            </a>
        </div>
    </div>
</section>
    </div>
  )
}

export default Tech