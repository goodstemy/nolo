Node log

Getting started:

Install nolo

```
npm i nolo
```

and use

```
const Logger = require('nolo');

const logger = new Logger();
```

- Using console logs:

```
    logger
      .log(Level.error, 'Oops, error!');
```

- Using log file:

```
logger
  .setFileTransport('./logs.txt')
  .log(Level.error, 'Oops, error!');
```
