const { send } = require("./internals");
const { read } = require("./internals");

function makeRequest(url, data) {
  send(url, data);
  read();
}

makeRequest("https://goole.com", "hello");

// console.log(resData, "11");
