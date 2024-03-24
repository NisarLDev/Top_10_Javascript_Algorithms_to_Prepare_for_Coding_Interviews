//  The teacher's way of doing it


function palindrome(str){
    const reversed = str.split('').reverse().join('')

    if(str === reversed){
        return true
    }

    return false
}