import { NgComponentOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { List, ListPoint, ListType } from '../../components/list/list';

export interface ComponentConfig {
  component?: any;
  inputs?: Record<string, unknown>;
}
export interface ContentConfig {
  components?: ComponentConfig[];
  alignItems?: 'flex-start' | 'center' | 'flex-end',
  justifyContent?: 'flex-start' | 'center' | 'flex-end',
  listTitle?: string;
  listPoints?: ListPoint[];
  listType?: ListType;
}

@Component({
  selector: 'app-slide',
  imports: [
    List,
    NgComponentOutlet,
  ],
  templateUrl: './slide.html',
  styleUrl: './slide.scss',
})
export class Slide {
  public readonly title = input.required<string>();
  public readonly leftSideContent = input.required<ContentConfig>();
  public readonly rightSideContent = input<ContentConfig | undefined>(undefined);
}
