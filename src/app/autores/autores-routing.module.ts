import { NgModule } from '@angular/core';
import{Routes , RouterModule} from '@angular/router'
import { AutoreComponent } from './page/autore/autore.component';
import { ObrasComponent } from './page/obras/obras.component';
import { FramentoComponent } from './page/framento/framento.component';
import { FavoritosComponent } from './page/favoritos/favoritos.component';
import { ValidarTokenGuard } from '../auth/guards/auth.guard';

export const routes: Routes = [
  {
    path:'',
  children: [

    { path: 'listaAutores', component: AutoreComponent },
    { path: 'listaObras/:autor', component: ObrasComponent,  canActivate:[ValidarTokenGuard],
    canLoad:[ValidarTokenGuard],},
    { path: 'framento/:obra', component: FramentoComponent, canActivate:[ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]},
    { path: 'faborito', component: FavoritosComponent ,canActivate:[ValidarTokenGuard],
    canLoad:[ValidarTokenGuard] },
    { path: '**', redirectTo: 'listaAutores' }


  ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 
})
export class AutoresRoutingModule { }
