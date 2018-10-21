# Node log

### Getting started:

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
  .error('Oops, error!');
```

- Using log file:

```
logger
  .setFileTransport('./logs.txt')
  .error('Oops, error!');
```

### Nolo methods

```
logger
    .emerg('Emergency message')
    .crit('Critical message')
    .error('Error message')
    .warning('Warning message')
    .notice('Notice message')
    .info('Info message')
    .debug('Debug message');
```

Output:

![nolo output](https://image.ibb.co/ioMirL/2018-10-21-13-42-27.png)
