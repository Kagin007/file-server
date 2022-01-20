const net = require('net');
const port = 9876;
const fs = require('fs')

const server = net.createServer();

server.listen(port, () => {
  console.log('Server is listening on port ' + port);
})

server.on('connection', (socket) => {
  socket.setEncoding('utf8');
  socket.write('Welcome to the File-Server! What file would you like?')



  // listening for data coming 
  socket.on('data', (data) => {
    socket.write('ok! let me work on that...')
    console.log("checking...")
    
    const fileReturn = (returnFile) => {
      socket.write(returnFile, 'utf8', )
      console.log("sent!")
    }    

    getFileDetails(data.toString().trim(), fileReturn)

  })
})

  const getFileDetails = function(request, magicCallback) {
    console.log(`Searching directories for ${request}.txt..`)
    fs.readFile(`./data/${request}.txt`, 'utf8', (error, data) => {
      console.log('Callback function working...')
      if (!error) {
        magicCallback(data);
      } else {
          (magicCallback(undefined))
      }
    })  
  }
  
