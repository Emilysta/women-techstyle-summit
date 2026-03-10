import { Component, input } from '@angular/core';
import { ColorVariant } from '../../models/color-variant.model';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
  host: {
    '[class]': 'variant()'
  }
})
export class Tag {
  public readonly icon = input<string | undefined>(undefined);
  public readonly tag = input.required<string>();
  public readonly variant = input<ColorVariant>('primary');
}
