const http = require("http");
const fs = require("fs");
const { url } = require("inspector");
const hostname = "127.0.0.1";
const port = 3000;

// Reading various HTML files
const index = fs.readFileSync("./index.html");
const contact = fs.readFileSync("./contact me.html");
const education = fs.readFileSync("./education.html");
const experience = fs.readFileSync("./experience.html");
const Extra_Curricular = fs.readFileSync("./Extra Curricular.html");
const skills = fs.readFileSync("./skills.html");
const projects = fs.readFileSync("./projects.html");

console.log(index);

const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (url == "/") {
    res.end(index);
  } 
  if (url == "/index") {
    res.end(index);
  } 
  else if (url == "/contact") {
    res.end(contact);
  }
  else if (url == "/education") {
    res.end(education);
  }
  else if (url == "/experience") {
    res.end(experience);
  }
  else if (url == "/Extra_Curricular") {
    res.end(Extra_Curricular);
  }
  else if (url == "/projects") {
    res.end(projects);
  }
  else if (url == "/skills") {
    res.end(skills);
  }
  else{
      res.statusCode = 404;
        res.end("<h1>404 Not Found</h1>");
  }

  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
