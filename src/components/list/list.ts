import { Component, input } from '@angular/core';

export type ListType = 'ordered' | 'unordered';

export interface ListPoint {
  text: string;
  list?: {
    points: ListPoint[],
    type: ListType
  };
}

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  public readonly listPoints = input<ListPoint[]>([]);
  public readonly listType = input<ListType>('unordered');
}
