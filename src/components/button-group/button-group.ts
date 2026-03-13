import { Toolbar, ToolbarWidget, ToolbarWidgetGroup } from '@angular/aria/toolbar';
import { Component, input, model } from '@angular/core';

export interface Button {
  id: string;
  value: string;
  text: string;
  [key: string]: unknown;
}

@Component({
  selector: 'app-button-group',
  imports: [Toolbar, ToolbarWidget, ToolbarWidgetGroup],
  templateUrl: './button-group.html',
  styleUrl: './button-group.scss',
})
export class ButtonGroup {
  public readonly buttons = input.required<Button[]>();
  public readonly selectedButtonValue = model<Button | undefined>(undefined);
  public readonly toolbarAriaLabel = input<string | undefined>(undefined);
  public readonly groupAriaLabel = input<string | undefined>(undefined);

  public handleButtonChange(button: Button): void {
    this.selectedButtonValue.set(button);
  }
}
