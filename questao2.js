const formulaBhaskara = (ax2, bx, c) => {
    let delta = (bx ** 2) - (4 * ax2 * c)
    let result = []
    if (delta < 0) {
       return 'Delta é negativo'
    }
    let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2
    let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2
    result.push(x1)
    result.push(x2)
    return result
}

console.log(formulaBhaskara (3,-5,12))
console.log(formulaBhaskara (2,4,-6))
