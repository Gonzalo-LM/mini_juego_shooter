var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "#EAE9E7";
pincel.fillRect(0, 0, 1000, 600);
var tamanioCirculo = 10;
var movX = 500;
var movY = 0;
var mov = 20;
pantalla.focus();

var puntero = document.querySelector("canvas");
puntero.style.cursor = "default";

/*---------------Ajustando tamaño---------------*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------Funciones de limpiar y random---------------*/

function limpiarPantalla(){
    pincel.clearRect(0, 0, 1000, 600);
}

function limpiarBala() {
    pincel.clearRect(x, y, 5, 10);
    pincel.fillStyle = "#EAE9E7";
    pincel.fillRect(x - 3, y, 8, 600);
}

function posicionRandom(maximo){
    return Math.floor(Math.random() * maximo)
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------Funciones de eliminadores---------------*/
/*---------------------------------------------aqui hay if---------------------------------------------*/
    function eliminador(){
        if(objetivo == "normal"){
            eliminadorNormal();
        }else if(objetivo == "navidad"){
            eliminadorNavidad();
        }else if(objetivo == "halloween"){
            eliminadorHalloween();
        }else if(objetivo == "san_valentin"){
            eliminadorSanValentin();
        }else if(objetivo == "pascua"){
            eliminadorNormal();
        }
    }

/*---------------eliminador normal---------------*/
    function eliminadorNormal(){
        //brazo
        pincel.fillStyle = "#F5D8D8";
        pincel.fillRect(movX - 3, movY + 7, 7, 14);
        pincel.fillRect(movX - 20, movY + 15, 7, 14);
        pincel.fillStyle = "blue";
        pincel.fillRect(movX - 3, movY + 15, 7, 6);
        pincel.fillRect(movX - 20, movY + 15, 7, 6);

        //arma
        pincel.fillStyle = "black";
        pincel.fillRect(movX - 1, movY, 5, 10);

        //cuerpo
        pincel.fillStyle = "blue";
        pincel.fillRect(movX - 15, movY + 15, 16, 18);

        //rango
        pincel.fillStyle = "gold";
        pincel.fillRect(movX - 17, movY + 15, 4, 2);
        pincel.fillRect(movX - 2, movY + 17, 4, 3);

        //piernas
        pincel.fillStyle = "blue";
        pincel.fillRect(movX - 15, movY + 31, 7.5, 14);
        pincel.fillRect(movX - 6.5, movY + 31, 7.5, 14);

        //zapatos
        pincel.fillStyle = "black";
        pincel.fillRect(movX - 15, movY + 43, 7.5, 4);
        pincel.fillRect(movX - 6.5, movY + 43, 7.5, 4);

        //correa
        pincel.fillStyle = "black";
        pincel.fillRect(movX - 15, movY + 28, 16, 2);

        //estuche de arma
        pincel.fillStyle = "black";
        pincel.fillRect(movX - 1, movY + 26, 3, 6);

        //cabeza
        pincel.fillStyle = "black";
        pincel.fillRect(movX - 12, movY + 8, 10, 10);
    }

/*---------------eliminador navidad---------------*/
    function eliminadorNavidad(){
        //arma
        pincel.fillStyle = "red";
        pincel.fillRect(movX - 1, movY, 4, 2);
        pincel.fillRect(movX - 1, movY + 4, 4, 2);
        pincel.fillRect(movX - 1, movY + 8, 4, 2);
        pincel.fillRect(movX - 1, movY + 12, 4, 2);

        pincel.fillStyle = "white";
        pincel.fillRect(movX - 1, movY + 2, 4, 2);
        pincel.fillRect(movX - 1, movY + 6, 4, 2);
        pincel.fillRect(movX - 1, movY + 10, 4, 2);

        //brazo
        pincel.fillStyle = "green";
        pincel.fillRect(movX - 5, movY + 9, 10, 14);
        pincel.fillRect(movX - 20, movY + 15, 10, 14);
        pincel.fillStyle = "red";
        pincel.fillRect(movX - 5, movY + 12, 10, 11);
        pincel.fillRect(movX - 20, movY + 15, 10, 11);
        pincel.fillStyle = "white";
        pincel.fillRect(movX - 5, movY + 11, 10, 1);
        pincel.fillRect(movX - 20, movY + 26, 10, 1);

        //cuerpo
        pincel.fillStyle = "red";
        pincel.fillRect(movX - 15, movY + 15, 16, 18);

        //piernas
        pincel.fillStyle = "green";
        pincel.fillRect(movX - 15, movY + 31, 7.5, 14);
        pincel.fillRect(movX - 6.5, movY + 31, 7.5, 14);

        //zapatos
        pincel.fillStyle = "red";
        pincel.fillRect(movX - 15, movY + 43, 7.5, 4);
        pincel.fillRect(movX - 6.5, movY + 43, 7.5, 4);
        pincel.fillStyle = "white";
        pincel.fillRect(movX - 15, movY + 43, 7.5, 1);
        pincel.fillRect(movX - 6.5, movY + 43, 7.5, 1);

        //correa
        pincel.fillStyle = "black";
        pincel.fillRect(movX - 15, movY + 26, 16, 2);

        //cabeza
        pincel.fillStyle = "green";
        pincel.fillRect(movX - 12, movY + 8, 10, 10);

        //gorro
        pincel.fillStyle = "white";
        pincel.fillRect(movX - 12, movY + 8, 10, 9);
        pincel.fillStyle = "red";
        pincel.fillRect(movX - 11, movY + 8, 8, 8);
        pincel.fillStyle = "white";
        pincel.beginPath();
        pincel.arc(movX - 7, movY + 13, 2, 0, 2 * 3.14);
        pincel.fill()
    }

/*---------------eliminador halloween---------------*/

    function eliminadorHalloween(){
        //arma
        pincel.fillStyle = "grey";
        pincel.fillRect(movX - 1, movY, 4, 14);

        //brazo
        pincel.fillStyle = "#F5D8D8";
        pincel.fillRect(movX - 5, movY + 9, 10, 14);
        pincel.fillStyle = "#3E3E3D";
        pincel.fillRect(movX - 5, movY + 12, 10, 11);
        pincel.fillRect(movX - 18, movY + 15, 6, 7);
        pincel.fillStyle = "white";
        pincel.fillRect(movX - 5, movY + 11, 10, 1);

        //escoba
        pincel.fillStyle = "brown";
        pincel.fillRect(movX - 9, movY, 4, 40);

        for(var pelos = 0; pelos < 12; pelos++){
            pincel.fillStyle = "#F9BC5F";
            pincel.fillRect(movX - 13 + pelos, movY + 40, 1, 6);
        }

        //cuerpo
        pincel.fillStyle = "#3E3E3D";
        pincel.fillRect(movX - 15, movY + 15, 16, 18);

        //cabeza
        pincel.fillStyle = "#F5D8D8";
        pincel.fillRect(movX - 12, movY + 8, 10, 10);

        //gorro
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.arc(movX - 7, movY + 14, 8, 0, 2 * 3.14);
        pincel.fill();
        pincel.moveTo(movX - 12, movY + 14);
        pincel.lineTo(movX - 7, movY + 28);
        pincel.lineTo(movX - 2, movY + 14);
        pincel.fill();
    }

/*---------------eliminador San Valentin---------------*/

    function eliminadorSanValentin(){
        //flecha
        pincel.fillStyle = "yellow";
        pincel.fillRect(movX - 1.5, movY, 3, 18);
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.arc(movX - 2, movY + 2, 2, 0, 2 * 3.14);
        pincel.fill();
        pincel.beginPath();
        pincel.arc(movX + 2, movY + 2, 2, 0, 2 * 3.14);
        pincel.fill();
        pincel.beginPath();
        pincel.moveTo(movX, movY - 4);
        pincel.lineTo(movX - 4.5, movY + 2);
        pincel.lineTo(movX + 4.5, movY + 2);
        pincel.fill();

        //arma
        pincel.strokeStyle = "red";
        pincel.beginPath();
        pincel.ellipse(movX, movY + 14, 4, 14, 4.5, - 0.5, 0.5 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(movX, movY + 13, 4, 9, 4.5, - 0.5, 1.5 * 3.14);
        pincel.stroke();

        //brazos
        //izquierdo
        pincel.fillStyle = "#F58A8A";
        pincel.fillRect(movX - 2, movY + 8, 4, 4);
        pincel.fillRect(movX - 14, movY + 22, 4, 4);
        pincel.beginPath();
        pincel.ellipse(movX - 12, movY + 24, 3, 20, 3.8, 0, 1 * 3.14);
        pincel.fill();
        //derecho
        pincel.fillRect(movX + 2, movY + 22, 4, 4);
        pincel.beginPath();
        pincel.ellipse(movX + 4, movY + 17, 2, 8, 0, 0, 1 * 3.14);
        pincel.fill();

        //cuerpo
        pincel.fillStyle = "#F58A8A";
        pincel.fillRect(movX - 10, movY + 22, 12, 16);

        //piernas
        pincel.fillStyle = "#F58A8A";
        pincel.fillRect(movX - 10, movY + 38, 5.5, 8);
        pincel.fillRect(movX - 3.5, movY + 38, 5.5, 8);
        //pies
        pincel.fillStyle = "white";
        pincel.fillRect(movX - 10, movY + 46, 5.5, 1);
        pincel.fillRect(movX - 3.5, movY + 46, 5.5, 1);
        pincel.fillStyle = "black";
        pincel.fillRect(movX - 8, movY + 46, 1.5, 1);
        pincel.fillRect(movX - 1.5, movY + 46, 1.5, 1);

        //cabeza
        pincel.fillStyle = "#F58A8A";
        pincel.fillRect(movX - 10, movY + 13, 12, 8);
        pincel.fillRect(movX - 6, movY + 21, 4, 2);

        //cuernos
        pincel.fillStyle = "red";
        pincel.fillRect(movX - 8, movY + 14, 3, 3);
        pincel.fillRect(movX - 3, movY + 14, 3, 3);
        pincel.fillRect(movX - 7, movY + 17, 1, 1.5);
        pincel.fillRect(movX - 2, movY + 17, 1, 1.5);

        //trapo
        pincel.fillStyle = "black";
        pincel.fillRect(movX - 10, movY + 32, 12, 4);
        pincel.fillRect(movX - 6, movY + 36, 4, 2);

        //alas
        //izquierda
        pincel.strokeStyle = "red";
        pincel.beginPath();
        pincel.ellipse(movX - 15, movY + 24, 4, 10, 1.8, 2, 1.5 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(movX - 27, movY + 29, 4, 10, 0.5, 2, 1.5 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(movX - 27, movY + 37, 4, 6, 1.3, 2, 1.5 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(movX - 17, movY + 37, 4, 4, 1.4, 2, 1.5 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(movX - 9, movY + 35, 2, 4, 1, 2, 1.5 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(movX - 5, movY + 29, 2, 4, 6, 2, 1.5 * 3.14);
        pincel.stroke();
        //derecha
        pincel.strokeStyle = "red"; //60-27
        pincel.beginPath();
        pincel.ellipse(movX + 8, movY + 25, 4, 10, 1.3, 2, 1.5 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(movX + 20, movY + 29, 4, 10, 2.6, 2, 1.5 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(movX + 20, movY + 37, 4, 6, 1.5, 2, 1.5 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(movX + 10, movY + 37, 4, 4, 1.3, 2, 1.5 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(movX + 2, movY + 35, 2, 4, 2, 2, 1.5 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(movX - 1, movY + 28, 2, 4, 3.2, 2, 1.5 * 3.14);
        pincel.stroke();

        //pintando alas
        //izquierda
        pincel.fillStyle = "red";
        pincel.beginPath();
        pincel.ellipse(movX + 8, movY + 25, 4, 10, 1.3, 2, 1.5 * 3.14);
        pincel.fill();
        pincel.beginPath();
        pincel.ellipse(movX + 20, movY + 29, 4, 10, 2.6, 2, 1.5 * 3.14);
        pincel.fill();
        pincel.fillRect(movX - 27, movY + 21, 18.5, 10);
        pincel.fillRect(movX - 30, movY + 25, 23, 8);
        pincel.fillRect(movX - 31, movY + 32.5, 2, 1);
        pincel.fillRect(movX - 21.5, movY + 29, 2, 5);
        pincel.fillRect(movX - 14, movY + 29, 3, 6);
        //derecha
        pincel.fillStyle = "red";
        pincel.beginPath();
        pincel.ellipse(movX - 15, movY + 24, 4, 10, 1.8, 2, 1.5 * 3.14);
        pincel.fill();
        pincel.beginPath();
        pincel.ellipse(movX - 27, movY + 29, 4, 10, 0.5, 2, 1.5 * 3.14);
        pincel.fill();
        pincel.fillRect(movX + 1.5, movY + 22, 18.5, 10);
        pincel.fillRect(movX + 1.5, movY + 25, 21.5, 8);
        pincel.fillRect(movX + 13, movY + 33, 3, 2);
        pincel.fillRect(movX + 4.5, movY + 33, 2.5, 2);
    }


/*---------------posicion y movimiento del eliminador---------------*/
/*---------------------------------------------aqui hay if---------------------------------------------*/
    function posicionPantalla(){
        if(objetivo == "normal"){
            colorPosicionPantalla("grey");
        }else if(objetivo == "navidad"){
            colorPosicionPantalla("lightgrey");
        }else if(objetivo == "halloween"){
            colorPosicionPantalla("lightgreen");
        }else if(objetivo == "san_valentin"){
            colorPosicionPantalla("lightblue");
        }else if(objetivo == "pascua"){
            colorPosicionPantalla("white");
        }
    }

    function colorPosicionPantalla(posicionC){
        pincel.fillStyle = posicionC;
        pincel.fillRect(0, 510, 1000, 90);
    }

    function posicion(){
        posicionPantalla();

        if(movX <= 17){
            movX = 17;
        }
        if(movY <= 520){
            movY = 520;
        }
        if(movX >= 993){
            movX = 993;
        }
        if(movY >= 550){
            movY = 550;
        }
        window.requestAnimationFrame(posicion);
        eliminador();
    }

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------Funciones de objetivos---------------*/

/*---------------Objetivo Normal---------------*/

function diseniarBlanco(xdb, ydb, radio, color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(xdb, ydb, radio, 0, 2 * 3.14);
    pincel.fill();
}

function diseniarObjetivo(xdo, ydo){
        diseniarBlanco(xdo, ydo, tamanioCirculo + 20, "red");
        diseniarBlanco(xdo, ydo, tamanioCirculo + 10, "white");
        diseniarBlanco(xdo, ydo, tamanioCirculo, "red");
}

/*---------------Objetivo Navidad---------------*/

function arbol(xar, yar){
        //tronco
        pincel.fillStyle = "brown";
        pincel.fillRect(xar - 2.5, yar + 20, 5, 20);

        //ramas
        //ramas
        pincel.fillStyle = "green";
        pincel.beginPath();
        pincel.moveTo(xar, yar);
        pincel.lineTo(xar - 10, yar + 10);
        pincel.lineTo(xar - 5, yar + 10);
        pincel.lineTo(xar - 15, yar + 20);
        pincel.lineTo(xar - 10, yar + 20);
        pincel.lineTo(xar - 20, yar + 30);
        pincel.lineTo(xar + 20, yar + 30);
        pincel.lineTo(xar + 10, yar + 20);
        pincel.lineTo(xar + 15, yar + 20);
        pincel.lineTo(xar + 5, yar + 10);
        pincel.lineTo(xar + 10, yar + 10);
        pincel.fill();

        //bolas
        pincel.fillStyle = "red";
        pincel.beginPath();
        pincel.arc(xar - 5, yar + 10, 3, 0, 2 * 3.14);
        pincel.fill();
        pincel.beginPath();
        pincel.arc(xar + 5, yar + 10, 3, 0, 2 * 3.14);
        pincel.fill();

        pincel.beginPath();
        pincel.arc(xar - 10, yar + 20, 3, 0, 2 * 3.14);
        pincel.fill();
        pincel.beginPath();
        pincel.arc(xar + 10, yar + 20, 3, 0, 2 * 3.14);
        pincel.fill();

        pincel.beginPath();
        pincel.arc(xar - 15, yar + 30, 3, 0, 2 * 3.14);
        pincel.fill();
        pincel.beginPath();
        pincel.arc(xar + 15, yar + 30, 3, 0, 2 * 3.14);
        pincel.fill();

        pincel.fillStyle = "orange";
        pincel.beginPath();
        pincel.arc(xar, yar + 20, 3, 0, 2 * 3.14);
        pincel.fill();
        pincel.beginPath();
        pincel.arc(xar - 5, yar + 30, 3, 0, 2 * 3.14);
        pincel.fill();
        pincel.beginPath();
        pincel.arc(xar + 5, yar + 30, 3, 0, 2 * 3.14);
        pincel.fill();

        //estrella
        pincel.fillStyle = "yellow";
        pincel.beginPath();
        pincel.moveTo(xar, yar - 8);
        pincel.lineTo(xar - 5, yar + 2);
        pincel.lineTo(xar, yar);
        pincel.fill();
        pincel.beginPath();
        pincel.moveTo(xar, yar - 8);
        pincel.lineTo(xar + 5, yar + 2);
        pincel.lineTo(xar, yar);
        pincel.fill();
        pincel.beginPath();
        pincel.moveTo(xar - 5, yar - 5);
        pincel.lineTo(xar, yar + 2);
        pincel.lineTo(xar + 5, yar - 5);
        pincel.fill();
}

/*---------------Objetivo Halloween---------------*/

function calabaza(xcal, ycal){
        //calabaza
        pincel.fillStyle = "orange";
        pincel.beginPath();
        pincel.ellipse(xcal - 10, ycal, 15, 20, 0, 0, 2 * 3.14);
        pincel.fill();
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(xcal + 10, ycal, 15, 20, 0, 0, 2 * 3.14);
        pincel.fill();
        pincel.stroke();
        pincel.fillStyle = "green";
        pincel.beginPath();
        pincel.ellipse(xcal, ycal - 20, 10, 5, 0, 0, 2 * 3.14);
        pincel.fill();
        pincel.fillStyle = "orange";
        pincel.beginPath();
        pincel.ellipse(xcal - 7, ycal, 10, 20, 0, 0, 2 * 3.14);
        pincel.fill();
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(xcal + 7, ycal, 10, 20, 0, 0, 2 * 3.14);
        pincel.fill();
        pincel.stroke();
        pincel.beginPath();
        pincel.ellipse(xcal, ycal, 10, 20, 0, 0, 2 * 3.14);
        pincel.fill();
        pincel.stroke();

        pincel.fillStyle = "green";
        pincel.fillRect(xcal - 2.5, ycal - 30, 5, 8);

        //cara
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.moveTo(xcal - 7, ycal - 10);
        pincel.lineTo(xcal - 10, ycal + 2);
        pincel.lineTo(xcal, ycal);
        pincel.fill();
        pincel.beginPath();
        pincel.moveTo(xcal + 7, ycal - 10);
        pincel.lineTo(xcal + 10, ycal + 2);
        pincel.lineTo(xcal, ycal);
        pincel.fill();
        pincel.beginPath();
        pincel.moveTo(xcal - 14, ycal + 2);
        pincel.lineTo(xcal - 12, ycal + 5);
        pincel.lineTo(xcal - 10, ycal + 7);
        pincel.lineTo(xcal - 8, ycal + 5);
        pincel.lineTo(xcal - 6, ycal + 7);
        pincel.lineTo(xcal - 4, ycal + 5);
        pincel.lineTo(xcal - 2, ycal + 7);
        pincel.lineTo(xcal, ycal + 5);
        pincel.lineTo(xcal + 2, ycal + 7);
        pincel.lineTo(xcal + 4, ycal + 5);
        pincel.lineTo(xcal + 6, ycal + 7);
        pincel.lineTo(xcal + 8, ycal + 5);
        pincel.lineTo(xcal + 10, ycal + 7);
        pincel.lineTo(xcal + 12, ycal + 5);
        pincel.lineTo(xcal + 14, ycal + 2);

        pincel.lineTo(xcal + 10, ycal + 12);
        pincel.lineTo(xcal + 8, ycal + 10);
        pincel.lineTo(xcal + 6, ycal + 12);
        pincel.lineTo(xcal + 4, ycal + 10);
        pincel.lineTo(xcal + 2, ycal + 12);
        pincel.lineTo(xcal, ycal + 10);
        pincel.lineTo(xcal -2, ycal + 12);
        pincel.lineTo(xcal - 4, ycal + 10);
        pincel.lineTo(xcal - 6, ycal + 12);
        pincel.lineTo(xcal - 8, ycal + 10);
        pincel.lineTo(xcal - 10, ycal + 12);
        pincel.fill();
}

/*---------------Objetivo San Valentin---------------*/

function corazon(xcor, ycor){
        pincel.fillStyle = "red";
        pincel.beginPath();
        pincel.arc(xcor - 10, ycor + 10, 15, 0, 2 * 3.14);
        pincel.fill();
        pincel.beginPath();
        pincel.arc(xcor + 10, ycor + 10, 15, 0, 2 * 3.14);
        pincel.fill();
        pincel.fillStyle = "red";
        pincel.beginPath();
        pincel.moveTo(xcor - 23.5, ycor + 17);
        pincel.lineTo(xcor, ycor + 45);
        pincel.lineTo(xcor + 23.5, ycor + 17);
        pincel.fill();
}

/*---------------Objetivo Pascua---------------*/
function pascua(xp, yp){
    pincel.fillStyle = "grey";
    pincel.strokeStyle = "black";
    //oreja derecha
    pincel.beginPath();
    pincel.ellipse(xp - 4, yp - 7, 4, 14, 3.2, 0, 1 * 3.14);
    pincel.fill();
    pincel.stroke();
    //oreja izquierda
    pincel.beginPath();
    pincel.ellipse(xp + 4, yp - 7, 4, 14, 3.2, 0, 1 * 3.14);
    pincel.fill();
    pincel.stroke();
    //pintando oreja derecha
    pincel.fillStyle = "pink";
    pincel.beginPath();
    pincel.ellipse(xp - 4, yp - 9, 2, 6, 3.2, 0, 1 * 3.14);
    pincel.fill();
    //pintando oreja izquierda
    pincel.fillStyle = "pink";
    pincel.beginPath();
    pincel.ellipse(xp + 4, yp - 9, 2, 6, 3.2, 0, 1 * 3.14);
    pincel.fill();
    //cuerpo
    pincel.fillStyle = "grey";
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.arc(xp, yp + 15, 15, 0, 2 * 3.14);
    pincel.fill();
    pincel.stroke();
    //pintando pansa
    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.ellipse(xp, yp + 30, 8, 14, 3.2, 0, 1 * 3.14);
    pincel.fill();
    //cabeza
    pincel.fillStyle = "grey";
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.arc(xp, yp, 10, 0, 2 * 3.14);
    pincel.fill();
    pincel.stroke();
    //pata derecha
    //arriba
    pincel.beginPath();
    pincel.ellipse(xp - 14, yp + 14, 3, 10, 4.7, 0.3, 1 * 3.14);
    pincel.fill();
    pincel.stroke();
    //abajo
    pincel.beginPath();
    pincel.ellipse(xp - 2, yp + 27, 3, 13, 1.5, 0, 0.8 * 3.14);
    pincel.fill();
    pincel.stroke();
    //pata izquierda
    //arriba
    pincel.beginPath();
    pincel.ellipse(xp + 14, yp + 14, 3, 10, 1.5, 0, 0.9 * 3.14);
    pincel.fill();
    pincel.stroke();
    //abajo
    pincel.beginPath();
    pincel.ellipse(xp + 2, yp + 27, 3, 13, 4.7, 0.8, 1 * 3.14);
    pincel.fill();
    pincel.stroke();
    //cara
    //ojos
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(xp - 4, yp - 2, 1.5, 0, 2 * 3.14);
    pincel.fill();
    pincel.beginPath();
    pincel.arc(xp + 4, yp - 2, 1.5, 0, 2 * 3.14);
    pincel.fill();
    //nariz
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(xp, yp + 2, 1, 0, 2 * 3.14);
    pincel.fill();
    //boca
    pincel.beginPath();
    pincel.ellipse(xp - 2, yp + 5, 2, 1, 0, 0, 1 * 3.14);
    pincel.stroke();
    pincel.beginPath();
    pincel.ellipse(xp + 2, yp + 5, 2, 1, 0, 0, 1 * 3.14);
    pincel.stroke();
    //bigotes
    pincel.fillRect(xp - 13, yp, 8, 0.5);
    pincel.fillRect(xp - 13, yp + 1.5, 8, 0.5);
    pincel.fillRect(xp - 13, yp + 3, 8, 0.5);
    pincel.fillRect(xp + 5, yp, 8, 0.5);
    pincel.fillRect(xp + 5, yp + 1.5, 8, 0.5);
    pincel.fillRect(xp + 5, yp + 3, 8, 0.5);
    //canasta
    pincel.strokeStyle = "orange";
    pincel.beginPath();
    pincel.ellipse(xp, yp + 20, 10, 8, 3.2, 0, 1 * 3.14);
    pincel.stroke();
    pincel.fillStyle = "orange";
    pincel.fillRect(xp - 12, yp + 20, 24, 8);
    pincel.fillStyle = "black";
    pincel.fillRect(xp - 12, yp + 22, 24, 0.5);
    pincel.fillRect(xp - 12, yp + 24, 24, 0.5);
    pincel.fillRect(xp - 12, yp + 26, 24, 0.5);
    //huevos
    var colores_pascua = ["red", "blue", "brown", "green", "lightblue", "pink", "lightgreen", "purple"];
    var aument = 1;
    for(var h = 0; h < 8; h++){
        pincel.fillStyle = colores_pascua[h];
        pincel.beginPath();
        pincel.ellipse(xp - 12 + aument, yp + 20, 2, 3, 3.2, 0, 1 * 3.14);
        pincel.fill();
        aument += 3;
    }
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------Actualizar pantalla---------------*/
/*---------------------------------------------aqui hay if---------------------------------------------*/
function actualizarPantalla(objetivo){
    limpiarPantalla();
    pincel.fillStyle = "#EAE9E7";
    pincel.fillRect(0, 0, 1000, 600);
    xAleatorio = posicionRandom(1000);
    yAleatorio = posicionRandom(450);
    if(objetivo == "normal"){
        diseniarObjetivo(xAleatorio, yAleatorio);
    }else if(objetivo == "navidad"){
        arbol(xAleatorio, yAleatorio);
    }else if(objetivo == "halloween"){
        calabaza(xAleatorio, yAleatorio);
    }else if(objetivo == "san_valentin"){
        corazon(xAleatorio, yAleatorio);
    }else if(objetivo == "pascua"){
        pascua(xAleatorio, yAleatorio);
    }
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------Eliminacion de objetivo---------------*/
/*---------------------------------------------aqui hay if---------------------------------------------*/
function eliminacion(){
    if(objetivo == "normal"){
        cruz(x, y - 10);
    }else if(objetivo == "navidad"){
        arbol_muerto(x, y - 10, "#EAE9E7");
    }else if(objetivo == "halloween"){
        cruz(x, y - 10);
    }else if(objetivo == "san_valentin"){
        corazonRoto(x, y - 10, "#EAE9E7");
    }else if(objetivo == "pascua"){
        cruz(x, y - 10);
    }
}

function cruz(xc, yc) {
    pincel.fillStyle = "black";
    pincel.fillRect(xc - 2.5, yc - 30, 5, 60);
    pincel.fillRect(xc - 30, yc - 2.5, 60, 5);
}

function arbol_muerto(xam, yam, cam){
    pincel.fillStyle = cam;
    pincel.beginPath();
    pincel.moveTo(xam + 10, yam);
    pincel.lineTo(xam + 5, yam + 2);
    pincel.lineTo(xam + 7, yam + 4);
    pincel.lineTo(xam + 2, yam + 6);
    pincel.lineTo(xam + 4, yam + 8);
    pincel.lineTo(xam - 1, yam + 10);
    pincel.lineTo(xam + 1, yam + 12);
    pincel.lineTo(xam - 4, yam + 14);
    pincel.lineTo(xam - 2, yam + 16);
    pincel.lineTo(xam - 7, yam + 18);
    pincel.lineTo(xam - 5, yam + 20);
    pincel.lineTo(xam - 10, yam + 22);
    pincel.lineTo(xam - 8, yam + 24);
    pincel.lineTo(xam - 13, yam + 26);
    pincel.lineTo(xam - 11, yam + 28);
    pincel.lineTo(xam - 16, yam + 30);
    pincel.lineTo(xam - 14, yam + 32);
    pincel.lineTo(xam - 19, yam + 34);
    pincel.lineTo(xam - 17, yam + 36);

    pincel.lineTo(xam - 10, yam + 33);
    pincel.lineTo(xam - 12, yam + 31);
    pincel.lineTo(xam - 7, yam + 29);
    pincel.lineTo(xam - 9, yam + 27);
    pincel.lineTo(xam - 4, yam + 25);
    pincel.lineTo(xam - 6, yam + 23);
    pincel.lineTo(xam - 1, yam + 21);
    pincel.lineTo(xam - 3, yam + 19);
    pincel.lineTo(xam + 2, yam + 17);
    pincel.lineTo(xam, yam + 15);
    pincel.lineTo(xam + 5, yam + 13);
    pincel.lineTo(xam + 3, yam + 11);
    pincel.lineTo(xam + 8, yam + 9);
    pincel.lineTo(xam + 6, yam + 7);
    pincel.lineTo(xam + 11, yam + 5);
    pincel.lineTo(xam + 9, yam + 3);
    pincel.lineTo(xam + 14, yam + 1);
    pincel.fill();

    pincel.beginPath();
    pincel.moveTo(xam - 10, yam);
    pincel.lineTo(xam - 5, yam + 2);
    pincel.lineTo(xam - 7, yam + 4);
    pincel.lineTo(xam - 2, yam + 6);
    pincel.lineTo(xam - 4, yam + 8);
    pincel.lineTo(xam + 1, yam + 10);
    pincel.lineTo(xam - 1, yam + 12);
    pincel.lineTo(xam + 4, yam + 14);
    pincel.lineTo(xam + 2, yam + 16);
    pincel.lineTo(xam + 7, yam + 18);
    pincel.lineTo(xam + 5, yam + 20);
    pincel.lineTo(xam + 10, yam + 22);
    pincel.lineTo(xam + 8, yam + 24);
    pincel.lineTo(xam + 13, yam + 26);
    pincel.lineTo(xam + 11, yam + 28);
    pincel.lineTo(xam + 16, yam + 30);
    pincel.lineTo(xam + 14, yam + 32);
    pincel.lineTo(xam + 19, yam + 34);
    pincel.lineTo(xam + 17, yam + 36);

    pincel.lineTo(xam + 10, yam + 33);
    pincel.lineTo(xam + 12, yam + 31);
    pincel.lineTo(xam + 7, yam + 29);
    pincel.lineTo(xam + 9, yam + 27);
    pincel.lineTo(xam + 4, yam + 25);
    pincel.lineTo(xam + 6, yam + 23);
    pincel.lineTo(xam + 1, yam + 21);
    pincel.lineTo(xam + 3, yam + 19);
    pincel.lineTo(xam - 2, yam + 17);
    pincel.lineTo(xam, yam + 15);
    pincel.lineTo(xam - 5, yam + 13);
    pincel.lineTo(xam - 3, yam + 11);
    pincel.lineTo(xam - 8, yam + 9);
    pincel.lineTo(xam - 6, yam + 7);
    pincel.lineTo(xam - 11, yam + 5);
    pincel.lineTo(xam - 9, yam + 3);
    pincel.lineTo(xam - 14, yam + 1);
    pincel.fill();
}

function corazonRoto(xcr, ycr, ccr){
    pincel.fillStyle = ccr;
    pincel.beginPath();
    pincel.moveTo(xcr + 1, ycr - 4);
    pincel.lineTo(xcr - 6, ycr + 2);
    pincel.lineTo(xcr + 1, ycr + 5);
    pincel.lineTo(xcr - 6, ycr + 8);
    pincel.lineTo(xcr + 1, ycr + 11);
    pincel.lineTo(xcr - 6, ycr + 14);
    pincel.lineTo(xcr + 1, ycr + 17);
    pincel.lineTo(xcr - 6, ycr + 20);
    pincel.lineTo(xcr + 1, ycr + 23);
    pincel.lineTo(xcr - 6, ycr + 26);
    pincel.lineTo(xcr + 1, ycr + 29);
    pincel.lineTo(xcr - 6, ycr + 32);
    pincel.lineTo(xcr + 1, ycr + 35);
    pincel.lineTo(xcr - 6, ycr + 38);
    pincel.lineTo(xcr + 1, ycr + 41);
    pincel.lineTo(xcr - 3, ycr + 45);
    pincel.lineTo(xcr, ycr + 45);

    pincel.lineTo(xcr + 5, ycr + 40);
    pincel.lineTo(xcr + 2, ycr + 37);
    pincel.lineTo(xcr + 8, ycr + 34);
    pincel.lineTo(xcr + 2, ycr + 31);
    pincel.lineTo(xcr + 8, ycr + 28);
    pincel.lineTo(xcr + 3, ycr + 25);
    pincel.lineTo(xcr + 9, ycr + 22);
    pincel.lineTo(xcr + 3, ycr + 19);
    pincel.lineTo(xcr + 9, ycr + 16);
    pincel.lineTo(xcr + 4, ycr + 13);
    pincel.lineTo(xcr + 10, ycr + 10);
    pincel.lineTo(xcr + 4, ycr + 7);
    pincel.lineTo(xcr + 10, ycr+ 4);
    pincel.lineTo(xcr + 4, ycr + 1);
    pincel.fill();
}

function eliminarPascua(){
    //
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------Niveles---------------*/
var nivel = document.querySelector("#nivel");

function niveles(puntos) {
    if(puntos == 10){
        nivel.value = "2";
        clearInterval(jugar);
        velocidadInicial = 1500;
        empezarJuego(objetivo, velocidadInicial);
    }else if(puntos == 20){
        nivel.value = "3";
        clearInterval(jugar);
        velocidadInicial = 1000;
        empezarJuego(objetivo, velocidadInicial);
    }else if(puntos == 30){
        nivel.value = "4";
        clearInterval(jugar);
        velocidadInicial = 800;
        empezarJuego(objetivo, velocidadInicial);
    }else if(puntos == 40){
        nivel.value = "5";
        clearInterval(jugar);
        velocidadInicial = 500;
        empezarJuego(objetivo, velocidadInicial);
    }
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------Bala---------------*/

function moverPuntero(ubicacion){
    movX = ubicacion.pageX - pantalla.offsetLeft;
    movY = ubicacion.pageY - pantalla.offsetTop;
}

function disparar(evento){
    x = evento.pageX - pantalla.offsetLeft;
    y = evento.pageY - pantalla.offsetTop;
    if(y <= 520){
        y = 520;
    }
    if(y >= 550){
        y = 550;
    }
    setInterval(Bala, 1);
}

/*---------------------------------------------aqui hay if---------------------------------------------*/
function tipoBala(){
    if(objetivo == "normal"){
        colorBala("normal");
    }else if(objetivo == "navidad"){
        colorBala("navidad");
    }else if(objetivo == "halloween"){
        colorBala("halloween");
    }else if(objetivo == "san_valentin"){
        colorBala("san_valentin");
    }else if(objetivo == "pascua"){
        colorBala("pascua");
    }
}

function colorBala(tipo){
    if(tipo == "normal"){
        pincel.fillStyle = "gold";
        pincel.fillRect(x + 2, y, 1, 1);
        pincel.fillRect(x + 1.5, y + 1, 2, 1);
        pincel.fillRect(x + 1, y + 2, 3, 1);
        pincel.fillRect(x, y + 3, 5, 7);
        pincel.fillStyle = "black";
        pincel.fillRect(x, y + 4, 5, 1);
        pincel.stroketyle = "black";
        pincel.strokeRect(x + 1, y + 4, 3, 6);
    }else if(tipo == "navidad"){
        pincel.fillStyle = "red";
        pincel.fillRect(x, y, 5, 2);
        pincel.fillRect(x, y + 4, 5, 2);
        pincel.fillRect(x, y + 8, 5, 2);
        //pincel.fillRect(x + 6, y + 6, 3, 2);
        pincel.fillStyle = "white";
        pincel.fillRect(x, y + 2, 5, 2);
        pincel.fillRect(x, y + 6, 5, 2);
        //pincel.fillRect(x + 5, y + 8, 4, 2);
    }else if(tipo == "halloween"){
        pincel.fillStyle = "green";
        pincel.fillRect(x, y, 5, 10);
    }else if(tipo == "san_valentin"){
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.arc(x - 1, y + 4, 1.5, 0, 2 * 3.14);
        pincel.fill();
        pincel.beginPath();
        pincel.arc(x + 1, y + 4, 1.5, 0, 2 * 3.14);
        pincel.fill();
        pincel.beginPath();
        pincel.moveTo(x, y);
        pincel.lineTo(x - 2, y + 3);
        pincel.lineTo(x + 2, y + 3);
        pincel.fill();
    }else if(tipo == "pascua"){
        pincel.fillStyle = "red";
        pincel.fillRect(x, y, 5, 10);
    }
}

var punto = document.querySelector("#puntos");
function Bala(){
    limpiarBala();
    tipoBala();
    if ((x < xAleatorio + tamanioCirculo) &&
        (x > xAleatorio - tamanioCirculo) &&
        (y < yAleatorio + tamanioCirculo) &&
        (y > yAleatorio - tamanioCirculo)){
        eliminacion();
        punto.value++;
        niveles(punto.value);
        x = -1;
        y = -1;
    }
    y -=1;
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------Funciones de los botones---------------*/

var jugar = false;

function partidaNormal(){
    if(!jugar){
        objetivo = "normal";
        velocidadInicial = 2000;
        empezarJuego(objetivo, velocidadInicial);
    }else{
        detenerJuego();
        objetivo = "normal";
        velocidadInicial = 2000;
        empezarJuego(objetivo, velocidadInicial);
    }
}

function partidaNavidad(){
    if(!jugar){
        objetivo = "navidad";
        velocidadInicial = 2000;
        empezarJuego(objetivo, velocidadInicial);
    }else{
        detenerJuego();
        objetivo = "navidad";
        velocidadInicial = 2000;
        empezarJuego(objetivo, velocidadInicial);
    }
}

function partidaHalloween(){
    if(!jugar){
        objetivo = "halloween";
        velocidadInicial = 2000;
        empezarJuego(objetivo, velocidadInicial);
    }else{
        detenerJuego();
        objetivo = "halloween";
        velocidadInicial = 2000;
        empezarJuego(objetivo, velocidadInicial);
    }
}

function partidaSanValentin(){
    if(!jugar){
        objetivo = "san_valentin";
        velocidadInicial = 2000;
        empezarJuego(objetivo, velocidadInicial);
    }else{
        detenerJuego();
        objetivo = "san_valentin";
        velocidadInicial = 2000;
        empezarJuego(objetivo, velocidadInicial);
    }
}

function partidaPascua(){
    if(!jugar){
        objetivo = "pascua";
        velocidadInicial = 2000;
        empezarJuego(objetivo, velocidadInicial);
    }else{
        detenerJuego();
        objetivo = "pascua";
        velocidadInicial = 2000;
        empezarJuego(objetivo, velocidadInicial);
    }
}

function empezarJuego(modo, velocidad){
    puntero.style.cursor = "none";
    posicion();
    jugar = setInterval(actualizarPantalla, velocidad, modo);
}

function detenerJuego(){
    clearInterval(jugar);
    punto.value = 0
    nivel.value = 1;
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------Ejecucion---------------*/

function iniciarJuego(){
    if(jugar == false){
        alert("Escoge un objetivo para iniciar el juego");
    }else{
        pantalla.onmousemove = moverPuntero;
        pantalla.onclick = disparar;
    }
}

var ButtonNormal = document.querySelector('#normal');
var ButtonNavidad = document.querySelector('#navidad');
var ButtonHalloween = document.querySelector('#halloween');
var ButtonSanValentin = document.querySelector('#sanValentin');
var ButtonPascua = document.querySelector('#pascua');

var ButtonDetener = document.querySelector('#detener');

ButtonNormal.onclick = partidaNormal;
ButtonNavidad.onclick = partidaNavidad;
ButtonHalloween.onclick = partidaHalloween;
ButtonSanValentin.onclick = partidaSanValentin;
ButtonPascua.onclick = partidaPascua;

ButtonDetener.onclick = detenerJuego;

pantalla.onclick = iniciarJuego;
