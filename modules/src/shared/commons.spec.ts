import { getEnvTest } from './commons';

describe('get environment variable test', () => {
  it('value ENV_1 & ENV_2 should be exist', () => {
    const value = getEnvTest();
    expect(value).toEqual('pingpong');
  });
});
