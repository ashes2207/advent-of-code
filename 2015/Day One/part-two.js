const input = process.argv.slice(2)[0];
let floor = 0;
let index = 1;

for (let instruction of input) {
    if (instruction === "(") floor++;
    else if (instruction === ")") floor--;
    if (floor < 0) {
        console.log(`Santa will go into the basement at ${index}.`);
        break;
    }
    index++;
}