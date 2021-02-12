//Selectors
const basketList = document.querySelector(".basketList");
const totalDisplay = document.querySelector(".total-price-holder");
const sideBar = document.querySelector(".sidebar");

const basketItems = []

//Constructor
class Item {
    constructor(id, title, quantity, unitPrice) {
        this.title = title;
        this.id = id;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.price = (unitPrice * quantity).toFixed(2);
    }

}

//Sidebar display
function basketDisplay(array) {
    let display = array.map(function (item) {
        return `
    <li class="basket-item">
        <div class="basket-container" data-id="${item.id}">
            <p>
                <span class="item-name">${item.title}</span>
                <span class="times">(${item.quantity}x)</span>
                <i class="fas fa-times"></i>
                <span class="item-price"> ${item.price}£</span>
            </p>
        </div>
    </li>
        `
    });
    display = display.join("");
    basketList.innerHTML = display;
    let buttons = document.querySelectorAll('.fas.fa-times');
    buttons.forEach(function (item) {
        item.addEventListener('click', deleteItem);
    });
}

//Price display
function updateTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + parseFloat(array[i].price);
    }
    total = total.toFixed(2);
    totalDisplay.textContent = total;
}

//Delete item, also remove from array
function deleteItem(e) {
    let num = e.target.parentElement.parentElement.dataset.id;
    e.target.parentElement.parentElement.parentElement.remove();
    //console.log(e.target.parentNode.parentNode.dataset.id)
    let storageItems = getLocalStorage();
    console.log(num);
    //removeFromLocalStorage(num);
    getLocalStorage().splice(num, 1);
    localStorage.setItem("list", JSON.stringify(storageItems));
    storageItems = storageItems.filter(function (item) {
        console.log(item);
        if (parseInt(num) != parseInt(item.id)) {
            return item;
        } else {
            console.log("else");
        }
    })
    console.log(storageItems)
    localStorage.setItem("list", JSON.stringify(storageItems));
    updateTotal(getLocalStorage());
    barDisplay();
    if (getLocalStorage().length == 0) {
        stopTimer();
    }
}

//Gathers array ID for delete
function getId(target) {
    for (let i = 0; i < getLocalStorage().length; i++) {
        if (target == getLocalStorage()[i].id) {
            return i;
        }
    }
}

//Duplicate check function
function duplicateCheck(id) {
    for (let i = 0; i < getLocalStorage().length; i++) {
        if (getLocalStorage()[i].id == id) {
            duplicatedItem = i;
            duplicate = true;
        }
    }
}

function barDisplay() {
    if (getLocalStorage().length > 0) {
        sideBar.style.right = "0px";
    } else {
        sideBar.style.right = "-350px";
    }
}