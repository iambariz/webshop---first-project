function getLocalStorage() {
    return localStorage.getItem("list") ?
        JSON.parse(localStorage.getItem('list')) : [];
}

function addToLocalStorage(id, title, quantity, price) {
    const item = {
        title,
        title,
        quantity,
        price,
    }
    console.log(item);
    let storageItems = getLocalStorage();
    storageItems.push(item);
    localStorage.setItem("list", JSON.stringify(storageItems));
}

function removeFromLocalStorage(id) {
    let storageItems = getLocalStorage();
    storageItems = storageItems.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    })
    localStorage.setItem("list", JSON.stringify(storageItems));
}

function displayStorageItems() {
    let storageItems = getLocalStorage();
    console.log(items[0].id, items[0].value)
    if (storageItems.length > 0) {
        storageItems.forEach(function (item) {
            basketItems.push(item);
        });
        basketDisplay(storageItems);
        barDisplay();
        updateTotal(basketItems);
    }
}