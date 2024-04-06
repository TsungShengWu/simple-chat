import { createStore, createEffect } from 'effector';
import api from '../api';
import { UserStore, LoginPayload, LoginResult, User } from './types';

const initStore: UserStore = {};

export const $user = createStore<UserStore>(initStore);

export const loginFx = createEffect((data: LoginPayload) =>
  api.post<LoginResult>('auth/login', data).then(({ data }) => {
    // Append the token to every request.
    api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    return data;
  }),
);

export const logoutFx = createEffect(() =>
  api.get('auth/logout').finally(() => {
    api.defaults.headers.common.Authorization = undefined;
  }),
);

export const getProfileFx = createEffect(() => api.get<User>('users/me'));

/**
 * Subscription.
 */
$user.on(loginFx.doneData, (state, data) => ({
  ...state,
  ...data,
}));

$user.on(logoutFx.finally, () => initStore);

$user.on(getProfileFx.doneData, (state, { data }) => ({
  ...state,
  ...data,
}));

$user.on([loginFx.failData, logoutFx.failData, getProfileFx.failData], (_, e) =>
  console.error(e?.message),
);
