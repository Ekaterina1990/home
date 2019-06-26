function Animal() {
    var foodAmount = 50;
    var self = this;

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    }

    self.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    self.name = name;

    self.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = self.feed;

    this.feed = function () {
        animalFeed;
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