import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { PersonalCardComponent } from './components/persona-card/personal-card.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AgregarComponent,
    PersonaComponent,
    HomeComponent,
    ListadoComponent,
    PersonalCardComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PersonalRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PersonalModule { }
