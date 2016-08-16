/**
 * Says hello.
 * @param  {String} name a name
 * @return {String}      a greeting for `name`
 */
export function sayHelloTo( name ) {
  const toSay = `Hello, ${name}!`;

  return toSay;
}

/**
 * Says goodbye.
 * @param  {String} name a name
 * @return {String}      a farewell for `name`
 */
export function sayGoodbyeTo( name ) {
  const toSay = `Later, ${name}!`;

  return toSay;
}
