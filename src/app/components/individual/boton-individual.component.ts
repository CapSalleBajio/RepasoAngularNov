import { Component } from "@angular/core";

/**
Componente que contiene HTML, CSS, Y TS en un mismo archivo.
Para que un componente sea catalogado como tal, es necesario
que a su clase se le agregue el decorador @Component
*/
@Component({
  // El selector se refiere a como se va a mandar a llamar el componente
  selector: 'boton-individual', // no se permiten espacios, ni simbolos (solo guion)
  // El template es el HTML del componente
  template: `

    <!--
      Los eventos en Angular se definen con (evento)="metodo()"
      Los eventos pueden ser:
      - click -> (click) -> Cuando se da click
      - change -> (change) -> Cuando cambia el valor de un input
      - keyup -> (keyup) -> Cuando se suelta una tecla
    -->
    <button (click)="toggleMostrarBoton()">Mostrar / Ocultar</button>
    <div *ngIf="mostrarBoton" class="boton">
      Soy un botón
    </div>

  `,
  // Los estilos del componente
  styles: [`

    .boton {
      padding: 15px;
      background-color: red;
      color: white;
      border-radius: 5px;
    }

  `]
})
/**
 * Los componentes que no esten marcados como standalone,
 * deben de ser declarados en el modulo que los contenga
 * con el nombre de su clase. -> BotonIndividual
 */
export class BotonIndividual {
 // Toda la funcionalidad que va a tener el componente
  mostrarBoton = false; // Propiedad de la clase


  toggleMostrarBoton() {
    // Para accesar a las propiedades y metodos de la clase, es necesario
    // utilizar la palabra reservada this
    this.mostrarBoton = !this.mostrarBoton;
  }

}
