import { Component, OnInit } from '@angular/core';
import { HttpUrlService } from '@ng-lab/http/url';

@Component({
  selector: 'ng-lab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  configuratorLogo: string;
  supportLogo: string;
  jwtLogo: string;

  constructor(
    private readonly url: HttpUrlService
  ) {}

  ngOnInit() {
    this.configuratorLogo = this.url.get('LOGOS.CONFIGURATOR');
    this.supportLogo = this.url.get('LOGOS.SUPPORT');
    this.jwtLogo = this.url.get('LOGOS.JWT');
  }

}
