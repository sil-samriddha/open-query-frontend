import React from 'react'
import styles from '../styles/HomeStyle'

function MainScreen() {
  return (
    <div>
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        Solve Queries through Holistic Intelligence
                 <div className='flex flex-row items-center py-[6px] px-4  rounded-[10px] mb-2'>
                    
                 </div>
                
            </div>
            
        </section>
        <br />
        The ultimate AI-powered virtual assistant that revolutionizes the way you communicate!
    </div>
  )
}

export default MainScreen