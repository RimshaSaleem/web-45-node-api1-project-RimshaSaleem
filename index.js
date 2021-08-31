const server = require('./api/server');

const port = 5000;

// START YOUR SERVER HERE
// console.log(' server is listening on port 5000')
server.listen(port, () => { // only one program can hog 5000 at a time
    console.log(' server is listening on port' ,port) // success callback
  })
  