import { inngest } from '@/inngest/client';
import { protectedProcedure, createTRPCRouter } from '../init';
import prisma from '@/lib/db';
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
    import { deepseek } from '@ai-sdk/deepseek';

export const appRouter = createTRPCRouter({
  testAI: protectedProcedure.mutation(async ({}) => {
    const { text } = await generateText({
      model: google("gemini-2.5-flash"),
      prompt: 'Write a vegetarian lasagna recipe for 4 people.',
    });
    return text;
  }),
  testDeepseek: protectedProcedure.mutation(async ({}) => {
    await inngest.send({
      name: "execute/ai",
    });
      return { success: true, message: 'Job queued successfully' };
  }),
  getWorkflows: protectedProcedure
    .query(({ ctx }) => {
      return prisma.workflow.findMany();
    }),
  createWorkflow: protectedProcedure
    .mutation(async ({ ctx }) => {

      // await new Promise((resolve) => setTimeout(resolve, 5_000));

      await inngest.send({
        name: "test/hello.world",
        data: {
          email: "xuzhitu02@163.com",
        },
      });

      return { success: true, message: 'Job queued successfully' };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;