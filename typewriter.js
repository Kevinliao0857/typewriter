// const sentence = "hello there from lighthouse labs"

// let output = []
// let words = sentence
// for( i = 0; i < words.length; i++){
//   output += words[i]
// }
// console.log(output)

const sentence = "hello there from lighthouse labs\n";
 
let delayTime = 0
for (const char of sentence) {
  setTimeout(() => {process.stdout.write(char);
  }, delayTime)
  delayTime += 50
}

 




