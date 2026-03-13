import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pictures-container',
  imports: [],
  templateUrl: './pictures-container.html',
  styleUrl: './pictures-container.scss',
})
export class PicturesContainer {
  public readonly mainPictureLink = input.required<string>();
  public readonly leftPIctureLink = input<string | undefined>(undefined);
  public readonly topPIctureLink = input<string | undefined>(undefined);
}
