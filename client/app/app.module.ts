import {routing} from './app.routes';
import {ListagemComponent} from './listagem/listagem.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {PainelModule} from './painel/painel.module';
import {HttpModule} from '@angular/http';
import {FotoModule} from './foto/foto.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import 'rxjs/add/operator/map';

@NgModule({
    imports: [
        BrowserModule, HttpModule, routing, FotoModule, PainelModule
    ],
    declarations: [
        AppComponent, CadastroComponent, ListagemComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}