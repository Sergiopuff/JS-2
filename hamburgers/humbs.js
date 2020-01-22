'strict mode'

const burgers = {
    small: { name: 'Small', price: 50, calories: 20 },
    big: { name: 'Big', price: 100, calories: 40 },
}

const stuffing = {
    cheese: { name: 'Cheese', price: 10, calories: 20 },
    salad: { name: 'Salad', price: 20, calories: 5 },
    potato: { name: 'Potato', price: 15, calories: 10 },
}
const toppings = {
    spice: { name: 'Spice', price: 15, calories: 0 },
    mayo: { name: 'Mayones', price: 20, calories: 5 },
}


class Hamburgers {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings.forEach((top, i) => {
            if (top == topping) {
                this.toppings.splice(i, 1);
            }
        })
    }
    getToppings(topping) {
        console.log(topping);
    }
    getSize() {
        console.log(this.size.name)
    }
    getStuffing() {
        console.log(this.stuffing.name)
    }
    calculatePrice() {
        const price = this.size.price + this.stuffing.price;
        let priceToppings = 0;
        this.toppings.forEach(top => {
            priceToppings += top.price;
        })
        const totalPrice = price + priceToppings;
        console.log(totalPrice);
    }
    calculateCalories() {
        let calories = this.size.calories + this.stuffing.calories;
        let caloriesToppings = 0;
        this.toppings.forEach(top => {
            caloriesToppings += top.calories;
        })
        const totalCalories = calories + caloriesToppings;
        console.log(totalCalories);
    }
}

const hamburger = new Hamburgers(burgers.big, stuffing.salad);

hamburger.addTopping(toppings.mayo);
hamburger.addTopping(toppings.spice);
hamburger.removeTopping(toppings.spice);
hamburger.getToppings(toppings);
hamburger.getSize();
hamburger.getStuffing();
hamburger.calculatePrice();
hamburger.calculateCalories();

console.log(hamburger)