import { Pipe, PipeTransform } from '@angular/core';
import { ColorVariant } from '../models/color-variant.model';

@Pipe({
  name: 'tagColor',
})
export class TagColorPipe implements PipeTransform {

  transform(index: number): ColorVariant {
    switch(index % 3) {
      case 0: {
        return 'primary';
      }
      case 1: {
        return'secondary';
      }
      case 2: {
        return 'tertiary';
      }
      default: {
        return 'primary';
      }
    }
  }

}
