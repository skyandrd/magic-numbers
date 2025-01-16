const nicomachus = (n) => {
    let n3, n2
    for (i = 1; i <= n; i ++) {
        n3 += Math.pow(i, 3)
        n2 += i
    }
    n2 = Math.pow(n2, 2)

    return [n3, n2]
}


module.exports = {
    nicomachus,
}