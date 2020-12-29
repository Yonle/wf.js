// Load websocket module
const WebSocket = require("ws")

// Export
module.exports = function (host) {

if (!host) {
 throw new TypeError("Host must be type of string or Object. Received "+ typeof(host))
 return;
}
 return function(socket) {
 var ws = new WebSocket(host);
 ws.on('open', function () {
   // If the websocket server is opened, we're ready.
   // If forwarder server receives message, send to Server
   socket.on('message', ws.send);
   // If the websocket server has a message, forwarder server must forward it to client.
   ws.on('message', socket.send);
 });
   // Client & Server Manager //

   // If there's a error, Close the Connection
   ws.on('error', socket.close);
   // If the ws closing connection, Close forwarder server.
   ws.on('close', socket.close);
   // If forwarder server has a closed client, Close the connection
   socket.on('close', ws.close);
   // If forwarder server has a client error, Close the connection.
   socket.on('error', ws.close);
 }
}
