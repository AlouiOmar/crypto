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
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css']
})
export class EthereumComponent implements OnInit {
 
  
  private data = [];
  private chart: am4maps.MapChart;
  private lastDate = 0;
  private TICKINTERVAL = 86400000;
  private XAXISRANGE: any;
  constructor(private wowService: NgwWowService, private zone: NgZone) {
    this.wowService.init();
  }
  optionsData: AnimationOptions = {
    path: '/assets/images/small/data1.json'
  };

  public chart1 = {
    chart: {
      height: 112,
      type: 'area',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      group: 'sparklines',
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
      }
    },
    series: [{
      data: this.data
    }],
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime',
      range: this.XAXISRANGE,
    },
    yaxis: {
      max: 100
    },
    legend: {
      show: false
    },
  };
  public chart2 = {
    chart: {
      height: 400,
      type: 'bar',
      sparkline: {
        show: false

      },
      toolbar: {
        show: false
      },
    },
    colors: ['#0084ff', '#ffd400'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false,
      width: 5,
      colors: ['#ffffff'],
    },
    series: [{
      name: 'Mobile',
      enabled: 'true',
      data: [44, 90, 90, 60, 115]
    }, {
      name: 'Desktop',
      data: [35, 80, 100, 70, 95]
    }],


    fill: {
      opacity: 1

    },
    tooltip: {
      y: {
        formatter(val) {
          return '$ ' + val + ' thousands';
        }
      }
    }
  };
  public USD = [
    {
      img :'assets/nebras.png',
      name: 'Cedarcoin',  
       balance: '0',
      color: 'success',
      bal_coin: '0 BTC',
      bal_TND: '0.000 TND',
    },
    {
      img : '/Home',
      name: 'Bitcoin Cash',
      balance: '0',
      color: 'success',
      bal_coin: '0 BTC',
      bal_TND: '0.000 TND',
    },
    {
      img : '/Home',
      name: 'Ethereum',
      balance: '0%',
      color: 'success',
      bal_coin: '0 LTh',
      bal_TND: '0.000 TND',
    },
    {
      img : '/Home',
      name: 'Ethereum Classic',
      balance: '0%',
      color: 'success',
      bal_coin: '0 ETC',
      bal_TND: '0.000 TND',
    },
    {
      img : '/Home',
      name: 'EOS',
      balance: '0%',
      color: 'success',
      bal_coin: '0 EOS',
      bal_TND: '0.000 TND',
    },
    {
      img : '/Home',
      name: 'Litecoin',
      balance: '0%',
      color: 'success',
      bal_coin: '0 LTC',
      bal_TND: '0.000 TND',
    },
    
    
  ];
  
  public dash1MultiBarChart = {
    chart: {
      height: 268,
      type: 'area',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      group: 'sparklines',
    },
    colors: ['#0084ff', '#00ca00', '#ffd400' ],
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [3, 2, 3],
      curve: 'straight',
    },
    series: [{
      name: 'Session Duration',
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
      {
        name: 'Page Views',
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Total Visits',
        data: [87, 57, 74, 30, 75, 38, 62, 47, 82, 56, 45, 47]
      }
    ],
    legend: {
      show: false
    },
    markers: {
      size: 0,

      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
        '10 Jan', '11 Jan', '12 Jan'
      ],
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      y: [{
        title: {
          formatter(val) {
            return val + ' (mins)';
          }
        }
      }, {
        title: {
          formatter(val) {
            return val + ' per session';
          }
        }
      }, {
        title: {
          formatter(val) {
            return val;
          }
        }
      }]
    },
    grid: {
      borderColor: '#f1f1f1',
    }
  };
  public dash1DonetChart = {
    chart: {
      height: 235,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '55%'
        }
      }
    },
    series: [44, 55, 41],
    colors: ['#00ca00', '#e64141' , '#0084ff'],
    labels: ['Server1', 'Server2', 'Server3'],
    legend: {
      position: 'bottom'
    }
  };

  public countryData = [
    {
      id: 1,
      country_name: 'United States',
      percent: '95',
      color: 'primary',
    },
    {
      id: 1,
      country_name: 'India',
      percent: '85',
      color: 'warning',
    },
    {
      id: 1,
      country_name: 'Austrialia',
      percent: '65',
      color: 'success',
    },
    {
      id: 1,
      country_name: 'Brazil',
      percent: '45',
      color: 'danger',
    }
  ];
  public chart3 = {
    chart: {
      height: 140,
      type: 'area',
      sparkline: {
        enabled: true
      },
      group: 'sparklines',

    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
      }
    },
    series: [{
      name: 'series1',
      data: [70, 40, 60, 30, 60]
    }, ],
    colors: ['#ffd400'],

    xaxis: {
      type: 'datetime',
      categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00', '2018-12-19T01:30:00'],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  };
  public mapChart = function(element) {

    const countries = {
      AD: {
        country: 'Andorra',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'andorraLow', 'andorraHigh' ]
      },
      AE: {
        country: 'United Arab Emirates',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'uaeLow', 'uaeHigh' ]
      },
      AF: {
        country: 'Afghanistan',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      AG: {
        country: 'Antigua and Barbuda',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'antiguaBarbudaLow', 'antiguaBarbudaHigh' ]
      },
      AI: {
        country: 'Anguilla',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'anguillaLow', 'anguillaHigh' ]
      },
      AL: {
        country: 'Albania',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'albaniaLow', 'albaniaHigh' ]
      },
      AM: {
        country: 'Armenia',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'armeniaLow', 'armeniaHigh' ]
      },
      AO: {
        country: 'Angola',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'angolaLow', 'angolaHigh' ]
      },
      AQ: {
        country: 'Antarctica',
        continent_code: 'AN',
        continent: 'Antarctica',
        maps: []
      },
      AR: {
        country: 'Argentina',
        continent_code: 'SA',
        continent: 'South America',
        maps: [ 'argentinaLow', 'argentinaHigh' ]
      },
      AS: {
        country: 'American Samoa',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: [ 'americanSamoaLow', 'americanSamoaHigh' ]
      },
      AT: {
        country: 'Austria',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'austriaLow', 'austriaHigh' ]
      },
      AU: {
        country: 'Australia',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: [ 'australiaLow', 'australiaHigh' ]
      },
      AW: {
        country: 'Aruba',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'arubaLow', 'arubaHigh' ]
      },
      AX: {
        country: 'Aland Islands',
        continent_code: 'EU',
        continent: 'Europe',
        maps: []
      },
      AZ: {
        country: 'Azerbaijan',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'azerbaijanLow', 'azerbaijanHigh' ]
      },
      BA: {
        country: 'Bosnia and Herzegovina',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'bosniaHerzegovinaLow', 'bosniaHerzegovinaHigh', 'bosniaHerzegovinaCantonsLow', 'bosniaHerzegovinaCantonsHigh' ]
      },
      BB: {
        country: 'Barbados',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'barbadosLow', 'barbadosHigh' ]
      },
      BD: {
        country: 'Bangladesh',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'bangladeshLow', 'bangladeshHigh' ]
      },
      BE: {
        country: 'Belgium',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'belgiumLow', 'belgiumHigh' ]
      },
      BF: {
        country: 'Burkina Faso',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'burkinaFasoLow', 'burkinaFasoHigh' ]
      },
      BG: {
        country: 'Bulgaria',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'bulgariaLow', 'bulgariaHigh' ]
      },
      BH: {
        country: 'Bahrain',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'bahrainLow', 'bahrainHigh' ]
      },
      BI: {
        country: 'Burundi',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'burundiLow', 'burundiHigh' ]
      },
      BJ: {
        country: 'Benin',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'beninLow', 'beninHigh' ]
      },
      BL: {
        country: 'Saint Barthelemy',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      BM: {
        country: 'Bermuda',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'bermudaLow', 'bermudaHigh' ]
      },
      BN: {
        country: 'Brunei Darussalam',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'bruneiDarussalamLow', 'bruneiDarussalamHigh' ]
      },
      BO: {
        country: 'Bolivia, Plurinational State of',
        continent_code: 'SA',
        continent: 'South America',
        maps: [ 'boliviaLow', 'boliviaHigh' ]
      },
      BQ: {
        country: 'Bonaire, Sint Eustatius and Saba',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'bonaireSintEustatiusSabaLow', 'bonaireSintEustatiusSabaHigh' ]
      },
      BR: {
        country: 'Brazil',
        continent_code: 'SA',
        continent: 'South America',
        maps: [ 'brazilLow', 'brazilHigh' ]
      },
      BS: {
        country: 'Bahamas',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      BT: {
        country: 'Bhutan',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'bhutanLow', 'bhutanHigh' ]
      },
      BV: {
        country: 'Bouvet Island',
        continent_code: 'AN',
        continent: 'Antarctica',
        maps: []
      },
      BW: {
        country: 'Botswana',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'botswanaLow', 'botswanaHigh' ]
      },
      BY: {
        country: 'Belarus',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'belarusLow', 'belarusHigh' ]
      },
      BZ: {
        country: 'Belize',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'belizeLow', 'belizeHigh' ]
      },
      CA: {
        country: 'Canada',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'canadaLow', 'canadaHigh' ]
      },
      CC: {
        country: 'Cocos (Keeling) Islands',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      CD: {
        country: 'Congo, the Democratic Republic of the',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'congoDRLow', 'congoDRHigh' ]
      },
      CF: {
        country: 'Central African Republic',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'centralAfricanRepublicLow', 'centralAfricanRepublicHigh' ]
      },
      CG: {
        country: 'Congo',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'congoLow', 'congoHigh' ]
      },
      CH: {
        country: 'Switzerland',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'switzerlandLow', 'switzerlandHigh' ]
      },
      CI: {
        country: 'Cote d\'Ivoire',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      CK: {
        country: 'Cook Islands',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      CL: {
        country: 'Chile',
        continent_code: 'SA',
        continent: 'South America',
        maps: [ 'chileLow', 'chileHigh' ]
      },
      CM: {
        country: 'Cameroon',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'cameroonLow', 'cameroonHigh' ]
      },
      CN: {
        country: 'China',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'chinaLow', 'chinaHigh' ]
      },
      CO: {
        country: 'Colombia',
        continent_code: 'SA',
        continent: 'South America',
        maps: [ 'colombiaLow', 'colombiaHigh', 'colombiaMuniLow', 'colombiaMuniHigh' ]
      },
      CR: {
        country: 'Costa Rica',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'costaRicaLow', 'costaRicaHigh' ]
      },
      CU: {
        country: 'Cuba',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      CV: {
        country: 'Cape Verde',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'capeVerdeLow', 'capeVerdeHigh' ]
      },
      CW: {
        country: 'Curacao',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'curacaoLow', 'curacaoHigh' ]
      },
      CX: {
        country: 'Christmas Island',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      CY: {
        country: 'Cyprus',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'cyprusLow', 'cyprusHigh', 'cyprusNorthCyprusLow', 'cyprusNorthCyprusHigh' ]
      },
      CZ: {
        country: 'Czech Republic',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'czechiaLow', 'czechiaHigh' ]
      },
      DE: {
        country: 'Germany',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'germanyLow', 'germanyHigh' ]
      },
      DJ: {
        country: 'Djibouti',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'djiboutiLow', 'djiboutiHigh' ]
      },
      DK: {
        country: 'Denmark',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'denmarkLow', 'denmarkHigh' ]
      },
      DM: {
        country: 'Dominica',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'dominicaLow', 'dominicaHigh' ]
      },
      DO: {
        country: 'Dominican Republic',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'dominicanRepublicLow', 'dominicanRepublicHigh', 'dominicanRepublicMuniLow', 'dominicanRepublicMuniHigh' ]
      },
      DZ: {
        country: 'Algeria',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'algeriaLow', 'algeriaHigh' ]
      },
      EC: {
        country: 'Ecuador',
        continent_code: 'SA',
        continent: 'South America',
        maps: [ 'ecuadorLow', 'ecuadorHigh' ]
      },
      EE: {
        country: 'Estonia',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'estoniaLow', 'estoniaHigh' ]
      },
      EG: {
        country: 'Egypt',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'egyptLow', 'egyptHigh' ]
      },
      EH: {
        country: 'Western Sahara',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      ER: {
        country: 'Eritrea',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      ES: {
        country: 'Spain',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'spainLow', 'spainHigh', 'spainProvincesLow', 'spainProvincesHigh' ]
      },
      ET: {
        country: 'Ethiopia',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      FI: {
        country: 'Finland',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'finlandLow', 'finlandHigh' ]
      },
      FJ: {
        country: 'Fiji',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: [ 'fijiEastLow', 'fijiEastHigh', 'fijiWestLow', 'fijiWestHigh' ]
      },
      FK: {
        country: 'Falkland Islands (Malvinas)',
        continent_code: 'SA',
        continent: 'South America',
        maps: []
      },
      FM: {
        country: 'Micronesia, Federated States of',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      FO: {
        country: 'Faroe Islands',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'faroeIslandsLow', 'faroeIslandsHigh' ]
      },
      FR: {
        country: 'France',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'franceLow', 'franceHigh', 'franceDepartmentsLow', 'franceDepartmentsHigh' ]
      },
      GA: {
        country: 'Gabon',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'gabonLow', 'gabonHigh' ]
      },
      GB: {
        country: 'United Kingdom',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'ukLow', 'ukHigh', 'ukCountiesLow', 'ukCountiesHigh' ]
      },
      'GB-CHA': {
        country: 'Channel Islands',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'channelIslandsLow', 'channelIslandsHigh' ]
      },
      GD: {
        country: 'Grenada',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      GE: {
        country: 'Georgia',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'georgiaLow', 'georgiaHigh', 'georgiaSouthOssetiaLow', 'georgiaSouthOssetiaHigh' ]
      },
      GF: {
        country: 'French Guiana',
        continent_code: 'SA',
        continent: 'South America',
        maps: [ 'frenchGuianaLow', 'frenchGuianaHigh' ]
      },
      GG: {
        country: 'Guernsey',
        continent_code: 'EU',
        continent: 'Europe',
        maps: []
      },
      GH: {
        country: 'Ghana',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      GI: {
        country: 'Gibraltar',
        continent_code: 'EU',
        continent: 'Europe',
        maps: []
      },
      GL: {
        country: 'Greenland',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'greenlandLow', 'greenlandHigh' ]
      },
      GM: {
        country: 'Gambia',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      GN: {
        country: 'Guinea',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'guineaLow', 'guineaHigh' ]
      },
      GP: {
        country: 'Guadeloupe',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      GQ: {
        country: 'Equatorial Guinea',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'equatorialGuineaLow', 'equatorialGuineaHigh' ]
      },
      GR: {
        country: 'Greece',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'greeceLow', 'greeceHigh' ]
      },
      GS: {
        country: 'South Georgia and the South Sandwich Islands',
        continent_code: 'AN',
        continent: 'Antarctica',
        maps: []
      },
      GT: {
        country: 'Guatemala',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      GU: {
        country: 'Guam',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      GW: {
        country: 'Guinea-Bissau',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      GY: {
        country: 'Guyana',
        continent_code: 'SA',
        continent: 'South America',
        maps: []
      },
      HK: {
        country: 'Hong Kong',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'hongKongLow', 'hongKongHigh' ]
      },
      HM: {
        country: 'Heard Island and McDonald Islands',
        continent_code: 'AN',
        continent: 'Antarctica',
        maps: []
      },
      HN: {
        country: 'Honduras',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'hondurasLow', 'hondurasHigh' ]
      },
      HR: {
        country: 'Croatia',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'croatiaLow', 'croatiaHigh' ]
      },
      HT: {
        country: 'Haiti',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      HU: {
        country: 'Hungary',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'hungaryLow', 'hungaryHigh' ]
      },
      ID: {
        country: 'Indonesia',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'indonesiaLow', 'indonesiaHigh' ]
      },
      IE: {
        country: 'Ireland',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'irelandLow', 'irelandHigh' ]
      },
      IL: {
        country: 'Israel',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'israelLow', 'israelHigh', 'israelPalestineLow', 'israelPalestineHigh' ]
      },
      IM: {
        country: 'Isle of Man',
        continent_code: 'EU',
        continent: 'Europe',
        maps: []
      },
      IN: {
        country: 'India',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'indiaLow', 'indiaHigh' ]
      },
      IO: {
        country: 'British Indian Ocean Territory',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      IQ: {
        country: 'Iraq',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      IR: {
        country: 'Iran, Islamic Republic of',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      IS: {
        country: 'Iceland',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'icelandLow', 'icelandHigh' ]
      },
      IT: {
        country: 'Italy',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'italyLow', 'italyHigh' ]
      },
      JE: {
        country: 'Jersey',
        continent_code: 'EU',
        continent: 'Europe',
        maps: []
      },
      JM: {
        country: 'Jamaica',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      JO: {
        country: 'Jordan',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      JP: {
        country: 'Japan',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'japanLow', 'japanHigh' ]
      },
      KE: {
        country: 'Kenya',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'kenyaLow', 'kenyaHigh' ]
      },
      KG: {
        country: 'Kyrgyzstan',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'kyrgyzstanLow', 'kyrgyzstanHigh' ]
      },
      KH: {
        country: 'Cambodia',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'cambodiaLow', 'cambodiaHigh' ]
      },
      KI: {
        country: 'Kiribati',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      KM: {
        country: 'Comoros',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      KN: {
        country: 'Saint Kitts and Nevis',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      KP: {
        country: 'Korea, Democratic People\'s Republic of',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'northKoreaLow', 'northKoreaHigh' ]
      },
      KR: {
        country: 'Korea, Republic of',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'southKoreaLow', 'southKoreaHigh' ]
      },
      KT: {
        country: 'Saint Kitts and Nevis',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'stKittsNevisLow', 'stKittsNevisHigh' ]
      },
      KW: {
        country: 'Kuwait',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      KY: {
        country: 'Cayman Islands',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      KZ: {
        country: 'Kazakhstan',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'kazakhstanLow', 'kazakhstanHigh' ]
      },
      LA: {
        country: 'Lao People\'s Democratic Republic',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      LB: {
        country: 'Lebanon',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      LC: {
        country: 'Saint Lucia',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'saintLuciaLow', 'saintLuciaHigh' ]
      },
      LI: {
        country: 'Liechtenstein',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'liechtensteinLow', 'liechtensteinHigh' ]
      },
      LK: {
        country: 'Sri Lanka',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'sriLankaLow', 'sriLankaHigh' ]
      },
      LR: {
        country: 'Liberia',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      LS: {
        country: 'Lesotho',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      LT: {
        country: 'Lithuania',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'lithuaniaLow', 'lithuaniaHigh' ]
      },
      LU: {
        country: 'Luxembourg',
        continent_code: 'EU',
        continent: 'Europe',
        maps: []
      },
      LV: {
        country: 'Latvia',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'latviaLow', 'latviaHigh' ]
      },
      LY: {
        country: 'Libya',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      MA: {
        country: 'Morocco',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'moroccoLow', 'moroccoHigh' ]
      },
      MC: {
        country: 'Monaco',
        continent_code: 'EU',
        continent: 'Europe',
        maps: []
      },
      MD: {
        country: 'Moldova, Republic of',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'moldovaLow', 'moldovaHigh' ]
      },
      ME: {
        country: 'Montenegro',
        continent_code: 'EU',
        continent: 'Europe',
        maps: []
      },
      MF: {
        country: 'Saint Martin (French Part)',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      MG: {
        country: 'Madagascar',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      MH: {
        country: 'Marshall Islands',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      MK: {
        country: 'North Macedonia',
        continent_code: 'EU',
        continent: 'Europe',
        maps: []
      },
      ML: {
        country: 'Mali',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'maliLow', 'maliHigh' ]
      },
      MM: {
        country: 'Myanmar',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      MN: {
        country: 'Mongolia',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'mongoliaLow', 'mongoliaHigh' ]
      },
      MO: {
        country: 'Macao',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      MP: {
        country: 'Northern Mariana Islands',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      MQ: {
        country: 'Martinique',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      MR: {
        country: 'Mauritania',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      MS: {
        country: 'Montserrat',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      MT: {
        country: 'Malta',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'maltaLow', 'maltaHigh' ]
      },
      MU: {
        country: 'Mauritius',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      MV: {
        country: 'Maldives',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'maldivesLow', 'maldivesHigh', 'maldivesIslandsLow', 'maldivesIslandsHigh' ]
      },
      MW: {
        country: 'Malawi',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      MX: {
        country: 'Mexico',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'mexicoLow', 'mexicoHigh' ]
      },
      MY: {
        country: 'Malaysia',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'malaysiaLow', 'malaysiaHigh' ]
      },
      MZ: {
        country: 'Mozambique',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      NA: {
        country: 'Namibia',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'namibiaLow', 'namibiaHigh' ]
      },
      NC: {
        country: 'New Caledonia',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      NE: {
        country: 'Niger',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      NF: {
        country: 'Norfolk Island',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      NG: {
        country: 'Nigeria',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'nigeriaLow', 'nigeriaHigh' ]
      },
      NI: {
        country: 'Nicaragua',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'nicaraguaLow', 'nicaraguaHigh' ]
      },
      NL: {
        country: 'Netherlands',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'netherlandsLow', 'netherlandsHigh' ]
      },
      NO: {
        country: 'Norway',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'norwayLow', 'norwayHigh' ]
      },
      NP: {
        country: 'Nepal',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'nepalLow', 'nepalHigh' ]
      },
      NR: {
        country: 'Nauru',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      NU: {
        country: 'Niue',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      NZ: {
        country: 'New Zealand',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: [ 'newZealandLow', 'newZealandHigh' ]
      },
      OM: {
        country: 'Oman',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'omanLow', 'omanHigh' ]
      },
      PA: {
        country: 'Panama',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'panamaLow', 'panamaHigh' ]
      },
      PE: {
        country: 'Peru',
        continent_code: 'SA',
        continent: 'South America',
        maps: [ 'peruLow', 'peruHigh' ]
      },
      PF: {
        country: 'French Polynesia',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      PG: {
        country: 'Papua New Guinea',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      PH: {
        country: 'Philippines',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'philippinesLow', 'philippinesHigh' ]
      },
      PK: {
        country: 'Pakistan',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'pakistanLow', 'pakistanHigh' ]
      },
      PL: {
        country: 'Poland',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'polandLow', 'polandHigh' ]
      },
      PM: {
        country: 'Saint Pierre and Miquelon',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'stPierreMiquelonLow', 'stPierreMiquelonHigh' ]
      },
      PN: {
        country: 'Pitcairn',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      PR: {
        country: 'Puerto Rico',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'puertoRicoLow', 'puertoRicoHigh' ]
      },
      PS: {
        country: 'Palestinian, State of',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'palestineLow', 'palestineHigh' ]
      },
      PT: {
        country: 'Portugal',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'portugalLow', 'portugalHigh', 'portugalRegionsLow', 'portugalRegionsHigh' ]
      },
      PW: {
        country: 'Palau',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      PY: {
        country: 'Paraguay',
        continent_code: 'SA',
        continent: 'South America',
        maps: [ 'paraguayLow', 'paraguayHigh']
      },
      QA: {
        country: 'Qatar',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'qatarLow', 'qatarHigh' ]
      },
      RE: {
        country: 'Reunion',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      RO: {
        country: 'Romania',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'romaniaLow', 'romaniaHigh' ]
      },
      RS: {
        country: 'Serbia',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'serbiaLow', 'serbiaHigh', 'serbiaNoKosovoLow', 'serbiaNoKosovoHigh' ]
      },
      RU: {
        country: 'Russian Federation',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'russiaLow', 'russiaHigh', 'russiaCrimeaLow', 'russiaCrimeaHigh' ]
      },
      RW: {
        country: 'Rwanda',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      SA: {
        country: 'Saudi Arabia',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'saudiArabiaLow', 'saudiArabiaHigh' ]
      },
      SB: {
        country: 'Solomon Islands',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: [ 'solomonIslandsLow', 'solomonIslandsHigh' ]
      },
      SC: {
        country: 'Seychelles',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'seychellesLow', 'seychellesHigh' ]
      },
      SD: {
        country: 'Sudan',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'sudanLow', 'sudanHigh' ]
      },
      SE: {
        country: 'Sweden',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'swedenLow', 'swedenHigh' ]
      },
      SG: {
        country: 'Singapore',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'singaporeLow', 'singaporeHigh' ]
      },
      SH: {
        country: 'Saint Helena, Ascension and Tristan da Cunha',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'saintHelenaLow', 'saintHelenaHigh' ]
      },
      SI: {
        country: 'Slovenia',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'sloveniaLow', 'sloveniaHigh', 'sloveniaRegionsLow', 'sloveniaRegionsHigh' ]
      },
      SJ: {
        country: 'Svalbard and Jan Mayen',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'svalbardLow', 'svalbardHigh' ]
      },
      SK: {
        country: 'Slovakia',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'slovakiaLow', 'slovakiaHigh' ]
      },
      SL: {
        country: 'Sierra Leone',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      SM: {
        country: 'San Marino',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'sanMarinoLow', 'sanMarinoHigh' ]
      },
      SN: {
        country: 'Senegal',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'senegalLow', 'senegalHigh' ]
      },
      SO: {
        country: 'Somalia',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'somaliaLow', 'somaliaHigh' ]
      },
      SR: {
        country: 'Suriname',
        continent_code: 'SA',
        continent: 'South America',
        maps: []
      },
      SS: {
        country: 'South Sudan',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      ST: {
        country: 'Sao Tome and Principe',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'saoTomePrincipeLow', 'saoTomePrincipeHigh' ]
      },
      SV: {
        country: 'El Salvador',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'elSalvadorLow', 'elSalvadorHigh' ]
      },
      SX: {
        country: 'Sint Maarten (Dutch Part)',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      SY: {
        country: 'Syrian Arab Republic',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'syriaLow', 'syriaHigh' ]
      },
      SZ: {
        country: 'Swaziland',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'eswatiniLow', 'eswatiniHigh' ]
      },
      TC: {
        country: 'Turks and Caicos Islands',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      TD: {
        country: 'Chad',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'chadLow', 'chadHigh' ]
      },
      TF: {
        country: 'French Southern Territories',
        continent_code: 'AN',
        continent: 'Antarctica',
        maps: []
      },
      TG: {
        country: 'Togo',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      TH: {
        country: 'Thailand',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'thailandLow', 'thailandHigh' ]
      },
      TJ: {
        country: 'Tajikistan',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'tajikistanLow', 'tajikistanHigh' ]
      },
      TK: {
        country: 'Tokelau',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      TL: {
        country: 'Timor-Leste',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      TM: {
        country: 'Turkmenistan',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      TN: {
        country: 'Tunisia',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'tunisiaLow', 'tunisiaHigh' ]
      },
      TO: {
        country: 'Tonga',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      TR: {
        country: 'Turkey',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'turkeyLow', 'turkeyHigh' ]
      },
      TT: {
        country: 'Trinidad and Tobago',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      TV: {
        country: 'Tuvalu',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      TW: {
        country: 'Taiwan, Province of China',
        continent_code: 'AS',
        continent: 'Asia',
        maps: []
      },
      TZ: {
        country: 'Tanzania, United Republic of',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'tanzaniaLow', 'tanzaniaHigh' ]
      },
      UA: {
        country: 'Ukraine',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'ukraineLow', 'ukraineHigh' ]
      },
      UG: {
        country: 'Uganda',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      UM: {
        country: 'United States Minor Outlying Islands',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      US: {
        country: 'United States',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'usaLow', 'usaHigh', 'usaTerritoriesLow', 'usaTerritoriesHigh', 'usaTerritories2Low', 'usaTerritories2High' ]
      },
      UY: {
        country: 'Uruguay',
        continent_code: 'SA',
        continent: 'South America',
        maps: []
      },
      UZ: {
        country: 'Uzbekistan',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'uzbekinstanLow', 'uzbekinstanHigh' ]
      },
      VA: {
        country: 'Holy See (Vatican City State)',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'vaticanLow', 'vaticanHigh' ]
      },
      VC: {
        country: 'Saint Vincent and the Grenadines',
        continent_code: 'NA',
        continent: 'North America',
        maps: [ 'saintVincentLow', 'saintVincentHigh' ]
      },
      VE: {
        country: 'Venezuela, Bolivarian Republic of',
        continent_code: 'SA',
        continent: 'South America',
        maps: [ 'venezuelaLow', 'venezuelaHigh' ]
      },
      VG: {
        country: 'Virgin Islands, British',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      VI: {
        country: 'Virgin Islands, U.S.',
        continent_code: 'NA',
        continent: 'North America',
        maps: []
      },
      VN: {
        country: 'Viet Nam',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'vietnamLow', 'vietnamHigh' ]
      },
      VU: {
        country: 'Vanuatu',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      WF: {
        country: 'Wallis and Futuna',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: []
      },
      WS: {
        country: 'Samoa',
        continent_code: 'OC',
        continent: 'Oceania',
        maps: [ 'samoaLow', 'samoaHigh' ]
      },
      YE: {
        country: 'Yemen',
        continent_code: 'AS',
        continent: 'Asia',
        maps: [ 'yemenLow', 'yemenHigh' ]
      },
      YT: {
        country: 'Mayotte',
        continent_code: 'AF',
        continent: 'Africa',
        maps: []
      },
      ZA: {
        country: 'South Africa',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'southAfricaLow', 'southAfricaHigh' ]
      },
      ZM: {
        country: 'Zambia',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'zambiaLow', 'zambiaHigh' ]
      },
      ZW: {
        country: 'Zimbabwe',
        continent_code: 'AF',
        continent: 'Africa',
        maps: [ 'zimbabweLow', 'zimbabweHigh' ]
      },
      XK: {
        country: 'Kosovo',
        continent_code: 'EU',
        continent: 'Europe',
        maps: [ 'kosovoLow', 'kosovoHigh' ]
      }
    };


    const continents = {
      AF: 0,
      AN: 1,
      AS: 2,
      EU: 3,
      NA: 4,
      OC: 5,
      SA: 6
    };

    // Create map instance
    const chart = am4core.create(element, am4maps.MapChart);
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series for world map
    const worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.useGeodata = true;
    worldSeries.geodata = am4geodata_worldLow;
    worldSeries.exclude = ['AQ'];

    const worldPolygon = worldSeries.mapPolygons.template;
    worldPolygon.tooltipText = '{name}';
    worldPolygon.nonScalingStroke = true;
    worldPolygon.strokeOpacity = 0.5;
    worldPolygon.fill = am4core.color('#eee');
    worldPolygon.propertyFields.fill = 'color';

    // let hs = worldPolygon.states.create('hover');
    // hs.properties.fill = chart.colors.getIndex(9);


    // Create country specific series (but hide it for now)
    const countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
    countrySeries.useGeodata = true;
    countrySeries.hide();
    countrySeries.geodataSource.events.on('done', function(ev) {
      worldSeries.hide();
      countrySeries.show();
    });

    const countryPolygon = countrySeries.mapPolygons.template;
    countryPolygon.tooltipText = '{name}';
    countryPolygon.nonScalingStroke = true;
    countryPolygon.strokeOpacity = 0.5;
    countryPolygon.fill = am4core.color('#eee');

    const hs = countryPolygon.states.create('hover');
    hs.properties.fill = chart.colors.getIndex(9);

    // Set up click events
    worldPolygon.events.on('hit', function(ev) {
      ev.target.series.chart.zoomToMapObject(ev.target);
      // const map = ev.target.dataItem.dataContext.map;
      if (map) {
        ev.target.isHover = false;
        countrySeries.geodataSource.url = 'https://www.amcharts.com/lib/4/geodata/json/' + map + '.json';
        countrySeries.geodataSource.load();
      }
    });

    // Set up data for countries
    const data = [];
    for (const id in countries) {
      if (countries.hasOwnProperty(id)) {
        const country = countries[id];
        if (country.maps.length) {
          data.push({
            id,
            color: chart.colors.getIndex(continents[country.continent_code]),
            map: country.maps[0]
          });
        }
      }
    }
    worldSeries.data = data;

    // Zoom control
    chart.zoomControl = new am4maps.ZoomControl();

    const homeButton = new am4core.Button();
    homeButton.events.on('hit', function() {
      worldSeries.show();
      countrySeries.hide();
      chart.goHome();
    });

    homeButton.icon = new am4core.Sprite();
    homeButton.padding(7, 5, 7, 5);
    homeButton.width = 30;
    homeButton.icon.path = 'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8';
    homeButton.marginBottom = 10;
    homeButton.parent = chart.zoomControl;
    homeButton.insertBefore(chart.zoomControl.plusButton);

  };

  ngOnInit() {
    this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {min: 10, max: 90});
    this.resetData();
    this.zone.runOutsideAngular(() => {
      this.mapChart('chartdiv');
    });
  }
  getDayWiseTimeSeries = function(baseval, count, yrange) {
    let i = 0;
    while (i < count) {
      const x = baseval;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      this.data.push({
        x,
        y
      });
      this.lastDate = baseval;
      baseval += this.TICKINTERVAL;
      i++;
    }
  };



  resetData = function() {
    this.data = this.data.slice(this.data.length - 10, this.data.length);
  };




}
