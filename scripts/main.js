// Your job is to produce the following reports for the dealership based on their total 2017 sales.

// 1. Total profit for 2017
const carsSoldIn2017 = cars.filter(car => car.purchase_date.includes("2017"))
const profits2017 = carsSoldIn2017.map(car => car.gross_profit)
const totalProfits = profits2017.reduce((currentTotal, nextValue) => currentTotal += nextValue, 0)
console.log(totalProfits)

// 2. In which month did they sell the most cars?
const monthsArr = carsSoldIn2017.map(car => {
  return car.purchase_date.slice(5,7)
})

const monthCount = {}

monthsArr.forEach(month => {
  if (month in monthCount) {
    monthCount[month]++
  } else {
    monthCount[month] = 1
  }
})

const getHighestMonth = () => {
  let currentHighestValue = 0
  let currentHighestMonth
  for (month in monthCount) {
    if (monthCount[month] > currentHighestValue) {
      currentHighestValue = monthCount[month]
      currentHighestMonth = month
    }
  }
  return currentHighestMonth
}

console.log(`The most sales were made in month ${getHighestMonth()}`)

// 3. Which salesperson sold the most cars?
const salespeopleArray = carsSoldIn2017.map(car => {
  return `${car.sales_agent.first_name} ${car.sales_agent.last_name}`
})

const salespersonCount = {}

salespeopleArray.forEach(salesperson => {
  if (salesperson in salespersonCount) {
    salespersonCount[salesperson]++
  } else {
    salespersonCount[salesperson] = 1
  }
})

const getSoldMostCars = () => {
  let currentHighestValue = 0
  let currentHighestPerson
  for (salesperson in salespersonCount) {
    if (salespersonCount[salesperson] > currentHighestValue) {
      currentHighestValue = salespersonCount[salesperson]
      currentHighestPerson = salesperson
    }
  }
  return currentHighestPerson
}

console.log(`The person who sold the most cars is ${getSoldMostCars()}`)

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

console.log(profitCount)

const getHighestProfit = () => {
  let currentHighestValue = 0
  let currentHighestProfit
  for (person in profitCount) {
    if (profitCount[person] > currentHighestValue) {
      currentHighestValue = profitCount[person]
      currentHighestProfit = person
    }
  }
  return currentHighestProfit
}

console.log(`The person with the highest profit was ${getHighestProfit()}`)
// 5. Which model was the most popular?


// 6. Which bank provided the most loans to our customers?