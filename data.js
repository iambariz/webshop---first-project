class item{
  constructor(name, id, price, inStock, unit, type,) {
      this.name = name;
      this.id = id;
      this.price = price;
      this.inStock = inStock;
      this.unit = unit;
      this.unitPrice = unit / price;
      this.reviews = Math.floor(Math.random() * 500);
      this.type = type;
      this.rating = Math.floor(Math.random() * 5);
    }
    getInfo(){
      console.log(this.name)
    };
}





let shopItems = [

];

let itemOne = new item ("Fairtrade Bananas Loose", 1, 1, 23, 1, "fruit");
let itemTwo = new item ("British apple", 2, 0.79, 23, 1, "fruit");
let itemThree = new item ("British Minced beef", 3, 0.79, 243, 1, "meat");
let itemFour = new item ("British chicken breast", 4, 0.79, 233, 1, "meat");
let itemFive = new item ("Lynx Black", 5, 0.99, 0, 1, "deodorant");
let itemSix = new item ("Old spice Blue Winter", 6, 0.79, 3, 1, "deodorant");
let itemSeven = new item ("Paracetamol", 7, 1.79, 1, 1, "drug");
let itemEight = new item ("Nurofen", 8, 2.49, 6, 1, "drug");