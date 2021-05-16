const currencyUnit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {
  let changeSum = cash * 100 - price * 100;
  let changeSumCheck = changeSum;
  let change = [];
  let status = '';

  let cidSum = 0;
  let filteredCid = cid.filter(elem => elem[1] !== 0).reverse(); //Check if some currencyUnit is 0, in test like ["DIME", 0]
  filteredCid.forEach(elem => {
    let curr = elem[0]; //read all currency name like curr: ONE HUNDRED...
    let currSum = elem[1] * 100; //read cash in drawer currSum: 10000
    cidSum += currSum;
    let amount = 0;

    //currencyUnit[curr] is set
    while (changeSum >= currencyUnit[curr] && currSum > 0) {
      amount += currencyUnit[curr]; //Take QUARTER from 4,25(425) so take 0,25(25)
      changeSum -= currencyUnit[curr]; //Change sum: 50-25 = 25
      currSum -= currencyUnit[curr]; //Actual currency sum is 4,25(425) - 0,25(25) = 4,0(400)
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });

  if (changeSum > 0) {
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  } else if (changeSum == 0 && changeSumCheck == cidSum) {
    status = 'CLOSED';
    change = cid;
  } else {
    status = 'OPEN';
  }
  return {'status': status, 'change': change};
}

console.log("<-------------------------------------------------->")
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log("<-------------------------------------------------->")

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log("<-------------------------------------------------->")

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log("<-------------------------------------------------->")

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log("<-------------------------------------------------->")

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log("<-------------------------------------------------->")