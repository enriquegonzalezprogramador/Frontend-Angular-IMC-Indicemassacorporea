import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/personal';
import { PersonalService } from '../../services/personal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img {
      width: 100%;
      height: 50%;
    }
    `
  ]
})
export class AgregarComponent implements OnInit {

  persona: Persona = {
    nombre: '',
    edad: 0,
    peso: 0,
    altura: 0
  }

  constructor( private _personalService: PersonalService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params["id"];

    if (id != undefined) {

      this.activatedRoute.params
      .pipe(
        switchMap(({id}) =>  this._personalService.getPersonaById(id))
      )
      .subscribe( persona => this.persona = persona)

    } 

  }

  guardar() {

    if (this.persona.id) {

      //Actualizar

    } else {

      //Crear persona

      const altura = this.persona.altura;

      if (!Number.isInteger(altura)) {
        this.persona.altura = altura * 100;
      }

      const peso = this.persona.peso;

      if (!Number.isInteger(peso)) {
        this.persona.peso = peso * 10;
      }

    

      this._personalService.salvarPersona(this.persona)
      .subscribe(({id}) => {

        this.router.navigate(['/personal/listado']);

      });
}


    }


    somenteNumeros (e: any) {

      let charCode = e.charCode ? e.charCode : e.keyCode;
      // charCode 8 = backspace   
      // charCode 9 = tab
    
      if (charCode != 8 && charCode != 9) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        let max = 4;    
    
        if ((e.target.value.length >= max)) return false;
      }
    }



}
