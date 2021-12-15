

// function suma (a:number,b:number,c?:number):number{//c parametro opcional
//     return a+b

// }


//quiero que la function suma me siva para strings y numbers

function suma (a:number,b:number|string):number|string|void{
    //return a+b //error
    //solutions
    if(typeof a==='number' && typeof b==='number')return a+b
    if(typeof a==='string' && typeof b==='string')return a+b



}

//mejor solucion hacer funciones diferentes para cada cosa

function suma2(a:string|number,b:string|number):number{

    //a. tiene los metodos de string and number
    if(typeof a==='string'){
        //a. metodos solo de strings
        a=parseInt(a)
        
    }
    //a. metodos de number

    if(typeof b==='string'){
        b=parseInt(b)
    }
}
