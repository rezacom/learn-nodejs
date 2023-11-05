const { request, get } = require("https");

// ============

const req = request("https://google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Chunk Data: ${chunk}`);
  });
  res.on("end", () => {
    console.log(`No More Data`);
  });
});

req.end();

// ============

get("https://google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Chunk Data: ${chunk}`);
  });
  res.on("end", () => {
    console.log(`No More Data`);
  });
});
