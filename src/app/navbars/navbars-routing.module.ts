import { NgModule } from '@angular/core';

import{Routes , RouterModule} from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
export const routes: Routes = [
  
  {
       path:'navbar',
       component:NavbarComponent,
  },{

    path:'autores',
    component:NavbarComponent,
        loadChildren:()=>import('../autores/autores.module').then(m=>(m.AutoresModule))
  },
      //  children: [
      //    {
      //     path:'autores',
      //     loadChildren:()=>import('../autores/autores.module').then(m=>(m.AutoresModule))
      //    }
      //  ]
      
  

  
  {
    path:'**',
    redirectTo:'navbar'
  }
      
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class NavbarsRoutingModule { }
