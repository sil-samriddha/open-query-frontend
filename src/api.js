export const fetchResponse =  async(chat) => {
    try {
        const response = await fetch('http://localhost:4000', { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chat.map((message)=> message.message).join(" \n ")
            })
        })

        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
        const data = {
            message: 
            "We would like to inform you that our server is currently undergoing maintenance."+
            " During this time, chatting services may be temporarily unavailable."+
            " We apologize for any inconvenience this may cause"+
            " and assure you that our team is working diligently"+
            " to resolve any issues as quickly as possible.\nThank you for your understanding.\n"
        }
        return data
    }
}