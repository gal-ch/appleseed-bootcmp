var a = 1;
while (a < 100){
    a += 1;
    
}
console.log(a);

for (var i = 0; i < 101; i++){
  var a = i;
}
console.log(a);



function reverse(str){
    let reversed = "";
    for(let char of str){
      reversed = char + reversed;
      console.log(reversed);
    }
  }


reverse('r');
reverse('la');
reverse("boom")