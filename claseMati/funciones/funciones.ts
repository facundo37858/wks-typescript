
// function nameFuntion (param1:tipo,....):tipo de retrun 
function suma (a:number,b:number,c?:number):number{//c parametro opcional
    return a+b

}

//ventajas

let result=suma(3,6)//pasa el tipado del return 


// tipo :void funciones que no return nada 
// cuando en React en un estado

function consolog():void{
    console.log('void')
}

//tipo :never lo usamos cunado tiraramos un error nunca va tirar un valor pq simepre tira un error corta la ejucion de la funcion


function throwError(err:string):never {
    throw new Error(err);
    //console.log('nunca llega')
    

}



