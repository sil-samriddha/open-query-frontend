import React from 'react'

function Feedback(props) {
  return (
    <div>
        <section>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900"
      style={props.mode==="black"? {color: "white"} : {color: "rgba(130, 7, 71,1)"}}>Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Let us know how can we help you.</p>
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#820747]-900 ">Your email</label>
              <input type="email" id="email" className={`shadow-sm block w-full p-2.5 rounded border border-gray-900 text-gray-900 ${props.mode==="black"? "":"focus:outline-none focus:ring focus:ring-[#820747]"}`} placeholder="name@domain.com"
              required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[#820747]-900">Subject</label>
              <input type="text" id="subject" className={`shadow-sm block w-full p-2.5 rounded border border-gray-900 text-gray-900 ${props.mode==="black"? "":"focus:outline-none focus:ring focus:ring-[#820747]"}`} placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#820747]-900">Your message</label>
              <textarea id="message" rows="6" className={`shadow-sm block w-full p-2.5 rounded border border-gray-900 text-gray-900 ${props.mode==="black"? "":"focus:outline-none focus:ring focus:ring-[#820747]"}`} placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className={`bg-transparent hover:bg-${props.mode==="black"?"[rgba(255,255,255,0.3)]":"[#820747]"} font-semibold py-3 px-5 text-sm font-medium text-center ${props.mode==="black"?"":"hover:text-zinc-50"} border border-${props.mode==="black"?"white-500":"[#820747]"} py-2 px-4 hover:border-transparent rounded`}>Send message</button>
      </form>
  </div>
</section>
    </div>
  )
}

export default Feedback