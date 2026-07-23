function addExpense() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    if (name === "" || amount === "") {
        alert("Please enter all fields");
        return;
    }

    let list = document.getElementById("list");

    let li = document.createElement("li");
    li.innerHTML = `
    ${name} - ₦${amount}
    <button onclick="deleteExpense(this)">❌</button>
`;
function deleteExpense(button) {
  const li = button.parentElement;
  li.remove();
}
    list.appendChild(li);

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
    li.remove();
}