import Input from '@lskjs/form/controls/Input';
import pick from 'lodash/pick';

export const getAuthControls = (view) => {
  const controls = {
    email: {
      component: Input,
      title: 'lsk.dash.controls.email',
      required: true,
      type: 'email',
      // initialValue: __DEV__ ? 'me@coder24.ru' : '',
    },
    password: {
      component: Input,
      title: 'lsk.dash.controls.password',
      required: true,
      type: 'password',
      asdasd: 1231231,
      props: {
        autocomplete: 'password',
      },
      // initialValue: __DEV__ ? 'me@coder24.ru' : '',
    },
    name: {
      component: Input,
      title: 'lsk.dash.controls.name',
      required: true,
    },
    code: {
      component: Input,
      title: 'lsk.dash.controls.code',
      required: true,
      // initialValue: __DEV__ ? '1234' : '',
    },
  };
  if (view === 'AuthLoginForm') {
    return pick(controls, ['email', 'password']);
  }
  if (view === 'AuthSignupForm') {
    return pick(controls, ['email', 'password', 'name']);
  }
  if (view === 'AuthRestoreForm') {
    return pick(controls, ['email']);
  }
  if (view === 'AuthPermitForm') {
    return pick(controls, ['code']);
  }
  if (view === 'AuthPasswordForm') {
    return pick(controls, ['password']);
  }
  if (!view) return controls;
  throw `!view ${view}`;
};
export default getAuthControls;
