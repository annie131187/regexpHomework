import Validator from '../app';

test('test Validator for user name', () => {
  const userName = new Validator();
  expect(userName.validateUsername('Anna12_13-Sh')).toBeTruthy();
  expect(userName.validateUsername('Anna12_13')).toBeFalsy();
  expect(userName.validateUsername('23Anna12_13Sh')).toBeFalsy();
  expect(userName.validateUsername('Anna1234-Sh')).toBeFalsy();
});
