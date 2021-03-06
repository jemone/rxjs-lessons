import { CommonModule } from '@angular/common';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  declarations: [TestComponent],
})
export class LessonModule {}
