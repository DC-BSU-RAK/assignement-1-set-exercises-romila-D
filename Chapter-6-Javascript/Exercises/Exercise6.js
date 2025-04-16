
const petrolPriceInput = document.getElementById('petrol-price');
const litersPurchasedInput = document.getElementById('liters-purchased');
const calculateBtn = document.getElementById('calculate-btn');
const totalPriceElement = document.getElementById('total-price');


calculateBtn.addEventListener('click', calculateTotalPrice);


function calculateTotalPrice() {

  const petrolPrice = parseFloat(petrolPriceInput.value);
  const litersPurchased = parseFloat(litersPurchasedInput.value);


  const totalPrice = petrolPrice * litersPurchased;


  totalPriceElement.textContent = `Total Price: ${totalPrice.toFixed(2)} AED`;
}