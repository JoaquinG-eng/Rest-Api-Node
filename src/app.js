import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import authorsRoutes from "./routes/Authors.Routes.js";
import postsRoutes from "./routes/Posts.Routes.js";
import { errorHandler } from "./middlewares/Error.Middlewares.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/authors", authorsRoutes);
app.use("/api/posts", postsRoutes);

const swaggerDocument = YAML.load(join(__dirname, "yaml/swagger.yaml"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
 
app.get("/", (req, res) => {
res.json({
    status: "200",
    endpoints: {
      authors: "/api/authors",
      posts: "/api/posts",
      docs: "/api-docs"
    }
  });
 });
 
app.use(errorHandler);

export default app;