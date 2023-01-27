let input = process.argv.slice(2)[0].split("\n");
const parsedInput = [];
for (let i = 0; i < input.length; i++) {
    const splitInput = input[i].split('x');
    parsedInput.push({ length: splitInput[0], width: splitInput[1], height: splitInput[2] });
}

let totalRibbon = 0;

for (let box of parsedInput) {
    const shortestSides = [box.length, box.width, box.height].sort((a, b) => { return a - b }).slice(0, -1);
    const perimeter = shortestSides[0] * 2 + shortestSides[1] * 2;
    const bow = box.length * box.width * box.height;
    const ribbon = bow + perimeter;
    totalRibbon += ribbon;
}

console.log(`The elves will need to order ${totalRibbon} feet of ribbon.`);