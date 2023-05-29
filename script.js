// complete the given function

function palindrome(str){
let string = str.split(" ").join("")
    let i=0,e=string.length-1;
    console.log(i,e)
    while(i<e){
       
        if(string[i]!=string[e]){
            return false;
        }
        i++;
        e--;
    }
    return true;
}
module.exports = palindrome
