const totalData = `./data/Total.txt`;
const fs = require('fs');
let totalCupcakes = fs.readFileSync(totalData).toString().split("\n");
totalCupcakes.shift()

const { convertToIntegers, yearly, weekly, monthly}  = require(`./helpers.js`);
let totalNumbers = [];
let totalYearly = [];
let totalWeekly = [];
let totalMontly = [];


convertToIntegers(totalCupcakes, totalNumbers, 1)

weekly(totalNumbers, totalWeekly)
monthly(totalNumbers, totalMontly)
yearly(totalNumbers, totalYearly)

