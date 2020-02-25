module.exports = function toReadable (number) {
  let resultStr = [];
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let twentyNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if(number == 0){
    return 'zero';
  } 
  if(number >= 100) {
    resultStr.push(units[Math.floor(number / 100)]);
    resultStr.push('hundred');
    number = number % 100;
  }
  if (number >= 20) {
    resultStr.push(twentyNinety[Math.floor(number / 10) - 2]);
    number = number % 10;
  }
  if (number >= 10) {
    resultStr.push(tens[(number % 10)]);
    number = 0;
  }
  if (number > 0){
    resultStr.push(units[number]);
  }
  return resultStr.join(' ');
}
