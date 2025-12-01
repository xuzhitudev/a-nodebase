import { inngest } from '@/inngest/client';
import { protectedProcedure, createTRPCRouter } from '../init';
import prisma from '@/lib/db';
export const appRouter = createTRPCRouter({
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