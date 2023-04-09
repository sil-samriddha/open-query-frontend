import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import styles from '../styles/HomeStyle'
import Feedback from '../components/Feedback'
import Navbar from '../components/Navbar'
import MainScreen from '../components/MainScreen'
import Feature2 from '../components/Feature2'
import Tech from '../components/Tech'
import Aos from 'aos'
import 'aos/dist/aos.css'
function HomePage(props) {
    useEffect (()=>{
        Aos.init({duration: 700});
    },[]);
  return (
    <div className="w-full overflow-hidden"
    style={props.mode==="black"? {background: "#1A232E", color: "white"}: {background: "white", color: "rgba(130, 7, 71,1)"}}
    >
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Navbar mode={props.mode} toggleMode={props.toggleMode}/>
                
            </div>
            
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
            <MainScreen mode={props.mode}/>
            </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <h2 id="features" data-aos="fade-in" data-aos-anchor-placement="center-center" className={styles.heading2} align="center">
                What makes Open Query the best live chat software?
                </h2>
                <div data-aos="fade-up">
                    <Feature2 mode={props.mode}/>
                </div>
                <div data-aos="fade-up">
                    <Tech/>
                </div>
                <div data-aos="fade-up">
                   <Feedback mode={props.mode}/>
                </div>
            </div>
        </div>
                <Footer mode={props.mode}/>
    </div>
  )
}

export default HomePage