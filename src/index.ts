import { app, port } from "./app";

app.listen(app.get("port"), () =>
  console.log(`[server]: Server is running at https://localhost:${port}`)
);
