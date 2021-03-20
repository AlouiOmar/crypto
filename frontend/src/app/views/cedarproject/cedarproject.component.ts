import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import jQuery from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cedarproject',
  templateUrl: './cedarproject.component.html',
  styleUrls: ['./cedarproject.component.css']
})
export class CedarprojectComponent implements OnInit {
   selected = [];

  optionsData: AnimationOptions = {
    path: '/assets/images/small/data2.json'
  };
  dates = [
    {date: 1, week: 'new hospital'
   },
    {date: 2, week: 'university'},
    {date: 3, week: 'infrastructure'},
    {date: 4, week: 'Homless people'},
    {date: 5, week: ''}
  ];

  slideConfig = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30',
        slidesToShow: 3
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15',
        slidesToShow: 1
      }
    }],
    nextArrow: '<a href="javascript:void(0);" class="ri-arrow-left-s-line left"></a>',
    prevArrow: '<a href="javascript:void(0);" class="ri-arrow-right-s-line right"></a>',
  };

  constructor(private router:Router) {

   }

  ngOnInit() {
  }
newpage(){
  for(let i=0;i<this.dates.length;i++){
    if(this.dates[i].date=1){
      this.router.navigateByUrl('/convert')
    }
  }

}
}
