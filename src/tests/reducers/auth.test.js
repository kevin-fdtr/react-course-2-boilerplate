import authReducer from '../../reducers/auth';

test('login should set uid on state', () => {
  const uid = '123';
  const action = { type: 'LOGIN', uid };
  const state = authReducer({}, action);
  expect(state.uid).toBe(uid);
});

test('logout should clear uid from state', () => {
  const uid = '123';
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid }, action);
  expect(state.uid).toBeFalsy();
});