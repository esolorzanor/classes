/*
Ejercicio 3: Crear un objeto para representar una cuenta bancaria.
1. Crea un objeto llamado cuenta con las siguientes propiedades: nombre del titular, número de cuenta, saldo, métodos para depositar, retirar y consultar el saldo.
2. Define cada método con la lógica correspondiente para realizar las acciones especificadas.
3. Realiza un depósito en la cuenta.
4. Realiza un retiro de la cuenta, verificando que el saldo sea suficiente.
5. Consulta el saldo actual de la cuenta.
*/

var cuenta = {
    nombreTitular:"Certus",
    numeroCueta: 765432765432,
    saldo: 1000,
    depositar: function(importe){
        this.saldo = this.saldo + importe;
    },
    retirar: function(importe){
        if(importe > this.saldo){
            console.log("Saldo insuficiente");
        }else{
            this.saldo = this.saldo - importe;
        }
    },
    consultaSaldo: function(){
        console.log("Saldo disponible:" + this.saldo);
    }
};

cuenta.consultaSaldo();
cuenta.depositar(3000);
cuenta.consultaSaldo();
cuenta.retirar(180);
cuenta.consultaSaldo();
