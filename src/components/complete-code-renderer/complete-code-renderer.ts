import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, input, model, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Button, ButtonGroup } from "../button-group/button-group";
import { CodeRenderer, Languages } from '../code-renderer/code-renderer';

export type FileToRender = Button & {
  value: Languages;
  filePath: string;
}

@Component({
  selector: 'app-complete-code-renderer',
  imports: [ButtonGroup, CodeRenderer],
  templateUrl: './complete-code-renderer.html',
  styleUrl: './complete-code-renderer.scss',
  host: {
    '[style.flex-direction]': 'order()'
  }
})
export class CompleteCodeRenderer {
  public order = input<'column' | 'column-reverse'>('column');
  public files = input<FileToRender[]>([]);
  public readonly selectedFile = model<FileToRender | undefined>(undefined);
  public readonly code = signal<string | undefined>(undefined);

  public readonly httpClient = inject(HttpClient);

  constructor() {
    effect(async () => {
      const fileUrl = this.selectedFile()?.filePath;
      if (fileUrl) {
        const data = await this.fetchFileContent(fileUrl);
        this.code.set(data);
      }
    });
  }

  ngOnInit(): void {
    this.selectedFile.set(this.files().at(0))
  }

  public fetchFileContent(fileUrl: string): Promise<string> {
    return lastValueFrom(this.httpClient.get(fileUrl, { responseType: 'text' }));
  }
}
