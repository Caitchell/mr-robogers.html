//Business Logic

function translator(number) {
  let numbersRoboger = [];

  for (let index = 0; index <= number; index++) {
    if (index.toString().includes("3")) {
      numbersRoboger.push("Won't you be my neighbor?");
    } else if (index.toString().includes("2")) {
      numbersRoboger.push("Boop! ");
    } else if (index.toString().includes("1")) {
      numbersRoboger.push("Beep! ");
    } else {
      numbersRoboger.push(index)
    }
  }
  return numbersRoboger
}




// User Interface Logic

$(document).ready(function() {
  $("form#mr-Roboger").submit(function(event) {
    event.preventDefault();
    const inputNumber= parseInt($("input#input-Number").val());
    const inputTranslated = translator(inputNumber);
    const newTranslatedNumbers= inputTranslated.toString();

    $(".result").text(newTranslatedNumbers);
  });
});