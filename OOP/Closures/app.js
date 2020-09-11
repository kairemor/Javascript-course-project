function retirement(retirementAge) {
    let a = ' Years letf to retirement'
    return function (year) {
        let date = new Date()
        let left = retirementAge - (date.getFullYear() - year)
        console.log(left + a)
    }
}

var retireSenegal = retirement(65)
retireSenegal(1996)

function interviewQuestion1(job) {
    let a = ''
    if (job == 'designer') {
        a = ' What is UX designe'
    } else if (job == 'ingeneer') {
        a = ' What is ingeneering'
    } else {
        a = ' What is your job '
    }
    return function (name) {
        console.log(name + a)
    }
}

function interviewQuestion2(job) {
    return function (name) {
        let a = ''
        if (job == 'designer') {
            a = ' What is UX designe'
        } else if (job == 'ingeneer') {
            a = ' What is ingeneering'
        } else {
            a = ' What is your job '
        }
        console.log(name + a)
    }
}
interviewQuestion1('designer')('kairemor')
interviewQuestion2('ingeneer')('cheikh')