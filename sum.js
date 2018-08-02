function sum(arr1,arr2){
    var result = [];
    if(arr1.length > arr2.length){
        length = arr2.length;
    }else{
        length = arr1.length;
    }
    for(var i = 0; i < length; i++){
        b = arr1[i]+arr2[i];
        result.push(b);
    }
    if(arr1.length > arr2.length){
        a = arr1.slice(arr2.length);
        a.forEach(function(n){
            result.push(n);
        });
        
    }else{
        a = arr2.slice(arr1.length);
        a.forEach(function(n){
            result.push(n);
        });
    }
    return result;
}
console.log(sum([1,0,2,3,4],[3,5,6,7,8,13]));