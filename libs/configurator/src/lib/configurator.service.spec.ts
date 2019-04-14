import { ConfiguratorService } from "./configurator.service";

describe('> ConfiguratorService', () => {
  let configuratorService: ConfiguratorService;

  beforeEach(() => {
    configuratorService = new ConfiguratorService();
  });

  it('# Should have two default properties', () => {
    expect(configuratorService.hasOption('DEFAULT_LANG')).toBeTruthy();
    expect(configuratorService.hasOption('ENDPOINTS.LOCAL')).toBeTruthy();
  });

  it('# Should set config', () => {
    configuratorService.setOption('setting', true);
    expect(configuratorService.hasOption('setting')).toBeTruthy();
  });

  it('# Should set object with dot notation', () => {
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

    expect(configuratorService.hasOption('settings.with.deep.notation')).toBeTruthy();
  });

  it('# Should get a tree of options', () => {
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

    const fullTree = configuratorService.getOptionTree('settings', true);
    const tree = configuratorService.getOptionTree('settings', false);

    expect(fullTree).toEqual({ settings : settings});
    expect(tree).toEqual(settings);
  });

  it('# Should trigger observable when adding new option', async () => {
    expect.assertions(1);

    configuratorService.listener.subscribe(options => {
      expect(options).toEqual({ setting: 1 });
    });

    configuratorService.setOption('setting', 1);
  });
});
