import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Persona } from '../../interfaces/personal';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: [
    `
    img{
      width: 100%;
      border-radius: 5px;
    }
    `
  ]
})
export class PersonaComponent implements OnInit {

  persona!: Persona
  resultado = {
    calculo : 0,
    indice: '',
    clasificacion: '',
    obesidade: ''
  };

  constructor( private activatedRoute: ActivatedRoute,
              private personalService: PersonalService,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.personalService.getPersonaById(id)))
    .subscribe( persona => {
      this.persona = persona
      let alt = ( this.persona.altura / 100 ) ;
      this.resultado.calculo = this.persona.peso  / (alt * alt);

      if ( this.resultado.calculo < 18.5) {

        this.resultado.indice = 'menor que 18,5';
        this.resultado.clasificacion = 'Magreza'
        this.resultado.obesidade = 'O'

      }

      if ( this.resultado.calculo >= 18.5 && this.resultado.calculo <= 24.9) {

        this.resultado.indice = 'entre 18,5 e 24,9';
        this.resultado.clasificacion = 'Normal'
        this.resultado.obesidade = 'O'

      }

      if ( this.resultado.calculo >= 25.0 && this.resultado.calculo <= 29.9) {

        this.resultado.indice = 'entre 25.0 e 29,9';
        this.resultado.clasificacion = 'Sobrepeso'
        this.resultado.obesidade = 'I'

      }

      if ( this.resultado.calculo >= 30.0 && this.resultado.calculo <= 39.9) {

        this.resultado.indice = 'entre 30.0 e 39,9';
        this.resultado.clasificacion = 'Obesidade'
        this.resultado.obesidade = 'II'

      }

      if ( this.resultado.calculo >= 40) {

        this.resultado.indice = 'mayor que 40.0';
        this.resultado.clasificacion= 'Obesidade Grave'
        this.resultado.obesidade = 'III'

      }

      

    });

  }

  regresar() {
    this.router.navigate(['/personal/listado']);
  }

}
