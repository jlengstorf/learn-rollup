import { sayHelloTo } from '../src/scripts/modules/mod1';
import { assert } from 'chai';

describe('sayHelloTo', () => {
  it('answers', () => {
    let res = sayHelloTo('alex');
    assert(res === 'Hello, alex!');
  });
});
