import { uniqueID, between } from "./support";

describe('> Support helper functions.', () => {
  it('# Should create a valid UUID V4.', () => {
    const regex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    const uuid = uniqueID();

    expect(regex.test(uuid)).toBeTruthy();
  });

  it('# Should check if number is between an interval.', () => {
    expect(between(5, 2, 7, false)).toBeTruthy();
    expect(between(1, 2, 4, false)).toBeFalsy();

    expect(between(3, 1, 3, true)).toBeTruthy();
  });
});
