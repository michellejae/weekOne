 function convertToIntegers(arr, newArr){
   arr.map((x) => {
     return newArr.push(parseInt(x))
   })
 }
 
function arrSum(arr){
  return arr.reduce((a,b) => {
    return a + b
  }, 0)
}

function yearly(arr, yearlyArr){
  while(arr.length){
    let tinyArr = (arr.splice(0,365))
    yearlyArr.push(arrSum(tinyArr))
  }
}

function weekly(arr, weeklyArr){
  while(arr.length){
    let weeklyTinyArr = (arr.splice(0,7))
    weeklyArr.push(arrSum(weeklyTinyArr))
  }
}


 module.exports = {
   convertToIntegers,
   yearly,
   weekly,
 }