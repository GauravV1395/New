
var numbers = [10,20,30,23,33,43];

function find(numbers){
    var result = [];
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            result.push(numbers[i]);
        }
    }return result;
}console.log(find(numbers));
