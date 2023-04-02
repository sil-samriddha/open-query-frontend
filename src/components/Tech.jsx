import React from 'react'

function Tech() {
  return (
    <div>
        <section>
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center md:text-4xl">Technologies & Dependencies</h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 align-center">
            <a href="https://react.dev/" target="_blank" className="flex justify-center items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React Js" />                        
            </a>
            <a href="https://expressjs.com/" target="_blank" className="flex justify-center items-center">
                <img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" alt="express Js" />                                             
            </a>
            <a href="https://openai.com/" target="_blank" className="flex justify-center items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/OpenAI_Logo_%282%29.svg/2560px-OpenAI_Logo_%282%29.svg.png" alt="openai" />                                                               
            </a>

            <a href="https://tailwindui.com/" target="_blank" className="flex justify-center items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" alt="tailwind" />                                                                                   
            </a>
            <a href="https://www.canva.com/" target="_blank" className="flex justify-center items-center">
                <img src="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" alt="canva" />                                                                                  
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" className="flex justify-center items-center">
                <img src="https://dotnettrickscloud.blob.core.windows.net/uploads/CourseImages/becomeanaspnetwebapideveloper-mobile.png" alt="web api" />                                                                                   
            </a>
        </div>
    </div>
</section>
    </div>
  )
}

export default Tech