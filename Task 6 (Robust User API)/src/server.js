import app from "./app.js";
import { connectDb } from "./config/database.js";
connectDb().then(() => {
  app.listen(3000, () => console.log("Server running"));
});
