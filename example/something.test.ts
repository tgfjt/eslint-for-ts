import { createFuture } from './something';

describe('createFuture', () => {
  it('returns our future as value', () => {
    const actual = createFuture('uso');
    expect(actual).not.toBe('uso');
    expect(actual).toEqual('uso');
  });
});
