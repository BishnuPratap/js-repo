// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item)
// } )

// coding.forEach ( (item) => {
//          console.log(item); 
// } )

// function printme(item) {
//     console.log(item);
// }
// coding.forEach(printme);

// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
// } )

// const mycoding = [
//         {
//         languagename: "javascript",
//         languagefilename: "js"
//     },
//         {
//         languagename: "java",
//         languagefilename: "java"
//     },
//         {
//         languagename: "python",
//         languagefilename: "py"
//     },
// ]

// mycoding.forEach( (item) => {
//     console.log(item.languagefilename);
// })

// const values = coding.forEach( (item) => {
//    // console.log(item);
//     return item;
// } )

// console.log(values);

// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// FILTER   

// const newnums = mynums.filter((num) => num > 5 )
//         console.log(newnums);


// const newnums = mynums.filter( (num) => {
//     return num > 5;
// })
// console.log(newnums);


// const newnums = []

// mynums.forEach((num) => {
//     if (num > 5) {
//         newnums.push(num)
//     }
// })
// console.log(newnums)

// CHAINING

// const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newnumbers = mynumbers.map( (num) => num + 10)

// const newnumbers = mynumbers.map( (num) => num * 10 + 1) .map( (num) => num + 1 ).filter ( (num) => num >= 54 );

// console.log(newnumbers); 

//REDUCE METHOD

const mynums = [1, 2, 3, 4, 5]

// const mytotal = mynums.reduce(function (accumulator, currentvalue) {
//     return accumulator + currentvalue;
// } , 0 )

// const mytotal = mynums.reduce(function(acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
//  }, 0)

const mytotal = mynums.reduce( (acc,curr) => acc+curr , 0);

// console.log(mytotal);

const shoppingcart = [
    {
        itemname: "js course",
        price: 2999
    },
        {
        itemname: "java course",
        price: 3999
    },
        {
        itemname: "python course",
        price: 4999
    },
        {
        itemname: "WebDev course",
        price: 5999
    },
]

const pricetopay = shoppingcart.reduce( (acc, item) => acc + item.price ,0)
console.log(pricetopay);
