const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  { id: 0, name: "Reza Shoja" },
  { id: 1, name: "Ali Shoja" },
  { id: 2, name: "Mehdi Shoja" },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");
  console.log(items);
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("Hello Word!");
  } else if (items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const indexFriend = items[2];
      res.end(JSON.stringify(friends[indexFriend]));
    } else res.end(JSON.stringify(friends));
  } else if (items[1] === "messages") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Reza How Are You?</li>");
    res.write("<li>Are You Ok?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
