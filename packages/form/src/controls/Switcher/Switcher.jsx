import React from 'react';

import BaseSwitcher from '../../components/BaseSwitcher';

const Switcher = ({ field, form, ...props }) => (
  <BaseSwitcher
    {...field}
    {...props}
    onChange={(value) => {
      form.setFieldValue(field.name, value);
    }}
    value={field.value}
    validationState={form.errors[field.name] ? 'error' : null}
  />
);

export default Switcher;
