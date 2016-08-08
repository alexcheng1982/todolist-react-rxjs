import * as React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import Html from '../../common/helpers/Html';
import routes from '../../common/routes/Main';

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const component = <RouterContext location={renderProps.location} 
        routes={renderProps.routes} 
        components={renderProps.components} 
        params={renderProps.params}
        createElement={React.createElement}
        router={renderProps.router}
        history={renderProps.history} />;
      res.status(200).send('<!doctype html>\n' +
          renderToString(<Html assets={global.webpackIsomorphicTools.assets()} component={component}/>));
    } else {
      res.status(404).send('Not found');
    }
  });
};
