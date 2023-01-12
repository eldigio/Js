// 275 - 40 - 730
// tax = income * percentage / 100
// €50 - €300 => 5% | 10%
const income = 275;
const taxAmount = income >= 50 && income <= 300 ? income * 0.05 : income * 0.1;

console.log(`Income: ${income}`);
console.log(`Tax Amount: ${taxAmount}`);
console.log(`Total: ${income - taxAmount}`);
