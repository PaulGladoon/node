const fs = require('fs')
const zlib = require('zlib')

const input = fs.createReadStream('lorem.txt')
const output = fs.createWriteStream('lorem.md.gz')
const gzip = zlib.createGzip()

input.pipe(gzip).pipe(output)

class ReadStream {
  pipe (stream) {
    this.on('data', part => stream.write(part))
    return stream
  }
}

module.exports = {
  ReadStream
}
