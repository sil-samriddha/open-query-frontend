import React from 'react'

function Btn(props) {
  return (
    <button type='button' className={`py-4 px-5 text-white hover:bg-none hover:font-bold border-${props.mode==="black"?"white":"pink"}-900 rounded font-medium text-[18px] outline-none ${props.addClass}`}
    style={props.mode==="black"?{background: "linear-gradient(to right,  #a957d9, #7e2a64)"}:
    {backgroundImage: "linear-gradient(to right, #861550 0%, #de5b9f 74%)"}}>
        {props.text}

    </button>
  )
}

export default Btn