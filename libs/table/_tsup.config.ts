// export { default } from '@lsk4/tsup-config';

import config from '@lsk4/tsup-config';
import CssModulesPlugin from 'esbuild-css-modules-plugin';

const [optionsCJS, optionsESM] = config;

const options = {
  bundle: true,
  sourcemap: false,
  //   esbuildOptions(options, context) {
  //     // options.external = ['react'];
  //     options.plugins.push(
  //       CssModulesPlugin({
  //         // @see https://github.com/indooorsman/esbuild-css-modules-plugin/blob/main/index.d.ts for more details
  //         force: true,
  //         emitDeclarationFile: true,
  //         localsConvention: 'camelCaseOnly',
  //         namedExports: true,
  //         inject: false,
  //       }),
  //     );
  //     console.log('esbuildOptions', options, context);
  //     return options;
  //   },
  esbuildPlugins: [
    CssModulesPlugin({
      // @see https://github.com/indooorsman/esbuild-css-modules-plugin/blob/main/index.d.ts for more details
      force: true,
      emitDeclarationFile: true,
      localsConvention: 'camelCaseOnly',
      namedExports: true,
      inject: false,
    }),
  ],
  esbuildOptions(options, context) {
    console.log('esbuildOptions', options, context);
  },
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

console.log('newConfig', newConfig);
export default newConfig;
