function Animal(name) {
    this._name = name;
    this._foodAmount = 50;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + 'гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    this._foodAmount = amount;
    if (!arguments.length) {
        return Animal.prototype._formatFoodAmount();
    }

    if (this._foodAmount < 50 || this._foodAmount > 500) {
        return 'Недопустимое количество корма.';
    }
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + Animal.prototype.dailyNorm() + ' корма.');
};

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype.feed = function() {
    Animal.prototype.feed();
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
};

var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().stroke().feed());

barsik = null;