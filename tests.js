(() => {
  const Logger = require('./index');

  const logger = new Logger();

  logger
    .emerg('Emergency message')
    .crit('Critical message')
    .error('Error message')
    .warning('Warning message')
    .notice('Notice message')
    .info('Info message')
    .debug('Debug message');
})();