import { Component, Input } from "@angular/core";
import { IImage } from "../interfaces/image.interface";

/**
 * Componente que muestra una imagen.
 * Este componente se va a iterar en el componente image-gallery.
 * Este componente tiene su propio html y css.
 * Recuerda que el componente se ocupa registrarlo en el modulo.
 * (En este caso AppModule, en declaraciones)
 * ===
 * Component that shows an image.
 * This component will be iterated in the image-gallery component.
 * This component has its own html and css.
 * Remember that the component must be registered in the module.
 * (In this case AppModule, in declarations)
 */
@Component({
  selector: 'image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent {
  /**
   * Imagen que se va a mostrar.
   * Se define el tipo de dato de la imagen con la interfaz IImage.
   * Se usa la directiva @Input() para recibir la imagen desde el componente padre.
   * IImage tiene las propiedades id, url, title y category.
   * ===
   * Image to be displayed.
   * The data type of the image is defined with the IImage interface.
   * The @Input() directive is used to receive the image from the parent component.
   * IImage has the properties id, url, title and category.
   */
  @Input() imageToDisplay!: IImage;
}
