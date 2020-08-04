import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'r3app-root', template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor(private primeNgConfig: PrimeNGConfig){}

  ngOnInit() {
    this.primeNgConfig.ripple = true;
}


}
