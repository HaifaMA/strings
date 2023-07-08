let text = 'I am a good programmer';
console.log(typeof text);

console.log(text.length);

console.log(text.toUpperCase());

console.log(text.toLocaleLowerCase());

console.log(text.includes('good'));

console.log(text.length);


let wordToStrip = "programmer";
console.log(wordToStrip.replace(' '));

console.log(text.endsWith('programmer'));

let [section1, section2] = text.split('good');
console.log(section1);
console.log(section2);

