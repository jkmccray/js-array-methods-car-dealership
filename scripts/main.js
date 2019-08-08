// Your job is to produce the following reports for the dealership based on their total 2017 sales.

// 1. Total profit for 2017
const carsSoldIn2017 = cars.filter(car => car.purchase_date.includes("2017"))
const profits2017 = carsSoldIn2017.map(car => car.gross_profit)
const totalProfits = profits2017.reduce((currentTotal, nextValue) => currentTotal += nextValue, 0).toFixed(2)
console.log(`The total profit for 2017 was $${totalProfits}`)


// Functions for questions below
// ---------------------------------------------
const createCountObject = (arr) => {
  const countObj = {}
  arr.forEach(element => {
    if (element in countObj) {
      countObj[element]++
    } else {
      countObj[element] = 1
    }
  })
  return countObj
}

const getHighestKeyInCountObj = (countObj) => {
  let currentHighestValue = 0
  let currentHighestKey
  for (key in countObj) {
    if (countObj[key] > currentHighestValue) {
      currentHighestValue = countObj[key]
      currentHighestKey = key
    }
  }
  return currentHighestKey
}
// ---------------------------------------------

// 2. In which month did they sell the most cars?
const monthsArr = carsSoldIn2017.map(car => car.purchase_date.slice(5,7))

const monthCount = createCountObject(monthsArr)
const highestMonth = getHighestKeyInCountObj(monthCount)

console.log(`The most sales were made in month ${highestMonth}`)


// 3. Which salesperson sold the most cars?
const salespeopleArray = carsSoldIn2017.map(car => `${car.sales_agent.first_name} ${car.sales_agent.last_name}`)

const salespersonCount = createCountObject(salespeopleArray)
const salespersonWithMostSales = getHighestKeyInCountObj(salespersonCount)
console.log(`The person who sold the most cars is ${salespersonWithMostSales}`)


// 4. Which salesperson made the most profit?
const salespeopleAndProfits = carsSoldIn2017.map(car => {
  return {
    salesperson: `${car.sales_agent.first_name} ${car.sales_agent.last_name}`,
    profit: `${car.gross_profit}`
  }
})

const profitCount = {}

salespeopleAndProfits.forEach(obj => {
  if (obj["salesperson"] in profitCount) {
    profitCount[obj["salesperson"]] += parseInt(obj["profit"])
  } else {
    profitCount[obj["salesperson"]] = parseInt(obj["profit"])
  }
})

const personWithHighestProfit = getHighestKeyInCountObj(profitCount)

console.log(`The person with the highest profit was ${personWithHighestProfit}`)


// 5. Which model was the most popular?
const modelsArray = carsSoldIn2017.map(car => car.vehicle.model)

const modelCount = createCountObject(modelsArray)
const mostPopularModel = getHighestKeyInCountObj(modelCount)
console.log(`The most popular model was the ${mostPopularModel}`)


// 6. Which bank provided the most loans to our customers?
const banksArray = carsSoldIn2017.map(car => car.credit.credit_provider)

const banksCount = createCountObject(banksArray)
const bankWithMostLoans = getHighestKeyInCountObj(banksCount)
console.log(`The bank that provided the most loans to customers was ${bankWithMostLoans}`)



// ----------------------------------------------------
// monthsArr.forEach(month => {
//   if (month in monthCount) {
//     monthCount[month]++
//   } else {
//     monthCount[month] = 1
//   }
// })

// const getHighestMonth = () => {
//   let currentHighestValue = 0
//   let currentHighestMonth
//   for (month in monthCount) {
//     if (monthCount[month] > currentHighestValue) {
//       currentHighestValue = monthCount[month]
//       currentHighestMonth = month
//     }
//   }
//   return currentHighestMonth
// }



// const salespersonCount = {}

// salespeopleArray.forEach(salesperson => {
//   if (salesperson in salespersonCount) {
//     salespersonCount[salesperson]++
//   } else {
//     salespersonCount[salesperson] = 1
//   }
// })

// const getSoldMostCars = () => {
//   let currentHighestValue = 0
//   let currentHighestPerson
//   for (salesperson in salespersonCount) {
//     if (salespersonCount[salesperson] > currentHighestValue) {
//       currentHighestValue = salespersonCount[salesperson]
//       currentHighestPerson = salesperson
//     }
//   }
//   return currentHighestPerson
// }


// const getHighestProfit = () => {
  //   let currentHighestValue = 0
  //   let currentHighestProfit
  //   for (person in profitCount) {
  //     if (profitCount[person] > currentHighestValue) {
  //       currentHighestValue = profitCount[person]
  //       currentHighestProfit = person
  //     }
  //   }
  //   return currentHighestProfit
  // }



// const modelCount = {}

// modelsArray.forEach(model => {
//   if (model in modelCount) {
//     modelCount[model]++
//   } else {
//     modelCount[model] = 1
//   }
// })

// const getHighestModel = () => {
//   let currentHighestValue = 0
//   let currentHighestModel
//   for (model in modelCount) {
//     if (modelCount[model] > currentHighestValue) {
//       currentHighestValue = modelCount[model]
//       currentHighestModel = model
//     }
//   }
//   return currentHighestModel
// }



// const banksCount = {}

// banksArray.forEach(bank => {
//   if (bank in banksCount) {
//     banksCount[bank]++
//   } else {
//     banksCount[bank] = 1
//   }
// })

// const getHighestBank = () => {
//   let currentHighestValue = 0
//   let currentHighestBank
//   for (bank in banksCount) {
//     if (banksCount[bank] > currentHighestValue) {
//       currentHighestValue = banksCount[bank]
//       currentHighestBank = bank
//     }
//   }
//   return currentHighestBank
// }