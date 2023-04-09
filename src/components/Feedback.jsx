import React, { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

function Feedback(props) {
	// Current Date
	let currentDate = new Date();

	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const handleSubmit = (e) =>{
		e.preventDefault();
		const data = {
			Email: email,
			Feedback: msg,
			DateTime: String(currentDate)
		}
		axios.post("https://sheet.best/api/sheets/2c70e2b7-85f1-4405-a6c5-deeabfd5d5ef",data).then((Response)=>{
			console.log(Response);
			alert("Submitted ! ")
		})

		setEmail("");
		setMsg("");
	}
  useEffect(() => {
    Aos.init({ duration: 700, offset: 200 });
  }, []);
  return (
    <div>
      <section id="feedback">
        <div>
          <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
            <div data-aos="fade-left"
              className="flex flex-col w-full lg:w-1/3 p-8"
              style={
                props.mode === "black"
                  ? {}
                  : {
                      backgroundImage:
                        "linear-gradient(to right, #861550 0%, #de5b9f 74%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
              }
            >
              <p className="text-3xl md:text-5xl my-4 leading-relaxed font-bold md:leading-snug">
                Leave us a feedback!
              </p>
              <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Would you please take a moment to leave us some feedback? It
                should only take a minute.
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-2/3 justify-center">
              <div data-aos="fade-right" className="container w-full px-4">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg ${props.mode==="black"?"bg-white":"bg-pink-50"}`}>
                      <div className="flex-auto p-5 lg:p-10">
                        <h4
                          className={`text-2xl mb-4 font-semibold ${
                            props.mode === "black" ? "text-black" : ""
                          }`}
                        >
                          Have a suggestion?
                        </h4>
                        <form id="feedbackForm" onSubmit={handleSubmit}>
                          <div className="relative w-full mb-3">
                            <label
                              className={`block uppercase text-xs font-bold mb-2 ${
                                props.mode === "black" ? "text-black" : ""
                              }`}
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className={`border-0 px-3 py-3 ${
                                props.mode === "black"
                                  ? "bg-gray-300 text-black"
                                  : "bg-white text-[#861550]"
                              } rounded text-sm shadow w-full
                      placeholder-gray-400  outline-none`}
                              placeholder="name@domain.com"
							  onChange={(e)=>setEmail(e.target.value)}
							  value={email}
                              required
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className={`block uppercase text-xs font-bold mb-2 ${
                                props.mode === "black" ? "text-black" : ""
                              }`}
                              htmlFor="message"
                            >
                              Message
                            </label>
                            <textarea
                              name="feedback"
                              id="feedback"
                              rows="4"
                              cols="80"
                              className={`border-0 px-3 py-3 ${
                                props.mode === "black"
                                  ? "bg-gray-300  text-black"
                                  : "bg-white text-[#861550]"
                              } placeholder-gray-400 rounded text-sm shadow focus:outline-none w-full resize-none
                              ${props.mode === "black"? "scrollbar-thumb-stone-50" : "scrollbar-thumb-pink-100"} scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded-md`}
                              placeholder="We'd love to hear your feedback"
							  onChange={(e)=>setMsg(e.target.value)}
							  value={msg}
                              required
                            />
                          </div>
                          <div className="text-center hover:font-bold mt-6">
                            <button
                              id="feedbackBtn"
                              className="text-white text-center mx-auto text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit"
                              style={
                                props.mode === "black"
                                  ? {
                                      backgroundImage:
                                        "linear-gradient(to right,  #a957d9, #7e2a64)",
                                    }
                                  : {
                                      backgroundImage:
                                        "linear-gradient(to right, #861550 0%, #de5b9f 74%)",
                                    }
                              }
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feedback;
