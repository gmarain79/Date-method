var output = document.getElementById("output");

function showAnswer(questionNo, text) {
    output.innerHTML += "<div class='answer'><h2>Question " + questionNo + "</h2><p>" + text + "</p></div>";
}

var now = new Date();
var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// 1. Display current date and time in the browser.
showAnswer(1, "Current date and time: " + now);

// 2. Alert current month in words.
var currentMonth = monthNames[now.getMonth()];
alert("Current month: " + currentMonth);
showAnswer(2, "Current month: " + currentMonth);

// 3. Alert first 3 letters of the current day.
var currentDayShort = dayNames[now.getDay()].slice(0, 3);
alert("Today is: " + currentDayShort);
showAnswer(3, "First 3 letters of today: " + currentDayShort);

// 4. Display "It's Fun day" if today is Saturday or Sunday.
if (now.getDay() === 0 || now.getDay() === 6) {
    showAnswer(4, "It's Fun day");
} else {
    showAnswer(4, "Today is not a Fun day");
}

// 5. First fifteen days or last days of the month.
if (now.getDate() < 16) {
    showAnswer(5, "First fifteen days of the month");
} else {
    showAnswer(5, "Last days of the month");
}

// 6. Minutes since midnight, Jan. 1, 1970.
dateForMinutes = new Date();
minutesSince1970 = dateForMinutes.getTime() / (1000 * 60);
showAnswer(6, "Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);

// 7. Test whether it is AM or PM.
if (now.getHours() < 12) {
    alert("Its AM");
    showAnswer(7, "Its AM");
} else {
    alert("Its PM");
    showAnswer(7, "Its PM");
}

// 8. Date object for the last day of the last month of 2020.
var laterDate = new Date(2020, 11, 31);
showAnswer(8, "laterDate: " + laterDate);

// 9. Days passed since 1st Ramadan, June 18, 2015.
var ramadanStart = new Date(2015, 5, 18);
var daysPassed = Math.floor((now.getTime() - ramadanStart.getTime()) / (1000 * 60 * 60 * 24));
alert(daysPassed + " days have passed since 1st Ramadan, 2015");
showAnswer(9, "Days passed since 1st Ramadan, 2015: " + daysPassed);

// 10. Seconds elapsed between reference date and beginning of 2015.
var referenceDate = new Date("December 5, 2015 22:50:16");
var beginningOf2015 = new Date(2015, 0, 1);
var secondsElapsed = Math.floor((beginningOf2015.getTime() - referenceDate.getTime()) / 1000);
showAnswer(10, "On reference date " + referenceDate + ", " + Math.abs(secondsElapsed) + " seconds had passed since beginning of 2015.");

// 11. Reset current date object one hour ahead.
var oneHourAhead = new Date();
var currentHours = oneHourAhead.getHours();
oneHourAhead.setHours(currentHours + 1);
showAnswer(11, "Date and time one hour ahead: " + oneHourAhead);

// 12. Show date reset to 100 years back.
var hundredYearsBack = new Date();
hundredYearsBack.setFullYear(hundredYearsBack.getFullYear() - 100);
alert("100 years back, it was " + hundredYearsBack);
showAnswer(12, "100 years back: " + hundredYearsBack);

// 13. Ask user age and calculate birth year.
var age = Number(prompt("Enter your age:"));
var birthYear = now.getFullYear() - age;
showAnswer(13, "Your age is " + age + ". Your birth year is " + birthYear + ".");

// 14. Generate K-Electric bill.
var customerName = prompt("Enter customer name:", "ABC Customer");
var numberOfUnits = Number(prompt("Enter number of units:", "410"));
var chargesPerUnit = Number(prompt("Enter charges per unit:", "16"));
var latePaymentSurcharge = Number(prompt("Enter late payment surcharge:", "350"));
var netAmount = numberOfUnits * chargesPerUnit;
var grossAmount = netAmount + latePaymentSurcharge;

showAnswer(
    14,
    "<strong>K-Electric Bill</strong><br>" +
    "Customer Name: " + customerName + "<br>" +
    "Current Month: " + currentMonth + "<br>" +
    "Number of units: " + numberOfUnits.toFixed(2) + "<br>" +
    "Charges per unit: " + chargesPerUnit.toFixed(2) + "<br>" +
    "Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>" +
    "Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>" +
    "Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2)
);
