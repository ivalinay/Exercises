function vacation(input) {
  index = 0;
  let moneyNeeded = Number(input[index]);
  index++;

  let moneyAvailable = Number(input[index]);
  index++;

  let action = input[index];
  index++;

  let sum = Number(input[index]);
  index++;

  let daysSpentCount = 0;
  let totalDays = 0;

  while (moneyAvailable < moneyNeeded) {
    totalDays++;
    if (action === "spend") {
      if (sum > moneyAvailable) {
        moneyAvailable = 0;
      } else {
        moneyAvailable -= sum;
      }
      daysSpentCount++;
    } else {
      moneyAvailable += sum;
      daysSpentCount = 0;
    }
    if (daysSpentCount === 5) {
      console.log(`You can't save the money.`);
      console.log(`${totalDays}`);
      return;
    }
    action = input[index];
    index++;

    sum = Number(input[index]);
    index++;
  }
  console.log(`You saved the money for ${totalDays} days.`);
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);
