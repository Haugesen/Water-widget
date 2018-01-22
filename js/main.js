var addDrink = document.querySelector('#drink');

addDrink.addEventListener('click', addWater);

var percent = 0;
var waterUnit = 10;

var waterPercent = document.querySelector('h1');

waterPercent.innerHTML = percent + '&#37;';

function addWater(event) {

    percent += waterUnit;

    if (percent <= 100) {
        waterPercent.innerHTML = percent + '&#37;';
    }
    else if(percent = 100){
        resetWater();
    }
}

function resetWater(){
    percent = 0;
    waterPercent.innerHTML = '0' + '&#37;';
};

var waterLevel = document.querySelector('#water-level');

addDrink.addEventListener('click', raiseWater);

function raiseWater(event) {

    var yPos = 660 - (percent * 6.6);
    if (yPos <= 0) {
        yPos = 0;
    }

    waterLevel.style.cssText = 'transform: translateY(' + yPos + 'px)';
}
