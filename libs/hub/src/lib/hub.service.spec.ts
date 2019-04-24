import { HubService } from './hub.service';

describe('> Hub Service', () => {
  let hubService: HubService;

  beforeEach(() => {
    hubService = new HubService();
  });

  it('# Should have no provision yet.', () => {
    expect(hubService.size()).toEqual(0);
  });

  it('# Should define a callback on hub', () => {
    function bar() {}

    hubService.on('foo', bar);

    expect(hubService.hasEvent('foo')).toBeTruthy();

    const events = hubService.getEventFunctions('foo');

    expect(events[0]).toEqual(bar);
  });

  it('# Should emit callback.', async () => {
    expect.assertions(1);

    function bar(arg: any) {
      expect(arg).toBeNull();
    }

    hubService.on('foo', bar);
    hubService.emit('foo', null);
  });

  it('# Should subscribe and emit on callback', async () => {
    expect.assertions(1);

    hubService.observe.subscribe(rs => {
      expect(rs.action).toEqual('emit' || 'on');
    });

    function bar() {}

    hubService.on('foo', bar);
    hubService.emit('foo', null);
  });

  it('# Should clear hub provision.', () => {
    function bar() {}

    hubService.on('foo', bar);

    expect(hubService.size()).toEqual(1);

    hubService.clear();

    expect(hubService.size()).toEqual(0);
  });

  it('# Should put off callbacks.', () => {
    function bar() {}

    hubService.on('foo', bar);

    let events = hubService.getEventFunctions('foo');
    let fns = events.findIndex(cb => cb === bar);

    expect(fns).toBeGreaterThanOrEqual(0);

    hubService.off('foo', bar);

    events = hubService.getEventFunctions('foo');
    fns = events.findIndex(cb => cb === bar);

    expect(fns).toBeLessThanOrEqual(-1);
  });
});
