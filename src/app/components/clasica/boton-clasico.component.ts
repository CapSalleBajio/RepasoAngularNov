import { Component, Input } from "@angular/core";


@Component({
  selector: 'boton-clasico',
  // Solo un template por componente
  templateUrl: './boton-clasico.component.html', // Template (Vista del componente)
  // Se pueden tener multiples archivos de estilos
  styleUrls: ['./boton-clasico.component.css'], // Estilos del componente
})
export class BotonClasico {
  /**
   * Los componentes pueden recibir datos desde el componente padre
   * mediante el decorador @Input()
   * Esto significa que en automatico va a crear un atributo en el
   * elemento, es decir
   * <boton-clasico [tituloBoton]="contenido" ></boton-clasico>
   */
  @Input()
  tituloBoton = "Soy un botón";
}
