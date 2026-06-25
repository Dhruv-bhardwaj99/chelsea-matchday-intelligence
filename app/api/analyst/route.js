import Anthropic from "@anthropic-ai/sdk";


const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request) {
  const { question } = await request.json();

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: `You are an expert football analyst specialising in Chelsea FC. 
You have deep knowledge of Chelsea's tactics, history, players, and the Premier League. 
Give insightful, concise analysis. Keep responses under 200 words.
Do not use Markdown formatting, bullet points, or headers. Write in plain paragraphs only.`,
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
  });

  return Response.json({
    answer: message.content[0].text,
  });
}