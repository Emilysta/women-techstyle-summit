import { Component, model } from '@angular/core';
import { colorOptions } from '../../../consts/color-options.const';
import { Button, ButtonGroup } from "../../button-group/button-group";

@Component({
  selector: 'app-colors-css',
  imports: [ButtonGroup],
  templateUrl: './colors-css.html',
  styleUrl: './colors-css.scss',
  host: {
    'lang': 'en'
  }
})
export class ColorsCss {
  public readonly currentColor = model<Button>(colorOptions[0]);
  public readonly colorOptions: Button[] = colorOptions;
}
