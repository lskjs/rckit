// import get from 'lodash/get';
// import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import autobind from '@lskjs/autobind';
import moment from 'moment';
import React, { PureComponent } from 'react';
import CalendarBase from 'react-calendar/dist/entry.nostyle';

// import moment from 'moment';
// import HighlightedCell from './HighlightedCell';
import { globalStyles, highlightedStyle } from './highlightedStyle';

class Calendar extends PureComponent {
  static isAnyTypeDate(f) {
    return new Date(f).getTime() > 0;
  }
  @autobind
  validationDate(value) {
    const { field, ...props } = this.props;
    let validValue = new Date();
    if (this.constructor.isAnyTypeDate(value)) {
      validValue = new Date(value);
    } else if (this.constructor.isAnyTypeDate(props.defaultValue)) {
      validValue = new Date(props.defaultValue);
    }
    return validValue;
  }
  render() {
    const { field, form, highlightedDates, futureOnly, ...props } = this.props;
    return (
      <>
        <Global styles={globalStyles} />
        <CalendarBase
          {...field}
          {...props}
          onChange={(value) => {
            const selectedDate = new Date(moment(value).format('YYYY-MM-DD'));
            // const selectedDate = new Date(value);
            // console.log(value, selectedDate);
            form.setFieldValue(field.name, selectedDate);
          }}
          tileClassName={({ date }) => {
            const dates = (highlightedDates || []).map((d) => this.validationDate(d));
            const isValid = !!dates.filter((e) => date.toDateString() === e.toDateString()).length;
            if (isValid) return highlightedStyle;
            return '';
          }}
          value={this.validationDate(field.value)}
          minDate={futureOnly ? new Date() : null}
        />
      </>
    );
  }
}

export default Calendar;
