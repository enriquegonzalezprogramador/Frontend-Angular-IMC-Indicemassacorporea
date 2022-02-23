import { Component, Input} from '@angular/core';
import { Persona } from '../../interfaces/personal';

@Component({
  selector: 'app-persona-card',
  templateUrl: './personal-card.component.html',
  styles: [
    `
     mat-card {
      margin-top: 20px;
    }

   .text {
    font-family: Roboto, "Helvetica Neue", sans-serif;
    font-size: 14px;
    font-weight: 500;
   }
    
    .btn-bootstrap {
  padding: .375rem .75rem;
  border: 1px solid #f44336;
  border-radius: .25rem;
  background-color: #f44336;
  color: #fff;
  transition: background-color .15s ease-in-out;
}

.btn-bootstrap:hover, .btn-bootstrap:focus {
  background-color: #ef594f;
  cursor: pointer;
}

.btn-bootstrap:active {
  background-color: #f44336;
}
    `
  ]
})
export class PersonalCardComponent {

  @Input() persona!: Persona;

}
