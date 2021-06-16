import { Component, OnInit } from '@angular/core';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import SwiperCore from 'swiper/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('');
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
