const ftoc = function(x) {
  return Math.round(((x-32)*(5/9))*10)/10;
}

const ctof = function(x) {
  return Math.round(((x*(9/5))+32)*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
