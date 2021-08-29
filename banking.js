
 document.getElementById('deposit-button').addEventListener('click',function(){
     const depositFrield=document.getElementById('deposit-frield')
     const depositFrieldValue=depositFrield.value
    
     const depositDisplay=document.getElementById('deposit-display')
     const priveusAmount=depositDisplay.innerText
     const priveusAmountNumer=parseFloat(priveusAmount)
     
     const totalAmount=parseFloat(depositFrieldValue)+parseFloat(priveusAmount)
     depositDisplay.innerHTML=totalAmount
    
     
     //update total balance
     const totalBalance=document.getElementById('total-balance') 
     const totalBalanceText=totalBalance.innerText
     const totalBalanceNumber=parseFloat(totalBalanceText)
     const total=totalBalanceNumber+parseFloat(depositFrieldValue)

     totalBalance.innerText=total

     //clear input
     depositFrield.value=''
 })












