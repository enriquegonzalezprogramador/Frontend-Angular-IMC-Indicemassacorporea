import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../interfaces/personal';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(persona: Persona): string {
    return `assets/no-image.png`;
  }

}
