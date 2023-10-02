import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title:string = 'vicTOR x';

  constructor(private primeNGConfig:PrimeNGConfig){}

  ngOnInit(): void {
    this.primeNGConfig.ripple=true;
  }
}
