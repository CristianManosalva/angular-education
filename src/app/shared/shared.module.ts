import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from './../material/material.module';
import { LoaderFacebookComponent } from './components/loader-facebook/loader-facebook.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoaderFacebookComponent],
  exports: [HeaderComponent, FooterComponent, LoaderFacebookComponent],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
