const fs = require('fs');

class FileTransport {
  constructor(filePath) {
    this.fileStream = fs.createWriteStream(filePath);
  }

  log(logLevel, logString) {
    this.fileStream.write(`${logString}`);
  }
}

module.exports = {
  FileTransport
};
