// Variables
const submit = document.getElementById("submit")
const week1 = document.getElementById("weekone")
const week2 = document.getElementById("weektwo")
const week3 = document.getElementById("weekthree")
const week4 = document.getElementById("weekfour")
let weekOneInformation = []
let weekTwoInformation = []
let weekThreeInformation = []
let weekFourInformation = []
let totalInformation = []
const totalAmount = document.getElementById("total")
var index = 0
// Button Developments
submit.addEventListener("click",function () {
    monthName()
    weekInputMath()
    totalAverageCalculation()
})

// Function 
function weekInputMath(amountInput) {
    amountInput = document.getElementById("AmountInput").value
    let perEach = "$" + (amountInput/4).toFixed(2);
  
    week1.value = perEach
    weekOneInformation.push(week1.value)
    console.log(weekOneInformation)

    week2.value = perEach
    weekTwoInformation.push(week2.value)
    console.log(weekTwoInformation)

    week3.value = perEach
    weekThreeInformation.push(week3.value)
    console.log(weekThreeInformation)
    
    week4.value = perEach
    weekFourInformation.push(week4.value)
    console.log(weekFourInformation)


    if (totalAmount.value === 0) {
        yearAverage.textContent = "You Made No Money This Year"
    }
    else{
        totalAmount.value = "$" + amountInput
        totalInformation.push(totalAmount.value)
    }

}
    
function monthName() {
    const MonthNameInformation = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    
    let monthInput = document.getElementById("NameMonth").value; // Get user input
    let monthName = document.getElementById("theMonth"); // Element to display result
    
    let found = false; // Flag to check if month is valid

    for (let i = 0; i < MonthNameInformation.length; i++) {
        if (monthInput === MonthNameInformation[i]) {
            monthName.textContent = monthInput; // Set valid month
            found = true;
            break; // Exit loop once a match is found
        }
    }

    if (!found) {
        monthName.textContent = "Choose Valid Month Input"; // Show error if no match
    }
}



function totalAverageCalculation(yearAverage) {
    yearAverage = document.getElementById("Averagetotal")
    for (let i = 0; i < totalInformation.length; i++) {
        let totalYearAvg = totalInformation[i] * 12
        yearAverage.textContent = totalYearAvg
    }

}
    
        
