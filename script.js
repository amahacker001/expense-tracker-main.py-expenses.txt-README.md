function addExpense() {
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  if (!name || !amount) return;

  expenses.push({
    name,
    amount,
    category
  });

  let list = document.getElementById("list");
  let li = document.createElement("li");

  li.innerHTML = `
    ${name} (${category}) - ₦${amount}
    <button onclick="deleteExpense(this)">❌</button>
  `;

  list.appendChild(li);
}

  // Update total
  let total = document.getElementById("total");
  let currentTotal = total.textContent.replace("Total: ₦", "");
  currentTotal = Number(currentTotal) + Number(amount);

  total.textContent = "Total: ₦" + currentTotal;

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