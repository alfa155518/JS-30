

const addItems = document.querySelector('.add-items');

const itemsList = document.querySelector(".plates")

const items = JSON.parse(localStorage.getItem("items")) || [];

const btnCheckAll = document.querySelector(".check-all")


function addItem(e) {
    e.preventDefault();
    const text = document.querySelector("input[type = text]").value;
    const item = {
        text: text,
        done:false
    }
    items.push(item)
    populateList(items,itemsList)
    localStorage.setItem("items", JSON.stringify(items))
    this.reset()
}



function populateList(plates = [], platsList) {
    platsList.innerHTML = plates.map((plate,index) => {
        return `
        <li>
        <input type ="checkBox" data-index=${index} id='item${index}' ${plate.done ? 'checked' : ''}> </input>
        <label class='item-label' for='item${index}'>${plate.text}</label>
        </li>
        `
    }).join("")
}






function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}



populateList(items, itemsList);




addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);


