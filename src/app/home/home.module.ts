import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SwiperModule,
        HomeRoutingModule
    ]
})
export class HomeModule{ }