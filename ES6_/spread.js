console.log("---Section of the spread operators");

//spread opeartors allow to give a unpack a liste

function ages(a, b, c, d) {
    return a + b + c + d
}

const age = ages(12, 32, 12, 43)

// but if age are in a liste 
//ES5 solution 
agesList = [12, 32, 12, 43]

const age2 = ages.apply(null, agesList)

console.log(age2);

//the es% soluion

const age3 = ages(...agesList)
console.log(age3);