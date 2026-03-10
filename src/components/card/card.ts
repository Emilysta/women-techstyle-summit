import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { ColorVariant } from '../../models/color-variant.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrl: './card.scss',
  imports: [
    NgTemplateOutlet
  ]
})
export class Card {
  /** Color variant */
  public readonly variant = input<ColorVariant>('primary');
  /** Phosphor icons (e.g. 'ph-arrow-right'). Omit for no icon. */
  public readonly icons = input<string[]>([]);
  public readonly tags = input<string[]>([]);
  public readonly title = input<string | undefined>(undefined);
  public readonly description = input<string | undefined>(undefined);
  public readonly link = input<string | undefined>(undefined);
  public readonly linkText = input<string | undefined>('View project');
}
