import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-renderer',
  imports: [],
  templateUrl: './image-renderer.html',
  styleUrl: './image-renderer.scss',
})
export class ImageRenderer {
  public readonly imageSrc = input.required<string>();
}
