import { firebaseConfig } from './firebaseConfig';

export const environment = {
  publicTitle: import.meta.env.NG_APP_PUBLIC_TITLE,
  firebase: firebaseConfig,
};
