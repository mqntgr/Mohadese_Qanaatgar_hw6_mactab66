function commonCharacters(string1,string2) {
//     if(typeof(string1 !== "string") || typeof(string2 !== "string")){
//         return "Incompatible"
//     }
//    else{
        let counter = 0
        let arr = []
        let str1 = string1.split("")
        let str2 = string2.split("")
        for(let i = 0 ; i<str1.length ; i++){
            const index = str2.indexOf(str1[i])
            if(index !== -1){
                str2.splice(index,1)
                counter++
            }
        }
    // }
    return counter
}
console.log(commonCharacters("aabcc","adcaa"))