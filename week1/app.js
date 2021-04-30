var shopper = {
    groceryCart: ["apple", "banana", "orange", "peaches"],
    firstName: "Susie",
    lastName: "Shopper",
    age: 37,
    isWearingShoes: true,
    storeName: "Walbrand",
    displayInfo: function(){
            console.log(`${shopper.firstName} is a shopper at ${shopper.storeName}`)
            console.log(`${shopper.firstName} is ${shopper.age}`)
            console.log(`${shopper.groceryCart}`)
    }
}
shopper.displayInfo();