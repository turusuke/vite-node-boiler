import fastify from "fastify";
import { SERVER_PORT } from "./utils/const";

const app = async () => {
  const app = fastify();

  app.get("/", async (req, reply) => {
    return 'Hello world!!'
  });

  if (process.env.NODE_ENV === "production") {
    try {
      await app.listen(SERVER_PORT);
      const address = app.server.address();
      console.log(`Server listening at ${address}`);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  return app;
};

export const viteNodeApp = app();
