import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing-module';

import { Public } from './public';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@NgModule({
  declarations: [
    Public
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    Header,
    Footer
  ]
})
export class PublicModule { }
