function urutkanAbjad(str) {
    var newArry = []
    var string = ""
    
    for (i= 0 ; i< str.length ; i++){
        newArry.push(str[i])
    }
    var newArry1= newArry.sort()
    for (i = 0 ; i <newArry1.length ; i ++){
        string+= newArry1[i]
    }
    return string
}
  
  
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'