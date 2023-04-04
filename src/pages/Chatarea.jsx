import React, { useEffect, useState } from 'react'
import '../styles/Chatarea.css'
import ChatBody from '../components/ChatBody';
import ChatInput from '../components/ChatInput';
import { useMutation } from 'react-query';
import { fetchResponse } from '../api';
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Chatarea(props) {
  const [chat, setChat] = useState([]);
  useEffect (()=>{
    Aos.init({duration: 1000});
  },[]);

  // const synth = window.speechSynthesis;
  // const handleSpeak = (message) => {
  //   const utterance = new SpeechSynthesisUtterance(message);
  //   utterance.voice = synth.getVoices()[1];
  //   synth.speak(utterance);  
  // };

  const mutation = useMutation({
    mutationFn: ()=>{
      return fetchResponse(chat)
    },
    onSuccess: (data)=>{
        // handleSpeak(data.message);        
        setChat((prev)=>[...prev, {sender: 'ai', message: data.message.replace("`"," ")}])}

  })


  const sendMessage = async(message)=>{
    await Promise.resolve(setChat((prev)=>[...prev, message]))
    mutation.mutate();

  }
  return (
    <div
      className={`h-screen w-screen py-6 relative sm:px-16 px-12 text-${
        props.mode === "black" ? "white" : "[#1A232E]"
      } overflow-hidden flex flex-col justify-between  align-middle`}
      style={
        props.mode === "black"
          ? { background: "#1A232E" }
          : { background: "white" }
      }
    >
      {/* gradients */}
      <div data-aos="fade-in-left" className="gradient-01 z-0 absolute"></div>
      <div data-aos="fade-in-right" className="gradient-02 z-0 absolute"></div>
      <div data-aos="fade-in-down" className="gradient-03 z-0 absolute"></div>

      {/* header */}
      <div data-aos="fade-down" className="grid grid-rows-3 grid-flow-col gap-4 align-middle">
        <div className="row-start-1 row-span-2 w-30 text-left"
        style={props.mode==='black'?{}:{color: "rgba(130, 7, 71,1)"}}>
          <Link to="/">
        <button className='w-15'>
              <img data-aos="fade-left" src={props.mode==="black"?"/assets/home_white.png":"/assets/home_pink.png"} alt="" className='w-10 h-10 hover:scale-125' />
          </button>
          </Link>
        </div>
        <div className="row-end-3 row-span-2 font-bold text-2xl text-center mb-3">
          Open Query
        </div>
        <div className="row-start-1 row-end-4 text-right"
        style={props.mode==='black'?{}:{color: "rgba(130, 7, 71,1)"}}>
          <button className='w-15' onClick={props.toggle}>
          <img  data-aos="fade-right" src={props.mode==="black"?"/assets/light_mode.png":"/assets/dark_mode.png"} alt="" className='w-10 h-10' />
          </button>
        </div>
      </div>

      {/* body */}
      <div className={`h-[90%] overflow-auto w-full max-w-7xl min-w-[20rem] py-8 px-4 self-center
     scrollbar-thumb-pink-100 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded-md`}>

        <ChatBody mode={props.mode} chat={chat}/>
      </div>

      {/* input */}
      <div className='w-full max-w-7xl min-w-[20rem] self-center'>
        <ChatInput mode={props.mode} sendMessage={sendMessage} loading={mutation.isLoading}/>
      </div>
    </div>
  );
}

export default Chatarea