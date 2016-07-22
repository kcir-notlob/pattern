
if(process.argv.length<3){
  console.log("expected power of 2 to use");
  return;
}

p=parseInt(process.argv[2]);

if(isNaN(p)){
  console.log("power of two must be a number");
  return;
}
n=Math.pow(2,p)
totalA=0;
totalB=0;


for(i=0;i<n;i++){
  var r="";

  s=i.toString(2);
  while(s.length!=p){
    s='0' + s;
  }

  aT=s.match(/011/g);
  bT=s.match(/010/g);

  if(aT != null){
    totalA+=aT.length;
  }

  if(bT != null){
    totalB+=bT.length
  }

  //console.log(s + " " + totalA + " " + totalB);

}
console.log("011 is " + totalA);
console.log("010 is " + totalB);
console.log("%A:" + totalA/(totalA + totalB));
console.log("%B:" + totalB/(totalA + totalB));
