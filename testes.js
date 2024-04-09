let num = [5,8,9,3,100]
num.sort ((a, b) => a - b)


// for(let pos =0; pos < num.length;pos++){
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

for (let pos in num){
    console.log(num[pos])
}