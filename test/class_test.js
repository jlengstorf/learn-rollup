import { TestClass } from '../src/scripts/modules/TestClass';
import { assert } from 'chai';

describe('TestClass', () => {
  it('constructor', () => {
    let x = new TestClass();
    assert(x);
  });
});
