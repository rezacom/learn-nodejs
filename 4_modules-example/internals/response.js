function decrypt(data) {
  return "decrypt data";
}

function read(data) {
  console.log(`Read Data: ${decrypt(data)}`);
}

module.exports = {
  read,
};
