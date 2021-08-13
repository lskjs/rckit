import React from 'react';
import Story from '@lskjs/dev/Story';
// import Error404 from './icons/error404';
// import Error403 from './icons/error403';
// import Error500 from './icons/error500';
import SlideContent from './SlideContent';

const Icon = () => 'Icon';
const Error404 = () => 'Error404';
const Error403 = () => 'Error403';
const Error500 = () => 'Error500';

const articles = [
  {
    title: 'Что-то пошло не так',
    subtitle: 'Not found: /cabinet/company',
    actions: <button>Вернуться на главную страницу</button>,
    footer: 'No spam! We promise, only best stuff',
  },
];

export default ({ storiesOf }) =>
  storiesOf('slide/SlideContent', module)
    .add('EmptyContainer', () => (
      <Story>
        <SlideContent title="Нет событий" icon={<Icon type="close-circle" />} subtitle="Тут ничего нет...." />
      </Story>
    ))
    .add('Error 404', () => (
      <Story>
        <SlideContent {...articles[0]} image={<Error404 width="100%" height={320} />} />
      </Story>
    ))
    .add('Error 403', () => (
      <Story>
        <SlideContent {...articles[0]} image={<Error403 width="100%" height={320} />} />
      </Story>
    ))
    .add('Error 500', () => (
      <Story>
        <SlideContent {...articles[0]} image={<Error500 width="100%" height={320} />} />
      </Story>
    ))
    .add('align test', () => (
      <Story>
        <SlideContent {...articles[0]} align="left" />
        <br />
        <br />
        <br />
        <SlideContent {...articles[0]} align="center" />
        <br />
        <br />
        <br />
        <SlideContent {...articles[0]} align="right" />
      </Story>
    ));
