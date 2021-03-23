function getSleepHours(day) {
  switch (day){
    case 'monday':
      return 6.5;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 7.5;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8.5;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 9.5;
      break;
  }
};

function getActualSleepHours() {
  return (
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday'));
};

function getIdealSleepHours() {
  var idealHours = 7.5;
  return idealHours * 7;
};

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
  let msg = ""
  let sleepDebt = idealSleepHours - actualSleepHours

  if (actualSleepHours === idealSleepHours) {
    msg = "You got the perfect amount of sleep!"
  }
  else if (actualSleepHours > idealSleepHours) {
    msg = "You got more sleep than needed!"
  } 
  else if (actualSleepHours < idealSleepHours) {
    msg = "You need to get some more sleep!"
  }

  console.log(msg);
  console.log("You slept for: " + actualSleepHours + " hours");
  console.log("Your target hours: " + idealSleepHours + " hours");
  console.log("Your sleep debt is currently: " + sleepDebt)

};

calculateSleepDebt();