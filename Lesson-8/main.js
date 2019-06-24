function Animal() {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this._name = name;

    this.animalFeed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var feed = this.animalFeed;

    this.animalFeed = function () {
        feed.call(this);
        console.log('Кот доволен ^_^');
        return this;
    }

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    }
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.animalFeed());

console.log(barsik.dailyNorm(600));
console.log(barsik.animalFeed());

console.log(barsik.dailyNorm(250));
console.log(barsik.animalFeed());

barsik.stroke().animalFeed().stroke().animalFeed();

barsik = null;