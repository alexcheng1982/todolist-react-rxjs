/// <reference types="react" />

import * as React from "react";

function connect(state$, selector = (state) => state) {
  return function wrapWithConnect(WrappedComponent) {
    return class Connect extends React.Component<any, any> {
      subscription: any;

      componentWillMount() {
        this.subscription = state$.map(selector).subscribe(this.setState.bind(this));
      }

      componentWillUnmount() {
        this.subscription.unsubscribe();
      }

      render() {
        return (
          <WrappedComponent {...this.state} {...this.props} />
        );
      }
    };
  }
}

export default connect;