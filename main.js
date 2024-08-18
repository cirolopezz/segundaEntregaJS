let sum = 0;//variable que ira sumando las notas ingresadas

function validar(nota){
    if ( isNaN (nota) ||nota<0 || nota >11){
        alert("Recargue la pagina e Ingrese una nota valida");
        // corte = false;
        }
} 

function Alumnado (nombre, curso, edad){ // funcion constructora del objeto alumnado
        this.nombre=nombre;
        this.curso=curso;
        this.edad=edad;
        this.calcularPromedio= function(){ //metodo vvalido solo para los objetos de funcion constructora
            let sum = 0;//variable que ira sumando las notas ingresadas
            let contador = 0; // variable que contara las notas
            let nota=0;
            // let corte = true; //variable booleana adicional, creada para que no muestre el promedio cuando no es valida la nota
            do {
                nota= parseInt(prompt("INgrese las notas. Ingrese '11' cuando haya ingresado todas las notas disponibles para hacer el promedio"));
                validar(nota); 
                    if (nota!= 11 ) {
                    sum= sum + nota;
                    contador= contador + 1; 
                    }   
                } while (nota>=0 && nota<=10 && nota != 11);  
             return (Math.round(sum/contador)); // le estoy pidiendo que retorne el promedio redondeado
         }
}
           
const matricula=[]; //se decalara el array vacio, al que se le iran pusheando los objeto alumno con sus propiedades
for(let i=0; i<3;i++){ //bucle para instanciar los objetos de la funcion constructora , en este caso se ingresaran por prompt solo 3 alumnos
    let nombre= prompt ("ingrese nombre del alumno");
    let curso= prompt ("Ingrese, con un numero, el curso al que pertenece");
    let edad= prompt ("Ingrese la edad del alumno");
    let alumno= new Alumnado (nombre, curso, edad);
    let prom= alumno.calcularPromedio();// el objeto alumno llama al metodo y lo guarda en la variable prom, para poder agregarlo como una propiedad (promedio) de cada alumno 
    alumno.promedio=prom;
    console.log(alumno); // muestra cada objeto cons sus propiedades
    
    matricula.push(alumno);// agregando el objeto alumno al array matricula;
}
console.log(matricula);// muestra el array matricula para verificar que tiene sus tres objetos/alumnos
console.table (matricula);// muestra el array en forma de tabla

//aplicando metodos de array/funciones superiores para recorrer el array matricula
let nombreIngresado= prompt("ingrese el nombre del alumno que desea encontrar en matricula")
const filtrarPorNombre= matricula.filter(el=> el.nombre.includes (nombreIngresado) ) ;  // encontrar un alumno o varios cuyos caracteres coincidan con lo ingresado por prompt        
console.log(filtrarPorNombre);// mostrar el array que contiene a esos objetos filtrados
const filtrarPorAprobado= matricula.filter(el=> el.promedio>=7);// busca alumnos aprobados
console.log( filtrarPorAprobado);
    

    


            



