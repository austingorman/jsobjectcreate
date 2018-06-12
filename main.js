const coolObject = Object.create({}, {
  company: {
    enumerable: true,
    writable: true,
    value: "Cool Company"
  },
  specialty: {
    emumerable: true,
    writable: true,
    value: "Making really cool things"
  },
  name: {
    enumerable: true,
    writable: true,
    value: "Michael McDonald"
  },
  portfolio: {  
    writable: true, 
    value: [
      {
        type: "Purchase",
        ticker: "AAAA",
        shares: 2,
        valuation: 300
      },
      {
        type: "Purchase",
        ticker: "AALP",
        shares: 2,
        valuation: 200
      }
    ]
  },
  worth: {
    writable: true,
    value: function () {
      for (let i = 0; i < coolObject.portfolio.length; i++) {
        if (coolObject.portfolio[i].type === "Purchase") {
          let netWorth = 0;
          netWorth = netWorth + (coolObject.portfolio[i].shares * coolObject.portfolio[i].valuation)
          // return netWorth
          console.log(netWorth)
        }
      }
    }
  },
  purchase: {
    writable: true,
    value: function (stockName, quantity, price) {
      const newPurchase = {
        type: "Purchase",
        ticker: stockName,
        shares: quantity,
        valuation: price
      }
      coolObject.portfolio.push(newPurchase)
    }
  },
  sell: {
    writable: true,
    value: function (stockName, quantity, price) {
      const newSale = {
        type: "Sell",
        ticker: stockName,
        shares: quantity,
        valuation: price
      }
      coolObject.portfolio.push(newSale)
    }
  }
})

coolObject.sell("stock1", 2, 4)
coolObject.purchase("stock2", 3, 2)
coolObject.worth()

console.log(coolObject.portfolio)
// console.log(coolObject.portfolio.length)

 