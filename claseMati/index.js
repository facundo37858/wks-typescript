var Fases;
(function (Fases) {
    Fases[Fases["Primera"] = 0] = "Primera";
    Fases[Fases["Segunda"] = 1] = "Segunda";
    Fases[Fases["Tersera"] = 2] = "Tersera";
})(Fases || (Fases = {}));
var string = 'facundo';
var number = 90;
//no utilizar any
//tsconfig---> noImplicitAny---> nos detecta si algun parametro tiene un any implicito
console.log(Fases.Primera);
//TUPLAS DE DATOS
var tupla = ['facu', 23];
console.log(tupla);
tupla = ['mati', 89];
console.log(tupla);
