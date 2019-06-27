
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
    var saldoAnterior = saldoCuenta;
    var extraerDinero = prompt("¿Cuánto dinero deseas extraer? Tu saldo actual es de " + saldoCuenta + " pesos");
    if (extraerDinero > saldoCuenta) {
      alert("No tenes suficiente dinero en cuenta, por favor ingresa otro valor");
    } else {
      if (extraerDinero > limiteExtraccion) {
        alert("El dinero que queres extraer es mayor a tu límite de extracción, \npor favor ingresa otro valor");
        } else {
          if ((extraerDinero % 100) !== 0 || isNaN(extraerDinero)) {
            alert("El valor que ingresaste es invalido. Recuerda que esta terminal solo entrega billetes de 100")
            }else{
              restarDinero(extraerDinero);
              alert("Tu saldo anterior era de " + saldoAnterior + " pesos" + "\nExtrajiste " + extraerDinero + " pesos" + "\nTu nuevo saldo es de " + saldoCuenta + " pesos");
            }
        }
    }
}

function depositarDinero() {
  var saldoAnterior = saldoCuenta;
  var depositarDinero = parseInt(prompt("¿Cuánto dinero deseas depositar? Tu saldo actual es de " + saldoCuenta + " pesos"));
  sumarDinero(depositarDinero);
    var nuevoSaldo = (saldoCuenta + depositarDinero);
    alert("Tu saldo anterior era de " + saldoAnterior + " pesos" + "\nDepositaste " + depositarDinero + " pesos" + "\nTu nuevo saldo es de " + saldoCuenta + " pesos");
}

function pagarServicio() {
  var servicioIngresado = prompt("Ingresa el número que corresponda con el servicio que queres pagar \n1 Agua $350 \n2 Luz $210 \n3 Internet $570\n4 Teléfono $425");

  switch (servicioIngresado) {
    case "1":
      if (350 > saldoCuenta){
       alert("No tenes dinero suficiente para dicha acción");
       actualizarSaldoEnPantalla();
     }else {
       alert("Has pagado el servicio de agua" + "\nTu saldo anterior: $" + saldoCuenta + "\nServicio pagado: $350" + "\nTu saldo actual: $" + (saldoCuenta - 350));
       restarDinero(350)
     }
      break;

      case "2":
        if (210 > saldoCuenta){
         alert("No tenes dinero suficiente para dicha acción");
         actualizarSaldoEnPantalla();
       }else {
         alert("Has pagado el servicio de luz" + "\nTu saldo anterior: $" + saldoCuenta + "\nServicio pagado: $210" + "\nTu saldo actual: $" + (saldoCuenta - 210));
         restarDinero(210)
       }
        break;

        case "3":
          if (570 > saldoCuenta){
           alert("No tenes dinero suficiente para dicha acción");
           actualizarSaldoEnPantalla();
         }else {
           alert("Has pagado el servicio de internet" + "\nTu saldo anterior: $" + saldoCuenta + "\nServicio pagado: 570" + "\nTu saldo actual: $" + (saldoCuenta - 570));
           restarDinero(570)
         }
          break;

          case "4":
            if (425 > saldoCuenta){
             alert("No tenes dinero suficiente para dicha acción");
             actualizarSaldoEnPantalla();
           }else {
             alert("Has pagado el servicio de teléfono" + "\nTu saldo anterior: $" + saldoCuenta + "\nServicio pagado: $425" + "\nTu saldo actual: $" + (saldoCuenta - 425));
             restarDinero(425)
           }
            break;

        default:
        alert("Ingrese un numero valido")
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
function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}
