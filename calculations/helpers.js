let numbersTotalArr = []
let yearlyArrTotal = []

 function convertToIntegers(arr){
   arr.map((x) => {
     return numbersTotalArr.push(parseInt(x))
   })
 }
 
function arrSum(arr){
  return arr.reduce((a,b) => {
    return a + b
  }, 0)
}

function yearly(arr){
  while(arr.length){
    let tinyArr = (arr.splice(0,365))
    yearlyArrTotal.push(arrSum(tinyArr))
  }
}


 module.exports = {
   convertToIntegers,
   arrSum,
   yearly,
   numbersTotalArr,
   yearlyArrTotal
 }