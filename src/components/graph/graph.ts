import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-graph',
  imports: [],
  templateUrl: './graph.html',
  styleUrl: './graph.scss',
})
export class Graph {
  public readonly text1: InputSignal<string | undefined> = input<string | undefined>();
  public readonly text2: InputSignal<string | undefined> = input<string | undefined>();
  public readonly text3: InputSignal<string | undefined> = input<string | undefined>();
  public readonly text4: InputSignal<string | undefined> = input<string | undefined>();
  public readonly centeredText: InputSignal<string | undefined> = input<string | undefined>();

}
