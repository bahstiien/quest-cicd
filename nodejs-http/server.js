const http = require("http");
const url = require("url");
const port = 8000;

const requestHandler = (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const name = parsedUrl.query.name;
  const city = parsedUrl.query.city;
  

  if (city && name) {
    response.end( `Hello, ${name} from ${city}!`);
  } else {
    response.end("Please provide name and city parameters");     
    );
  }

  
  const server = http.createServer(requestHandler);
  
  server.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Hello ${name} from ${city}`);
    }
  });