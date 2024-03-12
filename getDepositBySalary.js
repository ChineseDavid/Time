function formatMoney(money: number) {
  if (money >= 10000) {
    return `${(money / 10000).toFixed(2)} 万元`;
  }
  return `${money} 元`;
}

function formatMonth(month: number) {
  const y = Math.floor(month / 12);
  const m = month % 12;
  return `${y ? `${y} 年` : ''}${m ? `${m} 个月` : ''}`;
}

function getDepositBySalary(balance = 5000, interest = 0.02) {
  let money = 0;
  console.log(`如果你每个月存 ${formatMoney(balance)}，并且进行小额投资，以招商银行朝朝宝为例，年化利率 2%，每月结息`);
  for (let i = 0; i < 360; i++) {
    money = money * (1 + interest / 12) + balance;
    if (i < 12) {
      console.log(`${formatMonth(i + 1)}后你的存款将达到 ${formatMoney(money)}`);
    } else if (i < 120 && (i + 1) % 12 === 0) {
      console.log(`${formatMonth(i + 1)}后你的存款将达到 ${formatMoney(money)}`);
    } else if ((i + 1) % 120 === 0) {
      console.log(`${formatMonth(i + 1)}后你的存款将达到 ${formatMoney(money)}`);
    }
  }
  return money;
}

getDepositBySalary(10000, 0.02);
