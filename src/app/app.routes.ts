import { Routes } from "@angular/router";
import { slides } from "../consts/slides.const";

export const routes: Routes = [
  ...slides.map(slide => ({
    path: slide.id,
    component: slide.component,
    data: slide.inputs,
  })),
  {
    path: '**',
    redirectTo: '/initial-slide',
  },
];

