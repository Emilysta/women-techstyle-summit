import { Component, model } from '@angular/core';
import { colorOptions } from '../../../consts/color-options.const';
import { Button, ButtonGroup } from "../../button-group/button-group";

@Component({
  selector: 'app-colors-scss',
  imports: [ButtonGroup],
  templateUrl: './colors-scss.html',
  styleUrl: './colors-scss.scss',
})
export class ColorsScss {
  public readonly currentColor = model<Button>(colorOptions[0]);
  public readonly colorOptions: Button[] = colorOptions;
}
