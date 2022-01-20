import React from 'react';
import Plus from 'react-icons2/mdi/plus';
import Facebook from 'react-icons2/mdi/facebook-box';
import { Row, Col } from '@lskjs/grid';
import Twitter from 'react-icons2/mdi/twitter-circle';
import Vk from 'react-icons2/mdi/vk';
import Youtube from 'react-icons2/mdi/youtube';
import Tune from 'react-icons2/mdi/tune';
import Bookmark from 'react-icons2/md/bookmark';
import Arrow from 'react-icons2/md/navigate-next';
import Add from 'react-icons2/md/add-circle';
import Telegram from 'react-icons2/mdi/telegram';
import { Badge, Icon } from 'antd';
import Story from '@lskjs/dev/Story';
import socialColors from '@lskjs/utils/socialColors';
import StatefulButton from './StatefulButton';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
// import Link from '@lskjs/ui/Link';
import withResponsive from './withResponsive';

const ResponsiveButton = withResponsive(Button);

const icons = {
  facebook: Facebook,
  twitter: Twitter,
  vk: Vk,
  telegram: Telegram,
  youtube: Youtube,
};

const promisedHandleSubmit = () =>
  new Promise((resolve, reject) => {
    const headsOrTails = () => Math.random() > 0.5;
    const resolveOrReject = () => {
      const bool = headsOrTails();
      if (bool) {
        resolve();
      } else {
        reject();
      }
    };
    setTimeout(resolveOrReject, 1000);
  });

