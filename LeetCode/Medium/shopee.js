
// parseInt
function stringToNumber(str,base){
    // TODO
    let currSum = 0;
    let exp = 0;
    
    
    if(base <= 10) {
        for(let i=str.length-1; i>=0; i--) {
        currSum += +str[i] * Math.pow(base, exp)
        exp += 1;
        }
    } else {
        
        for(let i=str.length-1; i>=0; i--) {
            
            
            let asc = str[i].charCodeAt();
            
            if(asc > 47 && asc < 58) currSum += (asc - 48) * Math.pow(base, exp);
            else if (asc > 96 && asc < 123) currSum += (asc - 87) * Math.pow(base,exp);
            
            exp += 1;
        }    
        
    }    
    
    return currSum;
    
    
    
    
        

    
      
}

console.log(stringToNumber("10", 2)) // 2
console.log(stringToNumber("10", 5)) // 5
console.log(stringToNumber("10", 8)) // 8
console.log(stringToNumber("10", 10)) // 10
console.log(stringToNumber("1abc0", 16)) // 109504 
console.log(stringToNumber("1", 16)) // 1
console.log(stringToNumber("a", 16)) // 10  97
console.log(stringToNumber("b", 16)) // 11  98
console.log(stringToNumber("c", 16)) // 12  99


