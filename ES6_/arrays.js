// querySelectorAll() : return  a node list but not an array

// To transform this node list ro normal array  we use the from method of the object Array 

// Array.from(querySelectorAll())

let years = [1900, 2000, 2012, 1400]

for (const year of years) {
    if (year >= 2000) {
        // break
        continue
    }
    console.log(year);
}