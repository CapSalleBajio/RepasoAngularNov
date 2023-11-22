import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BotonIndividual } from './components/individual/boton-individual.component';
import { BotonClasico } from './components/clasica/boton-clasico.component';
import { ImageDisplayComponent } from './ejercicio/image-display/image-display.component';
import { ImageGalleryComponent } from './ejercicio/image-gallery/image-gallery.component';

@NgModule({
  /**
    Los componentes que van a ser registrados
    en el modulo, o le pertenecen
   */
  declarations: [
    AppComponent,
    BotonIndividual,
    BotonClasico,
    ImageDisplayComponent,
    ImageGalleryComponent
  ],
  /*
    Los modulos que se van a utilizar
    en el modulo actual
  */
  imports: [
    BrowserModule,
    FormsModule // Es necesario para utilizar ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
