//var a = prompt('Введите число', "");
//var n = prompt('Введите степень', "");
//var i = 1;
//var result = a;
//while(i < n){
//    result *= a;
//    i++;
//}
//console.log(' Результат = ', result);


/* решение в for */


//var num = a;
//var exp = n;
//
//var result = num;
//for (var i = 1; i > 0; i++);{
//    result *= result;
//}
//console.log('результат =', result);

/* решение функцией */
//var a = prompt('Введите число', "");
//var n = prompt('Введите степень', "");

 var pow = {exponent : function (a, n) {
    var result = a;
    for (var i = 1; i < n; i++)
    {
        result *= a;
    }
    return result;

}};
try {
module.exports = pow;
} catch (e) {}
//console.log('Результат =', exponent(a, n));
