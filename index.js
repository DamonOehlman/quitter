/**
  # quitter

  A simple way to abort from a command-line process when something goes
  wrong. This must exist as another package somewhere, but for the life
  of me I couldn't find it.

  ## Example Usage

  <<< examples/quit.js

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

**/
module.exports = function(opts) {
  var message = (opts || {}).message || 'An error occured, exiting: ';

  return function(next) {
    return function(err) {
      var rest;

      if (err) {
        console.log(message, err);
        return process.exit(1);
      }

      // call next
      if (typeof next == 'function') {
        return next.apply(this, [].slice.call(arguments, 1));
      }
    };
  };
};
