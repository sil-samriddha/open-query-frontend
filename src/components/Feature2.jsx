import React from 'react'
import FeatureContent from './FeatureContent';


function Feature2(props) {
  return (
    <div>
      <section className="rounded-xl my-5"
      id="features"
      style={props.mode==="black"?{backgroundColor: "rgba(152, 86, 141, 0.4)", border: "1px solid white"}:{backgroundColor: "rgba(171, 73, 141, 0.15)"}}>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-10 md:grid md:grid-cols-2 sm:py-8 lg:px-10">
          <FeatureContent mode={props.mode} 
          heading="Natural language processing" 
          define="Open Query can understand and respond to human language in a way that feels natural and intuitive. This allows for more seamless communication with customers and can help businesses build stronger relationships with their audience.
          " imgLink="/assets/natural_language_processing.png"/>
          <FeatureContent mode={props.mode} 
          heading="Personalization" 
          define="Open Query can be customized to suit the needs of individual businesses, allowing for personalized interactions with customers. This can help businesses deliver more relevant and targeted marketing messages, increasing the likelihood of conversion.
          " imgLink="/assets/personalised.png"/>
          <FeatureContent mode={props.mode} 
          heading="Scalability" 
          define="Open Query can handle a large volume of conversations simultaneously, making it an ideal tool for businesses of all sizes. It can help businesses engage with customers at scale, without sacrificing the quality of the interactions." 
          imgLink="/assets/scale.png"/>
          <FeatureContent mode={props.mode} 
          heading="24/7 Availability" 
          define="Open Query is available 24/7, making it possible for businesses to engage with customers at any time of the day or night. This can be especially valuable for businesses that operate in different time zones or have customers in different parts of the world." 
          imgLink="/assets/24_7.png"/>
          <FeatureContent mode={props.mode} 
          heading="Data-driven insights" 
          define="Open Query can be used to gather valuable data and insights about customer behavior, preferences, and needs. This information can be used to improve marketing strategies and optimize customer engagement."
          imgLink="/assets/data_in.png"/>
        </div>
      </section>
    </div>
  );
}

export default Feature2
