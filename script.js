let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function displayExpenses() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    expenses.forEach((exp, index) => {
        let li = document.createElement("li");
        li.textContent = exp.name + " - ₦" + exp.amount;

        list.appendChild(li);
    });
}

function addExpense() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    if (name === "" || amount === "") {
        alert("Fill all fields");
        return;
    }

    expenses.push({ name, amount });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";

    displayExpenses();
}

window.onload = displayExpenses;