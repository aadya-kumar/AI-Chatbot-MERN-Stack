import { connectToDatabase } from "./db/connection.js";
import app from "./utils/app.js";

const PORT=process.env.PORT || 5000;
connectToDatabase().then(() =>{
  app.listen(PORT, () => console.log("Server Open and connected to DB"));
}).catch(err=>console.log(err));