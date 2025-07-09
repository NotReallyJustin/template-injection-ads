const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

/*
    Creates a simple server to host the malicious .docm
*/

http.createServer((request, response) => {
    if (request.url == "/boo.docm")
    {
        const file = path.join(__dirname, "./boo.docm");
        fs.createReadStream(file).pipe(response);
    }
    else
    {
        response.writeHead(404);
        response.end("Not Found.");
    }
}).listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});