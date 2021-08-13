/* eslint-disable camelcase */
import { Component } from 'react';

export class Performance extends Component {
  perf = {};
  UNSAFE_componentWillMount() {
    const { disabled } = this.props;
    if (disabled) return;
    this.perf.componentWillMount = Date.now();
  }
  componentDidMount() {
    const { disabled, name = 'Component' } = this.props;
    if (disabled) return;
    this.perf.componentDidMount = Date.now();
    // console.log(`${name}.mount time ${this.perf.componentDidMount - this.perf.componentWillMount}ms`);
  }
  UNSAFE_componentWillUpdate() {
    const { disabled } = this.props;
    if (disabled) return;
    this.perf.componentWillUpdate = Date.now();
  }
  componentDidUpdate() {
    const { disabled, name = 'Component' } = this.props;
    if (disabled) return;
    this.perf.componentDidUpdate = Date.now();
    // console.log(`${name}.update time ${this.perf.componentDidUpdate - this.perf.componentWillUpdate}ms`);
  }
  render() {
    return this.props.children;
  }
}

export default Performance;
