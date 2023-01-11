import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule, ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
