let tela = document.getElementById('tela')

let ctx = tela.getContext('2d')


//-------linha larguga x altura----

/*ctx.moveTo(0,0)
ctx.lineTo(250, 250)
ctx.stroke()
ctx.lineTo(500, 0)
*/

//--------retângulo----------   

/*ctx.fillStyle = 'blue'
ctx.fillRect(10,10,100,200)

ctx.strokeStyle = 'red'
ctx.strokeRect(10,10,100,200)*/

//-------- início e fim do caminho---------

/*ctx.beginPath();

ctx.lineWidth = 4;
ctx.strokeStyle = 'red'
ctx.moveTo(10,10);
ctx.lineTo(400,300)
ctx.strokeStyle();


ctx.beginPath();

ctx.lineWidth = 7;
ctx.strokeStyle ="green"
ctx.moveTo(50, 10)
ctx.lineTo(200, 300)
*/

//---------Criando circulo-----------

/*let x = 250;
let y = 250;
let raio = 100;

let inicio = 0;
let fim = 2 * Math.PI;
ctx.beginPath();

ctx.strokeStyle = 'red';
ctx.arc(x, y , raio , inicio, fim);

ctx.fill();
ctx.stroke();
*/

//---------animação----------

/*function drawCircle(c) {

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'blue';
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim)

    ctx.fill();
    ctx.stroke();

}

setInterval(function () {
    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.3;
        circle.x += 3;
    }
    drawCircle(circle);

}, 40)
*/

//----------Imagem-------------------


let img = new Image();
img.src ="imagens/redhot1.jpg"

img.onload = desenharImg;

function desenharImg(){
    ctx.drawImage(this, 20 ,20, 50, 100);
}






