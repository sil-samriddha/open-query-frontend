import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const ChatInput = (props) => {
  const [Speak, setSpeak]= useState(false);
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  
  const handleSpeak = () => {
    if(Speak){
      recognition.stop();
      setSpeak(false);
    }else{
      recognition.start();
      setSpeak(true);
    }
  }
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (value === "") {
      return;
    } else {
      props.sendMessage({ sender: "user", message: value });
      setValue("");
    }
  };
  recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    setValue(transcript);
  };
  return (
    <div
      className={`w-full max-h-40 rounded-lg px-4 py-4 overflow-hidden relative`}
      style={
        props.mode === "black"
          ? { background: "rgba(152, 86, 141, 0.2)" }
          : { background: "rgba(130, 7, 71, 0.2)" }
      }
    >
      {props.loading ? (
        <>
          {props.mode === "black" ? (
            <img
              src="./assets/loading_white.gif"
              className="w-7 h-7 m-auto"
              alt="loading"
            />
          ) : (
            <img
              src="./assets/loading_pink.gif"
              className="w-7 h-7 m-auto"
              alt="loading"
            />
          )}
        </>
      ) : (
        <>
          <img
            src={
              Speak ?
               props.mode === "black" ?
                      "/assets/mic_white_off.png" : "assets/mic_pink_off.png"
                : props.mode === "black" ? "/assets/mic_white.png" : "/assets/mic_pink.png"
            }
            onClick={()=>handleSpeak()}
            alt="send"
            width="30px"
            className="absolute hover:cursor-pointer ease-in duration-100 hover:scale-125"
          />
          <TextareaAutosize
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && handleSubmit();
            }}
            className="border-0 ml-9 bg-transparent outline-none w-11/12 overflow-auto resize-none
       scrollbar-thumb-pink-100 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded-md"
            style={
              props.mode === "black" ? {} : { color: "rgba(130, 7, 71,1)" }
            }
            value={value}
            type="text"
            maxRows="5"
            onChange={(e) => setValue(e.target.value)}
          />
          <img
            onClick={handleSubmit}
            src={
              props.mode === "black"
                ? "/assets/send_white.png"
                : "/assets/send_pink.png"
            }
            alt="send"
            width="30px"
            className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125 content-end"
          />
        </>
      )}
    </div>
  );
};

export default ChatInput;
