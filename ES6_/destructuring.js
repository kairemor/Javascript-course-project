console.log("----This is the desctructuring part");

let [fName, lName] = ['kaire', 'mor']
console.log(fName, lName);
let obj = {
    fname: 'kaire',
    lname: 'mor',
}

let {
    fname,
    lname
} = obj;
console.log(fname, lname);
const {
    fname: c,
    lname: d
} = obj
console.log(c, d);

const ageReti = year => {
    let age = 2019 - year
    return [age, 65 - age]
}

let [age1, reti] = ageReti(1990)
console.log(age1, reti)