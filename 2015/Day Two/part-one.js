let input = process.argv.slice(2)[0].split("\n");
let parsedInput = [];
for (let i = 0; i < input.length; i++) {
    const splitInput = input[i].split('x');
    parsedInput.push({ length: splitInput[0], width: splitInput[1], height: splitInput[2] });
}

let totalWrappingPaper = 0;

for (let box of parsedInput) {
    const lengthByWidth = 2 * box.length * box.width;
    const widthByHeight = 2 * box.width * box.height;
    const heightByLength = 2 * box.height * box.length;
    const smallestSide = Math.min(lengthByWidth, widthByHeight, heightByLength) / 2;
    const wrappingPaper = lengthByWidth + widthByHeight + heightByLength + smallestSide;
    totalWrappingPaper += wrappingPaper;
}

console.log(`The elves will need to order ${totalWrappingPaper} feet of wrapping paper.`);