import React from 'react';
import withSideEffect from 'react-side-effect';

function reducePropsToState(propsList) {
    const innermostProps = propsList[propsList.length - 1];
    if (innermostProps) {
        return innermostProps.status;
    }
}

@withSideEffect(reducePropsToState, Function.prototype)
export default class ServerStatus extends React.Component {

    static propTypes = {
        status: React.PropTypes.number.isRequired
    }

    render() {
        return React.Children.only(this.props.children);
    }
}
