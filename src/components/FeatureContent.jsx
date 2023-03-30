import React from 'react'
import Btn from './Btn'

function FeatureContent(props) {
  return (
    <>
        <img
            className="w-full"
            src={props.imgLink}
            alt=""
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            {props.heading}
            </h2>
            <p className="mb-6 font-light md:text-lg">
            {props.define}
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm text-center"
            >
                <Btn mode={props.mode} text="Learn more"/>
            </a>
          </div>
    </>
  )
}

export default FeatureContent