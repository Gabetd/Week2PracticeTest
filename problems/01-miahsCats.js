/***********************************************************************
Write a FAT ARROW function `miahsCats(obj)` that takes an object, containing
extremely important information about Miah's cats as an argument
and returns an integer representing how many keys and values
in the input object containing the string "cute" or "adorable".

****NOTE: You should account for upper and lowercase letters!****
Checkout MDN documentation on how to solve this issue.


Examples:

obj1 = {"Finn": "Smart lil boy, maximum cuTe", "Jake": "Not a dog, still cUte"}
miahsCats(obj2) // 2

obj2 = {"CuteFace": "Has an adoRable face, loves snuggles", "Baby": "Very chonky lady, adorable fluffy face"}
miahsCats(obj3) // 3

obj3 = {"Princess": "So much sass, cute AND fluffy", "adorable-boy": "Cute and funny"}
miahsCats(obj1) // 3



***********************************************************************/

// let miahsCats = (obj) => {
// let count = 0;
// let arr = []
// Object.keys(obj).map((key) => {
//     arr.push(key.toLowerCase().split(" "))
//     // return key
// })
// Object.values(obj).map((val) => {
//     arr.push(val.toLowerCase().split(" "))
//     // return val
// })
// console.log(arr)
// if(arr.includes('cute') || arr.includes('adorable')){
//             count++
//             }
//         console.log(count)
//         return count

// }







let miahsCats = (obj) => {
let count = 0;
let arr = []
let arr2 = []
arr.push(...Object.values(obj), ...Object.keys(obj))

for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toLowerCase()
    arr[i] = arr[i].split(' ')
    arr2.push(...arr[i])
    }

    console.log(arr2)
    for(let i = 0; i < arr2.length; i++){
    if(arr2[i].includes('cute') || arr2[i].includes('adorable')){
        count++
        }
    }
    console.log(count)
    return count
}
obj1 = {"Finn": "Smart lil boy, maximum cuTe", "Jake": "Not a dog, still cUte"}
miahsCats(obj1) // 2

obj2 = {"CuteFace": "Has an adoRable face, loves snuggles", "Baby": "Very chonky lady, adorable fluffy face"}
miahsCats(obj2) // 3

obj3 = {"Princess": "So much sass, cute AND fluffy", "adorable-boy": "Cute and funny"}
miahsCats(obj3) // 3
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
    module.exports = miahsCats;
} catch(e) {
    module.exports = null;
}
