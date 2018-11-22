
var nombreUsuario = "Zori Clark"
var saldoCuenta = 14570
var limiteExtraccion = 2000

window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

var codigo = window.prompt("Bienvenido/a. Ingrese por favor si código de cuenta");
switch (codigo) {
    case "9977":
        alert("Bienvenida Zori Clark ya puedes comenzar a realizar operaciones");
        break;
    default:
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
        nombreUsuario = "";
        saldoCuenta = 0;
        limiteExtraccion = 0;
}

function sumarDinero(num2) {
    saldoCuenta = saldoCuenta + num2;
    actualizarSaldoEnPantalla();
}

function restarDinero(num2) {
    saldoCuenta = saldoCuenta - num2;
    actualizarSaldoEnPantalla();
}

function cambiarLimiteDeExtraccion() {
    var nuevoLimite = prompt("Tu límite de extracción es de " + limiteExtraccion + " pesos" + "\n¿Cuál querés que sea el nuevo?" + " Ingresa el valor en pesos")
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert("Tu nuevo límite de extracción es de " + nuevoLimite + " pesos");
}

function extraerDinero() {
    var extraerDinero = prompt("¿Cuánto dinero deseas extraer? Tu saldo actual es de " + saldoCuenta + " pesos");
    if (extraerDinero > saldoCuenta) {
        alert("No tenes suficiente dinero en cuenta, por favor ingresa otro valor");
    } else {
        if (extraerDinero > limiteExtraccion) {
            alert("El dinero que queres extraer es mayor a tu límite de extracción, \npor favor ingresa otro valor");
        } else {
            if (extraerDinero % 100) {
                alert("Esta terminal solo entrega billetes de 100, por favor ingresa otro valor")
            } else {
                restarDinero(extraerDinero);
                var nuevoSaldo = (saldoCuenta + extraerDinero);
                // no se me actualiza el valor quedaMAS MAS
                alert("Tu saldo anterior era de " + saldoCuenta + " pesos" + "\nExtrajiste " + extraerDinero + " pesos" + "\nTu nuevo saldo es de " + nuevoSaldo + " pesos");
            }
        }
    }
}

function depositarDinero() {
    var depositarDinero = parseInt(prompt("¿Cuánto dinero deseas depositar? Tu saldo actual es de " + saldoCuenta + " pesos"));
    sumarDinero(depositarDinero);
    var nuevoSaldo = (saldoCuenta + depositarDinero);
    alert("Tu saldo anterior era de " + saldoCuenta + " pesos" + "\nDepositaste " + depositarDinero + " pesos" + "\nTu nuevo saldo es de " + nuevoSaldo + " pesos");
}

function pagarServicio() {
    var agua = 350,
        luz = 210,
        internet = 570,
        telefono = 425;
    var servicioIngresado = prompt("Ingresa el número que corresponda con el servicio que queres pagar \n1 Agua \n2 Luz \n3 Internet \n4 Teléfono");
    switch (servicioIngresado) {
        case "1":
            if (saldoCuenta < 350) {
                alert("No tenes dinero suficiente para dicha acción");
            }
            break;
            restarDinero(agua);
            var nuevoSaldo = (saldoCuenta - agua);
            alert("Has pagado el servicio de agua" + "\nTu saldo anterior: $" + saldoCuenta + "\nServicio pagado: $350" + "\nTu saldo actual: $" + nuevoSaldo);
            break;
        case "2":
            if (saldoCuenta < 210) {
                alert("No tenes dinero suficiente para dicha acción");
            }
            break;
            restarDinero(luz);
            var nuevoSaldo = (saldoCuenta - luz);
            alert("Has pagado el servicio de luz" + "\nTu saldo anterior: $" + saldoCuenta + "\nServicio pagado: $210" + "\nTu saldo actual: $" + nuevoSaldo)
            break;
        case "3":
            if (saldoCuenta < 425) {
                alert("No tenes dinero suficiente para dicha acción");
            }
            break;
            restarDinero(internet);
            var nuevoSaldo = (saldoCuenta - internet);
            alert("Has pagado el servicio de internet" + "\nTu saldo anterior: $" + saldoCuenta + "\nServicio pagado: $570" + "\nTu saldo actual: $" + nuevoSaldo)
            break;
        case "4":
            if (saldoCuenta < 350) {
                alert("No tenes dinero suficiente para dicha acción");
            }
            break;
            restarDinero(telefono);
            var nuevoSaldo = (saldoCuenta - telefono);
            alert("Has pagado el servicio de teléfono" + "\nTu saldo anterior: $" + saldoCuenta + "\nServicio pagado: $425" + "\nTu saldo actual: $" + nuevoSaldo)
            break;
        default:
            alert("Por favor ingrese un numero válido");
    }
}

function transferirDinero() {
    var amiga1 = 1234567,
        amiga2 = 7654321;
    var transferible = prompt("¿Cuánto dinero desea tranferir?");
    if (transferible > saldoCuenta) {
        alert("No tenes dinero suficiente para dicha acción");
    } else {
        numCuenta = prompt("Ingrese el número de cuenta al que desea transferirle dinero");
        switch (numCuenta) {
            case "1234567":
                restarDinero(transferible);
                var nuevoSaldo = (saldoCuenta - transferible);
                alert("Se han transferido $ " + transferible + "\nA la cuenta destino número 1234567");
                break;
            case "7654321":
                restarDinero(transferible);
                var nuevoSaldo = (saldoCuenta - transferible);
                alert("Se han transferido $ " + transferible + "\nA la cuenta destino número 7654321");
                break;
            default:
                alert("Sólo se puede transferir dinero a una cuenta amiga");
        }
    }
}

function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
