# [broccoli](https://github.com/joliss/broccoli)-groundskeeper [![Build Status](https://travis-ci.org/MadMG/broccoli-groundskeeper.svg?branch=master)](https://travis-ci.org/MadMG/broccoli-groundskeeper)
Broccoli plugin for [groundskeeper](https://github.com/Couto/groundskeeper)

## Install

```sh
$ npm install --save broccoli-groundskeeper
```

## Usage
Example options:

```
{
  "processFiles": ['app.js'],
  "console": true,
  "debugger": false,
  "namespace": [
    "logger.debug",
    "logger.info"]
)
```

__processFiles__

Is an array with file names which will be processed. The source path must end with any of the array entries. If the array is empty all files of the source tree will be processed.

See the Groundskeeper [usage](https://github.com/Couto/groundskeeper#usage) for further options.


## License

MIT © [Martin Groller](https://github.com/MadMG)
