#!/usr/bin/env node
import { writeFile } from 'node:fs/promises';

import { createCommand } from 'ycmd';

// eslint-disable-next-line import/extensions
import { config } from './config.js';

// @YCMD-command
export default createCommand({
  command: 'prebuild', //  [-e]
  aliases: ['i'],
  describe: 'get info about current project',

  // meta: import.meta,
  async main() {
    const indexes = { index: [] };
    const promises = Object.keys(config).map((name) => {
      const { export: exp, import: imp, index, from } = config[name];
      const content = `\
/* eslint-disable import/no-extraneous-dependencies */
import { ${imp} } from '${from}';

export const ${exp} = ${imp};
export default ${exp};
`;
      if (!indexes[index]) indexes[index] = [];
      indexes[index].push(`export * from './${name}';`);
      indexes.index.push(`export * from './${name}';`);
      // console.log(content);
      const filename = `./src/${name}.tsx`;
      // console.log({ filename, content });
      return writeFile(filename, content);
    });
    Object.keys(indexes).forEach((index) => {
      const filename = `./src/${index}.ts`;
      const content = `${indexes[index].join('\n')}\n`;
      promises.push(writeFile(filename, content));
    });

    await Promise.all(promises);
  },
});
