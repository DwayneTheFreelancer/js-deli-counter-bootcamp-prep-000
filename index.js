var katzDeliLine = [];

function takeANumber(num, name) {
  if(num.length >= 0) {
    katzDeliLine.push(name);
  }
  return `Welcome, ${name}. You are number ${num} in line.`;
}