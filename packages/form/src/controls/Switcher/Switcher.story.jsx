import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import Switcher from './Switcher';

const SwitcherFormView = (props) => (
  <Form>
    <Field {...props.control('switcher')} />
    <Field {...props.control('switcher2')} />
    <Field {...props.control('switcher3')} />
    <Field {...props.control('switcher4')} />
    <Field {...props.control('switcher5')} />
    <Field {...props.control('switcher6')} />
    <FormDebug {...props} />
  </Form>
);

const SwitcherForm = createForm({
  view: SwitcherFormView,
  controls: {
    switcher: {
      title: '1. switcher',
      component: Switcher,
      label: 'This is switcher',
    },
    switcher2: {
      title: '2. disabled switcher',
      component: Switcher,
      label: 'This is switcher',
      disabled: true,
    },
    switcher3: {
      title: '3. switcher with label when checked',
      component: Switcher,
      label: 'Unchecked',
      checkedTitle: 'Checked',
    },
    switcher4: {
      title: '4. switcher text on the right side',
      component: Switcher,
      label: 'This is switcher',
      reversed: true,
    },
    switcher5: {
      title: '5. switcher with custom style',
      component: Switcher,
      label: 'This is switcher',
      styleSwitcher: {
        backgroundColor: 'red',
      },
    },
    switcher6: {
      title: '6. switcher with double label',
      component: Switcher,
      left: <div>left</div>,
      right: <div>right</div>,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('Switcher ', () => (
    <Story>
      <SwitcherForm />
    </Story>
  ));
