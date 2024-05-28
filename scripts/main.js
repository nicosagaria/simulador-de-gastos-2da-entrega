
//  Solicitud de ingreso


function ingresoUsuario(){

                
    let usuario = prompt("Ingrese su nombre de usuario").toLowerCase();
    let clave = prompt("ingrese su contraseña").toLowerCase();
    let verificacionRobot = prompt("¿Usted es un Robot? si o no").toLowerCase();
    
     
     while ((usuario != "robertosanchez") || (clave != "rosarosa123") || (verificacionRobot != "no")) {
     alert("El usuario o contaseña son incorrectos. ");
     usuario = prompt("Ingrese su nombre de usuario");
     clave = prompt("ingrese su contraseña");
     verificacionRobot = prompt("¿Usted es un Robot? si o no");
                        
     }
    }
    
     ingresoUsuario();
    
     alert("Bienvenido Roberto Sanchez a su controlador de gastos 💸")

// Ingreso mensual

let ingresoMensual = parseInt(prompt("Coloque su ingreso de este mes"));
alert("Tu ingreso de esta semana es de " + ingresoMensual);
    

// Gasto en alimentos

const listaAlimentos =[];

function GastoAlimentos(){
    this.tipoGasto = prompt("¿Qué gasto nuevo en alimentos tuviste? (leche, azucar, carne, mandarina, etc.)");
    this.monto = parseFloat(prompt("¿Cuál fue el monto?"));

    this.nuevoAlimento = function() {
        console.log("Tu nuevo gasto fue de $" + this.monto + " en" + this.tipoGasto);
    };
}

while (true) {
    const nuevoGastoAlimentos = new GastoAlimentos();
    nuevoGastoAlimentos.nuevoAlimento();
    listaAlimentos.push(nuevoGastoAlimentos);

    const continuar = prompt("¿Deseas agregar otro gasto? (si/no)");
    if (continuar.toLowerCase() != "si") {
        break;
    }
}

console.log(listaAlimentos);

const totalMontoAlimentos = listaAlimentos.reduce((acumulado, gasto) => acumulado + gasto.monto, 0);

console.log("El monto total en alimentos es $"+ totalMontoAlimentos);

// Gasto en transporte

const listaTransporte =[];

function GastoTransprote(){
    this.tipoGasto = prompt("¿Qué gasto nuevo en transporte tuviste? (subte, tre, nafta, etc.)");
    this.monto = parseFloat(prompt("¿Cuál fue el monto?"));

    this.nuevoTransporte = function() {
        console.log("Tu nuevo gasto fue de $" + this.monto + " en" + this.tipoGasto);
    };
}

while (true) {
    const nuevoGastoTransporte = new GastoTransprote();
    nuevoGastoTransporte.nuevoTransporte();
    listaTransporte.push(nuevoGastoTransporte);

    const continuar = prompt("¿Deseas agregar otro gasto? (si/no)");
    if (continuar.toLowerCase() != "si") {
        break;
    }
}

console.log(listaTransporte);

const totalMontoTransporte = listaTransporte.reduce((acumulado, gasto) => acumulado + gasto.monto, 0);

console.log("El monto total en transporte es $"+ totalMontoTransporte);

// Gasto en impuestos

const listaImpuestos =[];

function GastoImpuestos(){
    this.tipoGasto = prompt("¿Qué gasto nuevo en impuestos tuviste? (luz, agua, gas,expensas, etc.)");
    this.monto = parseFloat(prompt("¿Cuál fue el monto?"));

    this.nuevoImpuesto = function() {
        console.log("Tu nuevo gasto fue de $" + this.monto + " en" + this.tipoGasto);
    };
}

while (true) {
    const nuevoGastoImpuestos = new GastoImpuestos();
    nuevoGastoImpuestos.nuevoImpuesto();
    listaImpuestos.push(nuevoGastoImpuestos);

    const continuar = prompt("¿Deseas agregar otro gasto? (si/no)");
    if (continuar.toLowerCase() != "si") {
        break;
    }
}

console.log(listaImpuestos);

const totalMontoImpuestos = listaImpuestos.reduce((acumulado, gasto) => acumulado + gasto.monto, 0);

console.log("El monto total en impuestos es $"+ totalMontoImpuestos);


// Suma de gastos

let gastoTotal = totalMontoAlimentos + totalMontoTransporte + totalMontoImpuestos;

console.log("Tu gasto de este mes es de $" + gastoTotal);
alert("Tu gasto de este mes es de $" + gastoTotal);

