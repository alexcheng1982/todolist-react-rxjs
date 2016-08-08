import * as React from 'react';
import * as ReactDOM from 'react-dom/server';

interface PropTypes {
  assets: any;
  component: any;
}

export default class Html extends React.Component<PropTypes, {}> {
  render(): React.ReactElement<PropTypes> {
    
    const content = this.props.component ? ReactDOM.renderToString(this.props.component) : '';
    return (
      <html>
        <head>
          <title>App</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: content}}/>
          <script src={this.props.assets.javascript.app}/>
        </body>
      </html>
    );
  }
}