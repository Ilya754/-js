let prices = [];
for (let i = 0; i < 15; i++) {
    prices.push(Math.floor(Math.random() * 281) + 20);
}
console.log("Цены:", prices);
let minPrice = prices[0];
let minIndex = 0;
for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
        minPrice = prices[i];
        minIndex = i;
    }
}
console.log("Самый дешевый товар:", minPrice, "порядковый номер:", minIndex + 1);