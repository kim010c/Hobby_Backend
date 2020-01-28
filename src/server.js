import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./env";

const PORT = process.env.PORT || 5000;

const server = new GraphQLServer({
  schema
  //   context: ({ request }) => ({ request, isAuthenticated })
});
//context는 resolver 사이에 정보를 공유할떄 사용
server.express.use(logger("dev"));
//server.express.post("/api/upload", uploadMiddleware, uploadController);
server.start({ port: PORT }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
