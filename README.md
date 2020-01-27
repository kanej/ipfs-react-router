# IPFS React Router

![npm](https://img.shields.io/npm/v/ipfs-react-router?style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/kanej/ipfs-react-router/build?logo=github&style=for-the-badge)

> Better routing for IPFS websites when using React Router

An alternative to `BrowserRouter` or `HashRouter` in [React Router](https://reacttraining.com/react-router/web/guides/quick-start) that sets the basename (website root url path) dependent on how the site is being served over [IPFS](https://ipfs.io).

A site using the `IpfsRouter` can be served with working routing from all of the following:

- http://www.example.com
- http://ipfs.io/ipfs/QmPm8NcEnpjRHmJEciWUv1nV2tBgTb74zgDhkvcxWkjh21/
- http://ipfs.io/ipns/www.example.com/

Out of the box `BrowserRouter` will only allow one basename, forcing you to use `HashRouter` if you are intending to serve the site over an IPFS HTTP gateway. `IpfsRouter` scans the current url to establish which context it is being used in: domain root, IPFS over public gateway, IPNS over public gateway, then sets the basename accordingly.

## Install

```bash
npm install --save ipfs-react-router
```

## Usage

`React Router` expects a top level `Router` component to provide access to the history API. `IpfsRouter` is a drop in replacement for `BrowserRouter`.

```javascript
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import IpfsRouter from 'ipfs-react-router'

function App() {
  return (
    <div className="App">
      <IpfsRouter>
        <Switch>
          <Route exact path="/">
            <h2>Homepage</h2>
          </Route>
          <Route path="/another">
            <h2>Another</h2>
          </Route>
          <Route path="*">
            <p>Not found</p>
          </Route>
        </Switch>
      </IpfsRouter>
    </div>
  )
}

export default App
```

## Contributing

PRs accepted.

To run the tests (jest):

```bash
yarn test
```

Eslint and prettier are used for linting:

```bash
yarn lint
```

To auto-fix linting issues:

```bash
yarn lint:fix
```

## License

MIT © John Kane
