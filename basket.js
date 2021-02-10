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
    //console.log(buttons);
}

//Price display
function updateTotal(array) {
    let total = 0;
    //console.log(typeof (total));
    for (let i = 0; i < array.length; i++) {
        total = total + parseFloat(array[i].price);
    }
    total = total.toFixed(2);
    //console.log(total);
    totalDisplay.textContent = total;
}

//Delete item, also remove from array
function deleteItem(e) {
    let num =
        getId(e.target.parentElement.parentElement.dataset.id);
    e.target.parentElement.parentElement.parentElement.remove();
    //console.log(e.target.parentNode.parentNode.dataset.id)
    basketItems.splice(num, 1);
    //console.log(basketItems);
    updateTotal(basketItems);
    barDisplay();

}

//Gathers array ID for delete
function getId(target) {
    for (let i = 0; i < basketItems.length; i++) {
        if (target == basketItems[i].id) {
            //console.log(i);
            //console.log(basketItems[i]);
            return i;
        }
    }
}

//Duplicate check function
function duplicateCheck(id) {
    for (let i = 0; i < basketItems.length; i++) {
        if (basketItems[i].id == id) {
            duplicatedItem = i;
            duplicate = true;
        }
    }
}

function barDisplay() {
    if (basketItems.length > 0) {
        sideBar.style.right = "0px";
    } else {
        sideBar.style.right = "-350px";
    }
}