// var fibo = [1 ,2];
// for (var i= 2; i<=10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(febo);

function fibonacci(n) {
    var fibo = [1, 2];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return (fibo);
}
var fiboresult = fibonacci(12);
console.log(fiboresult);