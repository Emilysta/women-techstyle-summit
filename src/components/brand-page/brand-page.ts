import { Component, input } from '@angular/core';
import { TagColorPipe } from "../../pipes/tag-color-pipe";
import { Button } from "../button/button";
import { Card } from "../card/card";
import { Tag } from '../tag/tag';

@Component({
  selector: 'app-brand-page',
  imports: [Card, Button, Tag, TagColorPipe],
  templateUrl: './brand-page.html',
  styleUrl: './brand-page.scss',
})
export class BrandPage {
  public readonly brandName = input.required<string>();
  public readonly brandLogo = input.required<string>();
  public readonly brandClass = input.required<string>();
  public readonly brandDescription = input.required<string>();
  public readonly cardTitle = input.required<string>();
  public readonly cardDescription = input.required<string>();
  public readonly tags = input.required<string[]>();
}
