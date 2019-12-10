//https://www.hackerrank.com/challenges/electronics-shop/problem


function getMoneySpent(keyboards, drives, b) {
  //keeps track of minimum budget remaining purchases
  let remainingBudget = b;

  //iterates through budget - keyboard price array
  keyboards.map(keyboardPrice => {
    if(b - keyboardPrice >= 0) {
      return b - keyboardPrice;
    }    
  //iterates through our "new" array as well as our drive price array. remainingBudget is used to keep track of the minimum
  }).map(budgetPostKeyboard => {   
    drives.map(drivePrice => {
      if(budgetPostKeyboard - drivePrice < remainingBudget && budgetPostKeyboard - drivePrice >= 0) {
        remainingBudget = budgetPostKeyboard - drivePrice;        
      }
    })
  })  
  //returning the solution or -1 if there are no possible solutions
  if(remainingBudget < b) {
    return b - remainingBudget;
  } else {
    return -1;
  } 
}

console.log(getMoneySpent([3, 1],[5, 2, 8], 10))
//expected 9 -- the max combination of the 2 arrays that is under the budget "b"

/*
Notes:
1. If you cannot purchase one item from EACH array (keyboard and drives) then the response should be -1

Initial Thoughts on Approach:
1. Take the budget, for each array minus out the first number (eventually through to n) and go to second array
2. Minus out each number from the second array, save the minimum value. 
Basically if(budgetNew > result && result >= 0) { budgetNew = result}
*/
