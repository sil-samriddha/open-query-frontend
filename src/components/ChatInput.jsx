import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';

const ChatInput = (props) => {
  const [value, setValue] = useState("")
  const handleSubmit =()=>{
    if(value === ""){
      return;
    }else{
      props.sendMessage({sender: "user", message: value})
      setValue("")
    }
  }
  return (

    <div className={`w-full max-h-40 rounded-lg px-4 py-4 overflow-auto relative`}
    style={props.mode === "black"?{background: "rgba(152, 86, 141, 0.2)"}:{background : "rgba(130, 7, 71, 0.2)"}}>
        {props.loading?
          <>
          {props.mode==="black"? 
          <img src="./assets/loading_white.gif" className='w-8 m-auto' alt="loading"/>
          :
          <img src="./assets/loading_pink.gif" className='w-8 m-auto' alt="loading"/>
          }
          </>
          :
          <>
        <TextareaAutosize
        onKeyDown={(e)=>{
          e.keyCode === 13 && e.shiftKey === false && handleSubmit();
        }}
        className='border-0 bg-transparent outline-none w-11/12 overflow-auto resize-none
        scrollbar scrollbar-thumb-pink-100 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded-md'
        style={props.mode==="black"?{}:{color: "rgba(130, 7, 71,1)"}}
        value={value}
        type="text"
        maxRows="5"
        onChange={(e)=>setValue(e.target.value)}
        />
        <img
          onClick={handleSubmit}
          src={props.mode==="black"?"/assets/send_white.png":"/assets/send_pink.png"}
          alt="send"
          width="30px"
          className='absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125 content-end'
        />
        </>
        }
    </div>
  )
}

export default ChatInput