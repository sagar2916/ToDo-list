    
let btn = document.querySelector("button");
let list = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerHTML = `
        <span onclick="toggleComplete(this)">${inp.value}</span>
        <button onclick="removeTask(this.parentElement)">Delete</button>
    `;
  list.appendChild(item);
  inp.value = "";
});


function toggleComplete(element) {
    element.classList.toggle('completed');
}

function removeTask(item) {
  item.remove()
}
