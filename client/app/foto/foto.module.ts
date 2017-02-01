import { FiltroPorTitulo } from './foto.pipes';
import { FotoComponent } from './foto.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo],
    exports: [FotoComponent, FiltroPorTitulo]
})
export class FotoModule {}