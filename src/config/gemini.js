
import {
  GoogleGenerativeAI,
  
}  from "@google/generative-ai";


const apiKey = 'AIzaSyBeYFEh5zWKTyAekwmd6mXFEYOysy0AS1U';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  
  const chatSession = model.startChat({
    generationConfig,
   
  });

  const results = await chatSession.sendMessage(prompt);
  
  console.log(results.response.text());

  return results.response.text()

}



 export  {run}