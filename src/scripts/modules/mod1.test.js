import { sayHelloTo, sayGoodbyeTo } from './mod1';

describe('sayHelloTo()', () => {
  it('prints a greeting', () => {
    expect(sayHelloTo('John')).toEqual('Hello, John!');
  });
});

describe('sayGoodbyeTo()', () => {
  it('prints a farewell', () => {
    expect(sayGoodbyeTo('John')).toEqual('Later, John!');
  });
});
