import { Component } from '@angular/core';

/* Un componente de angular,
   necesita al menos lo siguiente:
    - Un selector -> nombre del componente (Como se manda a llamar)
    - HTML (Template) -> Vista del componente (Archivo, o en linea)
    - CSS (No es requerido)
    */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Template (Vista del componente)
  styleUrls: ['./app.component.css'], // Estilos del componente
})
/* Todo el contenido de un componente (ts)
va dentro de la clase y su {} */
export class AppComponent {


  nombre = "Luis"; // Propiedades / Propiedad de la clase
  apellido = "García" // Puntos y coma son opcionales
  mostrar = true;
  arregloEjemplo = [1,11,34,21]
  propiedadInput = "Texto desde el componente"
  materias: string[] = []
  nombreMateria = ""
  calificacionMateria = 0

  /* Los metodos van definidos por su nombre y (arg, parametros) */
  metodo1() {
    // Pueden o no retornar un valor
    // Si no tiene return, en automatico es void -> vacio
  }

  metodo2() {
    return "Hola desde una función";
  }


  agregarCalificacion() {
    this.materias.push(this.nombreMateria + ": " + this.calificacionMateria)
  }

}
// No se puede poner cosas afuera


