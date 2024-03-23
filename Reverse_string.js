// ----- Directions
// Given a string, return a new string with the reversed ordeer of characters
// ----- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'

function reverse(str) {
  let reversed = '';

  for(let i=0; i<str.lenght; i++){
    reversed = str[i] + reversed
  }
  return reversed;
}

console.log(reverse('JavaScript'));
