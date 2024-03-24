//  The teacher's way of doing it


function palindrome(str){
    const reversed = str.split('').reverse().join('')

    if(str === reversed){
        return true
    }

    return false
}

console.log(palindrome('kayak'));


//  My way of doing it

function palindrome(str){
    const reversed = str.split('').reverse().join('')

    if(str === reversed){
        return true
    } else
        return false
}

console.log(palindrome('kayak'));