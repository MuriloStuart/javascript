function tabuada(){
  var num = document.getElementById('txtn')
  var n = Number(num.value)
  var res = document.getElementById('res')
  var c = 1

  res.innerText = ''

  while(c<=10){
    res.innerText += ` 
    ${n} x ${c} = ${n*c} `
    c++

  }
    
}