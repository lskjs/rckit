/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import If from 'react-if';
import PropTypes from 'prop-types';
import autobind from '@lskjs/autobind';
import { jsx } from '@emotion/core';
import Performance from '@lskjs/dev/Performance';
import DropdownItem from './DropdownItem';
import DropdownList from '../DropdownList';
import { Wrapper, Trigger } from './Dropdown.styles';

class Dropdown extends PureComponent {
  static Item = DropdownItem;
  static propTypes = {
    /** Уникальный ключ компонента */
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    /** Элемент по клику на который будет открываться дропдаун */
    trigger: PropTypes.func,
    /** Расположение элемента с начала / с конца */
    pull: PropTypes.oneOf(['start', 'end', 'stretch']),
    /** Расположение элемента сверху / снизу / справа / слева */
    placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    /** Закрытие дропдауна по выбору элемента из меню */
    closeOnSelect: PropTypes.bool,
    /** Тело компонента */
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    outsideClick: PropTypes.bool,
    bordered: PropTypes.bool,
    actions: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    triggerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    block: PropTypes.bool,
  }
  static defaultProps = {
    trigger: null,
    pull: 'start',
    placement: 'bottom',
    closeOnSelect: true,
    children: null,
    outsideClick: true,
    bordered: false,
    actions: null,
    triggerStyle: null,
    block: false,
  }

  constructor(props) {
    super(props);
    this.trigger = React.createRef();
    this.dropdown = React.createRef();
    this.state = {
      isOpen: false,
    };
  }

  @autobind
  show() {
    const { isOpen } = this.state;
    const { outsideClick } = this.props;
    const { current: trigger } = this.trigger;
    if (outsideClick) {
      if (!isOpen) {
        document.addEventListener('click', this.handleOutsideClick);
      } else {
        document.removeEventListener('click', this.handleOutsideClick);
      }
    }
    this.setState({
      rect: trigger && trigger.getBoundingClientRect(),
    }, this.toggle);
  }

  @autobind
  hide() {
    const { isOpen } = this.state;
    const { outsideClick } = this.props;
    if (isOpen && outsideClick) {
      document.removeEventListener('click', this.handleOutsideClick);
      this.toggle();
    }
  }

  @autobind
  toggle() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  @autobind
  handleOutsideClick(e) {
    const { closeOnSelect } = this.props;
    const menu = (
      this.dropdown.current
      && this.dropdown.current.menu
      && this.dropdown.current.menu.current
    );
    if (menu) {
      if (closeOnSelect) {
        this.hide();
      }
      if (!closeOnSelect && !menu.contains(e.target)) {
        this.hide();
      }
    }
  }

  render() {
    const { children, trigger, pull, placement, id, bordered, actions, triggerStyle, block } = this.props;
    const { isOpen, rect } = this.state;
    return (
      <Performance name="Dropdown" disabled={!__DEV__}>
        <Wrapper id={id}>
          <Trigger
            aria-hidden
            // style={{
            //   display: 'inline-block',
            // }}
            block={block}
            ref={this.trigger}
            className={!!isOpen ? triggerStyle : ''}
          >
            {trigger({ isOpen, onClick: this.show })}
          </Trigger>
          <If condition={!!isOpen}>
            <DropdownList
              id={id}
              ref={this.dropdown}
              pull={pull}
              placement={placement}
              items={children}
              rect={rect}
              bordered={!!bordered}
              actions={actions}
            />
          </If>
        </Wrapper>
      </Performance>
    );
  }
}

export default Dropdown;
