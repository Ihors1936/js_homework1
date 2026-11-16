var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  setService: function (name, price) {
    this[name] = price;
  },

  getService: function (name) {
    return this[name];
  }
};

services.setService("укладка", "50 грн");
services.setService("стрижка", "70 грн");

console.log(services.getService("укладка"));
console.log(services.getService("стрижка"));