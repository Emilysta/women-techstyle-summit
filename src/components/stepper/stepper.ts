import { Component, input, output, signal } from '@angular/core';
import { IconButton } from "../icon-button/icon-button";

export type ButtonVariant = 'filled' | 'outlined';
export interface Step {
  id: string;
  component: any;
  inputs?: Record<string, unknown>;
}

@Component({
  selector: 'app-stepper',
  imports: [IconButton],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
})
export class Stepper {
  public readonly variant = input<ButtonVariant>('filled');
  public readonly allSteps = input.required<Step[]>();
  public readonly initialStepIndex = input<number>(0);
  public readonly currentStepIndex = signal<number>(0);
  public readonly currentStep = output<Step | undefined>();

  public ngOnInit(): void {
    if (this.initialStepIndex() >= 0
      && this.initialStepIndex() < this.allSteps().length) {
      this.currentStepIndex.set(this.initialStepIndex());
    }
  }

  public next(): void {
    if (this.currentStepIndex() + 1 < this.allSteps().length) {
      this.currentStepIndex.set(this.currentStepIndex() + 1)
      this.currentStep.emit(this.allSteps().at(this.currentStepIndex()))
    }
  }

  public previous(): void {
    if (this.currentStepIndex() - 1 >= 0) {
      this.currentStepIndex.set(this.currentStepIndex() - 1)
      this.currentStep.emit(this.allSteps().at(this.currentStepIndex()))
    }
  }

}
