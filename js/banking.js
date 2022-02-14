//handle deposit
document.getElementById('deposit-btn').addEventListener('click',function(){
  const input= document.getElementById('deposit-input');
  const amountText=input.value;
  const amount=parseFloat(amountText)


  const deposit=document.getElementById('deposit-total');
  const previousDepositText=deposit.innerText;
  const previousDepositAmount=parseFloat(previousDepositText);
  const newDepositTotal=(previousDepositAmount+amount);

  deposit.innerText=newDepositTotal;

  input.value='';

  //account balance

const balanceTotal=document.getElementById('balance-total');
 const balanceTotalText=balanceTotal.innerText;
 const previousBalaceTotal=parseFloat(balanceTotalText);
 const newBalanceTotal=previousBalaceTotal+amount;
 balanceTotal.innerText=newBalanceTotal;

 })
//  handle withdraw
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawAmountText=withdrawInput.value;
    const newWithdrawAmount=parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    
    const withdrawTotal=document.getElementById('withdraw-total');
    const previousWithdrawText=withdrawTotal.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawText);

    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal;

    withdrawInput.value='';

//  update balance 
  const balanceTotal=document.getElementById('balance-total');
  const previousBalaceText=balanceTotal.innerText;
  const previousBalanceTotal=parseFloat(previousBalaceText);
  const newBalance=previousBalanceTotal-newWithdrawAmount;
  balanceTotal.innerText=newBalance;

})