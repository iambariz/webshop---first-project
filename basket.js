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
        this.price = (unitPrice * quantity).toFixed(2);
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
    //console.log(buttons);
}

function updateTotal(array) {
    let total = 0;
    console.log(typeof (total));
    for (let i = 0; i < array.length; i++) {
        total = total + parseFloat(array[i].price);
    }
    total = total.toFixed(2);
    console.log(total);
    totalDisplay.textContent = total;
}

function deleteItem(e) {
    e.target.parentNode.parentNode.parentNode.remove();
    let num = getId(e.target.parentNode.parentNode.dataset.id);
    console.log(num)
    console.log(e.target.parentNode.parentNode.dataset.id)
    basketItems.splice(num, num);
    console.log(basketItems);
    updateTotal(basketItems);
}

function getId(target) {
    for (let i = 0; i < basketItems.length; i++) {
        console.log(basketItems[i].id)
        if (target == basketItems[i].id) {}
    }
}