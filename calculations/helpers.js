 function convertToIntegers(arr, newArr, num){
   arr.map((x) => {
     return newArr.push(parseInt(x)*num)
   })
 }
 
function arrSum(arr){
  return arr.reduce((a,b) => {
    return a + b
  }, 0)
}

function yearly(arr, yearlyArr){
  let arr2 = arr.slice(0)
  while(arr2.length){
    let tinyArr = (arr2.splice(0,365))
    yearlyArr.push(arrSum(tinyArr))
  }
}

function weekly(arr, weeklyArr){
  let arr2 = arr.slice(0)
  while(arr2.length){
    let weeklyTinyArr = (arr2.splice(0,7))
    weeklyArr.push(arrSum(weeklyTinyArr))
  }
}

//monthly is 30 days per month. need to circe back and work out correct distro
function monthly(arr, montlylArr){
  let arr2 = arr.slice(0)
  while(arr2.length){
    let monthlyTinyArr = (arr2.splice(0,30))
    montlylArr.push(arrSum(monthlyTinyArr))
  }
}

function totalRevenue (arr, newArr, array2) {
  arr.map((e, i) => {
    newArr.push(e + array2[i])
  })
}


 module.exports = {
   convertToIntegers,
   yearly,
   weekly,
   monthly,
   totalRevenue
 }

