import { inngest } from "./client";
import { generateText } from "ai";
import { createDeepSeek } from '@ai-sdk/deepseek';

const deepseek = createDeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY ?? '',
});

export const executeAI = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    step.sleep("pretend", "5s");

    const { steps } = await step.ai.wrap(
      "deepseek-chat",
      generateText,
      {
        model: deepseek('deepseek-chat'),
        messages: [
          { role: 'system', content: "You are a helpful assistant." },
        ],
        prompt: event.data.prompt,
      }
    )
    return steps
  },
);