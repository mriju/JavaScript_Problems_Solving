function isLeapYear(giveYear) {
    if (giveYear % 400 == 0 || (giveYear % 4 == 0 && giveYear % 100 != 0)) return "You Given Year is Leap Year...!";
    else return "You Given Year is Not Leap Year...!";
}
let checkNow = isLeapYear(1700);
console.log(checkNow);