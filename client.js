const net = require("net");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
  });

// creating a coonnection with a server
const client = net.createConnection({
  host: '127.0.0.1',
  port: 9876
  });

client.setEncoding('utf8');

// handling data sent from the server
client.on('data', (data) => {
  console.log(data);

//sending data/ request TO the server...
rl.on('line', (input) => {
  client.write(`${input}\n`)
  });

});