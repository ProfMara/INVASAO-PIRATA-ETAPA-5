const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, cenario, barco;
var canvas, angle, torreIMG, torre, solo, canhao;
var balas = [];
var barcos = [];

function preload() {
    cenario = loadImage("./assets/background.gif");
    torreIMG = loadImage("./assets/tower.png");
}

function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    angleMode(DEGREES)
    angle = 15

    solo = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
    World.add(world, solo);

    torre = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
    World.add(world, torre);

    canhao = new Canhao(180, 110, 130, 100, angle);

}

function draw() {
    background(189);
    image(cenario, 0, 0, width, height);

    Engine.update(engine);


    rect(solo.position.x, solo.position.y, width * 2, 1);


    push();
    imageMode(CENTER);
    image(torreIMG, torre.position.x, torre.position.y, 160, 310);
    pop();

    for (var i = 0; i < balas.length; i++) {
        mostrarBalas(balas[i], i);

    }

    canhao.display();
    mostrarBarco();
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        var bala = new BalaCanhao(canhao.x, canhao.y);
        bala.trajectory = [];
        Matter.Body.setAngle(bala.body, canhao.angle);
        balas.push(bala);
    }
}

function mostrarBalas(bala, index) {
    if (bala) {
        bala.display();
    }
}

function keyReleased() {
    if (keyCode === DOWN_ARROW) {
        balas[balas.length - 1].atirar();
    }
}

//função mostrar barco
function mostrarBarco() {
    if (barcos.length > 0) {
        if (
            barcos[barcos.length - 1] === undefined ||
            barcos[barcos.length - 1].body.position.x < width - 300
        ) {

            var barco = new Barco(width, height - 100, 170, 170, -70);
            barcos.push(barco);
        }

        for (var i = 0; i < barcos.length; i++) {
            if (barcos[i]) {
                Matter.Body.setVelocity(barcos[i].body, {
                    x: -0.9,
                    y: 0
                });

                barcos[i].display();
            }
        }
    } else {
        var barco = new Barco(width, height - 60, 170, 170, -70);
        barcos.push(barco);
    }
}

//função colidir com navio
function colidiuComNavio(index) {

    //for que percorre a matriz de barcos 

    //if que verifica se a bala ou se o barco é diferente de indefinido

    //variável que guarda o resultado da função Matter.SAT.collides

    // if que verifica se a colisao.collided é verdadeira

    //se sim, removeremos o barco

    //e removeremos a bala de canhão



}