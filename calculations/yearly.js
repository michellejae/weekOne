
const totalData = `./data/Total.txt`
const basicData = `./data/Basic_Cupcake.txt`

const fs = require('fs');
let totalArray = fs.readFileSync(totalData).toString().split("\n")
totalArray.shift()


const { convertToIntegers } = require(`./helpers.js`)
const { arrSum } = require(`./helpers.js`)
let numbersTotalArr = require(`./helpers.js`).numbersTotalArr;



let yearlyArrTotal = []
let yearlyBasicTotal = []
let yearlyDeluxeTotal = []

convertToIntegers(totalArray)
yearly(numbersTotalArr)



function yearly(arr){
  while(arr.length){
    let tinyArr = (arr.splice(0,365))
    yearlyArrTotal.push(arrSum(tinyArr))
  }
}




