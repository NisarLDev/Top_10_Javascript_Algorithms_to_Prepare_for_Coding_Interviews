// ----- Directions
// Given a string, return a new string with the reversed ordeer of characters
// ----- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'


// Old JavaScript Sintax
function reverse(str) {
  let reversed = '';

  for(let i=0; i<str.lenght; i++){
    reversed = str[i] + reversed;
  }
  return reversed;
}

console.log(reverse('JavaScript'));

///////////////////////////////////////
///////////////////////////////////////

// New JavaScript Sintax

function reverse(str) {
  let reversed = '';

  for(let char of str){
    reversed = char + reversed;
  }
  return reversed;
}

console.log(reverse('JavaScript'));


