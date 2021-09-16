function difference(par1,par2){
    return par1-par2;
  }
    difference(2,2); 
    difference(0,2); 


function product(prod1,prod2){
    return prod1*prod2;
  }
  product(2,2); 
  product(0,2); 

  
  
  function lastElement(array){
    return array[array.length-1];
  }
  printDay(4); 
  printDay(41); 
  
 
  function numberCompare(num1,num2){
    if(num1 > num2){
      return 'First is greater';
    } else if (num2 > num1){
    return 'Second is greater';
   } 
    return 'Numbers are equal';
    }


  function singleLetterCount(word, lettr){
    let Count = 0;
    for(let i=0; i< word.length; i++){
      if(word[i].toLowerCase() === lettr.toLowerCase()){
        Count++;
      }
    }
    return Count;
  }
  

  //Part 2

  function multipleLetterCount(greetings){
    let greetingObject = {};
    for(let i =0; i< str.length; i++){
      if (!(str[i] in greetingObject)){
        greetingObject[str[i]] = 1;
      } else {
        greetingObject[str[i]]++;
      }
    }
    return greetingObject;
  }
    multipleLetterCount("hello"); 
    multipleLetterCount("person");
  

  function arrayManipulation(arr, command, location, value){
    if(command === 'remove'){
      if(location === 'end'){
        return arr.pop();
      }
        return arr.shift();
    }
    else if(command === 'remove'){
      if(locaion === 'begining'){
        arr.push(value)
        return arr;
      }
      arr.unshift(val)
      return arr;
    }
  }

  arrayManipulation([1,2,3], "remove", "end"); 
arrayManipulation([1,2,3], "remove", "beginning"); 
arrayManipulation([1,2,3], "add", "beginning", 20); 
arrayManipulation([1,2,3], "add", "end", 30);


  

    //Part 3

  function game(){
  
    function Computer(number1){
      if(number1 <= 0.55) return "rock";
      else if(number1 <= 0.81) return "paper";
      return "scissor";
    }
  
    let userInput = prompt("Kindly select either rock , paper or scissor").toLowerCase();
    let computerInput = Computer(Math.random());
  
  
    let mainAnswers = ["rock", "paper", "scissor"];
  
    if(!userInput || mainAnswers.indexOf(userInput) === -1)
      return "Kindly select a valid option";
    }
  
    if(userInput === computerInput) return " Ohh it a Tie!";
  
    if(userInput  === "rock" && computerInput === "paper") return "Uhnn you lose, computer picked " +  computerInput + " Try Again";
    if(userInput  === "paper" && computerInput === "scissor") return " Uhn You lose, computer picked " +  computerInput + " Try Again";
    if(userInput === "scissor" && computerInput === "rock") return "You lose, computer picked " +  computerInput + " Try Again";
  
    return "Hurray!!! You win! Computer picked " +  computerInput;
  }
}





