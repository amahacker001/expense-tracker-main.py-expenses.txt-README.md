let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
function addExpense(localStorage.setItem("expenses", JSON.stringify(expenses));) {
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  if (!name || !amount) return;

  expenses.push({
    name,
    amount,
    category
  });

  function loadExpenses() {
  let list = document.getElementById("list");

  expenses.forEach(expense => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${expense.name} (${expense.category}) - ₦${expense.amount}
      <button onclick="deleteExpense(this)">❌</button>
    `;

    list.appendChild(li);
  });

  updateTotal();
}

 function updateTotal() {
  let total = 0;

  expenses.forEach(expense => {
    total += expense.amount;
  });

  document.getElementById("total").innerText = "₦" + total;
}
  // Clear inputs
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}

function deleteExpense(button) {
  const li = button.parentElement;

  // Get amount from text
  let text = li.textContent;
  let amount = text.split("₦")[1];
  amount = Number(amount);

  // Update total
  let total = document.getElementById("total");
  let currentTotal = total.textContent.replace("Total: ₦", "");
  currentTotal = Number(currentTotal) - amount;

  total.textContent = "Total: ₦" + currentTotal;

  // Remove item
  li.remove();
}