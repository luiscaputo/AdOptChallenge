import http from "http";
import app from "./index";

const serverHttp = http.createServer(app),
  PORT = process.env.PORT,
  HOST = "0.0.0.0";

if (require.main == module) {
  serverHttp.listen(8080, HOST, () => {
    console.log(`SERVER ON PORT [--- ${PORT} ---]`);
  });
}
