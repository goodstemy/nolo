const Level = require('./enums');
const Transport = require('./transports');

class Logger {
	setFileTransport(filePath) {
		this.transport = new Transport.FileTransport(filePath);

		return this;
	}

	emerg(logString) {
		this._log(Level.emerg, logString);
		return this;
	}

	crit(logString) {
    this._log(Level.crit, logString);
    return this;
	}

	error(logString) {
		this._log(Level.error, logString);
    return this;
	}

	warning(logString) {
		this._log(Level.warning, logString);
    return this;
	}

	notice(logString) {
		this._log(Level.notice, logString);
    return this;
	}

	info(logString) {
		this._log(Level.info, logString);
    return this;
	}

	debug(logString) {
		this._log(Level.debug, logString);
    return this;
	}

	_log(logLevel, logString) {
		if (typeof this.transport === 'undefined') {
      console.log(`${logLevel}${logString}`);
		} else {
      this.transport.log(logLevel, logString);
		}
	}
}

module.exports = Logger;
