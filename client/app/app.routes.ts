import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes : Routes = [
    {
        path: '',
        component: ListagemComponent
    }, {
        path: 'cadastro',
        component: CadastroComponent
    },
     {
        path: '**',
        component: ListagemComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);