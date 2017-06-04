class Vec {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class Rect {
    constructor(color) {
        this.color = color;
        this.pos   = new Vec;
        this.size  = new Vec(10, 10);
    }
    
    show() {
        fill(this.color);
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }

    randLocation() {
        // quiero que la manzana aparezca dentro de los limites de la pantalla
        this.pos.x = floor(random(width));
        this.pos.y = floor(random(height));
    }
}
    
class Worm extends Rect {
    constructor(color = 'green') {
        super('green');
        super.randLocation();
        this.speed   = new Vec(1, 0);
        this.history = 0;
        this.tail    = [];
    }

    update() {
        if (this.history === this.tail.length) {
            for (var i = 0; i < this.tail.length-1; i++) {
                this.tail[i] = this.tail[i+1];
            }
        }
        if (this.history >= 1) {
            this.tail[this.history-1] = new Vec(this.pos.x, this.pos.y);
        }

        this.pos.x += this.speed.x * grid;
        this.pos.y += this.speed.y * grid;

        this.pos.x = constrain(this.pos.x, 0, width  - grid);
        this.pos.y = constrain(this.pos.y, 0, height - grid);
    }

    show() {
        fill(this.color);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, this.size.x, this.size.y);
        }
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }

    move(x, y) {
        this.speed.x = x;
        this.speed.y = y;
    }

    eat(apple) {
        let distance = dist(this.pos.x, this.pos.y, apple.pos.x, apple.pos.y);
        if (distance < 10) {
            console.log('colision');
            return true;
        } else {
            return false;
        }
    }
}

class Apple extends Rect {
    constructor() {
        super('red');
        super.randLocation();
    }
}
