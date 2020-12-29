const ws = require('ws').Server
const wss = new ws({ port: 5000 })
const wf = require('./lib')

wss.on('connection', wf('ws://localhost:8080'))
