
let arrayNum=[1,2,3,4]

let arrayString=['a','b','c']

function firstElement(arr:any []){
    return arr[0]
}

let elemt=firstElement(arrayString)//piedo el tipado es tipo any

//GENERIC FUNCTIONS

function elementArray<Type>(arr:Type[]):Type{//Type define el tipado q se define cuando se llama a la funcion 
    return arr[0]
}

let elementType=elementArray(arrayString)//tipo string  implicito
let elementTypeE=elementArray<string>(arrayString)//tipo string  explicito
let elemntTypeNum=elementArray(arrayNum)//tipo number


// las utilizo en caso de arreglos y objetos

function marge<U extends object, V extends object>(obj1: U,obj2:V){
    return {
        ...obj1,
        ...obj2
    }
}

// donde las utilizamos 
//en actions en redux son genericas
// axios.post and axios.get son funciones genericas 
//useState de React 



