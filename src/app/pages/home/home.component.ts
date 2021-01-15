import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myInterval = 1800;
  activeSlideIndex = 0;

  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = true;

  // itemsPerSlide = 5;
  // singleSlideOffset = true;
  slider = [
    {image: '../../../assets/brands/C&A.png'},
    {image: '../../../assets/brands/crivit.png'},
    {image: '../../../assets/brands/geox.jpg'},
    // {image: '../../../assets/brands/guess.png'},
    // {image: '../../../assets/brands/H&M.png'},
    // {image: '../../../assets/brands/jack&jones.png'},
    // {image: '../../../assets/brands/H&M.png'},
    // {image: '../../../assets/brands/street-one2.png'},
    // {image: '../../../assets/brands/TT.jpg'},
    // {image: '../../../assets/brands/Vero moda.png'}
  ];

  slides = [
    {image: '../../../assets/home-banner-1.jpg'},
    {image: '../../../assets/home-banner-2.jpg'},
    {image: '../../../assets/home-banner-5.jpg'},
    {image: '../../../assets/діти обложка.jpg'}
  ];

  constructor() { }




  ngOnInit(): void {
  }


}
