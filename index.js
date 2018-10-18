const Level = require('./enums');
const Transport = require('./transports');

class Logger {
	constructor() {
    this.level = Level;
  }

	setFileTransport(filePath) {
		this.transport = new Transport.FileTransport(filePath);

		return this;
	}

	log(logLevel, logString) {
		if (typeof this.transport === 'undefined') {
      console.log(`${logLevel}${logString}`);
		} else {
      this.transport.log(logLevel, logString);
		}
	}
}

module.exports = Logger;
