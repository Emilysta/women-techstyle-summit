import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-image-renderer',
  imports: [],
  templateUrl: './image-renderer.html',
  styleUrl: './image-renderer.scss',
})
export class ImageRenderer {
  public readonly imageSrc: InputSignal<string> = input.required<string>();
  public readonly imageAlt: InputSignal<string | undefined> = input<string | undefined>(undefined);
}
