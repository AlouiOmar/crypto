import {Component, NgZone, OnInit} from '@angular/core';
import {NgwWowService} from 'ngx-wow';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { map } from "rxjs/operators";
import { AnimationOptions } from 'ngx-lottie';

am4core.useTheme(am4themes_animated);

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-bitc',
  templateUrl: './bitc.component.html',
  styleUrls: ['./bitc.component.css']
})
export class BitcComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

}
