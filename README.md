# wf.js
A simple Websocket forwarder.

## Installation
 - Modules Installation
```bash
npm install wf.js
```

## Example
```js
const ws = require('ws').Server
const wss = new ws({ port: 8080 })
const wf = require('wf.js')

wss.on('connection', wf('ws://echo.websocket.org'))
```
Or
```js
const ws = require('ws').Server
const wss = new ws({ port: 8080 })
const wf = require('wf.js')

wss.on('connection', function (ws) {
 wf('ws://echo.websocket.org')(ws);
});
```
## Feedback
Any question or doubt can join our [Discord Server](https://discord.gg/9S3ZCDR).

