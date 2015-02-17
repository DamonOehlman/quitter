# quitter

A simple way to abort from a command-line process when something goes
wrong. This must exist as another package somewhere, but for the life
of me I couldn't find it.


[![NPM](https://nodei.co/npm/quitter.png)](https://nodei.co/npm/quitter/)



## Example Usage

```js
var fs = require('fs');
var quitter = require('quitter')();
var readFile = fs.readFile(__dirname + '/fake.txt', quitter(handleFile));

function handleFile(buffer) {
  console.log('here is the data buffer: ', buffer);
};

```

This would generate the following output when the `fake.txt` file
does not exist:

```
An error occured, exiting:  { [Error: ENOENT, open '/home/doehlman/code/DamonOehlman/quitter/examples/fake.txt']
errno: 34,
code: 'ENOENT',
path: '/home/doehlman/code/DamonOehlman/quitter/examples/fake.txt' }
```

And if it did, this:

```
here is the data buffer:  <Buffer >
```

## License(s)

### ISC

Copyright (c) 2015, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
