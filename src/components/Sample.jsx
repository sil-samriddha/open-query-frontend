import React from 'react'

function Sample(props) {
    const aiStyle = 
        props.mode==='black'?
            {background : "rgba(152, 86, 141, 0.4)"}
        :{
            background: "rgba(130, 7, 71, 0.8)",
            border: "none"
        }
    const userStyle =
        props.mode === "black"? 
            {}
        : {
            color: "rgba(130, 7, 71,1)",
            borderColor: "rgba(130, 7, 71,0.7)",
        }
  return (
    <div className=" gap-2 py-8 px-4 self-center
    scrollbar scrollbar-thumb-pink-100 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded-md
    relative sm:px-16 overflow-hidden flex flex-col justify-between align-middle">
        {/* user side interface */}
        <div className={`border-[#999999] break-words border-2 rounded-xl self-end py-3 px-3 max-w-[80%]`}
        style={userStyle}>
            <pre className="whitespace-pre-wrap">
                <span>
                    {props.userChat}
                </span>
            </pre>
        </div>
        {/* server side interface */}
        <div className={`border-[#999999] break-words border-2 rounded-xl self-end py-3 px-3 max-w-[80%] text-white backdrop-blur-lg dropshadow-md mr-auto`}
        style={aiStyle}>
            <pre className="whitespace-pre-wrap">
                <span>
                    {props.aiChat}
                </span>
            </pre>
        </div>
    </div>
  )
}

export default Sample