import React from 'react'
import Sample from '../components/Sample'
import Footer from '../components/Footer'
import styles from '../styles/HomeStyle'
import Feedback from '../components/Feedback'
import Navbar from '../components/Navbar'
import MainScreen from '../components/MainScreen'
import Feature2 from '../components/Feature2'
import Tech from '../components/Tech'
function HomePage(props) {
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
                <div className=''
                style={{height: "250px"}}>
                <Sample
                mode={props.mode}
                userChat="Hello there I am the user" 
                aiChat="Hello user, I am Open Query"/>
                

                </div>
                <h2 className={styles.heading2} align="center">
                What makes Open Query the best live chat software?
                </h2>
                <Feature2 mode={props.mode}/>
                <Tech/>
                
                <Feedback mode={props.mode}/>
                
                
            </div>
        </div>
                <Footer mode={props.mode}/>
    </div>
  )
}

export default HomePage