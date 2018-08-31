var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  if(katzDeliLine.length >= 0) {
    katzDeliLine.push(name);
  }
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(lineNum) {
    if(lineNum.length == 0) {
      return "The line is currently empty."
    } else {
      var line_list = ``;
      for (var i = 0; i < lineNum.length; i++) {
        if(i != line.length -1) {
          line_list += `${i+1}. ${line[i]}, `;
        } else {
          line_list += `${i+1}. ${line[i]}`;
        }
      }
      return `The line is currently: ${line_list}`;
    }
}