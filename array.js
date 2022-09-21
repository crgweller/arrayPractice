var people = ["Alice", "Brandon", "Cindy", "Debbie", "Ernie"];
var ages = [32, 43, 54, 65,76]
var inDenver = [true, false, true, false, true]
console.log(people)
console.log(ages)
console.log(inDenver)
//This will remove the last element ("Ernie") from the array
people.pop()
console.log(people)
//This will remove the first element (32) from the array
ages.shift()
console.log(ages)
//This would add new elements to the end of the array, but I don't have any to add so it won't do anything
inDenver.push()
console.log(inDenver)
//This will call the second index position from the people array (Brandon)
console.log(people[1])
//This will call the third index position from the ages array (65)
console.log(ages[2])
