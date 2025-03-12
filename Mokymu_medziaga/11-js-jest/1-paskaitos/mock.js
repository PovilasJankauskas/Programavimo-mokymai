function greet(firstName, lastName) {
  return 'Labas, ' + this.getFullName(firstName, lastName);
}   
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function countPrice(number, taxRate) {
    return this.getPrice(number)*taxRate;    
}
function getPrice(number) {
    return price[number];
}
module.exports = { greet, getFullName, countPrice, getPrice };