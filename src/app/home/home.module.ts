import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TechCardComponent } from './components/tech-card/tech-card.component';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [HomeComponent, TechCardComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
