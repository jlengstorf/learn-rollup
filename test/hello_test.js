/**
 * A test of the mod/sayHelloTo function.
 */
import { sayHelloTo } from '../src/scripts/modules/mod1';
import { assert } from 'chai';

const id = 'thx-1138';
describe('sayHelloTo', () => {
  it('answers properly', () => {
    let res = sayHelloTo(id);
    assert(res === 'Hello, ' + id +'!');
  });
});
