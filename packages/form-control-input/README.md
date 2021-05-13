# LSK.js – form-control-input

> @lskjs/form-control-input – Input control for Form

[![LSK logo](https://badgen.net/badge/icon/MADE%20BY%20LSK?icon=zeit\&label\&color=red\&labelColor=red)](https://github.com/lskjs)
[![NPM version](https://badgen.net/npm/v/@lskjs/form-control-input)](https://www.npmjs.com/package/@lskjs/form-control-input)
[![NPM downloads](https://badgen.net/npm/dt/@lskjs/form-control-input)](https://www.npmjs.com/package/@lskjs/form-control-input)
[![NPM Dependency count](https://badgen.net/bundlephobia/dependency-count/@lskjs/form-control-input)](https://bundlephobia.com/result?p=@lskjs/form-control-input)
[![Have TypeScript types](https://badgen.net/npm/types/@lskjs/form-control-input)](https://www.npmjs.com/package/@lskjs/form-control-input)
[![Have tree shaking](https://badgen.net/bundlephobia/tree-shaking/@lskjs/form-control-input)](https://bundlephobia.com/result?p=@lskjs/form-control-input)
[![NPM Package size](https://badgen.net/bundlephobia/minzip/@lskjs/form-control-input)](https://bundlephobia.com/result?p=@lskjs/form-control-input)
[![Package size](https://badgen.net//github/license/lskjs/lskjs)](https://github.com/lskjs/lskjs/blob/master/LICENSE)
[![Ask us in Telegram](https://img.shields.io/badge/Ask%20us%20in-Telegram-brightblue.svg)](https://t.me/lskjschat)

<!-- template file="scripts/templates/preview.md" start -->

<!-- template end -->

***

<!-- # 📒 Table of contents  -->

# Table of contents

*   [⌨️ Install](#️-install)
*   [📖 License](#-license)
*   [👥 Contributors](#-contributors)
*   [👏 Contributing](#-contributing)
*   [📮 Any questions? Always welcome :)](#-any-questions-always-welcome-)

# ⌨️ Install

```sh
# yarn
yarn i @lskjs/form-control-input prop-types react

# npm
npm i @lskjs/form-control-input prop-types react
```

***

Input example:

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import Input from './Input';

const InputFormView = props => (
  <Form>
    <Field {...props.control('input')} />
    <FormSubmit {...props} />
  </Form>
);

const InputForm = createForm({
  view: InputFormView,
  controls: {
    input: {
      title: 'Input',
      component: Input,
      required: true,
    },
  },
});

<Story>
  <InputForm />
</Story>
```

# 📖 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

# 👥 Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore-start -->

<!-- markdownlint-disable -->

<table>
  <tr>
    <td align="center"><a href="https://isuvorov.com"><img src="https://avatars2.githubusercontent.com/u/1056977?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Igor Suvorov</b></sub></a><br /><a href="lskjs/lskjs///commits?author=isuvorov" title="Code">💻</a> <a href="#design-isuvorov" title="Design">🎨</a> <a href="#ideas-isuvorov" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

# 👏 Contributing

1.  Fork it (<https://github.com/yourname/yourproject/fork>)
2.  Create your feature branch (`git checkout -b features/fooBar`)
3.  Commit your changes (`git commit -am 'feat(image): Add some fooBar'`)
4.  Push to the branch (`git push origin feature/fooBar`)
5.  Create a new Pull Request

# 📮 Any questions? Always welcome :)

*   [Email](mailto:hi@isuvorov.com)
*   [LSK.news – Telegram channel](https://t.me/lskjs)
*   [Спроси нас в телеграме ;)](https://t.me/lskjschat)
