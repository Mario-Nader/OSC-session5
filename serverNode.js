  const http = require('http');

  // Create a server
  const server = http.createServer();

  // Listen on a port
  const PORT = 3000;
  server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
  });