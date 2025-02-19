const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

// Handle potential errors during server start
server.listen(8080).catch(err => {
  console.error('Failed to start server:', err);
});

// Example of handling promise rejection
function myPromise() {
    return new Promise((resolve, reject) => {
        // Simulate an error
        setTimeout(() => {
            reject(new Error('Something went wrong!'));
        }, 1000);
    });
}

myPromise()
  .then(result => {
    console.log('Promise resolved:', result);
  })
  .catch(error => {
    console.error('Promise rejected:', error);
  });

