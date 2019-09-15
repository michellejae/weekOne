const totalData = `./data/Total.txt`;
const fs = require('fs');
let totalArray = fs.readFileSync(totalData).toString().split("\n");
totalArray.shift()

const { convertToIntegers, yearly, weekly}  = require(`./helpers.js`);
let numbersTotalArr = [];
let yearlyTotalArr = [];
let weeklyTotalArr = [];


convertToIntegers(totalArray, numbersTotalArr)
let numbersWeeklyArr = numbersTotalArr;
let numbersMontlyARr = numbersTotalArr


weekly(numbersWeeklyArr, weeklyTotalArr)
yearly(numbersTotalArr, yearlyTotalArr)

console.log('here', weeklyTotalArr)