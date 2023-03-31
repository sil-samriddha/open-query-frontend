import React, { useEffect, useRef } from 'react'
import autoAnimate from '@formkit/auto-animate';

function ChatBody(prop) {
  // Speech synthesis
  const synth = window.speechSynthesis;
  const handleSpeak = (message) => {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.voice = synth.getVoices()[2];
    utterance.rate = 1.3;
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
    const BtnClass = 'bg-transparent hover:bg-[rgba(255,255,255,0.3)] text-white-900 font-semibold py-2 px-4 border border-white-300 rounded focus:ring-4 focus:ring-[#FFFFFF] focus:ring-opacity-50'
    const BtnStyle = {borderRadius: '5px 20px', overflow: 'hidden'}

        // animations
        useEffect(()=>{
          parent.current && autoAnimate(parent.current);

        }, [parent])

        // scrolling
        useEffect(()=>{
          bottomRef.current?.scrollIntoView({behavior: "smooth"});
        }, [prop.chat])

  return (
    <div className={`flex flex-col gap-4 overflow-hidden`} ref={parent}>

        {
            prop.chat.map((message, i)=>{
                return (
                  <div
                    key={i}
                    className={`border-[#999999] break-words border-2 self-end py-3 px-3 max-w-[80%]
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
                        <div className="flex items-stretch">
                          <div className="py-1 px-1">
                            <button className={BtnClass}
                            style={BtnStyle}
                            onClick={()=>{navigator.clipboard.writeText(message.message), alert("Copied ! ")}}>
                              Copy
                            </button>
                          </div>
                          <div className="py-1 px-1">
                            <button className={BtnClass}
                            style={BtnStyle}>
                              Feedback
                            </button>
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
    </div>
  )
}

export default ChatBody