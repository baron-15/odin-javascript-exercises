const ftoc = function(finput) {
let coutput = (finput-32)/1.8;
coutput = +(Math.round(coutput + "e+1")  + "e-1");
return coutput;
};

const ctof = function(cinput) {
  let foutput = 1.8*cinput + 32;
  foutput = +(Math.round(foutput + "e+1")  + "e-1");
  return foutput;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
