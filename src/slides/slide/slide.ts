import { NgComponentOutlet } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
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
  minWidth?: string;
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
  public readonly title: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly leftSideContent: InputSignal<ContentConfig> = input.required<ContentConfig>();
  public readonly rightSideContent: InputSignal<ContentConfig | undefined> = input<ContentConfig | undefined>(undefined);
}
