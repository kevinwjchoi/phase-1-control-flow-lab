function scuberGreetingForFeet(someFeet){
  if (someFeet <= 400){
    return 'This one is on me!';
  }
  else if (someFeet <= 2000){
    return 'That will be twenty bucks.';
  }
  else if (someFeet <=2500){
    return 'I will gladly take your thirty bucks.';
  }
  else (someFeet >2500) 
    return 'No can do.';
  
}


function ternaryCheckCity(somePlace){
  const city = somePlace === 'NYC' ? 'Ok, sounds good.' : 'No go.'; 
  return city; 
  
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }

}