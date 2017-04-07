/**
 * A test to check if ES6 imports and classes work in mocha testing.
 */
import { TestClass } from '../src/scripts/modules/TestClass';
import { assert } from 'chai';

describe('TestClass', () => {
  it('constructor', () => {
    let x = new TestClass();
    assert(x);
    assert(x.ok);
  });
});
