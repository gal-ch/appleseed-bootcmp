function getLenghtOfStrings(myarr){
    var n_arr = [];
    n_arr,length = myarr.length;
    var x;
    for (var i=0; i<myarr.length;i++)
    {
       x =  str(myarr.pop());   
       n_arr[i] = String.length(x);
       var x = 0;
    }
    console.log(n_arr);
    return n_arr;
}
getLenghtOfStrings(["one", "two", "three"])