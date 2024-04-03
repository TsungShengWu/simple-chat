import { createStore, createEffect } from 'effector';
import { UserStore, LoginPayload, LoginResult } from './types';
import api from '../api';

const initStore: UserStore = {};

export const $store = createStore<UserStore>(initStore);

export const loginFx = createEffect(
  (data: LoginPayload) => api.post<LoginResult>(
    'auth/login',
    data, 
  ).then(({ data }) => {
    // Append the token to every request.
    api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    return data;
  }),
);

export const logoutFx = createEffect(
  () => api.get(
    'auth/logout',
  ).finally(() => {
    api.defaults.headers.common.Authorization = undefined;
  }),
);

/**
 * Subscription.
 */
$store.on(loginFx.doneData, (state, data) => ({
  ...state,
  ...data,
}));

$store.on(logoutFx.finally, () => initStore);
