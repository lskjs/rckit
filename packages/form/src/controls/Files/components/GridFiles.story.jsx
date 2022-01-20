import Story from '@lskjs/dev/Story';
import React from 'react';

import items from './files.mock';
import GridFile from './GridFile';
import GridFiles from './GridFiles';
import LineFile from './LineFile';
import LineFiles from './LineFiles';

export default ({ storiesOf }) =>
  storiesOf('form/components/AnyFiles', module)
    .add('GridFile', () => (
      <Story>
        <GridFile {...items[0]} />
        <GridFile link {...items[1]} />
      </Story>
    ))
    .add('GridFiles', () => (
      <Story>
        <GridFiles items={items} />
        <GridFiles link items={items} />
        {/* <GridFiles
          items={["https://localhost:3000/storage/5c59b44c18d8f218d0f803b8/1553875666774_772.png", "https://incircle.isuvorov.com/storage/5c59b44c18d8f218d0f803b8/1556655294307_69.png"]}
        /> */}
      </Story>
    ))
    .add('LineFile', () => (
      <Story>
        <LineFile {...items[0]} />
        <LineFile {...items[1]} />
      </Story>
    ))
    .add('LineFiles', () => (
      <Story>
        <LineFiles items={items} />
      </Story>
    ))
    .add('GridFiles errors[]', () => (
      <Story>
        <GridFiles items={[]} />
        <GridFiles items={null} />
        <GridFiles items={[]} />
        <GridFiles items={null} />
      </Story>
    ));
