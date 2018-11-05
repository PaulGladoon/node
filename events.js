const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('start', (message) => console.log(message))

emitter.emit('start', 'Started')
