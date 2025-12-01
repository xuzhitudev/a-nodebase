import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("fetching", "5s");

    await step.sleep("trancribing", "5s");

    await step.sleep("sending to ai", "5s");

    await step.run("create workflow", async () => {
      await prisma.workflow.create({
        data: {
          name: `${event.data.email}`,
        },
      });
    });
  },
);