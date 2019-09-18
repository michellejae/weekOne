const deluxe = require(`./calculations/deluxe`)
const basic = require(`./calculations/basic`)
const total = require(`./calculations/total`)  

let weeklySold = {}
weeklySold.total = total.totalWeeklySold,
weeklySold.basic = basic.basicWeeklySold,
weeklySold.deluxe = deluxe.deluxeWeeklySold

let weeklyRevenue = {}
weeklyRevenue.total = total.totalWeeklyRevenue,
weeklyRevenue.basic = basic.basicWeeklyRevenue,
weeklyRevenue.deluxe = deluxe.deluxeWeeklyRevenue

let monthlySold = {}
monthlySold.total = total.totalMontlySold,
monthlySold.basic = basic.basicMonthlySold,
monthlySold.deluxe = deluxe.deluxeMonthlySold

let monthlyRevenue = {}
monthlyRevenue.total = total.totalMonthlyRevenue,
monthlyRevenue.basic = basic.basicMonthlyRevenue,
monthlyRevenue.deluxe = deluxe.deluxeMonthlyRevenue

let yearlySold = {}
yearlySold.total = total.totalYearlySold,
yearlySold.basic = basic.basicYearlySold,
yearlySold.deluxe = deluxe.deluxeYearlySold

let yearlyRevenue = {}
yearlyRevenue.total = total.totalYearlyRevenue,
yearlyRevenue.basic = basic.basicYearlyRevenue,
yearlyRevenue.deluxe = deluxe.deluxeYearlyRevenue

let test = {
  a = 12
}

