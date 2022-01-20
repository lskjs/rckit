import debounce from 'lodash/debounce';
import React from 'react';

import RangeBase from './RangeGroup';

const Range = ({ field, form, ...props }) => {
  let debounceFunction;
  const handleChange = (value) => () => {
    form.setFieldValue(field.name, value);
  };
  return (
    <RangeBase
      {...field}
      {...props}
      value={field.value}
      validationState={form.errors[field.name] ? 'error' : null}
      onChange={(value) => {
        if (debounceFunction && debounceFunction.cancel) {
          debounceFunction.cancel();
        }
        debounceFunction = debounce(handleChange(value), 3000);
        debounceFunction();
      }}
    />
  );
};

export default Range;
