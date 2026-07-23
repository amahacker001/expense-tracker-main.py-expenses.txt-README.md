let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// ADD EXPENSE
function addExpense() {
  const name = document.getElementById("name").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const category = document.getElementById("category").value;

  if (!name || isNaN(amount)) return;

  const expense = {
    name,
    amount,
    category
  };

  expenses.push(expense);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  displayExpenses();
  updateTotal();

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}

// DISPLAY EXPENSES
function displayExpenses() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  expenses.forEach((expense, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${expense.name} (${expense.category}) - ₦${expense.amount}
      <button onclick="deleteExpense(${index})">❌</button>
    `;

    list.appendChild(li);
  });
}

// DELETE EXPENSE
function deleteExpense(index) {
  expenses.splice(index, 1);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  displayExpenses();
  updateTotal();
}

// UPDATE TOTAL
function updateTotal() {
  let total = 0;

  expenses.forEach(expense => {
    total += expense.amount;
  });

  document.getElementById("total").innerText = "₦" + total;
}

// LOAD ON START
function loadExpenses() {
  displayExpenses();
  updateTotal();
}

// RUN WHEN PAGE LOADS
loadExpenses();