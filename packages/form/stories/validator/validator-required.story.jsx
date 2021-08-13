/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Form, Field } from 'formik';
import Story from '../Story';
import createForm from '../../createForm';
import FormDebug from '../../FormDebug';

import Input from '../../controls/Input';
import Select from '../../controls/Select';
import Switcher from '../../controls/Switcher';
import Checkbox from '../../controls/Checkbox';
import Radio from '../../controls/Radio';
import Range from '../../controls/Range';
import Date from '../../controls/Date';
import Files from '../../controls/Files';
import Image from '../../controls/Image';
import PhoneInput from '../../controls/PhoneInput';
import Tags from '../../controls/Tags';
import ArrayOf from '../../controls/ArrayOf';

const ValidationView = (props) => (
  <Form>
    <Field {...props.control('input')} />
    <Field {...props.control('select')} />
    <Field {...props.control('switcher')} />
    <Field {...props.control('checkbox')} />
    <Field {...props.control('radio')} />
    <Field {...props.control('range')} />
    <Field {...props.control('date')} />
    <Field {...props.control('files')} />
    <Field {...props.control('image')} />
    <Field {...props.control('phoneInput')} />
    <Field {...props.control('tags')} />
    <Field {...props.control('array')} />
    <FormDebug {...props} />
  </Form>
);

const Validation = createForm({
  view: ValidationView,
  controls: {
    input: {
      title: 'input',
      component: Input,
      required: true,
    },
    select: {
      title: 'select',
      component: Select,
      options: [1, 2, 3, 4],
      required: true,
    },
    switcher: {
      title: 'switcher',
      component: Switcher,
      required: true,
    },
    checkbox: {
      title: 'checkbox',
      component: Checkbox,
      label: 'checkbox-label',
      required: true,
    },
    radio: {
      title: 'radio',
      component: Radio,
      required: true,
    },
    range: {
      title: 'range',
      component: Range,
      required: true,
    },
    date: {
      title: 'date',
      component: Date,
      required: true,
    },
    files: {
      title: 'files',
      component: Files,
      required: true,
    },
    image: {
      title: 'image',
      component: Image,
      required: true,
    },
    phoneInput: {
      title: 'phoneInput',
      component: PhoneInput,
      required: true,
    },
    tags: {
      title: 'tags',
      component: Tags,
      required: true,
    },
    array: {
      title: 'array',
      component: ArrayOf,
      itemComponent: Input,
      itemProps: {
        type: 'number',
      },
      itemInitialValue: '',
      showRemoveButton: true,
      autoAddLastItem: true,
      required: true,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/validator', module).add('validator with required', () => {
    return (
      <Story>
        <Validation
          onSubmit={(values) => {
            console.log({ values });
          }}
        />
      </Story>
    );
  });
