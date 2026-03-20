import { Component, model } from '@angular/core';
import { fontOptions } from '../../../consts/font-options.const';
import { fontSizeOptions } from '../../../consts/font-size-options.const';
import { Button, ButtonGroup } from "../../button-group/button-group";

@Component({
  selector: 'app-typography-css',
  imports: [ButtonGroup],
  templateUrl: './typography-css.html',
  styleUrl: './typography-css.scss',
  host: {
    '[style.font-size]': 'currentFontSize().value'
  }
})
export class TypographyCss {
  public readonly currentFontSize = model<Button>(fontSizeOptions[0]);
  public readonly currentFont = model<Button>(fontOptions[0]);

  public readonly fontSizeOptions: Button[] = fontSizeOptions;
  public readonly fontOptions: Button[] = fontOptions;
}
