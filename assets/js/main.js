function getWarmUpData(weight){
  var percentages = [.50, .60, .70, .80, .90, 1.10];
  var i = 0;
  var percentForSet = Array();
  var weightForSet = Array();
  percentages.forEach(function(percentage){
    percentForSet[i] = round5(Math.floor(weight * percentage));
    document.getElementById("load" + i).innerText = percentForSet[i];

    weightForSet[i] = calculateWeight(percentForSet[i]);
    document.getElementById("weight" + i).innerText = weightForSet[i];
    i++;
  });
}

function round5(x){
  num = Math.ceil(x / 5) * 5; //We round to the nearest 5 because we are using this for weights.
  if(num < 45) {
    num = 45; //This is the weight of the bar and thus cannot be changed
  }
  return num;
}

function calculateWeight(amount){
  var weights = [45, 35, 25, 10, 5, 2.5];
  amount = (amount - 45) / 2;
  var weight = [];
  while (amount > 0) {
      weights.forEach(function(entry) {
        if(entry <= amount){
          do {
          weight.push(entry);
          amount -= entry;
          }
          while(entry <= amount);
        }
      });
  }
  return weight;
}
