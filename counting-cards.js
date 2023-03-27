// CUNTING CARS - CASSINO GAME //

/* 

In the casino game Blackjack, a player can determine whether they have an 
advantage on the next hand over the house by keeping track of the relative 
number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. 
Each card is assigned a value according to the table below. When the count is positive, 
the player should bet high. When the count is zero or negative, the player should bet low. 

CountChange	    Cards
+1	            2, 3, 4, 5, 6
0	              7, 8, 9
-1	            10, 'J', 'Q', 'K', 'A'

*/

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break
  }
  
  // comparing the count to see if should bet or hold:

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  
  
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc('K')) // output = -1 Hold
