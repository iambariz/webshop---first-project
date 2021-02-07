const basketList = document.querySelector(".basketList");
const totalDisplay = document.querySelector(".total-price-holder");

const basketItems = [

]

class Item {
    constructor(id, title, quantity, unitPrice) {
        this.title = title;
        this.id = id;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.price = unitPrice * quantity;
    }
}

function basketDisplay(array) {
    let display = array.map(function (item) {
        return `
    <li class="basket-item">
        <div class="basket-container" data-id="${item.id}>
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

    console.log(buttons);
}

function updateTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i].price;
    }
    total = total.toFixed(2);
    totalDisplay.textContent = total + "£";
    console.log(total);
}