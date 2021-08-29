
 document.getElementById('deposit-button').addEventListener('click',function(){
     document.body.style.backgroundColor='salmon'
     document.body.style.color='green'
     const depositFrield=document.getElementById('deposit-frield')
     const depositFrieldValue=depositFrield.value
    
     // deposit total
     const depositDisplay=document.getElementById('deposit-display')
     const priveusAmount=depositDisplay.innerText
    
     
     const totalAmount=parseFloat(depositFrieldValue)+parseFloat(priveusAmount)
     depositDisplay.innerHTML=totalAmount
      
     //update total balance
     const totalBalances=document.getElementById('final-balance') 
     const totalBalanceText=totalBalances.innerText
     const totalBalanceNumber=parseFloat(totalBalanceText)
     const total=totalBalanceNumber+parseFloat(depositFrieldValue)

     totalBalances.innerText=total

     //clear input
     depositFrield.value=''
 })


 // withdraw- event-handler-button
  document.getElementById('withdraw-button').addEventListener('click',function(){
      document.body.style.backgroundColor='red'
      document.body.style.color='white'
      const withdrawFrield= document.getElementById('withdraw-frield')
      const withdrawFrieldValue=withdrawFrield.value
      const currentWithdrawFrieldNumber=parseFloat(withdrawFrieldValue)

      //withdraw total
      const withdrawDisplay=document.getElementById('withdraw-display')
      const withdrawDisplayInnerText=withdrawDisplay.innerText
      const prevuseWithdrawDisplayNumber=parseFloat(withdrawDisplayInnerText)
      const totalWithdraw=currentWithdrawFrieldNumber+prevuseWithdrawDisplayNumber

      withdrawDisplay.innerText=totalWithdraw
      
      // update balance
      const finalBalace=document.getElementById('final-balance')
      const finalBalaceInnerText=finalBalace.innerText
      const finalBalaceNumber=parseFloat(finalBalaceInnerText)
      const finalTotalBalance=finalBalaceNumber-currentWithdrawFrieldNumber
      finalBalace.innerText=finalTotalBalance
      //clear input
      withdrawFrield.value=''
  })




/*
 document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawFrield=document.getElementById('withdraw-frield')
    const withdrawFrieldValue=withdrawFrield.value
    const presentWithdrawFrieldNumber=parseFloat(withdrawFrieldValue)
    
    // withdraw total
    const withdrawDisplay=document.getElementById('withdraw-display')
    const prevusWithdrawDisplayValue=withdrawDisplay.innerText
    const prevusWithdrawDisplayNumber=parseFloat(prevusWithdrawDisplayValue) 
    const withdrawTotal=prevusWithdrawDisplayNumber+presentWithdrawFrieldNumber
    withdrawDisplay.innerText=withdrawTotal

    // clear input frield
    withdrawFrield.value=''
 }) */












