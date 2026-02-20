// for in `

const myobject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift:'swift by apple'
}

for (const key in myobject) {
    console.log(key)
}

for (const key in myobject){
    console.log(myobject[key]);
}

// for (const key in myobject) {
//     console.log(`${key} means ${myobject}`)
// }

for (const key in myobject) {
    console.log(`${key} means ${myobject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming) {
    console.log(programming[key]);
}

// const map = new Map() 

// map.set('IN', 'India')
// map.set('USA', 'United States of America')
// map.set('Fr', 'France')

// for (const key in map) {
//     console.log(key);
// }

