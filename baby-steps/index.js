var arr = process.argv.slice(2, process.argv.length);
var sum = 0;
arr.forEach(function (value) {
    sum += +value;
});
console.log(sum);


// var result = 0
//
// for (var i = 2; i < process.argv.length; i++) {
//     result += Number(process.argv[i])
// }
//
// console.log(result)