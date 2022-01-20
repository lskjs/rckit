import AntRadio from 'antd/lib/radio';
import React from 'react';

import Bool from '../Checkbox/Bool';
import Label from '../Checkbox/Checkbox.styles';
import globalStyles from './Radio.styles';
import RadioBase from './RadioBase';

globalStyles();

// export default (...props) => <Bool {...props} componentClass={AntRadio} />;

const BaseRadio = ({ onChange, validationState, ...props }) => (
  <AntRadio {...props} onClick={() => onChange(true)}>
    <Label validationState={validationState}>{props.label}</Label>
  </AntRadio>
);

export default (props) => <Bool {...props} componentClass={BaseRadio} />;

// )
// const Radio = ({
//   field,
//   form,
//   ...props
// }) => {

//   return (
//     <RadioBase
//       {...field}
//       {...props}
//       validationState={form.errors[field.name] ? 'error' : null}
//       value={value}
//       onChange={(val) => {
//         form.setFieldValue(field.name, val);
//       }}
//     >
//       {props.title}
//     </RadioBase>
//   );
// };

// export default Radio;
