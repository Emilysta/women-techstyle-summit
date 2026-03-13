import { Component, input, output } from '@angular/core';

export type IconButtonVariant = 'filled' | 'outlined' | 'transparent';

@Component({
  selector: 'app-icon-button',
  imports: [],
  templateUrl: './icon-button.html',
  styleUrl: './icon-button.scss',
})
export class IconButton {
  /** Button type */
  public readonly variant = input<IconButtonVariant>('filled');
  /** Phosphor icon name (e.g. 'ph-arrow-right'). Omit for no icon. */
  public readonly icon = input<string | null>(null);

  public readonly ariaLabel = input<string | null>(null);

  public readonly buttonClick = output<Event>();
}
