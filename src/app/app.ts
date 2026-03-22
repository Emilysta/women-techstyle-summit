import { Location } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
    RouterOutlet
  ]
})
export class App {
  public readonly theme: WritableSignal<Theme> = signal<Theme>('dark');
  public readonly steps: Step[] = slides;
  public readonly currentStepIndex: WritableSignal<number>;

  private readonly router: Router = inject(Router);
  private readonly location: Location = inject(Location);

  constructor() {
    const slideId = this.location.path().replaceAll('/', '');
    const slideIndex: number = this.steps.findIndex(step => step.id === slideId);
    this.currentStepIndex = signal<number>(slideIndex >= 0 ? slideIndex : 0)
  }

  public handleStepChange(nextStep: Step | undefined): void {
    const nextStepId: string | undefined = nextStep?.id;
    if (nextStepId) {
      this.router.navigateByUrl(nextStepId);
    }
  }


  public toggleTheme(): void {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark')
  }
}
