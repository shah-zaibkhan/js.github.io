const pricePerGram = 1200;

const weight = (prompt("Enter the weight of chicken in grams:"));
const weightInKg = weight / 1000;
const totalPrice = weightInKg * pricePerGram;

document.write(`You have to pay ${totalPrice} rupees for ${weight} grams of chicken.`);