const moneyBack = (arr, amount) => {
    let count = 0;
    let amountLeft = amount;
    let changes = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= amountLeft) {
            amountLeft -= arr[i];
            changes.push(arr[i])
            count +=1
        }
    }
    if (amountLeft != 0) return `-1: (${changes}), impossible de faire le reste => ${amountLeft}`
    return `${count}: (${changes})`
}

// euros
console.log('Résultat: '+moneyBack([500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01], 626.5), 'Réponse: '+6 + ': (500 + 100 + 20 + 5 + 1 + 0.5)')
console.log('Résultat: '+moneyBack([500, 200, 100, 50, 20, 10, 5], 626.5), 'Réponse: '+ -1 +': (500 + 100 + 20 + 5, mais impossible de faire le reste)')