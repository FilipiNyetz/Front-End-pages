function formatDinheiro(valor){
    value= value.toFixed(2)
    return value + 'R$'
}
function update(){
   let conta = Number(document.getElementById('yourBill').value)
   let gorjeta =  document.getElementById('tipInput').value
   let rachar =document.getElementById('splitInput').value
   console.log(gorjeta)

   let precoGorjeta =conta* (gorjeta/100)
   let total = precoGorjeta + conta
   let precoPessoa =  total/rachar
   
   document.getElementById('tipPercent').innerHTML=gorjeta + '%'
   document.getElementById('tipValue').innerHTML=precoGorjeta +' R$'
   document.getElementById('totalWithTip').innerHTML = total+' R$'
   document.getElementById('splitValue').innerHTML=rachar
   document.getElementById('billEach').innerHTML=precoPessoa +' R$'
}