import Story from '@lskjs/dev/Story';
import React from 'react';

import { Container, Item, Left, Right } from './AlignLayout';
// const Content = <>
export default ({ storiesOf }) =>
  storiesOf('list/ListSensor/AlignLayout', module).add('Default', () => (
    <Story>
      <Container>
        <Left style={{ background: '#ddd' }}>
          <Item style={{ background: 'tomato' }}>buttonbuttonbuttonbuttonbutton</Item>
          <Item style={{ background: 'tomato' }}>button</Item>
        </Left>
        <Item style={{ background: 'tomato' }}>center</Item>
        <Item style={{ background: 'tomato' }}>center 22222</Item>
        <Right style={{ background: '#ddd' }}>
          <Item style={{ background: 'tomato' }}>stepper-stepper-stepper</Item>
          <Item style={{ background: 'tomato' }}>pages-pages</Item>
          <Item style={{ background: 'tomato' }}>paginatorpaginatorpaginatorpaginatorpaginator</Item>
        </Right>
      </Container>
    </Story>
  ));
