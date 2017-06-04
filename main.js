var gusanito, manzana, grid;

function setup() {
    createCanvas(600, 400);
    frameRate(10);
    grid     = 10;
    gusanito = new Worm;
    manzana  = new Apple;
    console.log(gusanito);
    console.log(manzana);
}

function draw() {
    background('black');
    manzana.show();
    gusanito.update();
    gusanito.show();

    if (gusanito.eat(manzana)) {
        manzana.randLocation();
        gusanito.history++;
    }
}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            gusanito.move(0, -1);
            break;
        case DOWN_ARROW:
            gusanito.move(0, 1);
            break;
        case LEFT_ARROW:
            gusanito.move(-1, 0);
            break;
        case RIGHT_ARROW:
            gusanito.move(1, 0);
            break;
        default:
            console.log('Esa tecla ya te dije que no');
    }
}

