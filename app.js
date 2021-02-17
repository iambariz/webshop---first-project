//Selectors
const section = document.querySelector(".item-row");

//Variables
let duplicate = false;
let duplicatedItem;

//Event listerners
window.addEventListener("DOMContentLoaded", function () {
    displayItems(items[0]);
    displayStorageItems();
    startStorageTime();
    updateTotal(getLocalStorage());
})

//Display mechanism
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
        item.addEventListener("click", function (event) {
            event.preventDefault()
        });
    })
    //console.log(buttons)
}


//Creates the error msg container
function errorMsg() {
    const sessionContainer = document.createElement("div");
    sessionContainer.classList.add("session-msg");
    const msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-container");
    const paragraph = document.createElement("p");
    const btn = document.createElement("a");
    btn.classList = "btn btn-submit btn-session";
    btn.addEventListener('click', function () {
        localStorage.clear();
        window.location.reload();
    })
    paragraph.textContent = "Your session has expired!";
    btn.textContent = "Okay";
    msgContainer.appendChild(paragraph);
    msgContainer.appendChild(btn);
    sessionContainer.appendChild(msgContainer);

    document.body.appendChild(sessionContainer);
}