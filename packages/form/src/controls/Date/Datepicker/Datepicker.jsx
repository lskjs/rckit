import autobind from '@lskjs/autobind';
import DatePicker from 'antd/lib/date-picker';
import LocaleProvider from 'antd/lib/locale-provider';
import en from 'antd/lib/locale-provider/en_US';
import ru from 'antd/lib/locale-provider/ru_RU';
import cx from 'classnames';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const { RangePicker } = DatePicker;

@inject('i18')
@observer
class Datepicker extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    validationState: PropTypes.oneOf(['success', 'warning', 'error']),
    onChange: PropTypes.func,
    ranged: PropTypes.bool,
    t: PropTypes.func.isRequired,
  };
  static defaultProps = {
    value: null,
    onChange: null,
    validationState: null,
    ranged: false,
  };
  @autobind
  getCalendarContainer() {
    const { id } = this.props;
    if (!__CLIENT__ && !id) return false;
    return document.querySelector(`.datepicker-${id}`) || document.querySelector('.container') || document.body;
  }
  render() {
    const { id, className, ranged, validationState, i18, ...otherProps } = this.props;
    const locale = i18.t('locale') === 'ru' ? ru : en;
    return (
      <LocaleProvider locale={locale}>
        <div
          className={cx({
            'datepicker-wrapper': true,
            [`datepicker-${id}`]: id,
            [validationState]: validationState,
            [className]: className,
          })}
        >
          {ranged ? (
            <RangePicker className="datepicker" getCalendarContainer={this.getCalendarContainer} {...otherProps} />
          ) : (
            <DatePicker
              className="datepicker"
              onChange={(m) => {
                this.onChange(m.toDate());
              }}
              getCalendarContainer={this.getCalendarContainer}
              {...otherProps}
            />
          )}
          {/* <DEV>
            <div className="datepicker-icon">
              <Calendar />
            </div>
          </DEV> */}
        </div>
      </LocaleProvider>
    );
  }
}

export default Datepicker;
