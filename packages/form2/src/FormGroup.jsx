import T from '@lskjs/t';
import get from 'lodash/get';
import React from 'react';

import Item from './components/FormItem';
import Title from './components/TitleComponent';

const FormGroup = ({
  field,
  form,
  withI18,
  children,
  htmlId,
  required,
  _required,
  title,
  help,
  errorMessage,
  info,
  infoLeft,
}) => {
  const errorMsg = errorMessage || (form && form.errors && get(form.errors, field.name));
  const looksLikeRequired = required || _required;
  let titleComponent;
  if (title) {
    titleComponent = (
      <Title
        withI18={withI18}
        infoLeft={infoLeft}
        title={withI18 && typeof title === 'string' ? <T name={title} /> : title}
        error={errorMsg}
        info={info}
        isRequired={looksLikeRequired}
      />
    );
  }
  return (
    <Item
      id={htmlId}
      required={looksLikeRequired}
      label={titleComponent}
      help={help}
      hasError={!!errorMsg}
      errorMessage={withI18 && typeof errorMsg === 'string' ? <T name={errorMsg} /> : errorMsg}
    >
      {children}
    </Item>
  );
};

export default FormGroup;
