document.getElementById("withdraw-submit").addEventListener("click", function () {
  const newWithdrawAmount = getValueFormInputField("withdraw-field");
  const previousWithdraw = getValueFormTextField("withdraw-total");

  const newWithdrawTotal = previousWithdraw + newWithdrawAmount;

  setValueTextElement("withdraw-total", newWithdrawTotal);

  const previousBalance = getValueFormTextField("balance-total");

  const newBalanceTotal = newWithdrawAmount + previousBalance;

  setValueTextElement("balance-total", newBalanceTotal);
});
