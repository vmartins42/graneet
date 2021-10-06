const binaryTransform = (n) => {
    if (n === 0) 
        return 0
    return ((n % 2 ) + 10 * binaryTransform(parseInt(n/2)))
}

const onesAndzeros = (n) => {
    if (n <= 0 || n >= Math.pow(2, 32) - 1)
        return `Chiffre donné en dehors des limites autorisées : 0 <= n <= 2^32`
    let binary = binaryTransform(n)
    let countZero = 0
    let totalZero = 0

    while(binary >= 1){
        if (binary %2 === 0){
            countZero ++
        }
        else if (countZero > totalZero){
            totalZero = countZero
            countZero = 0
        }
       
        binary = Math.round(binary /10)
        
    }
    return `${totalZero} car ( ${binaryTransform(n)} en binaire)`
}

console.log(onesAndzeros(123456))
console.log(onesAndzeros(65535))
console.log(onesAndzeros(128))
console.log(onesAndzeros(0))
console.log(onesAndzeros(2056))
console.log(onesAndzeros(4294967296))

