import { login, logout } from '../../actions/auth';

test('should generate Login action object', () => {
  const uid = '123'
  const action = login(uid);
  
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});  

test('should generate Logout action object', () => {
  const action = logout();

  expect(action).toEqual({
    type: 'LOGOUT'
  });
});  