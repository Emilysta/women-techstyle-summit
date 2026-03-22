import { NgComponentOutlet } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { IconButton } from "../components/icon-button/icon-button";
import { Step, Stepper } from "../components/stepper/stepper";
import { slides } from '../consts/slides.const';

export type Theme = 'dark' | 'light';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    IconButton,
    Stepper,
    NgComponentOutlet,
  ]
})
export class App {
  public readonly currentStep: WritableSignal<Step | undefined> = signal<Step | undefined>(undefined);
  public readonly theme: WritableSignal<Theme> = signal<Theme>('dark');
  public readonly steps: Step[] = slides;

  public handleStepChange(nextStep: Step | undefined): void {
    this.currentStep.set(nextStep);
  }

  public toggleTheme(): void {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark')
  }
}
