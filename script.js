function addExpense() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    if (name === "" || amount === "") {
        alert("Fill all fields");
        return;
    }

    let li = document.createElement("li");
    li.textContent = name + " - ₦" + amount;

    document.getElementById("list").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
}