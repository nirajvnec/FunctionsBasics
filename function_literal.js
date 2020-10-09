var add = function(num1, num2){
 var sum = num1 + num2
 console.log(this);
 console.log(sum);
}(1,2);