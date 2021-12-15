enum Fases{
    Primera,
    Segunda,
    Tersera
}
let string:string='facundo'
let number:number=90

//no utilizar any

//tsconfig---> noImplicitAny---> nos detecta si algun parametro tiene un any implicito

console.log(Fases.Primera)


//TUPLAS DE DATOS

let tupla:[string,number]=['facu',23]
console.log(tupla)
tupla=['mati',89]
console.log(tupla)


//ARREGLOS

let array: number[]=[1,2,3,4]
array.push(5)

let arrayString: string[]=['facu','mati']
let mati=arrayString.shift()


// OBJETOS

interface Persona {//tipos o interfase para objetos
    name:string
    lastName:string
    age:number
    hobbies:Hobby[]//anidacion de interfaces voy a tener una arreglo con name de Hobby

}

interface Estudiante extends Persona {
    activo?:boolean//es opcional
    saluda:(a:string)=>void

}

interface Hobby{
    name:string
}

let matias:Estudiante={
    name:'mati',
    lastName:'l',
    age:29,
    //activo:true,//puede estar o no
    saluda:(a:string)=>console.log('hola'),
    hobbies:[]


}

let facu:Persona={
    name:'facu',
    lastName:'garcia',
    age:28,
    hobbies:[{name:'reed'}]
}

//CLASS


class Persona2{

    //parametros:

    name:string;//por defecto son publicas 
    private age:string;//privada solo acceder dentro de la clase solo la pude pedir por un geter
    protected email:string// semi privada sus hijos si la puden ver 

    //funcion constructura
    constructor(name:string,age:number,email:string){
        this.name=name;
        this.age=age.toString()
        this.email=email

    }
}

let rodri=new Persona2('rodri',21,'rodriMail')

rodri.name//publica

class Estudiante2 extends Persona2 {
    isActive:boolean
    constructor(name:string,age:number,email:string){
        super(name,age,email)
        this.isActive=false

    }
}





