import isBoolean from 'lodash/isBoolean';
import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import omit from 'lodash/omit';
import sortBy from 'lodash/sortBy';

export const NULL_STRING = '@@NULL@@';

const isSimple = (str) => isString(str) || isNumber(str) || isBoolean(str);

export const getReverseOptionValue = (value) => (value === NULL_STRING ? null : value);
export const getOptionValue = (value) => (value == null ? NULL_STRING : value);
export const getOptionTitle = (option) => option.label || option.title || option.value;
export const getNormalizedOptions = (options = [], props = {}) => {
  let preOptions = [];
  if (options) {
    options.forEach((option) => {
      let item = isSimple(option) ? { value: option } : option;
      if (props.asyncItem && typeof props.asyncItem === 'object') {
        item = {
          ...props.asyncItem,
          ...item,
        };
      }
      preOptions.push(item);
    });
    if (props.sortOptions) {
      preOptions = sortBy(preOptions, getOptionTitle);
    }

    if (props.nullOption) {
      const option = isPlainObject(props.nullOption)
        ? props.nullOption
        : isSimple(props.nullOption)
        ? { title: props.nullOption }
        : {};
      if (!option.value) option.value = null;
      preOptions.unshift(option);
    }
    // console.log({ preOptions });
    // console.log('field.options', field.options, field);
  }
  const { optionProps = {} } = props;

  return preOptions.map((option) => ({
    ...optionProps,
    ...omit(option, ['value', 'title', 'label']),
    label: getOptionTitle(option),
    value: getOptionValue(option.value),
  }));
};
