import { Component, input } from '@angular/core';
import { ColorVariant } from '../../models/color-variant.model';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.html',
  styleUrl: './icon-link.scss',
})
export class IconLink {
  /** Phosphor icon name (e.g. 'ph-github-logo', 'ph-linkedin-logo', 'ph-envelope'). */
  public readonly icon = input.required<string>();
  /** Hover color variant: primary, secondary, or tertiary. */
  public readonly variant = input<ColorVariant>('primary');
  /** Optional link URL. When set, renders as an anchor instead of a button. */
  public readonly href = input<string | null>(null);
  /** Accessible label for the button/link (required for screen readers). */
  public readonly ariaLabel = input.required<string>();
  /** When true and href is set, opens link in a new tab. */
  public readonly openInNewTab = input<boolean>(false);
}
