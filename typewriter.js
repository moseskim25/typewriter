const sentence = "hello there from lighthouse labs";

let x = 0;
for (const char of sentence + '\n') {
  setTimeout(() => {
    process.stdout.write(char);
  }, 50 * x);
  x++;
}