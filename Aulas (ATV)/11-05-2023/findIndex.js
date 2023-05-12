let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
function multipleof13(element, index, array){
return (element % 13 == 0)
}
console.log(numbers.find(multipleof13))

//arrow function
const array1 = [5, 12, 8, 130, 44]
const found = array1.find(element => element > 10)
console.log(found)