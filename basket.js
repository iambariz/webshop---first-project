const basketList = document.querySelector(".basketList");

const basketItems = [

]

class Item {
    constructor(id, title, quantity, price) {
        this.title = title;
        this.id = id;
        this.quantity = quantity;
        this.price = price;
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
    buttons.forEach(function (item) {
        item.addEventListener('click', deleteItem);
    })
    console.log(buttons);
}