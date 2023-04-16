function checkCashRegister(price, cash, cid) {
  let arrOfChange = [];
  let arrOfTypes = [];
  for(let i = 0; i < cid.length; i++) {
    arrOfChange.push(cid[i][1]);
  }

  for(let i = 0; i < cid.length; i++) {
    arrOfTypes.push(cid[i][0]);
  }

  let closedTotal = 0;

  for(let i = 0; i < cid.length; i++) {
    closedTotal += cid[i][1];
  }

  let num = cash - price;

  if(num == closedTotal) {
    return '{status: "CLOSED", change: ' + JSON.stringify(cid).split(',').join(', ') + '}';
  }

  if(num > closedTotal) {
    return '{status: "INSUFFICIENT_FUNDS", change: []}';
  }

  let change = [];

  let totalP = 0, totalN = 0, totalDime = 0, totalQ = 0, totalDollar = 0, totalF = 0, total10 = 0, total20 = 0, total100 = 0;

  while (num > 0) {
    if (num >= 100 && arrOfChange[8] > num) {
      total100 += 100;
      num -= 100;
    } else if (num >= 20 && arrOfChange[7] > num) {
      total20 += 20;
      num -= 20;
    } else if (num >= 10 && arrOfChange[6] > num) {
      total10 += 10;
      num -= 10;
    } else if (num >= 5 && arrOfChange[5] > num) {
      totalF += 5;
      num -= 5;
    } else if (num >= 1 && arrOfChange[4] > num) {
      totalDollar += 1;
      num -= 1;
    } else if (num >= 0.25 && arrOfChange[3] > num) {
      totalQ += 0.25;
      num -= 0.25;
    } else if (num >= 0.1 && arrOfChange[2] > num) {
      totalDime += 0.1;
      num -= 0.1;
    } else if (num >= 0.05 && arrOfChange[1] > num) {
      totalN += 0.05;
      num -= 0.05;
    } else if (num >= 0.01 && arrOfChange[0] > num) {
      totalP += 0.01;
      num -= 0.01;
    } else {
      num--;
    }
  }

  if (totalP > 0) {
    change.push(cid[0][0], totalP);
  }

  if (totalN > 0) {
    change.push(cid[1][0], totalN);
  }

  if (totalDime > 0) {
    change.push(cid[2][0], totalDime);
  }

  if (totalQ > 0) {
    change.push(cid[3][0], totalQ);
  }

  if (totalDollar > 0) {
    change.push(cid[4][0], totalDollar);
  }

  if (totalF > 0) {
    change.push(cid[5][0], totalF);
  }

  if (total10 > 0) {
    change.push(cid[6][0], total10);
  }
  
  if (total20 > 0) {
    change.push(cid[7][0], total20);
  }
  
  if(total100 > 0) {
    change.push(cid[8][0], total100);
  }


  return '{status: "OPEN", change: [' + JSON.stringify(change).split(',').join(', ') + ']}';
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));