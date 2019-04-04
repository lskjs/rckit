import React from 'react';
import Story from '../Story';
import DownloadButton from './DownloadButton';

import ListStore from '../stores/ListStore';

const data = Array(50).fill().map((_, i) => ({
  index: i,
  field1: 'value1',
  field2: 'value2',
  field3: 'value3',
  field4: 'value4',
  field5: 'value5',
  field6: 'value6',
  field7: 'value7',
  field8: 'value8',
  field9: 'value9',
}));

const indexToValue = (fieldName) => {
  return ({ item }) => {
    return `${item[fieldName]} ${item.index}`;
  };
};

const markup = [
  ['field 1', indexToValue('field1')],
  ['field 2', indexToValue('field2')],
  ['field 3', indexToValue('field3')],
  ['field 4', indexToValue('field4')],
  ['field 5', indexToValue('field5')],
  ['field 6', indexToValue('field6')],
  ['field 7', indexToValue('field7')],
  ['field 8', indexToValue('field8')],
  ['field 9', indexToValue('field9')],
];

const markupProps = {};

const api = {
  async find({ skip = 0, limit = 20 } = {}) {
    const count = data.length;
    return {
      count,
      items: data.slice(skip, skip + limit),
    };
  },
};

const listStore = new ListStore({
  api,
});

listStore.fetch({ limit: 25 });

export default ({ storiesOf, action }) => (
  storiesOf('DownloadButton', module)
    .add('default', () => (
      <Story>
        <DownloadButton listStore={listStore} markup={markup} markupProps={markupProps} filename="default" />
      </Story>
    ))
    .add('download all', () => (
      <Story>
        <DownloadButton listStore={listStore} markup={markup} markupProps={markupProps} downloadAll filename="all" />
      </Story>
    ))
);

