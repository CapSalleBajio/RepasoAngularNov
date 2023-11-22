import { Component } from '@angular/core';

/**
 * Interfaz que define la estructura de una imagen.
 *  Tenemos que importarla, porque la interfaz la creamos en otro archivo.
 * ===
 * Interface that defines the structure of an image.
 * We have to import it, because we created the interface in another file.
 */
import { IImage } from '../interfaces/image.interface';

/**
 * Componente que muestra una galería de imágenes.
 * Va a ser uso de la directiva *ngFor para iterar sobre un arreglo de imágenes.
 * Se va a iterar el componente image-display para poder mostrar cada imagen.
 *
 * Realmente funcionaria igual que una galeria o un museo, este componente agrupa
 * a los componentes image-display y los muestra.
 *
 * image-display es un componente que muestra una imagen, y tiene su propio html y css.
 *
 * Este tipo de componente usa el html y css en archivos separados.
 *
 * ===
 *
 * Component that shows an image gallery.
 * It will use the *ngFor directive to iterate over an array of images.
 * The image-display component will be iterated to display each image.
 *
 * It would really work the same as a gallery or a museum, this component groups
 * to the image-display components and shows them.
 *
 * image-display is a component that shows an image, and has its own html and css.
 * This type of component uses html and css in separate files.
 *
 */
@Component({
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {

  /**
   * Arreglo de imágenes que se van a mostrar en la galería.
   * Se define el tipo de dato de las imágenes con la interfaz IImage.
   * Se inicializa el arreglo con un conjunto de imagenes de pruebas.
   * Este arreglo va a ser usado para iterarlo con la directiva *ngFor.
   * ===
   * Array of images to be displayed in the gallery.
   * The data type of the images is defined with the IImage interface.
   * The array is initialized with a set of test images.
   * This array will be used to iterate it with the *ngFor directive.
   */
  images: IImage[] = [
    { id: 'a', category: 'animals', url: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*', title: 'Chucho 1' },
    { id: 'ab', category: 'fruits', url: 'https://hips.hearstapps.com/hmg-prod/images/frutas-que-adelgazan-kiwi-1562159613.jpg?resize=980:*', title: 'Fruta 1' },
    { id: 'abc', category: 'fruits', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_cYRCMjgY28rBQG9aIEfPdp9F6U0dvTn7A&usqp=CAU', title: 'Fruta 2' },
    { id: 'abcd', category: 'animals', url: 'https://media.traveler.es/photos/613760adcb06ad0f20e11980/master/w_1600%2Cc_limit/202931.jpg', title: 'Chucho 2' },
  ]

  /**
   * Variable que se va a usar para filtrar las imágenes.
   * Se inicializa con un string vacío.
   * Esta variable va a ser usada en el input de búsqueda con el ngModel
   * ===
   * Variable that will be used to filter images.
   * It is initialized with an empty string.
   * This variable will be used in the search input with ngModel
   */
  busqueda: string = '';



}
