function digitPerkalianMinimum(angka) {
    var angkaArr = []
    var angkaArr2 = []
    
    for( var i=0; i<angka; i++){
        if(angka%i===0){
            angkaArr.push(String(i) + String(angka/i))
        }
    }
    for ( j=0; j <angkaArr.length; j++){
        angkaArr2.push(Number(angkaArr[j]))
    }
    if(angkaArr2.sort(function(a,b){return a-b})[0] === undefined){
        return 2
    } else {
        return String(angkaArr2.sort(function(a,b){return a-b})[0]).length
    }
}
  
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2