const totalData = `./data/Total.txt`;
const fs = require('fs');
let totalArray = fs.readFileSync(totalData).toString().split("\n");
totalArray.shift()

const { convertToIntegers, yearly, weekly, monthly}  = require(`./helpers.js`);
let numbersTotalArr = [];
let yearlyTotalArr = [];
let weeklyTotalArr = [];
let monthlyTotalArr = [];


convertToIntegers(totalArray, numbersTotalArr)



weekly(numbersTotalArr, weeklyTotalArr)
console.log('weekly', weeklyTotalArr)
monthly(numbersTotalArr, monthlyTotalArr)
console.log('monthly', monthlyTotalArr)
yearly(numbersTotalArr, yearlyTotalArr)
console.log('yearly', yearlyTotalArr)
