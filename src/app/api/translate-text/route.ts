import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { selectedFromLanguage, selectedToLanguage, prompt } = await req.json();


  /* console.log("text: " + prompt)
  console.log("FromLanguage: " + selectedFromLanguage)
  console.log("ToLanguage: " + selectedToLanguage) */

  const translationPrompt = `
    As an adept translator specializing in Cape Verdean Creole, your goal is to 
    deliver the most accurate and high-quality translation for the provided text.
    
    Translate from:
    """
    ${selectedFromLanguage}
    """

    To:
    """
    ${selectedToLanguage}
    """

    Text to Translate:
    """
    ${prompt}
    """
    
  `.trim();


  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      { role: 'user', content: translationPrompt }
    ],
  });



  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}