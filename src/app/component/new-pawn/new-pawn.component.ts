import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-pawn',
  templateUrl: './new-pawn.component.html',
  styleUrls: ['./new-pawn.component.css']
})
export class NewPawnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.newArticle();
  }
  newArticle(): any {
    // @ts-ignore
    const swiper = new Swiper('.sliderFeaturedPosts', {
      spaceBetween: 0,
      speed: 500,
      centeredSlides: true,
      loop: true,
      slideToClickedSlide: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
      },
    });

  }
}
