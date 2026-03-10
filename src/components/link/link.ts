import { Component, input } from '@angular/core';

export type LinkVariant = 'filled' | 'outlined';
export type IconPosition = 'leading' | 'trailing';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.html',
  styleUrl: './link.scss',
})
export class Link {
  /** Optional link URL. When set, renders as an anchor instead of a button. */
  public readonly href = input.required<string>();
  /** When true and href is set, opens link in a new tab. */
  public readonly openInNewTab = input<boolean>(false);
  /** Button type */
  public readonly variant = input<LinkVariant>('filled');
  /** Phosphor icon name (e.g. 'ph-arrow-right'). Omit for no icon. */
  public readonly icon = input<string | null>(null);
  /** Icon position relative to label */
  public readonly iconPosition = input<IconPosition>('trailing');
}
