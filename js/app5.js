
let num1 = 3;
let num2 = 5;
document.write('Sum of ' + num1 + ' and ' + num2 + ' is ' + (num1 + num2), '<br/>', 'Subtraction of ' + num2 + ' and ' + num1 + ' is ' + (num2 - num1), '<br/>', 'Multiplication of ' + num1 + ' and ' + num2 + ' is ' + (num1 * num2), '<br/>', 'Division of ' + num1 + ' and ' + num2 + ' is ' + (num1 / num2), '<br/>', 'Modulus of ' + num1 + ' and ' + num2 + ' is ' + (num1 % num2), '<br/>');
document.write('<h4>JS Mathematic Expressions</h4>', '<br/>')
let number;
document.write('Value after variable declaration is ' + number, '<br/>')

number = 5;
document.write('Initial value: ' + number, '<br/>', 'Value after increment is: ' + ++number, '<br/>');
let number1 = number + 7;

document.write('Value after addition is: ' + number1, '<br/>', 'Value after decrement is: ' + --number1, '<br/>', 'The remainder is: ' + (number1 % 3), '<br/>');
let cost = 600;
let ticket = 5;

document.write('<h4>Tickets</h4>', '<br/>', 'Total cost to buy ' + ticket + ' tickets to a movie is ' + cost * ticket + 'PKR', '<br/>');
let table = prompt('Table of');
document.write('<h4>Table</h4>', '<br/>')
document.write('Table of ' + table, '<br/>');

document.write(table + 'x' + 1 + '=' + (table * 1), '<br/>', table + 'x' + 2 + '=' + (table * 2), '<br/>', table + 'x' + 3 + '=' + (table * 3), '<br/>', table + 'x' + 4 + '=' + (table * 4), '<br/>', table + 'x' + 5 + '=' + (table * 5), '<br/>', table + 'x' + 6 + '=' + (table * 6), '<br/>', table + 'x' + 7 + '=' + (table * 7), '<br/>', table + 'x' + 8 + '=' + (table * 8), '<br/>', table + 'x' + 9 + '=' + (table * 9), '<br/>', table + 'x' + 10 + '=' + (table * 10), '<br/>');
let celsius = 25;
let fahrenheit = 70;
document.write('<h4>Temperature</h4>', '<br/>', celsius + '°C ' + 'is ' + ((celsius * 9 / 5) + 32) + ' °F', '<br/>')
document.write(fahrenheit + '°F ' + 'is ' + ((fahrenheit - 32) * 5 / 9) + ' °C', '<br/>');
let priceItem1 = 650;
let quantityItem1 = 3;

let priceItem2 = 100;
let quantityItem2 = 7;
let shippingCharges = 100;

document.write('<h4>Shopping Cart</h4>', '<br/>', 'Price of Item 1 is ' + priceItem1, '<br/>', 'Quantity of Item 1 is ' + quantityItem1, '<br/>', 'Price of Item 2 is ' + priceItem2, '<br/>', 'Quantity of Item 2 is ' + quantityItem2, '<br/>', 'Shipping Charges ' + shippingCharges, '<br/>', '<br/>', 'Total cost of your order is ' + ((priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges), '<br/>');
let totalMarks = 980;
let marksObtained = 804;
document.write('<h4>Mark Sheet</h4>', '<br/>', 'Total Marks ' + totalMarks, '<br/>', 'Marks Obtained ' + marksObtained, '<br/>', 'Percentage ' + (marksObtained / totalMarks * 100) + '%', '<br/>');
let dollars = 10;
let riyals = 25;

document.write('<h4>Currency in PKR</h4>', '<br/>', 'Total Currency in PKR ' + ((riyals * 104.80) + (dollars * 28)), '<br/>')
let num = '5';
document.write('<h4>JS Math Expressions</h4>', '<br/>', ((num + 5) * 10) / 2, '<br/>');
let currentYear = 2024;
let birthYear = 1983;
document.write('<h4>Age Calculator</h4>', '<br/>', 'Current Year: ' + currentYear, '<br/>', 'Birth Year: ' + birthYear, '<br/>', 'Your current age: ' + (currentYear - birthYear), '<br/>');
let radius = 4;

document.write('<h4>Geometrizer</h4>', '<br/>', 'Radius of a circle: ' + radius, '<br/>', 'The Circumference is: ', (2 * 3.142 * radius), '<br/>', 'The Area is: ', (3.142 * radius * radius), '<br/>');
let favSnack = 'Chocolate Chips';

let currentAge = 15;
let maxAge = 65;
let amountOfsnacks = 3;

document.write('<h4>Lifetime Supply Calculator</h4>', '<br/>', 'Favourite Snack: ' + favSnack, '<br/>', 'Current Age: ' + currentAge, '<br/>', 'Maximum Age: ' + maxAge, '<br/>', 'Amount of Snacks per day: ' + amountOfsnacks, '<br/>', 'You will need ' + ((maxAge - currentAge) * amountOfsnacks) +  ' to last you until the ripe old age of ' + maxAge, '<br/>')



