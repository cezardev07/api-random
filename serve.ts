import "dotenv/config";
import app from "./app/app";

const PORT = process.env.PORT || 3333;

const serve = app.serve();

serve.listen(PORT, callback);

function callback(){
  return console.log(`serve is running PORT: ${PORT}`);
}