const deluxeData = `./data/Deluxe_Cupcake.txt`;
const fs = require('fs');
let deluxeCupcakes = fs.readFileSync(deluxeData).toString().split("\n");
deluxeCupcakes.shift()

const { convertToIntegers, yearly, weekly, monthly } = require(`./helpers.js`);
let deluxeRevenue = [];
let deluxeYearlyRevenue = [];
let deluxeWeeklyRevenue = [];
let deluxeMonthlyRevenue = [];

let deluxeSold = [];
let deluxeYearlySold = [];
let deluxeWeeklySold = [];
let deluxeMonthlySold = [];

convertToIntegers(deluxeCupcakes, deluxeRevenue, 6);
convertToIntegers(deluxeCupcakes, deluxeSold, 1)

weekly(deluxeRevenue, deluxeWeeklyRevenue);
monthly(deluxeRevenue, deluxeMonthlyRevenue);
yearly(deluxeRevenue, deluxeYearlyRevenue);

weekly(deluxeSold, deluxeWeeklySold);
monthly(deluxeSold, deluxeMonthlySold);
yearly(deluxeSold, deluxeYearlySold);
