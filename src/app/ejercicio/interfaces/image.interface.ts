/**
 * Las interfaces son como clases abstractas, pero no tienen implementación.
 * Se usan para definir la estructura de un objeto.
 * Se pueden poner propiedades opcionales con el símbolo de interrogación (?).
 * Las interfaces pueden ser creadas en un archivo aparte
 * y exportadas para ser usadas en otros archivos.
 *
 * En este caso, la interfaz IImage define la estructura de un objeto de tipo IImage.
 * id, url, title y category son propiedades obligatorias.
 *
 * Para usar la interfaz, se debe importar en el archivo donde se va a usar.
 *
 * ===
 *
 * Interfaces are like abstract classes, but they don't have implementation.
 * They are used to define the structure of an object.
 * Optional properties can be added with the question mark symbol (?).
 * Interfaces can be created in a separate file
 * and exported to be used in other files.
 *
 * In this case, the IImage interface defines the structure of an object of type IImage.
 * id, url, title and category are mandatory properties.
 *
 * To use the interface, it must be imported into the file where it will be used.
 */

export interface IImage {
  id: string;
  url: string;
  title: string;
  category: string;
}
