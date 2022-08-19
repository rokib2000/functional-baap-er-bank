function getValueFormInputField(inputById) {
  const inputElement = document.getElementById(inputById);
  const inputAmountString = inputElement.value;
  const inputAmount = parseFloat(inputAmountString);

  inputElement.value = "";

  return inputAmount;
}

function getValueFormTextField(textById) {
  const textElementValue = document.getElementById(textById);
  const textAmountString = textElementValue.innerText;
  const textAmount = parseFloat(textAmountString);

  return textAmount;
}

function setValueTextElement(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
