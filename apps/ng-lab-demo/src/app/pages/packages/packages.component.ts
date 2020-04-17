import { Component, OnInit } from '@angular/core';
import { PackageState } from './state/packages.state';
import { Observable } from 'rxjs';
import { PackageModel } from './state/packages-model';
import { Snippet } from '../../components/code/code-snipet';
import { JourneyService } from '@ng-lab/journey';

@Component({
  selector: 'ng-lab-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  package$: Observable<PackageModel>;
  stringify = JSON.stringify;

  configExample = Snippet({
    lang: 'typescript',
    code: `
    import { ConfiguratorModule } from '@ng-lab/configurator';

    const CONFIG = {
      ENV: environment,
      PRODUCTION: environment.production,
      DOMAINS_API: [
        { HOST: '', KEY: '@local' },
        { HOST: '', KEY: '@origin', ORIGIN: true },
        { HOST: environment.api, KEY: '@api' }
      ],
      ENDPOINTS: {}
    };

    @NgModule({
      imports: [
        ConfiguratorModule.forRoot(CONFIG),
      ],
      exports: [
        ConfiguratorModule
      ]
    })
    export class ApplicationProvisionModule {}

    const configuratorService: ConfiguratorService = new ConfiguratorService();

    const settings = {
      one: 1,
      setting: 2,
      with: {
        deep: {
          notation: 3
        }
      }
    };

    configuratorService.setOption('settings', settings);
    configuratorService.hasOption('settings.with.deep.notation');
    `
  });

  constructor(
    private readonly pkgState: PackageState,
    public readonly journeyService: JourneyService
  ) { }

  ngOnInit(): void {
    this.package$ = this.pkgState.packages$;
  }

  dateToString(dateOrTime: any, time = true) {
    const format = new Date(dateOrTime);

    return time ? format.toLocaleTimeString('pt-PT') : format.toLocaleDateString('pt-PT');
  }

}
