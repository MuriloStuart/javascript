function verificar(){
    let num1 = parseFloat(document.getElementById('txtn1').value)
    let num2 = parseFloat(document.getElementById('txtn2').value)
    let ope = document.getElementById('txtt').value;
    let res = document.getElementById('res')
    if (isNaN (num1) || isNaN(num2) || ope === ''){
        alert('Prencha todas as caixas!!!')
    }else{
        if(ope === '+'){
            res.innerHTML = `A soma entre ${num1} e ${num2} é ${num1 + num2}`
        } else if(ope === '-'){

            res.innerHTML = `A subtração entre ${num1} e ${num2} é ${num1 - num2}`;
        }
    }
}