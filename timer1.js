let timers = process.argv.slice(2);

for (let timer of timers) {
  timer = parseInt(timer);
  if ((typeof timer === 'number' && timer > 0)) {
    setTimeout(() => {
      process.stdout.write('.');
    }, timer * 1000);
  }
}