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
  responsiveLogo: string;
  hubLogo: string;
  httpScriptLogo: string;
  httpUrlLogo: string;

  constructor(
    private readonly url: HttpUrlService
  ) {}

  ngOnInit() {
    this.configuratorLogo = this.url.get('LOGOS.CONFIGURATOR');
    this.supportLogo = this.url.get('LOGOS.SUPPORT');
    this.jwtLogo = this.url.get('LOGOS.JWT');
    this.responsiveLogo = this.url.get('LOGOS.RESPONSIVE');
    this.hubLogo = this.url.get('LOGOS.HUB');
    this.httpScriptLogo = this.url.get('LOGOS.HS');
    this.httpUrlLogo = this.url.get('LOGOS.HU');
  }

}
