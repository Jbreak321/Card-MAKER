document.addEventListener("DOMContentLoaded", function () {
 const monthDropdown = document.getElementById("dropDown");
 const amountInput = document.getElementById("AmountInput");
 const submitButton = document.getElementById("submit");
    const theMonth = document.getElementById("theMonth");
    const weekInputs = [
        document.getElementById("weekone"),
        document.getElementById("weektwo"),
        document.getElementById("weekthree"),
        document.getElementById("weekfour")
    ];
    const totalInput = document.getElementById("total");

    submitButton.addEventListener("click", function () {
        const selectedMonth = monthDropdown.value;
        const amountEarned = parseFloat(amountInput.value);

        if (isNaN(amountEarned) || amountEarned < 0) {
            alert("Please enter a valid amount.");
            return;
        }

        theMonth.textContent = `Month: ${selectedMonth}`;
        
        let weeklyAmount = (amountEarned / 4).toFixed(2);
        weekInputs.forEach(weekInput => weekInput.value = `$${weeklyAmount}`);
        totalInput.value = `$${amountEarned.toFixed(2)}`;
    });
});
