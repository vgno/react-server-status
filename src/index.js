import React from 'react';
import PropTypes from 'prop-types';
import withSideEffect from 'react-side-effect';

function reducePropsToState(propsList) {
    const innermostProps = propsList[propsList.length - 1];
    if (innermostProps) {
        return innermostProps.status;
    }
}

@withSideEffect(reducePropsToState, Function.prototype)
export default class ServerStatus extends React.Component {
    static displayName = 'ServerStatus';

    static propTypes = {
        status: PropTypes.number.isRequired
    }

    render() {
        return React.Children.only(this.props.children);
    }
}
