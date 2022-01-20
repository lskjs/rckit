import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import RadioButtonGroup from './RadioButtonGroup';

const RadioButtonGroupFormView = (props) => (
  <Form>
    <Field {...props.control('RadioButtonGroup')} block />
    <FormDebug {...props} />
  </Form>
);

const RadioButtonGroupForm = createForm({
  view: RadioButtonGroupFormView,
  controls: {
    RadioButtonGroup: {
      component: RadioButtonGroup,
      active: 'byDate',
      options: [
        {
          value: 'byDate',
          title: 'По дате',
        },
        {
          value: 'month3',
          title: '3 месяца',
        },
        {
          value: 'month6',
          title: '6 месяцев',
        },
      ],
    },
  },
});

export default ({ storiesOf }) => {
  storiesOf('form/controls', module).add('RadioButtonGroup', () => (
    <Story>
      <RadioButtonGroupForm />
    </Story>
  ));
};
