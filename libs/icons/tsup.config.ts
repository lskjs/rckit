// export { default } from '@lsk4/tsup-config';

import config from '@lsk4/tsup-config';

const [optionsCJS, optionsESM] = config;

const options = {
  bundle: true,
  sourcemap: false,
};
//   skipNodeModulesBundle: false,
//   bundle: true,
//   sourcemap: false,
//   splitting: false,
//   dts: false,
//   shim: false,
//   clean: true,
//   outfile: 'out123.js',
//   outDir: 'lib4',
//   esbuildOptions(options, context) {
//     options.bundle = true;
//     // options.external = ['react'];
//     options.plugins = options.plugins.filter((a, i) => i !== 1);
//     options.plugins = [];
//     console.log('esbuildOptions', options, context);
//     return options;
//   },
// };

const newConfig = [
  { ...optionsCJS, ...options },
  { ...optionsESM, ...options },
];

// console.log('newConfig', newConfig);
export default newConfig;
