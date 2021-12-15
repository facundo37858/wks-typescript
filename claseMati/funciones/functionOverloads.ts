

//la forma de llamar la funciones dependiendo de como la llamamos devuelve determinado valor

//FUNCTIO OVERLOADS:
function suma(a: number, b: string): string;
function suma(a: string, b: string): string;
function suma(a: string, b: number): string;
function suma(a: number, b: number): number {
    return a + b;
}
//manejo bien los tipados no los piedos 
//llamr una funcion de diferentes maneras



let resultado = suma(2, 2)