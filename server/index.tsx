const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const express = require("express");
//express is a popular web framework for Node.js that allows for easy routing and handling of HTTP requests.
const cors = require("cors");
//cors is a middleware that enables Cross-Origin Resource Sharing (CORS) with various options.
const bodyParser = require("body-parser");
//body-parser is middleware that parses the body of an HTTP request, making it easier to extract data from the request.
//https://www.codingthesmartway.com/mastering-dall-e-api-calls-with-node-js/


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Set up the server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.get('/', function(req, res, next) {
//     res.send("Hello world");
// });


// Set up the DALL-E endpoint
app.post("/image", async (req, res) => {
    // Get the prompt from the request
    console.log(req)
    console.log(res)
    const { prompt } = req.body;
  
    // Generate image from prompt
    const response = await openai.createImage({
      prompt: prompt,
      n: 3,
      size: "1024x1024",
    });
    // Send back image urls
    res.send(response.data)
    // res.send({"url": response.data.choices[0].text});
});

// Set up the Text-to-Text GPT endpoint
app.post("/gpt35", async (req, res) => {
    // Get the prompt from the request
    console.log(req)
    console.log(res)
    const { prompt} = req.body;
  
    const completion = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{role: "user", content: prompt}],
    });
    res.send(completion.data.choices[0].message); 

});

// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});