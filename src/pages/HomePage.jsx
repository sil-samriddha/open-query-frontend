import React from 'react'
import Sample from '../components/Sample'
import Footer from '../components/Footer'
import styles from '../styles/HomeStyle'
import Feedback from '../components/Feedback'
import Navbar from '../components/Navbar'
import MainScreen from '../components/MainScreen'

function HomePage(props) {
  return (
    <div className="w-full overflow-hidden"
    style={props.mode==="black"? {background: "#1A232E", color: "white"}: {background: "white", color: "rgba(130, 7, 71,1)"}}
    >
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Navbar mode={props.mode} toggleMode={props.toggleMode}/>
            <button onClick = {()=>{props.toggleMode(), alert("Mode changed")}} >Change mode</button>
                
            </div>
            
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
            <MainScreen/>
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
                What makes Zoho Open Query the best live chat software?
                Technology & dependencies
                <Feedback mode={props.mode}/>
                
                
            </div>
        </div>
                <Footer mode={props.mode}/>
    </div>
  )
}

export default HomePage