process.stdin.setEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data}`);
});
process.stdin.on('end', () => {
  console.log('This important software is now closing\n');
  process.exit();
});
