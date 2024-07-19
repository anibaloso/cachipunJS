// 1. Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es
// decir, cuántas veces deberá jugar contra la computadora. Por cada juego, se debe
// mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta
// dependiendo de las veces que haya indicado el usuario que desea jugar (2 Puntos).
let victoria = 0;
let perdida = 0;
let empate = 0;

let cantidadJuegos = Number(prompt("Cuantas veces desea jugar?"));
while(isNaN(cantidadJuegos)){
    alert("Por favor, ingrese un número válido.");
    cantidadJuegos = Number(prompt("Cuantas veces desea jugar?"));
}


for (let i = 1; i <= cantidadJuegos; i++) {
    // 2. Solicitar al usuario que indique su jugada (1 Punto).
    // Las opciones son las siguientes:
    // ● Piedra
    // ● Papel
    // ● Tijera
    let opcionUsuario = prompt("Elija piedra, papel o tijera").toLowerCase();
    while(opcionUsuario !== 'piedra'&& opcionUsuario!=='papel'&& opcionUsuario!=='tijera') {
        alert("no sea pavo escriba bien la eleccion");
        opcionUsuario = prompt("Elija piedra, papel o tijera").toLowerCase();
    }
    // 3. Generar una jugada automática para la máquina usando la función Math.random()
    // de Javascript (2 Puntos).
    let opcionMaquina = Math.floor(Math.random() * 3);
    switch (opcionMaquina) {
        case 0:
            opcionMaquina = 'piedra'
            break;
        case 1:
            opcionMaquina = 'papel'
            break;
        case 2:
            opcionMaquina = 'tijera'
            break;
    }
    
    document.writeln(`<h4>la maquina eligio ${opcionMaquina} </h4>` )


// 4. Definir a un ganador considerando la jugada del usuario y la generada
// automáticamente para la máquina (3 Puntos).

// 5. Indicar el resultado de la partida dependiendo del caso (2 Puntos):
// ● Felicitar al ganador en caso de ser el usuario.
// ● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea
// la que gane.
// ● Declarar un empate.


    if(opcionMaquina ==='piedra'){
        if (opcionUsuario==='piedra') {
            document.writeln("Es un empate");
            alert("Es un empate")
            empate++;
        } else if(opcionUsuario==='tijera'){
            document.writeln("Lamentablemente usted perdio");
            alert("Lamentablemente usted perdio")
            perdida++;
        }else{
            document.writeln("Felicidades usted gano");
            alert("Felicidades usted gano")
            victoria++;
        }
    }else if(opcionMaquina==='papel'){
        if (opcionUsuario==='papel') {
            document.writeln("Es un empate");
            alert("Es un empate")
            empate++;
        } else if(opcionUsuario==='piedra'){
            document.writeln("Lamentablemente usted perdio");
            alert("Lamentablemente usted perdio")
            perdida++;
        }else{
            document.writeln("Felicidades usted gano");
            alert("Felicidades usted gano")
            victoria++;
        }
    }else if(opcionMaquina==='tijera'){
        if (opcionUsuario==='tijera') {
            document.writeln("Es un empate");
            alert("Es un empate")
            empate++;
        } else if(opcionUsuario==='papel'){
            document.writeln("Lamentablemente usted perdio");
            alert("Lamentablemente usted perdio")
            perdida++;
        }else{
            document.writeln("Felicidades usted gano");
            alert("Felicidades usted gano")
            victoria++;
        }
    }
}
document.writeln(`<hr>`)
document.writeln(`<h4> Usted Perdio ${perdida} veces </h4>`);
document.writeln(`<h4> Usted empato ${empate} veces </h4>`);
document.writeln(`<h4> Usted Gano ${victoria} veces </h4>` );

