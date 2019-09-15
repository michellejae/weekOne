const totalData = `./data/Total.txt`
const fs = require('fs');
let totalArray = fs.readFileSync(totalData).toString().split("\n")
totalArray.shift()

const { convertToIntegers, yearly }  = require(`./helpers.js`)
// const { arrSum } = require(`./helpers.js`)
let numbersTotalArr = require(`./helpers.js`).numbersTotalArr;
let yearlyArrTotal = require(`./helpers.js`).yearlyArrTotal;

convertToIntegers(totalArray)
yearly(numbersTotalArr)

console.log(yearlyArrTotal)