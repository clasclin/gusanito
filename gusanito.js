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
        this.pos.x = floor(random(width)  - this.size.x);
        this.pos.y = floor(random(height) - this.size.y);
    }
}
    
class Worm extends Rect {
    constructor(color = 'green') {
        super('green');
        super.randLocation();
        this.speed = new Vec(1, 0);
    }

    update() {
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;

        this.pos.x = constrain(this.pos.x, 0, width  - this.size.x);
        this.pos.y = constrain(this.pos.y, 0, height - this.size.y);
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
