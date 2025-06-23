#!/usr/bin/env node

console.log('🔥 Starting heavy computation...');

// CPU-intensive task
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('Computing Fibonacci numbers...');
for (let i = 30; i <= 35; i++) {
  console.log(`fib(${i}) = ${fibonacci(i)}`);
}

// Memory allocation
console.log('Allocating memory...');
const bigArray = new Array(1000000).fill(0).map((_, i) => i * Math.random());
console.log(`Allocated array with ${bigArray.length} elements`);

console.log('✅ Heavy computation completed!');