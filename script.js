function binarySearch(){
  var ans = Math.floor(Math.random() * 100);
  var guess;
  var numGuesses = 0;
  var place = "";
  while(guess != ans){
    guess = prompt("Guess a number from 1-100, " + place);
    if(guess == ans){
      numGuesses++;
      console.log(guess);
      console.log("Correct! It took you " + numGuesses + " tries to find the number");
      return "balls";
    }
    if(guess < ans){
      numGuesses++;
      console.log(guess);
      console.log("higher");
      place = "higher";
    }
    if(guess > ans){
      numGuesses++;
      console.log(guess);
      console.log("lower");
      place = "lower";
    }
  }
}

// binarySearch();

function selectionSort(array){
  var smallest;
  var temp;
  for(var i = 0; i < array.length; i++){
    smallest = i;
    for(var j = i+1; j < array.length; j++){
      if(array[j] < array[smallest]){
        smallest = j;
      }
    }
    temp = array[i];
    array[i] = array[smallest];
    array[smallest] = temp;
  }
  console.log(array);
}
// var array = [1,8,12,6,5];
// selectionSort(array);

function bubbleSort(array){
  var biggy;
  var temp;
  for(var i = 0; i < array.length; i++){
    biggy = i;
    if(array[i] > array[i+1]){
      temp = array[i+1];
      array[i+1] = array[biggy];
      array[biggy] = temp;
    }
  }
  console.log(array);
}

var array = [4,5,1,8,7,9,3];
bubbleSort(array);
