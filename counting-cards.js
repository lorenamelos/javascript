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
