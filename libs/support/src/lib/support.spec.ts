import { uniqueID } from "./support";

describe('> Support helper functions', () => {
  it('# Should create a valid UUID V4', () => {
    const regex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    const uuid = uniqueID();

    expect(regex.test(uuid)).toBeTruthy();
  });
});
