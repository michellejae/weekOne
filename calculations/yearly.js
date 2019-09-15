const totalData = `./data/Total.txt`
const { convertToIntegers } = require(`./helpers.js`)
const { arrSum } = require(`./helpers.js`)
let numbersTotalArr = require(`./helpers.js`).numbersTotalArr;

const fs = require('fs');
let totalArray = fs.readFileSync(totalData).toString().split("\n")
let yearlyArrTotal = []


totalArray.shift()

convertToIntegers(totalArray)
yearly(numbersTotalArr)


function yearly(arr){
  while(arr.length){
    let tinyArr = (arr.splice(0,365))
    yearlyArrTotal.push(arrSum(tinyArr))
  }
}