// Balance mensual

let balance = ingresoMensual - gastoTotal;

alert("Tu balance es de $" + balance);


if (ingresoMensual < gastoTotal) {
    alert("Estás requiriendo un contador");
} else {
    alert("Tenes $" + balance + " a tu favor. Podés ahorrarlo, invertirlo o gastar en lo que quieras");
}

// Función para buscar y agregar un gasto en la categoría Alimentos

function buscarGastoAlimento(categoria, nombreGasto) {
    const gastoEncontrado = listaAlimentos.find(gasto => gasto.tipoGasto === nombreGasto);
    if (gastoEncontrado) {
        console.log(`Tu gasto en ${nombreGasto} fue de $${gastoEncontrado.monto}`);
        alert(`Tu gasto en ${nombreGasto} fue de $${gastoEncontrado.monto}`);
    } else {
        console.log(`Gasto no encontrado: ${nombreGasto}`);
        alert(`Gasto no encontrado: ${nombreGasto}`);
        const agregarNuevo = prompt("¿Deseas agregar este gasto no encontrado? (si/no)");
        if (agregarNuevo.toLowerCase() === "si") {
            const nuevoGasto = new GastoAlimentos();
            nuevoGasto.tipoGasto = nombreGasto;
            nuevoGasto.nuevoAlimento();
            listaAlimentos.push(nuevoGasto);
        }
    }
}


const alimentoBuscado = prompt("¿Qué gasto deseas buscar dentro de la categoría Alimentos? (leche, azucar, carne, mandarina, etc.)");
buscarGastoAlimento("alimentos", alimentoBuscado);


console.log(listaAlimentos);

console.log("El monto total en alimentos es $"+ totalMontoAlimentos);

// Función para buscar y agregar un gasto en la categoría Trasnporte

function buscarGastoTransporte(categoria, nombreGasto) {
    const gastoEncontrado = listaTransporte.find(gasto => gasto.tipoGasto === nombreGasto);
    if (gastoEncontrado) {
        console.log(`Tu gasto en ${nombreGasto} fue de $${gastoEncontrado.monto}`);
        alert(`Tu gasto en ${nombreGasto} fue de $${gastoEncontrado.monto}`);
    } else {
        console.log(`Gasto no encontrado: ${nombreGasto}`);
        alert(`Gasto no encontrado: ${nombreGasto}`);
        const agregarNuevo = prompt("¿Deseas agregar este gasto no encontrado? (si/no)");
        if (agregarNuevo.toLowerCase() === "si") {
            const nuevoGasto = new GastoTransprote();
            nuevoGasto.tipoGasto = nombreGasto;
            nuevoGasto.nuevoTransporte();
            listaTransporte.push(nuevoGasto);
        }
    }
}


const transporteBuscado = prompt("¿Qué gasto deseas buscar dentro de la categoría Transporte? (subte, tre, nafta, etc.)");
buscarGastoTransporte("transporte", transporteBuscado);

console.log(listaTransporte);

console.log("El monto total en transporte es $"+ totalMontoTransporte);


// Función para buscar y agregar un gasto en la categoría Impuestos

function buscarGastoImpuestos(categoria, nombreGasto) {
    const gastoEncontrado = listaImpuestos.find(gasto => gasto.tipoGasto === nombreGasto);
    if (gastoEncontrado) {
        console.log(`Tu gasto en ${nombreGasto} fue de $${gastoEncontrado.monto}`);
        alert(`Tu gasto en ${nombreGasto} fue de $${gastoEncontrado.monto}`);
    } else {
        console.log(`Gasto no encontrado: ${nombreGasto}`);
        alert(`Gasto no encontrado: ${nombreGasto}`);
        const agregarNuevo = prompt("¿Deseas agregar este gasto no encontrado? (si/no)");
        if (agregarNuevo.toLowerCase() === "si") {
            const nuevoGasto = new GastoImpuestos();
            nuevoGasto.tipoGasto = nombreGasto;
            nuevoGasto.nuevoImpuesto();
            listaImpuestos.push(nuevoGasto);
        }
    }
}


const impuestoBuscado = prompt("¿Qué gasto deseas buscar dentro de la categoría Impuestos? (luz, agua, gas,expensas, etc.)");
buscarGastoImpuestos("alimentos", impuestoBuscado);


console.log(listaImpuestos);

console.log("El monto total en impuestos es $"+ totalMontoImpuestos);
