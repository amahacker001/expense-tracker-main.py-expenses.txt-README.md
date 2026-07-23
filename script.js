let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let chart;

// ADD EXPENSE
function addExpense() {
  const name = document.getElementById("name").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const category = document.getElementById("category").value;

  if (!name || isNaN(amount)) return;

  const expense = { name, amount, category };
  expenses.push(expense);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  displayExpenses();
  updateTotal();
  renderChart();

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}

// DISPLAY
function displayExpenses() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  expenses.forEach((exp, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${exp.name} (${exp.category}) - ₦${exp.amount}
      <button onclick="deleteExpense(${index})">❌</button>
    `;

    list.appendChild(li);
  });
}

// DELETE
function deleteExpense(index) {
  expenses.splice(index, 1);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  displayExpenses();
  updateTotal();
  renderChart();
}

// TOTAL
function updateTotal() {
  let total = 0;

  expenses.forEach(exp => total += exp.amount);

  document.getElementById("total").innerText = "₦" + total;
}

// DOWNLOAD CSV
function downloadCSV() {
  let csv = "Name,Category,Amount\n";

  expenses.forEach(exp => {
    csv += `${exp.name},${exp.category},${exp.amount}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "expenses.csv";
  a.click();
}

// CHART
function renderChart() {
  const ctx = document.getElementById("chart");

  let categories = {};

  expenses.forEach(exp => {
    if (!categories[exp.category]) {
      categories[exp.category] = 0;
    }
    categories[exp.category] += exp.amount;
  });

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(categories),
      datasets: [{
        data: Object.values(categories)
      }]
    }
  });
}

// LOAD
function loadExpenses() {
  displayExpenses();
  updateTotal();
  renderChart();
}

loadExpenses();