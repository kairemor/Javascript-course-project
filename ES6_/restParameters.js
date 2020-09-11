function full(limit, ...ages) {
    ages.forEach(age => {
        console.log(age >= limit);
    })
}

full(12, 12, 32, 12, 32, 12, 3, 42)


lages = [12, 42, 1, 32]

full(14, ...lages)