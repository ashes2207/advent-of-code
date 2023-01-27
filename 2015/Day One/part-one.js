const input = process.argv.slice(2)[0];
let floor = 0;

for (let instruction of input) {
    if (instruction === "(") floor++;
    else if (instruction === ")") floor--;
}

console.log(`These instructions will take Santa to floor ${floor}.`);