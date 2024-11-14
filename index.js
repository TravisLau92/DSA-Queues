// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

let queue = [5, 10, 15];

// Enqueues an element

queue.push(20);

// Enqueues two more numbers to the queue

queue.push(25);
queue.push(30);

console.log('Queue before dequeue:', queue);

// Remove and returns first element
const result = queue.shift();

console.log('Queue after dequeue:', queue);

console.log('Number removed:', result);