export default ({ storiesOf }) => {
  storiesOf('button/Button/alpha', module)
    .add('variants', () => (
      <Story>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
      </Story>
    ))
    .add('size', () => (
      <Story>
        <Button>default</Button>
        <Button size="small">small</Button>
        <Button size="large">large</Button>
        <hr />
        <Button size="small">Smaaaaaaaaaaaaaaaaaaaaal</Button>
      </Story>
    ))
    .add('small', () => <Story />)

    .add('default', () => (
      <Story>
        <Button componentClass="a" href="/cabinet">
          Link
        </Button>
      </Story>
    ))
    .add('props', () => (
      <Story>
        <Button>Default</Button>
        <Button view="transparent">view=transparent</Button>
        <Button view="text">view=text</Button>
        <Button block>Block button</Button>
        <Button disabled>Disabled button</Button>
        <Button view="empty">Empty primary</Button>
        <Button view="empty" paint="common">
          Empty common
        </Button>
        <hr />
        <Button paint="danger">Default</Button>
        <Button paint="danger" view="transparent">
          view=transparent
        </Button>
        <Button paint="danger" view="text">
          view=text
        </Button>
        <Button paint="danger" block>
          block
        </Button>
        <Button paint="danger" disabled>
          disabled
        </Button>
        <hr />
        <Button mobileView iconLeft={<Vk />}>
          mobileView
        </Button>
      </Story>
    ))
    .add('disabled', () => (
      <Story>
        <Button disabled>Default</Button>
        <Button disabled paint="primary">
          Primary
        </Button>
        <Button disabled paint="info">
          Info
        </Button>
        <Button disabled paint="success">
          Success
        </Button>
        <Button disabled paint="warning">
          Warning
        </Button>
        <Button disabled paint="danger">
          Danger
        </Button>
      </Story>
    ))
    .add('social', () => (
      <Story>
        {socialColors.map((colors, name) => {
          return (
            <Button colors={colors} size="large" block>
              {name}
            </Button>
          );
        })}
        <hr />
        <ButtonGroup padded>
          {socialColors.map((colors, name) => (
            <Button icon={React.createElement(icons[name])} colors={colors} />
          ))}
        </ButtonGroup>
      </Story>
    ))
    .add('badge', () => (
      <Story>
        <Badge count={5}>
          <Button paint="primary">Default</Button>
        </Badge>
        <br />
        <br />
        <Badge count={0} showZero>
          <Button paint="primary">Default</Button>
        </Badge>
        <br />
        <br />
        <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
          <Button paint="primary">Default</Button>
        </Badge>
        <br />
        <br />
        <Badge count={1000} overflowCount={999}>
          <Button paint="primary">Default</Button>
        </Badge>
        <br />
        <br />
        <Badge count={109} style={{ backgroundColor: '#52c41a' }}>
          <Button paint="primary">Default</Button>
        </Badge>
      </Story>
    ))
    .add('dot badge', () => (
      <Story>
        <Badge dot>
          <Button paint="primary">Default</Button>
        </Badge>
      </Story>
    ))
    .add('badge with title', () => (
      <Story>
        <Badge count={5} title="Custom hover text">
          <Button paint="primary">Default</Button>
        </Badge>
        <Badge status="processing" count={5} title="Custom hover text">
          <Button paint="primary">Default</Button>
        </Badge>
      </Story>
    ))
    .add('ButtonGroup', () => (
      <Story>
        <ButtonGroup block>
          <Button>Default</Button>
          <Button paint="primary">Primary</Button>
          <Button paint="info">Info</Button>
          <Button paint="success">Success</Button>
          <Button paint="warning">Warning</Button>
          <Button paint="danger">Danger</Button>
        </ButtonGroup>
      </Story>
    ))
    .add('withResponsive', () => (
      <Story>
        <ResponsiveButton paint="primary" size="small" icon={<Plus />}>
          Responsive
        </ResponsiveButton>
      </Story>
    ))
    .add('badge status', () => (
      <Story>
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="default" />
        <Badge status="processing" />
        <Badge status="warning" />
      </Story>
    ))
    .add('without ripple', () => (
      <Story>
        <Button isRipple={false} paint="primary">
          Primary
        </Button>
      </Story>
    ))
    .add('button group', () => (
      <Story>
        <ButtonGroup>
          <Button isRipple={false} paint="primary">
            Primary
          </Button>
          <Button isRipple={false} paint="primary">
            Primary
          </Button>
        </ButtonGroup>
      </Story>
    ))
    .add('button group panel', () => (
      <Story>
        <ButtonGroup panel>
          <Button paint="primary">Primary</Button>
          <Button paint="danger">Danger</Button>
          <Button paint="primary">Primary</Button>
        </ButtonGroup>
      </Story>
    ))
    .add('button group block', () => (
      <Story>
        <ButtonGroup block>
          <Button paint="primary">Primary</Button>
          <Button paint="primary">Primary</Button>
          <Button paint="primary">Primary</Button>
        </ButtonGroup>
      </Story>
    ))
    .add('button group circle', () => (
      <Story>
        <ButtonGroup>
          <Button icon={<Telegram />} paint="primary" />
          <Button icon={<Facebook />} paint="primary" />
          <Button icon={<Vk />} paint="primary" />
        </ButtonGroup>
      </Story>
    ))
    .add('button group wrapper', () => (
      <Story>
        <ButtonGroup panel>
          <Button paint="primary">Primary</Button>
          <div>
            <Button paint="danger">Danger</Button>
          </div>
          <Button paint="primary">Primary</Button>
        </ButtonGroup>
      </Story>
    ))
    .add('Button with border', () => (
      <Story>
        <Button bordered paint="primary" view="text">
          Button with border
        </Button>
        <br />
        <br />
        <Button bordered borderColor="#fafa" paint="primary" view="text">
          Button with custom border
        </Button>
      </Story>
    ))
    .add('list', () => (
      <Story>
        <Row>
          <Col xs={2}>
            <div>paint: primary size: extraLarge rounded</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: extraLarge rounded bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary size: extraLarge</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: extraLarge bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: extraLarge</div>
          </Col>
          <Col xs={2}>
            <div>paint: common size: extraLarge</div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Button paint="primary" size="extraLarge" rounded>
              Самая большая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" view="text" size="extraLarge" rounded bordered>
              Самая большая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="extraLarge">
              Самая большая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" view="text" size="extraLarge" bordered>
              Самая большая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" view="text" size="extraLarge">
              Самая большая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="common" size="extraLarge">
              Самая большая кнопка
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={2}>
            <div>paint: primary size: large rounded</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: large rounded bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary size: large</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: large bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: large</div>
          </Col>
          <Col xs={2}>
            <div>paint: common size: large</div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Button paint="primary" size="large" rounded>
              Большая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" view="text" size="large" rounded bordered>
              Большая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="large">
              Большая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" view="text" size="large" bordered>
              Большая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" view="text" size="large">
              Большая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="common" size="large">
              Большая кнопка
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={2}>
            <div>paint: primary rounded</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text rounded bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text</div>
          </Col>
          <Col xs={2}>
            <div>paint: common</div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Button paint="primary" rounded>
              Средняя кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" view="text" rounded bordered>
              Средняя кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary">Средняя кнопка</Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" view="text" bordered>
              Средняя кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" view="text">
              Средняя кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="common">Средняя кнопка</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={2}>
            <div>paint: primary size: small rounded</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: small rounded bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary size: small</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: small bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: small</div>
          </Col>
          <Col xs={2}>
            <div>paint: common size: small</div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Button paint="primary" size="small" rounded>
              Маленькая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="small" view="text" rounded bordered>
              Маленькая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="small">
              Маленькая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="small" view="text" bordered>
              Маленькая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="small" view="text">
              Маленькая кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="common" size="small">
              Маленькая кнопка
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={2}>
            <div>paint: primary size: verySmall rounded</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: verySmall rounded bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary size: verySmall</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: verySmall bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: verySmall</div>
          </Col>
          <Col xs={2}>
            <div>paint: common size: verySmall</div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Button paint="primary" size="verySmall" rounded>
              Очень маленька круглая
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="verySmall" view="text" rounded bordered>
              Очень маленька круглая
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="verySmall">
              Очень маленька круглая
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="verySmall" view="text" bordered>
              Очень маленька круглая
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="verySmall" view="text">
              Очень маленька круглая
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="common" size="verySmall">
              Очень маленька круглая
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={2}>
            <div>paint: primary size: extraSmall rounded</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: extraSmall rounded bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary size: extraSmall</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: extraSmall bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text size: extraSmall</div>
          </Col>
          <Col xs={2}>
            <div>paint: common size: extraSmall</div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Button paint="primary" size="extraSmall" rounded>
              Экстра маленькая круглая
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="extraSmall" view="text" rounded bordered>
              Экстра маленькая круглая
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="extraSmall">
              Экстра маленькая круглая
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="extraSmall" view="text" bordered>
              Экстра маленькая круглая
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="extraSmall" view="text">
              Экстра маленькая круглая
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="common" size="extraSmall">
              Экстра маленькая круглая
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col xs={1}>
            <div>paint: primary size: small rounded</div>
          </Col>
          <Col xs={1}>
            <div>paint: primary view: text size: small rounded bordered</div>
          </Col>
          <Col xs={1}>
            <div>paint: primary size: small</div>
          </Col>
          <Col xs={1}>
            <div>paint: primary view: text size: small bordered</div>
          </Col>
          <Col xs={1}>
            <div>paint: primary view: empty size: small</div>
          </Col>
          <Col xs={1}>
            <div>paint: primary view: text size: small</div>
          </Col>
          <Col xs={1}>
            <div>paint: common size: small</div>
          </Col>
          <Col xs={1}>
            <div>paint: danger view: base size: small</div>
          </Col>
          <Col xs={1}>
            <div>paint: warning view: base size: small</div>
          </Col>
          <Col xs={1}>
            <div>paint: success view: base size: small</div>
          </Col>
          <Col xs={1}>
            <div>paint: common view: youtube bordered borderColor: #cdcdcd</div>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <Button paint="primary" size="small" rounded>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="primary" view="text" size="small" rounded bordered>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="primary" size="small">
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="primary" view="text" size="small" bordered>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="primary" view="empty" size="small" isRipple={false}>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="primary" view="text" size="small">
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="common" size="small">
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="danger" view="base" size="small">
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="warning" view="base" size="small">
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="success" view="base" size="small">
              Кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button
              iconLeft={<Youtube color="red" width={26} />}
              paint="common"
              view="youtube"
              bordered
              borderColor="#cdcdcd"
            >
              Канал на YouTube
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={1}>
            <div>paint: primary size: small rounded disabled</div>
          </Col>
          <Col xs={1}>
            <div>paint: primary view: text size: small rounded bordered disabled</div>
          </Col>
          <Col xs={1}>
            <div>paint: primary size: small disabled</div>
          </Col>
          <Col xs={1}>
            <div>paint: primary view: text size: small bordered disabled</div>
          </Col>
          <Col xs={1}>
            <div>paint: primary view: empty size: small disabled</div>
          </Col>
          <Col xs={1}>
            <div>paint: primary view: text size: small disabled</div>
          </Col>
          <Col xs={1}>
            <div>paint: common size: small disabled</div>
          </Col>
          <Col xs={1}>
            <div>paint: danger view: base size: small disabled</div>
          </Col>
          <Col xs={1}>
            <div>paint: warning view: base size: small disabled</div>
          </Col>
          <Col xs={1}>
            <div>paint: success view: base size: small disabled</div>
          </Col>
          <Col xs={1}>
            <div>paint: common view: youtube bordered borderColor: #cdcdcd disabled</div>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <Button paint="primary" size="small" rounded disabled>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="primary" view="text" size="small" rounded bordered disabled>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="primary" size="small" disabled>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="primary" view="text" size="small" bordered disabled>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="primary" view="empty" size="small" disabled>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="primary" view="text" size="small" disabled>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="common" size="small" disabled>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="danger" view="base" size="small" disabled>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="warning" view="base" size="small" disabled>
              Кнопка
            </Button>
          </Col>
          <Col xs={1}>
            <Button paint="success" view="base" size="small" disabled>
              Кнопка
            </Button>
          </Col>
          <Col xs={2}>
            <Button
              iconLeft={<Youtube width={26} />}
              paint="common"
              view="youtube"
              borderColor="#cdcdcd"
              disabled
              bordered
            >
              Канал на YouTube
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col xs={4}>
            <div>view: text paint: primary</div>
          </Col>
          <Col xs={6}>
            <div>view: text paint: primary disabled</div>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Button view="text" paint="primary">
              Нормальное состояние/наведенное/клик/фокус
            </Button>
          </Col>
          <Col xs={6}>
            <Button view="text" paint="primary" disabled>
              Задизейбленное состояние
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col xs={2}>
            <div>componentClass: Button paint: primary block textError: Ошибка</div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <StatefulButton
              componentClass={Button}
              onClick={promisedHandleSubmit}
              paint="primary"
              block
              textError="Ошибка"
            >
              Сохранить
            </StatefulButton>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col xs={2}>
            <div>paint: primary iconLeft: Bookmark</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary iconRight: Arrow</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary iconRight: Arrow iconLeft: Bookmark</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary view: text iconLeft: Bookmark iconRight: Count bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary size: small view: text iconLeft: Tune bordered</div>
          </Col>
          <Col xs={2}>
            <div>paint: primary size: small view: text iconLeft: Add</div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Button paint="primary" iconLeft={<Bookmark />}>
              Кнопка с иконкой слева
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" iconRight={<Arrow />}>
              Кнопка с иконкой справа
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" iconLeft={<Bookmark />} iconRight={<Bookmark />}>
              Есть в списках
            </Button>
          </Col>
          <Col xs={2}>
            <Button view="text" paint="primary" iconLeft={<Bookmark />} iconRight={<Bookmark />} bordered>
              Добавить в списки
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="small" view="text" iconLeft={<Tune />} bordered>
              Фильтр
            </Button>
          </Col>
          <Col xs={2}>
            <Button paint="primary" size="small" view="text" iconLeft={<Add />}>
              Создать тз
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={2}>
            <div>iconLeft: Youtube paint: common view: text borderColor: #cdcdcd bordered</div>
          </Col>
          <Col xs={2}>
            <div>icon: Arrow view: shadow</div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Button
              iconLeft={<Youtube color="red" width={26} />}
              paint="common"
              view="youtube"
              borderColor="#cdcdcd"
              bordered
            >
              YouTube
            </Button>
          </Col>
          <Col xs={2}>
            <Button view="shadow" icon={<Arrow />} />
          </Col>
        </Row>
        <br />
        <Row>
          <div>view: text paint: primary icon: DotsIcon</div>
        </Row>
        <Row>
          <Col xs={2}>
            <Button view="text" paint="primary" icon={<Telegram />} />
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Button paint="primary" mobileView iconLeft={<Bookmark />} iconRight={<Bookmark />}>
              Есть в списках
            </Button>
          </Col>
        </Row>
        <br />
      </Story>
    ));
};
