const sentence = "hello there from lighthouse labs\n";
 
let delayTime = 0
for (const char of sentence) {
  setTimeout(() => {process.stdout.write(char);
  }, delayTime)
  delayTime += 50
}

 




