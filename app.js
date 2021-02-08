const section = document.querySelector(".item-row");
let duplicate = false;
let duplicatedItem;

window.addEventListener("DOMContentLoaded", function () {
    displayItems(items)
})


//display
function displayItems(array) {
    let display = array.map(function (item) {
        return `
    <div class="item-card-test" data-id="${item.id}">
        <div class="card-wrapper">
            <img class="image card-image" src="${item.img}" alt="product">
            <p class="test-name">${item.title}</p>
            <p class="price">
                <span class="full-price">${item.price}</span>
                <span class="unit-price secondary-info"> £13.89/kg </span>
            </p>
            <p class="purchase">
                <input type="number" class="quantity" name="quantity" min="1" max="5" placeholder="0">
                <a class="btn btn-submit" href="#">Add</a>
            </p>
        </div>
    </div>
`;
    });
    display = display.join("");
    section.innerHTML = display;
    let quantity = document.querySelectorAll('.quantity');
    quantity.forEach(function (item) {
        item.addEventListener("keypress", function (evt) {
            if (evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        });
    })
    let buttons = document.querySelectorAll('.btn-submit');
    buttons.forEach(function (item) {
        item.addEventListener('click', addItem);
    })
    //console.log("Works");
    //console.log(buttons)
}

function addItem(e) {
    let element = e.target.parentElement.parentElement.parentElement;
    let id = element.dataset.id;
    //console.log(id)
    //console.log(element);
    let quantity = e.target.parentElement.childNodes[1].value;
    duplicateCheck(id);
    // console.log(typeof (quantity));
    if (duplicate == false) {
        if (quantity > 0) {
            let newItem = new Item(id, items[id].title, quantity, items[id].price);
            //console.log(newItem);
            //console.log("Value test: " + quantity);
            basketItems.push(newItem);
            //console.log(basketItems);
        } else {
            //error msg needed
            //console.log("wrong");
        }
    }
    if (duplicate == true) {
        basketItems[duplicatedItem].quantity =
            parseInt(basketItems[duplicatedItem].quantity) + parseInt(quantity);
        basketItems[duplicatedItem].price =
            (basketItems[duplicatedItem].quantity * basketItems[duplicatedItem].unitPrice).toFixed(2)
    }
    duplicate = false
    //console.log(quantity);
    //Display basket
    basketDisplay(basketItems);
    updateTotal(basketItems);
    //Set the quantity to 0 needed
    e.target.parentElement.childNodes[1].value = '';
}