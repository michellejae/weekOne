const totalData = `./data/Total.txt`;
const fs = require('fs');
let totalCupcakes = fs.readFileSync(totalData).toString().split("\n");
totalCupcakes.shift()

const { convertToIntegers, yearly, weekly, monthly, totalRevenue}  = require(`./helpers.js`);
const basicWeeklyRevenue = require(`./basic`).basicWeeklyRevenue
const basicMonthlyRevenue = require(`./basic`).basicMonthlyRevenue
const basicYearlyRevenue = require(`./basic`).basicYearlyRevenue
const deluxeWeeklyRevenue = require(`./deluxe`).deluxeWeeklyRevenue
const deluxeMontlyRevenue = require(`./deluxe`).deluxeMonthlyRevenue
const deluxeYearlyRevenue = require(`./deluxe`).deluxeYearlyRevenue


let totalNumbers= [];
let totalYearlySold = [];
let totalWeeklySold = [];
let totalMontlySold = [];

let totalYearlyRevenue = [];
let totalWeeklyRevenue = [];
let totalMonthlyRevenue = [];

convertToIntegers(totalCupcakes, totalNumbers, 1)

weekly(totalNumbers, totalWeeklySold);
monthly(totalNumbers, totalMontlySold);
yearly(totalNumbers, totalYearlySold);

totalRevenue(basicYearlyRevenue, totalYearlyRevenue, deluxeYearlyRevenue);
totalRevenue(basicMonthlyRevenue, totalMonthlyRevenue, deluxeMontlyRevenue);
totalRevenue(basicWeeklyRevenue, totalWeeklyRevenue, deluxeWeeklyRevenue);

module.exports = {
  totalWeeklyRevenue,
  totalWeeklySold,
  totalMonthlyRevenue,
  totalMontlySold,
  totalYearlyRevenue,
  totalYearlySold
}