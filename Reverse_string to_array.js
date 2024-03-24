function reverse(str){
  const strToArray = str.split('')

  strToArray.reverse()
  return strToArray.join('')
}

// Same function but short coding

function reverse(str){
  return str.split('').reverse().join('')
}