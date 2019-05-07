import { Component } from '@angular/core';
import { EDGES } from '@ng-lab/layout';
import { Snippet } from './components/code/code-snipet';

@Component({
  selector: 'ng-lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-lab-demo';

  edgeSettings = {
    gutter: 4,
    edge: EDGES.RIGHT,
    color: '#ececec'
  };

  configExample = Snippet({
    lang: 'typescript',
    code: `
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
}
