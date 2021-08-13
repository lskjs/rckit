import React from 'react';
import { Form, Field } from 'formik';
import createFormWithI18 from '../createFormWithI18';
import Input from '../controls/Input';
import Story from './Story';

const InputFormView = (props) => {
  return (
    <Form>
      <Field {...props.control('input')} />
      <InputFormNested />
    </Form>
  );
};
const InputFormViewNested = (props) => {
  return (
    <Form>
      <Field {...props.control('input')} />
    </Form>
  );
};

const InputForm = createFormWithI18({
  view: InputFormView,
  initialValues: {
    input: 'createForm.initialValues',
  },
  controls: {
    input: {
      title: 'input',
      component: Input,
      placeholder: 'input placeholder',
      required: true,
    },
  },
});
const InputFormNested = createFormWithI18({
  view: InputFormViewNested,
  initialValues: {
    input: 'createForm.initialValues',
  },
  controls: {
    input: {
      title: 'input',
      component: Input,
      placeholder: 'input placeholder',
      required: true,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/nested form', module).add('createFormWithI18', () => {
    return (
      <Story>
        <InputForm initialValues={{}} />
      </Story>
    );
  });
