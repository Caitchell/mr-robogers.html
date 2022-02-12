//Business Logic

numbersRoboger = function translator(number) {
  let numbersRoboger = [0-15]

  for (let index = 0; index <= number; index++) {
    if (index.toString().includes("3")) {
      translation.push("Won't you be my neighbor?")
    } else if (index.toString().includes("2")) {
      numbersRoboger.push("Boop!")
    } else if (index.toString().includes("1")) {
      translation.push("Beep!");
    } else {
      numbersRoboger.push(index)
    }
  }
  return numbersRoboger
}




// User Interface Logic

