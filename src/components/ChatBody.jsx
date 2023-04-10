import React, { useEffect, useRef } from 'react'
import autoAnimate from '@formkit/auto-animate';
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ChatBody(prop) {
  // Speech synthesis
  const synth = window.speechSynthesis;
  const handleSpeak = (message) => {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.voice = synth.getVoices()[1];
    if (synth.speaking) {
      synth.cancel();
    } else {
      synth.speak(utterance);
    }
  };
    const aiStyle = 
        prop.mode==='black'?
            {background : "rgba(152, 86, 141, 0.4)",
            borderRadius: '5px 30px', overflow: 'hidden'
        }:{
          background: " linear-gradient(326deg, rgba(189,9,103, 0.5) 15% , rgba(150, 9, 83, 0.7) 35%, rgba(130, 7, 71,0.95) 80%)",
          border: "none",
          borderRadius: '5px 30px', overflow: 'hidden'
        }
    const userStyle =
        prop.mode === "black"? 
            {borderRadius: '20px 5px', overflow: 'hidden'}
        : {
            color: "rgba(130, 7, 71,1)",
            borderColor: "rgba(130, 7, 71,0.7)",
            borderRadius: '20px 5px', overflow: 'hidden'
        }
        const parent = useRef(null);
        const bottomRef = useRef(null);
    const BtnClass = 'bg-transparent hover:bg-[rgba(255,255,255,0.3)] font-semibold py-2 px-4 border border-white-300 rounded focus:ring-4 focus:ring-[#FFFFFF] focus:ring-opacity-50'
    const BtnStyle = {borderRadius: '5px 20px', overflow: 'hidden'}

        // animations
        useEffect(()=>{
          parent.current && autoAnimate(parent.current);
        }, [parent])

        // scrolling
        useEffect(()=>{
          bottomRef.current?.scrollIntoView({behavior: "smooth"});
        }, [prop.chat])

        const popup=(msg)=>{
          if(prop.mode==="black"){
            toast.success(msg, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }else{
            toast.success(msg, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          }
        }

  return (
    <div className={`flex flex-col gap-4 overflow-hidden`} ref={parent}>

        {
            prop.chat.map((message, i)=>{
                return (
                  <div
                    key={i}
                    className={`border-[#999999] break-words border-2 self-end py-3 px-3 max-w-[80%] flex-wrap
                    ${
                      message.sender === "ai"
                        ? "text-white backdrop-blur-lg dropshadow-md mr-auto"
                        : ""
                    }`}
                    style={message.sender === "ai" ? aiStyle : userStyle}
                  >
                    <pre className="whitespace-pre-wrap">
                      <span>{message.message}</span>
                    </pre>
                    <div>
                      {message.sender === "ai" ? (
                        <div className="flex items-stretch flex-wrap justify-center sm:justify-start pt-2">
                          <div className="py-1 px-1">
                          <CopyToClipboard text={message.message}>
                            <button className={BtnClass}
                            style={BtnStyle}
                            onClick={()=>popup("Copied !")}>
                              <img src="/assets/copyIcon.png" className='h-6 w-6' alt="copy"/>
                            </button>
                          </CopyToClipboard>
                          </div>
                          <div className="py-1 px-1 hidden sm:inline">
                            <Link to='/'>
                            <button onClick={()=>setTimeout(()=>window.window.scrollTo({top: 3800, behavior: "smooth",}),800)} 
                            className={BtnClass}
                            style={BtnStyle}>
                              <img src="/assets/feedbackicon.png" className='h-6 w-6' alt="feedback"/>
                            </button>
                            </Link>
                          </div>
                          <div className="py-1 px-1 justify-right">
                            <button className={BtnClass}
                            style={BtnStyle}
                            id="speak" onClick={()=>handleSpeak(message.message)}>
                              <img src="/assets/speak.png" className='h-6 w-6' alt="speak"/>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                );
            })
        }
        <div ref={bottomRef} className="h-3">
        </div>
        <ToastContainer />
    </div>
  )
}

export default ChatBody