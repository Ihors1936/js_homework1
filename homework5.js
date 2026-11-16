var services = {
  list: {
    "стрижка": 60,
    "гоління": 80,
    "Миття голови": 100
  },

  setService: function (name, price) {
    this.list[name] = price;
  },

  getService: function (name) {
    return this.list[name];
  },

  price: function () {
    var total = 0;
    var prices = Object.values(this.list);
    for (var i = 0; i < prices.length; i++) {
      total += prices[i];
    }
    return total;
  },

  minPrice: function () {
    return Math.min(...Object.values(this.list));
  },

  maxPrice: function () {
    return Math.max(...Object.values(this.list));
  }
};

services.setService("укладка", 50);
services.setService("стрижка", 70);

console.log(services.getService("укладка"));
console.log(services.getService("стрижка"));
console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());