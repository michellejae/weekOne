const basicData = `./data/Basic_Cupcake.txt`;
const fs = require('fs');
let basicCupcakes = fs.readFileSync(basicData).toString().split("\n")
basicCupcakes.shift()

const { convertToIntegers, yearly, weekly, monthly } = require(`./helpers.js`);
let basicRevenue = [];
let basicYearlyRevenue = [];
let basicWeeklyRevenue = [];
let basicMonthlyRevenue = [];

let basicSold = [];
let basicYearlySold = [];
let basicWeeklySold = [];
let basicMonthlySold = [];

convertToIntegers(basicCupcakes, basicRevenue, 5);
convertToIntegers(basicCupcakes, basicSold, 1);

weekly(basicRevenue, basicWeeklyRevenue);
monthly(basicRevenue, basicMonthlyRevenue);
yearly(basicRevenue, basicYearlyRevenue);

weekly(basicSold, basicWeeklySold);
monthly(basicSold, basicMonthlySold);
yearly(basicSold, basicYearlySold);

module.exports = {
  basicWeeklyRevenue,
  basicWeeklySold,
  basicYearlyRevenue,
  basicYearlySold,
  basicMonthlyRevenue,
  basicMonthlySold
}