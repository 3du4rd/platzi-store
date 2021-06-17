import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SwiperModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule{ }