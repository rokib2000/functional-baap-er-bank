document.getElementById("deposit-submit").addEventListener("click", function () {
  const newDepositAmount = getValueFormInputField("deposit-field");
  const previousDeposit = getValueFormTextField("deposit-total");

  const newDepositTotal = previousDeposit + newDepositAmount;

  setValueTextElement("deposit-total", newDepositTotal);

  const previousBalance = getValueFormTextField("balance-total");

  const newBalanceTotal = newDepositAmount + previousBalance;

  setValueTextElement("balance-total", newBalanceTotal);
});
