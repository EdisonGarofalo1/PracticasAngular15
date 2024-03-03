import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoritosComponent } from './page/favoritos/favoritos.component';

import { AutoreComponent } from './page/autore/autore.component';

import { AutoresRoutingModule } from './autores-routing.module';
import { ObrasComponent } from './page/obras/obras.component';
import { FramentoComponent } from './page/framento/framento.component';




@NgModule({
  declarations: [
    FavoritosComponent,
    AutoreComponent,
    ObrasComponent,
    FramentoComponent
    
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    AutoresRoutingModule
  ]
})
export class AutoresModule { }
