let leaves = 0;
let waterMultiplier = 5;
const baseClickCollect = 5;
const priceIncrease = 100;
let sunMultiplier = 5;
const baseAutoCollect = 2;

window.onload = function () {
  updateUi();
  setInterval(autoLeaves, 3000);
}

let clickUpgrades = {
  water: {
    price: 100,
    quantity: 0,
    multiplier: 1
  }
};

let automaticUpgrades = {
  sun: {
    price: 600,
    quantity: 0,
    multiplier: 20
  }
};


function getLeaves() {
  leaves += baseClickCollect * clickUpgrades.water.multiplier;
  updateUi();
}

function autoLeaves() {
  leaves += baseAutoCollect * automaticUpgrades.sun.multiplier;
  updateUi();
}

function updateUi() {
  let leafElm = document.getElementById('leafCount')
  if (leafElm != null) {
    leafElm.innerHTML = `Leaf Count: ${leaves}`
  }

  let waterCountElm = document.getElementById('waterCount');
  waterCountElm.innerHTML = `water count: ${clickUpgrades.water.quantity}`;

  let waterPerClickElm = document.getElementById('waterPerClick');
  waterPerClickElm.innerHTML = (baseClickCollect * clickUpgrades.water.multiplier).toString();

  let waterPriceElm = document.getElementById('waterPrice');
  waterPriceElm.innerHTML = `water price: ${clickUpgrades.water.price}`;


  let sunCountElm = document.getElementById('sunCount');
  sunCountElm.innerHTML = `sun count: ${automaticUpgrades.sun.quantity}`;

  let sunPerClickElm = document.getElementById('sunPerClick');
  sunPerClickElm.innerHTML = (baseAutoCollect * automaticUpgrades.sun.multiplier).toString();

  let sunPriceElm = document.getElementById('sunPrice');
  sunPriceElm.innerHTML = `sun price: ${automaticUpgrades.sun.price}`;

}

function clickUpgrade() {
  //check to see if resource is grader than or equal to price. 
  if (leaves >= clickUpgrades.water.price) {
    // increase upgrade quantity by 1
    clickUpgrades.water.quantity++;
    // increase upgrade multiplier
    clickUpgrades.water.multiplier += waterMultiplier;
    // increase water multiplier amount by 1
    waterMultiplier++;
    // subtracting the price  from resources 
    leaves -= clickUpgrades.water.price;
    // increase upgrade price after purchases
    clickUpgrades.water.price += priceIncrease;
    updateUi();
  }
}

function autoUpgrade() {
  const sun = automaticUpgrades.sun;
  if (leaves >= sun.price) {
    sun.quantity++;
    sun.multiplier += sunMultiplier;
    sunMultiplier++;
    leaves -= sun.price;
    sun.price += priceIncrease;
    updateUi();
  }
}

