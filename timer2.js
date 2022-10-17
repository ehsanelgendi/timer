process.stdout.write('press p to get a beep right away or enter any number between 1 and 9 to set a timer with this value \n');

process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('data', key => {
  if (key === 'b') {
    //process.stdout.write('\x07'); //beep is not working
    process.stdout.write('.');
  }
  if (key >= 1 && key <= 9) {
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('.');
    }, key * 1000);
  }
  if (key === '\u0003') {
    process.stdout.write("\nThanks for using me, ciao! \n");
    process.exit();
  }
});