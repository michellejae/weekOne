let numbersTotalArr = []

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

 module.exports = {
   convertToIntegers,
   arrSum,
   numbersTotalArr: numbersTotalArr
 }