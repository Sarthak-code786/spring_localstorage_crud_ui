function addItem() {
  const name = document.getElementById('nameInput').value;
  if (!name) return;
  let items = JSON.parse(localStorage.getItem("items")) || [];
  items.push(name);
  localStorage.setItem("items", JSON.stringify(items));
  document.getElementById('nameInput').value = "";
  displayItems();
}

function deleteItem(index) {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  items.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(items));
  displayItems();
}

function displayItems() {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  let html = items.map((item, index) => `<li>${item} <button onclick="deleteItem(${index})">Delete</button></li>`).join('');
  document.getElementById('itemList').innerHTML = html;
}

displayItems();
