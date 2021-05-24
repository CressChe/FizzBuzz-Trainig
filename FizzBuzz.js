for (let i = 1 ; i < 1001 ; i++)
let newArr = []
if (i % 3 == 0) {
    newArr.push('Fizz');
} 
if (i % 13 == 0) {
    newArr.push('Fezz')
}
if (i % 5 == 0) {
    newArr.push('Buzz');
}
if (i % 7 == 0) {
    newArr.push('Bang');
}
if (i % 11 == 0) { 
    newArr.push('Bong');
}
if (i % 17 == 0) {
    newArr.reverse()
}
if (newArr.length == 0) {
    console.log(i);
}
else if (i % 13 == 0 && i % 11 == 0) {
    console.log('FezzBong');
}
else if (i % 11 == 0) {
    console.log('Bong');
}
else {console.log(newArr.join(''));
}
