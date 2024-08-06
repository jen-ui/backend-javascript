import connectDB from "./db/index.js";
import dotenv from "dotenv"
import app from "./app.js";

const PORT = process.env.PORT || 3000;

dotenv.config({
    path:".env"
})

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed:", error);
  });