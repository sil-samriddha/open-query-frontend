import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import env from 'dotenv'
import {Configuration, OpenAIApi} from 'openai'

const app = express()

env.config()

app.use(cors())
app.use(bodyParser.json())


// Configure
const configuration = new Configuration({
    organization: "org-5d5ojcAOKgoWhCgNjBYV7hsV",
    apiKey: process.env.API_KEY 
})
const openai = new OpenAIApi(configuration)

const port = 4000
// listeninng
app.listen(port, ()=>console.log(`listening on port ${port}`))


// dummy route
app.get("/", (req, res) => {
    res.send(`Server is running on port : ${port}`)
})


//post route
app.post('/', async (req, res)=>{
    const {message} = req.body

    try{
        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo",
            prompt: `${message}`,
            max_tokens: 512,
            temperature: .5
        })
        res.json({message: response.data.choices[0].text})

    }catch(e){
        console.log(e)
        res.send(e).status(400)
    }
})