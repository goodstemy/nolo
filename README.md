Node log

Getting started:

```
const Logger = require('node-log');

const logger = new Logger();
```

1. Using console logs:

```
    logger
      .log(Level.error, 'Oops, error!');
```

2. Using log file:

```
logger
  .setFileTransport('./logs.txt')
  .log(Level.error, 'Oops, error!');
```
