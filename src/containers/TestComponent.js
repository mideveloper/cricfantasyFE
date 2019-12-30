import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestTest } from '../actions';

class Test extends React.Component {
  componentDidMount() {
    this.props.requestTest();
  }

  render() {
    const { testProps } = this.props;
    return <h1>{testProps}</h1>;
  }
}

const mapStateToProps = state => ({ testProps: state.testReducer });
const mapDispatchToProps = dispatch => bindActionCreators({ requestTest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Test);
