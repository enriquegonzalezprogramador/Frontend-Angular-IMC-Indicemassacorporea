import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { Persona } from '../../interfaces/personal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  personal: Persona[] = [];

  constructor( private _personalService: PersonalService,
              private router: Router) { }

  ngOnInit(): void {

    this._personalService.getPersonal().subscribe(personas =>  {
      this.personal = personas.reverse();
    });

  }

  crearNuevoUsuario() {
        this.router.navigate(['/personal/agregar']);
  }

}
