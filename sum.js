function digital_root(n) {
    let sum = 0;
    let numString = n.toString();
    
    for (let i = 0; i < numString.length; i++){
        sum += Number(numString[i])
        // console.log(sum)
    }  

        if (sum < 10){
            // console.log(sum)
            return sum; 
        }
        else if (sum >= 10 && sum <= 99){
            let finalsum = sum.toString();
            
            finalsum = finalsum.split("");
            finalsum = Number(finalsum[0]) + Number(finalsum[1])
            // console.log(finalsum)
            return finalsum 
        }
        else if (sum > 99){
           return digital_root(Number(sum)) 
        }
}

console.log(digital_root(9))
console.log(digital_root(99))
console.log(digital_root(999))

