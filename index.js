

function remainder(a, b){
  let result;
  let sortTheArguments=[a,b]
  sortTheArguments.sort(function(c, d){return d - c});
  result=sortTheArguments[0]%sortTheArguments[1];
  document.querySelector("#result").innerHTML=`The result is: ${result}`;
}

//example
remainder(5,5);

