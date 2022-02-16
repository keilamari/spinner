const spinner = ['\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| '];
let delay = 0;

for (let i of spinner) {
  setTimeout(() => {
    process.stdout.write(i);
  }, delay += 1000);
}