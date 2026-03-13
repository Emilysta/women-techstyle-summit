import { Component, input } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

export type Languages = 'scss' | 'xml' | 'typescript';

@Component({
  selector: 'app-code-renderer',
  imports: [Highlight, HighlightLineNumbers],
  templateUrl: './code-renderer.html',
  styleUrl: './code-renderer.scss',
})
export class CodeRenderer {
  public readonly code = input.required<string>();
  public readonly language = input.required<Languages>();
}
