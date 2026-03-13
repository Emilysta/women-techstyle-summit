import { Component, input } from '@angular/core';
import { ColorVariant } from '../../models/color-variant.model';

export type TagSize = 'small' | 'medium' | 'large';
@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
  host: {
    '[class]': 'variant() + " " + tagSize()'
  }
})
export class Tag {
  public readonly icon = input<string | undefined>(undefined);
  public readonly tag = input.required<string>();
  public readonly variant = input<ColorVariant>('primary');
  public readonly tagSize = input<TagSize>('large');
}
