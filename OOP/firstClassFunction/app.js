const years = [1994, 2000,2010,1960,1749]

var arrayCalc = (array, cb) => {
  let retArray = []
  for (year of array) {
    retArray.push(cb(year))
  }
  return retArray
}

var age = (year) => {
  let date = new Date()
  now = date.getFullYear()
  return now - year
}
var isMaj = (age) => {
  return age >= 18
}

ages = arrayCalc(years, age)
console.log(ages)

majArray = arrayCalc(ages, isMaj)
console.log(majArray)


var interviewQuestion = (job) =>{
  if (job =='ingeneer'){
    return (name) => {
      console.log( name +  ' What is ingeneering ? ')
    }
  } else if (job == 'designer') {
      return  (name) => {
        console.log(name + " Please explain as UX design")
      };
    }else {
      return (name) => {
        console.log(name + ' What is your job ');
      }
    }
  }


var ingInterview = interviewQuestion('ingeneer')
ingInterview('Kaire mor ')

var whatEver = interviewQuestion('what')
whatEver('Samba')

interviewQuestion('designer')('Cheikh ')
