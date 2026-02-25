const chai = {
    name: 'ginger chai',
    price: 250,
    isavailable: true
};

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", {
//     value: "masala chai",
//     writable: false,
//     enumerable: true,
//     configurable: true
// });

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    enumerable: false
});
    
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== "function"){
    console.log(key, value);
    }
}